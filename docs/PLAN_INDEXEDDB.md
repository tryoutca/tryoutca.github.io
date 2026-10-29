# Rencana Fase S1: Penyimpanan IndexedDB

**Status 2026-10-29: dikerjakan.** D-107 s.d. D-110 disetujui pemilik; perbedaan
dari rancangan dicatat di D-111, hasil uji di `docs/TEST_REPORT.md` (S1-01 s.d.
S1-11). Fase ini mengganti tempat
penyimpanan data perangkat dari localStorage ke IndexedDB tanpa backend, tanpa
library, dan tanpa mengubah cara modul lain memakai `Store`.

## 1. Masalah

| Data | Kunci | Ukuran sekarang (2026-10-29) |
|---|---|---|
| Pack impor | `caSim:<id>:pack` | PK 1,55 MB (185 soal), MSK 1,48 MB |
| Bank soal | `caSim:<id>:bank` | ≥ ukuran pack + data review |
| Sesi | `caSim:<id>:session:<sid>` | 50-120 KB per sesi SIM (D-31) |

Kuota localStorage sekitar 5 MB per origin (Chrome/Edge menghitung karakter
UTF-16, Safari ±5 MB). Perangkat pengelola yang memegang bank PK dan MSK sudah
membutuhkan ±6 MB, sehingga kemungkinan besar sudah atau hampir penuh. Peserta
akan penuh setelah puluhan sesi. Dengan ±9 KB per soal, bank 500 soal per mata
ujian (±4,5 MB) tidak muat sama sekali.

IndexedDB memakai kuota origin dari `navigator.storage` (Chrome: hingga ±60%
ruang disk; Safari 17+: ±60% disk, Safari 16: ±1 GB lalu meminta izin). Dua
batasan tetap berlaku: data dapat dihapus Safari bila situs lama tidak dibuka dan
belum dipasang (SPEC 2a, sudah ditangani `navigator.storage.persist()`), dan
mode privat tetap memakai cadangan memori.

## 2. Prinsip rancangan

1. **Antarmuka `Store` tidak berubah.** `getJson`, `setJson`, `remove`,
   `keysWithPrefix`, dan `backend.getItem` tetap sinkron. Pemanggil di
   `session-store.js`, `bank.js`, `pack-loader.js`, `app.js`, dan
   `bank-manager.js` tidak diubah.
2. **Cache memori + tulis belakang (write-behind).** Saat aplikasi dibuka, semua
   rekaman `caSim:*` dibaca dari IndexedDB ke `Map`. Baca selalu dari `Map`.
   Tulis memperbarui `Map` seketika lalu dikirim ke IndexedDB secara asinkron.
   IndexedDB hanya asinkron, dan cara ini menghindari mengubah semua alur menjadi
   `async`.
3. **"Tersimpan" berarti benar-benar tersimpan.** Label di ruang ujian baru
   diperbarui setelah transaksi IndexedDB selesai (`oncomplete`), bukan saat
   antrean diterima.
4. **Tidak ada data yang dihapus diam-diam** (SPEC 4). Salinan di localStorage
   dibiarkan setelah migrasi.

## 3. Komponen

| Berkas | Isi | Jenis |
|---|---|---|
| `js/core/write-queue.js` (baru) | Antrean tulis murni: gabungkan tulis per kunci (nilai terakhir menang), satu batch per tick, `flush()` → Promise, lapor error ke pendengar. Tidak menyentuh `indexedDB`; driver disuntikkan. | Logika murni, dites `node --test` |
| `js/platform/idb.js` (baru) | Driver IndexedDB: database `caSim`, versi 1, object store `kv` (`key` → teks JSON) dan `meta` (penanda migrasi). Fungsi `openIdbBackend()` → backend berantarmuka sama dengan localStorage (`getItem`, `setItem`, `removeItem`, `key`, `length`) + `flush()` + `onError()`. | Platform (browser) |
| `js/core/storage.js` | Tambah `Store.flush()` (backend tanpa `flush` → `Promise.resolve()`). `StorageFullError` dan `isQuotaError` dipakai ulang untuk error asinkron. | Ubah kecil |
| `js/ui/app.js` | `createStore` menjadi `async`. Urutan pilihan: IndexedDB → localStorage → memori. Pendengar error tulis menampilkan dialog "Penyimpanan penuh" + unduh cadangan, sama seperti `persist()` sekarang. | Ubah |
| `js/ui/exam-room.js` | `flushSave` menunggu `app.store.flush()` sebelum menulis "Tersimpan hh.mm". Bila gagal, label menjadi "Belum tersimpan". | Ubah kecil |
| `js/ui/settings.js` | Baris "Penyimpanan: IndexedDB, terpakai X MB dari ±Y MB" dari `navigator.storage.estimate()`. | Ubah kecil |
| Berkas turunan | `service-worker.js` (`build-sw.mjs`), `dist/simulator-offline.html` (`build-offline.mjs`). | Bangun ulang |

## 4. Migrasi dari localStorage

Dijalankan sekali saat `openIdbBackend()` mendapati `meta.migration` belum ada:

1. Baca semua kunci berawalan `caSim:` dari localStorage.
2. Tulis semuanya ke `kv` dalam **satu transaksi**, termasuk
   `meta.migration = { from: 'localStorage', at, keys, chars }`.
3. Setelah `oncomplete`, baca ulang dan cocokkan jumlah kunci dan total
   karakter. Bila tidak cocok, IndexedDB dikosongkan, aplikasi tetap memakai
   localStorage, dan kejadian ini ditampilkan sebagai pemberitahuan.
