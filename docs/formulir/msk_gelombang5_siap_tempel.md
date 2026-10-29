# MSK gelombang 5 — siap tempel

Formulir gelombang 5, disusun 2026-10-29 untuk **Prompt B v4.5** dan **Prompt C v4.4** (variasi soal cerita, porsi dan kedalaman soal teori; D-112).
Tujuan: (1) menambah soal teori yang lebih dalam dan soal cerita yang lebih bervariasi; (2) menutup kekurangan stok LIVE per tingkat kesulitan (sasaran SPEC 7: per tingkat minimal 30 PG, 9 esai, 3 kasus).
Nomor melanjutkan nomor tertinggi gelombang 4 (MSK-B56, MSK-MCQ-220, MSK-ESA-070, MSK-KAS-035).

Stok pack MSK 1.6.0 (`Publikasi Soal/MSK 25 Okt 2026pack.json`), mudah/sedang/sulit/sangat sulit:

| Tipe | LIVE | NEEDS_REVISION | Kurang (LIVE) | Gelombang 5 | LIVE sesudahnya bila semua lolos |
|---|---|---|---|---|---|
| PG | 35/28/30/20 | 0/0/1/6 | 0/2/0/10 | 0/10/0/10 | 35/38/30/30 |
| Esai | 7/7/8/3 | 4/2/2/7 | 2/2/1/6 | 2/2/1/5 | 9/9/9/8 |
| Kasus | 0/1/4/3 | 3/3/1/0 | 3/2/0/0 | 2/2/0/0 (mini) | 2/3/4/3 |

Sisa kekurangan (esai sangat sulit 1, kasus mudah 1) ditutup dengan merevisi soal NEEDS_REVISION. Ada juga 10 soal PG berstatus DRAFT yang belum direview.

Sebaran gaya di gelombang ini: soal teori 12 dari 30 PG dan esai (40%), ditambah satu sub teori di setiap kasus. Ada 8 ragam teori dan 8 bentuk pembuka. Tidak ada jenis entitas yang dipakai lebih dari sekali dalam satu batch.

Cara pakai:
1. Pastikan instruksi Project Claude penyusun sudah memakai **Prompt B v4.5** dan Project reviewer memakai **Prompt C v4.4**. Pengetahuan Project memuat `schema/CONTRACT.md`, `docs/msk_taksonomi.md`, dan contoh soal ujian MSK.
2. Buka **satu percakapan baru**, lalu salin satu blok utuh per pesan, berurutan dari atas.
3. Impor setiap hasil ke Pengelola Bank Soal. Perhatikan peringatan standar waktu saat impor. Periksa juga baris pertama authoring.notes (label bentuk) dan kalimat pertama setiap soal.
4. Review dengan Prompt C v4.4. Bila Project melaporkan Batch ID atau rentang ID sudah terpakai, naikkan nomornya.
5. Revisi soal NEEDS_REVISION memakai aturan revisi Prompt B v4.5. Saat merevisi, tambahkan label bentuk di baris pertama authoring.notes.

Prioritas: 1 = menutup kekurangan stok; 2 = menambah variasi dan soal teori di tingkat yang stoknya sudah cukup atau hampir cukup.

| Prioritas | Batch | Tipe | Jumlah | ID | Kesulitan | Teori |
|---|---|---|---|---|---|---|
| 1 | MSK-B57 | PG | 10 | MSK-MCQ-221 s.d. 230 | sangat sulit 10 | 4 dari 10 |
| 1 | MSK-B58 | Esai | 5 | MSK-ESA-071 s.d. 075 | sangat sulit 5 | 2 dari 5 |
| 1 | MSK-B59 | Kasus mini | 2 | MSK-KAS-036 s.d. 037 | mudah 2 | 1 sub per kasus |
| 1 | MSK-B60 | Kasus mini | 2 | MSK-KAS-038 s.d. 039 | sedang 2 | 1 sub per kasus |
| 2 | MSK-B61 | PG | 10 | MSK-MCQ-231 s.d. 240 | sedang 10 | 4 dari 10 |
| 2 | MSK-B62 | Esai | 5 | MSK-ESA-076 s.d. 080 | mudah 2, sedang 2, sulit 1 | 2 dari 5 |

Gelombang 5 berakhir di MSK-B62 (MSK-MCQ-240, MSK-ESA-080, MSK-KAS-039).

