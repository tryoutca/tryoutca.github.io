// Halaman awal (D-103, desain baru D-120): pengantar sebelum peserta memilih
// mata ujian. Angka (durasi, jumlah soal, bentuk soal) dihitung dari pack,
// tanpa teks khusus satu mata ujian (SPEC 4), kecuali contoh soal pemanasan
// di landing-samples.js. Pack demo hanya tampil bila tidak ada pack lain.
// Semua teks lewat textContent; ikon SVG dibuat dengan createElementNS.

import { h, append, clear } from './dom.js';
import { DISCLAIMER, secondaryMenu } from './layout.js';
import { loadActiveSession } from '../core/session-store.js';
import { sebBadge } from '../platform/seb.js';
import { LANDING_SAMPLES } from './landing-samples.js';

const LETTERS = ['A', 'B', 'C', 'D'];
const TYPE_NAMES = { mcq: 'pilihan ganda', numeric: 'hitungan', essay: 'esai', case: 'kasus' };

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

// Fakta "Sebelum Anda mulai" dari paket semua pack: rentang durasi, rentang
// jumlah soal per paket, dan bentuk soal yang dipakai (D-120).
export function packageFacts(packs) {
  const pkgs = packs.flatMap((p) => p.packages);
  if (!pkgs.length) return null;
  const range = (xs, unit) => {
    const lo = Math.min(...xs);
    const hi = Math.max(...xs);
    return lo === hi ? `${lo} ${unit}` : `${lo}–${hi} ${unit}`;
  };
  const counts = pkgs.map((p) => p.sections.reduce((n, s) => n + s.count, 0));
  const types = Object.keys(TYPE_NAMES).filter((t) => pkgs.some((p) => p.sections.some((s) => s.type === t)));
  const forms = types.map((t) => TYPE_NAMES[t]).join(', ');
  return {
    duration: range(pkgs.map((p) => p.durationMinutes), 'menit'),
    questions: range(counts, 'soal'),
    forms: forms.charAt(0).toUpperCase() + forms.slice(1),
    longest: Math.max(...pkgs.map((p) => p.durationMinutes)),
    mostQuestions: Math.max(...counts),
  };
}

