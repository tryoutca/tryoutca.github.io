# MSK kalibrasi tahap 2 — siap tempel

Formulir soal kalibrasi MSK untuk Prompt D v1.1 (`prompts/prompt_kalibrasi_soal.md`), disusun 2026-10-24 (D-102).
Isi: (A) revisi 12 soal kalibrasi lama agar sesuai standar waktu, dan (B) 8 soal kalibrasi baru untuk tingkat mudah dan sangat sulit: 4 PG, 2 esai, 1 kasus mini, 1 kasus komprehensif (4 batch, B94-B97).

Mengapa: gelombang 4 menyusun batch per tingkat kesulitan (mis. 10 PG mudah). Aplikasi memilih soal kalibrasi secara acak dari tipe yang sama tanpa melihat tingkat. Ke-12 soal kalibrasi lama semuanya tingkat sedang/sulit dan melebihi standar waktu (perkiraan waktu dan panjang soal), jadi mudah dikenali di antara soal baru yang lebih pendek.

Cara pakai:
1. Ganti instruksi Project Claude "Penyusun Kalibrasi" dengan **Prompt D v1.1**.
2. Bagian A: kirim satu blok revisi per pesan ke percakapan tempat soal itu dibuat (JSON soal asli ada di sana). Bila percakapan itu tidak tersedia, tempel JSON soal dari berkas ekspor pack terakhir (status tetap CALIBRATION). Impor hasilnya: soal dengan ID sama diperbarui di bank.
3. Bagian B: buka satu percakapan baru, lalu salin satu blok utuh per pesan, berurutan dari atas.
4. Impor setiap hasil di Pengelola Bank Soal (batch kalibrasi diimpor terpisah). Buka pratinjau tiap soal dan cocokkan cacatnya dengan catatan "Soal kalibrasi: cacat sengaja ...".
5. Formulir dan tabel "Kunci kalibrasi" jangan pernah ditempel ke Project reviewer. Soal kalibrasi hanya disimpan di bank perangkat; jangan dipublikasikan ke pack.

| Bagian | Batch | Tipe | Jumlah | ID | Kesulitan | Cacat |
|---|---|---|---|---|---|---|
| A | MSK-B90 | PG | 6 | MSK-MCQ-901 s.d. 906 | sedang 3, sulit 3 | tetap |
| A | MSK-B91 | Esai | 4 | MSK-ESA-901 s.d. 904 | sedang 2, sulit 2 | tetap |
| A | MSK-B92, B93 | Kasus | 2 | MSK-KAS-901, 902 | sedang 1 (mini), sulit 1 (komprehensif) | tetap |
| B | MSK-B94 | PG | 4 | MSK-MCQ-907 s.d. 910 | mudah 2, sangat sulit 2 | PENGECOH 1, KUNCI 1, GANDA 1, PERIODE 1 |
| B | MSK-B95 | Esai | 2 | MSK-ESA-905 s.d. 906 | mudah 1, sangat sulit 1 | RUBRIK 1, IDEAL 1 |
| B | MSK-B96 | Kasus mini | 1 | MSK-KAS-903 | mudah 1 | DATA 1 |
| B | MSK-B97 | Kasus komprehensif | 1 | MSK-KAS-904 | sangat sulit 1 | RUBRIK 1 |

## A1. Revisi MSK-B90 (mcq)
```
REVISI KALIBRASI (standar waktu Prompt D v1.1)
Batch ID: MSK-B90 (soal MSK-MCQ-901 s.d. 906)
Soal ini disusun sebelum standar waktu berlaku dan melebihi batas tingkatnya. Revisi agar sesuai bagian "Standar waktu dan tingkat kesulitan":
- estimatedMinutes = standar: sedang 1.5, sulit 2.5.
- Pendekkan stem dan opsi sampai batas: sedang ≤ 120 kata, sulit ≤ 160 kata (stem + teks keempat opsi). Penjelasan tambahan pindahkan ke explanation.
- Kode cacat, defectDimension, letak cacat, answerKey, tingkat kesulitan, dan topik tetap. Pastikan cacat masih dapat ditemukan dan tidak muncul cacat kedua.
Temuan pemeriksaan aplikasi:
- MSK-MCQ-901 (sedang): 2 menit; stem dan opsi 210 kata.
- MSK-MCQ-902 (sulit): 3 menit; stem dan opsi 183 kata.
- MSK-MCQ-903 (sulit): 3 menit; stem dan opsi 219 kata.
- MSK-MCQ-904 (sedang): 2 menit; stem dan opsi 147 kata.
- MSK-MCQ-905 (sulit): 3,5 menit; stem dan opsi 225 kata.
- MSK-MCQ-906 (sedang): 2 menit; stem dan opsi 178 kata.
Keluarkan batch berisi keenam soal hasil revisi dengan tabel Kunci kalibrasi.
```

