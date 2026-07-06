"use client";

export default function AwarenessNodes() {
  const nodes = [
    { x: 240, y: 170, r: 3.5, delay: "0s" },
    { x: 420, y: 235, r: 4, delay: "1.4s" },
    { x: 585, y: 140, r: 3, delay: "2.1s" },
    { x: 760, y: 210, r: 5, delay: "0.8s" },
    { x: 930, y: 180, r: 3.5, delay: "2.8s" },
    { x: 1040, y: 245, r: 4, delay: "1.7s" },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes awarenessPulse {
          0% {
            opacity: 0.15;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.8);
          }

          100% {
            opacity: 0.15;
            transform: scale(1);
          }
        }

        .awareness-node {
          animation: awarenessPulse 6s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 420"
        preserveAspectRatio="none"
      >
        {nodes.map((node, index) => (
          <g
            key={index}
            className="awareness-node"
            style={{
              animationDelay: node.delay,
            }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r * 4}
              fill="rgba(0,217,255,0.08)"
            />

            <circle
              cx={node.x}
              cy={node.y}
              r={node.r * 2}
              fill="rgba(0,217,255,0.16)"
            />

            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="#00d9ff"
            />
          </g>
        ))}
      </svg>
    </>
  );
}