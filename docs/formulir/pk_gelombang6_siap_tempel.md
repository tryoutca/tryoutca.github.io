# PK gelombang 6 — siap tempel

Formulir gelombang 6, disusun 2026-10-31 untuk **Prompt B v4.6** dan **Prompt C v4.5** (D-112, D-114).
Tujuan: **meratakan stok per tingkat kesulitan** (PG sekitar 41, esai 12-13 per tingkat) dan menambah kasus mudah serta kasus sangat sulit yang paling sedikit.
Nomor melanjutkan gelombang 5 (PK-B46 s.d. B49; PK-MCQ-185, PK-ESA-060, PK-KAS-033). Bila gelombang 5 PK belum dikerjakan, kerjakan gelombang 5 lebih dulu, karena perhitungan di bawah mengasumsikan gelombang 5 sudah lolos.

Stok LIVE pack PK 1.9.0 (`Publikasi Soal/PK 25 Okt 2026pack.json`), mudah/sedang/sulit/sangat sulit:

| Tipe | LIVE | Gelombang 5 | Gelombang 6 | LIVE sesudahnya bila semua lolos |
|---|---|---|---|---|
| PG | 32/32/38/23 | 4/3/3/10 | 5/6/0/9 | 41/41/41/42 |
| Esai | 9/11/10/10 | 1/2/1/1 | 3/0/1/1 | 13/13/12/12 |
| Kasus | 2/8/7/3 | 1/1/0/0 | 4/0/0/2 | 7/9/7/5 |

Topik yang paling sedikit di tingkat mudah (T06, T11, T13, T14) dan sangat sulit (T02, T06, T11, T13, T14) diprioritaskan.

Cara pakai:
1. Pastikan instruksi Project Claude penyusun memakai **Prompt B v4.6**, dengan pengetahuan Project `schema/CONTRACT.md`, `docs/pk_taksonomi.md`, dan `docs/pk_rujukan_penyusun.md`.
2. Buka **satu percakapan baru**, lalu salin satu blok utuh per pesan, berurutan dari atas.
3. Impor setiap hasil ke Pengelola Bank Soal. Perhatikan peringatan standar waktu, label bentuk di baris pertama authoring.notes, dan kalimat pertama setiap soal.
4. Review dengan Prompt C v4.5 (tersalin lewat tombol **Salin Prompt + Data**). Bila Project melaporkan Batch ID atau rentang ID sudah terpakai, naikkan nomornya.

Prioritas: 1 = tingkat yang paling kurang (PG mudah, sedang, sangat sulit; esai mudah; kasus mudah); 2 = kasus tambahan.

| Prioritas | Batch | Tipe | Jumlah | ID | Kesulitan | Teori |
|---|---|---|---|---|---|---|
| 1 | PK-B50 | PG | 10 | PK-MCQ-186 s.d. 195 | mudah 5, sedang 5 | 4 dari 10 |
| 1 | PK-B51 | PG | 10 | PK-MCQ-196 s.d. 205 | sedang 1, sangat sulit 9 | 4 dari 10 |
| 1 | PK-B52 | Esai | 5 | PK-ESA-061 s.d. 065 | mudah 3, sulit 1, sangat sulit 1 | 2 dari 5 |
| 1 | PK-B53 | Kasus mini | 2 | PK-KAS-034 s.d. 035 | mudah 2 | 1 sub per kasus |
| 2 | PK-B54 | Kasus mini | 2 | PK-KAS-036 s.d. 037 | mudah 2 | 1 sub per kasus |
| 2 | PK-B55 | Kasus komprehensif | 2 | PK-KAS-038 s.d. 039 | sangat sulit 2 | 1 sub per kasus |

Gelombang 6 berakhir di PK-B55 (PK-MCQ-205, PK-ESA-065, PK-KAS-039).

