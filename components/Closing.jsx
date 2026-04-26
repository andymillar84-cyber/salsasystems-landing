// Salsa Systems — Closing CTA
const Closing = ({ onBook }) => {
  // Drive the two corner blocks from scroll progress through this section.
  // Charcoal slides in from the left; teal slides in from the top.
  // Tied to viewport overlap so they retract when you scroll back up.
  React.useEffect(() => {
    const section = document.querySelector('.closing');
    if (!section) return;
    const charcoal = section.querySelector('.closing-block-charcoal');
    const teal = section.querySelector('.closing-block-teal');
    if (!charcoal || !teal) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // 0 when section is fully below viewport, 1 when its top reaches ~30% of viewport
      const start = vh;          // top of section at bottom of viewport => 0
      const end   = vh * 0.3;    // top of section at 30% from top of viewport => 1
      const t = Math.max(0, Math.min(1, (start - r.top) / (start - end)));
      charcoal.style.transform = `translateX(${(t - 1) * 100}%)`;
      teal.style.transform     = `translateY(${(t - 1) * 100}%)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
  <section className="closing" id="contact">
    <span className="closing-block-charcoal" aria-hidden="true"></span>
    <span className="closing-block-teal" aria-hidden="true"></span>
    <span className="closing-arc a1" aria-hidden="true"></span>
    <span className="closing-arc a2" aria-hidden="true"></span>
    <span className="closing-arc a3" aria-hidden="true"></span>
    <ShapeSmile className="shape-deco shape-smile-light" color="#FBFBF2" strokeWidth={50} />
    <ShapeDisk className="shape-deco shape-disk-light" color="#FBFBF2" />
    <ShapeRing className="shape-deco shape-ring-light" color="#FBFBF2" strokeWidth={6} />
    <div className="closing-inner">
      <div className="reveal">
        <span className="eyebrow eyebrow-row">
          <span className="dot"></span>
          The part where you book the call
        </span>
        <h2>Talk with a real human.</h2>
        <p>
          No slide deck. No pressure. If there's nothing in your clinic worth
          automating, we'll say so and send you on your way with a nice cup of tea
          (metaphorically — it's a video call).
        </p>
        <div className="closing-actions">
          <button className="btn btn-primary btn-lg" onClick={onBook}>
            Book a call
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
  );
};


const Footer = ({ logoOutline = "thick-dark" }) => {
  const [theme, setTheme] = React.useState(() => document.documentElement.getAttribute('data-theme') || 'light');
  React.useEffect(() => {
    const obs = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute('data-theme') || 'light');
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);
  return (
    <footer className="footer footer-tight" id="about" style={{ padding: "8px 0px 40px" }}>
    <div className="footer-inner footer-inner-centered" style={{ padding: "0px 40px 5px" }}>
      <div className="footer-brand footer-brand-centered">
        <a className="brand" href="#">
          <SalsaLogoMark size={32} outlineStyle={logoOutline} theme={theme} />
          <span>Salsa Systems</span>
        </a>
      </div>
    </div>
    <div className="footer-bottom footer-bottom-centered" style={{ margin: "5px 152.5px 0px" }}>
      <span>© 2026 Salsa Systems</span>
      <span className="footer-legal-links">
        <a href="#">Privacy</a>
        <span className="sep">·</span>
        <a href="#">Terms</a>
      </span>
    </div>
  </footer>);

};

window.SalsaClosing = Closing;
window.SalsaFooter = Footer;