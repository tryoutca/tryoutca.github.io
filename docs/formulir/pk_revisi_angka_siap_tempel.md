# PK revisi format angka — siap tempel

Disusun 2026-11-01 (D-119). Revisi **56 soal PK LIVE** yang menulis nilai uang dengan satuan juta, mis. "Rp9.600 juta" atau tabel "dalam jutaan Rupiah", menjadi angka rupiah penuh, mis. "Rp9.600.000.000". Soal yang memakai "miliar" tidak termasuk; aturan angka penuh berlaku untuk soal baru mulai Prompt B v4.9.

**Penting:** soal LIVE yang isinya diubah kembali menjadi **Draf** dan keluar dari paket peserta sampai direview, disetujui, dan dipublikasikan ulang. Karena itu revisi dibagi menjadi 12 kelompok. Kerjakan **satu kelompok sampai tayang lagi sebelum memulai kelompok berikutnya**. Setiap kelompok sudah disimulasikan dengan pack PK 1.9.0: selama satu kelompok keluar, semua paket PK (Level 1-4 dan Simulasi) tetap dapat dirakit. PK-KAS-028 dan PK-KAS-029 (dua-duanya kasus mudah) sengaja dipisah ke R08 dan R10 agar Level 1 selalu punya kasus mudah.

**Opsional, sekalian merapikan bahasa:** karena soal-soal ini berubah isi dan harus direview ulang, bahasanya dapat disederhanakan pada putaran yang sama sehingga tidak perlu revisi kedua. Tambahkan satu kalimat di akhir blok kelompok: "Sekalian tulis ulang kalimat agar sesuai bagian Gaya bahasa Prompt B v4.9 (revisi bahasa); skenario, data, kunci, tingkat, dan skor tetap." Review dengan Prompt C v4.8 menilai hasilnya. Bila Anda memilih tidak melakukannya, abaikan kalimat ini.

Ukuran kelompok mengikuti batas paket review (10 PG, 5 esai, atau 2 kasus), jadi satu kelompok = satu paket review.

Cara pakai untuk setiap kelompok:
1. Pengelola Bank Soal, tab Daftar Soal: centang ID kelompok itu, tekan **Salin untuk penyusun**.
2. Di Project penyusun (Prompt B **v4.7**), tempel teks salinan aplikasi, lalu tempel blok kelompok di bawah ini sebagai pesan yang sama atau pesan berikutnya.
3. Impor hasilnya di tab Impor Batch. Periksa bahwa aksi setiap soal "revisi" dan tidak ada peringatan standar waktu.
4. Buat paket review berisi soal kelompok itu, review dengan Prompt C **v4.6**, impor hasil review, setujui, lalu publikasikan.
5. Lanjut ke kelompok berikutnya. Setelah semua selesai (atau setiap beberapa kelompok), ekspor pack dan sinkronkan ke repositori.

| Kelompok | Tipe | Jumlah | ID | Tingkat |
|---|---|---|---|---|
| R01 | PG | 10 | PK-MCQ-005, PK-MCQ-001, PK-MCQ-002, PK-MCQ-009, PK-MCQ-006, PK-MCQ-004, PK-MCQ-003, PK-MCQ-021, PK-MCQ-007, PK-MCQ-011 | mudah 3, sedang 3, sulit 2, sangat sulit 2 |
| R02 | PG | 10 | PK-MCQ-013, PK-MCQ-033, PK-MCQ-010, PK-MCQ-016, PK-MCQ-019, PK-MCQ-062, PK-MCQ-012, PK-MCQ-030, PK-MCQ-022, PK-MCQ-150 | sulit 3, sangat sulit 3, mudah 2, sedang 2 |
| R03 | PG | 10 | PK-MCQ-014, PK-MCQ-037, PK-MCQ-027, PK-MCQ-020, PK-MCQ-042, PK-MCQ-031, PK-MCQ-044, PK-MCQ-039, PK-MCQ-073, PK-MCQ-043 | mudah 2, sedang 4, sulit 4 |
| R04 | PG | 5 | PK-MCQ-049, PK-MCQ-056, PK-MCQ-064, PK-MCQ-068, PK-MCQ-069 | sulit 5 |
| R05 | Esai | 5 | PK-ESA-039, PK-ESA-001, PK-ESA-002, PK-ESA-004, PK-ESA-003 | mudah 1, sedang 2, sulit 1, sangat sulit 1 |
| R06 | Esai | 5 | PK-ESA-005, PK-ESA-020, PK-ESA-017, PK-ESA-054, PK-ESA-018 | sulit 3, sedang 2 |
| R07 | Esai | 1 | PK-ESA-053 | sulit 1 |
| R08 | Kasus | 2 | PK-KAS-028, PK-KAS-001 | mudah 1, sedang 1 |
| R09 | Kasus | 2 | PK-KAS-002, PK-KAS-005 | sulit 1, sangat sulit 1 |
| R10 | Kasus | 2 | PK-KAS-029, PK-KAS-006 | mudah 1, sedang 1 |
| R11 | Kasus | 2 | PK-KAS-003, PK-KAS-004 | sulit 2 |
| R12 | Kasus | 2 | PK-KAS-009, PK-KAS-013 | sulit 2 |

