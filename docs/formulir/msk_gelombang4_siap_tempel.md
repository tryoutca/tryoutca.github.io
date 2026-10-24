# MSK gelombang 4 — siap tempel

Formulir gelombang 4, disusun 2026-10-24 untuk Prompt B v4.4 (standar waktu per tingkat kesulitan, D-99; rencana D-102).
Tujuan: mengisi kekurangan stok soal LIVE per tingkat kesulitan agar semua paket Level 1-4 dan Simulasi dapat dimulai dan bervariasi (sasaran SPEC 7: per tingkat minimal 30 PG, 9 esai, 3 kasus).
Menggantikan formulir gelombang 3 yang belum dikerjakan. Nomor melanjutkan nomor tertinggi yang pernah direncanakan (gelombang 3: MSK-B37, MSK-MCQ-120, MSK-ESA-045, MSK-KAS-027) agar tidak bentrok dengan percakapan Project sebelumnya.

Stok soal LIVE pack MSK 1.5.2 per 2026-10-24 (mudah/sedang/sulit/sangat sulit) dan kekurangan terhadap sasaran:

| Tipe | Stok | Kurang | Rencana gelombang 4 | Sesudah gelombang 4 |
|---|---|---|---|---|
| PG | 5/11/11/3 | 25/19/19/27 | 30/20/20/30 | 35/31/31/33 |
| Esai | 1/4/7/3 | 8/5/2/6 | 10/5/3/7 | 11/9/10/10 |
| Kasus | 0/1/3/3 | 3/2/0/0 | 3/3/2/0 (mini, mini, komprehensif) | 3/4/5/3 |

Kasus sulit sekarang terdiri atas 2 mini dan 1 komprehensif; Simulasi hanya memakai kasus komprehensif sehingga gelombang ini menambah 2 kasus komprehensif sulit.

Cara pakai:
1. Pastikan instruksi Project Claude penyusun sudah memakai **Prompt B v4.4**, dan pengetahuan Project memuat `schema/CONTRACT.md` dan `docs/msk_taksonomi.md`.
2. Buka **satu percakapan baru**, lalu salin satu blok utuh per pesan, berurutan dari atas. Kerjakan **prioritas 1** lebih dulu: batch itu membuka paket yang sekarang belum dapat dimulai (Level 1, Level 4, dan Simulasi).
3. Impor setiap hasil ke Pengelola Bank Soal. Perhatikan peringatan standar waktu saat impor; minta penyusun memendekkan soal yang melewati batas sebelum review.
4. Review dengan Prompt C v4.3. Bila Project melaporkan Batch ID atau rentang ID sudah terpakai, naikkan nomornya.

Prioritas: 1 = membuka paket yang belum dapat dimulai; 2 = mencapai sasaran tingkat mudah dan sangat sulit; 3 = mencapai sasaran tingkat sedang dan sulit, serta 2 kasus komprehensif sulit agar kasus Simulasi bervariasi. Jumlah dibulatkan ke batch penuh sebagai cadangan untuk soal yang ditolak atau direvisi.

| Prioritas | Batch | Tipe | Jumlah | ID | Kesulitan |
|---|---|---|---|---|---|
| 1 | MSK-B38 | PG | 10 | MSK-MCQ-121 s.d. 130 | mudah 10 |
| 1 | MSK-B39 | PG | 10 | MSK-MCQ-131 s.d. 140 | sangat sulit 10 |
| 1 | MSK-B40 | Esai | 5 | MSK-ESA-046 s.d. 050 | mudah 5 |
| 1 | MSK-B41 | Kasus mini | 2 | MSK-KAS-028 s.d. 029 | mudah 2 |
| 2 | MSK-B42 | PG | 10 | MSK-MCQ-141 s.d. 150 | mudah 10 |
| 2 | MSK-B43 | PG | 10 | MSK-MCQ-151 s.d. 160 | mudah 10 |
| 2 | MSK-B44 | PG | 10 | MSK-MCQ-161 s.d. 170 | sangat sulit 10 |
| 2 | MSK-B45 | PG | 10 | MSK-MCQ-171 s.d. 180 | sangat sulit 10 |
| 2 | MSK-B46 | Esai | 5 | MSK-ESA-051 s.d. 055 | mudah 5 |
| 2 | MSK-B47 | Esai | 5 | MSK-ESA-056 s.d. 060 | sangat sulit 5 |
| 2 | MSK-B48 | Esai | 5 | MSK-ESA-061 s.d. 065 | sulit 3, sangat sulit 2 |
| 2 | MSK-B49 | Kasus mini | 2 | MSK-KAS-030 s.d. 031 | mudah 1, sedang 1 |
| 3 | MSK-B50 | PG | 10 | MSK-MCQ-181 s.d. 190 | sedang 10 |
| 3 | MSK-B51 | PG | 10 | MSK-MCQ-191 s.d. 200 | sedang 10 |
| 3 | MSK-B52 | PG | 10 | MSK-MCQ-201 s.d. 210 | sulit 10 |
| 3 | MSK-B53 | PG | 10 | MSK-MCQ-211 s.d. 220 | sulit 10 |
| 3 | MSK-B54 | Esai | 5 | MSK-ESA-066 s.d. 070 | sedang 5 |
| 3 | MSK-B55 | Kasus mini | 2 | MSK-KAS-032 s.d. 033 | sedang 2 |
| 3 | MSK-B56 | Kasus komprehensif | 2 | MSK-KAS-034 s.d. 035 | sulit 2 |

