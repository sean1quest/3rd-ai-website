// Static SVG background texture: vertical tick-lines of varying
// height forming a wave silhouette, echoing the site's signal/wave
// visual language at low opacity as a background accent — not an
// animated focal graphic, just texture.

const COLS = 140;
const CYAN = "34, 211, 238";

// Sum of two sine waves gives a gentle multi-hill silhouette rather
// than one uniform hump.
function envelopeHeight(u: number): number {
  const a = Math.sin(u * Math.PI * 2.3) * 0.5 + 0.5;
  const b = Math.sin(u * Math.PI * 4.1 + 1.2) * 0.5 + 0.5;
  return a * 0.7 + b * 0.3;
}

export default function TickWaveBackground() {
  const width = 1400;
  const height = 260;
  const baseline = height * 0.85;
  const maxTick = height * 0.65;

  const ticks = [];
  for (let i = 0; i < COLS; i++) {
    const u = i / (COLS - 1);
    const x = u * width;
    const h = 6 + envelopeHeight(u) * maxTick;
    const opacity = 0.15 + envelopeHeight(u) * 0.35;

    ticks.push(
      <line
        key={i}
        x1={x}
        y1={baseline}
        x2={x}
        y2={baseline - h}
        stroke={`rgba(${CYAN}, ${opacity.toFixed(2)})`}
        strokeWidth={1.5}
        strokeDasharray="2,3"
        strokeLinecap="round"
      />
    );
  }

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {ticks}
    </svg>
  );
}
