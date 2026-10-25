// Halaman awal (D-103): pengantar singkat sebelum peserta memilih mata ujian.
// Isi mata ujian dihitung dari pack (jumlah topik, soal tayang, paket), tanpa
// teks khusus satu mata ujian (SPEC 4). Pack demo hanya tampil bila tidak ada
// pack lain.

import { h } from './dom.js';
import { disclaimer } from './layout.js';
import { loadActiveSession } from '../core/session-store.js';
import { sebBadge } from '../platform/seb.js';

const LEVEL = 'Tingkat Lanjutan (Advanced Level)';

// Ringkasan satu pack untuk kartu mata ujian dan angka di bagian atas.
export function subjectSummary(pack) {
  const live = pack.questions.filter((q) => q.lifecycle.status === 'LIVE').length;
  const longest = pack.packages.reduce((max, p) => Math.max(max, p.durationMinutes), 0);
  return { subjectId: pack.subjectId, name: pack.subjectName, topics: pack.topics.length, live, packages: pack.packages.length, longest };
}

// Pack yang ditawarkan di halaman awal: semua kecuali demo, kecuali demo satu-satunya.
export function landingPacks(packs) {
  const real = packs.filter(({ pack }) => pack.subjectId !== 'demo');
  return (real.length ? real : packs).map(({ pack }) => pack);
}

export function renderLanding(app) {
  const packs = landingPacks(app.packs);
  const summaries = packs.map(subjectSummary);
  const totalLive = summaries.reduce((n, s) => n + s.live, 0);
  const active = app.packs.map(({ pack }) => pack).find((p) => {
    const a = loadActiveSession(app.store, p.subjectId);
    return a && a.ok;
  });

  const open = (subjectId) => {
    app.selectSubject(subjectId);
    app.show('home');
  };
  const scrollTo = (id) => el.querySelector(`#${id}`)?.scrollIntoView({ block: 'start' });

  const el = h('div', { class: 'screen landing' },
    h('div', { class: 'landing-top' },
      h('span', { class: 'landing-brand' }, h('img', { src: brandIcon(), alt: '' }), 'Tryout CA Indonesia'),
      sebBadge(),
      h('button', { type: 'button', class: 'btn btn-link', onclick: () => app.show('guide') }, 'Panduan')),

    active ? h('div', { class: 'card resume-card landing-resume' },
      h('p', { text: `Ada ujian ${active.subjectName} yang belum selesai.` }),
      h('button', { type: 'button', class: 'btn btn-primary', onclick: () => open(active.subjectId) }, 'Lanjutkan ujian')) : null,

    h('section', { class: 'landing-hero' },
      h('p', { class: 'landing-eyebrow', text: LEVEL }),
      h('h1', { text: 'Latihan Ujian Chartered Accountant, selangkah demi selangkah' }),
      h('p', { class: 'landing-lead', text: 'Kerjakan soal pilihan ganda, esai, dan kasus dengan batas waktu seperti ujian sungguhan, lalu lihat nilai dan pembahasannya.' }),
      h('div', { class: 'landing-actions' },
        h('button', { type: 'button', class: 'btn btn-primary landing-cta', onclick: () => scrollTo('mata-ujian') }, 'Mulai Latihan'),
        h('button', { type: 'button', class: 'btn', onclick: () => scrollTo('ujian-ca') }, 'Kenali Ujian CA')),
      h('ul', { class: 'landing-facts' },
        h('li', {}, h('strong', { text: String(summaries.length) }), ' mata ujian'),
        h('li', {}, h('strong', { text: String(totalLive) }), ' soal latihan'),
        h('li', {}, h('strong', { text: 'Gratis' }), ' tanpa akun'))),

    h('section', { class: 'landing-section', id: 'ujian-ca' },
      h('h2', { text: 'Sekilas tentang Ujian CA' }),
      h('p', { text: 'Chartered Accountant (CA) Indonesia adalah sebutan profesional bagi akuntan yang diberikan oleh Ikatan Akuntan Indonesia (IAI). Salah satu syarat untuk meraihnya adalah lulus Ujian CA.' }),
      h('p', { text: `Ujian CA disusun berjenjang. Mata ujian ${LEVEL} menuntut Anda menerapkan standar dan menganalisis keadaan perusahaan secara utuh, bukan sekadar menghafal.` }),
      h('div', { class: 'landing-grid' },
        tile('Pilihan ganda', 'Menguji pemahaman konsep dan penerapannya dengan cepat dan tepat.'),
        tile('Esai', 'Menjelaskan perlakuan, perhitungan, dan alasannya secara runtut.'),
        tile('Kasus', 'Menganalisis keadaan perusahaan dan memberi rekomendasi yang beralasan.')),
      h('p', { class: 'hint' }, 'Jadwal, syarat, dan ketentuan resmi ujian dapat dilihat di ',
        h('a', { href: 'https://iaiglobal.or.id', target: '_blank', rel: 'noopener' }, 'situs IAI'), '.')),

    h('section', { class: 'landing-section', id: 'mata-ujian' },
      h('h2', { text: 'Pilih mata ujian' }),
      h('p', { class: 'hint', text: `Saat ini tersedia mata ujian ${LEVEL}. Mata ujian lain menyusul.` }),
      summaries.length
        ? h('div', { class: 'landing-grid' }, summaries.map((s) => h('div', { class: 'card landing-subject' },
          h('h3', { text: s.name }),
          h('p', { class: 'hint', text: `${s.topics} topik · ${s.live} soal · ${s.packages} paket` }),
          h('p', { class: 'hint', text: `Paket terlama ${s.longest} menit` }),
          h('button', { type: 'button', class: 'btn btn-primary', onclick: () => open(s.subjectId) }, 'Pilih'))))
        : h('div', { class: 'card' },
          h('p', { text: 'Belum ada mata ujian. Impor berkas mata ujian lewat Pengaturan.' }),
          h('button', { type: 'button', class: 'btn', onclick: () => app.show('settings') }, 'Buka Pengaturan'))),

    h('section', { class: 'landing-section' },
      h('h2', { text: 'Cara berlatih' }),
      h('ol', { class: 'landing-steps' },
        step('Pilih mata ujian dan paket', 'Mulai dari paket yang mudah, naik bertahap, lalu coba Simulasi Ujian dengan waktu penuh.'),
        step('Kerjakan dengan batas waktu', 'Jawaban tersimpan otomatis di perangkat Anda, juga saat internet terputus.'),
        step('Lihat nilai dan pembahasan', 'Pilihan ganda langsung dinilai. Esai dan kasus dinilai dengan bantuan AI pilihan Anda, memakai rubrik yang sudah disiapkan.'))),

    h('section', { class: 'landing-section landing-final' },
      h('h2', { text: 'Siap mencoba?' }),
      h('button', { type: 'button', class: 'btn btn-primary landing-cta', onclick: () => scrollTo('mata-ujian') }, 'Pilih mata ujian')),

    disclaimer());

  return { el };
}

// Ikon dari favicon dokumen: berkas ikon di situs, data URI di versi satu berkas.
function brandIcon() {
  const link = document.querySelector('link[rel="icon"]');
  return link ? link.href : 'icons/icon.svg';
}

function tile(title, text) {
  return h('div', { class: 'card landing-tile' }, h('h3', { text: title }), h('p', { text }));
}

function step(title, text) {
  return h('li', {}, h('strong', { text: title }), h('span', { text }));
}
