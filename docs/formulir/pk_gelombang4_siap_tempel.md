# PK gelombang 4 — siap tempel

Formulir gelombang 4, disusun 2026-10-24 untuk Prompt B v4.4 (standar waktu per tingkat kesulitan, D-99; rencana D-102).
Tujuan: mengisi kekurangan stok soal LIVE per tingkat kesulitan agar semua paket Level 1-4 dan Simulasi dapat dimulai dan bervariasi (sasaran SPEC 7: per tingkat minimal 30 PG, 9 esai, 3 kasus).
Menggantikan formulir gelombang 3 yang belum dikerjakan. Nomor melanjutkan nomor tertinggi yang pernah direncanakan (gelombang 3: PK-B34, PK-MCQ-115, PK-ESA-035, PK-KAS-027) agar tidak bentrok dengan percakapan Project sebelumnya.

Stok soal LIVE pack PK 1.7.3 per 2026-10-24 (mudah/sedang/sulit/sangat sulit) dan kekurangan terhadap sasaran:

| Tipe | Stok | Kurang | Rencana gelombang 4 | Sesudah gelombang 4 |
|---|---|---|---|---|
| PG | 12/28/28/7 | 18/2/2/23 | 20/3/3/24 | 32/31/31/31 |
| Esai | 0/7/8/5 | 9/2/1/4 | 10/3/2/5 | 10/10/10/10 |
| Kasus | 0/6/7/3 | 3/0/0/0 | 3/1/0/0 (mini) | 3/7/7/3 |

Cara pakai:
1. Pastikan instruksi Project Claude penyusun sudah memakai **Prompt B v4.4**, dan pengetahuan Project memuat `schema/CONTRACT.md` dan `docs/pk_taksonomi.md` serta `docs/pk_rujukan_penyusun.md`.
2. Buka **satu percakapan baru**, lalu salin satu blok utuh per pesan, berurutan dari atas. Kerjakan **prioritas 1** lebih dulu: batch itu membuka paket yang sekarang belum dapat dimulai (Level 1 dan Level 4).
3. Impor setiap hasil ke Pengelola Bank Soal. Perhatikan peringatan standar waktu saat impor; minta penyusun memendekkan soal yang melewati batas sebelum review.
4. Review dengan Prompt C v4.3. Bila Project melaporkan Batch ID atau rentang ID sudah terpakai, naikkan nomornya.

Prioritas: 1 = membuka paket yang belum dapat dimulai; 2 = mencapai sasaran tingkat mudah dan sangat sulit; 3 = mencapai sasaran tingkat sedang dan sulit. Jumlah dibulatkan ke batch penuh sebagai cadangan untuk soal yang ditolak atau direvisi.

| Prioritas | Batch | Tipe | Jumlah | ID | Kesulitan |
|---|---|---|---|---|---|
| 1 | PK-B35 | Esai | 5 | PK-ESA-036 s.d. 040 | mudah 5 |
| 1 | PK-B36 | Kasus mini | 2 | PK-KAS-028 s.d. 029 | mudah 2 |
| 1 | PK-B37 | PG | 10 | PK-MCQ-116 s.d. 125 | sangat sulit 10 |
| 2 | PK-B38 | PG | 10 | PK-MCQ-126 s.d. 135 | mudah 10 |
| 2 | PK-B39 | PG | 10 | PK-MCQ-136 s.d. 145 | mudah 10 |
| 2 | PK-B40 | PG | 10 | PK-MCQ-146 s.d. 155 | sangat sulit 10 |
| 2 | PK-B41 | Esai | 5 | PK-ESA-041 s.d. 045 | mudah 5 |
| 2 | PK-B42 | Esai | 5 | PK-ESA-046 s.d. 050 | sulit 1, sangat sulit 4 |
| 2 | PK-B43 | Kasus mini | 2 | PK-KAS-030 s.d. 031 | mudah 1, sedang 1 |
| 3 | PK-B44 | PG | 10 | PK-MCQ-156 s.d. 165 | sedang 3, sulit 3, sangat sulit 4 |
| 3 | PK-B45 | Esai | 5 | PK-ESA-051 s.d. 055 | sedang 3, sulit 1, sangat sulit 1 |

