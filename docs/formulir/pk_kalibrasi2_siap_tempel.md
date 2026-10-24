# PK kalibrasi tahap 2 — siap tempel

Formulir soal kalibrasi PK untuk Prompt D v1.1 (`prompts/prompt_kalibrasi_soal.md`), disusun 2026-10-24 (D-102).
Isi: (A) revisi 12 soal kalibrasi lama agar sesuai standar waktu, dan (B) 8 soal kalibrasi baru untuk tingkat mudah dan sangat sulit: 4 PG, 2 esai, 1 kasus mini, 1 kasus komprehensif (4 batch, B94-B97).

Mengapa: gelombang 4 menyusun batch per tingkat kesulitan (mis. 10 PG mudah). Aplikasi memilih soal kalibrasi secara acak dari tipe yang sama tanpa melihat tingkat. Ke-12 soal kalibrasi lama semuanya tingkat sedang/sulit dan melebihi standar waktu (perkiraan waktu, dan sebagian juga panjang soal), jadi mudah dikenali di antara soal baru yang lebih pendek.

Cara pakai:
1. Ganti instruksi Project Claude "Penyusun Kalibrasi" dengan **Prompt D v1.1**.
2. Bagian A: kirim satu blok revisi per pesan ke percakapan tempat soal itu dibuat (JSON soal asli ada di sana). Bila percakapan itu tidak tersedia, tempel JSON soal dari berkas ekspor pack terakhir (status tetap CALIBRATION). Impor hasilnya: soal dengan ID sama diperbarui di bank.
3. Bagian B: buka satu percakapan baru, lalu salin satu blok utuh per pesan, berurutan dari atas.
4. Impor setiap hasil di Pengelola Bank Soal (batch kalibrasi diimpor terpisah). Buka pratinjau tiap soal dan cocokkan cacatnya dengan catatan "Soal kalibrasi: cacat sengaja ...".
5. Formulir dan tabel "Kunci kalibrasi" jangan pernah ditempel ke Project reviewer. Soal kalibrasi hanya disimpan di bank perangkat; jangan dipublikasikan ke pack.

| Bagian | Batch | Tipe | Jumlah | ID | Kesulitan | Cacat |
|---|---|---|---|---|---|---|
| A | PK-B90 | PG | 6 | PK-MCQ-901 s.d. 906 | sedang 3, sulit 3 | tetap |
| A | PK-B91 | Esai | 4 | PK-ESA-901 s.d. 904 | sedang 2, sulit 2 | tetap |
| A | PK-B92, B93 | Kasus | 2 | PK-KAS-901, 902 | sedang 1 (mini), sulit 1 (komprehensif) | tetap |
| B | PK-B94 | PG | 4 | PK-MCQ-907 s.d. 910 | mudah 2, sangat sulit 2 | PENGECOH 1, KUNCI 1, GANDA 1, PERIODE 1 |
| B | PK-B95 | Esai | 2 | PK-ESA-905 s.d. 906 | mudah 1, sangat sulit 1 | RUBRIK 1, IDEAL 1 |
| B | PK-B96 | Kasus mini | 1 | PK-KAS-903 | mudah 1 | DATA 1 |
| B | PK-B97 | Kasus komprehensif | 1 | PK-KAS-904 | sangat sulit 1 | RUBRIK 1 |

## A1. Revisi PK-B90 (mcq)
```
REVISI KALIBRASI (standar waktu Prompt D v1.1)
Batch ID: PK-B90 (soal PK-MCQ-901 s.d. 906)
Soal ini disusun sebelum standar waktu berlaku dan melebihi batas tingkatnya. Revisi agar sesuai bagian "Standar waktu dan tingkat kesulitan":
- estimatedMinutes = standar: sedang 1.5, sulit 2.5.
- Pendekkan stem dan opsi sampai batas: sedang ≤ 120 kata, sulit ≤ 160 kata (stem + teks keempat opsi). Penjelasan tambahan pindahkan ke explanation.
- Kode cacat, defectDimension, letak cacat, answerKey, tingkat kesulitan, dan topik tetap. Pastikan cacat masih dapat ditemukan dan tidak muncul cacat kedua.
Temuan pemeriksaan aplikasi:
- PK-MCQ-901 (sedang): 2 menit; stem dan opsi 126 kata.
- PK-MCQ-902 (sulit): 3 menit; panjang sudah sesuai.
- PK-MCQ-903 (sulit): 3 menit; stem dan opsi 198 kata.
- PK-MCQ-904 (sedang): 2 menit; stem dan opsi 148 kata.
- PK-MCQ-905 (sulit): 3 menit; panjang sudah sesuai.
- PK-MCQ-906 (sedang): 2 menit; stem dan opsi 138 kata.
Keluarkan batch berisi keenam soal hasil revisi dengan tabel Kunci kalibrasi.
```

