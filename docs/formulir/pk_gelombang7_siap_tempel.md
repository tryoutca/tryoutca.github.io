# PK gelombang 7 — siap tempel

Formulir gelombang 7, disusun 2026-11-02 untuk **Prompt B v4.9** dan **Prompt C v4.8**.
Tujuan: **menyeimbangkan komposisi soal yang tayang**. Stok dihitung dari ekspor terbaru (`Publikasi Soal/PK 2026-10-31 09.37 v1.10.0 ...`, 212 soal; gelombang 5 sudah tayang). **Gelombang 6 PK (PK-B50 s.d. B55) belum ada di ekspor**; perhitungan di bawah menganggap gelombang 6 dikerjakan lebih dulu. Sasaran: PG sekitar 45 per tingkat, esai sekitar 15 per tingkat, kasus minimal 8 per tingkat.
Nomor melanjutkan akhir gelombang 6: PK-B55, PK-MCQ-205, PK-ESA-065, PK-KAS-039.

Stok LIVE (mudah/sedang/sulit/sangat sulit) dan rencana:

| Tipe | LIVE (ekspor) | Gelombang 6 (belum tayang) | Gelombang 7 | LIVE sesudahnya bila semua lolos |
|---|---|---|---|---|
| PG | 35/35/41/33 | 5/6/0/9 | 5/5/5/5 | 45/46/46/47 |
| Esai | 10/13/11/11 | 3/0/1/1 | 2/2/3/3 | 15/15/15/15 |
| Kasus | 3/9/7/3 | 4/0/0/2 | 2/0/1/3 | 9/9/8/8 |

Kebutuhan yang dijawab gelombang ini (gelombang 6 sudah menutup sebagian):
- **PG:** sel yang masih kosong di ekspor: T01 sulit, T02 sangat sulit, T14 sangat sulit. Topik T01, T04, T09, dan T11 paling sedikit soalnya (8-9 PG).
- **Esai:** topik T11 (1 esai), T13 (1), T06 (2), T12 (2), dan T14 (2) paling tipis; 14 sel topik-tingkat masih kosong, terutama di T06, T11, T12, T13, dan T14.
- **Belum tertutup di gelombang ini** (gelombang 6 PK menutup esai T12 mudah): esai T06 mudah, esai T11 sangat sulit, esai T13 mudah; sisakan untuk gelombang berikutnya.
- **Kasus:** T01 belum punya kasus sama sekali; T02, T06, T11, dan T14 baru punya 1-2 kasus. Kasus sangat sulit ditambah agar Level 4 dan Simulasi bervariasi.
- **Kunci PG:** di bank, huruf A 28%, B 26%, C 24%, D 22%. Setiap batch PG meminta C dan D masing-masing 3, A dan B masing-masing 2.
- **Revisi angka PK** (`docs/formulir/pk_revisi_angka_siap_tempel.md`) bersifat terpisah; soal yang direvisi sementara keluar dari paket, jadi kerjakan per kelompok.

Cara pakai:
1. Pastikan instruksi Project Claude penyusun memakai **Prompt B v4.9**, dengan pengetahuan Project `schema/CONTRACT.md`, `docs/pk_taksonomi.md`, dan `docs/pk_rujukan_penyusun.md`.
2. Buka **satu percakapan baru**, lalu salin satu blok utuh per pesan, berurutan dari atas. Kerjakan **prioritas 1** lebih dulu.
3. Impor setiap hasil ke Pengelola Bank Soal. Perhatikan peringatan standar waktu, label bentuk di baris pertama authoring.notes, dan kalimat pertama setiap soal.
4. Review dengan Prompt C v4.8 (tersalin lewat tombol **Salin Prompt + Data**). Bila Project melaporkan Batch ID atau rentang ID sudah terpakai, naikkan nomornya.

Prioritas: 1 = PG, esai, dan sel topik yang masih kosong; 2 = kasus.

| Prioritas | Batch | Tipe | Jumlah | ID | Kesulitan | Teori |
|---|---|---|---|---|---|---|
| 1 | PK-B56 | PG | 10 | PK-MCQ-206 s.d. 215 | mudah 5, sulit 5 | 4 dari 10 |
| 1 | PK-B57 | PG | 10 | PK-MCQ-216 s.d. 225 | sedang 5, sangat sulit 5 | 4 dari 10 |
| 1 | PK-B58 | Esai | 5 | PK-ESA-066 s.d. 070 | mudah 2, sedang 1, sulit 1, sangat sulit 1 | 2 dari 5 |
| 1 | PK-B59 | Esai | 5 | PK-ESA-071 s.d. 075 | sedang 1, sulit 2, sangat sulit 2 | 2 dari 5 |
| 2 | PK-B60 | Kasus mini | 2 | PK-KAS-040 s.d. 041 | mudah 2 | 1 sub per kasus |
| 2 | PK-B61 | Kasus komprehensif | 2 | PK-KAS-042 s.d. 043 | sangat sulit 2 | 1 sub per kasus |
| 2 | PK-B62 | Kasus komprehensif | 2 | PK-KAS-044 s.d. 045 | sulit 1, sangat sulit 1 | 1 sub per kasus |

Gelombang 7 berakhir di PK-B62 (PK-MCQ-225, PK-ESA-075, PK-KAS-045).

