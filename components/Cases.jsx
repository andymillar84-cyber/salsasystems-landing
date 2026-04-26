// Salsa Systems — Case studies (three layout variants)
// layout: "grid" | "staircase" | "row-plus-quote" | "diagonal"

const CASES = [
  {
    tag: "Physio · Newcastle, NSW · 6 clinicians",
    clinic: "Harbourline Physiotherapy",
    stat: "11",
    unit: "hrs",
    direction: "down",
    label: "of front-desk admin per week, gone. That's one part-timer paid for.",
    before: "14 hrs / wk",
    after: "3 hrs / wk",
  },
  {
    tag: "Podiatry · Auckland · 3 locations",
    clinic: "Step & Stride Podiatry",
    stat: "38",
    unit: "%",
    direction: "down",
    label: "no-show rate drop after we added SMS confirmation + reschedule links.",
    before: "21% no-shows",
    after: "13% no-shows",
  },
  {
    tag: "Chiropractic · Perth · solo practitioner",
    clinic: "Dr. Lachlan Hayes, DC",
    stat: "$4.2",
    unit: "k",
    direction: "up",
    label: "extra monthly revenue from reactivating lapsed patients — on autopilot.",
    before: "manual, sporadic",
    after: "weekly, automated",
  },
  {
    tag: "Speech pathology · Melbourne · 4 clinicians",
    clinic: "Clearword Speech & Language",
    stat: "72",
    unit: "%",
    direction: "up",
    label: "of after-hours calls answered and booked — without hiring a receptionist.",
    before: "voicemail",
    after: "AI receptionist",
  },
  {
    tag: "Midwifery · Geelong · 2 midwives",
    clinic: "Birchwood Midwives",
    stat: "6",
    unit: "days",
    direction: "down",
    label: "faster invoicing cycle. Rebates hit accounts the same week, not the next one.",
    before: "9 days avg.",
    after: "3 days avg.",
  },
  {
    tag: "Occupational therapy · Adelaide · 5 clinicians",
    clinic: "Mayfield OT Collective",
    stat: "2.4",
    unit: "x",
    direction: "up",
    label: "more NDIS claims processed per week — same team, same hours.",
    before: "12 / wk",
    after: "29 / wk",
  },
];

const FEATURED = {
  tag: "Multi-disciplinary · Brisbane",
  quote: "We stopped taking Fridays off to finish rebates. Salsa finishes them on Tuesday, at 11am, without asking.",
  name: "Dr. Renee Okafor",
  role: "Clinical Director · Paddington Allied Health",
};

const Arrow = ({ direction }) => (
  <span className={`arrow-ind ${direction === "up" ? "up" : "down"}`} aria-hidden="true">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {direction === "up" ? <path d="M12 19V5M5 12l7-7 7 7"/> : <path d="M12 5v14M5 12l7 7 7-7"/>}
    </svg>
  </span>
);

const StatCard = ({ c }) => (
  <div className="case">
    <div className="case-tag">{c.tag}</div>
    <div className="case-clinic">{c.clinic}</div>
    <div className="case-stat">
      {c.stat}<span className="unit">{c.unit}</span>
      <Arrow direction={c.direction} />
    </div>
    <p className="case-metric-label">{c.label}</p>
    <div className="case-before-after">
      <div>Before<span className="v">{c.before}</span></div>
      <div>After<span className="v">{c.after}</span></div>
    </div>
  </div>
);

const FeaturedCard = ({ className = "" }) => (
  <div className={`case featured ${className}`}>
    <div className="case-tag">{FEATURED.tag}</div>
    <blockquote className="case-quote">{FEATURED.quote}</blockquote>
    <div className="case-cite">
      <strong>{FEATURED.name}</strong>
      {FEATURED.role}
    </div>
  </div>
);

const Cases = ({ onBook, layout = "grid" }) => {
  return (
    <section className={`cases cases-${layout}`} id="cases">
      <div className="cases-head reveal">
        <span className="eyebrow eyebrow-row">
          <span className="dot"></span>
          Case studies &middot; names changed, numbers haven't
        </span>
        <h2>The math clinics send us after month three.</h2>
        <p>
          Every clinic is different, but the shape of the wins looks about the same:
          fewer hours on admin, fewer dollars falling through the cracks, more room
          on the clinician's calendar.
        </p>
      </div>

      {layout === "grid" && (
        <div className="case-grid case-grid-3 reveal reveal-stagger">
          {CASES.map((c, i) => <StatCard c={c} key={i} />)}
          <FeaturedCard className="featured-wide" />
        </div>
      )}

      {layout === "staircase" && (
        <>
          <div className="case-grid case-grid-row reveal reveal-stagger">
            {CASES.slice(0, 3).map((c, i) => <StatCard c={c} key={i} />)}
          </div>
          <div className="case-feature-band reveal">
            <FeaturedCard />
          </div>
        </>
      )}

      {layout === "diagonal" && (
        <div className="case-diagonal reveal reveal-stagger">
          {CASES.map((c, i) => (
            <div className="case-diagonal-step" key={i} style={{"--i": i, "--n": CASES.length}}>
              <StatCard c={c} />
            </div>
          ))}
          <div className="case-diagonal-feature">
            <FeaturedCard />
          </div>
        </div>
      )}

      {layout === "row-plus-quote" && (
        <>
          <div className="case-grid case-grid-row reveal reveal-stagger">
            {CASES.slice(0, 3).map((c, i) => <StatCard c={c} key={i} />)}
          </div>
          <div className="case-grid case-grid-row case-grid-row-secondary reveal reveal-stagger">
            {CASES.slice(3, 5).map((c, i) => <StatCard c={c} key={i} />)}
          </div>
          <div className="case-feature-band reveal">
            <FeaturedCard />
          </div>
        </>
      )}

      <div className="cases-cta reveal">
        <button className="btn btn-primary" onClick={onBook}>
          Show me the boring math for my clinic
          <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </button>
        <p>we bring a calculator. you bring a coffee.</p>
      </div>
    </section>
  );
};

window.SalsaCases = Cases;
