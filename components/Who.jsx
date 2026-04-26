// Salsa Systems — Who we work with
const NICHES = [
  "Physiotherapy",
  "Chiropractic",
  "Podiatry",
  "Osteopathy",
  "Occupational therapy",
  "Speech pathology",
  "Exercise physiology",
  "Dietetics",
  "Psychology",
  "Midwifery",
  "Remedial massage",
  "Multi-disciplinary clinics",
];

const Who = ({ onBook }) => (
  <section className="who" id="who">
    <ShapeHalfDome className="shape-deco shape-halfdome" color="#222222" />
    <ShapePulse className="shape-deco shape-pulse" color="#D66853" strokeWidth={3} />
    <div className="container">
      <div className="who-grid">
        <div className="reveal">
          <span className="eyebrow eyebrow-row">
            <span className="dot"></span>
            Who we work with
          </span>
          <h2>Small and mid-size allied health clinics across Australia and NZ.</h2>
          <p>
            If your team still writes appointment reminders by hand, chases Medicare
            rebates on Fridays, or answers the front desk phone with "one moment,"
            we're probably a fit.
          </p>
          <div className="who-cta">
            <button className="btn btn-ghost" onClick={onBook}>
              Is this us? Let's find out
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="who-tags reveal reveal-pop" role="list">
          {NICHES.map(n => (
            <span className="who-tag" role="listitem" key={n}>
              <span className="dot"></span>{n}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

window.SalsaWho = Who;