## A2. Revisi MSK-B91 (essay)
```
REVISI KALIBRASI (standar waktu Prompt D v1.1)
Batch ID: MSK-B91 (soal MSK-ESA-901 s.d. 904)
Soal ini disusun sebelum standar waktu berlaku dan melebihi batas tingkatnya. Revisi agar sesuai bagian "Standar waktu dan tingkat kesulitan":
- estimatedMinutes = standar: sedang 10, sulit 15.
- Batas: sedang stem ≤ 150 kata dan jawaban ideal ≤ 170 kata; sulit stem ≤ 200 kata dan jawaban ideal ≤ 250 kata. Jawaban ideal cukup untuk nilai penuh; uraian tambahan pindahkan ke explanation. Sesuaikan rubrik dengan jawaban ideal yang lebih pendek, jumlah tetap 10.
- Kode cacat, defectDimension, letak cacat, tingkat kesulitan, dan topik tetap. Pastikan cacat masih dapat ditemukan dan tidak muncul cacat kedua.
Temuan pemeriksaan aplikasi:
- MSK-ESA-901 (sedang): 15 menit; stem 213 kata; jawaban ideal 255 kata.
- MSK-ESA-902 (sulit): 20 menit; stem 241 kata.
- MSK-ESA-903 (sedang): 15 menit; stem 193 kata; jawaban ideal 238 kata.
- MSK-ESA-904 (sulit): 20 menit; stem 204 kata; jawaban ideal 294 kata.
Keluarkan batch berisi keempat soal hasil revisi dengan tabel Kunci kalibrasi.
```

## A3. Revisi MSK-B92 dan MSK-B93 (case)
Kirim dua pesan terpisah: satu untuk MSK-B92 (MSK-KAS-901), satu untuk MSK-B93 (MSK-KAS-902).
```
REVISI KALIBRASI (standar waktu Prompt D v1.1)
Batch ID: MSK-B92 (soal MSK-KAS-901, kasus mini sedang)
Soal ini disusun sebelum standar waktu berlaku. Revisi agar sesuai bagian "Standar waktu dan tingkat kesulitan":
- estimatedMinutes = 20 (standar kasus mini sedang).
- Narasi + data ≤ 400 kata; 2-3 sub; jawaban ideal semua sub ≤ 320 kata. Uraian tambahan pindahkan ke explanation; sesuaikan rubrik, jumlah tetap 20.
- Kode cacat DATA, letak cacat, dan angka yang tidak konsisten tetap; data lain tetap konsisten.
Temuan pemeriksaan aplikasi: 30 menit; jawaban ideal 380 kata.
Keluarkan batch berisi soal hasil revisi dengan tabel Kunci kalibrasi.
```
```
REVISI KALIBRASI (standar waktu Prompt D v1.1)
Batch ID: MSK-B93 (soal MSK-KAS-902, kasus komprehensif sulit)
Soal ini disusun sebelum standar waktu berlaku. Revisi agar sesuai bagian "Standar waktu dan tingkat kesulitan":
- estimatedMinutes = 40 (standar kasus komprehensif sulit).
- Narasi + data ≤ 700 kata; 4 sub; jawaban ideal semua sub ≤ 600 kata; hitungan ≤ 5 menit. Uraian tambahan pindahkan ke explanation; sesuaikan rubrik, jumlah tetap 20.
- Kode cacat IDEAL dan letaknya tetap.
Temuan pemeriksaan aplikasi: 45 menit; jawaban ideal 653 kata.
Keluarkan batch berisi soal hasil revisi dengan tabel Kunci kalibrasi.
```

