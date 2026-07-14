"use client";

// Recreation of the real "5-15-5" power consumption test from the
// investment brief, styled to match the site instead of the plain
// white analytics export. Shows the actual measured pattern: a 5-min
// baseline, 15-min power-saving period, then a 5-min baseline again.

const WIDTH = 1000;
const HEIGHT = 380;
const MARGIN = { top: 30, right: 30, bottom: 50, left: 55 };
const PLOT_W = WIDTH - MARGIN.left - MARGIN.right;
const PLOT_H = HEIGHT - MARGIN.top - MARGIN.bottom;

const X_MAX = 25; // minutes
const Y_MAX = 8; // watts
const BASELINE_LEVEL = 6.7;

function xScale(min: number) {
  return MARGIN.left + (min / X_MAX) * PLOT_W;
}
function yScale(watts: number) {
  return MARGIN.top + PLOT_H - (watts / Y_MAX) * PLOT_H;
}

// Deterministic pseudo-random noise so the chart renders identically
// on every load rather than reshuffling.
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function buildSeries() {
  const rand = seededRandom(515);
  const points: { t: number; w: number }[] = [];
  const step = 0.08;

  for (let t = 0; t <= X_MAX; t += step) {
    let base: number;
    if (t < 5) base = 6.77;
    else if (t < 20) base = 5.62;
    else base = 6.66;

    // small continuous jitter plus occasional activity spikes,
    // matching the noisy real-world trace in the source chart
    const jitter = (rand() - 0.5) * 0.3;
    const spike = rand() > 0.965 ? rand() * 0.9 : 0;

    points.push({ t, w: base + jitter + spike });
  }
  return points;
}

const SERIES = buildSeries();

function pathFromSeries() {
  return SERIES.map((p, i) => {
    const x = xScale(p.t);
    const y = yScale(p.w);
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}

export default function PowerConsumptionChart() {
  const path = pathFromSeries();

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="w-full"
      role="img"
      aria-label="Power consumption test showing a 16 percent reduction during a 15 minute power-saving period, compared to baseline"
    >
      {/* Zone backgrounds */}
      <rect x={xScale(0)} y={MARGIN.top} width={xScale(5) - xScale(0)} height={PLOT_H} fill="rgba(242,169,59,0.06)" />
      <rect x={xScale(5)} y={MARGIN.top} width={xScale(20) - xScale(5)} height={PLOT_H} fill="rgba(34,211,238,0.07)" />
      <rect x={xScale(20)} y={MARGIN.top} width={xScale(25) - xScale(20)} height={PLOT_H} fill="rgba(242,169,59,0.06)" />

      {/* Zone divider lines */}
      <line x1={xScale(5)} y1={MARGIN.top} x2={xScale(5)} y2={MARGIN.top + PLOT_H} stroke="rgba(255,255,255,0.15)" strokeDasharray="4,4" />
      <line x1={xScale(20)} y1={MARGIN.top} x2={xScale(20)} y2={MARGIN.top + PLOT_H} stroke="rgba(255,255,255,0.15)" strokeDasharray="4,4" />

      {/* Baseline reference line */}
      <line
        x1={xScale(0)}
        y1={yScale(BASELINE_LEVEL)}
        x2={xScale(25)}
        y2={yScale(BASELINE_LEVEL)}
        stroke="rgba(242,169,59,0.6)"
        strokeDasharray="3,3"
        strokeWidth={1}
      />

      {/* Y axis */}
      {[0, 2, 4, 6, 8].map((w) => (
        <g key={w}>
          <line x1={MARGIN.left} y1={yScale(w)} x2={WIDTH - MARGIN.right} y2={yScale(w)} stroke="rgba(255,255,255,0.05)" />
          <text x={MARGIN.left - 12} y={yScale(w) + 4} textAnchor="end" fontSize="12" fill="rgba(148,163,184,0.8)">
            {w}
          </text>
        </g>
      ))}

      {/* X axis */}
      {[0, 5, 10, 15, 20, 25].map((t) => (
        <text key={t} x={xScale(t)} y={HEIGHT - MARGIN.bottom + 22} textAnchor="middle" fontSize="12" fill="rgba(148,163,184,0.8)">
          {t}
        </text>
      ))}
      <text x={WIDTH / 2} y={HEIGHT - 8} textAnchor="middle" fontSize="13" fill="rgba(148,163,184,0.9)">
        Elapsed time (min)
      </text>

      {/* Zone labels */}
      <text x={(xScale(0) + xScale(5)) / 2} y={MARGIN.top + 18} textAnchor="middle" fontSize="13" fontWeight={600} fill="#F2A93B">
        Baseline
      </text>
      <text x={(xScale(0) + xScale(5)) / 2} y={MARGIN.top + 34} textAnchor="middle" fontSize="12" fill="rgba(242,169,59,0.85)">
        6.77 Wh/h
      </text>

      <text x={(xScale(5) + xScale(20)) / 2} y={MARGIN.top + 18} textAnchor="middle" fontSize="13" fontWeight={600} fill="#22D3EE">
        Power-saving
      </text>
      <text x={(xScale(5) + xScale(20)) / 2} y={MARGIN.top + 34} textAnchor="middle" fontSize="12" fill="rgba(34,211,238,0.9)">
        5.62 Wh/h
      </text>

      <text x={(xScale(20) + xScale(25)) / 2} y={MARGIN.top + 18} textAnchor="middle" fontSize="13" fontWeight={600} fill="#F2A93B">
        Baseline
      </text>
      <text x={(xScale(20) + xScale(25)) / 2} y={MARGIN.top + 34} textAnchor="middle" fontSize="12" fill="rgba(242,169,59,0.85)">
        6.66 Wh/h
      </text>

      {/* Data line */}
      <path d={path} fill="none" stroke="#22D3EE" strokeWidth={1.6} strokeLinejoin="round" />
    </svg>
  );
}
