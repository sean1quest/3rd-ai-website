"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-black py-32">
      {/* Subtle radial glow — left side, behind the quote */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(34,211,238,0.05),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-8">

        {/* Eyebrow */}
        <FadeIn delay={0}>
          <p className="mb-16 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            About 3rd-AI
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

          {/* ── Left — Mission & founding story ───────────────── */}
          <FadeIn delay={0.1}>
            <div>
              {/* Pull quote */}
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-cyan-400/0" />
                <blockquote className="text-3xl font-semibold leading-snug tracking-tight text-white lg:text-4xl">
                  Networks have grown smarter.
                  The systems managing them{" "}
                  <span className="text-cyan-400">haven&apos;t.</span>
                </blockquote>
              </div>

              {/* Founding story — placeholder */}
              <p className="mt-10 text-lg leading-8 text-slate-400">
                [Founding story placeholder — e.g. "After two decades watching
                telecom operators invest billions in network infrastructure while
                the intelligence layer stayed frozen in place, we set out to
                change that. 3rd-AI was founded on a single conviction: that
                connected infrastructure should be able to sense its environment,
                understand what&apos;s happening, and act — without waiting for
                a human to tell it to."]
              </p>

              {/* Mission statement */}
              <div className="mt-10 rounded-xl border border-white/8 bg-white/4 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400/70">
                  Our Mission
                </p>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  To bring Ambient Intelligence to connected environments —
                  enabling infrastructure to sense, understand, orchestrate,
                  and adapt autonomously, without human intervention or
                  cloud dependency.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* ── Right — Founder card ───────────────────────────── */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-8">

              {/* Founder card */}
              <div className="rounded-2xl border border-white/8 bg-white/4 p-8">
                {/* Avatar placeholder + name */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 ring-1 ring-cyan-400/30">
                    <span className="text-lg font-bold text-cyan-400">SK</span>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">Sean Kim</p>
                    <p className="text-sm text-slate-400">Founder &amp; CEO, 3rd-AI</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-white/8" />

                {/* Bio */}
                <p className="text-base leading-7 text-slate-400">
                  Sean brings deep expertise in telecom OSS/BSS systems and a
                  career spent at the intersection of network operations and
                  software innovation. Having worked closely with operators on
                  the front lines of network management, he saw firsthand how
                  incumbent vendors and 30-year-old system foundations were
                  blocking the kind of adaptive intelligence that modern
                  connected infrastructure demands. 3rd-AI is his answer to that
                  gap.
                </p>

                {/* LinkedIn link */}
                <a
                  href="https://www.linkedin.com/in/sean-kim-2128391/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-opacity hover:opacity-70"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  View LinkedIn Profile
                </a>
              </div>

              {/* Two stat callouts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/8 bg-white/4 p-5">
                  <p className="text-2xl font-bold text-cyan-400">Telecom</p>
                  <p className="mt-1 text-sm text-slate-400">OSS/BSS domain expertise</p>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/4 p-5">
                  <p className="text-2xl font-bold text-cyan-400">On-Device</p>
                  <p className="mt-1 text-sm text-slate-400">Zero cloud. Zero egress.</p>
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