## B1. MSK-B94 (mcq)
```
FORMULIR BATCH KALIBRASI
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B94
Tipe: mcq | Jumlah: 4 | ID mulai: MSK-MCQ-907
Sebaran topik: T01 1, T08 1, T06 1, T12 1
Sebaran kesulitan: mudah 2, sangat_sulit 2
Ukuran kasus: -
Level kognitif: C2-C6
Sebaran cacat (urut ID):
- MSK-MCQ-907 (T01, mudah, teori): PENGECOH. Perbedaan visi, misi, dan tujuan stratejik; dua distraktor menyebut hal yang tidak berhubungan dengan arah perusahaan, sehingga kunci mudah ditebak.
- MSK-MCQ-908 (T08, mudah, teori): KUNCI. Teori pemangku kepentingan vs pemegang saham; kunci menunjuk pernyataan pandangan pemegang saham, padahal yang ditanyakan pandangan pemangku kepentingan, dan opsi yang benar ada di antara distraktor.
- MSK-MCQ-909 (T06, sangat sulit, analisis): GANDA. Pilihan moda masuk pasar ekspor dengan data biaya, risiko, dan kendali saat tarif dagang yang diasumsikan berubah (tema 3); data di stem membuat satu distraktor sama-sama dapat dibenarkan.
- MSK-MCQ-910 (T12, sangat sulit, analisis): PERIODE. Pilihan investasi analitik data dan AI dengan proyeksi beberapa tahun (tema 13); stem tidak menyebut tahun mulai berlakunya ketentuan atau asumsi yang menentukan pilihan, padahal kunci bergantung padanya.
Catatan khusus:
- Soal mudah: satu konsep, stem + opsi ≤ 90 kata, tanpa hitungan, estimatedMinutes 1. Soal sangat sulit: integrasi minimal 2 konsep, stem + opsi ≤ 200 kata, estimatedMinutes 3.5.
- Sebaran kunci (huruf di answerKey): setiap huruf A-D paling banyak 1.
- Panjang dan gaya setara soal gelombang 4 setingkat; jangan lebih panjang dari soal biasa.
Catatan umum:
- Ikuti docs/msk_taksonomi.md (T01-T12, K01-K06).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi. Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 220, MSK-ESA-001 s.d. 070, MSK-KAS-001 s.d. 035, dan soal kalibrasi 901-906).
- Konteks ekonomi Indonesia dan global 2023-2026 serta tantangan ke depan seperti soal biasa: fakta terverifikasi boleh disebut dengan tanggal dan sumbernya; fakta yang tidak dapat dipastikan dan proyeksi ke depan dijadikan skenario atau asumsi; angka pasar ditulis "diasumsikan"; perusahaan dan tokoh fiktif. Semua informasi untuk menjawab ada di soal, KECUALI pada cacat PERIODE yang memang sengaja menghilangkannya.
- Tema pilihan: suku bunga tinggi lalu turun; pelemahan rupiah; tarif resiprokal Amerika Serikat (diumumkan 2 April 2025) dan relokasi rantai pasok; hilirisasi dan baterai; restrukturisasi BUMN di bawah BPI Danantara (24 Februari 2025); daya beli kelas menengah melemah; PHK dan otomasi; ekonomi digital dan AI generatif; transisi energi dan ESG; gagal bayar lembaga keuangan nonbank; gangguan logistik dan geopolitik; tantangan ke depan (AI, data pribadi, perdagangan karbon, demografi).
```

## B2. MSK-B95 (essay)
```
FORMULIR BATCH KALIBRASI
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B95
Tipe: essay | Jumlah: 2 | ID mulai: MSK-ESA-905
Sebaran topik: T02 1, T10 1
Sebaran kesulitan: mudah 1, sangat_sulit 1
Ukuran kasus: -
Level kognitif: C2-C6
Sebaran cacat (urut ID):
- MSK-ESA-905 (T02, mudah, teori): RUBRIK. Jelaskan perbedaan fungsi PESTEL dan lima kekuatan Porter; rubrik 3 kriteria, satu kriteria tidak terukur ("menjelaskan dengan baik dan lengkap") tanpa pembeda full/partial/zero.
- MSK-ESA-906 (T10, sangat sulit, analisis): IDEAL. Evaluasi gaya kepemimpinan dan rencana perubahan budaya setelah merger dua perusahaan teknologi finansial (tema 9); modelAnswer merekomendasikan gaya transaksional sebagai pendorong utama perubahan budaya jangka panjang, dan rubrik memberi skor penuh untuk kekeliruan itu.
Catatan khusus:
- Esai mudah: 1 perintah, stem ≤ 120 kata, jawaban ideal ≤ 100 kata, 3 kriteria rubrik, estimatedMinutes 6. Esai sangat sulit: 3 perintah, stem ≤ 250 kata, jawaban ideal ≤ 330 kata, 4-6 kriteria rubrik, estimatedMinutes 20.
- Kriteria rubrik berjumlah 10; acceptableAlternatives wajib.
Catatan umum:
- Ikuti docs/msk_taksonomi.md (T01-T12, K01-K06).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi. Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 220, MSK-ESA-001 s.d. 070, MSK-KAS-001 s.d. 035, dan soal kalibrasi 901-906) dan batch sebelumnya di percakapan ini.
- Konteks ekonomi Indonesia dan global 2023-2026 serta tantangan ke depan seperti soal biasa: fakta terverifikasi boleh disebut dengan tanggal dan sumbernya; proyeksi ke depan dijadikan skenario atau asumsi; angka pasar ditulis "diasumsikan"; perusahaan dan tokoh fiktif; semua informasi untuk menjawab ada di soal.
```

