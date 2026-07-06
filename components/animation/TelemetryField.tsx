"use client";

import Image from "next/image";

export default function TelemetryField() {
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-black">

      {/* Soft ambient glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[260px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/5
          blur-[120px]
        "
      />

      {/* Landscape */}
      <Image
        src="/images/telemetry-landscape.png"
        alt="Ambient Intelligence Landscape"
        width={2200}
        height={700}
        priority
        draggable={false}
        className="
          absolute
          left-1/2
          top-[-20px]
          w-[175%]
          max-w-none
          -translate-x-1/2
          opacity-95
          select-none
          pointer-events-none
        "
      />

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black via-black/40 to-transparent" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black via-black/50 to-transparent" />

    </div>
  );
}