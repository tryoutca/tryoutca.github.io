# PK gelombang 5 — siap tempel

Formulir gelombang 5, disusun 2026-10-29 untuk **Prompt B v4.5** dan **Prompt C v4.4** (variasi soal cerita, porsi dan kedalaman soal teori; D-112).
Tujuan: (1) menambah soal teori yang lebih dalam dan soal cerita yang lebih bervariasi; (2) menutup kekurangan stok LIVE (sasaran SPEC 7: per tingkat minimal 30 PG, 9 esai, 3 kasus).
Nomor melanjutkan nomor tertinggi gelombang 4 (PK-B45, PK-MCQ-165, PK-ESA-055, PK-KAS-031).

Stok pack PK 1.9.0 (`Publikasi Soal/PK 25 Okt 2026pack.json`), mudah/sedang/sulit/sangat sulit, semua LIVE:

| Tipe | LIVE | Kurang | Gelombang 5 | LIVE sesudahnya bila semua lolos |
|---|---|---|---|---|
| PG | 32/32/38/23 | 0/0/0/7 | 4/3/3/10 | 36/35/41/33 |
| Esai | 9/11/10/10 | 0/0/0/0 | 1/2/1/1 | 10/13/11/11 |
| Kasus | 2/8/7/3 | 1/0/0/0 | 1/1/0/0 (mini) | 3/9/7/3 |

Sebaran gaya di gelombang ini: soal teori 10 dari 25 PG dan esai (40%), ditambah satu sub teori di setiap kasus. Jenis entitas dibatasi pada entitas yang menerapkan SAK Indonesia; akuntansi syariah dan sektor publik tetap di luar taksonomi.

Cara pakai:
1. Pastikan instruksi Project Claude penyusun sudah memakai **Prompt B v4.5** dan Project reviewer memakai **Prompt C v4.4**. Pengetahuan Project memuat `schema/CONTRACT.md`, `docs/pk_taksonomi.md`, `docs/pk_rujukan_penyusun.md`, dan contoh soal ujian PK.
2. Buka **satu percakapan baru**, lalu salin satu blok utuh per pesan, berurutan dari atas.
3. Impor setiap hasil ke Pengelola Bank Soal. Perhatikan peringatan standar waktu saat impor. Periksa juga baris pertama authoring.notes (label bentuk) dan kalimat pertama setiap soal.
4. Review dengan Prompt C v4.4. Bila Project melaporkan Batch ID atau rentang ID sudah terpakai, naikkan nomornya.

Prioritas: 1 = menutup kekurangan stok; 2 = menambah variasi dan soal teori di tingkat yang stoknya sudah cukup.

| Prioritas | Batch | Tipe | Jumlah | ID | Kesulitan | Teori |
|---|---|---|---|---|---|---|
| 1 | PK-B46 | PG | 10 | PK-MCQ-166 s.d. 175 | sangat sulit 10 | 4 dari 10 |
| 1 | PK-B47 | Kasus mini | 2 | PK-KAS-032 s.d. 033 | mudah 1, sedang 1 | 1 sub per kasus |
| 2 | PK-B48 | PG | 10 | PK-MCQ-176 s.d. 185 | mudah 4, sedang 3, sulit 3 | 4 dari 10 |
| 2 | PK-B49 | Esai | 5 | PK-ESA-056 s.d. 060 | mudah 1, sedang 2, sulit 1, sangat sulit 1 | 2 dari 5 |

Gelombang 5 berakhir di PK-B49 (PK-MCQ-185, PK-ESA-060, PK-KAS-033).

