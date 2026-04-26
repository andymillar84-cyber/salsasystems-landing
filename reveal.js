// Salsa Systems — subtle scroll-reveal
// Usage: add className="reveal" to any element; it fades/slides in once in view.
// Small amounts on purpose — 10px rise, 500ms, once only.
(function () {
  const init = () => {
    const els = document.querySelectorAll('.reveal:not(.reveal-in)');
    if (!els.length) return;

    // Respect user preference — no motion if they've asked for less
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      els.forEach(el => el.classList.add('reveal-in'));
      return;
    }

    const vh = window.innerHeight || document.documentElement.clientHeight;
    const reveal = (el) => el.classList.add('reveal-in');

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08,
    });

    els.forEach(el => {
      // Eagerly reveal anything already on-screen so above-the-fold content
      // never stays at opacity:0 if the observer hasn't fired yet.
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) {
        reveal(el);
      } else {
        io.observe(el);
      }
    });
  };

  // Run after initial render + on any later DOM additions
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  // Re-scan a few times as React mounts components
  setTimeout(init, 150);
  setTimeout(init, 400);
  setTimeout(init, 800);
  setTimeout(init, 1500);
  setTimeout(init, 3000);

  // Safety net: anything still hidden after 4s, reveal it.
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.reveal-in)').forEach(el => el.classList.add('reveal-in'));
  }, 4000);

  // Expose for manual kicks
  window.__salsaReveal = init;
})();
