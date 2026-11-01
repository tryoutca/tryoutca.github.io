# CHANGELOG

Catatan perubahan prompt (`prompts/*.md`) dan kontrak data. Setiap
perubahan prompt dirujuk ke docs/PROMPT_ALIGNMENT.md.

## 2026-11-01 — Prompt B v4.9, C v4.8, D v1.6: toleransi waktu dan batas revisi
Disetujui pemilik 2026-11-01. Latar: pemilik meminta (1) revisi paling banyak
3 kali, lewat dari itu Ditolak; (2) menu admin untuk menolak hasil review
yang janggal dan meloloskan soal; (3) toleransi pada estimasi waktu agar
penyusun tidak kebingungan menyesuaikan dan substansi yang diutamakan.
Kontrak data tidak berubah. Rujukan: D-121, D-122, D-123, PROMPT_ALIGNMENT
B-20, C-11, K-6.

### prompts/prompt_penyusun_soal.md (Prompt B)
- Judul v4.8 → v4.9.
- Standar waktu: toleransi menit ±20% dan bacaan/jawaban ideal sampai +25%;
  rumus pemeriksa × 1,2; substansi diutamakan atas penghematan kata.
- Revisi: batas 3 kali per soal, perbaiki semua temuan sekaligus; jangan
  merevisi hanya karena waktu atau panjang dalam toleransi.

### prompts/prompt_reviewer_soal.md (Prompt C)
- Judul v4.7 → v4.8.
- timeEstimate dengan toleransi: dalam toleransi skor 4-5 tanpa temuan;
  melebihi batas 25-50% atau menit di luar ±20% = minor; lebih dari 50% =
  mayor. Waktu atau panjang dalam toleransi tidak menyebabkan REVISE;
  temuan minor saja tidak menghalangi APPROVE.

### prompts/prompt_kalibrasi_soal.md (Prompt D)
- Judul v1.5 → v1.6; toleransi sama dengan Prompt B; rujukan Prompt B v4.9.

### Aplikasi
- `js/core/time-standard.js`: lint waktu memakai toleransi (D-123).
- `js/core/bank.js` dan `js/core/review-io.js`: batas 3 revisi dengan Ditolak
  otomatis (D-121); `overrideReview` (D-122); teks "Salin untuk penyusun"
  memuat putaran revisi.
- `js/ui/bank-manager.js`: tombol "Tolak hasil review, loloskan", catatan
  putaran revisi dan penolakan oleh admin.

### docs/formulir
- Gelombang 6 MSK dan PK: baris toleransi di setiap blok; rujukan versi
  Prompt B v4.9 dan Prompt C v4.8.

## 2026-11-01 — Prompt B v4.8, C v4.7, D v1.5: gaya bahasa yang mudah dipahami
Disetujui pemilik 2026-11-01. Latar: pemilik menilai bahasa soal kurang
natural dan agak sulit dipahami. Pengukuran terhadap contoh ujian resmi
2015-2017: panjang kalimat dan kata panjang setara, tetapi titik koma 2-3
kali lipat (stem 13-21 vs 0-6 per 1.000 kata) dan tanda kurung 2-3 kali
lipat pada PK (37-44 vs 10-18); opsi PG teori 19-27 kata berisi 2-3 gagasan.
Masalahnya pemadatan kalimat, bukan tingkat kesulitan kata. Kontrak data
tidak berubah. Rujukan: D-120, PROMPT_ALIGNMENT B-19, C-10, K-5.

### prompts/prompt_penyusun_soal.md (Prompt B)
- Judul v4.7 → v4.8.
- Bagian baru "Gaya bahasa": satu gagasan per kalimat; kalimat narasi paling
  banyak 25 kata (mudah, sedang) atau 30 kata (sulit, sangat sulit); titik
  koma tidak dirantai; kurung hanya untuk singkatan, nomor PSAK, padanan
  istilah; opsi PG satu pernyataan dengan satu alasan; kata sehari-hari
  lebih dulu, istilah asing dengan padanan Indonesia; kalimat aktif; bahasa
  mengikuti tingkat soal; butir daftar diakhiri titik.
- Langkah 3: periksa kalimat terpanjang tiap soal.
- Revisi: jenis "Revisi bahasa" tanpa temuan reviewer.