Gelombang 4 berakhir di PK-B45 (PK-MCQ-165, PK-ESA-055, PK-KAS-031).

## 1. PK-B35 (essay)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B35
Tipe: essay | Jumlah: 5 | ID mulai: PK-ESA-036
Sebaran topik: T01 1, T02 1, T03 1, T04 1, T05 1
Sebaran kesulitan: mudah 5
Ukuran kasus: -
Level kognitif: C2-C3
Catatan khusus:
- Bentuk: 3 esai teori dan 2 esai analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Esai mudah (6 menit): C2-C3, 1 perintah (jelaskan/identifikasi), stem ≤ 120 kata, jawaban ideal ≤ 100 kata, 3 kriteria rubrik.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- T01 (teori, mudah): tujuan pelaporan keuangan dan karakteristik kualitatif.
- T02 (teori, mudah): prinsip dasar etika, ancaman, dan pengamanannya.
- T03 (teori, mudah): perubahan kebijakan, perubahan estimasi, dan koreksi kesalahan PSAK 208 (25).
- T04 (analisis, mudah): NRV persediaan saat daya beli melemah (tema 10).
- T05 (analisis, mudah): penurunan nilai aset saat harga komoditas turun (tema 6).
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah tayang (PK-MCQ-001 s.d. 075, PK-ESA-001 s.d. 020, PK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nomor paragraf, atau tahun terbit.
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

## 2. PK-B36 (case mini)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B36
Tipe: case | Jumlah: 2 | ID mulai: PK-KAS-028
Sebaran topik: PK-KAS-028 T04; PK-KAS-029 T12
Sebaran kesulitan: mudah 2
Ukuran kasus: mini
Level kognitif: C3
Catatan khusus:
- Kasus mini mudah (15 menit): C3, narasi + data ≤ 300 kata, 2 sub, jawaban ideal semua sub ≤ 230 kata; tiap sub menerapkan satu konsep.
- PK-KAS-028 (mudah): distributor elektronik rumah tangga memegang persediaan model lama saat daya beli melemah dan model baru diluncurkan (tema 10). (a) hitung NRV dan penurunan nilai persediaan; (b) jurnal dan penyajian.
- PK-KAS-029 (mudah): marketplace lokal menerima pembayaran penuh dari pembeli dan meneruskan dana ke penjual (tema 8). (a) prinsipal atau agen; (b) jumlah pendapatan yang diakui.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah tayang (PK-MCQ-001 s.d. 075, PK-ESA-001 s.d. 020, PK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
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

## 3. PK-B37 (mcq)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B37
Tipe: mcq | Jumlah: 10 | ID mulai: PK-MCQ-116
Sebaran topik: T01 1, T02 1, T03 1, T04 1, T05 1, T07 1, T08 1, T10 1, T13 1, T14 1
Sebaran kesulitan: sangat_sulit 10
Ukuran kasus: -
Level kognitif: C5-C6
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 3 soal teori dan 7 soal analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Soal teori sulit dan sangat sulit: situasi singkat yang menuntut peserta membandingkan, menilai, atau memadukan beberapa teori, prinsip, atau kerangka; bukan sekadar menjelaskan satu konsep.
- PG sangat sulit (3,5 menit): C5-C6, integrasi minimal 2 konsep, stem + opsi ≤ 200 kata, minimal 3 langkah hitung atau penalaran atau data kuantitatif. Kesulitan dari integrasi dan pertimbangan yang saling bertentangan, bukan dari stem ambigu; tetap satu jawaban paling tepat.
- T01 (teori, sangat sulit): definisi unsur laporan keuangan dan kriteria pengakuan.
- T02 (teori, sangat sulit): peran komite audit dalam tata kelola pelaporan.
- T03 (teori, sangat sulit): peristiwa setelah periode pelaporan PSAK 210 (8).
- T04 (analisis, sangat sulit): penutupan pabrik padat karya dan PSAK 105 (58) (tema 4).
- T05 (analisis, sangat sulit): kapitalisasi pengembangan perangkat lunak AI (tema 8).
- T07 (analisis, sangat sulit): kerugian kredit ekspektasian piutang saat daya beli melemah (tema 10).
- T08 (analisis, sangat sulit): provisi restrukturisasi dan pesangon (tema 4).
- T10 (analisis, sangat sulit): pengendalian atas entitas yang dialihkan ke holding (tema 7).
- T13 (analisis, sangat sulit): rasio kualitas laba sebagai tanda peringatan (tema 11).
- T14 (analisis, sangat sulit): pengungkapan risiko iklim saat transisi energi (tema 12).
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah tayang (PK-MCQ-001 s.d. 075, PK-ESA-001 s.d. 020, PK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nomor paragraf, atau tahun terbit.
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

## 4. PK-B38 (mcq)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B38
Tipe: mcq | Jumlah: 10 | ID mulai: PK-MCQ-126
Sebaran topik: T02 1, T03 1, T04 1, T06 1, T07 1, T08 1, T11 1, T12 1, T13 1, T14 1
Sebaran kesulitan: mudah 10
Ukuran kasus: -
Level kognitif: C2-C3
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 6 soal teori dan 4 soal analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- PG mudah (1 menit): C2-C3, satu konsep, stem + opsi ≤ 90 kata, tanpa hitungan. Situasi singkat paling banyak 1-2 kalimat; distraktor tetap miskonsepsi umum.
- Soal bertanda "ke depan" meminta peserta mengantisipasi kondisi 2027-2030 yang dinyatakan sebagai skenario atau asumsi di soal.
- T02 (analisis, mudah): tekanan menunda pencadangan (tema 11).
- T03 (analisis, mudah): peristiwa penyesuai vs nonpenyesuai saat tarif dagang berubah (tema 3).
- T04 (analisis, mudah): persediaan usang karena perubahan teknologi (tema 13, ke depan).
- T06 (teori, mudah): definisi sewa dan pengecualian sewa jangka pendek PSAK 116 (73).
- T07 (teori, mudah): klasifikasi aset keuangan PSAK 109 (71).
- T08 (analisis, mudah): kewajiban restorasi tambang (tema 5).
- T11 (teori, mudah): pengaruh signifikan dan metode ekuitas PSAK 228 (15).
- T12 (teori, mudah): model lima langkah PSAK 115 (72).
- T13 (teori, mudah): jenis financial shenanigans dan red flags.
- T14 (teori, mudah): pelaporan terintegrasi dan enam modal.
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah tayang (PK-MCQ-001 s.d. 075, PK-ESA-001 s.d. 020, PK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nomor paragraf, atau tahun terbit.
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

## 5. PK-B39 (mcq)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B39
Tipe: mcq | Jumlah: 10 | ID mulai: PK-MCQ-136
Sebaran topik: T02 1, T03 1, T06 1, T07 1, T09 1, T10 1, T11 1, T12 1, T13 1, T14 1
Sebaran kesulitan: mudah 10
Ukuran kasus: -
Level kognitif: C2-C3
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 6 soal teori dan 4 soal analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- PG mudah (1 menit): C2-C3, satu konsep, stem + opsi ≤ 90 kata, tanpa hitungan. Situasi singkat paling banyak 1-2 kalimat; distraktor tetap miskonsepsi umum.
- Soal bertanda "ke depan" meminta peserta mengantisipasi kondisi 2027-2030 yang dinyatakan sebagai skenario atau asumsi di soal.
- T02 (analisis, mudah): pengungkapan keberlanjutan yang menyesatkan (greenwashing) (tema 12).
- T03 (analisis, mudah): penjabaran entitas luar negeri saat rupiah melemah (tema 2).
- T06 (teori, mudah): modifikasi sewa dan pengukuran kembali liabilitas sewa.
- T07 (teori, mudah): model kerugian kredit ekspektasian tiga tahap.
- T09 (teori, mudah): perbedaan temporer dan aset pajak tangguhan PSAK 212 (46).
- T10 (teori, mudah): unsur pengendalian PSAK 110 (65).
- T11 (teori, mudah): operasi bersama vs ventura bersama PSAK 111 (66).
- T12 (teori, mudah): prinsipal vs agen.
- T13 (analisis, mudah): pengakuan pendapatan prematur menjelang gagal bayar (tema 11).
- T14 (analisis, mudah): kesiapan data emisi untuk PSPK 2 yang efektif 1 Januari 2027 (tema 13, ke depan).
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah tayang (PK-MCQ-001 s.d. 075, PK-ESA-001 s.d. 020, PK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nomor paragraf, atau tahun terbit.
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

## 6. PK-B40 (mcq)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B40
Tipe: mcq | Jumlah: 10 | ID mulai: PK-MCQ-146
Sebaran topik: T01 1, T02 1, T03 1, T06 1, T07 1, T08 1, T09 1, T10 1, T12 1, T13 1
Sebaran kesulitan: sangat_sulit 10
Ukuran kasus: -
Level kognitif: C5-C6
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 3 soal teori dan 7 soal analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Soal teori sulit dan sangat sulit: situasi singkat yang menuntut peserta membandingkan, menilai, atau memadukan beberapa teori, prinsip, atau kerangka; bukan sekadar menjelaskan satu konsep.
- PG sangat sulit (3,5 menit): C5-C6, integrasi minimal 2 konsep, stem + opsi ≤ 200 kata, minimal 3 langkah hitung atau penalaran atau data kuantitatif. Kesulitan dari integrasi dan pertimbangan yang saling bertentangan, bukan dari stem ambigu; tetap satu jawaban paling tepat.
- Soal bertanda "ke depan" meminta peserta mengantisipasi kondisi 2027-2030 yang dinyatakan sebagai skenario atau asumsi di soal.
- T01 (teori, sangat sulit): dasar pengukuran dalam kerangka konseptual.
- T02 (teori, sangat sulit): konflik kepentingan akuntan profesional.
- T03 (teori, sangat sulit): penentuan mata uang fungsional PSAK 221 (10).
- T06 (analisis, sangat sulit): suku bunga pinjaman inkremental saat suku bunga turun (tema 1).
- T07 (analisis, sangat sulit): lindung nilai valas bahan baku (tema 2).
- T08 (analisis, sangat sulit): provisi kontrak memberatkan saat tarif dagang naik (tema 3).
- T09 (analisis, sangat sulit): realisasi aset pajak tangguhan saat laba turun (tema 10).
- T10 (analisis, sangat sulit): eliminasi transaksi antarperusahaan dalam grup (tema 7).
- T12 (analisis, sangat sulit): program loyalitas e-commerce (tema 8).
- T13 (analisis, sangat sulit): analitik data dan AI untuk mendeteksi anomali (tema 13, ke depan).
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah tayang (PK-MCQ-001 s.d. 075, PK-ESA-001 s.d. 020, PK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nomor paragraf, atau tahun terbit.
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

## 7. PK-B41 (essay)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B41
Tipe: essay | Jumlah: 5 | ID mulai: PK-ESA-041
Sebaran topik: T06 1, T07 1, T08 1, T09 1, T10 1
Sebaran kesulitan: mudah 5
Ukuran kasus: -
Level kognitif: C2-C3
Catatan khusus:
- Bentuk: 3 esai teori dan 2 esai analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Esai mudah (6 menit): C2-C3, 1 perintah (jelaskan/identifikasi), stem ≤ 120 kata, jawaban ideal ≤ 100 kata, 3 kriteria rubrik.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- T06 (teori, mudah): akuntansi pesewa: sewa pembiayaan vs sewa operasi.
- T07 (teori, mudah): liabilitas keuangan vs ekuitas PSAK 232 (50).
- T08 (teori, mudah): kriteria provisi dan liabilitas kontinjensi PSAK 237 (57).
- T09 (analisis, mudah): pajak tangguhan atas revaluasi aset (tema 6).
- T10 (analisis, mudah): akuisisi perusahaan teknologi dan aset takberwujud teridentifikasi (tema 8).
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah tayang (PK-MCQ-001 s.d. 075, PK-ESA-001 s.d. 020, PK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nomor paragraf, atau tahun terbit.
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

## 8. PK-B42 (essay)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B42
Tipe: essay | Jumlah: 5 | ID mulai: PK-ESA-046
Sebaran topik: T01 1, T02 1, T04 1, T07 1, T08 1
Sebaran kesulitan: sulit 1, sangat_sulit 4
Ukuran kasus: -
Level kognitif: C4-C6
Catatan khusus:
- Bentuk: 1 esai teori dan 4 esai analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Soal teori sulit dan sangat sulit: situasi singkat yang menuntut peserta membandingkan, menilai, atau memadukan beberapa teori, prinsip, atau kerangka; bukan sekadar menjelaskan satu konsep.
- Esai sulit (15 menit): C4, 2-3 perintah, analisis + rekomendasi, stem ≤ 200 kata, jawaban ideal ≤ 250 kata.
- Esai sangat sulit (20 menit): C5-C6, 3 perintah (analisis, evaluasi alternatif, rekomendasi atau sintesis), stem ≤ 250 kata, jawaban ideal ≤ 330 kata, 4-6 kriteria rubrik.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- Soal bertanda "ke depan" meminta peserta mengantisipasi kondisi 2027-2030 yang dinyatakan sebagai skenario atau asumsi di soal.
- T01 (teori, sangat sulit): tujuan pelaporan keuangan dan karakteristik kualitatif.
- T02 (analisis, sulit): akuntabilitas penggunaan AI dalam penyusunan laporan (tema 13, ke depan).
- T04 (analisis, sangat sulit): NRV persediaan saat daya beli melemah (tema 10).
- T07 (analisis, sangat sulit): obligasi berwawasan lingkungan dan fitur terkait keberlanjutan (tema 12).
- T08 (analisis, sangat sulit): provisi restrukturisasi dan pesangon (tema 4).
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah tayang (PK-MCQ-001 s.d. 075, PK-ESA-001 s.d. 020, PK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nomor paragraf, atau tahun terbit.
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

## 9. PK-B43 (case mini)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B43
Tipe: case | Jumlah: 2 | ID mulai: PK-KAS-030
Sebaran topik: PK-KAS-030 T08; PK-KAS-031 T14, T05
Sebaran kesulitan: mudah 1, sedang 1
Ukuran kasus: mini
Level kognitif: C3-C4
Catatan khusus:
- Kasus mini mudah (15 menit): C3, narasi + data ≤ 300 kata, 2 sub, jawaban ideal semua sub ≤ 230 kata; tiap sub menerapkan satu konsep.
- Kasus mini sedang (20 menit): C3-C4, narasi + data ≤ 400 kata, 2-3 sub, jawaban ideal semua sub ≤ 320 kata.
- PK-KAS-030 (mudah): pabrik garmen mengumumkan penutupan satu lini produksi dan pesangon karyawan (tema 4). (a) apakah provisi restrukturisasi diakui pada tanggal pelaporan; (b) unsur biaya yang termasuk provisi.
- PK-KAS-031 (sedang): produsen semen menilai dampak risiko iklim pada umur manfaat kiln dan menyiapkan pengungkapan untuk PSPK 2 yang efektif 1 Januari 2027 (tema 12, 13). Perubahan estimasi dan pengungkapan yang perlu disiapkan.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah tayang (PK-MCQ-001 s.d. 075, PK-ESA-001 s.d. 020, PK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
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

## 10. PK-B44 (mcq)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B44
Tipe: mcq | Jumlah: 10 | ID mulai: PK-MCQ-156
Sebaran topik: T01 1, T02 1, T03 1, T04 1, T05 1, T06 1, T07 1, T08 1, T11 1, T14 1
Sebaran kesulitan: sedang 3, sulit 3, sangat_sulit 4
Ukuran kasus: -
Level kognitif: C3-C6
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 3 soal teori dan 7 soal analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Soal teori sulit dan sangat sulit: situasi singkat yang menuntut peserta membandingkan, menilai, atau memadukan beberapa teori, prinsip, atau kerangka; bukan sekadar menjelaskan satu konsep.
- PG sedang (1,5 menit): C3, penerapan pada situasi, stem + opsi ≤ 120 kata, maks 1 langkah hitung.
- PG sulit (2,5 menit): C4, analisis, stem + opsi ≤ 160 kata atau tabel kecil, 2-3 langkah.
- PG sangat sulit (3,5 menit): C5-C6, integrasi minimal 2 konsep, stem + opsi ≤ 200 kata, minimal 3 langkah hitung atau penalaran atau data kuantitatif. Kesulitan dari integrasi dan pertimbangan yang saling bertentangan, bukan dari stem ambigu; tetap satu jawaban paling tepat.
- Soal bertanda "ke depan" meminta peserta mengantisipasi kondisi 2027-2030 yang dinyatakan sebagai skenario atau asumsi di soal.
- T01 (teori, sedang): definisi unsur laporan keuangan dan kriteria pengakuan.
- T02 (analisis, sulit): tekanan menunda pencadangan (tema 11).
- T03 (teori, sangat sulit): perubahan kebijakan, perubahan estimasi, dan koreksi kesalahan PSAK 208 (25).
- T04 (analisis, sedang): penutupan pabrik padat karya dan PSAK 105 (58) (tema 4).
- T05 (analisis, sangat sulit): peninjauan umur manfaat aset karena risiko iklim (tema 12, 13, ke depan).
- T06 (analisis, sedang): jual dan sewa-balik pada restrukturisasi grup (tema 7).
- T07 (analisis, sangat sulit): kerugian kredit ekspektasian piutang saat daya beli melemah (tema 10).
- T08 (analisis, sangat sulit): kewajiban restorasi tambang (tema 5).
- T11 (analisis, sulit): usaha patungan smelter (tema 5).
- T14 (teori, sulit): materialitas ganda vs materialitas finansial.
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah tayang (PK-MCQ-001 s.d. 075, PK-ESA-001 s.d. 020, PK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nomor paragraf, atau tahun terbit.
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

## 11. PK-B45 (essay)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B45
Tipe: essay | Jumlah: 5 | ID mulai: PK-ESA-051
Sebaran topik: T01 1, T02 1, T03 1, T04 1, T05 1
Sebaran kesulitan: sedang 3, sulit 1, sangat_sulit 1
Ukuran kasus: -
Level kognitif: C3-C6
Catatan khusus:
- Bentuk: 1 esai teori dan 4 esai analisis (lihat tanda di setiap topik). Soal teori menguji teori dan kerangka akademik yang umum dipakai; soal analisis memakai situasi perusahaan terkini.
- Esai sedang (10 menit): C3, 2 perintah, penerapan, stem ≤ 150 kata, jawaban ideal ≤ 170 kata.
- Esai sulit (15 menit): C4, 2-3 perintah, analisis + rekomendasi, stem ≤ 200 kata, jawaban ideal ≤ 250 kata.
- Esai sangat sulit (20 menit): C5-C6, 3 perintah (analisis, evaluasi alternatif, rekomendasi atau sintesis), stem ≤ 250 kata, jawaban ideal ≤ 330 kata, 4-6 kriteria rubrik.
- Jumlah kriteria rubrik mengikuti tingkat (mudah 3; sangat sulit 4-6; lainnya 3-6), berjumlah 10; acceptableAlternatives wajib.
- Soal bertanda "ke depan" meminta peserta mengantisipasi kondisi 2027-2030 yang dinyatakan sebagai skenario atau asumsi di soal.
- T01 (teori, sedang): dasar pengukuran dalam kerangka konseptual.
- T02 (analisis, sangat sulit): pengungkapan keberlanjutan yang menyesatkan (greenwashing) (tema 12).
- T03 (analisis, sulit): laba per saham setelah restrukturisasi grup (tema 7).
- T04 (analisis, sedang): persediaan usang karena perubahan teknologi (tema 13, ke depan).
- T05 (analisis, sedang): penurunan nilai aset saat harga komoditas turun (tema 6).
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah tayang (PK-MCQ-001 s.d. 075, PK-ESA-001 s.d. 020, PK-KAS-001 s.d. 016) dan batch sebelumnya di percakapan ini.
Bentuk soal (wajib):
- Teori: menguji pemahaman kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian); stem singkat, boleh dengan ilustrasi pendek. Bukan hafalan definisi, nomor paragraf, atau tahun terbit.
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
