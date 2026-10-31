# MSK gelombang 6 — siap tempel

Formulir gelombang 6, disusun 2026-10-31 untuk **Prompt B v4.6** dan **Prompt C v4.5** (D-112, D-114).
Tujuan utama: **menambah kasus mudah** agar paket Level 1 dapat dimulai dan kasusnya bervariasi. Gelombang ini memuat 6 kasus mini mudah dengan topik yang belum dipakai kasus mudah sebelumnya (T03, T07, T09, T11, T12, T02/T04, T06), 2 kasus komprehensif sangat sulit, dan PG serta esai untuk meratakan stok per tingkat.
Nomor batch mulai MSK-B64 (MSK-B63 sudah dipakai). Nomor soal melanjutkan nomor tertinggi di bank: MSK-MCQ-240, MSK-ESA-080, MSK-KAS-039.

Stok LIVE pack MSK 1.11.0 (`Publikasi Soal/1.11.0 (2026-10-31) ... pack.json`), mudah/sedang/sulit/sangat sulit:

| Tipe | LIVE | Gelombang 6 | LIVE sesudahnya bila semua lolos |
|---|---|---|---|
| PG | 35/41/39/33 | 6/0/0/4 | 41/41/39/37 |
| Esai | 13/11/11/15 | 1/2/2/0 | 14/13/13/15 |
| Kasus | 5/6/5/3 | 6/0/0/2 | 11/6/5/5 |

Kasus mudah yang sudah ada (MSK-KAS-028, 029, 030, 036, 037) memakai topik T01/T05, T02/T06, T10/T08, T04/T05, dan T08/T10. Keenam kasus baru memakai pasangan topik dan entitas yang berbeda.

Cara pakai:
1. Pastikan instruksi Project Claude penyusun memakai **Prompt B v4.6**. Project reviewer cukup memakai instruksi singkat; prompt reviewer v4.5 ikut tersalin lewat tombol **Salin Prompt + Data**.
2. Buka **satu percakapan baru**, lalu salin satu blok utuh per pesan, berurutan dari atas. Kerjakan **prioritas 1** (tiga batch kasus mudah) lebih dulu.
3. Impor setiap hasil ke Pengelola Bank Soal. Perhatikan peringatan standar waktu, label bentuk di baris pertama authoring.notes, dan kalimat pertama setiap soal.
4. Review dengan Prompt C v4.5. Bila Project melaporkan Batch ID atau rentang ID sudah terpakai, naikkan nomornya.
5. Setelah kasus mudah lolos dan dipublikasikan, ekspor pack dan sinkronkan ke repositori agar paket Level 1 di situs memakai kasus baru.

Prioritas: 1 = kasus mudah untuk Level 1; 2 = meratakan stok tingkat lain.

| Prioritas | Batch | Tipe | Jumlah | ID | Kesulitan | Teori |
|---|---|---|---|---|---|---|
| 1 | MSK-B64 | Kasus mini | 2 | MSK-KAS-040 s.d. 041 | mudah 2 | 1 sub per kasus |
| 1 | MSK-B65 | Kasus mini | 2 | MSK-KAS-042 s.d. 043 | mudah 2 | 1 sub per kasus |
| 1 | MSK-B66 | Kasus mini | 2 | MSK-KAS-044 s.d. 045 | mudah 2 | 1 sub per kasus |
| 2 | MSK-B67 | Kasus komprehensif | 2 | MSK-KAS-046 s.d. 047 | sangat sulit 2 | 1 sub per kasus |
| 2 | MSK-B68 | PG | 10 | MSK-MCQ-241 s.d. 250 | mudah 6, sangat sulit 4 | 4 dari 10 |
| 2 | MSK-B69 | Esai | 5 | MSK-ESA-081 s.d. 085 | mudah 1, sedang 2, sulit 2 | 2 dari 5 |

Gelombang 6 berakhir di MSK-B69 (MSK-MCQ-250, MSK-ESA-085, MSK-KAS-047).

