// Teks "Bagikan hasil" (D-121): ringkasan skor dan topik terlemah untuk dikirim
// peserta lewat WhatsApp atau aplikasi lain. Sengaja TIDAK memuat soal, kunci,
// atau pembahasan agar isi bank soal tidak tersebar. Fungsi murni tanpa DOM.

import { formatFixed2, formatScore } from './format.js';

export const SITE_URL = 'https://tryoutca.github.io/';
const WEAK_LIMIT = 2;

// Topik dengan persentase terendah di bawah 70%, paling banyak dua.
export function weakestTopics(topics, limit = WEAK_LIMIT) {
  return topics
    .filter((t) => t.pct !== null && t.pct < 70)
    .sort((a, b) => a.pct - b.pct || a.id.localeCompare(b.id))
    .slice(0, limit);
}

// Nama topik dipendekkan agar pesan singkat: bagian sebelum titik dua, maks 60 karakter.
export function shortTopic(name) {
  const head = String(name).split(':')[0].trim();
  return head.length > 60 ? `${head.slice(0, 59).trimEnd()}…` : head;
}

export function shareText(report, url = SITE_URL) {
  const r = report.recap;
  const lines = [
    'Hasil tryout latihan saya di tryoutCA',
    `${r.subjectName} · ${r.packageName}`,
  ];
  if (r.isFinal) {
    lines.push(`Nilai ${formatScore(r.finalScore)} (passing grade ${formatFixed2(r.passingGrade)}) · ${r.passed ? 'LULUS' : 'BELUM LULUS'}`);
  } else {
    lines.push(`Skor sementara ${formatScore(r.interimScore)} (esai dan kasus belum dinilai)`);
  }
  const weak = weakestTopics(report.topics);
  if (weak.length) lines.push(`Perlu diperkuat: ${weak.map((t) => `${shortTopic(t.name)} (${Math.round(t.pct)}%)`).join(', ')}`);
  lines.push('', `Coba juga, gratis: ${url}`, 'Latihan mandiri, bukan ujian resmi IAI.');
  return lines.join('\n');
}

// Tautan cadangan bila perangkat tidak punya menu Bagikan bawaan.
export function whatsappUrl(text) {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}
