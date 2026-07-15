"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pt-32 pb-24 md:pt-44 md:pb-36">

      {/* ── Full-bleed background ──────────────────────────────────
          Static telemetry bar-chart image (exact recreation of the
          Architecture section's spectrum graphic, recolored to cyan),
          positioned bottom-anchored like the source. Other options
          tried, in case we want to switch back:
          - Original waveform video:
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src="/videos/hero-ambient-wave-16x9.mp4" type="video/mp4" />
            </video>
          - Signal-ring pulse (components/ui/SignalPulse.tsx): <SignalPulse />
          - Animated canvas version (components/ui/TelemetryBars.tsx): <TelemetryBars />
      */}
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 bottom-20 md:bottom-28 h-40 md:h-56 overflow-hidden">
          <div className="animate-scroll-left flex h-full w-max items-end">
            {[0, 1].map((i) => (
              <div key={i} className="flex h-full flex-shrink-0 items-end">
                <Image
                  src="/images/hero-telemetry-bars.png"
                  alt=""
                  width={4752}
                  height={294}
                  className="h-full w-auto flex-shrink-0"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, black 0.7%, black 99.3%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to right, transparent 0%, black 0.7%, black 99.3%, transparent 100%)",
                  }}
                  aria-hidden="true"
                  priority={i === 0}
                  loading={i === 0 ? "eager" : undefined}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>

      {/* ── Single-column content ──────────────────────────────── */}
      <div className="relative mx-auto max-w-7xl px-8">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <FadeIn delay={0}>
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.1em] md:tracking-[0.35em] leading-relaxed text-cyan-400 md:text-base">
              <span className="block">AMBIENT INTELLIGENCE</span>
              <span className="block">FOR CONNECTED ENVIRONMENTS</span>
            </p>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[0.94] tracking-tight text-white">
              Infrastructure
              <br />
              that <span className="text-cyan-400">understands.</span>
            </h1>
          </FadeIn>

          {/* Body copy */}
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl text-base md:text-xl leading-8 md:leading-9 text-slate-300">
              3rd-AI transforms connected infrastructure into intelligent systems that continuously perceive, make context-aware decisions, and act autonomously — without changing the underlying hardware.
            </p>
          </FadeIn>

          {/* Core Principles */}
          <FadeIn delay={0.3}>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:flex sm:flex-row sm:gap-10">

              {/* Quietly */}
              <div>
                <div className="flex items-center gap-2 font-semibold text-cyan-400">
                  <span>Quietly</span>
                  <svg className="h-5 w-5 text-cyan-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="mt-2 text-sm text-slate-400">
                  Always sensing.
                </div>
              </div>

              {/* Continuously */}
              <div>
                <div className="flex items-center gap-2 font-semibold text-cyan-400">
                  <span>Continuously</span>
                  <svg className="h-5 w-5 text-cyan-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="17 1 21 5 17 9" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <polyline points="7 23 3 19 7 15" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                  </svg>
                </div>
                <div className="mt-2 text-sm text-slate-400">
                  Always adapting.
                </div>
              </div>

              {/* Autonomously */}
              <div>
                <div className="flex items-center gap-2 font-semibold text-cyan-400">
                  <span>Autonomously</span>
                  <svg className="h-5 w-5 text-cyan-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <line x1="9" y1="1" x2="9" y2="4" />
                    <line x1="15" y1="1" x2="15" y2="4" />
                    <line x1="9" y1="20" x2="9" y2="23" />
                    <line x1="15" y1="20" x2="15" y2="23" />
                    <line x1="20" y1="9" x2="23" y2="9" />
                    <line x1="20" y1="14" x2="23" y2="14" />
                    <line x1="1" y1="9" x2="4" y2="9" />
                    <line x1="1" y1="14" x2="4" y2="14" />
                  </svg>
                </div>
                <div className="mt-2 text-sm text-slate-400">
                  Always optimizing.
                </div>
              </div>

              {/* Containerised — fourth principle */}
              <div>
                <div className="flex items-center gap-2 font-semibold text-cyan-400">
                  <span>Containerised</span>
                  <svg className="h-5 w-5 text-cyan-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <div className="mt-2 text-sm text-slate-400">
                  Zero Hardware Changes.
                </div>
              </div>

            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.4}>
            {/* CTA buttons */}
            <div className="mt-14 flex flex-wrap items-center gap-4">
              <a
                href="#platform"
                className="whitespace-nowrap rounded-full bg-cyan-400 px-7 py-3.5 text-base font-semibold text-black transition-all duration-300 hover:scale-105"
              >
                Explore the Platform
              </a>
              <a
                href="#contact"
                className="hidden sm:block whitespace-nowrap rounded-full border border-white/15 px-7 py-3.5 text-base text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                Request a Technical Briefing
              </a>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