## A2. Revisi PK-B91 (essay)
```
REVISI KALIBRASI (standar waktu Prompt D v1.1)
Batch ID: PK-B91 (soal PK-ESA-901 s.d. 904)
Soal ini disusun sebelum standar waktu berlaku dan melebihi batas tingkatnya. Revisi agar sesuai bagian "Standar waktu dan tingkat kesulitan":
- estimatedMinutes = standar: sedang 10, sulit 15.
- Batas: sedang stem ≤ 150 kata dan jawaban ideal ≤ 170 kata; sulit stem ≤ 200 kata dan jawaban ideal ≤ 250 kata. Jawaban ideal cukup untuk nilai penuh; uraian tambahan pindahkan ke explanation. Sesuaikan rubrik dengan jawaban ideal yang lebih pendek, jumlah tetap 10.
- Kode cacat, defectDimension, letak cacat, tingkat kesulitan, dan topik tetap. Pastikan cacat masih dapat ditemukan dan tidak muncul cacat kedua.
Temuan pemeriksaan aplikasi:
- PK-ESA-901 (sedang): 20 menit; stem 239 kata; jawaban ideal 323 kata.
- PK-ESA-902 (sulit): 25 menit; panjang sudah sesuai.
- PK-ESA-903 (sedang): 20 menit; stem 171 kata; jawaban ideal 284 kata.
- PK-ESA-904 (sulit): 25 menit; stem 232 kata; jawaban ideal 265 kata.
Keluarkan batch berisi keempat soal hasil revisi dengan tabel Kunci kalibrasi.
```

## A3. Revisi PK-B92 dan PK-B93 (case)
Kirim dua pesan terpisah: satu untuk PK-B92 (PK-KAS-901), satu untuk PK-B93 (PK-KAS-902).
```
REVISI KALIBRASI (standar waktu Prompt D v1.1)
Batch ID: PK-B92 (soal PK-KAS-901, kasus mini sedang)
Soal ini disusun sebelum standar waktu berlaku. Revisi agar sesuai bagian "Standar waktu dan tingkat kesulitan":
- estimatedMinutes = 20 (standar kasus mini sedang).
- Narasi + data ≤ 400 kata; 2-3 sub; jawaban ideal semua sub ≤ 320 kata. Uraian tambahan pindahkan ke explanation; sesuaikan rubrik, jumlah tetap 20.
- Kode cacat DATA, letak cacat, dan angka yang tidak konsisten tetap; data lain tetap konsisten.
Temuan pemeriksaan aplikasi: 35 menit; narasi dan data 507 kata; jawaban ideal 466 kata.
Keluarkan batch berisi soal hasil revisi dengan tabel Kunci kalibrasi.
```
```
REVISI KALIBRASI (standar waktu Prompt D v1.1)
Batch ID: PK-B93 (soal PK-KAS-902, kasus komprehensif sulit)
Soal ini disusun sebelum standar waktu berlaku. Revisi agar sesuai bagian "Standar waktu dan tingkat kesulitan":
- estimatedMinutes = 40 (standar kasus komprehensif sulit).
- Panjang sudah sesuai (narasi + data ≤ 700 kata, jawaban ideal semua sub ≤ 600 kata); ubah estimatedMinutes saja.
- Kode cacat IDEAL dan letaknya tetap.
Temuan pemeriksaan aplikasi: 50 menit.
Keluarkan batch berisi soal hasil revisi dengan tabel Kunci kalibrasi.
```