Gelombang 4 berakhir di MSK-B56 (MSK-MCQ-220, MSK-ESA-070, MSK-KAS-035).

## 1. MSK-B38 (mcq)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B38
Tipe: mcq | Jumlah: 10 | ID mulai: MSK-MCQ-121
Sebaran topik: T01 1, T02 1, T03 1, T04 1, T06 1, T07 1, T08 1, T09 1, T11 1, T12 1
Sebaran kesulitan: mudah 10
Ukuran kasus: -
Level kognitif: C2-C3
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 6 soal teori dan 4 soal analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- PG mudah (1 menit): C2-C3, satu konsep, stem + opsi ≤ 90 kata, tanpa hitungan. Situasi singkat paling banyak 1-2 kalimat; distraktor tetap miskonsepsi umum.
- T01 (analisis, mudah): menyelaraskan visi-misi BUMN fiktif setelah restrukturisasi (tema 5).
- T02 (analisis, mudah): dampak tarif dagang pada daya tarik industri (tema 3).
- T03 (teori, mudah): sumber daya, kapabilitas, dan kompetensi inti.
- T04 (teori, mudah): strategi generik dan risiko terjebak di tengah.
- T06 (teori, mudah): moda masuk pasar internasional.
- T07 (teori, mudah): diversifikasi terkait vs tidak terkait.
- T08 (teori, mudah): teori pemangku kepentingan vs pemegang saham.
- T09 (teori, mudah): kesesuaian struktur organisasi dengan strategi.
- T11 (analisis, mudah): transformasi digital koperasi (tema 9, 11).
- T12 (analisis, mudah): tata kelola AI generatif dalam layanan pelanggan (tema 9).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman teori dan kerangka akademik manajemen stratejik yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nama tokoh, atau tahun terbit.
- Analisis: skenario perusahaan fiktif dengan data; peserta menganalisis, menghitung, menilai, atau merekomendasikan.
- Tulis bentuk setiap soal di baris pertama authoring.notes: "Bentuk: teori" atau "Bentuk: analisis".
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

## 2. MSK-B39 (mcq)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B39
Tipe: mcq | Jumlah: 10 | ID mulai: MSK-MCQ-131
Sebaran topik: T01 1, T02 1, T03 1, T04 1, T05 1, T06 1, T07 1, T08 1, T10 1, T11 1
Sebaran kesulitan: sangat_sulit 10
Ukuran kasus: -
Level kognitif: C5-C6
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 3 soal teori dan 7 soal analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Soal teori sulit dan sangat sulit: situasi singkat yang menuntut peserta membandingkan, menilai, atau memadukan beberapa teori, prinsip, atau kerangka; bukan sekadar menjelaskan satu konsep.
- PG sangat sulit (3,5 menit): C5-C6, integrasi minimal 2 konsep, stem + opsi ≤ 200 kata, minimal 3 langkah hitung atau penalaran atau data kuantitatif. Kesulitan dari integrasi dan pertimbangan yang saling bertentangan, bukan dari stem ambigu; tetap satu jawaban paling tepat.
- T01 (analisis, sangat sulit): merumuskan tujuan stratejik terukur untuk transisi energi (tema 10).
- T02 (teori, sangat sulit): fungsi PESTEL dan lima kekuatan Porter.
- T03 (teori, sangat sulit): kerangka VRIO dan keunggulan bersaing berkelanjutan.
- T04 (teori, sangat sulit): strategi samudra biru vs persaingan langsung.
- T05 (analisis, sangat sulit): strategi fungsional pemasaran saat daya beli melemah (tema 7).
- T06 (analisis, sangat sulit): relokasi pabrik karena tarif dagang (tema 3).
- T07 (analisis, sangat sulit): portofolio grup BUMN fiktif (tema 5).
- T08 (analisis, sangat sulit): tuntutan ESG dari pembeli global (tema 10).
- T10 (analisis, sangat sulit): kepemimpinan saat krisis kepercayaan koperasi (tema 11).
- T11 (analisis, sangat sulit): restrukturisasi industri padat karya (tema 8).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman teori dan kerangka akademik manajemen stratejik yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nama tokoh, atau tahun terbit.
- Analisis: skenario perusahaan fiktif dengan data; peserta menganalisis, menghitung, menilai, atau merekomendasikan.
- Tulis bentuk setiap soal di baris pertama authoring.notes: "Bentuk: teori" atau "Bentuk: analisis".
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

