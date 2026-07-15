import FadeIn from "@/components/ui/FadeIn";
import AmbientParticles from "@/components/ui/AmbientParticles";

export default function CTA() {
  return (
    <section
      id="company"
      className="relative overflow-hidden bg-[#020406] py-16 md:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.08),transparent_60%)]" />
      <AmbientParticles />

      <FadeIn className="relative mx-auto max-w-5xl px-8 text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400 md:text-base">
          Let&apos;s Build the Future Together
        </p>

        <h2 className="text-3xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
          Infrastructure has connected everything.
          <br />
          <span className="text-cyan-400">
            Now it can finally understand itself — and build a better future.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-8 md:leading-9 text-slate-400">
          See how Ambient Intelligence turns your infrastructure into a
          system that thinks for itself — cutting energy waste along the
          way, without touching a single piece of hardware.
        </p>

        <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
          16% average power reduction · 1,520 tCO₂e avoided annually
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <a
            href="#platform"
            className="rounded-full border border-white/15 px-10 py-4 text-lg text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            Explore the Platform
          </a>
          <a
            href="#contact"
            className="rounded-full bg-cyan-400 px-10 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            Request a Technical Briefing
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
