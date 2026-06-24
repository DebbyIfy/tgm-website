(function () {
  var selectors = [
    '.eyebrow', 'h1', '.hero p', '.hero-copy',
    '.section-label', '.section-title', '.lead', '.intro-note',
    '.card', '.service-row', '.service-card',
    '.project-card', '.case',
    '.testimonial-card', '.process-card',
    '.metric', '.cta',
    '.contact-item', '.form',
    '.about-story-images img', '.gallery-group img', '.photos-grid img',
    '.split-image', '.fact'
  ];

  var items = document.querySelectorAll(selectors.join(','));

  items.forEach(function (el, i) {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
      var siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      var pos = siblings.indexOf(el) % 4;
      if (pos > 0 && pos <= 3) el.classList.add('reveal-delay-' + pos);
    }
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();