export function renderLanding(app) {
  const packs = landingPacks(app.packs);
  const summaries = packs.map(subjectSummary);
  const facts = packageFacts(packs);
  const samples = summaries.filter((s) => LANDING_SAMPLES[s.subjectId]);
  const active = app.packs.map(({ pack }) => pack).find((p) => {
    const a = loadActiveSession(app.store, p.subjectId);
    return a && a.ok;
  });

  const open = (subjectId) => {
    app.selectSubject(subjectId);
    app.show('home');
  };
  const scrollTo = (id) => el.querySelector(`#${id}`)?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  const navLink = (label, id) => h('button', { type: 'button', class: 'lp-navlink', onclick: () => scrollTo(id) }, label);
  const arrow = (size = 18) => icon(size, [['path', { d: 'M5 12h14M13 6l6 6-6 6' }]], { stroke: 'currentColor', 'stroke-width': 2.4 });

  // ---------- Kepala dan hero ----------
  const preview = heroPreview(samples[0], facts);
  const top = h('header', { class: 'lp-top' },
    h('nav', { class: 'lp-wrap lp-nav', 'aria-label': 'Navigasi utama' },
      h('span', { class: 'lp-brand' }, brandMark(50, 'dark'), brandText()),
      h('div', { class: 'lp-navlinks' },
        navLink('Level ujian', 'level'),
        samples.length ? navLink('Contoh soal', 'contoh') : null,
        navLink('Cara kerja', 'cara'),
        navLink('FAQ', 'faq'),
        h('button', { type: 'button', class: 'lp-navlink', onclick: () => app.show('guide') }, 'Panduan'),
        h('button', { type: 'button', class: 'lp-btn lp-btn-amber', onclick: () => scrollTo('mulai') }, 'Mulai Tryout'),
        sebBadge(),
        secondaryMenu(app))),
    h('div', { class: 'lp-wrap lp-hero' },
      h('div', { class: 'lp-hero-copy' },
        h('span', { class: 'lp-pill', text: 'TRYOUT PERSIAPAN UJIAN CA · GRATIS' }),
        h('h1', { text: 'Rasakan suasana ujian CA sebelum hari-H.' }),
        h('p', { text: 'tryoutCA adalah simulasi untuk persiapan Ujian Chartered Accountant (CA) yang bisa Anda kerjakan gratis. Level Advanced sudah tersedia. Ukur kesiapan, biasakan diri dengan tekanan waktu, dan temukan topik yang masih perlu diperkuat.' }),
        h('div', { class: 'lp-actions' },
          h('button', { type: 'button', class: 'lp-btn lp-btn-amber lp-btn-lg', onclick: () => scrollTo('mulai') }, 'Mulai Tryout Gratis', arrow()),
          samples.length ? h('button', { type: 'button', class: 'lp-btn lp-btn-ghost lp-btn-lg', onclick: () => scrollTo('contoh') }, 'Coba 5 contoh soal') : null),
        h('small', { text: 'Tanpa biaya dan tanpa akun. Untuk mahasiswa PPAk dan praktisi yang sedang menyiapkan ujian CA.' })),
      preview));

  // ---------- Level ujian ----------
  const level = h('section', { id: 'level', class: 'lp-wrap lp-block lp-first' },
    sectionHead('Level ujian', 'Mulai dari Level Advanced. Level Profesional menyusul.'),
    h('div', { class: 'lp-grid' },
      h('article', { class: 'lp-card lp-level-on' },
        h('div', { class: 'lp-card-head' }, h('h3', { text: 'Level Advanced' }), h('span', { class: 'lp-badge lp-badge-on', text: 'Tersedia' })),
        h('p', { text: 'Bank soal sudah siap dikerjakan sekarang, gratis.' }),
        summaries.length ? h('ul', { class: 'lp-checks' }, summaries.map((s) => h('li', {}, tick(20), h('span', {},
          h('strong', { text: s.name }), h('span', { class: 'lp-meta', text: ` · ${s.live} soal · ${s.packages} paket` }))))) : null,
        h('button', { type: 'button', class: 'lp-btn lp-btn-ink', onclick: () => scrollTo('mulai') }, 'Kerjakan tryout Advanced')),
      h('article', { class: 'lp-card lp-level-off' },
        h('div', { class: 'lp-card-head' }, h('h3', { text: 'Level Profesional' }), h('span', { class: 'lp-badge lp-badge-dev', text: 'Dalam pengembangan' })),
        h('p', { text: 'Soal untuk Level Profesional sedang disusun. Kami akan mengumumkannya begitu siap.' }))));

  // ---------- Contoh soal ----------
  const contoh = samples.length ? sampleSection(samples, open) : null;

  // ---------- Cara kerja ----------
  const cara = h('section', { id: 'cara', class: 'lp-wrap lp-block' },
    sectionHead('Cara kerja', 'Tiga langkah, langsung kerjakan.'),
    h('ol', { class: 'lp-grid lp-steps' },
      stepCard('01', 'Pilih level dan mata ujian', 'Saat ini tersedia Level Advanced. Pilih mata ujian dan paket, dari Level 1 yang mudah sampai Simulasi Ujian dengan waktu penuh.'),
      stepCard('02', 'Kerjakan dengan waktu berjalan', 'Layar dibuat mirip suasana ujian: timer, navigasi soal, dan fokus penuh. Jawaban tersimpan otomatis di perangkat Anda.'),
      stepCard('03', 'Lihat hasil dan evaluasi', 'Pilihan ganda langsung dinilai lengkap dengan kunci dan pembahasan. Esai dan kasus dinilai dengan bantuan AI pilihan Anda memakai rubrik yang sudah disiapkan.')));

  // ---------- Sebelum mulai ----------
  const mulai = h('section', { id: 'mulai', class: 'lp-wrap lp-block lp-last' },
    h('div', { class: 'lp-ready' },
      h('div', { class: 'lp-ready-copy' },
        h('span', { class: 'lp-eyebrow', text: 'Sebelum Anda mulai' }),
        h('h2', { text: 'Siapkan diri seperti di ruang ujian.' }),
        h('p', { text: 'Hasil tryout paling bermanfaat bila dikerjakan sekali duduk, tanpa membuka catatan.' }),
        facts ? h('dl', { class: 'lp-facts' },
          fact('Durasi per paket', facts.duration, true),
          fact('Jumlah soal per paket', facts.questions, true),
          fact('Bentuk soal', facts.forms),
          fact('Biaya', 'Gratis', false, 'lp-free')) : null),
      h('div', { class: 'lp-checklist' },
        h('h3', { text: 'Checklist singkat' }),
        h('ul', {},
          checkItem('Sediakan waktu tanpa gangguan selama durasi tryout.'),
          checkItem('Pastikan perangkat dalam kondisi siap. Setelah halaman terbuka, tryout tetap berjalan walau internet terputus.'),
          checkItem('Tutup catatan dan buku agar hasil mencerminkan kesiapan Anda.'),
          checkItem('Timer berjalan begitu Anda menekan tombol mulai.')),
        summaries.length
          ? h('div', { class: 'lp-start' },
            h('p', { class: 'lp-start-label', text: 'Saya siap, mulai tryout:' }),
            summaries.map((s) => h('div', { class: 'landing-subject' },
              h('button', { type: 'button', class: 'lp-btn lp-btn-amber lp-btn-start', onclick: () => open(s.subjectId) }, h('span', { text: s.name }), arrow(20)))))
          : h('div', { class: 'lp-start' },
            h('p', { text: 'Belum ada mata ujian. Impor berkas mata ujian lewat Pengaturan.' }),
            h('button', { type: 'button', class: 'lp-btn lp-btn-ink', onclick: () => app.show('settings') }, 'Buka Pengaturan')))));

  // ---------- FAQ ----------
  const faq = h('section', { id: 'faq', class: 'lp-faq' },
    h('h2', { text: 'Pertanyaan umum' }),
    h('div', { class: 'lp-faq-list' },
      faqItem('Apakah tryoutCA benar-benar gratis?', 'Ya. Tryout bisa dikerjakan tanpa biaya dan tanpa membuat akun.', true),
      faqItem('Kapan Level Profesional tersedia?', 'Soal Level Profesional sedang dalam pengembangan. Kabar rilisnya akan diumumkan di halaman ini.'),
      faqItem('Apakah soal tryout sama dengan soal ujian resmi?', 'Tidak. Soal disusun untuk latihan dan mengikuti cakupan materi ujian, bukan bocoran soal resmi.'),
      faqItem('Perangkat apa yang bisa dipakai?', 'Komputer Windows 10/11 dengan Chrome atau Edge, serta iPhone dan iPad dengan Safari (iOS/iPadOS 16 ke atas). Jawaban dan riwayat tersimpan di perangkat yang Anda pakai.'),
      faqItem('Di mana jadwal dan ketentuan resmi Ujian CA?', null, false,
        h('p', {}, 'Jadwal, syarat, dan ketentuan resmi ujian dapat dilihat di ', h('a', { href: 'https://iaiglobal.or.id', target: '_blank', rel: 'noopener' }, 'situs IAI'), '.'))));

  const foot = h('footer', { class: 'lp-footer' },
    h('div', { class: 'lp-wrap lp-foot' },
      h('span', { class: 'lp-brand' }, brandMark(36, 'light'), brandText()),
      h('div', { class: 'lp-foot-text' },
        h('p', { text: 'tryoutCA adalah sarana latihan independen untuk persiapan Ujian CA dan tidak berafiliasi dengan, maupun didukung oleh, Ikatan Akuntan Indonesia (IAI) selaku penyelenggara ujian. Nama "Chartered Accountant" dan "CA" digunakan semata untuk menjelaskan ujian yang dilatihkan.' }),
        h('p', { class: 'disclaimer', text: DISCLAIMER }))));

  const resume = active ? h('div', { class: 'lp-wrap' }, h('div', { class: 'lp-resume' },
    h('p', { text: `Ada ujian ${active.subjectName} yang belum selesai.` }),
    h('button', { type: 'button', class: 'lp-btn lp-btn-amber', onclick: () => open(active.subjectId) }, 'Lanjutkan ujian'))) : null;

  const el = h('div', { class: 'screen landing lp' }, top, h('main', {}, resume, level, contoh, cara, mulai, faq), foot);
  return { el };
}

