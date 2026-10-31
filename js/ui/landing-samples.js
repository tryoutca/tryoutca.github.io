// Contoh soal mudah di halaman awal (D-123): 5 soal PG per mata ujian, tanpa
// timer, dari desain halaman awal pemilik. Bukan soal bank dan tidak dinilai
// aplikasi; hanya untuk pemanasan sebelum tryout penuh. Kunci = indeks opsi.

export const LANDING_SAMPLES = {
  pk: {
    blurb: 'Konsolidasi, kombinasi bisnis, entitas asosiasi, dan penyajian laporan keuangan.',
    questions: [
      {
        text: 'Dalam penyusunan laporan keuangan konsolidasian, investor dianggap mengendalikan investee apabila investor memiliki…',
        options: ['Kepemilikan lebih dari 20% saham investee', 'Kekuasaan atas investee, eksposur atau hak atas imbal hasil variabel, dan kemampuan menggunakan kekuasaannya untuk memengaruhi imbal hasil tersebut', 'Satu kursi di dewan komisaris investee', 'Kontrak pemasokan jangka panjang dengan investee'],
        correct: 1,
        explanation: 'Pengendalian mensyaratkan ketiga unsur tersebut sekaligus. Kepemilikan sekitar 20% umumnya hanya indikasi pengaruh signifikan, bukan pengendalian.',
      },
      {
        text: 'PT A mengakuisisi 100% saham PT B dengan imbalan Rp1.000 juta. Nilai wajar aset neto teridentifikasi PT B sebesar Rp800 juta. Berapa goodwill yang diakui PT A?',
        options: ['Rp0', 'Rp200 juta', 'Rp800 juta', 'Rp1.800 juta'],
        correct: 1,
        explanation: 'Goodwill = imbalan yang dialihkan − nilai wajar aset neto teridentifikasi = Rp1.000 juta − Rp800 juta = Rp200 juta.',
      },
      {
        text: 'Investasi pada entitas asosiasi, yaitu entitas tempat investor memiliki pengaruh signifikan, dicatat menggunakan metode…',
        options: ['Biaya perolehan', 'Nilai wajar melalui laba rugi', 'Ekuitas', 'Konsolidasi penuh'],
        correct: 2,
        explanation: 'Entitas asosiasi dicatat dengan metode ekuitas: investasi awalnya diakui sebesar biaya perolehan, lalu disesuaikan dengan bagian investor atas laba rugi investee.',
      },
      {
        text: 'Entitas induk menjual persediaan kepada entitas anaknya. Saat menyusun laporan keuangan konsolidasian, transaksi penjualan tersebut…',
        options: ['Tetap diakui penuh sebagai pendapatan grup', 'Dieliminasi seluruhnya', 'Dieliminasi hanya sebesar porsi kepentingan nonpengendali', 'Cukup diungkapkan di catatan atas laporan keuangan'],
        correct: 1,
        explanation: 'Grup dipandang sebagai satu entitas ekonomi, sehingga transaksi, saldo, dan laba belum direalisasi antarentitas dalam grup dieliminasi seluruhnya.',
      },
      {
        text: 'Berikut ini adalah komponen laporan keuangan lengkap, KECUALI…',
        options: ['Laporan posisi keuangan', 'Laporan arus kas', 'Laporan perubahan ekuitas', 'Surat Pemberitahuan (SPT) Tahunan pajak'],
        correct: 3,
        explanation: 'SPT Tahunan adalah dokumen perpajakan, bukan komponen laporan keuangan. Komponen lainnya termasuk laporan laba rugi dan penghasilan komprehensif lain serta catatan atas laporan keuangan.',
      },
    ],
  },
  msk: {
    blurb: 'Analisis lingkungan, strategi generik, Balanced Scorecard, dan portofolio bisnis.',
    questions: [
      {
        text: 'Analisis PESTEL terutama digunakan untuk menganalisis…',
        options: ['Lingkungan makro eksternal perusahaan', 'Kekuatan dan kelemahan internal perusahaan', 'Rasio kinerja keuangan perusahaan', 'Budaya organisasi perusahaan'],
        correct: 0,
        explanation: 'PESTEL memetakan faktor Politik, Ekonomi, Sosial, Teknologi, Lingkungan (Environmental), dan Legal di lingkungan makro eksternal.',
      },
      {
        text: 'Berikut ini termasuk dalam model Lima Kekuatan Porter (Porter’s Five Forces), KECUALI…',
        options: ['Ancaman pendatang baru', 'Daya tawar pemasok', 'Budaya organisasi perusahaan', 'Ancaman produk substitusi'],
        correct: 2,
        explanation: 'Lima kekuatan Porter: ancaman pendatang baru, daya tawar pemasok, daya tawar pembeli, ancaman produk substitusi, dan persaingan antarpesaing. Budaya organisasi adalah faktor internal.',
      },
      {
        text: 'Perusahaan menawarkan produk dengan fitur unik yang dihargai pelanggan sehingga dapat menetapkan harga premium. Strategi generik ini disebut…',
        options: ['Kepemimpinan biaya', 'Diferensiasi', 'Integrasi vertikal', 'Diversifikasi'],
        correct: 1,
        explanation: 'Strategi diferensiasi menciptakan keunikan yang dinilai pelanggan sehingga perusahaan dapat mengenakan harga premium.',
      },
      {
        text: 'Balanced Scorecard mengukur kinerja dari empat perspektif berikut, KECUALI perspektif…',
        options: ['Keuangan', 'Pelanggan', 'Pesaing', 'Pembelajaran dan pertumbuhan'],
        correct: 2,
        explanation: 'Empat perspektif Balanced Scorecard adalah keuangan, pelanggan, proses bisnis internal, serta pembelajaran dan pertumbuhan.',
      },
      {
        text: 'Dalam matriks BCG, unit bisnis dengan pangsa pasar relatif tinggi di pasar yang pertumbuhannya rendah disebut…',
        options: ['Star', 'Question mark', 'Cash cow', 'Dog'],
        correct: 2,
        explanation: 'Cash cow menghasilkan arus kas besar karena pangsa pasarnya tinggi, sementara kebutuhan investasinya rendah karena pasarnya tumbuh lambat.',
      },
    ],
  },
};
