# MSK gelombang 7 — siap tempel

Formulir gelombang 7, disusun 2026-11-02 untuk **Prompt B v4.9** dan **Prompt C v4.8**.
Tujuan: **menyeimbangkan komposisi soal yang tayang**. Gelombang 6 MSK sudah tayang seluruhnya (MSK-B64 s.d. B69), jadi stok dihitung ulang dari ekspor terbaru (`Publikasi Soal/MSK 2026-10-31 17.58 v1.12.0 ...`, 240 soal, semuanya LIVE). Sasaran: PG sekitar 45 per tingkat, esai sekitar 15 per tingkat, kasus minimal 7 per tingkat, dan setiap topik T01-T12 punya soal di setiap tingkat.
Nomor melanjutkan nomor tertinggi di bank: MSK-B69, MSK-MCQ-250, MSK-ESA-085, MSK-KAS-047.

Stok LIVE saat ini (mudah/sedang/sulit/sangat sulit) dan rencana:

| Tipe | LIVE (ekspor) | Gelombang 7 | LIVE sesudahnya bila semua lolos |
|---|---|---|---|
| PG | 41/41/39/37 | 3/3/6/8 | NaN/NaN/NaN/NaN |
| Esai | 14/13/13/15 | 3/3/2/2 | NaN/NaN/NaN/NaN |
| Kasus | 11/6/5/5 | 0/2/2/2 | NaN/NaN/NaN/NaN |

Kebutuhan yang dijawab gelombang ini:
- **PG:** tingkat sulit (39) dan sangat sulit (37) paling sedikit; sel topik yang tipis diisi lebih dulu: T12 sangat sulit (2), T04 sangat sulit (2), T05 sulit (2), T06 sulit (2), T11 sulit (2), T09 sedang (2).
- **Esai:** sel yang masih kosong: T05 sulit, T08 sulit, T10 sedang, T11 sangat sulit, T12 mudah, T12 sedang, T12 sangat sulit. T10, T11, dan T12 baru punya 3 esai.
- **Belum tertutup di gelombang ini:** esai T12 sedang (satu topik hanya muncul sekali per batch esai); sisakan untuk gelombang berikutnya.
- **Kasus:** tingkat sedang (6), sulit (5), dan sangat sulit (5) paling sedikit; kasus mudah sudah 11. Kasus baru memakai kombinasi topik yang paling jarang muncul (T01 dan T03 di tingkat sulit, T05 di tingkat sangat sulit).
- **Kunci PG:** di bank, huruf A dan B masing-masing 27%, C 22%, D 24%. Karena itu setiap batch PG meminta C dan D masing-masing 3, A dan B masing-masing 2.

Cara pakai:
1. Pastikan instruksi Project Claude penyusun memakai **Prompt B v4.9**. Pengetahuan Project memuat `schema/CONTRACT.md`, `docs/msk_taksonomi.md`, dan contoh soal ujian MSK. Project reviewer cukup memakai instruksi singkat; prompt reviewer v4.8 ikut tersalin lewat tombol **Salin Prompt + Data**.
2. Buka **satu percakapan baru**, lalu salin satu blok utuh per pesan, berurutan dari atas. Kerjakan **prioritas 1** lebih dulu.
3. Impor setiap hasil ke Pengelola Bank Soal. Perhatikan peringatan standar waktu, label bentuk di baris pertama authoring.notes, dan kalimat pertama setiap soal.
4. Review dengan Prompt C v4.8. Bila Project melaporkan Batch ID atau rentang ID sudah terpakai, naikkan nomornya.
5. Setelah soal lolos dan dipublikasikan, ekspor pack dan sinkronkan ke repositori.

Prioritas: 1 = PG sulit dan sangat sulit serta esai yang sel topiknya masih kosong; 2 = esai pelengkap dan kasus.

| Prioritas | Batch | Tipe | Jumlah | ID | Kesulitan | Teori |
|---|---|---|---|---|---|---|
| 1 | MSK-B70 | PG | 10 | MSK-MCQ-251 s.d. 260 | sedang 2, sangat sulit 8 | 4 dari 10 |
| 1 | MSK-B71 | PG | 10 | MSK-MCQ-261 s.d. 270 | mudah 3, sedang 1, sulit 6 | 4 dari 10 |
| 1 | MSK-B72 | Esai | 5 | MSK-ESA-086 s.d. 090 | mudah 1, sedang 1, sulit 2, sangat sulit 1 | 2 dari 5 |
| 2 | MSK-B73 | Esai | 5 | MSK-ESA-091 s.d. 095 | mudah 2, sedang 2, sangat sulit 1 | 2 dari 5 |
| 2 | MSK-B74 | Kasus mini | 2 | MSK-KAS-048 s.d. 049 | sedang 2 | 1 sub per kasus |
| 2 | MSK-B75 | Kasus komprehensif | 2 | MSK-KAS-050 s.d. 051 | sulit 2 | 1 sub per kasus |
| 2 | MSK-B76 | Kasus komprehensif | 2 | MSK-KAS-052 s.d. 053 | sangat sulit 2 | 1 sub per kasus |