## B3. MSK-B96 (case)
```
FORMULIR BATCH KALIBRASI
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B96
Tipe: case | Jumlah: 1 | ID mulai: MSK-KAS-903
Sebaran topik: MSK-KAS-903 T03, T04
Sebaran kesulitan: mudah 1
Ukuran kasus: mini
Level kognitif: C3
Sebaran cacat:
- MSK-KAS-903: DATA. Usaha roti rumahan yang berkembang menjadi jaringan gerai kecil menghadapi pesaing waralaba saat daya beli melemah (tema 7). Satu angka di caseData (mis. total penjualan per gerai) tidak sama dengan jumlah rinciannya atau berbeda dengan angka di narasi, dan selisih itu mengubah jawaban satu sub. modelAnswer memakai salah satu angka tanpa menyinggung selisih.
Catatan khusus:
- Kasus mini mudah: narasi + data ≤ 300 kata (stem, narasi, dan seluruh isi caseData), 2 sub, jawaban ideal semua sub ≤ 230 kata, estimatedMinutes 15.
- Data lain di caseData konsisten. Total skor 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Catatan umum:
- Ikuti docs/msk_taksonomi.md (T01-T12, K01-K06).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi. Hindari skenario yang mirip soal MSK yang sudah ada (MSK-KAS-001 s.d. 035 dan kalibrasi MSK-KAS-901, 902) dan batch sebelumnya di percakapan ini.
- Konteks ekonomi Indonesia 2023-2026 seperti soal biasa: angka pasar ditulis "diasumsikan"; perusahaan dan tokoh fiktif; semua informasi untuk menjawab ada di kasus.
```

## B4. MSK-B97 (case)
```
FORMULIR BATCH KALIBRASI
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B97
Tipe: case | Jumlah: 1 | ID mulai: MSK-KAS-904
Sebaran topik: MSK-KAS-904 T01, T07, T08, T11
Sebaran kesulitan: sangat_sulit 1
Ukuran kasus: komprehensif
Level kognitif: C5-C6
Sebaran cacat:
- MSK-KAS-904: RUBRIK. Grup energi fiktif berbasis batu bara menyusun peta jalan transisi ke energi terbarukan sampai 2030 dengan proyeksi yang dinyatakan sebagai asumsi (tema 10, 13). Pada satu sub-pertanyaan (bukan yang pertama), rubrik hanya memberi skor penuh untuk satu urutan implementasi tertentu, padahal urutan lain yang beralasan juga benar dan tidak tercantum di acceptableAlternatives.
Catatan khusus:
- Kasus komprehensif sangat sulit: narasi + data ≤ 900 kata (stem, narasi, dan seluruh isi caseData), 4 sub, jawaban ideal semua sub ≤ 650 kata, hitungan ≤ 5 menit, estimatedMinutes 45.
- Mengintegrasikan 4 topik dan menuntut analisis, evaluasi alternatif, risiko, implikasi keuangan, dan rekomendasi. Data di caseData konsisten.
- Total skor 20; rubrik tiap sub = maxScore sub; rujukan kriteria di acceptableAlternatives menyebut bagiannya.
Catatan umum:
- Ikuti docs/msk_taksonomi.md (T01-T12, K01-K06).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi. Hindari skenario yang mirip soal MSK yang sudah ada (MSK-KAS-001 s.d. 035 dan kalibrasi MSK-KAS-901 s.d. 903) dan batch sebelumnya di percakapan ini.
- Konteks ekonomi Indonesia 2023-2026 dan tantangan ke depan seperti soal biasa: proyeksi dinyatakan sebagai asumsi; angka pasar ditulis "diasumsikan"; perusahaan dan tokoh fiktif; semua informasi untuk menjawab ada di kasus.
```