## R01. PG (10 soal)

Pilih di Daftar Soal: PK-MCQ-005, PK-MCQ-001, PK-MCQ-002, PK-MCQ-009, PK-MCQ-006, PK-MCQ-004, PK-MCQ-003, PK-MCQ-021, PK-MCQ-007, PK-MCQ-011

```
REVISI FORMAT ANGKA (Prompt B v4.9, bagian Revisi: "Revisi format angka").
Ubah semua nilai uang menjadi angka penuh dalam rupiah dengan titik ribuan, mis. "Rp9.600 juta" menjadi "Rp9.600.000.000" dan tabel "dalam jutaan Rupiah" menjadi angka rupiah penuh. Berlaku untuk stem, opsi, caseData, modelAnswer, rubrik, acceptableAlternatives, explanation, dan numericAnswer.
Jangan mengubah skenario, data, kunci, tingkat kesulitan, level kognitif, estimatedMinutes, atau skor. Hitung ulang setiap angka setelah konversi.
Pertahankan ID soal. batchId: PK-RA01. Naikkan authoring.revision sebesar 1; tulis "Revisi format angka penuh." di authoring.notes setelah catatan lama.
Keluarkan batch berisi soal hasil revisi saja.
```

## R02. PG (10 soal)

Pilih di Daftar Soal: PK-MCQ-013, PK-MCQ-033, PK-MCQ-010, PK-MCQ-016, PK-MCQ-019, PK-MCQ-062, PK-MCQ-012, PK-MCQ-030, PK-MCQ-022, PK-MCQ-150

```
REVISI FORMAT ANGKA (Prompt B v4.9, bagian Revisi: "Revisi format angka").
Ubah semua nilai uang menjadi angka penuh dalam rupiah dengan titik ribuan, mis. "Rp9.600 juta" menjadi "Rp9.600.000.000" dan tabel "dalam jutaan Rupiah" menjadi angka rupiah penuh. Berlaku untuk stem, opsi, caseData, modelAnswer, rubrik, acceptableAlternatives, explanation, dan numericAnswer.
Jangan mengubah skenario, data, kunci, tingkat kesulitan, level kognitif, estimatedMinutes, atau skor. Hitung ulang setiap angka setelah konversi.
Pertahankan ID soal. batchId: PK-RA02. Naikkan authoring.revision sebesar 1; tulis "Revisi format angka penuh." di authoring.notes setelah catatan lama.
Keluarkan batch berisi soal hasil revisi saja.
```

## R03. PG (10 soal)

Pilih di Daftar Soal: PK-MCQ-014, PK-MCQ-037, PK-MCQ-027, PK-MCQ-020, PK-MCQ-042, PK-MCQ-031, PK-MCQ-044, PK-MCQ-039, PK-MCQ-073, PK-MCQ-043

```
REVISI FORMAT ANGKA (Prompt B v4.9, bagian Revisi: "Revisi format angka").
Ubah semua nilai uang menjadi angka penuh dalam rupiah dengan titik ribuan, mis. "Rp9.600 juta" menjadi "Rp9.600.000.000" dan tabel "dalam jutaan Rupiah" menjadi angka rupiah penuh. Berlaku untuk stem, opsi, caseData, modelAnswer, rubrik, acceptableAlternatives, explanation, dan numericAnswer.
Jangan mengubah skenario, data, kunci, tingkat kesulitan, level kognitif, estimatedMinutes, atau skor. Hitung ulang setiap angka setelah konversi.
Pertahankan ID soal. batchId: PK-RA03. Naikkan authoring.revision sebesar 1; tulis "Revisi format angka penuh." di authoring.notes setelah catatan lama.
Keluarkan batch berisi soal hasil revisi saja.
```

## R04. PG (5 soal)

Pilih di Daftar Soal: PK-MCQ-049, PK-MCQ-056, PK-MCQ-064, PK-MCQ-068, PK-MCQ-069