Gelombang 7 berakhir di MSK-B76 (MSK-MCQ-270, MSK-ESA-095, MSK-KAS-053).

## 1. MSK-B70 (mcq)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B70
Tipe: mcq | Jumlah: 10 | ID mulai: MSK-MCQ-251
Sebaran topik: T01 1, T03 1, T04 1, T05 1, T06 1, T07 1, T08 1, T09 1, T10 1, T12 1
Sebaran kesulitan: sedang 2, sangat_sulit 8
Ukuran kasus: -
Level kognitif: C3; C5-C6 (sesuai tingkat setiap soal)
Catatan khusus:
- Sebaran kunci: huruf C dan D masing-masing 3 soal, A dan B masing-masing 2 soal (di bank, C dan D paling sedikit); tidak ada huruf yang lebih dari 3.
- Bentuk: 4 soal teori dan 6 soal analisis (40%; batas 40%).
- Soal teori sulit dan sangat sulit memadukan dua ragam atau dua konsep; bukan sekadar menjelaskan satu konsep.
- PG sedang (1,5 menit): C3, penerapan pada situasi, stem + opsi ≤ 120 kata, maks 1 langkah hitung.
- PG sangat sulit (3,5 menit): C5-C6, integrasi minimal 2 konsep, stem + opsi ≤ 200 kata, minimal 3 langkah hitung atau penalaran atau data kuantitatif. Kesulitan dari integrasi dan pertimbangan yang saling bertentangan, bukan dari stem ambigu; tetap satu jawaban paling tepat.
- T01 (teori; sangat sulit; ragam: banding-kontras): maksud stratejik (strategic intent) dan rencana stratejik bertahap: perbedaan pendekatan, dan kapan masing-masing lebih tepat bagi perusahaan yang menghadapi pesaing global yang jauh lebih besar.
- T03 (analisis; sangat sulit; pembuka: data (tabel penilaian kapabilitas tiga pesaing); entitas: produsen sepatu olahraga lokal): memilih kapabilitas yang paling layak diperkuat dengan menilai nilai, kelangkaan, ketakteniruan, dan organisasi pada data pesaing (tema 7).
- T04 (analisis; sangat sulit; pembuka: perdebatan; entitas: jaringan toko buku independen): dua pemilik berbeda pendapat: bersaing harga dengan lokapasar raksasa atau menjual pengalaman komunitas; memilih yang paling konsisten dengan sumber keunggulan (tema 9).
- T06 (teori; sangat sulit; ragam: keterbatasan): keterbatasan kerangka tekanan efisiensi global vs responsivitas lokal untuk layanan digital lintas negara.
- T07 (analisis; sangat sulit; pembuka: dokumen (ringkasan komite investasi); entitas: BUMN konstruksi): mempertahankan atau melepas dua unit usaha non-inti dengan matriks portofolio dan nilai tambah korporat (tema 5).
- T08 (teori; sangat sulit; ragam: menilai pernyataan): pernyataan separuh benar tentang teori pemangku kepentingan dan kewajiban terhadap pemegang saham; peserta menilai bagian yang benar dan yang keliru.
- T09 (analisis; sangat sulit; pembuka: peran ("Anda kepala sumber daya manusia ..."); entitas: pabrik elektronik kontrak): otomasi lini perakitan: memilih rencana pelatihan ulang, struktur kerja, dan sistem insentif yang paling selaras dengan strategi mutu (tema 8).
- T12 (analisis; sangat sulit; pembuka: kronologi; entitas: perusahaan pembiayaan kendaraan (multifinance)): tiga tahun proyek analitik: menilai langkah yang menciptakan keunggulan berbasis data dan yang hanya menambah biaya (tema 9, 13).
- T05 (analisis; sedang; pembuka: peristiwa; entitas: produsen cat dekoratif): penjualan turun setelah daya beli melemah; memilih strategi fungsional operasi dan pemasaran yang paling mendukung strategi bisnis (tema 7).
- T10 (teori; sedang; ragam: sebab-akibat): bagaimana sistem penghargaan dan teladan pemimpin membentuk budaya perusahaan dan perilaku etis pegawai.
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Nilai uang ditulis penuh dalam rupiah dengan titik ribuan (mis. Rp6.000.000.000), tanpa "ribu", "juta", "miliar", "triliun", atau tabel "dalam jutaan Rupiah"; sebut aturan pembulatan di stem bila hasil hitung tidak bulat.
- Gaya bahasa (Prompt B v4.9): satu gagasan per kalimat; kalimat narasi paling banyak 25 kata (mudah, sedang) atau 30 kata (sulit, sangat sulit); titik koma paling banyak satu per kalimat dan tidak dirantai; kurung hanya untuk singkatan, nomor PSAK, atau padanan istilah; opsi PG satu pernyataan dengan satu alasan pendek; kata sehari-hari lebih dulu, istilah teknis hanya yang menjadi bagian materi; kalimat aktif. Soal mudah dan sedang memakai bahasa paling sederhana.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 250, MSK-ESA-001 s.d. 085, MSK-KAS-001 s.d. 047) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.9):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Soal teori: paling banyak dua soal teori diawali latar periode atau kondisi ekonomi (mis. "Sepanjang 2023-2026 ..."); soal teori lain dibuka langsung dengan konsep, kutipan pernyataan, argumen yang keliru, atau perbandingan dua situasi. Kalimat perintah bervariasi.
- Kunci tidak boleh dapat ditebak dari opsi saja: paling banyak satu distraktor per soal memakai kata mutlak (selalu, pasti, hanya, permanen, sepenuhnya); istilah khas kerangka tidak hanya muncul di kunci; panjang opsi setara.
- Nama fiktif tidak boleh mirip merek, perusahaan, aplikasi, atau lembaga nyata, termasuk pola nama BUMD nyata dengan nama daerah atau tempat nyata.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.9. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.9, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
- Toleransi waktu dan panjang (Prompt B v4.9): estimatedMinutes ditulis sesuai standar tingkat (selisih sampai 20% diterima); stem, opsi, narasi, dan jawaban ideal yang melebihi batas kata sampai 25% diterima. Utamakan soal yang benar, jelas, dan selaras dengan pembahasan. Revisi paling banyak 3 kali per soal; perbaiki semua temuan dalam satu putaran.
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

