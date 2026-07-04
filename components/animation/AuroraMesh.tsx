export default function AuroraMesh() {
  const nodes = [
    { id: 1, x: 250, y: 70 },
    { id: 2, x: 145, y: 145 },
    { id: 3, x: 355, y: 145 },
    { id: 4, x: 90, y: 250 },
    { id: 5, x: 250, y: 250, center: true },
    { id: 6, x: 410, y: 250 },
    { id: 7, x: 145, y: 355 },
    { id: 8, x: 355, y: 355 },
    { id: 9, x: 250, y: 430 },
  ];

  const links = [
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
    [2, 3],
    [7, 8],
  ];

  return (
    <div className="relative h-[520px] w-[520px]">

      {/* Ambient Background */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/5 blur-3xl" />

      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 h-full w-full"
      >

        {/* Connections */}

        {links.map(([from, to], index) => {
          const a = nodes.find((n) => n.id === from)!;
          const b = nodes.find((n) => n.id === to)!;

          return (
            <line
              key={index}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(34,211,238,0.16)"
              strokeWidth="1.4"
            />
          );
        })}

        {/* Nodes */}

        {nodes.map((node) => (
          <g key={node.id}>

            {!node.center && (
              <>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="10"
                  fill="rgba(34,211,238,0.08)"
                />

                <circle
                  cx={node.x}
                  cy={node.y}
                  r="4"
                  fill="white"
                />
              </>
            )}

            {node.center && (
              <>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="42"
                  fill="rgba(34,211,238,0.08)"
                />

                <circle
                  cx={node.x}
                  cy={node.y}
                  r="22"
                  fill="rgba(34,211,238,0.18)"
                />

                <circle
                  cx={node.x}
                  cy={node.y}
                  r="8"
                  fill="#22D3EE"
                />
              </>
            )}

          </g>
        ))}

      </svg>

    </div>
  );
}