## 3. MSK-B40 (essay)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B40
Tipe: essay | Jumlah: 5 | ID mulai: MSK-ESA-046
Sebaran topik: T02 1, T03 1, T04 1, T05 1, T06 1
Sebaran kesulitan: mudah 5
Ukuran kasus: -
Level kognitif: C2-C3
Catatan khusus:
- Bentuk: 3 esai teori dan 2 esai analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Esai mudah (6 menit): C2-C3, 1 perintah (jelaskan/identifikasi), stem ≤ 120 kata, jawaban ideal ≤ 100 kata, 3 kriteria rubrik.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- T02 (teori, mudah): kelompok stratejik dan faktor kunci sukses industri.
- T03 (teori, mudah): rantai nilai dan kapabilitas dinamis.
- T04 (teori, mudah): strategi ofensif dan defensif.
- T05 (analisis, mudah): strategi operasi rantai dingin UMKM pangan (tema 6).
- T06 (analisis, mudah): usaha patungan hilirisasi dengan mitra asing (tema 4).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman teori dan kerangka akademik manajemen stratejik yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nama tokoh, atau tahun terbit.
- Analisis: skenario perusahaan fiktif dengan data; peserta menganalisis, menghitung, menilai, atau merekomendasikan.
- Tulis bentuk setiap soal di baris pertama authoring.notes: "Bentuk: teori" atau "Bentuk: analisis".
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

## 4. MSK-B41 (case mini)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B41
Tipe: case | Jumlah: 2 | ID mulai: MSK-KAS-028
Sebaran topik: MSK-KAS-028 T01, T05; MSK-KAS-029 T02, T06
Sebaran kesulitan: mudah 2
Ukuran kasus: mini
Level kognitif: C3
Catatan khusus:
- Kasus mini mudah (15 menit): C3, narasi + data ≤ 300 kata, 2 sub, jawaban ideal semua sub ≤ 230 kata; tiap sub menerapkan satu konsep.
- MSK-KAS-028 (mudah): koperasi susu daerah yang baru menjadi pemasok program makan bergizi menyusun ulang misi dan sasaran fungsional (tema 6). (a) kesesuaian misi dan tujuan; (b) satu strategi fungsional pendukung.
- MSK-KAS-029 (mudah): produsen kerajinan rotan menengah yang mengekspor ke Amerika Serikat menghadapi tarif yang diasumsikan untuk periode kasus (tema 3). (a) faktor eksternal utama dengan PESTEL; (b) pilihan pasar ekspor alternatif.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
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

## 5. MSK-B42 (mcq)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B42
Tipe: mcq | Jumlah: 10 | ID mulai: MSK-MCQ-141
Sebaran topik: T01 1, T03 1, T04 1, T06 1, T07 1, T08 1, T09 1, T10 1, T11 1, T12 1
Sebaran kesulitan: mudah 10
Ukuran kasus: -
Level kognitif: C2-C3
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 6 soal teori dan 4 soal analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- PG mudah (1 menit): C2-C3, satu konsep, stem + opsi ≤ 90 kata, tanpa hitungan. Situasi singkat paling banyak 1-2 kalimat; distraktor tetap miskonsepsi umum.
- Soal bertanda "ke depan" meminta peserta mengantisipasi kondisi 2027-2030 yang dinyatakan sebagai skenario atau asumsi di soal.
- T01 (analisis, mudah): meninjau ulang model bisnis menghadapi AI generatif sampai 2030 (tema 13, ke depan).
- T03 (teori, mudah): sumber daya, kapabilitas, dan kompetensi inti.
- T04 (teori, mudah): strategi generik dan risiko terjebak di tengah.
- T06 (teori, mudah): strategi multidomestik, global, dan transnasional.
- T07 (teori, mudah): matriks portofolio dan alokasi modal grup.
- T08 (teori, mudah): CSR strategis dan nilai bersama (shared value).
- T09 (teori, mudah): balanced scorecard dan peta strategi.
- T10 (analisis, mudah): mengubah budaya setelah merger (tema 9).
- T11 (analisis, mudah): perubahan model bisnis menuju energi bersih sampai 2030 (tema 10, 13, ke depan).
- T12 (analisis, mudah): analitik data untuk ketahanan rantai pasok (tema 12).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman teori dan kerangka akademik manajemen stratejik yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nama tokoh, atau tahun terbit.
- Analisis: skenario perusahaan fiktif dengan data; peserta menganalisis, menghitung, menilai, atau merekomendasikan.
- Tulis bentuk setiap soal di baris pertama authoring.notes: "Bentuk: teori" atau "Bentuk: analisis".
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