## 1. MSK-B64 (case mini)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B64
Tipe: case | Jumlah: 2 | ID mulai: MSK-KAS-040
Sebaran topik: MSK-KAS-040 T03, T12; MSK-KAS-041 T07, T01
Sebaran kesulitan: mudah 2
Ukuran kasus: mini
Level kognitif: C3
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus mini mudah (15 menit): C3, narasi + data ≤ 300 kata, 2 sub, jawaban ideal semua sub ≤ 230 kata; tiap sub menerapkan satu konsep.
- MSK-KAS-040 (mudah; T03, T12; pembuka: data (tabel ringkasan ulasan pelanggan dan biaya per gerai); entitas: UMKM kedai kopi lokal dengan 8 gerai): pemilik ingin tahu apa yang membuat gerainya tetap ramai di tengah merek kopi besar (tema 9). (a) analisis: dari data, identifikasi satu kapabilitas yang menjadi kekuatan dan satu yang lemah, beri alasannya; (b) teori, ragam keterbatasan: mengapa menilai kapabilitas hanya dari ulasan daring tidak cukup.
- MSK-KAS-041 (mudah; T07, T01; pembuka: kronologi; entitas: grup usaha keluarga di Makassar (pelayaran antarpulau, lalu hotel)): generasi kedua ingin masuk ke bisnis kedai kopi kekinian setelah sukses membuka hotel (tema 1). (a) analisis: golongkan setiap langkah ekspansi sebagai diversifikasi terkait atau tidak terkait dan jelaskan alasannya; (b) teori, ragam alasan konseptual: mengapa keputusan diversifikasi perlu diturunkan dari misi perusahaan.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 240, MSK-ESA-001 s.d. 080, MSK-KAS-001 s.d. 039) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.6):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Rubrik menilai kualitas penalaran, ketepatan konsep, dan penggunaan data; acceptableAlternatives menyebut kerangka atau sudut pandang lain yang sah beserta syarat nilai penuhnya.
- Setiap kasus memuat tepat satu sub teori (tertulis di rincian kasus). Paling banyak dua sub menyebut nama alat analisis; alur kedua kasus berbeda.
- Nama fiktif tidak boleh mirip merek, perusahaan, aplikasi, atau lembaga nyata, termasuk pola nama BUMD nyata dengan nama daerah atau tempat nyata.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.6. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.6, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
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

## 2. MSK-B65 (case mini)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B65
Tipe: case | Jumlah: 2 | ID mulai: MSK-KAS-042
Sebaran topik: MSK-KAS-042 T09, T05; MSK-KAS-043 T11, T10
Sebaran kesulitan: mudah 2
Ukuran kasus: mini
Level kognitif: C3
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus mini mudah (15 menit): C3, narasi + data ≤ 300 kata, 2 sub, jawaban ideal semua sub ≤ 230 kata; tiap sub menerapkan satu konsep.
- MSK-KAS-042 (mudah; T09, T05; pembuka: peran ("Anda manajer operasional ..."); entitas: perusahaan jasa kebersihan gedung skala menengah): klien besar meminta robot pembersih lantai sehingga sebagian pekerjaan manual berkurang (tema 8). (a) teori, ragam sebab-akibat: hubungan sistem insentif dengan pelaksanaan strategi layanan bermutu; (b) analisis: dari data tenaga kerja dan biaya, pilih satu strategi fungsional SDM (pelatihan ulang, pemindahan, atau pengurangan) dan alasannya.
- MSK-KAS-043 (mudah; T11, T10; pembuka: dokumen (surel direktur utama kepada seluruh karyawan); entitas: perusahaan rintisan teknologi pendidikan): perusahaan mewajibkan kerja di kantor tiga hari seminggu dan pemakaian asisten AI (tema 13). (a) analisis: identifikasi dua sumber resistensi dari surel dan tanggapan karyawan; (b) teori, ragam menilai pernyataan: "Perubahan cukup diumumkan pimpinan, karyawan pasti menyesuaikan." Nilai bagian yang benar dan yang keliru.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 240, MSK-ESA-001 s.d. 080, MSK-KAS-001 s.d. 039) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.6):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Rubrik menilai kualitas penalaran, ketepatan konsep, dan penggunaan data; acceptableAlternatives menyebut kerangka atau sudut pandang lain yang sah beserta syarat nilai penuhnya.
- Setiap kasus memuat tepat satu sub teori (tertulis di rincian kasus). Paling banyak dua sub menyebut nama alat analisis; alur kedua kasus berbeda.
- Nama fiktif tidak boleh mirip merek, perusahaan, aplikasi, atau lembaga nyata, termasuk pola nama BUMD nyata dengan nama daerah atau tempat nyata.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.6. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.6, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
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