## 2. MSK-B71 (mcq)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B71
Tipe: mcq | Jumlah: 10 | ID mulai: MSK-MCQ-261
Sebaran topik: T02 1, T04 1, T05 1, T06 1, T07 1, T08 1, T09 1, T10 1, T11 1, T12 1
Sebaran kesulitan: mudah 3, sedang 1, sulit 6
Ukuran kasus: -
Level kognitif: C2-C3; C3; C4 (sesuai tingkat setiap soal)
Catatan khusus:
- Sebaran kunci: huruf C dan D masing-masing 3 soal, A dan B masing-masing 2 soal (di bank, C dan D paling sedikit); tidak ada huruf yang lebih dari 3.
- Bentuk: 4 soal teori dan 6 soal analisis (40%; batas 40%).
- Soal teori sulit dan sangat sulit memadukan dua ragam atau dua konsep; bukan sekadar menjelaskan satu konsep.
- PG mudah (1 menit): C2-C3, satu konsep, stem + opsi ≤ 90 kata, tanpa hitungan. Situasi singkat paling banyak 1-2 kalimat; distraktor tetap miskonsepsi umum.
- PG sedang (1,5 menit): C3, penerapan pada situasi, stem + opsi ≤ 120 kata, maks 1 langkah hitung.
- PG sulit (2,5 menit): C4, analisis, stem + opsi ≤ 160 kata atau tabel kecil, 2-3 langkah.
- T05 (analisis; sulit; pembuka: profil; entitas: lembaga pelatihan kerja swasta): memilih strategi fungsional pemasaran dan operasi yang paling mendukung strategi pelatihan keterampilan digital (tema 8).
- T06 (analisis; sulit; pembuka: dokumen (surel pembeli luar negeri); entitas: eksportir minyak atsiri): pembeli meminta pasokan dari dua negara; memilih langkah masuk dan pasokan yang paling sesuai dengan tarif yang diasumsikan untuk periode soal (tema 3).
- T11 (teori; sulit; ragam: menemukan kekeliruan): argumen bahwa perubahan besar paling baik dilakukan tiba-tiba karena resistensi hanya muncul bila pegawai diberi waktu; peserta menunjukkan letak kekeliruan.
- T12 (analisis; sulit; pembuka: data; entitas: jaringan klinik hewan): data dasbor kunjungan, stok, dan keluhan; memilih keputusan yang didukung data dan mengenali risiko salah tafsir (tema 9).
- T10 (teori; sulit; ragam: perkembangan teori): kepemimpinan di tim hibrida: bagian teori kepemimpinan klasik yang tetap berlaku dan bagian yang perlu diperluas.
- T08 (analisis; sulit; pembuka: perdebatan; entitas: perusahaan perikanan tangkap): direksi dan kepala keberlanjutan berbeda pendapat tentang pembatasan alat tangkap yang diminta pembeli (tema 10).
- T04 (analisis; mudah; pembuka: tanpa nama ("Sebuah toko mebel ..."); entitas: toko mebel keluarga): mengenali strategi generik yang dijalankan toko dari tiga ciri operasinya.
- T07 (teori; mudah; ragam: alasan konseptual): mengapa perusahaan multibisnis perlu menguji daya tarik industri sebelum diversifikasi.
- T02 (teori; mudah; ragam: banding-kontras): lingkungan makro dan lingkungan industri: perbedaan dan contoh faktor di masing-masing.
- T09 (analisis; sedang; pembuka: peristiwa; entitas: restoran waralaba nasional): pembukaan 40 gerai baru dan keluhan mutu; menentukan penyesuaian struktur dan kendali operasi (tema 7).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Nilai uang ditulis penuh dalam rupiah dengan titik ribuan (mis. Rp6.000.000.000), tanpa "ribu", "juta", "miliar", "triliun", atau tabel "dalam jutaan Rupiah"; sebut aturan pembulatan di stem bila hasil hitung tidak bulat.
- Gaya bahasa (Prompt B v4.9): satu gagasan per kalimat; kalimat narasi paling banyak 25 kata (mudah, sedang) atau 30 kata (sulit, sangat sulit); titik koma paling banyak satu per kalimat dan tidak dirantai; kurung hanya untuk singkatan, nomor PSAK, atau padanan istilah; opsi PG satu pernyataan dengan satu alasan pendek; kata sehari-hari lebih dulu, istilah teknis hanya yang menjadi bagian materi; kalimat aktif. Soal mudah dan sedang memakai bahasa paling sederhana.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 250, MSK-ESA-001 s.d. 085, MSK-KAS-001 s.d. 047) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.9):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Soal teori: paling banyak dua soal teori diawali latar periode atau kondisi ekonomi (mis. "Sepanjang 2023-2026 ..."); soal teori lain dibuka langsung dengan konsep, kutipan pernyataan, argumen yang keliru, atau perbandingan dua situasi. Kalimat perintah bervariasi.
- Kunci tidak boleh dapat ditebak dari opsi saja: paling banyak satu distraktor per soal memakai kata mutlak (selalu, pasti, hanya, permanen, sepenuhnya); istilah khas kerangka tidak hanya muncul di kunci; panjang opsi setara.
- Nama fiktif tidak boleh mirip merek, perusahaan, aplikasi, atau lembaga nyata, termasuk pola nama BUMD nyata dengan nama daerah atau tempat nyata.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.9. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.9, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
- Toleransi waktu dan panjang (Prompt B v4.9): estimatedMinutes ditulis sesuai standar tingkat (selisih sampai 20% diterima); stem, opsi, narasi, dan jawaban ideal yang melebihi batas kata sampai 25% diterima. Utamakan soal yang benar, jelas, dan selaras dengan pembahasan. Revisi paling banyak 3 kali per soal; perbaiki semua temuan dalam satu putaran.
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