## 1. MSK-B57 (mcq)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B57
Tipe: mcq | Jumlah: 10 | ID mulai: MSK-MCQ-221
Sebaran topik: T01 1, T02 1, T03 1, T04 1, T05 1, T07 1, T09 1, T10 1, T11 1, T12 1
Sebaran kesulitan: sangat_sulit 10
Ukuran kasus: -
Level kognitif: C5-C6
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 4 soal teori dan 6 soal analisis (40%; batas 40%).
- Soal teori sulit dan sangat sulit memadukan dua ragam atau dua konsep; bukan sekadar menjelaskan satu konsep.
- PG sangat sulit (3,5 menit): C5-C6, integrasi minimal 2 konsep, stem + opsi ≤ 200 kata, minimal 3 langkah hitung atau penalaran atau data kuantitatif. Kesulitan dari integrasi dan pertimbangan yang saling bertentangan, bukan dari stem ambigu; tetap satu jawaban paling tepat.
- T01 (teori; sangat sulit; ragam: banding-kontras): strategi yang dirancang (deliberate) vs strategi yang muncul (emergent): kapan masing-masing lebih tepat saat lingkungan bergejolak, dan risiko bila hanya mengandalkan salah satunya.
- T02 (analisis; sangat sulit; pembuka: data; entitas: perusahaan rintisan logistik): tabel tren tiga tahun (jumlah pemain, biaya beralih pelanggan, porsi platform) untuk menilai kekuatan persaingan yang paling bergeser (tema 9).
- T03 (teori; sangat sulit; ragam: keterbatasan): kapan sumber daya yang menjadi keunggulan berubah menjadi kekakuan inti (core rigidities), dan peran kapabilitas dinamis untuk mencegahnya.
- T04 (analisis; sangat sulit; pembuka: perdebatan; entitas: perusahaan keluarga ritel fesyen): tiga direktur mengusulkan posisi harga yang berbeda saat daya beli kelas menengah melemah; peserta memilih usulan yang paling konsisten dengan sumber keunggulan (tema 7).
- T05 (analisis; sangat sulit; pembuka: dokumen (memo direktur keuangan); entitas: BUMD air minum): alokasi anggaran antarstrategi fungsional setelah biaya pinjaman turun; memilih paket alokasi yang paling mendukung sasaran layanan (tema 1).
- T07 (analisis; sangat sulit; pembuka: kronologi; entitas: grup usaha Tbk): rangkaian akuisisi lima tahun di luar bisnis inti; menilai akuisisi mana yang lolos uji daya tarik, biaya masuk, dan nilai tambah (tema 4).
- T09 (analisis; sangat sulit; pembuka: peran ("Anda direktur operasional ..."); entitas: rumah sakit swasta): memilih antara alih daya dan layanan sendiri untuk analisis laboratorium berbasis AI dengan mempertimbangkan kompetensi inti dan risiko (tema 13, ke depan).
- T10 (teori; sangat sulit; ragam: menilai pernyataan): pernyataan separuh benar tentang teori kepemimpinan kontinjensi atau situasional; peserta memilih penilaian yang tepat atas bagian yang benar dan yang keliru.
- T11 (analisis; sangat sulit; pembuka: peristiwa ("Dua pekan setelah ..."); entitas: koperasi simpan pinjam): setelah kasus gagal bayar, memilih urutan langkah perubahan dan cara menangani resistensi anggota dan pengurus (tema 11).
- T12 (teori; sangat sulit; ragam: perkembangan teori): efek jaringan dan keunggulan berbasis data: mengapa kerangka keunggulan bersaing klasik perlu diperluas untuk platform, dan batas keunggulan data.
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 220, MSK-ESA-001 s.d. 070, MSK-KAS-001 s.d. 035) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.5):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.5. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.5, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
- Contoh soal ujian lama di Project hanya salah satu sumber gaya, bukan cetakan.
Konteks ekonomi (wajib):
- Kaitkan setiap soal dengan situasi perekonomian Indonesia dan global dalam tiga tahun terakhir (2023-2026) serta tantangan yang dihadapi ke depan, yang relevan dengan topiknya. Pilih tema yang paling cocok dari daftar di bawah; jangan memaksakan tema yang tidak relevan. Dalam satu batch, pakai tema yang beragam.
- Fakta ekonomi dipakai dengan tiga aturan:
  (a) Fakta yang terverifikasi boleh disebut sebagai peristiwa nyata dengan tanggal atau periodenya. Contoh: peluncuran BPI Danantara 24 Februari 2025 (UU 1/2025, PP 10/2025); pajak minimum global PMK 136/2024 (IIR dan DMTT mulai 1 Januari 2025, UTPR mulai 1 Januari 2026); tarif resiprokal Amerika Serikat yang diumumkan 2 April 2025. Tulis sumbernya (nama peraturan atau lembaga dan tanggal) di authoring.notes.
  (b) Fakta yang tidak dapat Anda pastikan disajikan sebagai skenario hipotetis yang dinyatakan jelas, mis. "Diasumsikan pemerintah negara X menetapkan ...". Fakta yang meragukan jangan disajikan sebagai kejadian nyata.
  (c) Fakta yang benar tetapi bukan kompetensi yang diuji tetap hanya latar. Semua informasi untuk menjawab (tarif, tanggal berlaku, produk yang terkena, kurs, suku bunga) wajib diberikan di stem atau caseData. Soal menguji pemahaman dan penerapan konsep, bukan hafalan berita. Untuk soal teori, konteks ekonomi cukup menjadi latar singkat di stem.
