import LivingNetwork from "@/components/animation/LivingNetwork";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020611] pt-36 pb-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(0,217,255,0.10),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-8 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>

          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            Ambient Intelligence for Wi-Fi Networks
          </p>

          <h1 className="max-w-xl text-6xl font-bold leading-[1.05] tracking-tight text-white">

            Infrastructure
            <br />

            that{" "}
            <span className="text-cyan-400">
              understands.
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">
            3rd-AI brings Ambient Intelligence to Wi-Fi infrastructure—
            enabling networks to continuously observe, learn, and optimize.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <a
              href="#contact"
              className="rounded-full bg-cyan-400 px-8 py-4 text-lg font-semibold text-black transition hover:scale-105"
            >
              Schedule Technical Briefing
            </a>

            <a
              href="#platform"
              className="rounded-full border border-white/20 px-8 py-4 text-lg text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Explore the Platform
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center">
          <LivingNetwork />
        </div>

      </div>
    </section>
  );
}