// Salsa Systems — Hero
const Hero = ({ onBook, inverted, headline, ctaLabel }) => {
  const headlineLines = (headline || "Less admin.\nMore patients.").split("\n");

  // Scroll-driven motion: blocks track scroll position continuously.
  // Fully in when hero is centered in viewport; recede as user scrolls away
  // (in either direction). No load-in timer — purely scroll-tied.
  React.useEffect(() => {
    const section = document.querySelector('.hero');
    if (!section) return;
    const copper = section.querySelector('.hero-block-copper');
    const black  = section.querySelector('.hero-block-black');
    const teal   = section.querySelector('.hero-title-line');
    if (!copper || !black || !teal) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Map scroll position to progress: full at section top ~ -200px (slightly scrolled past top),
      // recedes as section moves out of view in either direction.
      const scrolled = Math.max(0, -r.top); // 0 at the top of page; grows as user scrolls down
      // Fully in at top of page; recedes as section scrolls up.
      const ramp = section.offsetHeight * 0.7;
      const t = Math.max(0, Math.min(1, 1 - scrolled / ramp));
      copper.style.transform = `translateX(${(1 - t) * 100}%)`;
      const tBlack = Math.max(0, Math.min(1, t * 1.05 - 0.05));
      black.style.transform  = `translateX(${(1 - tBlack) * 220}%)`;
      teal.style.transform   = `scaleX(${t})`;
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
    <section className={`hero ${inverted ? 'hero-inverted' : ''}`}>
      <div className="hero-block-copper" aria-hidden="true"></div>
      <div className="hero-block-black" aria-hidden="true"></div>
      <ShapeRing className="shape-deco shape-ring" color="#222222" strokeWidth={6} />
      <ShapeDisk className="shape-deco shape-disk" color="#0471A6" />
      <ShapeSmile className="shape-deco shape-smile" color="#D66853" strokeWidth={70} />
      <div className="hero-inner">
        <div className="hero-grid hero-grid-single">
          <div className="reveal">
            <span className="eyebrow eyebrow-row">
              <span className="dot"></span>
              AI for allied health &amp; midwifery clinics · AU / NZ
            </span>
            <h1 className="hero-title">
              {headlineLines.map((line, i) => {
                // Highlight the last word of the last line in accent italic
                if (i === headlineLines.length - 1) {
                  const words = line.split(" ");
                  const last = words.pop();
                  const lastClean = last.replace(/[.,;:!?]$/, "");
                  const trailing = last.slice(lastClean.length);
                  return (
                    <React.Fragment key={i}>
                      {words.join(" ")}{words.length ? " " : ""}
                      <span className="accent">{lastClean}</span>{trailing}
                    </React.Fragment>
                  );
                }
                return <React.Fragment key={i}>{line}<br/></React.Fragment>;
              })}
              <span className="hero-title-line" aria-hidden="true"></span>
            </h1>
            <p className="hero-lead">
              We're your in-house AI partner. We shadow your clinic, find the bits eating your day —
              billing, intake, follow-ups — and quietly automate them. You keep your software.
              You get your afternoons back.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-lg" onClick={onBook}>
                {ctaLabel || "Steal 20 minutes of our time"}
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

window.SalsaHero = Hero;