- Tantangan ke depan (mis. 2027-2030) disajikan sebagai skenario atau proyeksi yang dinyatakan di soal, mis. "Manajemen memperkirakan ..." atau "Diasumsikan mulai 2028 ...". Peserta diminta mengantisipasi, menilai kesiapan, atau merencanakan respons. Kunci jawaban tidak bergantung pada prediksi di luar soal.
- Angka pasar (suku bunga, kurs, inflasi, harga komoditas, pangsa pasar) adalah angka asumsi dan ditulis "diasumsikan", kecuali angka itu fakta terverifikasi menurut aturan (a).
- Kebijakan yang berubah dari waktu ke waktu (tarif perdagangan, aturan pajak) wajib dikaitkan dengan periode kasus. Jangan menganggap tarif atau ketentuan 2025 masih berlaku saat ini. Bila soal menghitung dampak tarif, sebutkan tarif, tanggal berlaku, jenis produk, dan asumsi perhitungannya.
- Perusahaan dan tokoh dalam soal tetap fiktif. Lembaga dan kebijakan publik nyata boleh disebut menurut aturan (a).
- Kunci jawaban tidak boleh bergantung pada fakta ekonomi di luar soal. Semua informasi yang dibutuhkan ada di stem atau caseData.
Tema:
1. Suku bunga tinggi 2023-2024 lalu turun bertahap: biaya modal, waktu ekspansi, pendanaan strategi.
2. Pelemahan dan volatilitas rupiah: ketergantungan bahan baku impor, peluang ekspor, lindung nilai operasional.
3. Tarif resiprokal Amerika Serikat (diumumkan 2 April 2025; tarif untuk Indonesia berubah selama negosiasi, jadi soal wajib menyebut tarif yang diasumsikan dan periodenya), relokasi rantai pasok global, dan diversifikasi pasar ekspor melalui perjanjian dagang: strategi internasional (T06), lingkungan eksternal (T02).
4. Hilirisasi mineral dan industri baterai/kendaraan listrik: integrasi vertikal, aliansi dan usaha patungan dengan mitra asing (T06, T07).
5. Restrukturisasi BUMN di bawah BPI Danantara (diluncurkan 24 Februari 2025); grup dan anak usaha dalam soal tetap fiktif: strategi korporat dan portofolio (T07), struktur dan tata kelola (T09, K04).
6. Program pemerintah berskala besar (mis. program makan bergizi) yang membuka peluang dan risiko bagi rantai pasok UMKM pangan: T02, T05.
7. Melemahnya daya beli kelas menengah: strategi generik, value positioning, dan penyesuaian bauran produk (T04).
8. PHK di industri padat karya dan otomasi: SDM dan operasi (T09), perubahan organisasi (T11), etika (T08).
9. Ekonomi digital, AI generatif, serta konsolidasi e-commerce dan social commerce: strategi informasi dan analisis data (T12), keunggulan bersaing (T03, T04).
10. Transisi energi dan tuntutan ESG dari investor, pembeli global, dan regulator: CSR dan keberlanjutan (T08), visi-misi (T01).
11. Kasus tata kelola dan gagal bayar di lembaga keuangan nonbank, koperasi, dan pinjaman daring: etika (T08), manajemen risiko dan tata kelola (K04).
12. Gangguan logistik dan ketegangan geopolitik: risiko rantai pasok, ketahanan operasi (T06, T09).
13. Tantangan ke depan: AI dan otomasi pekerjaan profesional, perlindungan data pribadi dan keamanan siber (UU 27/2022 tentang Pelindungan Data Pribadi), perdagangan karbon (Bursa Karbon Indonesia diluncurkan 26 September 2023) dan target net zero, perubahan demografi dan pola konsumsi. Proyeksi ke depan selalu dinyatakan sebagai skenario atau asumsi: visi-misi dan arah perusahaan (T01), lingkungan eksternal (T02), kapabilitas (T03), perubahan (T11), informasi dan data (T12).
```

## 2. MSK-B58 (essay)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B58
Tipe: essay | Jumlah: 5 | ID mulai: MSK-ESA-071
Sebaran topik: T02 1, T06 1, T08 1, T09 1, T10 1
Sebaran kesulitan: sangat_sulit 5
Ukuran kasus: -
Level kognitif: C5-C6
Catatan khusus:
- Bentuk: 2 soal teori dan 3 soal analisis (40%; batas 40%).
- Soal teori sulit dan sangat sulit memadukan dua ragam atau dua konsep; bukan sekadar menjelaskan satu konsep.
- Esai sangat sulit (20 menit): C5-C6, 3 perintah (analisis, evaluasi alternatif, rekomendasi atau sintesis), stem ≤ 250 kata, jawaban ideal ≤ 330 kata, 4-6 kriteria rubrik.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- T02 (teori; sangat sulit; ragam: asumsi dan keterbatasan): asumsi lima kekuatan Porter (batas industri jelas, persaingan zero-sum, struktur relatif stabil), keterbatasannya pada ekosistem platform, dan penyesuaian yang diusulkan peserta.
- T06 (analisis; sangat sulit; pembuka: perdebatan; entitas: anak usaha BUMN farmasi): dua usulan ekspansi (ASEAN vs Timur Tengah) dengan data pasar yang diasumsikan; analisis, evaluasi kedua usulan, dan rekomendasi (tema 3).
- T08 (analisis; sangat sulit; pembuka: dokumen (surel pembeli global); entitas: eksportir furnitur menengah): tuntutan ketertelusuran bahan baku dan jejak karbon; dilema biaya jangka pendek vs keberlanjutan, alternatif, dan rekomendasi (tema 10).
- T09 (analisis; sangat sulit; pembuka: kronologi; entitas: bank pembangunan daerah): empat tahun bolak-balik antara sentralisasi dan desentralisasi keputusan kredit; analisis dampak, evaluasi pilihan struktur, dan rekomendasi (tema 11).
- T10 (teori; sangat sulit; ragam: banding-kontras dan perkembangan teori): kepemimpinan transformasional, kepemimpinan yang melayani (servant), dan kepemimpinan adaptif; mana yang lebih sesuai untuk organisasi yang pekerjaannya banyak diubah AI, dan apa yang perlu ditambahkan pada teori lama.
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 220, MSK-ESA-001 s.d. 070, MSK-KAS-001 s.d. 035) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.5):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Rubrik menilai kualitas penalaran, ketepatan konsep, dan penggunaan data; acceptableAlternatives menyebut kerangka atau sudut pandang lain yang sah beserta syarat nilai penuhnya.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.5. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.5, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
- Contoh soal ujian lama di Project hanya salah satu sumber gaya, bukan cetakan.
Konteks ekonomi (wajib):
- Kaitkan setiap soal dengan situasi perekonomian Indonesia dan global dalam tiga tahun terakhir (2023-2026) serta tantangan yang dihadapi ke depan, yang relevan dengan topiknya. Pilih tema yang paling cocok dari daftar di bawah; jangan memaksakan tema yang tidak relevan. Dalam satu batch, pakai tema yang beragam.
- Fakta ekonomi dipakai dengan tiga aturan:
  (a) Fakta yang terverifikasi boleh disebut sebagai peristiwa nyata dengan tanggal atau periodenya. Contoh: peluncuran BPI Danantara 24 Februari 2025 (UU 1/2025, PP 10/2025); pajak minimum global PMK 136/2024 (IIR dan DMTT mulai 1 Januari 2025, UTPR mulai 1 Januari 2026); tarif resiprokal Amerika Serikat yang diumumkan 2 April 2025. Tulis sumbernya (nama peraturan atau lembaga dan tanggal) di authoring.notes.
  (b) Fakta yang tidak dapat Anda pastikan disajikan sebagai skenario hipotetis yang dinyatakan jelas, mis. "Diasumsikan pemerintah negara X menetapkan ...". Fakta yang meragukan jangan disajikan sebagai kejadian nyata.
  (c) Fakta yang benar tetapi bukan kompetensi yang diuji tetap hanya latar. Semua informasi untuk menjawab (tarif, tanggal berlaku, produk yang terkena, kurs, suku bunga) wajib diberikan di stem atau caseData. Soal menguji pemahaman dan penerapan konsep, bukan hafalan berita. Untuk soal teori, konteks ekonomi cukup menjadi latar singkat di stem.
- Tantangan ke depan (mis. 2027-2030) disajikan sebagai skenario atau proyeksi yang dinyatakan di soal, mis. "Manajemen memperkirakan ..." atau "Diasumsikan mulai 2028 ...". Peserta diminta mengantisipasi, menilai kesiapan, atau merencanakan respons. Kunci jawaban tidak bergantung pada prediksi di luar soal.
- Angka pasar (suku bunga, kurs, inflasi, harga komoditas, pangsa pasar) adalah angka asumsi dan ditulis "diasumsikan", kecuali angka itu fakta terverifikasi menurut aturan (a).
- Kebijakan yang berubah dari waktu ke waktu (tarif perdagangan, aturan pajak) wajib dikaitkan dengan periode kasus. Jangan menganggap tarif atau ketentuan 2025 masih berlaku saat ini. Bila soal menghitung dampak tarif, sebutkan tarif, tanggal berlaku, jenis produk, dan asumsi perhitungannya.
- Perusahaan dan tokoh dalam soal tetap fiktif. Lembaga dan kebijakan publik nyata boleh disebut menurut aturan (a).
- Kunci jawaban tidak boleh bergantung pada fakta ekonomi di luar soal. Semua informasi yang dibutuhkan ada di stem atau caseData.
Tema:
1. Suku bunga tinggi 2023-2024 lalu turun bertahap: biaya modal, waktu ekspansi, pendanaan strategi.
2. Pelemahan dan volatilitas rupiah: ketergantungan bahan baku impor, peluang ekspor, lindung nilai operasional.
3. Tarif resiprokal Amerika Serikat (diumumkan 2 April 2025; tarif untuk Indonesia berubah selama negosiasi, jadi soal wajib menyebut tarif yang diasumsikan dan periodenya), relokasi rantai pasok global, dan diversifikasi pasar ekspor melalui perjanjian dagang: strategi internasional (T06), lingkungan eksternal (T02).
4. Hilirisasi mineral dan industri baterai/kendaraan listrik: integrasi vertikal, aliansi dan usaha patungan dengan mitra asing (T06, T07).
5. Restrukturisasi BUMN di bawah BPI Danantara (diluncurkan 24 Februari 2025); grup dan anak usaha dalam soal tetap fiktif: strategi korporat dan portofolio (T07), struktur dan tata kelola (T09, K04).
6. Program pemerintah berskala besar (mis. program makan bergizi) yang membuka peluang dan risiko bagi rantai pasok UMKM pangan: T02, T05.
7. Melemahnya daya beli kelas menengah: strategi generik, value positioning, dan penyesuaian bauran produk (T04).
8. PHK di industri padat karya dan otomasi: SDM dan operasi (T09), perubahan organisasi (T11), etika (T08).
9. Ekonomi digital, AI generatif, serta konsolidasi e-commerce dan social commerce: strategi informasi dan analisis data (T12), keunggulan bersaing (T03, T04).
10. Transisi energi dan tuntutan ESG dari investor, pembeli global, dan regulator: CSR dan keberlanjutan (T08), visi-misi (T01).
11. Kasus tata kelola dan gagal bayar di lembaga keuangan nonbank, koperasi, dan pinjaman daring: etika (T08), manajemen risiko dan tata kelola (K04).
12. Gangguan logistik dan ketegangan geopolitik: risiko rantai pasok, ketahanan operasi (T06, T09).
13. Tantangan ke depan: AI dan otomasi pekerjaan profesional, perlindungan data pribadi dan keamanan siber (UU 27/2022 tentang Pelindungan Data Pribadi), perdagangan karbon (Bursa Karbon Indonesia diluncurkan 26 September 2023) dan target net zero, perubahan demografi dan pola konsumsi. Proyeksi ke depan selalu dinyatakan sebagai skenario atau asumsi: visi-misi dan arah perusahaan (T01), lingkungan eksternal (T02), kapabilitas (T03), perubahan (T11), informasi dan data (T12).
```