## 6. MSK-B43 (mcq)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B43
Tipe: mcq | Jumlah: 10 | ID mulai: MSK-MCQ-151
Sebaran topik: T02 1, T03 1, T04 1, T05 1, T06 1, T07 1, T08 1, T09 1, T10 1, T11 1
Sebaran kesulitan: mudah 10
Ukuran kasus: -
Level kognitif: C2-C3
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 6 soal teori dan 4 soal analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- PG mudah (1 menit): C2-C3, satu konsep, stem + opsi ≤ 90 kata, tanpa hitungan. Situasi singkat paling banyak 1-2 kalimat; distraktor tetap miskonsepsi umum.
- Soal bertanda "ke depan" meminta peserta mengantisipasi kondisi 2027-2030 yang dinyatakan sebagai skenario atau asumsi di soal.
- T02 (teori, mudah): analisis skenario untuk menghadapi ketidakpastian.
- T03 (teori, mudah): kerangka VRIO dan keunggulan bersaing berkelanjutan.
- T04 (teori, mudah): strategi samudra biru vs persaingan langsung.
- T05 (teori, mudah): hubungan rencana bisnis, strategi fungsional, dan sasaran operasional.
- T06 (teori, mudah): keunggulan lokasi dan kerangka diamond Porter.
- T07 (teori, mudah): integrasi vertikal dan biaya transaksi.
- T08 (analisis, mudah): dilema etis PHK dan otomasi (tema 8).
- T09 (analisis, mudah): struktur holding setelah konsolidasi (tema 5).
- T10 (analisis, mudah): memimpin tim hibrida dan karyawan terdampak otomasi (tema 8, 13, ke depan).
- T11 (analisis, mudah): transformasi digital koperasi (tema 9, 11).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman teori dan kerangka akademik manajemen stratejik yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nama tokoh, atau tahun terbit.
- Analisis: skenario perusahaan fiktif dengan data; peserta menganalisis, menghitung, menilai, atau merekomendasikan.
- Tulis bentuk setiap soal di baris pertama authoring.notes: "Bentuk: teori" atau "Bentuk: analisis".
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

## 7. MSK-B44 (mcq)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B44
Tipe: mcq | Jumlah: 10 | ID mulai: MSK-MCQ-161
Sebaran topik: T02 1, T03 1, T04 1, T05 1, T06 1, T07 1, T08 1, T09 1, T10 1, T11 1
Sebaran kesulitan: sangat_sulit 10
Ukuran kasus: -
Level kognitif: C5-C6
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 3 soal teori dan 7 soal analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Soal teori sulit dan sangat sulit: situasi singkat yang menuntut peserta membandingkan, menilai, atau memadukan beberapa teori, prinsip, atau kerangka; bukan sekadar menjelaskan satu konsep.
- PG sangat sulit (3,5 menit): C5-C6, integrasi minimal 2 konsep, stem + opsi ≤ 200 kata, minimal 3 langkah hitung atau penalaran atau data kuantitatif. Kesulitan dari integrasi dan pertimbangan yang saling bertentangan, bukan dari stem ambigu; tetap satu jawaban paling tepat.
- T02 (teori, sangat sulit): fungsi PESTEL dan lima kekuatan Porter.
- T03 (teori, sangat sulit): rantai nilai dan kapabilitas dinamis.
- T04 (teori, sangat sulit): strategi ofensif dan defensif.
- T05 (analisis, sangat sulit): pendanaan ekspansi saat suku bunga turun bertahap (tema 1).
- T06 (analisis, sangat sulit): diversifikasi pasar ekspor saat rupiah bergejolak (tema 2).
- T07 (analisis, sangat sulit): integrasi vertikal ekosistem baterai (tema 4).
- T08 (analisis, sangat sulit): tata kelola dan etika pinjaman daring (tema 11).
- T09 (analisis, sangat sulit): ketahanan operasi menghadapi gangguan logistik (tema 12).
- T10 (analisis, sangat sulit): kepemimpinan saat krisis kepercayaan koperasi (tema 11).
- T11 (analisis, sangat sulit): restrukturisasi industri padat karya (tema 8).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman teori dan kerangka akademik manajemen stratejik yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nama tokoh, atau tahun terbit.
- Analisis: skenario perusahaan fiktif dengan data; peserta menganalisis, menghitung, menilai, atau merekomendasikan.
- Tulis bentuk setiap soal di baris pertama authoring.notes: "Bentuk: teori" atau "Bentuk: analisis".
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

## 8. MSK-B45 (mcq)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B45
Tipe: mcq | Jumlah: 10 | ID mulai: MSK-MCQ-171
Sebaran topik: T01 1, T02 1, T03 1, T04 1, T05 1, T06 1, T07 1, T08 1, T09 1, T12 1
Sebaran kesulitan: sangat_sulit 10
Ukuran kasus: -
Level kognitif: C5-C6
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 3 soal teori dan 7 soal analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Soal teori sulit dan sangat sulit: situasi singkat yang menuntut peserta membandingkan, menilai, atau memadukan beberapa teori, prinsip, atau kerangka; bukan sekadar menjelaskan satu konsep.
- PG sangat sulit (3,5 menit): C5-C6, integrasi minimal 2 konsep, stem + opsi ≤ 200 kata, minimal 3 langkah hitung atau penalaran atau data kuantitatif. Kesulitan dari integrasi dan pertimbangan yang saling bertentangan, bukan dari stem ambigu; tetap satu jawaban paling tepat.
- Soal bertanda "ke depan" meminta peserta mengantisipasi kondisi 2027-2030 yang dinyatakan sebagai skenario atau asumsi di soal.
- T01 (teori, sangat sulit): hubungan visi, misi, nilai, dan tujuan stratejik.
- T02 (teori, sangat sulit): kelompok stratejik dan faktor kunci sukses industri.
- T03 (analisis, sangat sulit): VRIO kapabilitas pengolahan mineral (tema 4).
- T04 (analisis, sangat sulit): value positioning saat daya beli melemah (tema 7).
- T05 (analisis, sangat sulit): strategi fungsional pemasaran saat daya beli melemah (tema 7).
- T06 (analisis, sangat sulit): relokasi pabrik karena tarif dagang (tema 3).
- T07 (analisis, sangat sulit): divestasi lini usaha yang tertekan otomasi (tema 8, ke depan).
- T08 (analisis, sangat sulit): tuntutan ESG dari pembeli global (tema 10).
- T09 (analisis, sangat sulit): pengukuran kinerja stratejik saat adopsi AI (tema 13, ke depan).
- T12 (teori, sangat sulit): sistem informasi strategis dan keunggulan bersaing.
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman teori dan kerangka akademik manajemen stratejik yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nama tokoh, atau tahun terbit.
- Analisis: skenario perusahaan fiktif dengan data; peserta menganalisis, menghitung, menilai, atau merekomendasikan.
- Tulis bentuk setiap soal di baris pertama authoring.notes: "Bentuk: teori" atau "Bentuk: analisis".
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

