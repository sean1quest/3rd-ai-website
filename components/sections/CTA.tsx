export default function CTA() {
  return (
    <section
      id="company"
      className="relative overflow-hidden bg-[#020406] py-36"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-8 text-center">
        {/* Section Label */}

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Let's Build the Future Together
        </p>

        {/* Headline */}

        <h2 className="text-6xl font-semibold leading-tight tracking-tight text-white">
          Infrastructure has connected the world.
          <br />
          <span className="text-cyan-400">
            It's time it understood it.
          </span>
        </h2>

        {/* Supporting Text */}

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-400">
          Discover how the Ambient Intelligence Platform enables connected
          environments to continuously sense, understand, orchestrate, and
          adapt autonomously.
        </p>

        {/* CTA Buttons */}

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <a
            href="mailto:info@3rd-ai.com"
            className="rounded-full bg-cyan-400 px-10 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            Request a Technical Briefing
          </a>

          <a
            href="https://www.linkedin.com/company/3rd-ai-com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-10 py-4 text-lg text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}