// Pratinjau layar tryout di hero, diisi contoh soal pertama dan angka paket.
function heroPreview(sample, facts) {
  if (!sample) return null;
  const q = LANDING_SAMPLES[sample.subjectId].questions[0];
  const minutes = facts ? facts.longest : sample.longest;
  const clock = `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}:00`;
  return h('figure', { class: 'lp-preview', 'aria-label': 'Pratinjau tampilan layar tryout' },
    h('div', { class: 'lp-preview-card' },
      h('div', { class: 'lp-preview-bar' }, h('span', { text: `Level Advanced · ${sample.name}` }), h('span', { class: 'lp-timer', text: `⏱ ${clock}` })),
      h('div', { class: 'lp-preview-body' },
        h('span', { class: 'lp-meta', text: `SOAL 1 DARI ${facts ? facts.mostQuestions : 5}` }),
        h('p', { class: 'lp-q-text', text: q.text }),
        q.options.map((o, i) => h('div', { class: i === q.correct ? 'lp-preview-opt lp-sel' : 'lp-preview-opt' }, h('b', { text: LETTERS[i] }), h('span', { text: o }))),
        h('div', { class: 'lp-preview-nav' }, h('span', { text: '◂ Sebelumnya' }), h('b', { text: 'Berikutnya ▸' })))));
}