## 9. MSK-B46 (essay)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B46
Tipe: essay | Jumlah: 5 | ID mulai: MSK-ESA-051
Sebaran topik: T07 1, T08 1, T09 1, T10 1, T11 1
Sebaran kesulitan: mudah 5
Ukuran kasus: -
Level kognitif: C2-C3
Catatan khusus:
- Bentuk: 3 esai teori dan 2 esai analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Esai mudah (6 menit): C2-C3, 1 perintah (jelaskan/identifikasi), stem ≤ 120 kata, jawaban ideal ≤ 100 kata, 3 kriteria rubrik.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- Soal bertanda "ke depan" meminta peserta mengantisipasi kondisi 2027-2030 yang dinyatakan sebagai skenario atau asumsi di soal.
- T07 (teori, mudah): diversifikasi terkait vs tidak terkait.
- T08 (teori, mudah): kerangka pengambilan keputusan etis.
- T09 (teori, mudah): kerangka 7S McKinsey.
- T10 (analisis, mudah): mengubah budaya setelah merger (tema 9).
- T11 (analisis, mudah): perubahan model bisnis menuju energi bersih sampai 2030 (tema 10, 13, ke depan).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman teori dan kerangka akademik manajemen stratejik yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nama tokoh, atau tahun terbit.
- Analisis: skenario perusahaan fiktif dengan data; peserta menganalisis, menghitung, menilai, atau merekomendasikan.
- Tulis bentuk setiap soal di baris pertama authoring.notes: "Bentuk: teori" atau "Bentuk: analisis".
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

## 10. MSK-B47 (essay)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B47
Tipe: essay | Jumlah: 5 | ID mulai: MSK-ESA-056
Sebaran topik: T01 1, T02 1, T03 1, T04 1, T06 1
Sebaran kesulitan: sangat_sulit 5
Ukuran kasus: -
Level kognitif: C5-C6
Catatan khusus:
- Bentuk: 2 esai teori dan 3 esai analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Soal teori sulit dan sangat sulit: situasi singkat yang menuntut peserta membandingkan, menilai, atau memadukan beberapa teori, prinsip, atau kerangka; bukan sekadar menjelaskan satu konsep.
- Esai sangat sulit (20 menit): C5-C6, 3 perintah (analisis, evaluasi alternatif, rekomendasi atau sintesis), stem ≤ 250 kata, jawaban ideal ≤ 330 kata, 4-6 kriteria rubrik.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- T01 (teori, sangat sulit): hierarki strategi korporat, bisnis, dan fungsional.
- T02 (teori, sangat sulit): analisis skenario untuk menghadapi ketidakpastian.
- T03 (analisis, sangat sulit): analisis rantai nilai saat biaya bahan baku impor naik (tema 2).
- T04 (analisis, sangat sulit): respons terhadap pesaing platform digital (tema 9).
- T06 (analisis, sangat sulit): usaha patungan hilirisasi dengan mitra asing (tema 4).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman teori dan kerangka akademik manajemen stratejik yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nama tokoh, atau tahun terbit.
- Analisis: skenario perusahaan fiktif dengan data; peserta menganalisis, menghitung, menilai, atau merekomendasikan.
- Tulis bentuk setiap soal di baris pertama authoring.notes: "Bentuk: teori" atau "Bentuk: analisis".
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