## 3. MSK-B59 (case mini)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B59
Tipe: case | Jumlah: 2 | ID mulai: MSK-KAS-036
Sebaran topik: MSK-KAS-036 T04, T05; MSK-KAS-037 T08, T10
Sebaran kesulitan: mudah 2
Ukuran kasus: mini
Level kognitif: C3
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus mini mudah (15 menit): C3, narasi + data ≤ 300 kata, 2 sub, jawaban ideal semua sub ≤ 230 kata; tiap sub menerapkan satu konsep.
- MSK-KAS-036 (mudah; T04, T05; pembuka: peristiwa; entitas: usaha roti dengan 12 gerai (CV)): harga tepung naik karena rupiah melemah (tema 2). (a) analisis: pilihan posisi bersaing dari data harga dan biaya; (b) teori, ragam asumsi: asumsi di balik strategi biaya rendah dan apakah asumsi itu terpenuhi di pasar roti lokal.
- MSK-KAS-037 (mudah; T08, T10; pembuka: dokumen (ringkasan laporan saluran pengaduan); entitas: BUMD transportasi bus kota): dugaan pungutan oleh pengawas lapangan (tema 11). (a) teori, ragam keterbatasan: mengapa kode etik tertulis tidak cukup tanpa budaya dan teladan pemimpin; (b) analisis: tindakan pertama direktur utama dan alasannya.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 220, MSK-ESA-001 s.d. 070, MSK-KAS-001 s.d. 035) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.5):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Rubrik menilai kualitas penalaran, ketepatan konsep, dan penggunaan data; acceptableAlternatives menyebut kerangka atau sudut pandang lain yang sah beserta syarat nilai penuhnya.
- Setiap kasus memuat tepat satu sub teori (tertulis di rincian kasus). Paling banyak dua sub menyebut nama alat analisis; alur kedua kasus berbeda.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.5. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.5, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
- Contoh soal ujian lama di Project hanya salah satu sumber gaya, bukan cetakan.
Konteks ekonomi (wajib):
- Kaitkan setiap soal dengan situasi perekonomian Indonesia dan global dalam tiga tahun terakhir (2023-2026) serta tantangan yang dihadapi ke depan, yang relevan dengan topiknya. Pilih tema yang paling cocok dari daftar di bawah; jangan memaksakan tema yang tidak relevan. Dalam satu batch, pakai tema yang beragam.
- Fakta ekonomi dipakai dengan tiga aturan:
  (a) Fakta yang terverifikasi boleh disebut sebagai peristiwa nyata dengan tanggal atau periodenya. Contoh: peluncuran BPI Danantara 24 Februari 2025 (UU 1/2025, PP 10/2025); pajak minimum global PMK 136/2024 (IIR dan DMTT mulai 1 Januari 2025, UTPR mulai 1 Januari 2026); tarif resiprokal Amerika Serikat yang diumumkan 2 April 2025. Tulis sumbernya (nama peraturan atau lembaga dan tanggal) di authoring.notes.
  (b) Fakta yang tidak dapat Anda pastikan disajikan sebagai skenario hipotetis yang dinyatakan jelas, mis. "Diasumsikan pemerintah negara X menetapkan ...". Fakta yang meragukan jangan disajikan sebagai kejadian nyata.
  (c) Fakta yang benar tetapi bukan kompetensi yang diuji tetap hanya latar. Semua informasi untuk menjawab (tarif, tanggal berlaku, produk yang terkena, kurs, suku bunga) wajib diberikan di stem atau caseData. Soal menguji pemahaman dan penerapan konsep, bukan hafalan berita. Untuk soal teori, konteks ekonomi cukup menjadi latar singkat di stem.
