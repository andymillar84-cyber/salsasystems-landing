// Salsa Systems — Currently working with (single client callout)
const CurrentClient = ({ onBook }) => (
  <section className="current" id="current">
    <ShapeWedge className="shape-deco shape-wedge" color="#0471A6" />
    <ShapeRing className="shape-deco shape-ring-lg" color="#D66853" strokeWidth={6} />
    <div className="current-inner">
      <div className="current-eyebrow reveal">
        <span className="eyebrow eyebrow-row">
          <span className="dot"></span>
          Currently working with
        </span>
      </div>

      <div className="current-card reveal">
        <div className="current-card-head">
          <div>
            <h3 className="current-clinic">Mamabirth</h3>
            <div className="current-meta">Midwifery practice · Kensington, Melbourne</div>
          </div>
        </div>

        <p className="current-body">
          The brief, in their words: automate all of the boring stuff that doesn't
          really help the customer if it's a human or a robot doing it.
        </p>

        <div className="current-tags">
          <span>Cliniko</span>
          <span>Claude</span>
          <span>Custom integration</span>
          <span>Live build</span>
        </div>
      </div>

      <div className="current-cta reveal">
        <button className="btn btn-primary btn-lg" onClick={onBook}>
          Want this for your clinic?
          <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
);

window.SalsaCurrentClient = CurrentClient;
