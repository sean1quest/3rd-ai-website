interface IntelligenceNodeProps {
  size?: number;
  active?: boolean;
  pulse?: boolean;
}

export default function IntelligenceNode({
  size = 10,
  active = false,
  pulse = false,
}: IntelligenceNodeProps) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size * 4,
        height: size * 4,
      }}
    >
      {/* Outer Pulse */}
      <div
        className={`absolute rounded-full transition-all duration-[4000ms]
        ${
          pulse
            ? "animate-ping bg-cyan-400/20"
            : "bg-cyan-400/5"
        }`}
        style={{
          width: size * 4,
          height: size * 4,
        }}
      />

      {/* Ambient Glow */}
      <div
        className={`absolute rounded-full blur-xl transition-all duration-1000 ${
          active
            ? "bg-cyan-400/40"
            : "bg-cyan-400/10"
        }`}
        style={{
          width: size * 2.5,
          height: size * 2.5,
        }}
      />

      {/* Outer Ring */}
      <div
        className={`absolute rounded-full border transition-all duration-700 ${
          active
            ? "border-cyan-300/80"
            : "border-white/20"
        }`}
        style={{
          width: size * 2,
          height: size * 2,
        }}
      />

      {/* Core */}
      <div
        className={`rounded-full transition-all duration-700 ${
          active
            ? "bg-cyan-300"
            : "bg-white"
        }`}
        style={{
          width: size,
          height: size,
        }}
      />
    </div>
  );
}