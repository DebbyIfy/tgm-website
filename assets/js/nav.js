document.querySelectorAll('.nav').forEach(function (nav) {
  var toggle = nav.querySelector('.nav-toggle');
  var links = nav.querySelector('.nav-links');
  if (!toggle || !links) return;

  function setOpen(isOpen) {
    links.classList.toggle('is-open', isOpen);
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  }

  toggle.addEventListener('click', function () {
    setOpen(!links.classList.contains('is-open'));
  });

  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
});

(function () {
  var overlay = document.createElement('div');
  overlay.className = 'exit-modal-overlay';
  overlay.innerHTML =
    '<div class="exit-modal">' +
      '<h3>You\'re leaving That Good Media</h3>' +
      '<p>You\'re about to visit <strong>TGM Academy</strong>, which will open in a new tab.</p>' +
      '<div class="exit-modal-actions">' +
        '<button class="exit-modal-cancel">Stay here</button>' +
        '<button class="exit-modal-go">Go to Academy</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  var style = document.createElement('style');
  style.textContent =
    '.exit-modal-overlay{display:none;position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.6);backdrop-filter:blur(6px);align-items:center;justify-content:center}' +
    '.exit-modal-overlay.is-open{display:flex}' +
    '.exit-modal{background:#fff;border-radius:12px;padding:clamp(28px,4vw,42px);max-width:420px;width:90%;text-align:center;box-shadow:0 24px 80px rgba(0,0,0,.2)}' +
    '.exit-modal h3{margin:0 0 10px;font-size:22px}' +
    '.exit-modal p{margin:0 0 24px;color:#6b665e;font-size:15px;line-height:1.5}' +
    '.exit-modal strong{color:#080808}' +
    '.exit-modal-actions{display:flex;gap:12px;justify-content:center}' +
    '.exit-modal-cancel,.exit-modal-go{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 22px;border-radius:999px;font-size:14px;font-weight:700;cursor:pointer;transition:transform .2s ease,background .2s ease}' +
    '.exit-modal-cancel{background:transparent;border:1px solid rgba(8,8,8,.18);color:#080808}' +
    '.exit-modal-cancel:hover{background:rgba(8,8,8,.06);transform:translateY(-1px)}' +
    '.exit-modal-go{background:#080808;border:1px solid #080808;color:#fff;text-decoration:none}' +
    '.exit-modal-go:hover{background:#7145a4;border-color:#7145a4;transform:translateY(-1px)}';
  document.head.appendChild(style);

  var STORAGE_KEY = 'tgm_academy_visited';

  function close() { overlay.classList.remove('is-open'); }

  overlay.querySelector('.exit-modal-cancel').addEventListener('click', close);
  overlay.querySelector('.exit-modal-go').addEventListener('click', function () {
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
    close();
    window.open('http://www.tgmacademy.org/', '_blank', 'noopener,noreferrer');
  });
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
  });

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href*="tgmacademy.org"]');
    if (!link || overlay.contains(link)) return;
    e.preventDefault();
    var seen = false;
    try { seen = localStorage.getItem(STORAGE_KEY) === '1'; } catch (e) {}
    if (seen) {
      window.open('http://www.tgmacademy.org/', '_blank', 'noopener,noreferrer');
    } else {
      overlay.classList.add('is-open');
    }
  });
})();
