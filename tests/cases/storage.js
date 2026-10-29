// Penyimpanan IndexedDB (D-107 s.d. D-110): antrean tulis, migrasi dari
// localStorage, sinkronisasi antar-tab (driver tiruan), dan driver IndexedDB asli
// (hanya di browser, index.html?selftest).
import * as assert from './assert.js';
import { loadJson } from './env.js';
import { Store, StorageFullError, memoryBackend, keys } from '../../js/core/storage.js';
import { MIGRATION_META, MigrationError, createWriteQueue, openAsyncBackend } from '../../js/core/async-backend.js';
import { deleteIdbDatabase, openIdbDriver } from '../../js/platform/idb.js';
import { listSessions, saveSession } from '../../js/core/session-store.js';
import { buildFromPackage, orderItems } from '../../js/core/blueprint.js';
import { createRng } from '../../js/core/random.js';
import { createSession } from '../../js/core/session.js';

const quotaError = () => Object.assign(new Error('quota'), { name: 'QuotaExceededError' });

// Driver tiruan: atomik per write; fail() -> error dilempar; corrupt mengubah isi tersimpan.
function memoryDriver() {
  const kv = new Map();
  const meta = new Map();
  const d = {
    kv, meta, writes: 0, fail: null, corrupt: false,
    async readAll() { return new Map(kv); },
    async readMeta(name) { return meta.has(name) ? meta.get(name) : null; },
    async write(batch, m = {}) {
      d.writes += 1;
      if (d.fail) throw d.fail();
      for (const [k, v] of batch) {
        if (v === null) kv.delete(k);
        else kv.set(k, d.corrupt ? `${v}!` : v);
      }
      for (const [k, v] of Object.entries(m)) meta.set(k, v);
    },
    async clear() { kv.clear(); meta.clear(); },
  };
  return d;
}

// Sepasang kanal yang saling terhubung, asinkron seperti BroadcastChannel.
function channelPair() {
  const make = () => ({ onmessage: null, peer: null, postMessage(msg) { const to = this.peer; queueMicrotask(() => to.onmessage && to.onmessage({ data: msg })); }, close() {} });
  const a = make();
  const b = make();
  a.peer = b;
  b.peer = a;
  return [a, b];
}

const tick = () => new Promise((r) => setTimeout(r, 0));

function legacyWith(entries) {
  const ls = memoryBackend();
  for (const [k, v] of Object.entries(entries)) ls.setItem(k, v);
  return ls;
}

async function demoSession() {
  const pack = await loadJson('packs/demo/pack.json');
  const rng = createRng(3);
  const pkg = pack.packages[0];
  const built = buildFromPackage(pack, pkg, rng);
  return createSession({
    pack, packageId: pkg.id, packageName: pkg.name, mode: 'latihan',
    config: { durationMinutes: 30, passingGrade: pack.passingGrade, shuffleQuestions: true, shuffleOptions: true, sectionWeights: { mcq: 20, numeric: 10, essay: 30, case: 40 } },
    items: orderItems(built.items, true, rng), rng, now: Date.parse('2026-10-29T08:00:00Z'),
  });
}

