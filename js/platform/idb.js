// Driver IndexedDB untuk js/core/async-backend.js (D-107): database caSim versi 1,
// object store kv (kunci -> teks JSON, sama dengan isi localStorage lama) dan
// meta (penanda migrasi). Satu transaksi per batch tulis, durability bawaan (D-110).

export const DB_NAME = 'caSim';
const DB_VERSION = 1;
const KV = 'kv';
const META = 'meta';

function request(r) {
  return new Promise((resolve, reject) => {
    r.onsuccess = () => resolve(r.result);
    r.onerror = () => reject(r.error);
  });
}

function completion(tx) {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error || new Error('Transaksi penyimpanan dibatalkan.'));
  });
}

// Membuka database. Ditolak bila IndexedDB tidak ada, diblokir, atau tidak
// merespons dalam timeoutMs (sebagian Safari lama dapat menggantung saat open).
export function openIdbDriver({ idb = globalThis.indexedDB, name = DB_NAME, timeoutMs = 8000 } = {}) {
  return new Promise((resolve, reject) => {
    if (!idb) {
      reject(new Error('IndexedDB tidak tersedia.'));
      return;
    }
    let settled = false;
    const fail = (e) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      reject(e);
    };
    const timer = setTimeout(() => fail(new Error('IndexedDB tidak merespons.')), timeoutMs);
    let r;
    try {
      r = idb.open(name, DB_VERSION);
    } catch (e) {
      fail(e);
      return;
    }
    r.onupgradeneeded = () => {
      const db = r.result;
      if (!db.objectStoreNames.contains(KV)) db.createObjectStore(KV);
      if (!db.objectStoreNames.contains(META)) db.createObjectStore(META);
    };
    r.onsuccess = () => {
      const db = r.result;
      if (settled) {
        db.close();
        return;
      }
      settled = true;
      clearTimeout(timer);
      // Versi database berikutnya dari tab lain tidak terhalang tab ini.
      db.onversionchange = () => db.close();
      resolve(driverFor(db));
    };
    r.onerror = () => fail(r.error);
  });
}

function driverFor(db) {
  return {
    async readAll() {
      const store = db.transaction(KV, 'readonly').objectStore(KV);
      const [ks, vs] = await Promise.all([request(store.getAllKeys()), request(store.getAll())]);
      return new Map(ks.map((k, i) => [k, vs[i]]));
    },
    async readMeta(name) {
      const value = await request(db.transaction(META, 'readonly').objectStore(META).get(name));
      return value ?? null;
    },
    write(batch, meta = {}) {
      const tx = db.transaction([KV, META], 'readwrite');
      const done = completion(tx);
      const kv = tx.objectStore(KV);
      for (const [k, v] of batch) {
        if (v === null) kv.delete(k);
        else kv.put(v, k);
      }
      const m = tx.objectStore(META);
      for (const [k, v] of Object.entries(meta)) m.put(v, k);
      if (tx.commit) tx.commit();
      return done;
    },
    clear() {
      const tx = db.transaction([KV, META], 'readwrite');
      const done = completion(tx);
      tx.objectStore(KV).clear();
      tx.objectStore(META).clear();
      return done;
    },
    close() {
      db.close();
    },
  };
}

// Untuk self-test: menghapus database uji.
export function deleteIdbDatabase(name, idb = globalThis.indexedDB) {
  return new Promise((resolve, reject) => {
    const r = idb.deleteDatabase(name);
    r.onsuccess = () => resolve();
    r.onerror = () => reject(r.error);
    r.onblocked = () => resolve();
  });
}

// Kanal antar-tab (D-109), atau null bila browser tidak mendukung.
export function openStoreChannel(name = 'caSim-store') {
  try {
    return typeof BroadcastChannel === 'function' ? new BroadcastChannel(name) : null;
  } catch {
    return null;
  }
}