## 3. MSK-B72 (essay)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B72
Tipe: essay | Jumlah: 5 | ID mulai: MSK-ESA-086
Sebaran topik: T05 1, T08 1, T10 1, T11 1, T12 1
Sebaran kesulitan: mudah 1, sedang 1, sulit 2, sangat_sulit 1
Ukuran kasus: -
Level kognitif: C2-C3; C3; C4; C5-C6 (sesuai tingkat setiap soal)
Catatan khusus:
- Bentuk: 2 soal teori dan 3 soal analisis (40%; batas 40%).
- Soal teori sulit dan sangat sulit memadukan dua ragam atau dua konsep; bukan sekadar menjelaskan satu konsep.
- Esai mudah (6 menit): C2-C3, 1 perintah (jelaskan/identifikasi), stem ≤ 120 kata, jawaban ideal ≤ 100 kata, 3 kriteria rubrik.
- Esai sedang (10 menit): C3, 2 perintah, penerapan, stem ≤ 150 kata, jawaban ideal ≤ 170 kata.
- Esai sulit (15 menit): C4, 2-3 perintah, analisis + rekomendasi, stem ≤ 200 kata, jawaban ideal ≤ 250 kata.
- Esai sangat sulit (20 menit): C5-C6, 3 perintah (analisis, evaluasi alternatif, rekomendasi atau sintesis), stem ≤ 250 kata, jawaban ideal ≤ 330 kata, 4-6 kriteria rubrik.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- T12 (teori; mudah; ragam: alasan konseptual): mengapa data harus diubah menjadi keputusan agar bernilai bagi strategi, bukan hanya dikumpulkan.
- T10 (analisis; sedang; pembuka: peran ("Anda ketua tim budaya ..."); entitas: perusahaan pelayaran niaga): kapal tepat waktu tetapi laporan insiden diabaikan; analisis budaya dan dua tindakan pemimpin (tema 12).
- T05 (analisis; sulit; pembuka: data (tabel biaya dan waktu layanan); entitas: operator lokapasar hasil tani): tiga usulan strategi operasi untuk menurunkan kerusakan barang; analisis dan rekomendasi prioritas (tema 6).
- T08 (analisis; sulit; pembuka: kronologi; entitas: produsen kemasan plastik): empat tahun tekanan regulasi dan pembeli; analisis dilema etis dan strategi keberlanjutan, lalu rekomendasi (tema 10).
- T11 (teori; sangat sulit; ragam: keterbatasan dan perkembangan teori): keterbatasan model perubahan bertahap (mencairkan, mengubah, membekukan kembali) dalam lingkungan yang berubah terus-menerus, dan usulan peserta untuk melengkapinya.
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Nilai uang ditulis penuh dalam rupiah dengan titik ribuan (mis. Rp6.000.000.000), tanpa "ribu", "juta", "miliar", "triliun", atau tabel "dalam jutaan Rupiah"; sebut aturan pembulatan di stem bila hasil hitung tidak bulat.
- Gaya bahasa (Prompt B v4.9): satu gagasan per kalimat; kalimat narasi paling banyak 25 kata (mudah, sedang) atau 30 kata (sulit, sangat sulit); titik koma paling banyak satu per kalimat dan tidak dirantai; kurung hanya untuk singkatan, nomor PSAK, atau padanan istilah; opsi PG satu pernyataan dengan satu alasan pendek; kata sehari-hari lebih dulu, istilah teknis hanya yang menjadi bagian materi; kalimat aktif. Soal mudah dan sedang memakai bahasa paling sederhana.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 250, MSK-ESA-001 s.d. 085, MSK-KAS-001 s.d. 047) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.9):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Rubrik menilai kualitas penalaran, ketepatan konsep, dan penggunaan data; acceptableAlternatives menyebut kerangka atau sudut pandang lain yang sah beserta syarat nilai penuhnya.
- Soal teori: paling banyak dua soal teori diawali latar periode atau kondisi ekonomi (mis. "Sepanjang 2023-2026 ..."); soal teori lain dibuka langsung dengan konsep, kutipan pernyataan, argumen yang keliru, atau perbandingan dua situasi. Kalimat perintah bervariasi.
- Nama fiktif tidak boleh mirip merek, perusahaan, aplikasi, atau lembaga nyata, termasuk pola nama BUMD nyata dengan nama daerah atau tempat nyata.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.9. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.9, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
- Toleransi waktu dan panjang (Prompt B v4.9): estimatedMinutes ditulis sesuai standar tingkat (selisih sampai 20% diterima); stem, opsi, narasi, dan jawaban ideal yang melebihi batas kata sampai 25% diterima. Utamakan soal yang benar, jelas, dan selaras dengan pembahasan. Revisi paling banyak 3 kali per soal; perbaiki semua temuan dalam satu putaran.
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

