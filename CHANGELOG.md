# CHANGELOG

Catatan perubahan prompt (`prompts/*.md`) dan kontrak data. Setiap
perubahan prompt dirujuk ke docs/PROMPT_ALIGNMENT.md.

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