## 1. PK-B46 (mcq)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B46
Tipe: mcq | Jumlah: 10 | ID mulai: PK-MCQ-166
Sebaran topik: T01 1, T03 1, T05 1, T06 1, T07 1, T09 1, T10 1, T11 1, T12 1, T13 1
Sebaran kesulitan: sangat_sulit 10
Ukuran kasus: -
Level kognitif: C5-C6
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 4 soal teori dan 6 soal analisis (40%; batas 40%).
- Soal teori sulit dan sangat sulit memadukan dua ragam atau dua konsep; bukan sekadar menjelaskan satu konsep.
- PG sangat sulit (3,5 menit): C5-C6, integrasi minimal 2 konsep, stem + opsi ≤ 200 kata, minimal 3 langkah hitung atau penalaran atau data kuantitatif. Kesulitan dari integrasi dan pertimbangan yang saling bertentangan, bukan dari stem ambigu; tetap satu jawaban paling tepat.
- T01 (teori; sangat sulit; ragam: alasan konseptual): mengapa kehati-hatian dalam Kerangka Konseptual dimaknai sebagai pendukung netralitas, bukan alasan mengakui beban atau liabilitas berlebih; akibatnya pada estimasi provisi.
- T03 (analisis; sangat sulit; pembuka: dokumen (memo auditor internal); entitas: perusahaan keluarga distribusi farmasi): transaksi dengan entitas milik keluarga pengendali; menilai pengungkapan pihak berelasi PSAK 224 (7) yang benar (tema 11).
- T05 (teori; sangat sulit; ragam: banding-kontras): nilai pakai vs nilai wajar dikurangi biaya pelepasan dalam PSAK 236 (48): asumsi masing-masing dan kapan salah satunya menentukan jumlah terpulihkan.
- T06 (analisis; sangat sulit; pembuka: data; entitas: operator menara telekomunikasi Tbk): jual dan sewa-balik dengan harga di atas nilai wajar; menghitung keuntungan yang diakui dan aset hak guna PSAK 116 (73) (tema 1).
- T07 (analisis; sangat sulit; pembuka: peristiwa; entitas: perusahaan pembiayaan (multifinance)): peningkatan risiko kredit signifikan setelah daya beli melemah; menentukan tahap dan dasar pengukuran kerugian kredit ekspektasian PSAK 109 (71) (tema 10).
- T09 (analisis; sangat sulit; pembuka: perdebatan; entitas: grup manufaktur Tbk dengan anak usaha di luar negeri): kepala pajak dan direktur keuangan berbeda pendapat tentang posisi pajak yang tidak pasti; menerapkan ISAK 123 dan PSAK 212 (46) (tema 9).
- T10 (teori; sangat sulit; ragam: menemukan kekeliruan): argumen yang memperlakukan kombinasi bisnis entitas sepengendali seperti akuisisi PSAK 103 (22) (nilai wajar dan goodwill); peserta menunjukkan letak kekeliruan menurut PSAK 338 (38).
- T11 (analisis; sangat sulit; pembuka: kronologi; entitas: anak usaha BUMN tambang): kepemilikan di entitas asosiasi smelter turun bertahap sampai pengaruh signifikan hilang; menghitung keuntungan atau kerugian dan perlakuan PKL PSAK 228 (15) (tema 5).
- T12 (teori; sangat sulit; ragam: menilai pernyataan): pernyataan separuh benar tentang imbalan variabel dan batasan estimasinya dalam PSAK 115 (72); peserta memilih penilaian yang tepat.
- T13 (analisis; sangat sulit; pembuka: peran ("Anda analis investasi ..."); entitas: perusahaan rintisan e-commerce menjelang IPO): data rasio tiga tahun (piutang, pendapatan, arus kas operasi) untuk mengenali tanda rekayasa pendapatan yang paling kuat (tema 8).
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 165, PK-ESA-001 s.d. 055, PK-KAS-001 s.d. 031) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.5):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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

## 2. PK-B47 (case mini)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B47
Tipe: case | Jumlah: 2 | ID mulai: PK-KAS-032
Sebaran topik: PK-KAS-032 T04, T05; PK-KAS-033 T08, T12
Sebaran kesulitan: mudah 1, sedang 1
Ukuran kasus: mini
Level kognitif: C3; C3-C4 (sesuai tingkat setiap soal)
Catatan khusus:
- Bentuk: kedua kasus berbentuk analisis, masing-masing dengan tepat satu sub teori.
- Kasus mini mudah (15 menit): C3, narasi + data ≤ 300 kata, 2 sub, jawaban ideal semua sub ≤ 230 kata; tiap sub menerapkan satu konsep.
- Kasus mini sedang (20 menit): C3-C4, narasi + data ≤ 400 kata, 2-3 sub, jawaban ideal semua sub ≤ 320 kata.
- PK-KAS-032 (mudah; T04, T05; pembuka: peristiwa; entitas: pabrik tekstil milik keluarga): satu lini produksi ditutup dan mesinnya akan dijual (tema 4). (a) analisis: klasifikasi dan pengukuran aset dikuasai untuk dijual PSAK 105 (58) dari data; (b) teori, ragam alasan konseptual: mengapa aset dikuasai untuk dijual tidak disusutkan.
- PK-KAS-033 (sedang; T08, T12; pembuka: dokumen (notulen rapat direksi); entitas: anak usaha BUMN kontraktor EPC): kontrak konstruksi diperkirakan rugi karena kenaikan biaya (tema 2). (a) teori, ragam sebab-akibat: hubungan pengakuan pendapatan sepanjang waktu PSAK 115 (72) dengan kontrak memberatkan PSAK 237 (57); (b) hitung pendapatan berdasarkan kemajuan; (c) tentukan provisi atau kerugian yang diakui.
- Data angka di caseData; total konsisten. Ingat: stem, narasi, dan seluruh isi caseData dihitung sebagai bacaan. Total skor tiap kasus 20; rujukan kriteria di acceptableAlternatives menyebut bagiannya, mis. "(b) C2".
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 165, PK-ESA-001 s.d. 055, PK-KAS-001 s.d. 031) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.5):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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

