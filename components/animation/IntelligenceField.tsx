"use client";

import { useMemo } from "react";

export default function IntelligenceField() {
  const width = 900;
  const height = 620;

  const baseline = height / 2;

  const round = (n: number) => Math.round(n * 1000) / 1000;

  const samples = useMemo(() => {
    const count = 240;

    return Array.from({ length: count }, (_, i) => {
      const t = i / count;

      // Low-amplitude telemetry (idle state)
      let value =
        Math.sin(t * Math.PI * 8) * 6 +
        Math.sin(t * Math.PI * 19) * 2;

      // Awareness Region 1
      value +=
        Math.exp(-Math.pow((t - 0.30) / 0.035, 2)) * 45;

      // Awareness Region 2
      value +=
        Math.exp(-Math.pow((t - 0.63) / 0.045, 2)) * 26;

      // Awareness Region 3
      value +=
        Math.exp(-Math.pow((t - 0.82) / 0.025, 2)) * 18;

      return round(value);
    });
  }, []);

  return (
    <div className="relative flex h-[560px] w-full items-center justify-center">

      {/* Background Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-400/5 blur-3xl" />

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>

          <linearGradient
            id="telemetryFade"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="white" stopOpacity=".22" />
            <stop offset="50%" stopColor="white" stopOpacity=".22" />
            <stop offset="80%" stopColor="white" stopOpacity=".22" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <linearGradient
            id="awareness"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="#00D9FF" stopOpacity=".95" />
            <stop offset="80%" stopColor="#00D9FF" stopOpacity=".95" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

        </defs>

        {/* Telemetry Threads */}

        {samples.map((value, i) => {
          const x = round((i / (samples.length - 1)) * width);

          const top = round(baseline - value);
          const bottom = round(baseline + value);

          const highlight =
            (i > 63 && i < 79) ||
            (i > 145 && i < 161) ||
            (i > 190 && i < 199);

          return (
            <line
              key={i}
              x1={x}
              x2={x}
              y1={top}
              y2={bottom}
              stroke={
                highlight
                  ? "url(#awareness)"
                  : "url(#telemetryFade)"
              }
              strokeWidth="1"
              strokeLinecap="round"
            />
          );
        })}

        {/* Baseline */}

        <line
          x1="0"
          x2={width}
          y1={baseline}
          y2={baseline}
          stroke="rgba(255,255,255,.04)"
          strokeWidth=".5"
        />

      </svg>

    </div>
  );
}