## 4. MSK-B73 (essay)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B73
Tipe: essay | Jumlah: 5 | ID mulai: MSK-ESA-091
Sebaran topik: T05 1, T08 1, T10 1, T11 1, T12 1
Sebaran kesulitan: mudah 2, sedang 2, sangat_sulit 1
Ukuran kasus: -
Level kognitif: C2-C3; C3; C5-C6 (sesuai tingkat setiap soal)
Catatan khusus:
- Bentuk: 2 soal teori dan 3 soal analisis (40%; batas 40%).
- Soal teori sulit dan sangat sulit memadukan dua ragam atau dua konsep; bukan sekadar menjelaskan satu konsep.
- Esai mudah (6 menit): C2-C3, 1 perintah (jelaskan/identifikasi), stem ≤ 120 kata, jawaban ideal ≤ 100 kata, 3 kriteria rubrik.
- Esai sedang (10 menit): C3, 2 perintah, penerapan, stem ≤ 150 kata, jawaban ideal ≤ 170 kata.
- Esai sangat sulit (20 menit): C5-C6, 3 perintah (analisis, evaluasi alternatif, rekomendasi atau sintesis), stem ≤ 250 kata, jawaban ideal ≤ 330 kata, 4-6 kriteria rubrik.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- T10 (teori; mudah; ragam: banding-kontras): gaya kepemimpinan otoriter dan partisipatif: perbedaan dan kondisi tugas serta bawahan yang cocok untuk masing-masing.
- T11 (analisis; sedang; pembuka: peristiwa; entitas: dinas pelayanan perizinan terpadu pemerintah kota): sistem perizinan daring diluncurkan tetapi pegawai kembali ke cara lama; analisis resistensi dan dua langkah perbaikan (tema 13).
- T12 (teori; sangat sulit; ragam: asumsi dan keterbatasan): asumsi analitik prediktif (pola masa lalu berlanjut) dan keterbatasannya pada pasar yang berubah cepat; usulan pengamanan keputusan.
- T05 (analisis; mudah; pembuka: tanpa nama ("Sebuah toko perlengkapan bayi ..."); entitas: toko perlengkapan bayi daring): menjelaskan hubungan satu sasaran penjualan dengan strategi fungsional pemasaran yang mendukungnya (tema 7).
- T08 (analisis; sedang; pembuka: dokumen (surat keberatan dokter); entitas: perusahaan farmasi generik): target penjualan agresif mendorong promosi berlebihan; analisis isu etis dan satu perbaikan sistem penghargaan (tema 11).
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Nilai uang ditulis penuh dalam rupiah dengan titik ribuan (mis. Rp6.000.000.000), tanpa "ribu", "juta", "miliar", "triliun", atau tabel "dalam jutaan Rupiah"; sebut aturan pembulatan di stem bila hasil hitung tidak bulat.
- Gaya bahasa (Prompt B v4.9): satu gagasan per kalimat; kalimat narasi paling banyak 25 kata (mudah, sedang) atau 30 kata (sulit, sangat sulit); titik koma paling banyak satu per kalimat dan tidak dirantai; kurung hanya untuk singkatan, nomor PSAK, atau padanan istilah; opsi PG satu pernyataan dengan satu alasan pendek; kata sehari-hari lebih dulu, istilah teknis hanya yang menjadi bagian materi; kalimat aktif. Soal mudah dan sedang memakai bahasa paling sederhana.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 250, MSK-ESA-001 s.d. 085, MSK-KAS-001 s.d. 047) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.9):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Rubrik menilai kualitas penalaran, ketepatan konsep, dan penggunaan data; acceptableAlternatives menyebut kerangka atau sudut pandang lain yang sah beserta syarat nilai penuhnya.
- Soal teori: paling banyak dua soal teori diawali latar periode atau kondisi ekonomi (mis. "Sepanjang 2023-2026 ..."); soal teori lain dibuka langsung dengan konsep, kutipan pernyataan, argumen yang keliru, atau perbandingan dua situasi. Kalimat perintah bervariasi.
- Nama fiktif tidak boleh mirip merek, perusahaan, aplikasi, atau lembaga nyata, termasuk pola nama BUMD nyata dengan nama daerah atau tempat nyata.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.9. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.9, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
- Toleransi waktu dan panjang (Prompt B v4.9): estimatedMinutes ditulis sesuai standar tingkat (selisih sampai 20% diterima); stem, opsi, narasi, dan jawaban ideal yang melebihi batas kata sampai 25% diterima. Utamakan soal yang benar, jelas, dan selaras dengan pembahasan. Revisi paling banyak 3 kali per soal; perbaiki semua temuan dalam satu putaran.
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

