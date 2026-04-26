// Salsa Systems — Booking modal (Cal.com stand-in)
const BookingModal = ({ open, onClose }) => {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <div className={`modal-backdrop ${open ? 'open' : ''}`} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="modal-head">
          <div>
            <div className="eyebrow" style={{color: 'var(--boxy-copper)', marginBottom: 10}}>cal.com · 20 minutes</div>
            <h3>Book your discovery call</h3>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <p className="modal-sub">
          Pick a time. No prep needed — we'll ask the good questions.
        </p>
        <div className="modal-embed">
          <div className="big">Your Cal.com / Calendly embed would slot in here.</div>
          <div>next available</div>
          <div className="slots">
            <span className="slot">Thu · 10:00</span>
            <span className="slot">Thu · 14:30</span>
            <span className="slot">Fri · 09:00</span>
            <span className="slot">Fri · 15:15</span>
            <span className="slot">Mon · 11:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

window.SalsaBookingModal = BookingModal;