## 1. PK-B56 (mcq)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B56
Tipe: mcq | Jumlah: 10 | ID mulai: PK-MCQ-206
Sebaran topik: T01 1, T04 1, T05 1, T07 1, T08 1, T09 1, T10 1, T11 1, T12 1, T14 1
Sebaran kesulitan: mudah 5, sulit 5
Ukuran kasus: -
Level kognitif: C2-C3; C4 (sesuai tingkat setiap soal)
Catatan khusus:
- Sebaran kunci: huruf C dan D masing-masing 3 soal, A dan B masing-masing 2 soal (di bank, C dan D paling sedikit); tidak ada huruf yang lebih dari 3.
- Bentuk: 4 soal teori dan 6 soal analisis (40%; batas 40%).
- Soal teori sulit dan sangat sulit memadukan dua ragam atau dua konsep; bukan sekadar menjelaskan satu konsep.
- PG mudah (1 menit): C2-C3, satu konsep, stem + opsi ≤ 90 kata, tanpa hitungan. Situasi singkat paling banyak 1-2 kalimat; distraktor tetap miskonsepsi umum.
- PG sulit (2,5 menit): C4, analisis, stem + opsi ≤ 160 kata atau tabel kecil, 2-3 langkah.
- T05 (teori; mudah; ragam: alasan konseptual): mengapa komponen aset tetap yang umur manfaatnya berbeda disusutkan terpisah PSAK 216 (16).
- T07 (analisis; mudah; pembuka: data (tabel umur piutang); entitas: toko bahan bangunan): menghitung kerugian kredit ekspektasian dengan matriks provisi sederhana PSAK 109 (71) (tema 10).
- T08 (analisis; mudah; pembuka: tanpa nama ("Sebuah pabrik garmen ..."); entitas: pabrik garmen): rencana PHK yang sudah disetujui dan diumumkan; menentukan apakah pesangon diakui sebagai liabilitas PSAK 219 (24) dan PSAK 237 (57) (tema 4).
- T10 (teori; mudah; ragam: banding-kontras): kepentingan nonpengendali diukur pada nilai wajar atau pada bagian proporsional aset neto teridentifikasi PSAK 103 (22): perbedaan dampaknya pada goodwill.
- T12 (analisis; mudah; pembuka: profil; entitas: penerbit buku digital berlangganan): langganan tahunan dibayar di muka; menentukan pola pengakuan pendapatan PSAK 115 (72) (tema 8).
- T01 (teori; sulit; ragam: sebab-akibat): hubungan karakteristik kualitatif penambah (keterbandingan, dapat diverifikasi, tepat waktu, dapat dipahami) dengan kegunaan informasi bagi keputusan pengguna.
- T04 (analisis; sulit; pembuka: dokumen (memo gudang); entitas: distributor suku cadang alat berat): biaya perolehan, nilai realisasi neto, dan pemulihan penurunan nilai persediaan PSAK 202 (14) setelah harga naik kembali (tema 3).
- T09 (analisis; sulit; pembuka: perdebatan; entitas: perusahaan penerbangan carter): kepala pajak dan direktur keuangan berbeda pendapat apakah aset pajak tangguhan atas rugi fiskal boleh diakui PSAK 212 (46) (tema 2).
- T11 (analisis; sulit; pembuka: kronologi; entitas: perusahaan pengolahan nikel): kepemilikan di ventura bersama smelter; bagian laba dan penghapusan keuntungan transaksi ke hulu PSAK 228 (15) (tema 5).
- T14 (teori; sulit; ragam: menemukan kekeliruan): argumen yang menyamakan materialitas dalam laporan keberlanjutan dengan materialitas laporan keuangan; peserta menunjukkan letak kekeliruan tanpa bergantung pada ketentuan PSPK yang belum efektif.
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang ditulis penuh dalam rupiah dengan titik ribuan (mis. Rp6.000.000.000), tanpa "ribu", "juta", "miliar", "triliun", atau tabel "dalam jutaan Rupiah"; sebut aturan pembulatan di stem bila hasil hitung tidak bulat.
- Gaya bahasa (Prompt B v4.9): satu gagasan per kalimat; kalimat narasi paling banyak 25 kata (mudah, sedang) atau 30 kata (sulit, sangat sulit); titik koma paling banyak satu per kalimat dan tidak dirantai; kurung hanya untuk singkatan, nomor PSAK, atau padanan istilah; opsi PG satu pernyataan dengan satu alasan pendek; kata sehari-hari lebih dulu, istilah teknis hanya yang menjadi bagian materi; kalimat aktif. Soal mudah dan sedang memakai bahasa paling sederhana.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 205, PK-ESA-001 s.d. 065, PK-KAS-001 s.d. 039) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.9):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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
- Kunci jawaban tidak boleh bergantung pada fakta ekonomi di luar soal. Semua data yang dibutuhkan ada di stem atau caseData.
- Jangan menjadikan ketentuan yang belum efektif per 1 Januari 2026 sebagai dasar kunci jawaban. Contoh: PSPK 1 dan PSPK 2 (standar pengungkapan keberlanjutan berbasis IFRS S1/S2) disahkan DSK IAI 1 Juli 2025 dan baru efektif 1 Januari 2027. Penerapan dini diperbolehkan, jadi jangan membuat kunci yang menganggap entitas dilarang menerapkannya.
Tema:
1. Suku bunga tinggi 2023-2024 lalu turun bertahap: tingkat diskonto PSAK 219 (24) dan PSAK 237 (57), suku bunga pinjaman inkremental PSAK 116 (73), biaya pinjaman PSAK 223 (26), nilai wajar PSAK 113 (68), kerugian kredit ekspektasian PSAK 109 (71).
2. Pelemahan dan volatilitas rupiah: transaksi valuta asing dan penjabaran entitas luar negeri PSAK 221 (10), utang valas, lindung nilai.
3. Tarif resiprokal Amerika Serikat (diumumkan 2 April 2025; tarif untuk Indonesia berubah selama negosiasi, jadi soal wajib menyebut tarif yang diasumsikan dan periodenya) dan ketegangan dagang: indikasi penurunan nilai PSAK 236 (48), nilai realisasi neto PSAK 202 (14), kelangsungan usaha, peristiwa setelah periode pelaporan PSAK 210 (8).
4. Tekanan industri padat karya (tekstil, alas kaki) dan PHK: pesangon dan provisi restrukturisasi PSAK 237 (57), imbalan kerja PSAK 219 (24), aset dikuasai untuk dijual dan operasi dihentikan PSAK 105 (58).
5. Hilirisasi mineral dan ekosistem baterai/kendaraan listrik: aset eksplorasi PSAK 106 (64), aset tetap PSAK 216 (16), biaya pinjaman, pengaturan bersama PSAK 111 (66), entitas asosiasi PSAK 228 (15), kewajiban restorasi ISAK 101.
6. Normalisasi harga komoditas (batu bara, CPO) setelah lonjakan 2022: penurunan nilai aset, agrikultur PSAK 241 (69).
7. Restrukturisasi dan konsolidasi grup BUMN/holding di bawah BPI Danantara (diluncurkan 24 Februari 2025); grup dan anak usaha dalam soal tetap fiktif: kombinasi bisnis entitas sepengendali PSAK 338 (38), pengendalian PSAK 110 (65), laporan keuangan tersendiri PSAK 227 (4).
8. Ekonomi digital dan e-commerce: prinsipal vs agen, program loyalitas, imbalan variabel PSAK 115 (72); aset takberwujud PSAK 238 (19) dan biaya situs web ISAK 232.
9. Reformasi pajak internasional (pajak minimum global/Pilar Dua, diterapkan di Indonesia sejak 1 Januari 2025) dan ketidakpastian perlakuan pajak: PSAK 212 (46), ISAK 123. Amendemen PSAK 212 (46) tentang Ketentuan Model Pilar Dua sudah efektif (berlaku surut 1 Januari 2023) dan boleh menjadi dasar kunci: pengecualian wajib atas pengakuan dan pengungkapan aset dan liabilitas pajak tangguhan terkait pajak penghasilan Pilar Dua, serta pengungkapan terpisah beban pajak kini Pilar Dua. Jangan menguji perhitungan tarif efektif GloBE atau ketentuan PMK secara rinci. Pajak minimum global hanya berlaku bagi grup multinasional dengan pendapatan konsolidasian minimal EUR 750 juta, dan tarif efektif minimum 15% bukan tarif nominal PPh badan. Jangan menulis seolah semua perusahaan Indonesia terkena.
10. Melemahnya daya beli kelas menengah: penurunan penjualan, diskon dan retur, piutang bermasalah, persediaan usang.
11. Kasus salah saji laporan keuangan dan gagal bayar emiten serta lembaga keuangan nonbank: financial shenanigans dan red flags fraud (T13), etika dan tata kelola (T02).
12. Transisi energi dan tuntutan keberlanjutan dari investor dan regulator: pelaporan keberlanjutan dan terintegrasi (T14), provisi lingkungan.
13. Tantangan ke depan: kesiapan penerapan PSPK 1 dan PSPK 2 (efektif 1 Januari 2027, penerapan dini diperbolehkan), risiko iklim pada estimasi akuntansi (umur manfaat, penurunan nilai, provisi), AI dan analitik data dalam penyusunan laporan dan deteksi fraud, perdagangan karbon (Bursa Karbon Indonesia diluncurkan 26 September 2023). Proyeksi ke depan selalu dinyatakan sebagai skenario atau asumsi; kunci tetap memakai SAK yang efektif per 1 Januari 2026.
```

## 2. PK-B57 (mcq)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B57
Tipe: mcq | Jumlah: 10 | ID mulai: PK-MCQ-216
Sebaran topik: T01 1, T02 1, T04 1, T06 1, T07 1, T09 1, T11 1, T12 1, T13 1, T14 1
Sebaran kesulitan: sedang 5, sangat_sulit 5
Ukuran kasus: -
Level kognitif: C3; C5-C6 (sesuai tingkat setiap soal)
Catatan khusus:
- Sebaran kunci: huruf C dan D masing-masing 3 soal, A dan B masing-masing 2 soal (di bank, C dan D paling sedikit); tidak ada huruf yang lebih dari 3.
- Bentuk: 4 soal teori dan 6 soal analisis (40%; batas 40%).
- Soal teori sulit dan sangat sulit memadukan dua ragam atau dua konsep; bukan sekadar menjelaskan satu konsep.
- PG sedang (1,5 menit): C3, penerapan pada situasi, stem + opsi ≤ 120 kata, maks 1 langkah hitung.
- PG sangat sulit (3,5 menit): C5-C6, integrasi minimal 2 konsep, stem + opsi ≤ 200 kata, minimal 3 langkah hitung atau penalaran atau data kuantitatif. Kesulitan dari integrasi dan pertimbangan yang saling bertentangan, bukan dari stem ambigu; tetap satu jawaban paling tepat.
- T01 (teori; sedang; ragam: menilai pernyataan): "Laporan keuangan tujuan umum disusun terutama untuk memenuhi kebutuhan manajemen entitas." Peserta menilai bagian yang benar dan yang keliru menurut Kerangka Konseptual.
- T04 (analisis; sedang; pembuka: peristiwa; entitas: produsen suku cadang motor): satu gedung pabrik diputuskan dijual; menentukan saat klasifikasi dikuasai untuk dijual dan pengukurannya PSAK 105 (58) (tema 3).
- T09 (analisis; sedang; pembuka: data (tabel penyusutan akuntansi dan fiskal); entitas: perusahaan penyewaan alat konstruksi): menghitung liabilitas pajak tangguhan dari perbedaan penyusutan PSAK 212 (46) (tema 5).
- T11 (teori; sedang; ragam: banding-kontras): pengaruh signifikan dan pengendalian bersama: perbedaan kriteria dan metode pelaporannya PSAK 228 (15) dan PSAK 111 (66).
- T06 (analisis; sedang; pembuka: dokumen (kutipan kontrak sewa); entitas: waralaba toko kelontong): masa sewa dengan opsi perpanjangan yang cukup pasti dilaksanakan; menentukan masa sewa dan liabilitas sewa PSAK 116 (73) (tema 10).
- T02 (teori; sangat sulit; ragam: keterbatasan): keterbatasan kerangka ancaman dan pengamanan etika profesi saat tekanan komersial bertemu alat AI yang menyusun laporan.
- T13 (analisis; sangat sulit; pembuka: peran ("Anda analis kredit bank ..."); entitas: produsen minuman ringan): laba naik setelah perpanjangan umur manfaat mesin dan kapitalisasi biaya pemasaran; memilih tanda peringatan kualitas laba yang paling kuat (tema 11).
- T14 (analisis; sangat sulit; pembuka: dokumen (kutipan laporan keberlanjutan); entitas: pengembang kawasan industri): klaim penurunan emisi tanpa batas pelaporan yang jelas; menilai kecukupan pengungkapan dan tanda greenwashing tanpa bergantung pada PSPK (tema 12).
- T12 (analisis; sangat sulit; pembuka: perdebatan; entitas: penyedia sistem kasir (POS) untuk usaha kecil): perangkat keras, perangkat lunak, dan pemasangan dijual satu paket; alokasi harga transaksi dan saat pengakuan PSAK 115 (72) (tema 8).
- T07 (teori; sangat sulit; ragam: asumsi dan keterbatasan): asumsi di balik hubungan lindung nilai (rasio lindung nilai dan efektivitas) PSAK 109 (71) dan keterbatasannya bila eksposur valuta asing berubah.
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang ditulis penuh dalam rupiah dengan titik ribuan (mis. Rp6.000.000.000), tanpa "ribu", "juta", "miliar", "triliun", atau tabel "dalam jutaan Rupiah"; sebut aturan pembulatan di stem bila hasil hitung tidak bulat.
- Gaya bahasa (Prompt B v4.9): satu gagasan per kalimat; kalimat narasi paling banyak 25 kata (mudah, sedang) atau 30 kata (sulit, sangat sulit); titik koma paling banyak satu per kalimat dan tidak dirantai; kurung hanya untuk singkatan, nomor PSAK, atau padanan istilah; opsi PG satu pernyataan dengan satu alasan pendek; kata sehari-hari lebih dulu, istilah teknis hanya yang menjadi bagian materi; kalimat aktif. Soal mudah dan sedang memakai bahasa paling sederhana.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 205, PK-ESA-001 s.d. 065, PK-KAS-001 s.d. 039) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.9):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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
- Kunci jawaban tidak boleh bergantung pada fakta ekonomi di luar soal. Semua data yang dibutuhkan ada di stem atau caseData.
- Jangan menjadikan ketentuan yang belum efektif per 1 Januari 2026 sebagai dasar kunci jawaban. Contoh: PSPK 1 dan PSPK 2 (standar pengungkapan keberlanjutan berbasis IFRS S1/S2) disahkan DSK IAI 1 Juli 2025 dan baru efektif 1 Januari 2027. Penerapan dini diperbolehkan, jadi jangan membuat kunci yang menganggap entitas dilarang menerapkannya.
Tema:
1. Suku bunga tinggi 2023-2024 lalu turun bertahap: tingkat diskonto PSAK 219 (24) dan PSAK 237 (57), suku bunga pinjaman inkremental PSAK 116 (73), biaya pinjaman PSAK 223 (26), nilai wajar PSAK 113 (68), kerugian kredit ekspektasian PSAK 109 (71).
2. Pelemahan dan volatilitas rupiah: transaksi valuta asing dan penjabaran entitas luar negeri PSAK 221 (10), utang valas, lindung nilai.
3. Tarif resiprokal Amerika Serikat (diumumkan 2 April 2025; tarif untuk Indonesia berubah selama negosiasi, jadi soal wajib menyebut tarif yang diasumsikan dan periodenya) dan ketegangan dagang: indikasi penurunan nilai PSAK 236 (48), nilai realisasi neto PSAK 202 (14), kelangsungan usaha, peristiwa setelah periode pelaporan PSAK 210 (8).
4. Tekanan industri padat karya (tekstil, alas kaki) dan PHK: pesangon dan provisi restrukturisasi PSAK 237 (57), imbalan kerja PSAK 219 (24), aset dikuasai untuk dijual dan operasi dihentikan PSAK 105 (58).
5. Hilirisasi mineral dan ekosistem baterai/kendaraan listrik: aset eksplorasi PSAK 106 (64), aset tetap PSAK 216 (16), biaya pinjaman, pengaturan bersama PSAK 111 (66), entitas asosiasi PSAK 228 (15), kewajiban restorasi ISAK 101.
6. Normalisasi harga komoditas (batu bara, CPO) setelah lonjakan 2022: penurunan nilai aset, agrikultur PSAK 241 (69).
7. Restrukturisasi dan konsolidasi grup BUMN/holding di bawah BPI Danantara (diluncurkan 24 Februari 2025); grup dan anak usaha dalam soal tetap fiktif: kombinasi bisnis entitas sepengendali PSAK 338 (38), pengendalian PSAK 110 (65), laporan keuangan tersendiri PSAK 227 (4).
8. Ekonomi digital dan e-commerce: prinsipal vs agen, program loyalitas, imbalan variabel PSAK 115 (72); aset takberwujud PSAK 238 (19) dan biaya situs web ISAK 232.
9. Reformasi pajak internasional (pajak minimum global/Pilar Dua, diterapkan di Indonesia sejak 1 Januari 2025) dan ketidakpastian perlakuan pajak: PSAK 212 (46), ISAK 123. Amendemen PSAK 212 (46) tentang Ketentuan Model Pilar Dua sudah efektif (berlaku surut 1 Januari 2023) dan boleh menjadi dasar kunci: pengecualian wajib atas pengakuan dan pengungkapan aset dan liabilitas pajak tangguhan terkait pajak penghasilan Pilar Dua, serta pengungkapan terpisah beban pajak kini Pilar Dua. Jangan menguji perhitungan tarif efektif GloBE atau ketentuan PMK secara rinci. Pajak minimum global hanya berlaku bagi grup multinasional dengan pendapatan konsolidasian minimal EUR 750 juta, dan tarif efektif minimum 15% bukan tarif nominal PPh badan. Jangan menulis seolah semua perusahaan Indonesia terkena.
10. Melemahnya daya beli kelas menengah: penurunan penjualan, diskon dan retur, piutang bermasalah, persediaan usang.
11. Kasus salah saji laporan keuangan dan gagal bayar emiten serta lembaga keuangan nonbank: financial shenanigans dan red flags fraud (T13), etika dan tata kelola (T02).
12. Transisi energi dan tuntutan keberlanjutan dari investor dan regulator: pelaporan keberlanjutan dan terintegrasi (T14), provisi lingkungan.
13. Tantangan ke depan: kesiapan penerapan PSPK 1 dan PSPK 2 (efektif 1 Januari 2027, penerapan dini diperbolehkan), risiko iklim pada estimasi akuntansi (umur manfaat, penurunan nilai, provisi), AI dan analitik data dalam penyusunan laporan dan deteksi fraud, perdagangan karbon (Bursa Karbon Indonesia diluncurkan 26 September 2023). Proyeksi ke depan selalu dinyatakan sebagai skenario atau asumsi; kunci tetap memakai SAK yang efektif per 1 Januari 2026.
```