export default {
  name: 'penyimpanan',
  cases: [
    {
      name: 'antrean tulis: tulis ke kunci sama digabung, hapus setelah tulis dihormati',
      run: async () => {
        const commits = [];
        const q = createWriteQueue(async (batch) => { commits.push(Object.fromEntries(batch)); });
        q.set('a', '1');
        q.set('a', '2');
        q.set('b', 'x');
        await q.flush();
        assert.deepEqual(commits, [{ a: '2', b: 'x' }]);
        q.set('c', '1');
        q.remove('c');
        await q.flush();
        assert.deepEqual(commits[1], { c: null });
        await q.flush();
        assert.equal(commits.length, 2, 'flush tanpa tulis baru tidak membuat batch');
        assert.equal(q.pendingCount, 0);
      },
    },
    {
      name: 'antrean tulis: kuota habis -> flush ditolak StorageFullError, pendengar menerima kunci',
      run: async () => {
        let fail = true;
        const q = createWriteQueue(async () => { if (fail) throw quotaError(); });
        const seen = [];
        q.onError((e, ks) => seen.push([e.name, ks]));
        q.set('caSim:demo:bank', '{}');
        await assert.rejects(() => q.flush(), /penuh/);
        assert.deepEqual(seen, [['StorageFullError', ['caSim:demo:bank']]]);
        fail = false;
        q.set('caSim:demo:bank', '{}');
        await q.flush();
        assert.ok(new StorageFullError() instanceof Error);
      },
    },
    {
      name: 'migrasi: kunci caSim:* tersalin utuh sekali, localStorage tidak berubah (D-108)',
      run: async () => {
        const legacy = legacyWith({ 'caSim:demo:sessions': '["s1"]', 'caSim:_app:settings': '{"sound":true}', lain: 'biarkan' });
        const driver = memoryDriver();
        const backend = await openAsyncBackend({ driver, legacy, now: () => '2026-10-29T08:00:00Z' });
        assert.equal(driver.kv.size, 2);
        assert.equal(driver.kv.get('caSim:demo:sessions'), '["s1"]');
        assert.ok(!driver.kv.has('lain'));
        assert.deepEqual(driver.meta.get(MIGRATION_META), { from: 'localStorage', at: '2026-10-29T08:00:00Z', keys: 2, chars: 20 });
        assert.equal(legacy.length, 3);
        assert.equal(legacy.getItem('caSim:demo:sessions'), '["s1"]');
        assert.equal(new Store(backend).getJson(keys.settings).sound, true);
        // Dibuka ulang: tidak dimigrasi lagi walau localStorage berubah.
        legacy.setItem('caSim:demo:sessions', '["lama"]');
        const writes = driver.writes;
        const again = await openAsyncBackend({ driver, legacy });
        assert.equal(driver.writes, writes);
        assert.equal(again.getItem('caSim:demo:sessions'), '["s1"]');
      },
    },
    {
      name: 'migrasi: isi tidak cocok -> MigrationError dan penyimpanan baru dikosongkan',
      run: async () => {
        const driver = memoryDriver();
        driver.corrupt = true;
        await assert.rejects(() => openAsyncBackend({ driver, legacy: legacyWith({ 'caSim:demo:active': '"s1"' }) }), /tidak dapat dipindahkan/);
        assert.equal(driver.kv.size, 0);
        assert.equal(driver.meta.size, 0);
        assert.ok(new MigrationError('x') instanceof Error);
      },
    },
    {
      name: 'Store di atas IndexedDB tiruan: sesi tersimpan, dibaca ulang setelah dibuka kembali',
      run: async () => {
        const driver = memoryDriver();
        const store = new Store(await openAsyncBackend({ driver }));
        const s = await demoSession();
        saveSession(store, s);
        assert.equal(store.getJson(keys.active('demo')), s.sessionId, 'baca langsung dari memori');
        await store.flush();
        const reopened = new Store(await openAsyncBackend({ driver }));
        const listed = listSessions(reopened, 'demo');
        assert.equal(listed.sessions.length, 1);
        assert.equal(listed.failures.length, 0, 'sesi lolos validasi skema setelah dibaca ulang');
        assert.deepEqual(reopened.keysWithPrefix('caSim:demo:').sort(), store.keysWithPrefix('caSim:demo:').sort());
        reopened.remove(keys.active('demo'));
        await reopened.flush();
        assert.ok(!driver.kv.has(keys.active('demo')));
      },
    },
    {
      name: 'Store di atas IndexedDB tiruan: tulis gagal dilaporkan, data tetap terbaca di memori',
      run: async () => {
        const driver = memoryDriver();
        const store = new Store(await openAsyncBackend({ driver }));
        const errors = [];
        store.onWriteError((e, ks) => errors.push([e.name, ks]));
        driver.fail = quotaError;
        store.setJson(keys.bank('demo'), { besar: true });
        await assert.rejects(() => store.flush(), /penuh/);
        assert.deepEqual(errors, [['StorageFullError', [keys.bank('demo')]]]);
        assert.equal(store.getJson(keys.bank('demo')).besar, true);
        assert.ok(!driver.kv.has(keys.bank('demo')));
      },
    },
    {
      name: 'dua tab: tulis di satu tab terlihat di tab lain, keduanya tahu ada tab lain (D-109)',
      run: async () => {
        const driver = memoryDriver();
        const [ca, cb] = channelPair();
        const a = await openAsyncBackend({ driver, channel: ca });
        const b = await openAsyncBackend({ driver, channel: cb });
        let peersA = 0;
        let peersB = 0;
        a.onPeer(() => { peersA += 1; });
        b.onPeer(() => { peersB += 1; });
        await tick();
        a.setItem('caSim:demo:bank', '{"v":2}');
        await tick();
        assert.equal(b.getItem('caSim:demo:bank'), '{"v":2}');
        assert.equal(b.length, 1);
        b.removeItem('caSim:demo:bank');
        await tick();
        assert.equal(a.getItem('caSim:demo:bank'), null);
        await a.flush();
        await b.flush();
        assert.ok(!driver.kv.has('caSim:demo:bank'));
        assert.equal(peersA, 1);
        assert.equal(peersB, 1);
      },
    },
    {
      browserOnly: true,
      name: 'driver IndexedDB asli: tulis, baca ulang setelah ditutup, meta, hapus',
      run: async () => {
        const name = `caSim-selftest-${Date.now()}`;
        try {
          const d1 = await openIdbDriver({ name });
          assert.equal(await d1.readMeta(MIGRATION_META), null);
          await d1.write(new Map([['caSim:t:a', '{"x":1}'], ['caSim:t:b', '"y"']]), { [MIGRATION_META]: { from: 'kosong' } });
          await d1.write(new Map([['caSim:t:b', null]]));
          d1.close();
          const d2 = await openIdbDriver({ name });
          const all = await d2.readAll();
          assert.deepEqual([...all], [['caSim:t:a', '{"x":1}']]);
          assert.deepEqual(await d2.readMeta(MIGRATION_META), { from: 'kosong' });
          const backend = await openAsyncBackend({ driver: d2 });
          backend.setItem('caSim:t:c', 'z'.repeat(200000));
          await backend.flush();
          assert.equal((await d2.readAll()).get('caSim:t:c').length, 200000);
          await d2.clear();
          assert.equal((await d2.readAll()).size, 0);
          d2.close();
        } finally {
          await deleteIdbDatabase(name);
        }
      },
    },
  ],
};