### prompts/prompt_reviewer_soal.md (Prompt C)
- Judul v4.6 → v4.7.
- Langkah 7: kemudahan dipahami dinilai; satu-dua kalimat berat = minor
  (stemClarity) dengan kalimat usulan; bahasa yang membuat soal bermakna
  ganda = mayor; istilah teknis materi tidak disederhanakan.

### prompts/prompt_kalibrasi_soal.md (Prompt D)
- Judul v1.4 → v1.5; gaya bahasa sama dengan Prompt B v4.8; kalimat
  berbelit bukan tempat cacat.

### docs/formulir
- Gelombang 6 MSK dan PK: baris "Gaya bahasa" di setiap blok; rujukan versi
  Prompt B v4.8 dan Prompt C v4.7.
- `pk_revisi_angka_siap_tempel.md`: catatan opsional untuk sekalian
  merapikan bahasa pada putaran revisi yang sama.

## 2026-11-01 — Prompt B v4.7, C v4.6, D v1.4: nilai uang ditulis penuh
Disetujui pemilik 2026-11-01. Latar: pemilik menilai penulisan "Rp6.000 juta"
tidak familiar bagi peserta; 56 soal PK LIVE memakai satuan juta. Pemilik
memilih angka rupiah penuh (mis. Rp6.000.000.000) dan revisi soal PK lama.
Kontrak data tidak berubah. Rujukan: D-119, PROMPT_ALIGNMENT B-18, C-9, K-4.

### prompts/prompt_penyusun_soal.md (Prompt B)
- Judul v4.6 → v4.7.
- Aturan wajib baru: nilai uang ditulis penuh dalam rupiah dengan titik
  ribuan, tanpa "ribu", "juta", "miliar", "triliun", atau tabel "dalam
  jutaan Rupiah"; berlaku di semua field; tanpa desimal rupiah.
- Langkah 3: periksa penulisan nilai uang.
- Revisi: jenis revisi baru "Revisi format angka" tanpa temuan reviewer;
  skenario, data, kunci, tingkat, dan skor tidak berubah.

### prompts/prompt_reviewer_soal.md (Prompt C)
- Judul v4.5 → v4.6.
- Langkah 7: nilai uang tidak ditulis penuh = minor (stemClarity); konversi
  yang merusak data atau kunci dinilai seperti biasa.
- Tingkat temuan minor disesuaikan.

### prompts/prompt_kalibrasi_soal.md (Prompt D)
- Judul v1.3 → v1.4; rujukan Prompt B v4.7; aturan nilai uang sama, format
  angka bukan tempat cacat.