## 1. PK-B50 (mcq)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B50
Tipe: mcq | Jumlah: 10 | ID mulai: PK-MCQ-186
Sebaran topik: T02 1, T05 1, T06 1, T07 1, T09 1, T10 1, T11 1, T12 1, T13 1, T14 1
Sebaran kesulitan: mudah 5, sedang 5
Ukuran kasus: -
Level kognitif: C2-C3; C3 (sesuai tingkat setiap soal)
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 4 soal teori dan 6 soal analisis (40%; batas 40%).
- PG mudah (1 menit): C2-C3, satu konsep, stem + opsi ≤ 90 kata, tanpa hitungan. Situasi singkat paling banyak 1-2 kalimat; distraktor tetap miskonsepsi umum.
- PG sedang (1,5 menit): C3, penerapan pada situasi, stem + opsi ≤ 120 kata, maks 1 langkah hitung.
- T06 (analisis; mudah; pembuka: tanpa nama ("Sebuah perusahaan logistik ..."); entitas: perusahaan logistik): menentukan apakah kontrak penggunaan gudang mengandung sewa (aset identifikasian, hak substitusi) PSAK 116 (73) (tema 1).
- T09 (analisis; mudah; pembuka: data; entitas: distributor alat kesehatan): selisih penyusutan akuntansi dan fiskal; menentukan jenis perbedaan temporer dan arah pajak tangguhannya PSAK 212 (46).
- T11 (teori; mudah; ragam: alasan konseptual): mengapa investasi pada entitas asosiasi dicatat dengan metode ekuitas, bukan metode biaya, PSAK 228 (15).
- T13 (analisis; mudah; pembuka: peristiwa; entitas: produsen pakan ikan): penjualan ke distributor melonjak di bulan terakhir tahun buku dengan hak retur longgar; mengenali tanda rekayasa pendapatan (tema 10).
- T14 (teori; mudah; ragam: sebab-akibat): mengapa penentuan topik material memengaruhi kegunaan laporan keberlanjutan bagi pengguna.
- T02 (teori; sedang; ragam: menilai pernyataan): "Akuntan yang bekerja di perusahaan cukup patuh hukum; kode etik akuntan profesional hanya berlaku bagi auditor." Peserta memilih penilaian yang tepat.
- T05 (analisis; sedang; pembuka: profil; entitas: perkebunan kelapa milik keluarga): membedakan aset biologis, produk agrikultur, dan tanaman produktif PSAK 241 (69) dan PSAK 216 (16) (tema 6).
- T07 (analisis; sedang; pembuka: dokumen (memo bendahara); entitas: produsen mi instan Tbk): klasifikasi investasi obligasi berdasarkan model bisnis dan karakteristik arus kas PSAK 109 (71) (tema 1).
- T10 (analisis; sedang; pembuka: perdebatan; entitas: grup properti milik keluarga): kepemilikan 45% dengan perjanjian pemegang saham dan hak menunjuk mayoritas direksi; menilai pengendalian PSAK 110 (65) (tema 7).
- T12 (teori; sedang; ragam: alasan konseptual): mengapa pendapatan diakui sepanjang waktu bila pelanggan menerima dan mengonsumsi manfaat secara bersamaan, PSAK 115 (72).
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 185, PK-ESA-001 s.d. 060, PK-KAS-001 s.d. 033) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.6):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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

## 2. PK-B51 (mcq)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B51
Tipe: mcq | Jumlah: 10 | ID mulai: PK-MCQ-196
Sebaran topik: T01 1, T02 1, T03 1, T04 1, T06 1, T08 1, T09 1, T11 1, T13 1, T14 1
Sebaran kesulitan: sedang 1, sangat_sulit 9
Ukuran kasus: -
Level kognitif: C3; C5-C6 (sesuai tingkat setiap soal)
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 4 soal teori dan 6 soal analisis (40%; batas 40%).
- Soal teori sulit dan sangat sulit memadukan dua ragam atau dua konsep; bukan sekadar menjelaskan satu konsep.
- PG sedang (1,5 menit): C3, penerapan pada situasi, stem + opsi ≤ 120 kata, maks 1 langkah hitung.
- PG sangat sulit (3,5 menit): C5-C6, integrasi minimal 2 konsep, stem + opsi ≤ 200 kata, minimal 3 langkah hitung atau penalaran atau data kuantitatif. Kesulitan dari integrasi dan pertimbangan yang saling bertentangan, bukan dari stem ambigu; tetap satu jawaban paling tepat.
- T01 (teori; sangat sulit; ragam: asumsi): asumsi kelangsungan usaha: akibatnya pada dasar penyusunan laporan keuangan bila tidak terpenuhi, dan pengungkapan saat terdapat ketidakpastian material.
- T02 (teori; sangat sulit; ragam: menemukan kekeliruan): argumen bahwa anggota komite audit independen karena tidak menerima gaji direksi, padahal memiliki hubungan bisnis dengan perusahaan.
- T03 (analisis; sangat sulit; pembuka: kronologi; entitas: perusahaan farmasi Tbk): kesalahan pencatatan dua tahun lalu ditemukan; menentukan koreksi retrospektif dan dampaknya pada saldo awal PSAK 208 (25) (tema 11).
- T04 (analisis; sangat sulit; pembuka: data; entitas: pabrik keramik): produksi turun di bawah kapasitas normal; menghitung biaya persediaan dan overhead tetap yang tidak dialokasikan PSAK 202 (14) (tema 10).
- T06 (analisis; sangat sulit; pembuka: peran ("Anda manajer akuntansi ..."); entitas: maskapai penerbangan regional): sewa pesawat dalam dolar AS dimodifikasi; menghitung pengukuran kembali liabilitas sewa dan dampaknya pada aset hak guna PSAK 116 (73) (tema 2).
- T08 (teori; sangat sulit; ragam: banding-kontras): provisi restrukturisasi vs kontrak memberatkan dalam PSAK 237 (57): kapan kewajiban konstruktif timbul dan apa yang termasuk dalam pengukuran.
- T09 (teori; sedang; ragam: banding-kontras): metode jumlah yang paling mungkin vs nilai ekspektasian untuk ketidakpastian perlakuan pajak ISAK 123, dan kapan masing-masing lebih tepat.
- T11 (analisis; sangat sulit; pembuka: dokumen (notulen rapat komite); entitas: anak usaha BUMN energi): pengaturan bersama pembangkit; menentukan operasi bersama atau ventura bersama dari struktur dan hak atas aset PSAK 111 (66) (tema 5).
- T13 (analisis; sangat sulit; pembuka: peristiwa; entitas: emiten jasa konstruksi): piutang dan aset kontrak tumbuh jauh lebih cepat dari pendapatan, arus kas operasi negatif; memilih indikasi rekayasa yang paling kuat (tema 11).
- T14 (analisis; sangat sulit; pembuka: perdebatan; entitas: perusahaan tambang batu bara Tbk): direktur keuangan dan kepala keberlanjutan berbeda pendapat tentang pengungkapan risiko iklim dan umur manfaat tambang; kunci tidak menganggap PSPK 1 dan 2 sudah wajib (tema 12, 13).
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 185, PK-ESA-001 s.d. 060, PK-KAS-001 s.d. 033) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.6):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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

