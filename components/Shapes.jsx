// Salsa Systems — brand-shape SVGs reusable as decoration.
// All shapes from /preview/brand-shapes.html in the design system.
// Each takes optional className/style; renders nothing when not in shapes mode.

const ShapeSmile = ({ className, color = "#D66853", strokeWidth = 60 }) => (
  <svg className={className} viewBox="0 0 1100 500" fill="none" preserveAspectRatio="none" aria-hidden="true">
    <path d="M50 100 Q550 700 1050 100" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
  </svg>
);

const ShapeDisk = ({ className, color = "#D66853" }) => (
  <svg className={className} viewBox="0 0 90 90" aria-hidden="true">
    <circle cx="45" cy="45" r="42" fill={color}/>
  </svg>
);

const ShapeRing = ({ className, color = "#222222", strokeWidth = 8 }) => (
  <svg className={className} viewBox="0 0 90 90" fill="none" aria-hidden="true">
    <circle cx="45" cy="45" r="40" stroke={color} strokeWidth={strokeWidth}/>
  </svg>
);

const ShapeHalfDome = ({ className, color = "#222222" }) => (
  <svg className={className} viewBox="0 0 110 60" aria-hidden="true">
    <path d="M0 60 A55 55 0 0 1 110 60 Z" fill={color}/>
  </svg>
);

const ShapeWedge = ({ className, color = "#0471A6" }) => (
  <svg className={className} viewBox="0 0 90 90" aria-hidden="true">
    <path d="M0 90 L0 0 A90 90 0 0 1 90 90 Z" fill={color}/>
  </svg>
);

const ShapePulse = ({ className, color = "#222222", strokeWidth = 3 }) => (
  <svg className={className} viewBox="0 0 130 50" fill="none" aria-hidden="true">
    <path d="M5 25 L30 25 L40 10 L55 40 L70 18 L85 32 L105 25 L125 25"
          stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

window.ShapeSmile = ShapeSmile;
window.ShapeDisk = ShapeDisk;
window.ShapeRing = ShapeRing;
window.ShapeHalfDome = ShapeHalfDome;
window.ShapeWedge = ShapeWedge;
window.ShapePulse = ShapePulse;