### docs/formulir
- Gelombang 6 MSK dan PK: aturan nilai uang lama ("sebut satuan
  ribu/juta/miliar") diganti aturan angka penuh; rujukan versi menjadi
  Prompt B v4.7 dan Prompt C v4.6.
- Baru: `pk_revisi_angka_siap_tempel.md`, 12 kelompok revisi untuk 56 soal PK.

## 2026-10-29 — Prompt B v4.6, C v4.5, D v1.3: isyarat kata mutlak, pembuka soal teori, nama mirip nama nyata
Disetujui pemilik 2026-10-29. Latar: pemeriksaan batch MSK-B57 (Prompt B
v4.5) menemukan (1) kunci soal teori satu-satunya opsi berimbang sementara
distraktor memakai kata mutlak; (2) keempat soal teori dibuka dengan latar
periode 2023-2026; (3) nama fiktif mirip merek atau BUMD nyata. Kontrak data
tidak berubah. Rujukan: D-114, PROMPT_ALIGNMENT B-17, C-8, K-3.

### prompts/prompt_penyusun_soal.md (Prompt B)
- Judul v4.5 → v4.6.
- Kedalaman soal teori: aturan isyarat kata mutlak (paling banyak satu
  distraktor), istilah khas kerangka tidak hanya di kunci, dan pembuka soal
  teori bervariasi (paling banyak dua diawali latar periode).
- Variasi cerita: nama fiktif tidak boleh mirip merek, perusahaan, aplikasi,
  atau lembaga nyata.
- Langkah 3: baca opsi PG tanpa stem untuk menguji isyarat.

### prompts/prompt_reviewer_soal.md (Prompt C)
- Judul v4.4 → v4.5.
- Langkah 9: kunci tertebak dari opsi = mayor (distractorQuality); nama
  mirip nama nyata = minor (originality).
- Langkah 10: lebih dari dua soal teori diawali latar periode = minor
  (originality).
- Tingkat temuan disesuaikan.

### prompts/prompt_kalibrasi_soal.md (Prompt D)
- Judul v1.2 → v1.3; rujukan Prompt B v4.6.
- Variasi soal: aturan isyarat kata mutlak, istilah khas, pembuka soal teori,
  dan nama fiktif; cacat PENGECOH tetap berupa ketidakrelevanan konsep.

### docs/formulir/*_gelombang5_siap_tempel.md
- Rujukan versi menjadi Prompt B v4.6 dan Prompt C v4.5.

## 2026-10-29 — Prompt D v1.2: soal kalibrasi mengikuti variasi soal dan porsi teori
Disetujui pemilik 2026-10-29. Menyelaraskan Prompt D dengan Prompt B v4.5
dan Prompt C v4.4 agar soal kalibrasi tidak dapat dikenali dari pola cerita
lama. Kontrak data tidak berubah. Rujukan: D-113, PROMPT_ALIGNMENT K-2.

### prompts/prompt_kalibrasi_soal.md (Prompt D)
- Judul v1.1 → v1.2.
- Sumber: soal kalibrasi tidak dapat dibedakan juga dalam bentuk dan cara
  bercerita.
- Pemeriksaan formulir: bentuk teori untuk cacat PERIODE, LUAR, atau DATA.
- Aturan cacat: tidak boleh cacat pada bentuk dan variasi soal (originality
  tidak dipakai); RUBRIK boleh berupa rubrik yang hanya menerima satu
  kerangka.
- Aturan bentuk soal: "perusahaan fiktif" → "entitas fiktif"; notes memuat
  label bentuk setelah ringkasan cacat.
- Bagian baru "Variasi soal": ringkasan aturan Prompt B v4.5 (porsi teori,
  ragam teori, pembuka, entitas, perintah, alur kasus, rubrik) dan kode
  cacat yang cocok untuk soal teori.
- Langkah kerja 1 dan 3: rencanakan dan periksa bentuk serta pembuka.

## 2026-10-29 — Prompt B v4.5 dan Prompt C v4.4: variasi soal cerita, porsi dan kedalaman soal teori
Disetujui pemilik 2026-10-29. Latar: masukan pemilik bahwa pola soal cerita
seragam (45 dari 52 soal MSK dibuka "PT X (fiktif) adalah ...") serta soal
teori kurang jumlah dan kedalamannya (hanya 4 soal MSK tanpa entitas).
Kontrak data tidak berubah: tidak ada field baru, `schemaVersion` tetap
"4.1", enum dimensi reviewer tetap. Prompt D tetap v1.1. Rujukan: D-112,
PROMPT_ALIGNMENT B-16 dan C-7.

### prompts/prompt_penyusun_soal.md (Prompt B)
- Judul v4.4 → v4.5.
- Sumber: contoh soal ujian lama adalah sumber gaya, bukan cetakan.
- Pemeriksaan formulir: formulir yang meminta teori lebih dari 40% atau
  lebih dari satu sub teori per kasus.
- Aturan wajib: "perusahaan fiktif" → "entitas fiktif"; baris pertama
  `authoring.notes` wajib label bentuk (teori/analisis, ragam teori,
  pembuka, jenis entitas, sub teori kasus).
- Bagian baru "Variasi soal dan porsi teori": porsi teori maks 40% PG dan
  esai, mendekati batas; satu sub teori per kasus; delapan ragam soal teori
  (maks dua per ragam per batch); delapan pembuka cerita (maks 3 per
  pembuka, profil maks 2); larangan kalimat pertama "<Nama> (fiktif) adalah";
  variasi jenis entitas, nama, dan perintah; urutan sub kasus tidak selalu
  alat baku; rubrik menerima kerangka lain yang sah.
- Langkah kerja 1 dan 3: rencanakan dan periksa sebaran bentuk.
- Format output: satu baris Catatan penyusun merangkum sebaran bentuk.
- Revisi: label bentuk di baris pertama notes dipertahankan.

### prompts/prompt_reviewer_soal.md (Prompt C)
- Judul v4.3 → v4.4.
- Langkah 9 baru "Bentuk dan kedalaman": teori hafalan = mayor (alignment);
  jawaban analisis tertebak dari kata kunci = minor (stemClarity); rubrik
  hanya satu kerangka = mayor (rubricQuality).
- Langkah 10 baru "Variasi lintas soal": pembuka berpola sama lebih dari 3
  soal dan urutan sub kasus baku = minor (originality); batchNotes memuat
  porsi teori, pembuka, entitas, dan pola perintah.
- Langkah lama 9 menjadi 11; Tingkat temuan dan contoh batchNotes
  disesuaikan.

## 2026-10-24 — Prompt B v4.4 dan Prompt D v1.1: soal mudah dan sangat sulit, kalibrasi sesuai standar waktu
Disetujui pemilik 2026-10-24. Kontrak data tidak berubah: tidak ada field baru,
`schemaVersion` tetap "4.1", format output kedua prompt sama. Prompt C tetap
v4.3. Rujukan: D-102, PROMPT_ALIGNMENT B-15 dan K-1.

### prompts/prompt_penyusun_soal.md (Prompt B)
- Judul v4.3 → v4.4.
- Peran: soal pemahaman teori dan penerapan (C2-C6); ujian CA sebagai standar
  minimal akuntan kredibel yang menguasai teori akademik umum dan mampu
  menjawab tantangan saat ini dan ke depan (arahan pemilik).
- Sumber: soal emas menjadi patokan gaya dan kedalaman, bukan panjang.
- Aturan wajib baru: campuran soal teori dan analisis; konteks terkini;
  tantangan ke depan boleh diuji bila dinyatakan sebagai skenario atau asumsi.
- cognitiveLevel: C2 boleh untuk PG mudah dan esai mudah (sebelumnya hanya
  PG mudah); kasus minimal C3.
- Pemeriksaan formulir: level kognitif formulir yang tidak sesuai kriteria
  tingkat.
- Bagian standar waktu: cara menghitung kata (sama dengan lint aplikasi),
  panduan soal mudah (pemahaman, bukan hafalan; esai 3 kriteria; kasus mini
  mudah C3), dan panduan soal sangat sulit (sumber kesulitan, arti minimal 3
  langkah, arti C5/C6, esai 4-6 kriteria).
- Langkah periksa diri merujuk cara menghitung kata.

### prompts/prompt_kalibrasi_soal.md (Prompt D)
- Judul v1.0 → v1.1.
- Sumber: panjang soal dan `estimatedMinutes` mengikuti standar waktu, agar
  soal kalibrasi tidak dapat dibedakan dari soal biasa setingkat.
- Bagian baru "Standar waktu dan tingkat kesulitan" (tabel menit, batas kata,
  cara menghitung kata), sama dengan Prompt B.
- Pemeriksaan formulir: ukuran kasus harus sesuai tingkat kesulitan.
- Aturan cacat: cacat tidak boleh pada panjang, `estimatedMinutes`, ukuran
  kasus, atau level kognitif.
- Aturan bentuk soal: cognitiveLevel dan `estimatedMinutes` sesuai standar.
- Langkah periksa diri: hitung kata dan cocokkan `estimatedMinutes`.

### Yang perlu dilakukan pemilik
- Ganti instruksi Project Claude penyusun dengan Prompt B v4.4 dan instruksi
  Project "Penyusun Kalibrasi" dengan Prompt D v1.1.

## 2026-10-24 — Prompt B v4.3 dan Prompt C v4.3: standar waktu per tingkat kesulitan
Disetujui pemilik (usulan `docs/usulan_estimasi_waktu.md`). Kontrak data
tidak berubah: tidak ada field baru, `schemaVersion` tetap "4.1", dan format
output kedua prompt sama. Rujukan: D-99, PROMPT_ALIGNMENT B-14 dan C-6.

### prompts/prompt_penyusun_soal.md (Prompt B)
- Bagian baru "Standar waktu dan tingkat kesulitan": tabel `estimatedMinutes`
  per tipe dan tingkat, kriteria per tingkat (level kognitif, batas kata stem
  atau narasi, batas kata jawaban ideal, jumlah perintah/sub, langkah hitung),
  dan rumus pemeriksa.
- `estimatedMinutes` wajib sama dengan standar; cognitiveLevel sesuai
  kriteria, dan C2 hanya untuk PG mudah (sebelumnya: hanya bila diminta
  formulir).
- Pemeriksaan formulir: ukuran kasus harus sesuai tingkat kesulitan (mini =
  mudah/sedang, komprehensif = sulit/sangat sulit).
- Langkah periksa diri: hitung kata terhadap batas, dan pastikan
  `estimatedMinutes` = standar.

### prompts/prompt_reviewer_soal.md (Prompt C)
- Langkah 6: dimensi timeEstimate dinilai terhadap standar dan rumus
  pemeriksa.
- Bagian baru "Standar waktu dan batas per tingkat kesulitan" (tabel ringkas).
- Tingkat temuan: melebihi batas panjang atau ukuran kasus tidak sesuai
  tingkat = mayor; `estimatedMinutes` berbeda dari standar padahal panjang
  sesuai = minor.

### schema/CONTRACT.md
- Bagian C: tabel standar `estimatedMinutes` dan aturan ukuran kasus;
  pelanggaran menjadi peringatan lint, bukan penolakan skema.

### Tindakan di luar repositori
- Ganti instruksi Project Claude (penyusun) dengan Prompt B v4.3, dan
  instruksi Project ChatGPT (reviewer) dengan Prompt C v4.3. Unggah ulang
  `schema/CONTRACT.md` ke kedua Project.

## 2026-10-23 — Prompt D v1.0: penyusun soal kalibrasi
Disetujui pemilik. Prompt baru; prompt lain tidak berubah. Format output = batch soal biasa
(schemaVersion "4.1") dengan status CALIBRATION dan objek `calibration`.
Rujukan: D-93.

### prompts/prompt_kalibrasi_soal.md (Prompt D)
- Peran penyusun soal bercacat sengaja satu per soal, katalog 8 kode cacat
  dengan defectDimension dan tingkat sesuai Prompt C, aturan penyamaran,
  larangan cacat yang tertangkap lint, langkah periksa diri, output JSON plus
  tabel "Kunci kalibrasi", dan aturan revisi.

## 2026-10-22 — Prompt C v4.2: pemeriksaan fakta ekonomi dan regulasi
Disetujui pemilik. Isi substansi berubah; format output tidak berubah
(reviewVersion tetap "4.1"). Rujukan: PROMPT_ALIGNMENT C-5, D-91.

### prompts/prompt_reviewer_soal.md (Prompt C)
- Judul v4.1 → v4.2.
- Langkah baru 8 "Fakta ekonomi dan regulasi": fakta keliru atau periode tidak
  jelas, fakta tak terpastikan yang disajikan sebagai kejadian nyata, jawaban
  yang bergantung pada informasi di luar soal, dan kebijakan yang berubah wajib
  dikaitkan dengan periode kasus. Fakta nyata yang benar tidak perlu dibuat
  hipotetis. Pemetaan temuan ke dimensi keyCorrectness, fairness, stemClarity.
  Langkah skor dan verdict menjadi langkah 9.
- Tingkat temuan: kritis ditambah fakta keliru yang mengubah kunci; mayor
  ditambah fakta tak terpastikan sebagai kejadian nyata, ketergantungan pada
  informasi di luar soal, dan periode kebijakan tidak jelas.

## 2026-10-16 — Penyelarasan prompt dengan kontrak v4.1 (Fase A0)
Disetujui pemilik. Hanya bagian format data yang diubah; peran, aturan
substansi, dan langkah kerja tidak berubah.

### prompts/prompt_penyusun_soal.md (Prompt B)
- Menetapkan pola ID dan prefiks tipe MCQ/ESA/KAS/NUM (B-3, D-05).
- Menambah rujukan field wajib per tipe ke CONTRACT.md bagian C dan larangan
  field di luar kontrak (B-4, B-5).
- Menuliskan objek `lifecycle` lengkap dengan `review`, `approvedBy`,
  `approvedAt` = null (B-2).
- Menuliskan objek `authoring` lengkap dengan `createdAt` dan
  `revision` = 1 (B-1).

### prompts/prompt_reviewer_soal.md (Prompt C)
- Langkah 8: skor bulat 1-5 untuk kesepuluh dimensi; hanya
  singleBestAnswer, distractorQuality, rubricQuality, dataConsistency yang
  boleh null; keyCorrectness untuk esai/kasus = kebenaran jawaban ideal dan
  data (C-2 opsi a, D-19).
- `findings[].dimension` wajib salah satu nama dimensi (C-1).

### prompts/prompt_penilai_ai.md (Prompt D)
- Bentuk elemen `subQuestionScores` dan aturan esai = [] (D-1).
- Bentuk elemen `reviewFlags` beserta keempat tipenya (D-2).
- Aturan flag `ketidakpastian_tinggi` saat confidence rendah (D-3).
- Cara membaca jawaban kasus berlabel [a], [b], ... (D-4, D-13).

### schema/CONTRACT.md
- Prefiks tipe ID soal ditetapkan (MCQ/ESA/KAS/NUM).

### Tindakan di luar repositori
- Unggah ulang `schema/CONTRACT.md` dan Prompt B ke Project Claude, serta
  CONTRACT.md dan Prompt C ke Project ChatGPT.
- Formulir Permintaan Batch (dokumen Word, bagian 6.2): gunakan prefiks
  ESA/KAS untuk ID mulai esai dan kasus.

## 2026-10-17 — Aturan rujukan kriteria pada soal kasus (perbaikan QA A2)
Disetujui pemilik. Hanya bagian format data yang diubah.

### prompts/prompt_penyusun_soal.md (Prompt B)
- Butir baru di "Aturan wajib": rujukan kriteria pada soal kasus wajib menyebut
  bagiannya, mis. "(b) C3" (B-8, D-56).

### schema/CONTRACT.md
- Aturan konsistensi 6: pada soal `case`, rujukan kriteria di
  `acceptableAlternatives` (dan `modelAnswer` tingkat soal) wajib menyebut
  bagiannya, mis. `(b) C3`. Ditegakkan `js/core/consistency.js` untuk soal, batch,
  dan pack.

### Data
- `packs/demo/pack.json`, `schema/examples/question.case.json`,
  `schema/examples/session.example.json`: "nilai penuh pada C3" menjadi
  "nilai penuh pada (b) C3". `contentHash` tidak berubah (field ini tidak ikut hash).

### Tindakan di luar repositori
- Unggah ulang `schema/CONTRACT.md` ke Project Claude dan ChatGPT, serta Prompt B
  ke Project Claude.

## 2026-10-17 — Pemeriksaan keselarasan prompt (Fase A5)
Hanya bagian format data yang diubah.

### prompts/prompt_reviewer_soal.md (Prompt C)
- Format output: `"batchId": "salin persis dari input"`, dan pemeriksaan sebelum
  mengirim menyebut batchId (C-5). Aplikasi menolak hasil review yang batchId-nya
  tidak cocok dengan paket review (D-59).

### Tanpa perubahan
- Prompt B (batch) dan Prompt D (hasil penilaian) diperiksa terhadap
  `batch.schema.json` dan `grading-result.schema.json`; tidak ada selisih.

### Tindakan di luar repositori
- Unggah ulang Prompt C ke Project ChatGPT.

## 2026-10-17 — Prompt B v4.2 (disetujui pemilik)
Isi `prompts/prompt_penyusun_soal.md` diganti seluruhnya dengan v4.2 yang
disusun dan disetujui pemilik. Kontrak data tidak berubah (`schemaVersion` tetap
"4.1"); keselarasan dengan `schema/` diperiksa (B-10).

### prompts/prompt_penyusun_soal.md (Prompt B)
- Bagian baru "Pemeriksaan formulir": prefiks ID vs tipe, batas jumlah
  (mcq/numeric 10, essay 5, case 2), sebaran topik/kesulitan, ukuran kasus,
  batch/ID yang sudah dipakai; bila bermasalah AI bertanya dan tidak
  mengeluarkan JSON.
- topicIds/competencyIds hanya dari taksonomi pack (atau pemetaan formulir).
- cognitiveLevel C3-C6 (C2 hanya bila diminta formulir).
- Sebaran kunci PG per batch: maks ceil(jumlah soal / 4) per huruf.
- Aturan numerik: value, unit, tolerance absolute/relative, satuan dan
  pembulatan di stem, langkah perhitungan di explanation.
- Rubrik esai menjumlah 10; rubrik kasus per sub dan total 20 ditegaskan;
  skor ditulis dengan titik desimal.
- Konsistensi caseData (jumlah sel = jumlah kolom; total/rasio/persentase).
- Bentuk baku field yang tidak dirinci CONTRACT.md (options,
  distractorRationale, acceptableAlternatives sebagai SATU teks).
- Revisi: batchId sama dengan batch asal, createdAt tetap, revision +1,
  ringkasan perubahan di authoring.notes.

### Tindakan di luar repositori
- Ganti instruksi Project Claude (penyusun) dengan Prompt B v4.2; unggah
  `schema/CONTRACT.md` dan `schema/examples/batch.example.json`.