## 3. PK-B48 (mcq)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B48
Tipe: mcq | Jumlah: 10 | ID mulai: PK-MCQ-176
Sebaran topik: T01 1, T02 1, T03 1, T04 1, T05 1, T06 1, T08 1, T12 1, T13 1, T14 1
Sebaran kesulitan: mudah 4, sedang 3, sulit 3
Ukuran kasus: -
Level kognitif: C2-C3; C3; C4 (sesuai tingkat setiap soal)
Catatan khusus:
- Sebaran kunci: setiap huruf A-D paling banyak 3.
- Bentuk: 4 soal teori dan 6 soal analisis (40%; batas 40%).
- Soal teori sulit dan sangat sulit memadukan dua ragam atau dua konsep; bukan sekadar menjelaskan satu konsep.
- PG mudah (1 menit): C2-C3, satu konsep, stem + opsi ≤ 90 kata, tanpa hitungan. Situasi singkat paling banyak 1-2 kalimat; distraktor tetap miskonsepsi umum.
- PG sedang (1,5 menit): C3, penerapan pada situasi, stem + opsi ≤ 120 kata, maks 1 langkah hitung.
- PG sulit (2,5 menit): C4, analisis, stem + opsi ≤ 160 kata atau tabel kecil, 2-3 langkah.
- T01 (teori; mudah; ragam: banding-kontras): relevansi vs representasi tepat ketika estimasi memiliki ketidakpastian pengukuran tinggi.
- T02 (teori; mudah; ragam: sebab-akibat): mengapa sistem pelaporan pelanggaran tanpa perlindungan pelapor tidak efektif bagi tata kelola pelaporan keuangan.
- T03 (analisis; mudah; pembuka: tanpa nama ("Sebuah perusahaan percetakan ..."); entitas: perusahaan percetakan): kebakaran gudang setelah tanggal pelaporan; membedakan peristiwa penyesuai dan nonpenyesuai PSAK 210 (8) (tema 3).
- T04 (analisis; mudah; pembuka: data; entitas: pengecer elektronik Tbk): harga jual model lama turun; menentukan nilai persediaan menurut nilai realisasi neto PSAK 202 (14) (tema 10).
- T05 (analisis; sedang; pembuka: peristiwa; entitas: BUMD pengelola pelabuhan): menerima hibah pemerintah untuk membangun dermaga di kawasan hilirisasi; menerapkan PSAK 220 (61) (tema 5).
- T06 (analisis; sedang; pembuka: profil; entitas: jaringan klinik kecantikan): beberapa kontrak sewa; menerapkan pengecualian sewa jangka pendek dan aset bernilai rendah PSAK 116 (73) (tema 10).
- T08 (teori; sedang; ragam: asumsi): asumsi aktuarial program imbalan pasti dan akibat perubahan tingkat diskonto pada liabilitas dan PKL PSAK 219 (24).
- T12 (analisis; sulit; pembuka: perdebatan; entitas: pengembang perangkat lunak berlangganan): tim penjualan dan tim akuntansi berbeda pendapat apakah lisensi diakui pada suatu titik waktu atau sepanjang waktu PSAK 115 (72) (tema 8).
- T13 (analisis; sulit; pembuka: dokumen (ringkasan laporan analis); entitas: perusahaan perkebunan sawit milik keluarga Tbk): laba naik tetapi arus kas operasi turun; menentukan penjelasan yang paling mengindikasikan kualitas laba rendah (tema 6).
- T14 (teori; sulit; ragam: perkembangan teori): pergeseran dari pelaporan keberlanjutan sukarela ke standar pengungkapan keberlanjutan yang terhubung dengan laporan keuangan (PSPK 1 dan 2, efektif 1 Januari 2027); kunci tidak boleh menganggap PSPK sudah wajib.
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 165, PK-ESA-001 s.d. 055, PK-KAS-001 s.d. 031) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.5):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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

