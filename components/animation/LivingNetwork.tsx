export default function LivingNetwork() {
  return (
    <div className="relative h-[460px] w-[460px]">

      {/* Horizontal line */}
      <div className="absolute left-[120px] top-1/2 h-px w-[220px] -translate-y-1/2 bg-cyan-400/20" />

      {/* Vertical line */}
      <div className="absolute left-1/2 top-[120px] h-[220px] w-px -translate-x-1/2 bg-cyan-400/20" />

      {/* Diagonal */}
      <div className="absolute left-[145px] top-[145px] h-px w-[170px] rotate-45 bg-cyan-400/20 origin-left" />

      {/* Diagonal */}
      <div className="absolute right-[145px] bottom-[145px] h-px w-[170px] rotate-45 bg-cyan-400/20 origin-right" />

      {/* CENTER */}
      <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_35px_#00D9FF]" />

      {/* TOP */}
      <div className="absolute left-1/2 top-10 h-4 w-4 -translate-x-1/2 rounded-full bg-white" />

      {/* BOTTOM */}
      <div className="absolute bottom-10 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-white" />

      {/* LEFT */}
      <div className="absolute left-10 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white" />

      {/* RIGHT */}
      <div className="absolute right-10 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white" />

      {/* TOP LEFT */}
      <div className="absolute left-20 top-20 h-4 w-4 rounded-full bg-white" />

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-20 right-20 h-4 w-4 rounded-full bg-white" />

    </div>
  );
}