## 5. MSK-B74 (case mini)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B74
Tipe: case | Jumlah: 2 | ID mulai: MSK-KAS-048
Sebaran topik: MSK-KAS-048 T01, T04; MSK-KAS-049 T03, T05
Sebaran kesulitan: sedang 2
Ukuran kasus: mini
Level kognitif: C3-C4
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus mini sedang (20 menit): C3-C4, narasi + data ≤ 400 kata, 2-3 sub, jawaban ideal semua sub ≤ 320 kata.
- MSK-KAS-048 (sedang; T01, T04; pembuka: dokumen (ringkasan proposal konsultan dan komentar pemilik); entitas: perusahaan jasa antar-jemput anak sekolah): proposal memperluas layanan ke kurir paket karena pendapatan sekolah turun (tema 7). (a) analisis: nilai kesesuaian arah baru dengan misi, tujuan, dan posisi bersaing dari data kasus; (b) teori, ragam banding-kontras: strategi fokus dan strategi diferensiasi serta kondisi yang cocok bagi masing-masing; (c) rekomendasi singkat.
- MSK-KAS-049 (sedang; T03, T05; pembuka: peran ("Anda baru menjadi manajer produksi ..."); entitas: produsen jamu kemasan modern): permintaan naik setelah penjualan daring tetapi mutu tidak stabil (tema 9). (a) teori, ragam sebab-akibat: hubungan sumber daya dan kapabilitas dengan keunggulan yang bertahan; (b) analisis: pilih satu kapabilitas yang diperkuat dan strategi operasi pendukungnya dari data kapasitas dan keluhan; (c) satu sasaran fungsional yang terukur.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Nilai uang ditulis penuh dalam rupiah dengan titik ribuan (mis. Rp6.000.000.000), tanpa "ribu", "juta", "miliar", "triliun", atau tabel "dalam jutaan Rupiah"; sebut aturan pembulatan di stem bila hasil hitung tidak bulat.
- Gaya bahasa (Prompt B v4.9): satu gagasan per kalimat; kalimat narasi paling banyak 25 kata (mudah, sedang) atau 30 kata (sulit, sangat sulit); titik koma paling banyak satu per kalimat dan tidak dirantai; kurung hanya untuk singkatan, nomor PSAK, atau padanan istilah; opsi PG satu pernyataan dengan satu alasan pendek; kata sehari-hari lebih dulu, istilah teknis hanya yang menjadi bagian materi; kalimat aktif. Soal mudah dan sedang memakai bahasa paling sederhana.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 250, MSK-ESA-001 s.d. 085, MSK-KAS-001 s.d. 047) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.9):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Rubrik menilai kualitas penalaran, ketepatan konsep, dan penggunaan data; acceptableAlternatives menyebut kerangka atau sudut pandang lain yang sah beserta syarat nilai penuhnya.
- Setiap kasus memuat tepat satu sub teori (tertulis di rincian kasus). Paling banyak dua sub menyebut nama alat analisis; alur kedua kasus berbeda.
- Nama fiktif tidak boleh mirip merek, perusahaan, aplikasi, atau lembaga nyata, termasuk pola nama BUMD nyata dengan nama daerah atau tempat nyata.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.9. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.9, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
- Toleransi waktu dan panjang (Prompt B v4.9): estimatedMinutes ditulis sesuai standar tingkat (selisih sampai 20% diterima); stem, opsi, narasi, dan jawaban ideal yang melebihi batas kata sampai 25% diterima. Utamakan soal yang benar, jelas, dan selaras dengan pembahasan. Revisi paling banyak 3 kali per soal; perbaiki semua temuan dalam satu putaran.
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

