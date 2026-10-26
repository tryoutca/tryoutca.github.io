// Pesan bantuan saat aplikasi gagal atau terlalu lama terbuka (D-105).
// Skrip klasik (bukan modul) dan ditulis tanpa sintaks baru agar tetap berjalan di
// browser lama yang tidak dapat menjalankan aplikasi. Bekerja hanya selama layar
// memuat (#boot di index.html) masih tampil; aplikasi menghapusnya saat layar
// pertama muncul, sekaligus menghapus pesan ini.
(function () {
  var WAIT_MS = window.CASIM_BOOT_WAIT_MS || 15000; // dapat diperpendek khusus tes
  var errors = [];
  var shown = false;

  function boot() { return document.getElementById('boot'); }

  function el(tag, text, className) {
    var node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function show(reason) {
    var host = boot();
    if (!host || shown) return;
    shown = true;
    var card = el('div', null, 'card boot-help');
    card.setAttribute('role', 'alert');
    card.appendChild(el('h2', reason === 'old'
      ? 'Browser ini belum dapat membuka aplikasi'
      : 'Aplikasi belum juga terbuka'));
    card.appendChild(el('p', 'Coba langkah berikut:'));
    var list = el('ol');
    list.appendChild(el('li', 'Muat ulang halaman ini.'));
    list.appendChild(el('li', 'Buka tautan langsung di Chrome, Edge, atau Safari versi terbaru, bukan dari dalam aplikasi lain. Jangan memakai mode penyamaran (incognito).'));
    list.appendChild(el('li', 'Perbarui browser atau sistem perangkat bila sudah lama tidak diperbarui.'));
    list.appendChild(el('li', 'Coba jaringan internet lain. Sebagian jaringan kantor atau kampus memblokir situs ini.'));
    card.appendChild(list);
    var button = el('button', 'Muat ulang', 'btn btn-primary');
    button.type = 'button';
    button.onclick = function () { location.reload(); };
    card.appendChild(button);
    card.appendChild(el('p', 'Bila masih gagal, kirim tangkapan layar halaman ini ke pengelola.', 'hint'));
    var info = 'Info untuk pengelola: ' + (reason === 'old' ? 'browser tanpa dukungan modul' : reason === 'error' ? 'berkas gagal dimuat' : 'lebih dari ' + (WAIT_MS / 1000) + ' detik')
      + (errors.length ? ' · ' + errors.slice(0, 3).join(' · ') : '') + ' · ' + navigator.userAgent;
    card.appendChild(el('p', info, 'hint boot-info'));
    var loading = document.getElementById('boot-loading');
    if (loading) loading.hidden = true;
    host.insertBefore(card, host.firstChild);
  }

  window.addEventListener('error', function (e) {
    var target = e.target;
    if (target && target.tagName === 'SCRIPT') {
      errors.push('gagal memuat ' + (target.getAttribute('src') || 'skrip'));
      show('error');
    } else if (e.message) {
      errors.push(String(e.message).slice(0, 160));
    }
  }, true);

  window.addEventListener('unhandledrejection', function (e) {
    var r = e.reason;
    errors.push(String((r && r.message) || r).slice(0, 160));
  });

  // Browser tanpa dukungan modul tidak akan pernah menjalankan aplikasi.
  if (!('noModule' in document.createElement('script'))) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { show('old'); });
    else show('old');
    return;
  }

  setTimeout(function () { show('slow'); }, WAIT_MS);
}());