- Tantangan ke depan (mis. 2027-2030) disajikan sebagai skenario atau proyeksi yang dinyatakan di soal, mis. "Manajemen memperkirakan ..." atau "Diasumsikan mulai 2028 ...". Peserta diminta mengantisipasi, menilai kesiapan, atau merencanakan respons. Kunci jawaban tidak bergantung pada prediksi di luar soal.
- Angka pasar (suku bunga, kurs, inflasi, harga komoditas, pangsa pasar) adalah angka asumsi dan ditulis "diasumsikan", kecuali angka itu fakta terverifikasi menurut aturan (a).
- Kebijakan yang berubah dari waktu ke waktu (tarif perdagangan, aturan pajak) wajib dikaitkan dengan periode kasus. Jangan menganggap tarif atau ketentuan 2025 masih berlaku saat ini. Bila soal menghitung dampak tarif, sebutkan tarif, tanggal berlaku, jenis produk, dan asumsi perhitungannya.
- Perusahaan dan tokoh dalam soal tetap fiktif. Lembaga dan kebijakan publik nyata boleh disebut menurut aturan (a).
- Kunci jawaban tidak boleh bergantung pada fakta ekonomi di luar soal. Semua informasi yang dibutuhkan ada di stem atau caseData.
Tema:
1. Suku bunga tinggi 2023-2024 lalu turun bertahap: biaya modal, waktu ekspansi, pendanaan strategi.
2. Pelemahan dan volatilitas rupiah: ketergantungan bahan baku impor, peluang ekspor, lindung nilai operasional.
3. Tarif resiprokal Amerika Serikat (diumumkan 2 April 2025; tarif untuk Indonesia berubah selama negosiasi, jadi soal wajib menyebut tarif yang diasumsikan dan periodenya), relokasi rantai pasok global, dan diversifikasi pasar ekspor melalui perjanjian dagang: strategi internasional (T06), lingkungan eksternal (T02).
4. Hilirisasi mineral dan industri baterai/kendaraan listrik: integrasi vertikal, aliansi dan usaha patungan dengan mitra asing (T06, T07).
5. Restrukturisasi BUMN di bawah BPI Danantara (diluncurkan 24 Februari 2025); grup dan anak usaha dalam soal tetap fiktif: strategi korporat dan portofolio (T07), struktur dan tata kelola (T09, K04).
6. Program pemerintah berskala besar (mis. program makan bergizi) yang membuka peluang dan risiko bagi rantai pasok UMKM pangan: T02, T05.
7. Melemahnya daya beli kelas menengah: strategi generik, value positioning, dan penyesuaian bauran produk (T04).
8. PHK di industri padat karya dan otomasi: SDM dan operasi (T09), perubahan organisasi (T11), etika (T08).
9. Ekonomi digital, AI generatif, serta konsolidasi e-commerce dan social commerce: strategi informasi dan analisis data (T12), keunggulan bersaing (T03, T04).
10. Transisi energi dan tuntutan ESG dari investor, pembeli global, dan regulator: CSR dan keberlanjutan (T08), visi-misi (T01).
11. Kasus tata kelola dan gagal bayar di lembaga keuangan nonbank, koperasi, dan pinjaman daring: etika (T08), manajemen risiko dan tata kelola (K04).
12. Gangguan logistik dan ketegangan geopolitik: risiko rantai pasok, ketahanan operasi (T06, T09).
13. Tantangan ke depan: AI dan otomasi pekerjaan profesional, perlindungan data pribadi dan keamanan siber (UU 27/2022 tentang Pelindungan Data Pribadi), perdagangan karbon (Bursa Karbon Indonesia diluncurkan 26 September 2023) dan target net zero, perubahan demografi dan pola konsumsi. Proyeksi ke depan selalu dinyatakan sebagai skenario atau asumsi: visi-misi dan arah perusahaan (T01), lingkungan eksternal (T02), kapabilitas (T03), perubahan (T11), informasi dan data (T12).
```

## 4. MSK-B60 (case mini)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B60
Tipe: case | Jumlah: 2 | ID mulai: MSK-KAS-038
Sebaran topik: MSK-KAS-038 T06, T02; MSK-KAS-039 T09, T12, T10
Sebaran kesulitan: sedang 2
Ukuran kasus: mini
Level kognitif: C3-C4
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus mini sedang (20 menit): C3-C4, narasi + data ≤ 400 kata, 2-3 sub, jawaban ideal semua sub ≤ 320 kata.
- MSK-KAS-038 (sedang; T06, T02; pembuka: kronologi; entitas: perusahaan patungan Indonesia-Korea (fiktif) produsen komponen sepeda listrik): masuk pasar Amerika Serikat pada 2024 lalu terkena tarif yang diasumsikan untuk periode kasus (tema 3, 4). (a) analisis: mengapa keputusan masuk pasar itu gagal, tanpa menyebut nama kerangka; (b) teori, ragam keterbatasan: keterbatasan analisis lingkungan yang dilakukan sekali setahun dan peran analisis skenario; (c) rekomendasi pasar alternatif dengan data kasus.
- MSK-KAS-039 (sedang; T09, T12, T10; pembuka: perdebatan; entitas: rumah sakit daerah berstatus BLUD): dua kepala bidang berbeda pendapat tentang penerapan rekam medis elektronik (tema 13). (a) analisis: bandingkan kedua usulan dengan data kasus; (b) teori, ragam banding-kontras: sentralisasi vs desentralisasi pengambilan keputusan dan kapan masing-masing tepat; (c) bagaimana direktur seharusnya memimpin implementasinya.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 220, MSK-ESA-001 s.d. 070, MSK-KAS-001 s.d. 035) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.5):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Rubrik menilai kualitas penalaran, ketepatan konsep, dan penggunaan data; acceptableAlternatives menyebut kerangka atau sudut pandang lain yang sah beserta syarat nilai penuhnya.
- Setiap kasus memuat tepat satu sub teori (tertulis di rincian kasus). Paling banyak dua sub menyebut nama alat analisis; alur kedua kasus berbeda.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.5. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.5, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
- Contoh soal ujian lama di Project hanya salah satu sumber gaya, bukan cetakan.
Konteks ekonomi (wajib):
- Kaitkan setiap soal dengan situasi perekonomian Indonesia dan global dalam tiga tahun terakhir (2023-2026) serta tantangan yang dihadapi ke depan, yang relevan dengan topiknya. Pilih tema yang paling cocok dari daftar di bawah; jangan memaksakan tema yang tidak relevan. Dalam satu batch, pakai tema yang beragam.
- Fakta ekonomi dipakai dengan tiga aturan:
  (a) Fakta yang terverifikasi boleh disebut sebagai peristiwa nyata dengan tanggal atau periodenya. Contoh: peluncuran BPI Danantara 24 Februari 2025 (UU 1/2025, PP 10/2025); pajak minimum global PMK 136/2024 (IIR dan DMTT mulai 1 Januari 2025, UTPR mulai 1 Januari 2026); tarif resiprokal Amerika Serikat yang diumumkan 2 April 2025. Tulis sumbernya (nama peraturan atau lembaga dan tanggal) di authoring.notes.
  (b) Fakta yang tidak dapat Anda pastikan disajikan sebagai skenario hipotetis yang dinyatakan jelas, mis. "Diasumsikan pemerintah negara X menetapkan ...". Fakta yang meragukan jangan disajikan sebagai kejadian nyata.
  (c) Fakta yang benar tetapi bukan kompetensi yang diuji tetap hanya latar. Semua informasi untuk menjawab (tarif, tanggal berlaku, produk yang terkena, kurs, suku bunga) wajib diberikan di stem atau caseData. Soal menguji pemahaman dan penerapan konsep, bukan hafalan berita. Untuk soal teori, konteks ekonomi cukup menjadi latar singkat di stem.
- Tantangan ke depan (mis. 2027-2030) disajikan sebagai skenario atau proyeksi yang dinyatakan di soal, mis. "Manajemen memperkirakan ..." atau "Diasumsikan mulai 2028 ...". Peserta diminta mengantisipasi, menilai kesiapan, atau merencanakan respons. Kunci jawaban tidak bergantung pada prediksi di luar soal.
- Angka pasar (suku bunga, kurs, inflasi, harga komoditas, pangsa pasar) adalah angka asumsi dan ditulis "diasumsikan", kecuali angka itu fakta terverifikasi menurut aturan (a).
- Kebijakan yang berubah dari waktu ke waktu (tarif perdagangan, aturan pajak) wajib dikaitkan dengan periode kasus. Jangan menganggap tarif atau ketentuan 2025 masih berlaku saat ini. Bila soal menghitung dampak tarif, sebutkan tarif, tanggal berlaku, jenis produk, dan asumsi perhitungannya.
- Perusahaan dan tokoh dalam soal tetap fiktif. Lembaga dan kebijakan publik nyata boleh disebut menurut aturan (a).
- Kunci jawaban tidak boleh bergantung pada fakta ekonomi di luar soal. Semua informasi yang dibutuhkan ada di stem atau caseData.
Tema:
1. Suku bunga tinggi 2023-2024 lalu turun bertahap: biaya modal, waktu ekspansi, pendanaan strategi.
2. Pelemahan dan volatilitas rupiah: ketergantungan bahan baku impor, peluang ekspor, lindung nilai operasional.
3. Tarif resiprokal Amerika Serikat (diumumkan 2 April 2025; tarif untuk Indonesia berubah selama negosiasi, jadi soal wajib menyebut tarif yang diasumsikan dan periodenya), relokasi rantai pasok global, dan diversifikasi pasar ekspor melalui perjanjian dagang: strategi internasional (T06), lingkungan eksternal (T02).
4. Hilirisasi mineral dan industri baterai/kendaraan listrik: integrasi vertikal, aliansi dan usaha patungan dengan mitra asing (T06, T07).
5. Restrukturisasi BUMN di bawah BPI Danantara (diluncurkan 24 Februari 2025); grup dan anak usaha dalam soal tetap fiktif: strategi korporat dan portofolio (T07), struktur dan tata kelola (T09, K04).
6. Program pemerintah berskala besar (mis. program makan bergizi) yang membuka peluang dan risiko bagi rantai pasok UMKM pangan: T02, T05.
7. Melemahnya daya beli kelas menengah: strategi generik, value positioning, dan penyesuaian bauran produk (T04).
8. PHK di industri padat karya dan otomasi: SDM dan operasi (T09), perubahan organisasi (T11), etika (T08).
9. Ekonomi digital, AI generatif, serta konsolidasi e-commerce dan social commerce: strategi informasi dan analisis data (T12), keunggulan bersaing (T03, T04).
10. Transisi energi dan tuntutan ESG dari investor, pembeli global, dan regulator: CSR dan keberlanjutan (T08), visi-misi (T01).
11. Kasus tata kelola dan gagal bayar di lembaga keuangan nonbank, koperasi, dan pinjaman daring: etika (T08), manajemen risiko dan tata kelola (K04).
12. Gangguan logistik dan ketegangan geopolitik: risiko rantai pasok, ketahanan operasi (T06, T09).
13. Tantangan ke depan: AI dan otomasi pekerjaan profesional, perlindungan data pribadi dan keamanan siber (UU 27/2022 tentang Pelindungan Data Pribadi), perdagangan karbon (Bursa Karbon Indonesia diluncurkan 26 September 2023) dan target net zero, perubahan demografi dan pola konsumsi. Proyeksi ke depan selalu dinyatakan sebagai skenario atau asumsi: visi-misi dan arah perusahaan (T01), lingkungan eksternal (T02), kapabilitas (T03), perubahan (T11), informasi dan data (T12).
```