// Pemanasan 5 soal per mata ujian: pilih jawaban, periksa, lihat pembahasan.
function sampleSection(samples, open) {
  let state = { subject: samples[0].subjectId, answers: {}, checked: false };
  const quiz = h('div', { id: 'latihan', class: 'lp-quiz', 'aria-live': 'polite' });
  const setSubject = (id) => { state = { subject: id, answers: {}, checked: false }; draw(); };

  function draw() {
    const s = samples.find((x) => x.subjectId === state.subject);
    const qs = LANDING_SAMPLES[s.subjectId].questions;
    const answered = qs.filter((_, i) => state.answers[i] !== undefined).length;
    const score = qs.filter((q, i) => state.answers[i] === q.correct).length;
    append(clear(quiz), [
      h('div', { class: 'lp-tabs', role: 'group', 'aria-label': 'Pilih mata ujian' },
        samples.map((x) => h('button', { type: 'button', class: 'lp-tab', 'aria-pressed': String(x.subjectId === state.subject), onclick: () => setSubject(x.subjectId) }, x.name))),
      h('div', { class: 'lp-quiz-status' }, h('b', { text: s.name }), h('span', { text: `${answered} dari ${qs.length} soal terjawab` })),
      h('ol', { class: 'lp-qlist' }, qs.map((q, i) => questionItem(q, i))),
      state.checked ? null : h('button', { type: 'button', class: 'lp-btn lp-btn-amber lp-btn-lg lp-check', onclick: () => { state.checked = true; draw(); } }, 'Periksa jawaban'),
      state.checked ? h('div', { class: 'lp-result' },
        h('span', { class: 'lp-score', text: `Skor Anda: ${score} dari ${qs.length}` }),
        h('p', { text: 'Siap mencoba dalam suasana ujian sungguhan, lengkap dengan timer?' }),
        h('div', { class: 'lp-actions' },
          h('button', { type: 'button', class: 'lp-btn lp-btn-amber', onclick: () => open(s.subjectId) }, `Mulai tryout ${s.name}`),
          h('button', { type: 'button', class: 'lp-btn lp-btn-ghost', onclick: () => setSubject(s.subjectId) }, 'Ulangi soal'))) : null,
      h('p', { class: 'lp-note', text: 'Contoh soal disusun oleh tryoutCA untuk latihan dan bukan soal ujian resmi.' })]);
  }

  function questionItem(q, i) {
    const sel = state.answers[i];
    const ok = sel === q.correct;
    return h('li', { class: 'lp-q' },
      h('span', { class: 'lp-meta', text: `SOAL ${i + 1}` }),
      h('p', { class: 'lp-q-text', text: q.text }),
      h('div', { class: 'lp-opts', role: 'group', 'aria-label': `Pilihan jawaban soal ${i + 1}` },
        q.options.map((text, j) => {
          let cls = 'lp-opt';
          if (state.checked && j === q.correct) cls += ' lp-correct';
          else if (state.checked && sel === j) cls += ' lp-wrong';
          return h('button', {
            type: 'button', class: cls, disabled: state.checked, 'aria-pressed': String(!state.checked && sel === j),
            onclick: () => { if (!state.checked) { state.answers[i] = j; draw(); } },
          }, h('b', { text: LETTERS[j] }), h('span', { text }));
        })),
      state.checked ? h('div', { class: 'lp-explain' },
        h('b', { class: ok ? 'lp-v-ok' : 'lp-v-bad', text: `${sel === undefined ? 'Belum dijawab.' : ok ? 'Benar.' : 'Belum tepat.'} Jawaban benar: ${LETTERS[q.correct]}` }),
        h('span', { text: q.explanation })) : null);
  }

  draw();
  return h('section', { id: 'contoh', class: 'lp-wrap lp-block' },
    sectionHead('Coba dulu', '5 soal mudah per mata ujian, tanpa timer.', 'Belum yakin langsung ikut tryout penuh? Pemanasan dulu, lengkap dengan pembahasan.'),
    h('div', { class: 'lp-grid' }, samples.map((s) => h('article', { class: 'lp-card' },
      h('span', { class: 'lp-meta', text: 'LEVEL ADVANCED · 5 SOAL' }),
      h('h3', { class: 'lp-card-title', text: s.name }),
      h('p', { text: LANDING_SAMPLES[s.subjectId].blurb }),
      h('button', {
        type: 'button', class: 'lp-btn lp-btn-ink',
        onclick: () => { setSubject(s.subjectId); quiz.scrollIntoView({ block: 'start', behavior: 'smooth' }); },
      }, 'Coba 5 soal mudah')))),
    quiz);
}