## 3. PK-B52 (essay)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B52
Tipe: essay | Jumlah: 5 | ID mulai: PK-ESA-061
Sebaran topik: T01 1, T07 1, T08 1, T10 1, T12 1
Sebaran kesulitan: mudah 3, sulit 1, sangat_sulit 1
Ukuran kasus: -
Level kognitif: C2-C3; C4; C5-C6 (sesuai tingkat setiap soal)
Catatan khusus:
- Bentuk: 2 soal teori dan 3 soal analisis (40%; batas 40%).
- Soal teori sulit dan sangat sulit memadukan dua ragam atau dua konsep; bukan sekadar menjelaskan satu konsep.
- Esai mudah (6 menit): C2-C3, 1 perintah (jelaskan/identifikasi), stem ≤ 120 kata, jawaban ideal ≤ 100 kata, 3 kriteria rubrik.
- Esai sulit (15 menit): C4, 2-3 perintah, analisis + rekomendasi, stem ≤ 200 kata, jawaban ideal ≤ 250 kata.
- Esai sangat sulit (20 menit): C5-C6, 3 perintah (analisis, evaluasi alternatif, rekomendasi atau sintesis), stem ≤ 250 kata, jawaban ideal ≤ 330 kata, 4-6 kriteria rubrik.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- T01 (teori; mudah; ragam: alasan konseptual): mengapa substansi ekonomi diutamakan atas bentuk hukum agar laporan keuangan merepresentasikan secara tepat.
- T12 (analisis; mudah; pembuka: peran ("Anda staf akuntansi ..."); entitas: penyelenggara kursus daring): identifikasi kewajiban pelaksanaan dalam paket kursus, sertifikasi, dan konsultasi PSAK 115 (72) (tema 8).
- T08 (analisis; mudah; pembuka: tanpa nama ("Sebuah produsen pompa air ..."); entitas: produsen pompa air): garansi dua tahun; jelaskan apakah provisi garansi diakui dan dasar pengukurannya PSAK 237 (57) (tema 10).
- T07 (teori; sulit; ragam: keterbatasan): keterbatasan model kerugian kredit ekspektasian (ketergantungan pada informasi masa depan dan pertimbangan manajemen) dan cara pengungkapan mengurangi keterbatasan itu.
- T10 (analisis; sangat sulit; pembuka: dokumen (memo rencana restrukturisasi); entitas: holding BUMN fiktif): pengalihan anak usaha antarentitas sepengendali; analisis perlakuan PSAK 338 (38) dibanding akuisisi PSAK 103 (22), evaluasi dua alternatif struktur, dan rekomendasi (tema 7).
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 185, PK-ESA-001 s.d. 060, PK-KAS-001 s.d. 033) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.6):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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