```
REVISI FORMAT ANGKA (Prompt B v4.9, bagian Revisi: "Revisi format angka").
Ubah semua nilai uang menjadi angka penuh dalam rupiah dengan titik ribuan, mis. "Rp9.600 juta" menjadi "Rp9.600.000.000" dan tabel "dalam jutaan Rupiah" menjadi angka rupiah penuh. Berlaku untuk stem, opsi, caseData, modelAnswer, rubrik, acceptableAlternatives, explanation, dan numericAnswer.
Jangan mengubah skenario, data, kunci, tingkat kesulitan, level kognitif, estimatedMinutes, atau skor. Hitung ulang setiap angka setelah konversi.
Pertahankan ID soal. batchId: PK-RA04. Naikkan authoring.revision sebesar 1; tulis "Revisi format angka penuh." di authoring.notes setelah catatan lama.
Keluarkan batch berisi soal hasil revisi saja.
```

## R05. Esai (5 soal)

Pilih di Daftar Soal: PK-ESA-039, PK-ESA-001, PK-ESA-002, PK-ESA-004, PK-ESA-003

```
REVISI FORMAT ANGKA (Prompt B v4.9, bagian Revisi: "Revisi format angka").
Ubah semua nilai uang menjadi angka penuh dalam rupiah dengan titik ribuan, mis. "Rp9.600 juta" menjadi "Rp9.600.000.000" dan tabel "dalam jutaan Rupiah" menjadi angka rupiah penuh. Berlaku untuk stem, opsi, caseData, modelAnswer, rubrik, acceptableAlternatives, explanation, dan numericAnswer.
Jangan mengubah skenario, data, kunci, tingkat kesulitan, level kognitif, estimatedMinutes, atau skor. Hitung ulang setiap angka setelah konversi.
Pertahankan ID soal. batchId: PK-RA05. Naikkan authoring.revision sebesar 1; tulis "Revisi format angka penuh." di authoring.notes setelah catatan lama.
Keluarkan batch berisi soal hasil revisi saja.
```

## R06. Esai (5 soal)

Pilih di Daftar Soal: PK-ESA-005, PK-ESA-020, PK-ESA-017, PK-ESA-054, PK-ESA-018

```
REVISI FORMAT ANGKA (Prompt B v4.9, bagian Revisi: "Revisi format angka").
Ubah semua nilai uang menjadi angka penuh dalam rupiah dengan titik ribuan, mis. "Rp9.600 juta" menjadi "Rp9.600.000.000" dan tabel "dalam jutaan Rupiah" menjadi angka rupiah penuh. Berlaku untuk stem, opsi, caseData, modelAnswer, rubrik, acceptableAlternatives, explanation, dan numericAnswer.
Jangan mengubah skenario, data, kunci, tingkat kesulitan, level kognitif, estimatedMinutes, atau skor. Hitung ulang setiap angka setelah konversi.
Pertahankan ID soal. batchId: PK-RA06. Naikkan authoring.revision sebesar 1; tulis "Revisi format angka penuh." di authoring.notes setelah catatan lama.
Keluarkan batch berisi soal hasil revisi saja.
```

## R07. Esai (1 soal)

Pilih di Daftar Soal: PK-ESA-053

```
REVISI FORMAT ANGKA (Prompt B v4.9, bagian Revisi: "Revisi format angka").
Ubah semua nilai uang menjadi angka penuh dalam rupiah dengan titik ribuan, mis. "Rp9.600 juta" menjadi "Rp9.600.000.000" dan tabel "dalam jutaan Rupiah" menjadi angka rupiah penuh. Berlaku untuk stem, opsi, caseData, modelAnswer, rubrik, acceptableAlternatives, explanation, dan numericAnswer.
Jangan mengubah skenario, data, kunci, tingkat kesulitan, level kognitif, estimatedMinutes, atau skor. Hitung ulang setiap angka setelah konversi.
Pertahankan ID soal. batchId: PK-RA07. Naikkan authoring.revision sebesar 1; tulis "Revisi format angka penuh." di authoring.notes setelah catatan lama.
Keluarkan batch berisi soal hasil revisi saja.
```

## R08. Kasus (2 soal)

Pilih di Daftar Soal: PK-KAS-028, PK-KAS-001