## 3. PK-B58 (essay)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B58
Tipe: essay | Jumlah: 5 | ID mulai: PK-ESA-066
Sebaran topik: T06 1, T10 1, T11 1, T13 1, T14 1
Sebaran kesulitan: mudah 2, sedang 1, sulit 1, sangat_sulit 1
Ukuran kasus: -
Level kognitif: C2-C3; C3; C4; C5-C6 (sesuai tingkat setiap soal)
Catatan khusus:
- Bentuk: 2 soal teori dan 3 soal analisis (40%; batas 40%).
- Esai mudah (6 menit): C2-C3, 1 perintah (jelaskan/identifikasi), stem ≤ 120 kata, jawaban ideal ≤ 100 kata, 3 kriteria rubrik.
- Esai sedang (10 menit): C3, 2 perintah, penerapan, stem ≤ 150 kata, jawaban ideal ≤ 170 kata.
- Esai sulit (15 menit): C4, 2-3 perintah, analisis + rekomendasi, stem ≤ 200 kata, jawaban ideal ≤ 250 kata.
- Esai sangat sulit (20 menit): C5-C6, 3 perintah (analisis, evaluasi alternatif, rekomendasi atau sintesis), stem ≤ 250 kata, jawaban ideal ≤ 330 kata, 4-6 kriteria rubrik.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- T11 (teori; mudah; ragam: banding-kontras): entitas asosiasi, ventura bersama, dan operasi bersama: perbedaan hak, pengendalian, dan cara pelaporannya PSAK 228 (15) dan PSAK 111 (66).
- T14 (teori; mudah; ragam: sebab-akibat): bagaimana keterlibatan pemangku kepentingan memengaruhi penentuan topik material dan kegunaan laporan keberlanjutan.
- T10 (analisis; sedang; pembuka: data (tabel nilai wajar dan harga perolehan); entitas: grup distribusi otomotif): akuisisi 80% saham; menghitung goodwill dan kepentingan nonpengendali dengan dua metode pengukuran PSAK 103 (22) (tema 10).
- T06 (analisis; sulit; pembuka: peran ("Anda manajer akuntansi ..."); entitas: operator pusat perbelanjaan): sewa dengan pembayaran tetap dan variabel serta opsi penghentian; analisis perlakuan liabilitas sewa dan rekomendasi pengungkapan PSAK 116 (73) (tema 10).
- T13 (analisis; sangat sulit; pembuka: dokumen (ringkasan laporan auditor); entitas: emiten pengembang properti): pendapatan penjualan unit diakui di awal dengan uang muka besar; analisis tanda rekayasa, evaluasi perlakuan PSAK 115 (72), dan rekomendasi (tema 11).
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang ditulis penuh dalam rupiah dengan titik ribuan (mis. Rp6.000.000.000), tanpa "ribu", "juta", "miliar", "triliun", atau tabel "dalam jutaan Rupiah"; sebut aturan pembulatan di stem bila hasil hitung tidak bulat.
- Gaya bahasa (Prompt B v4.9): satu gagasan per kalimat; kalimat narasi paling banyak 25 kata (mudah, sedang) atau 30 kata (sulit, sangat sulit); titik koma paling banyak satu per kalimat dan tidak dirantai; kurung hanya untuk singkatan, nomor PSAK, atau padanan istilah; opsi PG satu pernyataan dengan satu alasan pendek; kata sehari-hari lebih dulu, istilah teknis hanya yang menjadi bagian materi; kalimat aktif. Soal mudah dan sedang memakai bahasa paling sederhana.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 205, PK-ESA-001 s.d. 065, PK-KAS-001 s.d. 039) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.9):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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
- Kunci jawaban tidak boleh bergantung pada fakta ekonomi di luar soal. Semua data yang dibutuhkan ada di stem atau caseData.
- Jangan menjadikan ketentuan yang belum efektif per 1 Januari 2026 sebagai dasar kunci jawaban. Contoh: PSPK 1 dan PSPK 2 (standar pengungkapan keberlanjutan berbasis IFRS S1/S2) disahkan DSK IAI 1 Juli 2025 dan baru efektif 1 Januari 2027. Penerapan dini diperbolehkan, jadi jangan membuat kunci yang menganggap entitas dilarang menerapkannya.
Tema:
1. Suku bunga tinggi 2023-2024 lalu turun bertahap: tingkat diskonto PSAK 219 (24) dan PSAK 237 (57), suku bunga pinjaman inkremental PSAK 116 (73), biaya pinjaman PSAK 223 (26), nilai wajar PSAK 113 (68), kerugian kredit ekspektasian PSAK 109 (71).
2. Pelemahan dan volatilitas rupiah: transaksi valuta asing dan penjabaran entitas luar negeri PSAK 221 (10), utang valas, lindung nilai.
3. Tarif resiprokal Amerika Serikat (diumumkan 2 April 2025; tarif untuk Indonesia berubah selama negosiasi, jadi soal wajib menyebut tarif yang diasumsikan dan periodenya) dan ketegangan dagang: indikasi penurunan nilai PSAK 236 (48), nilai realisasi neto PSAK 202 (14), kelangsungan usaha, peristiwa setelah periode pelaporan PSAK 210 (8).
4. Tekanan industri padat karya (tekstil, alas kaki) dan PHK: pesangon dan provisi restrukturisasi PSAK 237 (57), imbalan kerja PSAK 219 (24), aset dikuasai untuk dijual dan operasi dihentikan PSAK 105 (58).
5. Hilirisasi mineral dan ekosistem baterai/kendaraan listrik: aset eksplorasi PSAK 106 (64), aset tetap PSAK 216 (16), biaya pinjaman, pengaturan bersama PSAK 111 (66), entitas asosiasi PSAK 228 (15), kewajiban restorasi ISAK 101.
6. Normalisasi harga komoditas (batu bara, CPO) setelah lonjakan 2022: penurunan nilai aset, agrikultur PSAK 241 (69).
7. Restrukturisasi dan konsolidasi grup BUMN/holding di bawah BPI Danantara (diluncurkan 24 Februari 2025); grup dan anak usaha dalam soal tetap fiktif: kombinasi bisnis entitas sepengendali PSAK 338 (38), pengendalian PSAK 110 (65), laporan keuangan tersendiri PSAK 227 (4).
8. Ekonomi digital dan e-commerce: prinsipal vs agen, program loyalitas, imbalan variabel PSAK 115 (72); aset takberwujud PSAK 238 (19) dan biaya situs web ISAK 232.
9. Reformasi pajak internasional (pajak minimum global/Pilar Dua, diterapkan di Indonesia sejak 1 Januari 2025) dan ketidakpastian perlakuan pajak: PSAK 212 (46), ISAK 123. Amendemen PSAK 212 (46) tentang Ketentuan Model Pilar Dua sudah efektif (berlaku surut 1 Januari 2023) dan boleh menjadi dasar kunci: pengecualian wajib atas pengakuan dan pengungkapan aset dan liabilitas pajak tangguhan terkait pajak penghasilan Pilar Dua, serta pengungkapan terpisah beban pajak kini Pilar Dua. Jangan menguji perhitungan tarif efektif GloBE atau ketentuan PMK secara rinci. Pajak minimum global hanya berlaku bagi grup multinasional dengan pendapatan konsolidasian minimal EUR 750 juta, dan tarif efektif minimum 15% bukan tarif nominal PPh badan. Jangan menulis seolah semua perusahaan Indonesia terkena.
10. Melemahnya daya beli kelas menengah: penurunan penjualan, diskon dan retur, piutang bermasalah, persediaan usang.
11. Kasus salah saji laporan keuangan dan gagal bayar emiten serta lembaga keuangan nonbank: financial shenanigans dan red flags fraud (T13), etika dan tata kelola (T02).
12. Transisi energi dan tuntutan keberlanjutan dari investor dan regulator: pelaporan keberlanjutan dan terintegrasi (T14), provisi lingkungan.
13. Tantangan ke depan: kesiapan penerapan PSPK 1 dan PSPK 2 (efektif 1 Januari 2027, penerapan dini diperbolehkan), risiko iklim pada estimasi akuntansi (umur manfaat, penurunan nilai, provisi), AI dan analitik data dalam penyusunan laporan dan deteksi fraud, perdagangan karbon (Bursa Karbon Indonesia diluncurkan 26 September 2023). Proyeksi ke depan selalu dinyatakan sebagai skenario atau asumsi; kunci tetap memakai SAK yang efektif per 1 Januari 2026.
```

## 4. PK-B59 (essay)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B59
Tipe: essay | Jumlah: 5 | ID mulai: PK-ESA-071
Sebaran topik: T09 1, T11 1, T12 1, T13 1, T14 1
Sebaran kesulitan: sedang 1, sulit 2, sangat_sulit 2
Ukuran kasus: -
Level kognitif: C3; C4; C5-C6 (sesuai tingkat setiap soal)
Catatan khusus:
- Bentuk: 2 soal teori dan 3 soal analisis (40%; batas 40%).
- Soal teori sulit dan sangat sulit memadukan dua ragam atau dua konsep; bukan sekadar menjelaskan satu konsep.
- Esai sedang (10 menit): C3, 2 perintah, penerapan, stem ≤ 150 kata, jawaban ideal ≤ 170 kata.
- Esai sulit (15 menit): C4, 2-3 perintah, analisis + rekomendasi, stem ≤ 200 kata, jawaban ideal ≤ 250 kata.
- Esai sangat sulit (20 menit): C5-C6, 3 perintah (analisis, evaluasi alternatif, rekomendasi atau sintesis), stem ≤ 250 kata, jawaban ideal ≤ 330 kata, 4-6 kriteria rubrik.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- T13 (analisis; sedang; pembuka: kronologi; entitas: rantai restoran cepat saji): tiga tahun laporan keuangan: beban iklan ditunda dan piutang waralaba naik; analisis dua indikasi rekayasa dan satu prosedur analisis (tema 11).
- T11 (analisis; sulit; pembuka: peristiwa; entitas: BUMN pupuk): pembentukan ventura bersama pabrik amonia dengan mitra asing dan kontribusi aset; analisis penentuan jenis pengaturan, penghapusan keuntungan, dan rekomendasi PSAK 111 (66) (tema 5).
- T14 (teori; sulit; ragam: asumsi dan keterbatasan): asumsi bahwa laporan terintegrasi dan laporan keberlanjutan menjawab kebutuhan pemangku kepentingan yang sama, dan keterbatasannya; tanpa bergantung pada PSPK.
- T12 (analisis; sangat sulit; pembuka: perdebatan; entitas: penyedia layanan komputasi awan): kontrak multi-tahun dengan penyesuaian harga dan hak menghentikan; analisis kewajiban pelaksanaan, evaluasi dua alternatif pola pengakuan, dan rekomendasi PSAK 115 (72) (tema 8).
- T09 (teori; sangat sulit; ragam: alasan konseptual dan perkembangan teori): mengapa pajak tangguhan diakui menurut pendekatan perbedaan temporer, dan bagaimana pengecualian Pilar Dua PSAK 212 (46) menyesuaikannya (tema 9).
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang ditulis penuh dalam rupiah dengan titik ribuan (mis. Rp6.000.000.000), tanpa "ribu", "juta", "miliar", "triliun", atau tabel "dalam jutaan Rupiah"; sebut aturan pembulatan di stem bila hasil hitung tidak bulat.
- Gaya bahasa (Prompt B v4.9): satu gagasan per kalimat; kalimat narasi paling banyak 25 kata (mudah, sedang) atau 30 kata (sulit, sangat sulit); titik koma paling banyak satu per kalimat dan tidak dirantai; kurung hanya untuk singkatan, nomor PSAK, atau padanan istilah; opsi PG satu pernyataan dengan satu alasan pendek; kata sehari-hari lebih dulu, istilah teknis hanya yang menjadi bagian materi; kalimat aktif. Soal mudah dan sedang memakai bahasa paling sederhana.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 205, PK-ESA-001 s.d. 065, PK-KAS-001 s.d. 039) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.9):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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
- Kunci jawaban tidak boleh bergantung pada fakta ekonomi di luar soal. Semua data yang dibutuhkan ada di stem atau caseData.
- Jangan menjadikan ketentuan yang belum efektif per 1 Januari 2026 sebagai dasar kunci jawaban. Contoh: PSPK 1 dan PSPK 2 (standar pengungkapan keberlanjutan berbasis IFRS S1/S2) disahkan DSK IAI 1 Juli 2025 dan baru efektif 1 Januari 2027. Penerapan dini diperbolehkan, jadi jangan membuat kunci yang menganggap entitas dilarang menerapkannya.
Tema:
1. Suku bunga tinggi 2023-2024 lalu turun bertahap: tingkat diskonto PSAK 219 (24) dan PSAK 237 (57), suku bunga pinjaman inkremental PSAK 116 (73), biaya pinjaman PSAK 223 (26), nilai wajar PSAK 113 (68), kerugian kredit ekspektasian PSAK 109 (71).
2. Pelemahan dan volatilitas rupiah: transaksi valuta asing dan penjabaran entitas luar negeri PSAK 221 (10), utang valas, lindung nilai.
3. Tarif resiprokal Amerika Serikat (diumumkan 2 April 2025; tarif untuk Indonesia berubah selama negosiasi, jadi soal wajib menyebut tarif yang diasumsikan dan periodenya) dan ketegangan dagang: indikasi penurunan nilai PSAK 236 (48), nilai realisasi neto PSAK 202 (14), kelangsungan usaha, peristiwa setelah periode pelaporan PSAK 210 (8).
4. Tekanan industri padat karya (tekstil, alas kaki) dan PHK: pesangon dan provisi restrukturisasi PSAK 237 (57), imbalan kerja PSAK 219 (24), aset dikuasai untuk dijual dan operasi dihentikan PSAK 105 (58).
5. Hilirisasi mineral dan ekosistem baterai/kendaraan listrik: aset eksplorasi PSAK 106 (64), aset tetap PSAK 216 (16), biaya pinjaman, pengaturan bersama PSAK 111 (66), entitas asosiasi PSAK 228 (15), kewajiban restorasi ISAK 101.
6. Normalisasi harga komoditas (batu bara, CPO) setelah lonjakan 2022: penurunan nilai aset, agrikultur PSAK 241 (69).
7. Restrukturisasi dan konsolidasi grup BUMN/holding di bawah BPI Danantara (diluncurkan 24 Februari 2025); grup dan anak usaha dalam soal tetap fiktif: kombinasi bisnis entitas sepengendali PSAK 338 (38), pengendalian PSAK 110 (65), laporan keuangan tersendiri PSAK 227 (4).
8. Ekonomi digital dan e-commerce: prinsipal vs agen, program loyalitas, imbalan variabel PSAK 115 (72); aset takberwujud PSAK 238 (19) dan biaya situs web ISAK 232.
9. Reformasi pajak internasional (pajak minimum global/Pilar Dua, diterapkan di Indonesia sejak 1 Januari 2025) dan ketidakpastian perlakuan pajak: PSAK 212 (46), ISAK 123. Amendemen PSAK 212 (46) tentang Ketentuan Model Pilar Dua sudah efektif (berlaku surut 1 Januari 2023) dan boleh menjadi dasar kunci: pengecualian wajib atas pengakuan dan pengungkapan aset dan liabilitas pajak tangguhan terkait pajak penghasilan Pilar Dua, serta pengungkapan terpisah beban pajak kini Pilar Dua. Jangan menguji perhitungan tarif efektif GloBE atau ketentuan PMK secara rinci. Pajak minimum global hanya berlaku bagi grup multinasional dengan pendapatan konsolidasian minimal EUR 750 juta, dan tarif efektif minimum 15% bukan tarif nominal PPh badan. Jangan menulis seolah semua perusahaan Indonesia terkena.
10. Melemahnya daya beli kelas menengah: penurunan penjualan, diskon dan retur, piutang bermasalah, persediaan usang.
11. Kasus salah saji laporan keuangan dan gagal bayar emiten serta lembaga keuangan nonbank: financial shenanigans dan red flags fraud (T13), etika dan tata kelola (T02).
12. Transisi energi dan tuntutan keberlanjutan dari investor dan regulator: pelaporan keberlanjutan dan terintegrasi (T14), provisi lingkungan.
13. Tantangan ke depan: kesiapan penerapan PSPK 1 dan PSPK 2 (efektif 1 Januari 2027, penerapan dini diperbolehkan), risiko iklim pada estimasi akuntansi (umur manfaat, penurunan nilai, provisi), AI dan analitik data dalam penyusunan laporan dan deteksi fraud, perdagangan karbon (Bursa Karbon Indonesia diluncurkan 26 September 2023). Proyeksi ke depan selalu dinyatakan sebagai skenario atau asumsi; kunci tetap memakai SAK yang efektif per 1 Januari 2026.
```

