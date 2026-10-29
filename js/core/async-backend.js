// Backend Store di atas penyimpanan asinkron (IndexedDB, D-107). Baca selalu dari
// memori; tulis digabung per kunci lalu dikirim per batch ke driver, sehingga
// antarmuka Store tetap sinkron. Migrasi satu kali dari localStorage (D-108) dan
// sinkronisasi antar-tab (D-109). Murni: driver, localStorage lama, dan kanal
// antar-tab disuntikkan agar dapat dites di Node.
//
// driver: { readAll() -> Promise<Map<kunci, teks>>, readMeta(nama) -> Promise<nilai|null>,
//           write(batch: Map<kunci, teks|null>, meta?: {nama: nilai}) -> Promise (satu transaksi),
//           clear() -> Promise }
// legacy: objek berantarmuka localStorage, atau null.
// channel: objek berantarmuka BroadcastChannel (postMessage, onmessage, close), atau null.

import { StorageFullError, isQuotaError } from './storage.js';

export const NAMESPACE = 'caSim:';
export const MIGRATION_META = 'migration';

export class MigrationError extends Error {
  constructor(detail) {
    super(`Data lama tidak dapat dipindahkan ke penyimpanan baru (${detail}). Aplikasi tetap memakai penyimpanan lama.`);
    this.name = 'MigrationError';
  }
}

// commit(batch) -> Promise; batch = Map<kunci, teks|null>, null = hapus. Tulis ke
// kunci yang sama sebelum batch berangkat digabung (nilai terakhir menang).
export function createWriteQueue(commit, { schedule = queueMicrotask } = {}) {
  let pending = new Map();
  let scheduled = false;
  let chain = Promise.resolve();
  let failures = 0;
  let lastError = null;
  const listeners = [];

  function kick() {
    if (scheduled) return;
    scheduled = true;
    chain = chain
      .then(() => new Promise((resolve) => schedule(resolve)))
      .then(async () => {
        scheduled = false;
        const batch = pending;
        pending = new Map();
        if (!batch.size) return;
        try {
          await commit(batch);
        } catch (e) {
          const error = isQuotaError(e) ? new StorageFullError() : e;
          failures += 1;
          lastError = error;
          for (const fn of listeners) {
            try { fn(error, [...batch.keys()]); } catch { /* pendengar tidak boleh memutus antrean */ }
          }
        }
      });
  }

  return {
    set(key, value) { pending.set(key, value); kick(); },
    remove(key) { pending.set(key, null); kick(); },
    // Selesai setelah semua tulis yang sudah diterima tersimpan; ditolak dengan
    // error terakhir bila ada batch yang gagal sejak flush dipanggil.
    flush() {
      const before = failures;
      if (pending.size) kick();
      return chain.then(() => { if (failures > before) throw lastError; });
    },
    onError(fn) { listeners.push(fn); },
    get pendingCount() { return pending.size; },
  };
}

// Menyalin semua kunci caSim:* dari localStorage dalam satu transaksi, lalu
// mencocokkan isi hasil baca ulang. localStorage tidak diubah (D-108).
export async function migrateLegacy(driver, legacy, now) {
  const entries = new Map();
  if (legacy) {
    for (let i = 0; i < legacy.length; i++) {
      const k = legacy.key(i);
      if (k && k.startsWith(NAMESPACE)) entries.set(k, legacy.getItem(k));
    }
  }
  let chars = 0;
  for (const v of entries.values()) chars += v.length;
  const meta = { from: legacy ? 'localStorage' : 'kosong', at: now(), keys: entries.size, chars };
  await driver.write(entries, { [MIGRATION_META]: meta });
  const check = await driver.readAll();
  const missing = [...entries].filter(([k, v]) => check.get(k) !== v).length;
  if (missing) {
    await driver.clear();
    throw new MigrationError(`${missing} dari ${entries.size} data tidak cocok`);
  }
  return meta;
}

export async function openAsyncBackend({
  driver, legacy = null, channel = null, now = () => new Date().toISOString(), schedule,
}) {
  let migration = await driver.readMeta(MIGRATION_META);
  if (!migration) migration = await migrateLegacy(driver, legacy, now);
  const data = await driver.readAll();
  const queue = createWriteQueue((batch) => driver.write(batch), schedule ? { schedule } : {});
  let keyList = null;
  let peerSeen = false;
  const peers = [];

  const post = (msg) => {
    if (!channel) return;
    try { channel.postMessage(msg); } catch { /* kanal ditutup */ }
  };
  const notePeer = () => {
    if (peerSeen) return;
    peerSeen = true;
    for (const fn of peers) fn();
  };

  if (channel) {
    // Tab lain sudah menulis ke driver; di sini cukup memperbarui memori.
    channel.onmessage = (e) => {
      const msg = e.data || {};
      if (msg.type === 'set') {
        if (!data.has(msg.key)) keyList = null;
        data.set(msg.key, msg.value);
      } else if (msg.type === 'remove') {
        if (data.delete(msg.key)) keyList = null;
      } else if (msg.type === 'hello') {
        post({ type: 'here' });
        notePeer();
      } else if (msg.type === 'here') {
        notePeer();
      }
    };
    post({ type: 'hello' });
  }

  return {
    kind: 'indexeddb',
    migration,
    getItem: (k) => (data.has(k) ? data.get(k) : null),
    setItem(k, v) {
      const value = String(v);
      if (!data.has(k)) keyList = null;
      data.set(k, value);
      queue.set(k, value);
      post({ type: 'set', key: k, value });
    },
    removeItem(k) {
      if (!data.delete(k)) return;
      keyList = null;
      queue.remove(k);
      post({ type: 'remove', key: k });
    },
    key(i) {
      if (!keyList) keyList = [...data.keys()];
      return keyList[i] ?? null;
    },
    get length() { return data.size; },
    flush: () => queue.flush(),
    onWriteError: (fn) => queue.onError(fn),
    // fn() dipanggil sekali bila aplikasi juga terbuka di tab/jendela lain.
    onPeer(fn) {
      peers.push(fn);
      if (peerSeen) fn();
    },
  };
}