## 3. MSK-B66 (case mini)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B66
Tipe: case | Jumlah: 2 | ID mulai: MSK-KAS-044
Sebaran topik: MSK-KAS-044 T02, T04; MSK-KAS-045 T06, T08
Sebaran kesulitan: mudah 2
Ukuran kasus: mini
Level kognitif: C3
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus mini mudah (15 menit): C3, narasi + data ≤ 300 kata, 2 sub, jawaban ideal semua sub ≤ 230 kata; tiap sub menerapkan satu konsep.
- MSK-KAS-044 (mudah; T02, T04; pembuka: perdebatan; entitas: usaha batik tulis keluarga di Pekalongan): kakak dan adik berbeda pendapat menghadapi kain bermotif batik hasil cetak yang jauh lebih murah (tema 7). (a) analisis: tentukan kekuatan persaingan yang paling menekan dari data harga dan penjualan; (b) teori, ragam asumsi: asumsi di balik strategi diferensiasi dan apakah asumsi itu terpenuhi bagi batik tulis.
- MSK-KAS-045 (mudah; T06, T08; pembuka: tanpa nama ("Sebuah eksportir udang beku di Lampung ..."); entitas: eksportir udang beku skala menengah): pembeli Eropa mensyaratkan sertifikat budidaya berkelanjutan, sementara pasar Amerika Serikat terkena tarif yang diasumsikan untuk periode kasus (tema 3, 10). (a) teori, ragam banding-kontras: tanggung jawab sosial sebagai kepatuhan minimum vs sebagai strategi; (b) analisis: dari data volume, harga, dan tarif, pilih pasar tujuan utama dan alasannya.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 240, MSK-ESA-001 s.d. 080, MSK-KAS-001 s.d. 039) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.6):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Rubrik menilai kualitas penalaran, ketepatan konsep, dan penggunaan data; acceptableAlternatives menyebut kerangka atau sudut pandang lain yang sah beserta syarat nilai penuhnya.
- Setiap kasus memuat tepat satu sub teori (tertulis di rincian kasus). Paling banyak dua sub menyebut nama alat analisis; alur kedua kasus berbeda.
- Nama fiktif tidak boleh mirip merek, perusahaan, aplikasi, atau lembaga nyata, termasuk pola nama BUMD nyata dengan nama daerah atau tempat nyata.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.6. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.6, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
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

## 4. MSK-B67 (case komprehensif)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B67
Tipe: case | Jumlah: 2 | ID mulai: MSK-KAS-046
Sebaran topik: MSK-KAS-046 T02, T07, T09, T12; MSK-KAS-047 T01, T08, T10, T11
Sebaran kesulitan: sangat_sulit 2
Ukuran kasus: komprehensif
Level kognitif: C5-C6
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus komprehensif sangat sulit (45 menit): C5-C6, narasi + data ≤ 900 kata, 4 sub, jawaban ideal semua sub ≤ 650 kata, hitungan ≤ 5 menit; integrasi minimal 3 topik; menuntut analisis, evaluasi alternatif, risiko, implikasi keuangan, dan rekomendasi.
- MSK-KAS-046 (sangat sulit; T02, T07, T09, T12; pembuka: kronologi; entitas: produsen semen menengah Tbk): kapasitas digandakan pada 2019-2024 saat pasokan nasional sudah berlebih, lalu muncul tuntutan pengurangan emisi (tema 10, 13). (a) mengapa strategi kapasitas besar berbalik merugikan, tanpa menyebut nama kerangka; (b) teori, ragam keterbatasan: keterbatasan analisis industri yang bertumpu pada permintaan historis saat terjadi transisi rendah karbon; (c) evaluasi tiga opsi (akuisisi pesaing, beton pracetak, ekspor) dengan data keuangan; (d) rekomendasi, risiko, dan indikator kinerja implementasi.
- MSK-KAS-047 (sangat sulit; T01, T08, T10, T11; pembuka: dokumen (surat terbuka serikat pekerja dan memo direksi); entitas: produsen tekstil terintegrasi Tbk milik keluarga generasi ketiga): kas hanya cukup sembilan bulan; direksi mengusulkan otomasi dan pengurangan 30% pekerja (tema 8). (a) analisis dilema etis dan kepentingan para pemangku kepentingan; (b) teori, ragam asumsi: asumsi model perubahan bertahap dan apakah terpenuhi saat waktu sangat terbatas; (c) evaluasi dua rencana restrukturisasi dengan data biaya dan pesangon yang diasumsikan; (d) rencana perubahan dan peran pemimpin.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 240, MSK-ESA-001 s.d. 080, MSK-KAS-001 s.d. 039) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.6):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Rubrik menilai kualitas penalaran, ketepatan konsep, dan penggunaan data; acceptableAlternatives menyebut kerangka atau sudut pandang lain yang sah beserta syarat nilai penuhnya.
- Setiap kasus memuat tepat satu sub teori (tertulis di rincian kasus). Paling banyak dua sub menyebut nama alat analisis; alur kedua kasus berbeda.
- Nama fiktif tidak boleh mirip merek, perusahaan, aplikasi, atau lembaga nyata, termasuk pola nama BUMD nyata dengan nama daerah atau tempat nyata.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.6. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.6, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
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