## 5. PK-B60 (case mini)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B60
Tipe: case | Jumlah: 2 | ID mulai: PK-KAS-040
Sebaran topik: PK-KAS-040 T11, T03; PK-KAS-041 T14, T02
Sebaran kesulitan: mudah 2
Ukuran kasus: mini
Level kognitif: C3
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus mini mudah (15 menit): C3, narasi + data ≤ 300 kata, 2 sub, jawaban ideal semua sub ≤ 230 kata; tiap sub menerapkan satu konsep.
- PK-KAS-040 (mudah; T11, T03; pembuka: dokumen (surel manajer investasi kepada bagian akuntansi); entitas: perusahaan pergudangan): membeli 25% saham perusahaan mitra dan memperoleh satu kursi komisaris (tema 1). (a) analisis: tentukan apakah ada pengaruh signifikan dan hitung bagian laba perusahaan mitra PSAK 228 (15); (b) teori, ragam banding-kontras: metode ekuitas dan metode biaya serta alasan pemilihannya.
- PK-KAS-041 (mudah; T14, T02; pembuka: peran ("Anda staf pelaporan ..."); entitas: pengembang aplikasi layanan kesehatan): direksi ingin menyebut aplikasi "nol emisi" dalam laporan tahunan (tema 12). (a) teori, ragam sebab-akibat: hubungan klaim keberlanjutan yang tidak didukung bukti dengan kepercayaan pengguna dan tanggung jawab penyusun; (b) analisis: tentukan data yang harus diminta dan tindakan Anda bila direksi tetap memaksa.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang ditulis penuh dalam rupiah dengan titik ribuan (mis. Rp6.000.000.000), tanpa "ribu", "juta", "miliar", "triliun", atau tabel "dalam jutaan Rupiah"; sebut aturan pembulatan di stem bila hasil hitung tidak bulat.
- Gaya bahasa (Prompt B v4.9): satu gagasan per kalimat; kalimat narasi paling banyak 25 kata (mudah, sedang) atau 30 kata (sulit, sangat sulit); titik koma paling banyak satu per kalimat dan tidak dirantai; kurung hanya untuk singkatan, nomor PSAK, atau padanan istilah; opsi PG satu pernyataan dengan satu alasan pendek; kata sehari-hari lebih dulu, istilah teknis hanya yang menjadi bagian materi; kalimat aktif. Soal mudah dan sedang memakai bahasa paling sederhana.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 205, PK-ESA-001 s.d. 065, PK-KAS-001 s.d. 039) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.9):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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
- Kunci jawaban tidak boleh bergantung pada fakta ekonomi di luar soal. Semua data yang dibutuhkan ada di stem atau caseData.
- Jangan menjadikan ketentuan yang belum efektif per 1 Januari 2026 sebagai dasar kunci jawaban. Contoh: PSPK 1 dan PSPK 2 (standar pengungkapan keberlanjutan berbasis IFRS S1/S2) disahkan DSK IAI 1 Juli 2025 dan baru efektif 1 Januari 2027. Penerapan dini diperbolehkan, jadi jangan membuat kunci yang menganggap entitas dilarang menerapkannya.
Tema:
1. Suku bunga tinggi 2023-2024 lalu turun bertahap: tingkat diskonto PSAK 219 (24) dan PSAK 237 (57), suku bunga pinjaman inkremental PSAK 116 (73), biaya pinjaman PSAK 223 (26), nilai wajar PSAK 113 (68), kerugian kredit ekspektasian PSAK 109 (71).
2. Pelemahan dan volatilitas rupiah: transaksi valuta asing dan penjabaran entitas luar negeri PSAK 221 (10), utang valas, lindung nilai.
3. Tarif resiprokal Amerika Serikat (diumumkan 2 April 2025; tarif untuk Indonesia berubah selama negosiasi, jadi soal wajib menyebut tarif yang diasumsikan dan periodenya) dan ketegangan dagang: indikasi penurunan nilai PSAK 236 (48), nilai realisasi neto PSAK 202 (14), kelangsungan usaha, peristiwa setelah periode pelaporan PSAK 210 (8).
4. Tekanan industri padat karya (tekstil, alas kaki) dan PHK: pesangon dan provisi restrukturisasi PSAK 237 (57), imbalan kerja PSAK 219 (24), aset dikuasai untuk dijual dan operasi dihentikan PSAK 105 (58).
5. Hilirisasi mineral dan ekosistem baterai/kendaraan listrik: aset eksplorasi PSAK 106 (64), aset tetap PSAK 216 (16), biaya pinjaman, pengaturan bersama PSAK 111 (66), entitas asosiasi PSAK 228 (15), kewajiban restorasi ISAK 101.
6. Normalisasi harga komoditas (batu bara, CPO) setelah lonjakan 2022: penurunan nilai aset, agrikultur PSAK 241 (69).
7. Restrukturisasi dan konsolidasi grup BUMN/holding di bawah BPI Danantara (diluncurkan 24 Februari 2025); grup dan anak usaha dalam soal tetap fiktif: kombinasi bisnis entitas sepengendali PSAK 338 (38), pengendalian PSAK 110 (65), laporan keuangan tersendiri PSAK 227 (4).
8. Ekonomi digital dan e-commerce: prinsipal vs agen, program loyalitas, imbalan variabel PSAK 115 (72); aset takberwujud PSAK 238 (19) dan biaya situs web ISAK 232.
9. Reformasi pajak internasional (pajak minimum global/Pilar Dua, diterapkan di Indonesia sejak 1 Januari 2025) dan ketidakpastian perlakuan pajak: PSAK 212 (46), ISAK 123. Amendemen PSAK 212 (46) tentang Ketentuan Model Pilar Dua sudah efektif (berlaku surut 1 Januari 2023) dan boleh menjadi dasar kunci: pengecualian wajib atas pengakuan dan pengungkapan aset dan liabilitas pajak tangguhan terkait pajak penghasilan Pilar Dua, serta pengungkapan terpisah beban pajak kini Pilar Dua. Jangan menguji perhitungan tarif efektif GloBE atau ketentuan PMK secara rinci. Pajak minimum global hanya berlaku bagi grup multinasional dengan pendapatan konsolidasian minimal EUR 750 juta, dan tarif efektif minimum 15% bukan tarif nominal PPh badan. Jangan menulis seolah semua perusahaan Indonesia terkena.
10. Melemahnya daya beli kelas menengah: penurunan penjualan, diskon dan retur, piutang bermasalah, persediaan usang.
11. Kasus salah saji laporan keuangan dan gagal bayar emiten serta lembaga keuangan nonbank: financial shenanigans dan red flags fraud (T13), etika dan tata kelola (T02).
12. Transisi energi dan tuntutan keberlanjutan dari investor dan regulator: pelaporan keberlanjutan dan terintegrasi (T14), provisi lingkungan.
13. Tantangan ke depan: kesiapan penerapan PSPK 1 dan PSPK 2 (efektif 1 Januari 2027, penerapan dini diperbolehkan), risiko iklim pada estimasi akuntansi (umur manfaat, penurunan nilai, provisi), AI dan analitik data dalam penyusunan laporan dan deteksi fraud, perdagangan karbon (Bursa Karbon Indonesia diluncurkan 26 September 2023). Proyeksi ke depan selalu dinyatakan sebagai skenario atau asumsi; kunci tetap memakai SAK yang efektif per 1 Januari 2026.
```

## 6. PK-B61 (case komprehensif)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B61
Tipe: case | Jumlah: 2 | ID mulai: PK-KAS-042
Sebaran topik: PK-KAS-042 T01, T02, T08, T14; PK-KAS-043 T06, T05, T13, T03
Sebaran kesulitan: sangat_sulit 2
Ukuran kasus: komprehensif
Level kognitif: C5-C6
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus komprehensif sangat sulit (45 menit): C5-C6, narasi + data ≤ 900 kata, 4 sub, jawaban ideal semua sub ≤ 650 kata, hitungan ≤ 5 menit; integrasi minimal 3 topik; menuntut analisis, evaluasi alternatif, risiko, implikasi keuangan, dan rekomendasi.
- PK-KAS-042 (sangat sulit; T01, T02, T08, T14; pembuka: kronologi; entitas: emiten komponen otomotif): tiga tahun penurunan penjualan, tuntutan garansi, dan rencana laporan keberlanjutan perdana (tema 4, 12). (a) hitung provisi garansi dan dampaknya pada laba PSAK 237 (57); (b) analisis pertimbangan etika ketika direksi meminta estimasi lebih rendah; (c) teori, ragam keterbatasan: keterbatasan estimasi dan pertimbangan dalam Kerangka Konseptual untuk informasi yang diperiksa pengguna; (d) rekomendasi pengungkapan dan peran komite audit.
- PK-KAS-043 (sangat sulit; T06, T05, T13, T03; pembuka: dokumen (laporan auditor dan notulen komite audit); entitas: operator jalan tol swasta): konsesi, pinjaman valuta asing, dan lalu lintas yang turun dari proyeksi (tema 1, 2). (a) hitung biaya pinjaman yang dikapitalisasi dan selisih kurs PSAK 223 (26) dan PSAK 221 (10); (b) hitung liabilitas sewa atas sewa lahan kantor dan kendaraan operasional PSAK 116 (73); (c) teori, ragam asumsi: asumsi lalu lintas dalam estimasi jumlah terpulihkan dan sensitivitasnya PSAK 236 (48); (d) evaluasi tanda peringatan kualitas laba dan rekomendasi.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang ditulis penuh dalam rupiah dengan titik ribuan (mis. Rp6.000.000.000), tanpa "ribu", "juta", "miliar", "triliun", atau tabel "dalam jutaan Rupiah"; sebut aturan pembulatan di stem bila hasil hitung tidak bulat.
- Gaya bahasa (Prompt B v4.9): satu gagasan per kalimat; kalimat narasi paling banyak 25 kata (mudah, sedang) atau 30 kata (sulit, sangat sulit); titik koma paling banyak satu per kalimat dan tidak dirantai; kurung hanya untuk singkatan, nomor PSAK, atau padanan istilah; opsi PG satu pernyataan dengan satu alasan pendek; kata sehari-hari lebih dulu, istilah teknis hanya yang menjadi bagian materi; kalimat aktif. Soal mudah dan sedang memakai bahasa paling sederhana.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 205, PK-ESA-001 s.d. 065, PK-KAS-001 s.d. 039) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.9):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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
- Kunci jawaban tidak boleh bergantung pada fakta ekonomi di luar soal. Semua data yang dibutuhkan ada di stem atau caseData.
- Jangan menjadikan ketentuan yang belum efektif per 1 Januari 2026 sebagai dasar kunci jawaban. Contoh: PSPK 1 dan PSPK 2 (standar pengungkapan keberlanjutan berbasis IFRS S1/S2) disahkan DSK IAI 1 Juli 2025 dan baru efektif 1 Januari 2027. Penerapan dini diperbolehkan, jadi jangan membuat kunci yang menganggap entitas dilarang menerapkannya.
Tema:
1. Suku bunga tinggi 2023-2024 lalu turun bertahap: tingkat diskonto PSAK 219 (24) dan PSAK 237 (57), suku bunga pinjaman inkremental PSAK 116 (73), biaya pinjaman PSAK 223 (26), nilai wajar PSAK 113 (68), kerugian kredit ekspektasian PSAK 109 (71).
2. Pelemahan dan volatilitas rupiah: transaksi valuta asing dan penjabaran entitas luar negeri PSAK 221 (10), utang valas, lindung nilai.
3. Tarif resiprokal Amerika Serikat (diumumkan 2 April 2025; tarif untuk Indonesia berubah selama negosiasi, jadi soal wajib menyebut tarif yang diasumsikan dan periodenya) dan ketegangan dagang: indikasi penurunan nilai PSAK 236 (48), nilai realisasi neto PSAK 202 (14), kelangsungan usaha, peristiwa setelah periode pelaporan PSAK 210 (8).
4. Tekanan industri padat karya (tekstil, alas kaki) dan PHK: pesangon dan provisi restrukturisasi PSAK 237 (57), imbalan kerja PSAK 219 (24), aset dikuasai untuk dijual dan operasi dihentikan PSAK 105 (58).
5. Hilirisasi mineral dan ekosistem baterai/kendaraan listrik: aset eksplorasi PSAK 106 (64), aset tetap PSAK 216 (16), biaya pinjaman, pengaturan bersama PSAK 111 (66), entitas asosiasi PSAK 228 (15), kewajiban restorasi ISAK 101.
6. Normalisasi harga komoditas (batu bara, CPO) setelah lonjakan 2022: penurunan nilai aset, agrikultur PSAK 241 (69).
7. Restrukturisasi dan konsolidasi grup BUMN/holding di bawah BPI Danantara (diluncurkan 24 Februari 2025); grup dan anak usaha dalam soal tetap fiktif: kombinasi bisnis entitas sepengendali PSAK 338 (38), pengendalian PSAK 110 (65), laporan keuangan tersendiri PSAK 227 (4).
8. Ekonomi digital dan e-commerce: prinsipal vs agen, program loyalitas, imbalan variabel PSAK 115 (72); aset takberwujud PSAK 238 (19) dan biaya situs web ISAK 232.
9. Reformasi pajak internasional (pajak minimum global/Pilar Dua, diterapkan di Indonesia sejak 1 Januari 2025) dan ketidakpastian perlakuan pajak: PSAK 212 (46), ISAK 123. Amendemen PSAK 212 (46) tentang Ketentuan Model Pilar Dua sudah efektif (berlaku surut 1 Januari 2023) dan boleh menjadi dasar kunci: pengecualian wajib atas pengakuan dan pengungkapan aset dan liabilitas pajak tangguhan terkait pajak penghasilan Pilar Dua, serta pengungkapan terpisah beban pajak kini Pilar Dua. Jangan menguji perhitungan tarif efektif GloBE atau ketentuan PMK secara rinci. Pajak minimum global hanya berlaku bagi grup multinasional dengan pendapatan konsolidasian minimal EUR 750 juta, dan tarif efektif minimum 15% bukan tarif nominal PPh badan. Jangan menulis seolah semua perusahaan Indonesia terkena.
10. Melemahnya daya beli kelas menengah: penurunan penjualan, diskon dan retur, piutang bermasalah, persediaan usang.
11. Kasus salah saji laporan keuangan dan gagal bayar emiten serta lembaga keuangan nonbank: financial shenanigans dan red flags fraud (T13), etika dan tata kelola (T02).
12. Transisi energi dan tuntutan keberlanjutan dari investor dan regulator: pelaporan keberlanjutan dan terintegrasi (T14), provisi lingkungan.
13. Tantangan ke depan: kesiapan penerapan PSPK 1 dan PSPK 2 (efektif 1 Januari 2027, penerapan dini diperbolehkan), risiko iklim pada estimasi akuntansi (umur manfaat, penurunan nilai, provisi), AI dan analitik data dalam penyusunan laporan dan deteksi fraud, perdagangan karbon (Bursa Karbon Indonesia diluncurkan 26 September 2023). Proyeksi ke depan selalu dinyatakan sebagai skenario atau asumsi; kunci tetap memakai SAK yang efektif per 1 Januari 2026.
```