## B1. PK-B94 (mcq)
```
FORMULIR BATCH KALIBRASI
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B94
Tipe: mcq | Jumlah: 4 | ID mulai: PK-MCQ-907
Sebaran topik: T01 1, T12 1, T10 1, T03 1
Sebaran kesulitan: mudah 2, sangat_sulit 2
Ukuran kasus: -
Level kognitif: C2-C6
Sebaran cacat (urut ID):
- PK-MCQ-907 (T01, mudah, teori): PENGECOH. Karakteristik kualitatif fundamental vs peningkat dalam kerangka konseptual; dua distraktor menyebut hal yang bukan karakteristik kualitatif dan tidak berhubungan dengan pelaporan keuangan.
- PK-MCQ-908 (T12, mudah, teori): KUNCI. Indikator bahwa entitas bertindak sebagai prinsipal PSAK 115 (72); kunci menunjuk indikator agen (entitas menerima komisi tetap), padahal opsi yang benar (entitas mengendalikan barang sebelum dialihkan) ada di antara distraktor.
- PK-MCQ-909 (T10, sangat sulit, analisis): GANDA. Penilaian pengendalian PSAK 110 (65) atas entitas yang sahamnya dialihkan ke holding fiktif, dengan hak suara potensial dan perjanjian pemegang saham (tema 7); data di stem membuat satu distraktor sama-sama dapat dibenarkan.
- PK-MCQ-910 (T03, sangat sulit, analisis): PERIODE. Peristiwa setelah periode pelaporan PSAK 210 (8) yang memicu penurunan nilai aset saat tarif dagang yang diasumsikan berubah (tema 3); stem tidak menyebut tanggal pelaporan atau tanggal laporan keuangan diotorisasi untuk terbit, padahal klasifikasi penyesuai atau nonpenyesuai bergantung padanya.
Catatan khusus:
- Soal mudah: satu konsep, stem + opsi ≤ 90 kata, tanpa hitungan, estimatedMinutes 1. Soal sangat sulit: integrasi minimal 2 konsep, stem + opsi ≤ 200 kata, estimatedMinutes 3.5. Nilai uang dalam Rupiah; sebut satuan dan aturan pembulatan di stem.
- Sebaran kunci (huruf di answerKey): setiap huruf A-D paling banyak 1.
- Panjang dan gaya setara soal gelombang 4 setingkat; jangan lebih panjang dari soal biasa.
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif (kecuali kekeliruan itu adalah cacat yang ditetapkan).
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md. Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)".
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian. Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 165, PK-ESA-001 s.d. 055, PK-KAS-001 s.d. 031, dan soal kalibrasi 901-906).
- Konteks ekonomi Indonesia dan global 2023-2026 serta tantangan ke depan seperti soal biasa: fakta terverifikasi boleh disebut dengan tanggal dan sumbernya; fakta yang tidak dapat dipastikan dan proyeksi ke depan dijadikan skenario atau asumsi; angka pasar ditulis "diasumsikan"; perusahaan dan tokoh fiktif. Semua informasi untuk menjawab ada di soal, KECUALI pada cacat PERIODE yang memang sengaja menghilangkannya.
- Tema pilihan: suku bunga tinggi lalu turun; pelemahan rupiah; tarif resiprokal Amerika Serikat (diumumkan 2 April 2025); PHK industri padat karya; hilirisasi mineral; normalisasi harga komoditas; restrukturisasi grup di bawah BPI Danantara (24 Februari 2025); ekonomi digital dan e-commerce; pajak minimum global (sejak 1 Januari 2025); daya beli kelas menengah melemah; salah saji dan gagal bayar emiten; transisi energi dan keberlanjutan; tantangan ke depan (PSPK 1 dan 2 efektif 1 Januari 2027, risiko iklim, AI dalam pelaporan).
```

## B2. PK-B95 (essay)
```
FORMULIR BATCH KALIBRASI
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B95
Tipe: essay | Jumlah: 2 | ID mulai: PK-ESA-905
Sebaran topik: T02 1, T14 1
Sebaran kesulitan: mudah 1, sangat_sulit 1
Ukuran kasus: -
Level kognitif: C2-C6
Sebaran cacat (urut ID):
- PK-ESA-905 (T02, mudah, teori): RUBRIK. Jelaskan ancaman intimidasi terhadap prinsip dasar etika akuntan profesional dan satu pengamanannya; rubrik 3 kriteria, satu kriteria tidak terukur ("menjelaskan dengan baik dan lengkap") tanpa pembeda full/partial/zero.
- PK-ESA-906 (T14, sangat sulit, analisis): IDEAL. Evaluasi kesiapan produsen nikel fiktif menyusun pengungkapan risiko iklim dan rekomendasi urutan persiapannya (tema 12, 13); modelAnswer menyatakan entitas wajib menerapkan PSPK 2 untuk periode yang berakhir 31 Desember 2026, padahal PSPK 2 efektif 1 Januari 2027 dengan penerapan dini diperbolehkan, dan rubrik memberi skor penuh untuk kekeliruan itu.
Catatan khusus:
- Esai mudah: 1 perintah, stem ≤ 120 kata, jawaban ideal ≤ 100 kata, 3 kriteria rubrik, estimatedMinutes 6. Esai sangat sulit: 3 perintah, stem ≤ 250 kata, jawaban ideal ≤ 330 kata, 4-6 kriteria rubrik, estimatedMinutes 20.
- Kriteria rubrik berjumlah 10; acceptableAlternatives wajib.
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026 (kekeliruan tanggal efektif hanya pada cacat IDEAL yang ditetapkan).
Catatan umum:
- Ikuti docs/pk_taksonomi.md dan docs/pk_rujukan_penyusun.md; PSAK dengan nomor baru dan lama.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 165, PK-ESA-001 s.d. 055, PK-KAS-001 s.d. 031, dan soal kalibrasi 901-906) dan batch sebelumnya di percakapan ini.
- Angka pasar ditulis "diasumsikan"; proyeksi ke depan dinyatakan sebagai asumsi; perusahaan dan tokoh fiktif; semua informasi untuk menjawab ada di soal.
```