## 11. MSK-B48 (essay)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B48
Tipe: essay | Jumlah: 5 | ID mulai: MSK-ESA-061
Sebaran topik: T01 1, T02 1, T03 1, T08 1, T09 1
Sebaran kesulitan: sulit 3, sangat_sulit 2
Ukuran kasus: -
Level kognitif: C4-C6
Catatan khusus:
- Bentuk: 2 esai teori dan 3 esai analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Soal teori sulit dan sangat sulit: situasi singkat yang menuntut peserta membandingkan, menilai, atau memadukan beberapa teori, prinsip, atau kerangka; bukan sekadar menjelaskan satu konsep.
- Esai sulit (15 menit): C4, 2-3 perintah, analisis + rekomendasi, stem ≤ 200 kata, jawaban ideal ≤ 250 kata.
- Esai sangat sulit (20 menit): C5-C6, 3 perintah (analisis, evaluasi alternatif, rekomendasi atau sintesis), stem ≤ 250 kata, jawaban ideal ≤ 330 kata, 4-6 kriteria rubrik.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- Soal bertanda "ke depan" meminta peserta mengantisipasi kondisi 2027-2030 yang dinyatakan sebagai skenario atau asumsi di soal.
- T01 (teori, sulit): maksud stratejik (strategic intent) dan model bisnis.
- T02 (analisis, sulit): peluang dan ancaman program pangan pemerintah bagi UMKM (tema 6).
- T03 (analisis, sulit): membangun kapabilitas dinamis menghadapi otomasi (tema 13, ke depan).
- T08 (teori, sangat sulit): teori pemangku kepentingan vs pemegang saham.
- T09 (analisis, sangat sulit): struktur holding setelah konsolidasi (tema 5).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman teori dan kerangka akademik manajemen stratejik yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nama tokoh, atau tahun terbit.
- Analisis: skenario perusahaan fiktif dengan data; peserta menganalisis, menghitung, menilai, atau merekomendasikan.
- Tulis bentuk setiap soal di baris pertama authoring.notes: "Bentuk: teori" atau "Bentuk: analisis".
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

## 12. MSK-B49 (case mini)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B49
Tipe: case | Jumlah: 2 | ID mulai: MSK-KAS-030
Sebaran topik: MSK-KAS-030 T10, T08; MSK-KAS-031 T03, T12
Sebaran kesulitan: mudah 1, sedang 1
Ukuran kasus: mini
Level kognitif: C3-C4
Catatan khusus:
- Kasus mini mudah (15 menit): C3, narasi + data ≤ 300 kata, 2 sub, jawaban ideal semua sub ≤ 230 kata; tiap sub menerapkan satu konsep.
- Kasus mini sedang (20 menit): C3-C4, narasi + data ≤ 400 kata, 2-3 sub, jawaban ideal semua sub ≤ 320 kata.
- MSK-KAS-030 (mudah): pimpinan perusahaan logistik rintisan menghadapi keluhan karyawan atas penilaian kinerja berbasis algoritma (tema 8, 13). (a) gaya kepemimpinan yang sesuai; (b) isu etis dan cara menanganinya.
- MSK-KAS-031 (sedang): percetakan keluarga beralih ke layanan kemasan cetak digital untuk penjual daring (tema 9). Kapabilitas yang perlu dibangun dan pemanfaatan data pelanggan.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
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

## 13. MSK-B50 (mcq)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B50
Tipe: mcq | Jumlah: 10 | ID mulai: MSK-MCQ-181
Sebaran topik: T01 1, T02 1, T03 1, T04 1, T05 1, T07 1, T09 1, T10 1, T11 1, T12 1
Sebaran kesulitan: sedang 10
Ukuran kasus: -
Level kognitif: C3
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 4 soal teori dan 6 soal analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- PG sedang (1,5 menit): C3, penerapan pada situasi, stem + opsi ≤ 120 kata, maks 1 langkah hitung.
- Soal bertanda "ke depan" meminta peserta mengantisipasi kondisi 2027-2030 yang dinyatakan sebagai skenario atau asumsi di soal.
- T01 (analisis, sedang): menyelaraskan visi-misi BUMN fiktif setelah restrukturisasi (tema 5).
- T02 (analisis, sedang): skenario permintaan 2027-2030 akibat perubahan demografi dan digitalisasi (tema 13, ke depan).
- T03 (analisis, sedang): VRIO kapabilitas pengolahan mineral (tema 4).
- T04 (analisis, sedang): strategi hibrida untuk produk ramah lingkungan (tema 10).
- T05 (teori, sedang): strategi pemasaran, operasi, dan keuangan sebagai pendukung strategi bisnis.
- T07 (teori, sedang): matriks portofolio dan alokasi modal grup.
- T09 (teori, sedang): kesesuaian struktur organisasi dengan strategi.
- T10 (teori, sedang): kepemimpinan transformasional vs transaksional.
- T11 (analisis, sedang): transformasi digital koperasi (tema 9, 11).
- T12 (analisis, sedang): perlindungan data pribadi dan keamanan siber (tema 13, ke depan).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman teori dan kerangka akademik manajemen stratejik yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nama tokoh, atau tahun terbit.
- Analisis: skenario perusahaan fiktif dengan data; peserta menganalisis, menghitung, menilai, atau merekomendasikan.
- Tulis bentuk setiap soal di baris pertama authoring.notes: "Bentuk: teori" atau "Bentuk: analisis".
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