```
REVISI FORMAT ANGKA (Prompt B v4.9, bagian Revisi: "Revisi format angka").
Ubah semua nilai uang menjadi angka penuh dalam rupiah dengan titik ribuan, mis. "Rp9.600 juta" menjadi "Rp9.600.000.000" dan tabel "dalam jutaan Rupiah" menjadi angka rupiah penuh. Berlaku untuk stem, opsi, caseData, modelAnswer, rubrik, acceptableAlternatives, explanation, dan numericAnswer.
Jangan mengubah skenario, data, kunci, tingkat kesulitan, level kognitif, estimatedMinutes, atau skor. Hitung ulang setiap angka setelah konversi.
Pertahankan ID soal. batchId: PK-RA08. Naikkan authoring.revision sebesar 1; tulis "Revisi format angka penuh." di authoring.notes setelah catatan lama.
Keluarkan batch berisi soal hasil revisi saja.
```

## R09. Kasus (2 soal)

Pilih di Daftar Soal: PK-KAS-002, PK-KAS-005

```
REVISI FORMAT ANGKA (Prompt B v4.9, bagian Revisi: "Revisi format angka").
Ubah semua nilai uang menjadi angka penuh dalam rupiah dengan titik ribuan, mis. "Rp9.600 juta" menjadi "Rp9.600.000.000" dan tabel "dalam jutaan Rupiah" menjadi angka rupiah penuh. Berlaku untuk stem, opsi, caseData, modelAnswer, rubrik, acceptableAlternatives, explanation, dan numericAnswer.
Jangan mengubah skenario, data, kunci, tingkat kesulitan, level kognitif, estimatedMinutes, atau skor. Hitung ulang setiap angka setelah konversi.
Pertahankan ID soal. batchId: PK-RA09. Naikkan authoring.revision sebesar 1; tulis "Revisi format angka penuh." di authoring.notes setelah catatan lama.
Keluarkan batch berisi soal hasil revisi saja.
```

## R10. Kasus (2 soal)

Pilih di Daftar Soal: PK-KAS-029, PK-KAS-006

```
REVISI FORMAT ANGKA (Prompt B v4.9, bagian Revisi: "Revisi format angka").
Ubah semua nilai uang menjadi angka penuh dalam rupiah dengan titik ribuan, mis. "Rp9.600 juta" menjadi "Rp9.600.000.000" dan tabel "dalam jutaan Rupiah" menjadi angka rupiah penuh. Berlaku untuk stem, opsi, caseData, modelAnswer, rubrik, acceptableAlternatives, explanation, dan numericAnswer.
Jangan mengubah skenario, data, kunci, tingkat kesulitan, level kognitif, estimatedMinutes, atau skor. Hitung ulang setiap angka setelah konversi.
Pertahankan ID soal. batchId: PK-RA10. Naikkan authoring.revision sebesar 1; tulis "Revisi format angka penuh." di authoring.notes setelah catatan lama.
Keluarkan batch berisi soal hasil revisi saja.
```

## R11. Kasus (2 soal)

Pilih di Daftar Soal: PK-KAS-003, PK-KAS-004

```
REVISI FORMAT ANGKA (Prompt B v4.9, bagian Revisi: "Revisi format angka").
Ubah semua nilai uang menjadi angka penuh dalam rupiah dengan titik ribuan, mis. "Rp9.600 juta" menjadi "Rp9.600.000.000" dan tabel "dalam jutaan Rupiah" menjadi angka rupiah penuh. Berlaku untuk stem, opsi, caseData, modelAnswer, rubrik, acceptableAlternatives, explanation, dan numericAnswer.
Jangan mengubah skenario, data, kunci, tingkat kesulitan, level kognitif, estimatedMinutes, atau skor. Hitung ulang setiap angka setelah konversi.
Pertahankan ID soal. batchId: PK-RA11. Naikkan authoring.revision sebesar 1; tulis "Revisi format angka penuh." di authoring.notes setelah catatan lama.
Keluarkan batch berisi soal hasil revisi saja.
```

## R12. Kasus (2 soal)

Pilih di Daftar Soal: PK-KAS-009, PK-KAS-013

```
REVISI FORMAT ANGKA (Prompt B v4.9, bagian Revisi: "Revisi format angka").
Ubah semua nilai uang menjadi angka penuh dalam rupiah dengan titik ribuan, mis. "Rp9.600 juta" menjadi "Rp9.600.000.000" dan tabel "dalam jutaan Rupiah" menjadi angka rupiah penuh. Berlaku untuk stem, opsi, caseData, modelAnswer, rubrik, acceptableAlternatives, explanation, dan numericAnswer.
Jangan mengubah skenario, data, kunci, tingkat kesulitan, level kognitif, estimatedMinutes, atau skor. Hitung ulang setiap angka setelah konversi.
Pertahankan ID soal. batchId: PK-RA12. Naikkan authoring.revision sebesar 1; tulis "Revisi format angka penuh." di authoring.notes setelah catatan lama.
Keluarkan batch berisi soal hasil revisi saja.
```