## 5. MSK-B68 (mcq)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B68
Tipe: mcq | Jumlah: 10 | ID mulai: MSK-MCQ-241
Sebaran topik: T01 1, T02 1, T03 1, T05 1, T06 1, T08 1, T09 1, T10 1, T11 1, T12 1
Sebaran kesulitan: mudah 6, sangat_sulit 4
Ukuran kasus: -
Level kognitif: C2-C3; C5-C6 (sesuai tingkat setiap soal)
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 4 soal teori dan 6 soal analisis (40%; batas 40%).
- Soal teori sulit dan sangat sulit memadukan dua ragam atau dua konsep; bukan sekadar menjelaskan satu konsep.
- PG mudah (1 menit): C2-C3, satu konsep, stem + opsi ≤ 90 kata, tanpa hitungan. Situasi singkat paling banyak 1-2 kalimat; distraktor tetap miskonsepsi umum.
- PG sangat sulit (3,5 menit): C5-C6, integrasi minimal 2 konsep, stem + opsi ≤ 200 kata, minimal 3 langkah hitung atau penalaran atau data kuantitatif. Kesulitan dari integrasi dan pertimbangan yang saling bertentangan, bukan dari stem ambigu; tetap satu jawaban paling tepat.
- T01 (teori; mudah; ragam: sebab-akibat): mengapa misi yang terlalu umum gagal menjadi panduan alokasi sumber daya.
- T03 (analisis; mudah; pembuka: tanpa nama ("Sebuah bengkel cat mobil di ..."); entitas: UMKM bengkel cat mobil): mengenali kompetensi inti di antara tiga aktivitas yang dijalankan (tema 9).
- T06 (analisis; mudah; pembuka: profil; entitas: produsen kosmetik halal skala menengah): memilih moda masuk ke pasar Malaysia dengan modal terbatas (tema 3).
- T09 (teori; mudah; ragam: alasan konseptual): mengapa sistem insentif harus selaras dengan strategi, mis. insentif berbasis volume pada perusahaan yang bersaing lewat mutu.
- T11 (analisis; mudah; pembuka: peristiwa; entitas: kantor akuntan publik skala menengah): tiga bulan setelah alat audit berbasis AI diperkenalkan; mengenali tahap perubahan yang sedang terjadi (tema 13).
- T12 (analisis; mudah; pembuka: data; entitas: jaringan apotek regional): data penjualan per musim untuk keputusan stok berbasis data (tema 9).
- T02 (analisis; sangat sulit; pembuka: dokumen (ringkasan riset pasar); entitas: produsen pakan ternak Tbk): tiga skenario harga jagung dan kurs 2027-2030 yang diasumsikan; memilih strategi yang paling tahan di semua skenario (tema 2, 13, ke depan).
- T05 (analisis; sangat sulit; pembuka: perdebatan; entitas: operator kapal penyeberangan swasta): direktur pemasaran, operasi, dan keuangan mengusulkan respons berbeda atas kenaikan biaya bahan bakar yang diasumsikan; memilih paket strategi fungsional yang paling konsisten (tema 2).
- T08 (teori; sangat sulit; ragam: menemukan kekeliruan): argumen direksi yang memakai konsep nilai bersama (shared value) untuk membenarkan program sosial sebagai pengganti kepatuhan lingkungan; peserta menunjukkan letak kekeliruannya.
- T10 (teori; sangat sulit; ragam: keterbatasan): keterbatasan kepemimpinan transformasional dalam suksesi perusahaan keluarga, mis. ketergantungan pada figur pemimpin.
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 240, MSK-ESA-001 s.d. 080, MSK-KAS-001 s.d. 039) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.6):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Soal teori: paling banyak dua soal teori diawali latar periode atau kondisi ekonomi (mis. "Sepanjang 2023-2026 ..."); soal teori lain dibuka langsung dengan konsep, kutipan pernyataan, argumen yang keliru, atau perbandingan dua situasi. Kalimat perintah bervariasi.
- Kunci tidak boleh dapat ditebak dari opsi saja: paling banyak satu distraktor per soal memakai kata mutlak (selalu, pasti, hanya, permanen, sepenuhnya); istilah khas kerangka tidak hanya muncul di kunci; panjang opsi setara.
- Nama fiktif tidak boleh mirip merek, perusahaan, aplikasi, atau lembaga nyata, termasuk pola nama BUMD nyata dengan nama daerah atau tempat nyata.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.6. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.6, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
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

