// Salsa Systems — How it works
const How = ({ onBook }) => (
  <section className="how" id="how">
    <div className="how-head reveal">
      <div>
        <span className="eyebrow eyebrow-row">
          <span className="dot"></span>
          How it works
        </span>
        <h2>Three steps. No rip-and-replace.</h2>
      </div>
      <p>
        We're not a platform you have to adopt. We're an AI partner that slots into
        the software you already run — and stays on call after we ship.
      </p>
    </div>

    <div className="steps reveal reveal-stagger">
      <div className="step">
        <div className="step-num">01 — Discovery</div>
        <h3 className="step-title">We sit in for a day.</h3>
        <p className="step-body">
          We shadow your front desk, billing, and clinicians. We map where the hours
          actually go. You get a one-page plan of what we'd automate first, in order
          of ROI. No slide deck.
        </p>
        <div className="step-detail">output: prioritised automation plan, fixed scope, fixed price</div>
      </div>

      <div className="step">
        <div className="step-num">02 — Build</div>
        <h3 className="step-title">We build the AI in.</h3>
        <p className="step-body">
          Custom to your clinic. We connect to Cliniko, Nookal, Halaxy, Power Diary,
          Xero — whatever you run. We write the workflows, test them on real data,
          and train your team in one 45-minute session.
        </p>
        <div className="step-detail">typical build: 2–4 weeks from kickoff to first live workflow</div>
      </div>

      <div className="step">
        <div className="step-num">03 — Run</div>
        <h3 className="step-title">You get your afternoons back.</h3>
        <p className="step-body">
          We stay on call while the system runs. Monthly tune-ups, new workflows as
          your clinic grows, and a human you can Slack when something looks off.
          Not a helpdesk ticket.
        </p>
        <div className="step-detail">monthly retainer, cancel any time, no lock-in contract</div>
      </div>
    </div>

    <div className="how-cta reveal">
      <button className="btn btn-primary" onClick={onBook}>
        Book the sit-in day
        <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 5l7 7-7 7"/>
        </svg>
      </button>
      <p>(the first 20 minutes is free and unambiguously useful. the rest of the day depends on you.)</p>
    </div>
  </section>
);

window.SalsaHow = How;