## 5. MSK-B61 (mcq)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B61
Tipe: mcq | Jumlah: 10 | ID mulai: MSK-MCQ-231
Sebaran topik: T02 1, T03 1, T04 1, T05 1, T06 1, T07 1, T08 1, T10 1, T11 1, T12 1
Sebaran kesulitan: sedang 10
Ukuran kasus: -
Level kognitif: C3
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 4 soal teori dan 6 soal analisis (40%; batas 40%).
- PG sedang (1,5 menit): C3, penerapan pada situasi, stem + opsi ≤ 120 kata, maks 1 langkah hitung.
- T02 (analisis; sedang; pembuka: tanpa nama ("Sebuah usaha sangrai kopi di ..."); entitas: UMKM pengolahan kopi): mengenali pendorong perubahan industri setelah penjualan pindah ke social commerce (tema 9).
- T03 (analisis; sedang; pembuka: data; entitas: anak usaha BUMN pelabuhan): tabel biaya per peti kemas dibanding pesaing untuk menentukan aktivitas rantai nilai yang perlu dibenahi (tema 12).
- T04 (teori; sedang; ragam: sebab-akibat): mengapa keunggulan penggerak pertama dapat berbalik menjadi kerugian, dan kondisi industri yang menyebabkannya.
- T05 (analisis; sedang; pembuka: dokumen (notulen rapat); entitas: produsen alas kaki Tbk): menentukan strategi fungsional SDM yang paling sesuai saat sebagian lini diotomasi (tema 8).
- T06 (teori; sedang; ragam: alasan konseptual): mengapa perusahaan multinasional memakai subsidi silang lintas negara untuk bertahan terhadap pesaing global, dan risikonya.
- T07 (analisis; sedang; pembuka: profil; entitas: grup perkebunan milik keluarga): memilih lini usaha tidak terkait yang paling layak dilepas saat grup beralih ke energi terbarukan (tema 10).
- T08 (teori; sedang; ragam: menemukan kekeliruan): argumen singkat seorang direktur yang menyamakan tanggung jawab sosial dengan filantropi; peserta menunjukkan letak kekeliruannya.
- T10 (analisis; sedang; pembuka: peran ("Anda baru diangkat sebagai ketua ..."); entitas: yayasan pendidikan): budaya organisasi yang tidak mendukung strategi pembelajaran digital; memilih tindakan pertama pemimpin (tema 13).
- T11 (teori; sedang; ragam: banding-kontras): model perubahan Lewin vs Kotter: perbedaan asumsi dan kapan masing-masing lebih tepat.
- T12 (analisis; sedang; pembuka: peristiwa; entitas: perusahaan pembiayaan (multifinance)): kebocoran data pelanggan; memilih keputusan tata kelola data yang paling tepat (tema 13, UU 27/2022).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 220, MSK-ESA-001 s.d. 070, MSK-KAS-001 s.d. 035) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.5):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.5. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.5, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
- Contoh soal ujian lama di Project hanya salah satu sumber gaya, bukan cetakan.
Konteks ekonomi (wajib):
- Kaitkan setiap soal dengan situasi perekonomian Indonesia dan global dalam tiga tahun terakhir (2023-2026) serta tantangan yang dihadapi ke depan, yang relevan dengan topiknya. Pilih tema yang paling cocok dari daftar di bawah; jangan memaksakan tema yang tidak relevan. Dalam satu batch, pakai tema yang beragam.
- Fakta ekonomi dipakai dengan tiga aturan:
  (a) Fakta yang terverifikasi boleh disebut sebagai peristiwa nyata dengan tanggal atau periodenya. Contoh: peluncuran BPI Danantara 24 Februari 2025 (UU 1/2025, PP 10/2025); pajak minimum global PMK 136/2024 (IIR dan DMTT mulai 1 Januari 2025, UTPR mulai 1 Januari 2026); tarif resiprokal Amerika Serikat yang diumumkan 2 April 2025. Tulis sumbernya (nama peraturan atau lembaga dan tanggal) di authoring.notes.
  (b) Fakta yang tidak dapat Anda pastikan disajikan sebagai skenario hipotetis yang dinyatakan jelas, mis. "Diasumsikan pemerintah negara X menetapkan ...". Fakta yang meragukan jangan disajikan sebagai kejadian nyata.
  (c) Fakta yang benar tetapi bukan kompetensi yang diuji tetap hanya latar. Semua informasi untuk menjawab (tarif, tanggal berlaku, produk yang terkena, kurs, suku bunga) wajib diberikan di stem atau caseData. Soal menguji pemahaman dan penerapan konsep, bukan hafalan berita. Untuk soal teori, konteks ekonomi cukup menjadi latar singkat di stem.
