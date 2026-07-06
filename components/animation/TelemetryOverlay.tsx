"use client";

export default function TelemetryOverlay() {
  const nodes = [
    { x: 18, y: 62, size: 5 },
    { x: 33, y: 48, size: 4 },
    { x: 48, y: 55, size: 6 },
    { x: 63, y: 43, size: 5 },
    { x: 79, y: 58, size: 4 },
    { x: 91, y: 46, size: 5 },
  ];

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Connection lines */}
      <line x1="18" y1="62" x2="33" y2="48" stroke="rgba(0,217,255,.20)" strokeWidth=".25"/>
      <line x1="33" y1="48" x2="48" y2="55" stroke="rgba(0,217,255,.20)" strokeWidth=".25"/>
      <line x1="48" y1="55" x2="63" y2="43" stroke="rgba(0,217,255,.20)" strokeWidth=".25"/>
      <line x1="63" y1="43" x2="79" y2="58" stroke="rgba(0,217,255,.20)" strokeWidth=".25"/>
      <line x1="79" y1="58" x2="91" y2="46" stroke="rgba(0,217,255,.20)" strokeWidth=".25"/>

      {nodes.map((node, i) => (
        <g key={i}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="rgba(0,217,255,.10)"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r={1.3}
            fill="#00d9ff"
          />
        </g>
      ))}
    </svg>
  );
}