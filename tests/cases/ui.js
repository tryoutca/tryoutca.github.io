// Uji render tipe soal di DOM nyata (hanya browser: index.html?selftest).
import * as assert from './assert.js';
import { loadJson } from './env.js';
import { getType } from '../../js/types/registry.js';
import { reportSections } from '../../js/ui/report-view.js';
import { reportBlocks } from '../../js/export/report-blocks.js';
import { buildReport } from '../../js/core/report.js';
import { applyGradingResult, validateGradingResult } from '../../js/core/grading-io.js';
import { T0, sampleResult, submittedDemo } from '../fixtures/demo-graded.js';
import { landingPacks, packageFacts, renderLanding, subjectSummary } from '../../js/ui/landing.js';
import { Store, memoryBackend } from '../../js/core/storage.js';

const XSS = '<script>window.__xss = 1</script><img src=x onerror="window.__xss = 2">';

function sandbox() {
  const box = document.createElement('div');
  box.hidden = true;
  document.body.append(box);
  return box;
}

export default {
  name: 'Tampilan',
  cases: [
    {
      id: 'TS-16',
      browserOnly: true,
      name: 'laporan di layar: jawaban dan penilaian AI berisi <script> tampil sebagai teks',
      run: async () => {
        const pack = await loadJson('packs/demo/pack.json');
        const s = submittedDemo(pack);
        const essay = s.items.find((it) => it.type === 'essay');
        s.answers[essay.questionId].value = XSS;
        const result = await sampleResult(s);
        result.scores[0].strengths = XSS;
        result.overallFeedback = XSS;
        const v = await validateGradingResult(s, result);
        assert.ok(v.ok, v.errors && v.errors.map((e) => e.message).join('; '));
        await applyGradingResult(s, v, T0 + 1800000);
        const box = sandbox();
        try {
          window.__xss = 0;
          box.append(...reportSections(reportBlocks(buildReport(s, { pack }))));
          assert.equal(box.querySelectorAll('script, img').length, 0, 'elemen dari teks tersisip');
          assert.ok(box.textContent.includes('<script>window.__xss = 1</script>'));
          await new Promise((r) => setTimeout(r, 50));
          assert.equal(window.__xss, 0, 'skrip sisipan sempat berjalan');
        } finally {
          box.remove();
        }
      },
    },
    {
      id: 'TS-16',
      browserOnly: true,
      name: 'jawaban dan soal berisi <script> tampil sebagai teks',
      run: async () => {
        const pack = await loadJson('packs/demo/pack.json');
        const box = sandbox();
        try {
          window.__xss = 0;
          for (const q of pack.questions) {
            const evil = { ...q, stem: XSS, caseNarrative: q.caseNarrative ? XSS : undefined };
            if (evil.options) evil.options = evil.options.map((o) => ({ ...o, text: XSS }));
            const value = { mcq: q.answerKey, numeric: 48, essay: XSS, case: { a: XSS, b: XSS } }[q.type];
            const item = { questionId: q.id, type: q.type, optionOrder: ['A', 'B', 'C', 'D'] };
            const el = getType(q.type).render(evil, { item, value, readOnly: false, onChange: () => {} });
            box.append(el);
            assert.equal(el.querySelectorAll('script, img').length, 0, `${q.type}: elemen dari teks tersisip`);
            assert.ok(el.textContent.includes('<script>'), `${q.type}: teks harus tampil apa adanya`);
            const report = getType(q.type).renderReport(evil, value, item);
            assert.equal(report.querySelectorAll('script, img').length, 0, `${q.type}: laporan menyisipkan elemen`);
          }
          await new Promise((r) => setTimeout(r, 50));
          assert.equal(window.__xss, 0, 'skrip sisipan sempat berjalan');
        } finally {
          box.remove();
        }
      },
    },
    {
      browserOnly: true,
      name: 'render dan getAnswer setiap tipe soal',
      run: async () => {
        const pack = await loadJson('packs/demo/pack.json');
        const box = sandbox();
        try {
          for (const q of pack.questions) {
            const changes = [];
            const item = { questionId: q.id, type: q.type, optionOrder: ['C', 'A', 'D', 'B'] };
            const type = getType(q.type);
            const el = type.render(q, { item, value: null, readOnly: false, onChange: (v) => changes.push(v) });
            box.append(el);
            if (q.type === 'mcq') {
              const firstShown = el.querySelector('input[type=radio]');
              assert.equal(firstShown.value, 'C', 'posisi tampil pertama harus opsi asli C');
              assert.equal(el.querySelector('.option-letter').textContent, 'A');
              firstShown.click();
              assert.equal(type.getAnswer(el), 'C');
              assert.equal(changes.at(-1), 'C');
            } else if (q.type === 'numeric') {
              const input = el.querySelector('input');
              input.value = '47,8';
              input.dispatchEvent(new Event('input'));
              assert.equal(changes.at(-1), 47.8);
              assert.ok(el.textContent.includes('Terbaca: 47,8'));
            } else if (q.type === 'essay') {
              const area = el.querySelector('textarea');
              area.value = 'tiga kata saja';
              area.dispatchEvent(new Event('input'));
              assert.equal(changes.at(-1), 'tiga kata saja');
              assert.ok(el.textContent.includes('3 kata'));
            } else {
              const areas = el.querySelectorAll('textarea[data-sub]');
              assert.equal(areas.length, 2);
              areas[1].value = 'jawaban b';
              areas[1].dispatchEvent(new Event('input'));
              assert.deepEqual(changes.at(-1), { a: '', b: 'jawaban b' });
              assert.ok(type.isAnswered(changes.at(-1)));
              assert.equal(type.exportForGrading(q, changes.at(-1)).answer, '[a]\n\n[b] jawaban b');
              assert.equal(el.querySelector('td.num').textContent, '820');
            }
          }
        } finally {
          box.remove();
        }
      },
    },
    {
      name: 'halaman awal: ringkasan mata ujian dari pack, demo disembunyikan bila ada pack lain (D-103)',
      run: async () => {
        const demo = await loadJson('packs/demo/pack.json');
        const pk = await loadJson('packs/pk/pack.json');
        const s = subjectSummary(pk);
        assert.equal(s.topics, pk.topics.length);
        assert.equal(s.live, pk.questions.filter((q) => q.lifecycle.status === 'LIVE').length);
        assert.equal(s.packages, pk.packages.length);
        assert.equal(s.longest, Math.max(...pk.packages.map((p) => p.durationMinutes)));
        const entries = [{ pack: demo }, { pack: pk }];
        assert.deepEqual(landingPacks(entries).map((p) => p.subjectId), ['pk']);
        assert.deepEqual(landingPacks([{ pack: demo }]).map((p) => p.subjectId), ['demo'], 'demo tampil bila satu-satunya');
        // Fakta "Sebelum Anda mulai" dihitung dari paket, bukan placeholder (D-123).
        const f = packageFacts([pk]);
        const mins = pk.packages.map((p) => p.durationMinutes);
        const counts = pk.packages.map((p) => p.sections.reduce((n, s) => n + s.count, 0));
        assert.equal(f.duration, `${Math.min(...mins)}–${Math.max(...mins)} menit`);
        assert.equal(f.questions, `${Math.min(...counts)}–${Math.max(...counts)} soal`);
        assert.equal(f.mostQuestions, Math.max(...counts));
        assert.ok(f.forms.startsWith('Pilihan ganda'));
        assert.equal(packageFacts([]), null);
      },
    },
    {
      browserOnly: true,
      name: 'halaman awal: hero, level, contoh soal, tombol mulai membuka beranda mata ujian itu (D-103, D-123)',
      run: async () => {
        const msk = await loadJson('packs/msk/pack.json');
        const pk = await loadJson('packs/pk/pack.json');
        const calls = [];
        const app = {
          packs: [{ pack: msk }, { pack: pk }],
          store: new Store(memoryBackend()),
          selectSubject: (id) => calls.push(['select', id]),
          show: (name) => calls.push(['show', name]),
        };
        const box = sandbox();
        try {
          const { el } = renderLanding(app);
          box.append(el);
          const text = el.textContent;
          assert.ok(text.includes('Rasakan suasana ujian CA') && text.includes('Level Advanced'));
          assert.ok(text.includes(msk.subjectName) && text.includes(pk.subjectName));
          assert.ok(!text.includes('belum selesai'), 'tanpa sesi aktif tidak ada kartu lanjutkan');
          assert.ok(!/\[[A-Z /]+\]/.test(text), 'tidak ada placeholder desain seperti [DURASI]');
          // Contoh soal: pilih jawaban, periksa, pembahasan tampil.
          el.querySelector('.lp-opt').click();
          assert.ok(el.textContent.includes('1 dari 5 soal terjawab'));
          el.querySelector('.lp-check').click();
          assert.ok(el.textContent.includes('Skor Anda:') && el.textContent.includes('Jawaban benar:'));
          const picks = [...el.querySelectorAll('.landing-subject button')];
          assert.equal(picks.length, 2);
          picks[1].click();
          assert.deepEqual(calls, [['select', pk.subjectId], ['show', 'home']]);
        } finally {
          box.remove();
        }
      },
    },
  ],
};