## 6. MSK-B69 (essay)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B69
Tipe: essay | Jumlah: 5 | ID mulai: MSK-ESA-081
Sebaran topik: T02 1, T04 1, T07 1, T09 1, T12 1
Sebaran kesulitan: mudah 1, sedang 2, sulit 2
Ukuran kasus: -
Level kognitif: C2-C3; C3; C4 (sesuai tingkat setiap soal)
Catatan khusus:
- Bentuk: 2 soal teori dan 3 soal analisis (40%; batas 40%).
- Soal teori sulit dan sangat sulit memadukan dua ragam atau dua konsep; bukan sekadar menjelaskan satu konsep.
- Esai mudah (6 menit): C2-C3, 1 perintah (jelaskan/identifikasi), stem ≤ 120 kata, jawaban ideal ≤ 100 kata, 3 kriteria rubrik.
- Esai sedang (10 menit): C3, 2 perintah, penerapan, stem ≤ 150 kata, jawaban ideal ≤ 170 kata.
- Esai sulit (15 menit): C4, 2-3 perintah, analisis + rekomendasi, stem ≤ 200 kata, jawaban ideal ≤ 250 kata.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- T02 (analisis; mudah; pembuka: peran ("Anda pengurus baru ..."); entitas: koperasi nelayan): identifikasi dua faktor eksternal yang paling memengaruhi pendapatan anggota dan alasannya (tema 10, 12).
- T04 (teori; sedang; ragam: banding-kontras): strategi biaya rendah vs penyedia biaya terbaik (best-cost provider): perbedaan dan kondisi pasar yang cocok untuk masing-masing.
- T09 (analisis; sedang; pembuka: dokumen (notulen rapat senat); entitas: universitas swasta di bawah yayasan): struktur organisasi yang menghambat strategi riset terapan bersama industri; analisis dan dua usulan perbaikan (tema 13).
- T07 (teori; sulit; ragam: asumsi dan keterbatasan): asumsi matriks portofolio BCG (pangsa pasar menghasilkan arus kas) dan keterbatasannya bagi grup yang memiliki unit usaha digital; usulkan penyesuaian.
- T12 (analisis; sulit; pembuka: data; entitas: jaringan minimarket waralaba regional): data dasbor penjualan dan stok; analisis keputusan yang dapat diambil dan risiko salah tafsir data, lalu rekomendasi (tema 9).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 240, MSK-ESA-001 s.d. 080, MSK-KAS-001 s.d. 039) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.6):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Rubrik menilai kualitas penalaran, ketepatan konsep, dan penggunaan data; acceptableAlternatives menyebut kerangka atau sudut pandang lain yang sah beserta syarat nilai penuhnya.
- Soal teori: paling banyak dua soal teori diawali latar periode atau kondisi ekonomi (mis. "Sepanjang 2023-2026 ..."); soal teori lain dibuka langsung dengan konsep, kutipan pernyataan, argumen yang keliru, atau perbandingan dua situasi. Kalimat perintah bervariasi.
- Nama fiktif tidak boleh mirip merek, perusahaan, aplikasi, atau lembaga nyata, termasuk pola nama BUMD nyata dengan nama daerah atau tempat nyata.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.6. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.6, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
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