## 4. PK-B53 (case mini)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B53
Tipe: case | Jumlah: 2 | ID mulai: PK-KAS-034
Sebaran topik: PK-KAS-034 T05, T03; PK-KAS-035 T08, T02
Sebaran kesulitan: mudah 2
Ukuran kasus: mini
Level kognitif: C3
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus mini mudah (15 menit): C3, narasi + data ≤ 300 kata, 2 sub, jawaban ideal semua sub ≤ 230 kata; tiap sub menerapkan satu konsep.
- PK-KAS-034 (mudah; T05, T03; pembuka: data; entitas: operator kapal feri swasta): mesin kapal diganti dan umur manfaat kapal ditinjau ulang (tema 1). (a) analisis: hitung penyusutan per komponen dan dampak perubahan estimasi PSAK 216 (16); (b) teori, ragam alasan konseptual: mengapa perubahan estimasi diterapkan prospektif, bukan retrospektif PSAK 208 (25).
- PK-KAS-035 (mudah; T08, T02; pembuka: dokumen (surel direktur kepada kepala akuntansi); entitas: produsen makanan beku milik keluarga): penarikan produk karena kontaminasi diumumkan menjelang tutup buku (tema 10). (a) teori, ragam sebab-akibat: mengapa tekanan atasan untuk tidak mengakui provisi mengancam prinsip objektivitas; (b) analisis: tentukan apakah diakui provisi atau diungkapkan sebagai liabilitas kontinjensi PSAK 237 (57).
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 185, PK-ESA-001 s.d. 060, PK-KAS-001 s.d. 033) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.6):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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

## 5. PK-B54 (case mini)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B54
Tipe: case | Jumlah: 2 | ID mulai: PK-KAS-036
Sebaran topik: PK-KAS-036 T06, T01; PK-KAS-037 T13, T03
Sebaran kesulitan: mudah 2
Ukuran kasus: mini
Level kognitif: C3
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus mini mudah (15 menit): C3, narasi + data ≤ 300 kata, 2 sub, jawaban ideal semua sub ≤ 230 kata; tiap sub menerapkan satu konsep.
- PK-KAS-036 (mudah; T06, T01; pembuka: peristiwa; entitas: perusahaan gudang pendingin skala menengah): menandatangani sewa gedung lima tahun (tema 1). (a) analisis: hitung pengukuran awal aset hak guna dan liabilitas sewa PSAK 116 (73); (b) teori, ragam alasan konseptual: mengapa penyewa tidak lagi membedakan sewa operasi dan sewa pembiayaan.
- PK-KAS-037 (mudah; T13, T03; pembuka: tanpa nama ("Sebuah emiten makanan ringan ..."); entitas: emiten makanan ringan): data tiga tahun penjualan, piutang, dan arus kas operasi (tema 11). (a) analisis: hitung dan tafsirkan dua rasio sebagai tanda peringatan; (b) teori, ragam keterbatasan: keterbatasan analisis rasio untuk mendeteksi kecurangan.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 185, PK-ESA-001 s.d. 060, PK-KAS-001 s.d. 033) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.6):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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

## 6. PK-B55 (case komprehensif)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B55
Tipe: case | Jumlah: 2 | ID mulai: PK-KAS-038
Sebaran topik: PK-KAS-038 T10, T11, T09, T03; PK-KAS-039 T12, T07, T14, T13
Sebaran kesulitan: sangat_sulit 2
Ukuran kasus: komprehensif
Level kognitif: C5-C6
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus komprehensif sangat sulit (45 menit): C5-C6, narasi + data ≤ 900 kata, 4 sub, jawaban ideal semua sub ≤ 650 kata, hitungan ≤ 5 menit; integrasi minimal 3 topik; menuntut analisis, evaluasi alternatif, risiko, implikasi keuangan, dan rekomendasi.
- PK-KAS-038 (sangat sulit; T10, T11, T09, T03; pembuka: kronologi; entitas: grup agribisnis Tbk): kepemilikan pada pabrik minyak goreng naik dari 30% menjadi 70% (tema 6). (a) hitung goodwill dan keuntungan pengukuran ulang kepentingan sebelumnya PSAK 103 (22); (b) hitung pajak tangguhan atas penyesuaian nilai wajar PSAK 212 (46); (c) teori, ragam alasan konseptual: mengapa kepentingan sebelumnya diukur ulang saat pengendalian diperoleh; (d) penyajian dan pengungkapan dalam laporan konsolidasian.
- PK-KAS-039 (sangat sulit; T12, T07, T14, T13; pembuka: perdebatan; entitas: perusahaan rintisan panel surya atap menjelang penawaran umum): direksi dan komite audit berbeda pendapat tentang target pendapatan (tema 12, 13). (a) hitung pendapatan dengan imbalan variabel dan batasannya PSAK 115 (72); (b) klasifikasi pinjaman yang dapat dikonversi menjadi saham PSAK 232 (50); (c) teori, ragam keterbatasan: keterbatasan pengungkapan keberlanjutan sukarela dibanding standar pengungkapan yang terhubung dengan laporan keuangan, tanpa menganggap PSPK sudah wajib; (d) evaluasi tanda peringatan dan rekomendasi kepada komite audit.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 185, PK-ESA-001 s.d. 060, PK-KAS-001 s.d. 033) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.6):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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
