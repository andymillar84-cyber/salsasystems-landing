// Salsa Systems — Logo mark (inline SVG so we can control the outline)
// outlineStyle: "thick-dark" | "thick-light" | "thin-copper" | "none"
const SalsaLogoMark = ({ size = 32, outlineStyle = "thick-dark", theme = "light" }) => {
  let strokeColor = "transparent";
  let strokeWidth = 0;
  let inset = 0;
  if (outlineStyle === "thick-dark") {
    strokeColor = theme === "dark" ? "#F0EEE4" : "#222222";
    strokeWidth = 2.2;
  } else if (outlineStyle === "thick-light") {
    strokeColor = theme === "dark" ? "#F0EEE4" : "#FBFBF2";
    strokeWidth = 2.2;
  } else if (outlineStyle === "thin-copper") {
    strokeColor = "var(--boxy-copper)";
    strokeWidth = 1;
  }
  inset = strokeWidth / 2;

  // Salsa icon strokes match design system dark/light variants
  const iconStroke = theme === "dark" ? "#FBFBF2" : "#222222";
  const sprigStroke = theme === "dark" ? "#7FB86F" : "#4A8A3F";

  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {strokeWidth > 0 && (
        <rect
          x={inset}
          y={inset}
          width={48 - strokeWidth}
          height={48 - strokeWidth}
          rx={10}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
      )}
      <path
        d="M 8 24 C 9 22.5, 11.5 22, 14 23 L 16 23 L 18 17.5 L 21 28 L 24 21 L 27 26 L 30 22 L 34 24 L 39 24.5 L 42 26 C 42 32, 30 35, 19 34 C 10 33, 6 29, 8 24 Z"
        fill="#D66853"
        stroke={iconStroke}
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M 9 24 C 7 21, 6.5 19, 8 16"
        stroke={sprigStroke}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 8 16 C 9.5 14.5, 11.8 15, 12.3 17"
        stroke={sprigStroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

window.SalsaLogoMark = SalsaLogoMark;