## 6. MSK-B75 (case komprehensif)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B75
Tipe: case | Jumlah: 2 | ID mulai: MSK-KAS-050
Sebaran topik: MSK-KAS-050 T01, T03, T05, T10; MSK-KAS-051 T04, T08, T06, T12
Sebaran kesulitan: sulit 2
Ukuran kasus: komprehensif
Level kognitif: C4-C5
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus komprehensif sulit (40 menit): C4-C5, narasi + data ≤ 700 kata, 4 sub, jawaban ideal semua sub ≤ 600 kata, hitungan ≤ 5 menit; integrasi minimal 3 topik.
- MSK-KAS-050 (sulit; T01, T03, T05, T10; pembuka: data (ringkasan laporan tahunan lima tahun); entitas: BUMN perkebunan teh): produktivitas turun, pangsa ekspor menyusut, dan direksi baru ingin menggeser arah ke produk bernilai tambah (tema 5, 12). (a) analisis: apa yang melemah pada arah, sumber daya, dan kapabilitas, tanpa menyebut nama kerangka; (b) teori, ragam asumsi: asumsi bahwa budaya organisasi dapat diubah cepat oleh pergantian pimpinan; (c) evaluasi dua alternatif strategi dengan data keuangan; (d) rekomendasi, risiko, dan indikator kinerja.
- MSK-KAS-051 (sulit; T04, T08, T06, T12; pembuka: dokumen (memo direksi dan surat pembeli); entitas: produsen sepatu kulit untuk ekspor): pembeli besar meminta jejak karbon dan ketertelusuran, sedangkan tarif yang diasumsikan untuk periode kasus menekan margin (tema 3, 10). (a) analisis posisi bersaing dan tekanan pembeli; (b) evaluasi tiga opsi (pasar baru, pabrik di negara lain, peningkatan nilai produk) dengan data biaya; (c) teori, ragam banding-kontras: tanggung jawab sosial sebagai biaya dan sebagai sumber diferensiasi; (d) rekomendasi dan peran data pelacakan.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Nilai uang ditulis penuh dalam rupiah dengan titik ribuan (mis. Rp6.000.000.000), tanpa "ribu", "juta", "miliar", "triliun", atau tabel "dalam jutaan Rupiah"; sebut aturan pembulatan di stem bila hasil hitung tidak bulat.
- Gaya bahasa (Prompt B v4.9): satu gagasan per kalimat; kalimat narasi paling banyak 25 kata (mudah, sedang) atau 30 kata (sulit, sangat sulit); titik koma paling banyak satu per kalimat dan tidak dirantai; kurung hanya untuk singkatan, nomor PSAK, atau padanan istilah; opsi PG satu pernyataan dengan satu alasan pendek; kata sehari-hari lebih dulu, istilah teknis hanya yang menjadi bagian materi; kalimat aktif. Soal mudah dan sedang memakai bahasa paling sederhana.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 250, MSK-ESA-001 s.d. 085, MSK-KAS-001 s.d. 047) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.9):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Rubrik menilai kualitas penalaran, ketepatan konsep, dan penggunaan data; acceptableAlternatives menyebut kerangka atau sudut pandang lain yang sah beserta syarat nilai penuhnya.
- Setiap kasus memuat tepat satu sub teori (tertulis di rincian kasus). Paling banyak dua sub menyebut nama alat analisis; alur kedua kasus berbeda.
- Nama fiktif tidak boleh mirip merek, perusahaan, aplikasi, atau lembaga nyata, termasuk pola nama BUMD nyata dengan nama daerah atau tempat nyata.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.9. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.9, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
- Toleransi waktu dan panjang (Prompt B v4.9): estimatedMinutes ditulis sesuai standar tingkat (selisih sampai 20% diterima); stem, opsi, narasi, dan jawaban ideal yang melebihi batas kata sampai 25% diterima. Utamakan soal yang benar, jelas, dan selaras dengan pembahasan. Revisi paling banyak 3 kali per soal; perbaiki semua temuan dalam satu putaran.
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