- Tantangan ke depan (mis. 2027-2030) disajikan sebagai skenario atau proyeksi yang dinyatakan di soal, mis. "Manajemen memperkirakan ..." atau "Diasumsikan mulai 2028 ...". Peserta diminta mengantisipasi, menilai kesiapan, atau merencanakan respons. Kunci jawaban tidak bergantung pada prediksi di luar soal.
- Angka pasar (suku bunga, kurs, inflasi, harga komoditas, pangsa pasar) adalah angka asumsi dan ditulis "diasumsikan", kecuali angka itu fakta terverifikasi menurut aturan (a).
- Kebijakan yang berubah dari waktu ke waktu (tarif perdagangan, aturan pajak) wajib dikaitkan dengan periode kasus. Jangan menganggap tarif atau ketentuan 2025 masih berlaku saat ini. Bila soal menghitung dampak tarif, sebutkan tarif, tanggal berlaku, jenis produk, dan asumsi perhitungannya.
- Perusahaan dan tokoh dalam soal tetap fiktif. Lembaga dan kebijakan publik nyata boleh disebut menurut aturan (a).
- Kunci jawaban tidak boleh bergantung pada fakta ekonomi di luar soal. Semua informasi yang dibutuhkan ada di stem atau caseData.
Tema:
1. Suku bunga tinggi 2023-2024 lalu turun bertahap: biaya modal, waktu ekspansi, pendanaan strategi.
2. Pelemahan dan volatilitas rupiah: ketergantungan bahan baku impor, peluang ekspor, lindung nilai operasional.
3. Tarif resiprokal Amerika Serikat (diumumkan 2 April 2025; tarif untuk Indonesia berubah selama negosiasi, jadi soal wajib menyebut tarif yang diasumsikan dan periodenya), relokasi rantai pasok global, dan diversifikasi pasar ekspor melalui perjanjian dagang: strategi internasional (T06), lingkungan eksternal (T02).
4. Hilirisasi mineral dan industri baterai/kendaraan listrik: integrasi vertikal, aliansi dan usaha patungan dengan mitra asing (T06, T07).
5. Restrukturisasi BUMN di bawah BPI Danantara (diluncurkan 24 Februari 2025); grup dan anak usaha dalam soal tetap fiktif: strategi korporat dan portofolio (T07), struktur dan tata kelola (T09, K04).
6. Program pemerintah berskala besar (mis. program makan bergizi) yang membuka peluang dan risiko bagi rantai pasok UMKM pangan: T02, T05.
7. Melemahnya daya beli kelas menengah: strategi generik, value positioning, dan penyesuaian bauran produk (T04).
8. PHK di industri padat karya dan otomasi: SDM dan operasi (T09), perubahan organisasi (T11), etika (T08).
9. Ekonomi digital, AI generatif, serta konsolidasi e-commerce dan social commerce: strategi informasi dan analisis data (T12), keunggulan bersaing (T03, T04).
10. Transisi energi dan tuntutan ESG dari investor, pembeli global, dan regulator: CSR dan keberlanjutan (T08), visi-misi (T01).
11. Kasus tata kelola dan gagal bayar di lembaga keuangan nonbank, koperasi, dan pinjaman daring: etika (T08), manajemen risiko dan tata kelola (K04).
12. Gangguan logistik dan ketegangan geopolitik: risiko rantai pasok, ketahanan operasi (T06, T09).
13. Tantangan ke depan: AI dan otomasi pekerjaan profesional, perlindungan data pribadi dan keamanan siber (UU 27/2022 tentang Pelindungan Data Pribadi), perdagangan karbon (Bursa Karbon Indonesia diluncurkan 26 September 2023) dan target net zero, perubahan demografi dan pola konsumsi. Proyeksi ke depan selalu dinyatakan sebagai skenario atau asumsi: visi-misi dan arah perusahaan (T01), lingkungan eksternal (T02), kapabilitas (T03), perubahan (T11), informasi dan data (T12).
```

## 6. MSK-B62 (essay)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B62
Tipe: essay | Jumlah: 5 | ID mulai: MSK-ESA-076
Sebaran topik: T01 1, T03 1, T05 1, T11 1, T12 1
Sebaran kesulitan: mudah 2, sedang 2, sulit 1
Ukuran kasus: -
Level kognitif: C2-C3; C3; C4 (sesuai tingkat setiap soal)
Catatan khusus:
- Bentuk: 2 soal teori dan 3 soal analisis (40%; batas 40%).
- Esai mudah (6 menit): C2-C3, 1 perintah (jelaskan/identifikasi), stem ≤ 120 kata, jawaban ideal ≤ 100 kata, 3 kriteria rubrik.
- Esai sedang (10 menit): C3, 2 perintah, penerapan, stem ≤ 150 kata, jawaban ideal ≤ 170 kata.
- Esai sulit (15 menit): C4, 2-3 perintah, analisis + rekomendasi, stem ≤ 200 kata, jawaban ideal ≤ 250 kata.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- T01 (teori; mudah; ragam: alasan konseptual): mengapa perusahaan perlu tujuan stratejik selain tujuan finansial.
- T03 (analisis; mudah; pembuka: tanpa nama ("Sebuah bengkel ..."); entitas: UMKM bengkel kendaraan listrik): mengidentifikasi sumber daya yang paling sulit ditiru pesaing dan alasannya (tema 4).
- T11 (teori; sedang; ragam: menilai pernyataan): "Resistensi terhadap perubahan selalu harus dihilangkan secepatnya." Peserta menilai bagian yang benar dan yang keliru, lalu menjelaskan pendekatan yang lebih tepat.
- T05 (analisis; sedang; pembuka: data; entitas: perusahaan katering pemasok program makan bergizi): data kapasitas dapur dan keluhan mutu; menentukan dua prioritas strategi operasi (tema 6).
- T12 (analisis; sulit; pembuka: peran ("Anda kepala analitik ..."); entitas: perusahaan asuransi umum Tbk): usulan AI generatif untuk memproses klaim; analisis manfaat dan risiko, lalu rekomendasi pengendalian (tema 13, ke depan).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 220, MSK-ESA-001 s.d. 070, MSK-KAS-001 s.d. 035) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.5):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Rubrik menilai kualitas penalaran, ketepatan konsep, dan penggunaan data; acceptableAlternatives menyebut kerangka atau sudut pandang lain yang sah beserta syarat nilai penuhnya.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.5. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.5, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
- Contoh soal ujian lama di Project hanya salah satu sumber gaya, bukan cetakan.
Konteks ekonomi (wajib):
- Kaitkan setiap soal dengan situasi perekonomian Indonesia dan global dalam tiga tahun terakhir (2023-2026) serta tantangan yang dihadapi ke depan, yang relevan dengan topiknya. Pilih tema yang paling cocok dari daftar di bawah; jangan memaksakan tema yang tidak relevan. Dalam satu batch, pakai tema yang beragam.
- Fakta ekonomi dipakai dengan tiga aturan:
  (a) Fakta yang terverifikasi boleh disebut sebagai peristiwa nyata dengan tanggal atau periodenya. Contoh: peluncuran BPI Danantara 24 Februari 2025 (UU 1/2025, PP 10/2025); pajak minimum global PMK 136/2024 (IIR dan DMTT mulai 1 Januari 2025, UTPR mulai 1 Januari 2026); tarif resiprokal Amerika Serikat yang diumumkan 2 April 2025. Tulis sumbernya (nama peraturan atau lembaga dan tanggal) di authoring.notes.
  (b) Fakta yang tidak dapat Anda pastikan disajikan sebagai skenario hipotetis yang dinyatakan jelas, mis. "Diasumsikan pemerintah negara X menetapkan ...". Fakta yang meragukan jangan disajikan sebagai kejadian nyata.
  (c) Fakta yang benar tetapi bukan kompetensi yang diuji tetap hanya latar. Semua informasi untuk menjawab (tarif, tanggal berlaku, produk yang terkena, kurs, suku bunga) wajib diberikan di stem atau caseData. Soal menguji pemahaman dan penerapan konsep, bukan hafalan berita. Untuk soal teori, konteks ekonomi cukup menjadi latar singkat di stem.
- Tantangan ke depan (mis. 2027-2030) disajikan sebagai skenario atau proyeksi yang dinyatakan di soal, mis. "Manajemen memperkirakan ..." atau "Diasumsikan mulai 2028 ...". Peserta diminta mengantisipasi, menilai kesiapan, atau merencanakan respons. Kunci jawaban tidak bergantung pada prediksi di luar soal.
- Angka pasar (suku bunga, kurs, inflasi, harga komoditas, pangsa pasar) adalah angka asumsi dan ditulis "diasumsikan", kecuali angka itu fakta terverifikasi menurut aturan (a).
- Kebijakan yang berubah dari waktu ke waktu (tarif perdagangan, aturan pajak) wajib dikaitkan dengan periode kasus. Jangan menganggap tarif atau ketentuan 2025 masih berlaku saat ini. Bila soal menghitung dampak tarif, sebutkan tarif, tanggal berlaku, jenis produk, dan asumsi perhitungannya.
- Perusahaan dan tokoh dalam soal tetap fiktif. Lembaga dan kebijakan publik nyata boleh disebut menurut aturan (a).
- Kunci jawaban tidak boleh bergantung pada fakta ekonomi di luar soal. Semua informasi yang dibutuhkan ada di stem atau caseData.
Tema:
1. Suku bunga tinggi 2023-2024 lalu turun bertahap: biaya modal, waktu ekspansi, pendanaan strategi.
2. Pelemahan dan volatilitas rupiah: ketergantungan bahan baku impor, peluang ekspor, lindung nilai operasional.
3. Tarif resiprokal Amerika Serikat (diumumkan 2 April 2025; tarif untuk Indonesia berubah selama negosiasi, jadi soal wajib menyebut tarif yang diasumsikan dan periodenya), relokasi rantai pasok global, dan diversifikasi pasar ekspor melalui perjanjian dagang: strategi internasional (T06), lingkungan eksternal (T02).
4. Hilirisasi mineral dan industri baterai/kendaraan listrik: integrasi vertikal, aliansi dan usaha patungan dengan mitra asing (T06, T07).
5. Restrukturisasi BUMN di bawah BPI Danantara (diluncurkan 24 Februari 2025); grup dan anak usaha dalam soal tetap fiktif: strategi korporat dan portofolio (T07), struktur dan tata kelola (T09, K04).
6. Program pemerintah berskala besar (mis. program makan bergizi) yang membuka peluang dan risiko bagi rantai pasok UMKM pangan: T02, T05.
7. Melemahnya daya beli kelas menengah: strategi generik, value positioning, dan penyesuaian bauran produk (T04).
8. PHK di industri padat karya dan otomasi: SDM dan operasi (T09), perubahan organisasi (T11), etika (T08).
9. Ekonomi digital, AI generatif, serta konsolidasi e-commerce dan social commerce: strategi informasi dan analisis data (T12), keunggulan bersaing (T03, T04).
10. Transisi energi dan tuntutan ESG dari investor, pembeli global, dan regulator: CSR dan keberlanjutan (T08), visi-misi (T01).
11. Kasus tata kelola dan gagal bayar di lembaga keuangan nonbank, koperasi, dan pinjaman daring: etika (T08), manajemen risiko dan tata kelola (K04).
12. Gangguan logistik dan ketegangan geopolitik: risiko rantai pasok, ketahanan operasi (T06, T09).
13. Tantangan ke depan: AI dan otomasi pekerjaan profesional, perlindungan data pribadi dan keamanan siber (UU 27/2022 tentang Pelindungan Data Pribadi), perdagangan karbon (Bursa Karbon Indonesia diluncurkan 26 September 2023) dan target net zero, perubahan demografi dan pola konsumsi. Proyeksi ke depan selalu dinyatakan sebagai skenario atau asumsi: visi-misi dan arah perusahaan (T01), lingkungan eksternal (T02), kapabilitas (T03), perubahan (T11), informasi dan data (T12).
```