## 14. MSK-B51 (mcq)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B51
Tipe: mcq | Jumlah: 10 | ID mulai: MSK-MCQ-191
Sebaran topik: T01 1, T02 1, T04 1, T05 1, T06 1, T07 1, T08 1, T09 1, T10 1, T11 1
Sebaran kesulitan: sedang 10
Ukuran kasus: -
Level kognitif: C3
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 4 soal teori dan 6 soal analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- PG sedang (1,5 menit): C3, penerapan pada situasi, stem + opsi ≤ 120 kata, maks 1 langkah hitung.
- T01 (analisis, sedang): merumuskan tujuan stratejik terukur untuk transisi energi (tema 10).
- T02 (analisis, sedang): dampak tarif dagang pada daya tarik industri (tema 3).
- T04 (analisis, sedang): value positioning saat daya beli melemah (tema 7).
- T05 (teori, sedang): anggaran dan alokasi sumber daya stratejik.
- T06 (analisis, sedang): diversifikasi pasar ekspor saat rupiah bergejolak (tema 2).
- T07 (teori, sedang): integrasi vertikal dan biaya transaksi.
- T08 (analisis, sedang): dilema etis PHK dan otomasi (tema 8).
- T09 (teori, sedang): balanced scorecard dan peta strategi.
- T10 (teori, sedang): budaya organisasi dan implementasi strategi.
- T11 (analisis, sedang): restrukturisasi industri padat karya (tema 8).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman teori dan kerangka akademik manajemen stratejik yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nama tokoh, atau tahun terbit.
- Analisis: skenario perusahaan fiktif dengan data; peserta menganalisis, menghitung, menilai, atau merekomendasikan.
- Tulis bentuk setiap soal di baris pertama authoring.notes: "Bentuk: teori" atau "Bentuk: analisis".
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

## 15. MSK-B52 (mcq)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B52
Tipe: mcq | Jumlah: 10 | ID mulai: MSK-MCQ-201
Sebaran topik: T01 1, T02 1, T03 1, T04 1, T05 1, T06 1, T08 1, T09 1, T10 1, T12 1
Sebaran kesulitan: sulit 10
Ukuran kasus: -
Level kognitif: C4
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 3 soal teori dan 7 soal analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Soal teori sulit dan sangat sulit: situasi singkat yang menuntut peserta membandingkan, menilai, atau memadukan beberapa teori, prinsip, atau kerangka; bukan sekadar menjelaskan satu konsep.
- PG sulit (2,5 menit): C4, analisis, stem + opsi ≤ 160 kata atau tabel kecil, 2-3 langkah.
- Soal bertanda "ke depan" meminta peserta mengantisipasi kondisi 2027-2030 yang dinyatakan sebagai skenario atau asumsi di soal.
- T01 (analisis, sulit): meninjau ulang model bisnis menghadapi AI generatif sampai 2030 (tema 13, ke depan).
- T02 (analisis, sulit): peluang dan ancaman program pangan pemerintah bagi UMKM (tema 6).
- T03 (analisis, sulit): analisis rantai nilai saat biaya bahan baku impor naik (tema 2).
- T04 (analisis, sulit): respons terhadap pesaing platform digital (tema 9).
- T05 (teori, sulit): hubungan rencana bisnis, strategi fungsional, dan sasaran operasional.
- T06 (teori, sulit): moda masuk pasar internasional.
- T08 (teori, sulit): CSR strategis dan nilai bersama (shared value).
- T09 (analisis, sulit): ketahanan operasi menghadapi gangguan logistik (tema 12).
- T10 (analisis, sulit): memimpin tim hibrida dan karyawan terdampak otomasi (tema 8, 13, ke depan).
- T12 (analisis, sulit): tata kelola AI generatif dalam layanan pelanggan (tema 9).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman teori dan kerangka akademik manajemen stratejik yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nama tokoh, atau tahun terbit.
- Analisis: skenario perusahaan fiktif dengan data; peserta menganalisis, menghitung, menilai, atau merekomendasikan.
- Tulis bentuk setiap soal di baris pertama authoring.notes: "Bentuk: teori" atau "Bentuk: analisis".
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

## 16. MSK-B53 (mcq)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B53
Tipe: mcq | Jumlah: 10 | ID mulai: MSK-MCQ-211
Sebaran topik: T01 1, T02 1, T03 1, T04 1, T05 1, T06 1, T07 1, T08 1, T09 1, T10 1
Sebaran kesulitan: sulit 10
Ukuran kasus: -
Level kognitif: C4
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 3 soal teori dan 7 soal analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Soal teori sulit dan sangat sulit: situasi singkat yang menuntut peserta membandingkan, menilai, atau memadukan beberapa teori, prinsip, atau kerangka; bukan sekadar menjelaskan satu konsep.
- PG sulit (2,5 menit): C4, analisis, stem + opsi ≤ 160 kata atau tabel kecil, 2-3 langkah.
- Soal bertanda "ke depan" meminta peserta mengantisipasi kondisi 2027-2030 yang dinyatakan sebagai skenario atau asumsi di soal.
- T01 (analisis, sulit): menyelaraskan visi-misi BUMN fiktif setelah restrukturisasi (tema 5).
- T02 (analisis, sulit): skenario permintaan 2027-2030 akibat perubahan demografi dan digitalisasi (tema 13, ke depan).
- T03 (analisis, sulit): membangun kapabilitas dinamis menghadapi otomasi (tema 13, ke depan).
- T04 (analisis, sulit): strategi hibrida untuk produk ramah lingkungan (tema 10).
- T05 (teori, sulit): strategi pemasaran, operasi, dan keuangan sebagai pendukung strategi bisnis.
- T06 (teori, sulit): strategi multidomestik, global, dan transnasional.
- T07 (analisis, sulit): portofolio grup BUMN fiktif (tema 5).
- T08 (teori, sulit): kerangka pengambilan keputusan etis.
- T09 (analisis, sulit): pengukuran kinerja stratejik saat adopsi AI (tema 13, ke depan).
- T10 (analisis, sulit): kepemimpinan saat krisis kepercayaan koperasi (tema 11).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman teori dan kerangka akademik manajemen stratejik yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nama tokoh, atau tahun terbit.
- Analisis: skenario perusahaan fiktif dengan data; peserta menganalisis, menghitung, menilai, atau merekomendasikan.
- Tulis bentuk setiap soal di baris pertama authoring.notes: "Bentuk: teori" atau "Bentuk: analisis".
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