## 7. MSK-B76 (case komprehensif)
```
FORMULIR BATCH
Mata ujian: Manajemen Stratejik dan Kepemimpinan (subjectId: msk)
Batch ID: MSK-B76
Tipe: case | Jumlah: 2 | ID mulai: MSK-KAS-052
Sebaran topik: MSK-KAS-052 T05, T03, T09, T08; MSK-KAS-053 T04, T06, T02, T07
Sebaran kesulitan: sangat_sulit 2
Ukuran kasus: komprehensif
Level kognitif: C5-C6
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus komprehensif sangat sulit (45 menit): C5-C6, narasi + data ≤ 900 kata, 4 sub, jawaban ideal semua sub ≤ 650 kata, hitungan ≤ 5 menit; integrasi minimal 3 topik; menuntut analisis, evaluasi alternatif, risiko, implikasi keuangan, dan rekomendasi.
- MSK-KAS-052 (sangat sulit; T05, T03, T09, T08; pembuka: perdebatan; entitas: penyedia layanan pembayaran digital): tiga direktur berbeda pendapat tentang ekspansi ke pembiayaan mikro setelah kasus gagal bayar pinjaman daring di industri (tema 9, 11). (a) analisis usulan masing-masing dengan data pendapatan, biaya, dan kredit macet; (b) teori, ragam keterbatasan: keterbatasan penilaian sumber daya internal yang mengabaikan risiko kepatuhan; (c) evaluasi alternatif dan risiko etis; (d) rekomendasi, rencana strategi fungsional, dan implikasi keuangan.
- MSK-KAS-053 (sangat sulit; T04, T06, T02, T07; pembuka: kronologi; entitas: grup makanan dan minuman Tbk): lima tahun ekspansi ke tiga negara ASEAN dengan hasil beragam sementara rupiah melemah dan tarif impor di satu negara berubah (tema 2, 12). (a) analisis mengapa hasil berbeda antarnegara; (b) evaluasi apakah strategi multidomestik tepat atau perlu bergeser ke global dengan data biaya; (c) teori, ragam sebab-akibat: hubungan struktur organisasi dan pengambilan keputusan dengan strategi internasional; (d) rekomendasi portofolio negara, risiko, dan implikasi keuangan.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Catatan umum:
- Ikuti docs/msk_taksonomi.md (taksonomi 12 topik T01-T12 dan kompetensi K01-K06; bukan taksonomi lama T01-T16).
- Jangan menyalin contoh, nama perusahaan, atau angka dari modul dan soal resmi.
- Nilai uang ditulis penuh dalam rupiah dengan titik ribuan (mis. Rp6.000.000.000), tanpa "ribu", "juta", "miliar", "triliun", atau tabel "dalam jutaan Rupiah"; sebut aturan pembulatan di stem bila hasil hitung tidak bulat.
- Gaya bahasa (Prompt B v4.9): satu gagasan per kalimat; kalimat narasi paling banyak 25 kata (mudah, sedang) atau 30 kata (sulit, sangat sulit); titik koma paling banyak satu per kalimat dan tidak dirantai; kurung hanya untuk singkatan, nomor PSAK, atau padanan istilah; opsi PG satu pernyataan dengan satu alasan pendek; kata sehari-hari lebih dulu, istilah teknis hanya yang menjadi bagian materi; kalimat aktif. Soal mudah dan sedang memakai bahasa paling sederhana.
- Hindari skenario yang mirip soal MSK yang sudah ada (MSK-MCQ-001 s.d. 250, MSK-ESA-001 s.d. 085, MSK-KAS-001 s.d. 047) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.9):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari teori dan kerangka akademik manajemen stratejik dan kepemimpinan yang umum dipakai (mis. lima kekuatan Porter, PESTEL, VRIO, rantai nilai, strategi generik, matriks Ansoff dan BCG, balanced scorecard, 7S McKinsey, model perubahan Lewin dan Kotter, teori kepemimpinan). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
- Perintah tidak selalu "Menurut kerangka X". Pada soal sulit dan sangat sulit, sebagian soal tidak menyebut nama kerangka sehingga peserta memilih sendiri kerangka yang tepat.
- Rubrik menilai kualitas penalaran, ketepatan konsep, dan penggunaan data; acceptableAlternatives menyebut kerangka atau sudut pandang lain yang sah beserta syarat nilai penuhnya.
- Setiap kasus memuat tepat satu sub teori (tertulis di rincian kasus). Paling banyak dua sub menyebut nama alat analisis; alur kedua kasus berbeda.
- Nama fiktif tidak boleh mirip merek, perusahaan, aplikasi, atau lembaga nyata, termasuk pola nama BUMD nyata dengan nama daerah atau tempat nyata.
- Pembuka, entitas, dan ragam di daftar topik sudah memenuhi batas Prompt B v4.9. Jangan menukarnya; bila terpaksa, tulis alasannya di Catatan penyusun.
- Baris pertama authoring.notes: label bentuk sesuai Prompt B v4.9, mis. "Bentuk: teori; ragam: asumsi." atau "Bentuk: analisis; pembuka: dokumen; entitas: BUMD."
- Toleransi waktu dan panjang (Prompt B v4.9): estimatedMinutes ditulis sesuai standar tingkat (selisih sampai 20% diterima); stem, opsi, narasi, dan jawaban ideal yang melebihi batas kata sampai 25% diterima. Utamakan soal yang benar, jelas, dan selaras dengan pembahasan. Revisi paling banyak 3 kali per soal; perbaiki semua temuan dalam satu putaran.
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
