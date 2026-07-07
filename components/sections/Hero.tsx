import AmbientIntelligence from "@/components/animation/AmbientIntelligence";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#04070C] pt-40 pb-36">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(0,217,255,0.16),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-8 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400 leading-relaxed md:text-base">
            <span className="block">AMBIENT INTELLIGENCE</span>
            <span className="block">FOR CONNECTED ENVIRONMENTS</span>
          </p>

          <h1 className="max-w-xl text-6xl font-bold leading-[1.02] tracking-tight text-white">
            Infrastructure
            <br />
            that <span className="text-cyan-400">understands.</span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">
            Bringing Ambient Intelligence to connected environments—
            enabling infrastructure to sense, understand,
            orchestrate, and adapt autonomously.
          </p>

          {/* Core Principles */}
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-6">
            <div>
              <div className="font-semibold text-cyan-400">
                Quietly
              </div>
              <div className="mt-2 text-sm text-slate-400">
                Always learning.
              </div>
            </div>

            <div>
              <div className="font-semibold text-cyan-400">
                Continuously
              </div>
              <div className="mt-2 text-sm text-slate-400">
                Always adapting.
              </div>
            </div>

            <div>
              <div className="font-semibold text-cyan-400">
                Autonomously
              </div>
              <div className="mt-2 text-sm text-slate-400">
                Always optimizing.
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-14 flex flex-wrap gap-5">
            <a
              href="#platform"
              className="rounded-full bg-cyan-400 px-8 py-4 text-lg font-semibold text-black transition duration-300 hover:scale-105"
            >
              Explore the Platform
            </a>

            <a
              href="#company"
              className="rounded-full border border-white/20 px-8 py-4 text-lg text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              Request a Technical Briefing
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute h-[34rem] w-[34rem] rounded-full bg-cyan-400/8 blur-[140px]" />

          <AmbientIntelligence />
        </div>
      </div>
    </section>
  );
}