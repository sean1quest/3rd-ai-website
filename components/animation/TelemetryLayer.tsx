"use client";

type TelemetryLayerProps = {
  opacity?: number;
  lineCount?: number;
};

export default function TelemetryLayer({
  opacity = 0.18,
  lineCount = 320,
}: TelemetryLayerProps) {
  const lines = Array.from({ length: lineCount });

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 420"
      preserveAspectRatio="none"
    >
      {lines.map((_, i) => {
        const x = (i / (lineCount - 1)) * 1200;

        // Normalize x from 0 → 1
        const t = i / (lineCount - 1);

        // Large terrain profile
        const terrain =
          Math.sin(t * Math.PI * 1.2) * 55 +
          Math.sin(t * Math.PI * 3.4) * 18 +
          Math.cos(t * Math.PI * 0.8) * 28;

        // Small natural imperfections
        const detail =
          Math.sin(t * Math.PI * 22) * 3 +
          Math.cos(t * Math.PI * 17) * 2;

        const height = 110 + terrain + detail;

        return (
          <line
            key={i}
            x1={x}
            x2={x}
            y1={210 - height}
            y2={210 + height}
            stroke={`rgba(255,255,255,${opacity})`}
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}