## 17. MSK-B54 (essay)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B54
Tipe: essay | Jumlah: 5 | ID mulai: MSK-ESA-066
Sebaran topik: T01 1, T05 1, T06 1, T07 1, T09 1
Sebaran kesulitan: sedang 5
Ukuran kasus: -
Level kognitif: C3
Catatan khusus:
- Bentuk: 2 esai teori dan 3 esai analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Esai sedang (10 menit): C3, 2 perintah, penerapan, stem ≤ 150 kata, jawaban ideal ≤ 170 kata.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- T01 (teori, sedang): hubungan visi, misi, nilai, dan tujuan stratejik.
- T05 (teori, sedang): anggaran dan alokasi sumber daya stratejik.
- T06 (analisis, sedang): relokasi pabrik karena tarif dagang (tema 3).
- T07 (analisis, sedang): integrasi vertikal ekosistem baterai (tema 4).
- T09 (analisis, sedang): struktur holding setelah konsolidasi (tema 5).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman teori dan kerangka akademik manajemen stratejik yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nama tokoh, atau tahun terbit.
- Analisis: skenario perusahaan fiktif dengan data; peserta menganalisis, menghitung, menilai, atau merekomendasikan.
- Tulis bentuk setiap soal di baris pertama authoring.notes: "Bentuk: teori" atau "Bentuk: analisis".
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

## 18. MSK-B55 (case mini)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B55
Tipe: case | Jumlah: 2 | ID mulai: MSK-KAS-032
Sebaran topik: MSK-KAS-032 T07, T11; MSK-KAS-033 T09, T05
Sebaran kesulitan: sedang 2
Ukuran kasus: mini
Level kognitif: C3-C4
Catatan khusus:
- Kasus mini sedang (20 menit): C3-C4, narasi + data ≤ 400 kata, 2-3 sub, jawaban ideal semua sub ≤ 320 kata.
- MSK-KAS-032 (sedang): grup perkebunan sawit menimbang diversifikasi ke energi biomassa dan mengelola resistensi perubahan di unit perkebunan (tema 10, 13). Proyeksi permintaan 2027-2030 dinyatakan sebagai asumsi.
- MSK-KAS-033 (sedang): rumah sakit swasta menengah menyusun balanced scorecard dan strategi operasi setelah biaya alat kesehatan impor naik karena rupiah melemah (tema 2).
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
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

## 19. MSK-B56 (case komprehensif)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B56
Tipe: case | Jumlah: 2 | ID mulai: MSK-KAS-034
Sebaran topik: MSK-KAS-034 T02, T06, T07, T09; MSK-KAS-035 T08, T10, T11, T12
Sebaran kesulitan: sulit 2
Ukuran kasus: komprehensif
Level kognitif: C4-C5
Catatan khusus:
- Kasus komprehensif sulit (40 menit): C4-C5, narasi + data ≤ 700 kata, 4 sub, jawaban ideal semua sub ≤ 600 kata, hitungan ≤ 5 menit; integrasi minimal 3 topik.
- MSK-KAS-034 (sulit): produsen komponen baterai menimbang ekspansi pabrik ke luar negeri atau integrasi vertikal ke hulu di tengah tarif dagang dan suku bunga yang turun bertahap (tema 1, 3, 4). Data biaya, kapasitas, dan arus kas beberapa tahun.
- MSK-KAS-035 (sulit): bank perekonomian rakyat hasil merger menjalankan transformasi digital sambil membenahi tata kelola dan budaya setelah kasus gagal bayar di sektornya (tema 9, 11, 13).
- Kasus komprehensif mengintegrasikan minimal 3 topik dan menuntut analisis, evaluasi alternatif, risiko, implikasi keuangan, dan rekomendasi. Salah satu sub meminta rencana menghadapi kondisi 2-3 tahun ke depan berdasarkan skenario di kasus.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Soal analisis memakai perusahaan Indonesia fiktif; soal teori menguji pemahaman konsep, bukan hafalan definisi.
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah tayang (MSK-MCQ-001 s.d. 030, MSK-ESA-001 s.d. 015, MSK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
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