4. localStorage **tidak dihapus**. Tombol "Hapus salinan lama" di Pengaturan
   baru diusulkan di fase berikutnya, dengan konfirmasi.

Migrasi bersifat idempoten: transaksi yang gagal di tengah tidak menulis apa pun,
sehingga percobaan berikutnya mulai dari awal.

## 5. Kasus khusus

| Kasus | Penanganan |
|---|---|
| Kuota habis saat tulis asinkron | Transaksi `onerror`/`onabort` QuotaExceededError → `StorageFullError` ke pendengar → dialog unduh cadangan sesi (pesan SPEC 4). Data tetap di memori sampai halaman ditutup. |
| Halaman ditutup sebelum tulis selesai | Debounce autosave 600 ms tetap. `flush()` dipanggil pada `visibilitychange` (hidden) dan `pagehide`. Risiko kehilangan maksimal ±1 detik ketikan terakhir, sama dengan sekarang. |
| Dua tab terbuka | Setiap tab memegang `Map` sendiri dan dapat saling menimpa bank. Usulan: `BroadcastChannel('caSim-store')` meneruskan setiap tulis ke tab lain agar `Map` mereka ikut diperbarui. Ruang ujian di tab kedua menampilkan peringatan "Aplikasi terbuka di tab lain". |
| Versi lama aplikasi (cache service worker) | Versi lama hanya membaca localStorage, jadi tidak melihat data baru. Kunci sesi D-70 mencegah pergantian versi di tengah ujian; setelah fase ini terpasang, versi lama tidak dilayani lagi. Dicatat sebagai keterbatasan. |
| Mode privat / IndexedDB diblokir | `indexedDB.open` gagal → localStorage → memori, dengan pemberitahuan yang sudah ada. |
| `file://` (`dist/simulator-offline.html`) | Chromium mendukung IndexedDB di `file://`. Datanya terpisah dari situs https, sama seperti localStorage sekarang. **BELUM DIVERIFIKASI** di Safari. |
| Ukuran memori | Semua data dimuat ke memori. Puluhan MB masih wajar. Bila bank sudah ratusan MB, pemuatan malas per kunci menjadi bagian Opsi 2 (pack terpecah). |

## 6. Tes

Otomatis (`node --test` dan `?selftest`, kasus di `tests/cases/`):
- `write-queue`: tulis beruntun ke kunci sama tergabung jadi satu; urutan
  `remove` setelah `set` dihormati; `flush()` menunggu batch berjalan; error
  driver menjadi `StorageFullError` bila quota.
- Migrasi dengan driver palsu: data localStorage tersalin utuh, idempoten,
  gagal di tengah tidak meninggalkan data sebagian, localStorage tidak berubah.
- Tes `Store` yang ada tetap lulus tanpa perubahan (memoryBackend).
- `?selftest` di browser: tes driver `idb.js` sungguhan (buka, tulis, baca ulang
  setelah buka ulang database, hapus database tes).

Manual (dicatat di `docs/TEST_REPORT.md`):
1. Edge/Chrome Windows: perangkat dengan bank PK + MSK → buka versi baru →
   data lama tampil lengkap, Riwayat lengkap, bank lengkap.
2. Simulasi data besar: bank 20 MB buatan → simpan dan buka ulang berhasil.
3. Safari iOS 16+ (terpasang di Layar Utama dan tidak): migrasi, ujian, tutup
   paksa di tengah ujian, buka lagi → jawaban terakhir ada.
4. Mode pesawat: aplikasi offline tetap menyimpan.
5. Dua tab: ubah bank di tab A → tab B ikut berubah.
6. `dist/simulator-offline.html` di Edge (klik ganda).

## 7. Keputusan yang perlu persetujuan pemilik

| Usulan ID | Keputusan | Catatan |
|---|---|---|
| D-107 | **Mengubah SPEC 4**: "Penyimpanan: localStorage ber-namespace…" menjadi IndexedDB (database `caSim`, kunci yang sama), dengan localStorage dan memori sebagai cadangan. | Fase ini menyimpang dari SPEC, jadi wajib disetujui. |
| D-108 | Salinan localStorage dibiarkan setelah migrasi; penghapusan hanya lewat tombol dengan konfirmasi di fase berikutnya. | SPEC 4: tidak menghapus diam-diam. |
| D-109 | Dua tab disinkronkan lewat `BroadcastChannel`, bukan dikunci satu tab. | Alternatif: tab kedua hanya baca (Web Locks). Lebih aman untuk bank, tetapi membingungkan peserta. |
| D-110 | Durability transaksi `'default'`, bukan `'strict'`. | `'strict'` lebih tahan mati listrik, tetapi lebih lambat. Autosave 600 ms sudah membatasi risiko. |

## 8. Pemeriksaan cepat sebelum mulai

Untuk memastikan seberapa dekat perangkat pengelola dengan batas, jalankan di
konsol browser (F12) pada https://tryoutca.github.io/:

```js
Object.keys(localStorage).filter(k => k.startsWith('caSim:'))
  .map(k => [k, (localStorage.getItem(k).length / 1e6).toFixed(2) + ' MB'])
```

## 9. Perkiraan lingkup

Satu fase. Kode baru ±300-400 baris (antrean, driver, migrasi) + ±250 baris tes.
Perubahan di modul yang ada kecil karena antarmuka `Store` dipertahankan. Commit
akhir fase: "Fase S1: penyimpanan IndexedDB".