## B3. PK-B96 (case)
```
FORMULIR BATCH KALIBRASI
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B96
Tipe: case | Jumlah: 1 | ID mulai: PK-KAS-903
Sebaran topik: PK-KAS-903 T06
Sebaran kesulitan: mudah 1
Ukuran kasus: mini
Level kognitif: C3
Sebaran cacat:
- PK-KAS-903: DATA. Perusahaan logistik fiktif menyewa gudang dengan pembayaran tahunan di akhir periode saat suku bunga turun bertahap (tema 1). Satu angka di jadwal pembayaran sewa di caseData (mis. total pembayaran) tidak sama dengan jumlah rinciannya atau berbeda dengan angka di narasi, dan selisih itu mengubah jawaban satu sub. modelAnswer memakai salah satu angka tanpa menyinggung selisih.
Catatan khusus:
- Kasus mini mudah: narasi + data ≤ 300 kata (stem, narasi, dan seluruh isi caseData), 2 sub, jawaban ideal semua sub ≤ 230 kata, estimatedMinutes 15. Faktor diskonto diberikan di caseData.
- Data lain konsisten. Nilai dalam Rupiah dengan satuan dan aturan pembulatan. Total skor 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya.
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026.
Catatan umum:
- Ikuti docs/pk_taksonomi.md dan docs/pk_rujukan_penyusun.md; PSAK dengan nomor baru dan lama.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-KAS-001 s.d. 031 dan kalibrasi PK-KAS-901, 902) dan batch sebelumnya di percakapan ini.
- Angka pasar ditulis "diasumsikan"; perusahaan dan tokoh fiktif; semua informasi untuk menjawab ada di kasus.
```

## B4. PK-B97 (case)
```
FORMULIR BATCH KALIBRASI
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B97
Tipe: case | Jumlah: 1 | ID mulai: PK-KAS-904
Sebaran topik: PK-KAS-904 T07, T09, T10, T13
Sebaran kesulitan: sangat_sulit 1
Ukuran kasus: komprehensif
Level kognitif: C5-C6
Sebaran cacat:
- PK-KAS-904: RUBRIK. Grup multifinance fiktif dengan anak usaha pinjaman daring menghadapi kenaikan kredit bermasalah dan indikasi rekayasa laba menjelang penerbitan obligasi (tema 11). Pada satu sub-pertanyaan (bukan yang pertama), rubrik hanya memberi skor penuh untuk satu urutan tindakan atau satu indikator red flag tertentu, padahal alternatif lain yang beralasan juga benar dan tidak tercantum di acceptableAlternatives.
Catatan khusus:
- Kasus komprehensif sangat sulit: narasi + data ≤ 900 kata (stem, narasi, dan seluruh isi caseData), 4 sub, jawaban ideal semua sub ≤ 650 kata, hitungan ≤ 5 menit, estimatedMinutes 45.
- Mengintegrasikan 4 topik; caseData memuat ikhtisar angka; jumlah sel tiap baris = jumlah kolom; semua total konsisten.
- Total skor 20; rubrik tiap sub = maxScore sub; rujukan kriteria di acceptableAlternatives menyebut bagiannya.
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026.
Catatan umum:
- Ikuti docs/pk_taksonomi.md dan docs/pk_rujukan_penyusun.md; PSAK dengan nomor baru dan lama.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-KAS-001 s.d. 031 dan kalibrasi PK-KAS-901 s.d. 903) dan batch sebelumnya di percakapan ini.
- Angka pasar ditulis "diasumsikan"; perusahaan dan tokoh fiktif; semua informasi untuk menjawab ada di kasus.
```