## 4. PK-B49 (essay)
```
FORMULIR BATCH
Mata ujian: Pelaporan Korporat (subjectId: pk)
Batch ID: PK-B49
Tipe: essay | Jumlah: 5 | ID mulai: PK-ESA-056
Sebaran topik: T02 1, T07 1, T09 1, T10 1, T14 1
Sebaran kesulitan: mudah 1, sedang 2, sulit 1, sangat_sulit 1
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
- T02 (analisis; mudah; pembuka: peran ("Anda akuntan senior ..."); entitas: perusahaan pembiayaan): atasan meminta pengakuan beban ditunda ke periode berikutnya; identifikasi ancaman etika dan tindakan yang tepat (tema 11).
- T07 (teori; sedang; ragam: banding-kontras): pengujian pengalihan risiko dan manfaat vs pengujian pengendalian dalam penghentian pengakuan aset keuangan, dengan contoh anjak piutang dengan dan tanpa regres.
- T09 (analisis; sedang; pembuka: data; entitas: produsen alas kaki Tbk): rugi fiskal setelah program PHK; menilai keterpulihan aset pajak tangguhan PSAK 212 (46) dan pengungkapannya (tema 4).
- T10 (analisis; sulit; pembuka: kronologi; entitas: grup ritel milik keluarga): akuisisi bertahap sampai memperoleh pengendalian; analisis pengukuran ulang kepentingan sebelumnya dan goodwill, lalu rekomendasi pengungkapan PSAK 103 (22); pesaing yang diakuisisi melemah karena daya beli turun (tema 10).
- T14 (teori; sangat sulit; ragam: keterbatasan dan perkembangan teori): keterbatasan laporan keuangan berbasis biaya historis dalam menggambarkan risiko iklim, peran pelaporan terintegrasi dan standar pengungkapan keberlanjutan, serta usulan peserta untuk menghubungkan keduanya.
Standar berlaku: SAK Indonesia yang efektif per 1 Januari 2026; jangan memakai standar atau amendemen yang belum efektif.
Catatan umum:
- Ikuti docs/pk_taksonomi.md (T01-T14, K01-K05) dan docs/pk_rujukan_penyusun.md.
- Tulis PSAK dengan nomor baru dan nomor lama, mis. "PSAK 116 (73)". Untuk ISAK, cukup nomor baru bila ragu.
- Nilai uang dalam Rupiah; sebut satuan (ribu/juta/miliar) dan aturan pembulatan di stem.
- Tanpa akuntansi syariah, sektor publik, dan kontrak asuransi. Tanpa kategori lama PSAK 55.
- Jangan menyalin angka, nama perusahaan, atau skenario dari materi dan contoh ujian.
- Hindari skenario yang mirip soal PK yang sudah ada (PK-MCQ-001 s.d. 165, PK-ESA-001 s.d. 055, PK-KAS-001 s.d. 031) dan batch sebelumnya di percakapan ini.
Bentuk soal dan variasi (wajib, Prompt B v4.5):
- Teori: menguji alasan, asumsi, keterbatasan, perbandingan, atau hubungan antarkonsep dari kerangka konseptual, prinsip, dan dasar standar yang umum dipakai (mis. definisi unsur dan kriteria pengakuan, dasar pengukuran, pengendalian, model lima langkah pendapatan, model kerugian kredit ekspektasian). Tanpa entitas, atau ilustrasi paling banyak dua kalimat. Ikuti ragam yang tertulis di setiap topik. Bukan hafalan definisi, daftar, nama tokoh, nomor paragraf, atau tahun terbit.
- Analisis: situasi entitas fiktif dengan data; ikuti pembuka dan jenis entitas yang tertulis di setiap topik. Entitas analisis menerapkan SAK Indonesia (bukan SAK EMKM, bukan entitas syariah atau instansi pemerintah). Kalimat pertama tidak boleh berbentuk "<Nama> (fiktif) adalah ...". Nama entitas tidak selalu berpola "PT <kata> <kata>".
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