function sectionHead(eyebrow, title, lead) {
  return h('div', { class: 'lp-section-head' },
    h('span', { class: 'lp-eyebrow', text: eyebrow }),
    h('h2', { text: title }),
    lead ? h('p', { class: 'lp-lead', text: lead }) : null);
}

function stepCard(num, title, text) {
  return h('li', { class: 'lp-card' }, h('span', { class: 'lp-step-num', text: num }), h('h3', { text: title }), h('p', { text }));
}

function fact(label, value, mono = false, cls = '') {
  return h('div', {}, h('dt', { text: label }), h('dd', { class: [mono ? 'lp-num' : '', cls].join(' ').trim() || null, text: value }));
}

function checkItem(text) {
  return h('li', {}, icon(22, [['rect', { x: 3, y: 3, width: 18, height: 18, rx: 4 }], ['path', { d: 'M8 12l3 3 5-6' }]], { stroke: '#0F5C4A', 'stroke-width': 2.2 }), h('span', { text }));
}

function faqItem(question, answer, open = false, body = null) {
  return h('details', { open }, h('summary', { text: question }), body || h('p', { text: answer }));
}

function tick(size) {
  return icon(size, [['path', { d: 'M5 12l5 5L20 7' }]], { stroke: '#0F5C4A', 'stroke-width': 2.4 });
}

function brandText() {
  return h('span', { class: 'lp-brand-text' },
    h('span', { class: 'lp-brand-name' }, 'tryout', h('span', { text: 'CA' })),
    h('span', { class: 'lp-brand-tag', text: 'Tryout Ujian Chartered Accountant' }));
}

// Logo: lingkaran stopwatch amber dengan tanda centang. Varian 'dark' untuk latar gelap.
function brandMark(size, variant) {
  const ring = variant === 'dark' ? '#E8B04B' : '#C98A14';
  const check = variant === 'dark' ? '#F4F5F1' : '#0F2A24';
  return svg('svg', { 'aria-hidden': 'true', width: size, height: size, viewBox: '0 0 40 40', fill: 'none', class: 'lp-logo' },
    svg('circle', { cx: 20, cy: 22, r: 14, stroke: ring, 'stroke-width': 3.5, 'stroke-dasharray': '70 18', 'stroke-linecap': 'round', transform: 'rotate(-60 20 22)' }),
    svg('rect', { x: 17, y: 2.5, width: 6, height: 4.5, rx: 1.5, fill: ring }),
    svg('path', { d: 'M13.5 22.5l4.5 4.5 8.5-9', stroke: check, 'stroke-width': 3.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }));
}

function icon(size, shapes, attrs) {
  return svg('svg', { 'aria-hidden': 'true', width: size, height: size, viewBox: '0 0 24 24', fill: 'none', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', ...attrs },
    shapes.map(([tag, a]) => svg(tag, a)));
}

function svg(tag, attrs, ...children) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v));
  for (const c of children.flat()) el.append(c);
  return el;
}
