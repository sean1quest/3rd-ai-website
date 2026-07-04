interface AuroraNodeProps {
  x: number;
  y: number;
  size?: number;
  center?: boolean;
}

export default function AuroraNode({
  x,
  y,
  size = 8,
  center = false,
}: AuroraNodeProps) {
  if (center) {
    return (
      <g transform={`translate(${x}, ${y})`}>
        {/* Outer Aura */}
        <circle
          r={40}
          fill="rgba(34,211,238,0.05)"
        />

        {/* Glow */}
        <circle
          r={24}
          fill="rgba(34,211,238,0.12)"
        />

        {/* Cyan Ring */}
        <circle
          r={14}
          fill="none"
          stroke="rgba(34,211,238,0.75)"
          strokeWidth="1.5"
        />

        {/* White Core */}
        <circle
          r={6}
          fill="white"
        />
      </g>
    );
  }

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Outer Halo */}
      <circle
        r={size + 4}
        fill="rgba(34,211,238,0.06)"
      />

      {/* Ring */}
      <circle
        r={size}
        fill="none"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="1"
      />

      {/* Core */}
      <circle
        r={2.8}
        fill="white"
      />
    </g>
  );
}