## 7. PK-B62 (case komprehensif)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B62
Tipe: case | Jumlah: 2 | ID mulai: PK-KAS-044
Sebaran topik: PK-KAS-044 T10, T11, T04; PK-KAS-045 T12, T06, T09, T13
Sebaran kesulitan: sulit 1, sangat_sulit 1
Ukuran kasus: komprehensif
Level kognitif: C4-C5; C5-C6 (sesuai tingkat setiap soal)
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus komprehensif sulit (40 menit): C4-C5, narasi + data ≤ 700 kata, 4 sub, jawaban ideal semua sub ≤ 600 kata, hitungan ≤ 5 menit; integrasi minimal 3 topik.
- Kasus komprehensif sangat sulit (45 menit): C5-C6, narasi + data ≤ 900 kata, 4 sub, jawaban ideal semua sub ≤ 650 kata, hitungan ≤ 5 menit; integrasi minimal 3 topik; menuntut analisis, evaluasi alternatif, risiko, implikasi keuangan, dan rekomendasi.
- PK-KAS-044 (sangat sulit; T10, T11, T04; pembuka: perdebatan; entitas: grup perhotelan): direktur keuangan dan direktur operasi berbeda pendapat tentang pengalihan hotel antaranak usaha, pengelolaan bersama dengan operator asing, dan rencana menjual satu hotel (tema 7). (a) hitung selisih nilai pengalihan dan ekuitas PSAK 338 (38); (b) analisis jenis pengaturan bersama untuk pengelolaan hotel PSAK 111 (66); (c) teori, ragam banding-kontras: kombinasi bisnis entitas sepengendali dan akuisisi biasa dari sisi pengukuran dan goodwill; (d) klasifikasi dan pengukuran hotel yang akan dijual PSAK 105 (58), serta rekomendasi pengungkapan.
- PK-KAS-045 (sulit; T12, T06, T09, T13; pembuka: data (tabel pendapatan, uang muka, dan beban pajak tiga tahun); entitas: pengembang apartemen): penjualan unit dengan uang muka dan sewa tempat usaha, serta perbedaan akuntansi dan pajak (tema 1, 10). (a) hitung pengakuan pendapatan penjualan unit sepanjang waktu atau pada satu titik waktu PSAK 115 (72); (b) hitung liabilitas sewa dan beban bunga atas sewa lahan PSAK 116 (73); (c) teori, ragam sebab-akibat: hubungan perbedaan temporer dengan pajak tangguhan PSAK 212 (46); (d) tafsirkan dua rasio sebagai tanda peringatan dan rekomendasi.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang ditulis penuh dalam rupiah dengan titik ribuan (mis. Rp6.000.000.000), tanpa "ribu", "juta", "miliar", "triliun", atau tabel "dalam jutaan Rupiah"; sebut aturan pembulatan di stem bila hasil hitung tidak bulat.
- Gaya bahasa (Prompt B v4.9): satu gagasan per kalimat; kalimat narasi paling banyak 25 kata (mudah, sedang) atau 30 kata (sulit, sangat sulit); titik koma paling banyak satu per kalimat dan tidak dirantai; kurung hanya untuk singkatan, nomor PSAK, atau padanan istilah; opsi PG satu pernyataan dengan satu alasan pendek; kata sehari-hari lebih dulu, istilah teknis hanya yang menjadi bagian materi; kalimat aktif. Soal mudah dan sedang memakai bahasa paling sederhana.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 205, PK-ESA-001 s.d. 065, PK-KAS-001 s.d. 039) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.9):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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
- Kunci jawaban tidak boleh bergantung pada fakta ekonomi di luar soal. Semua data yang dibutuhkan ada di stem atau caseData.
- Jangan menjadikan ketentuan yang belum efektif per 1 Januari 2026 sebagai dasar kunci jawaban. Contoh: PSPK 1 dan PSPK 2 (standar pengungkapan keberlanjutan berbasis IFRS S1/S2) disahkan DSK IAI 1 Juli 2025 dan baru efektif 1 Januari 2027. Penerapan dini diperbolehkan, jadi jangan membuat kunci yang menganggap entitas dilarang menerapkannya.
Tema:
1. Suku bunga tinggi 2023-2024 lalu turun bertahap: tingkat diskonto PSAK 219 (24) dan PSAK 237 (57), suku bunga pinjaman inkremental PSAK 116 (73), biaya pinjaman PSAK 223 (26), nilai wajar PSAK 113 (68), kerugian kredit ekspektasian PSAK 109 (71).
2. Pelemahan dan volatilitas rupiah: transaksi valuta asing dan penjabaran entitas luar negeri PSAK 221 (10), utang valas, lindung nilai.
3. Tarif resiprokal Amerika Serikat (diumumkan 2 April 2025; tarif untuk Indonesia berubah selama negosiasi, jadi soal wajib menyebut tarif yang diasumsikan dan periodenya) dan ketegangan dagang: indikasi penurunan nilai PSAK 236 (48), nilai realisasi neto PSAK 202 (14), kelangsungan usaha, peristiwa setelah periode pelaporan PSAK 210 (8).
4. Tekanan industri padat karya (tekstil, alas kaki) dan PHK: pesangon dan provisi restrukturisasi PSAK 237 (57), imbalan kerja PSAK 219 (24), aset dikuasai untuk dijual dan operasi dihentikan PSAK 105 (58).
5. Hilirisasi mineral dan ekosistem baterai/kendaraan listrik: aset eksplorasi PSAK 106 (64), aset tetap PSAK 216 (16), biaya pinjaman, pengaturan bersama PSAK 111 (66), entitas asosiasi PSAK 228 (15), kewajiban restorasi ISAK 101.
6. Normalisasi harga komoditas (batu bara, CPO) setelah lonjakan 2022: penurunan nilai aset, agrikultur PSAK 241 (69).
7. Restrukturisasi dan konsolidasi grup BUMN/holding di bawah BPI Danantara (diluncurkan 24 Februari 2025); grup dan anak usaha dalam soal tetap fiktif: kombinasi bisnis entitas sepengendali PSAK 338 (38), pengendalian PSAK 110 (65), laporan keuangan tersendiri PSAK 227 (4).
8. Ekonomi digital dan e-commerce: prinsipal vs agen, program loyalitas, imbalan variabel PSAK 115 (72); aset takberwujud PSAK 238 (19) dan biaya situs web ISAK 232.
9. Reformasi pajak internasional (pajak minimum global/Pilar Dua, diterapkan di Indonesia sejak 1 Januari 2025) dan ketidakpastian perlakuan pajak: PSAK 212 (46), ISAK 123. Amendemen PSAK 212 (46) tentang Ketentuan Model Pilar Dua sudah efektif (berlaku surut 1 Januari 2023) dan boleh menjadi dasar kunci: pengecualian wajib atas pengakuan dan pengungkapan aset dan liabilitas pajak tangguhan terkait pajak penghasilan Pilar Dua, serta pengungkapan terpisah beban pajak kini Pilar Dua. Jangan menguji perhitungan tarif efektif GloBE atau ketentuan PMK secara rinci. Pajak minimum global hanya berlaku bagi grup multinasional dengan pendapatan konsolidasian minimal EUR 750 juta, dan tarif efektif minimum 15% bukan tarif nominal PPh badan. Jangan menulis seolah semua perusahaan Indonesia terkena.
10. Melemahnya daya beli kelas menengah: penurunan penjualan, diskon dan retur, piutang bermasalah, persediaan usang.
11. Kasus salah saji laporan keuangan dan gagal bayar emiten serta lembaga keuangan nonbank: financial shenanigans dan red flags fraud (T13), etika dan tata kelola (T02).
12. Transisi energi dan tuntutan keberlanjutan dari investor dan regulator: pelaporan keberlanjutan dan terintegrasi (T14), provisi lingkungan.
13. Tantangan ke depan: kesiapan penerapan PSPK 1 dan PSPK 2 (efektif 1 Januari 2027, penerapan dini diperbolehkan), risiko iklim pada estimasi akuntansi (umur manfaat, penurunan nilai, provisi), AI dan analitik data dalam penyusunan laporan dan deteksi fraud, perdagangan karbon (Bursa Karbon Indonesia diluncurkan 26 September 2023). Proyeksi ke depan selalu dinyatakan sebagai skenario atau asumsi; kunci tetap memakai SAK yang efektif per 1 Januari 2026.
```
