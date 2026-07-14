import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "About — 3rd-AI",
  description:
    "The story behind 3rd-AI and the conviction that connected infrastructure should be able to sense, understand, and act autonomously.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black">

        {/* ── Hero banner ─────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-black pt-56 pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(34,211,238,0.07),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.05),transparent_55%)]" />

          <div className="relative mx-auto max-w-7xl px-8">
            <FadeIn delay={0}>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                About 3rd-AI
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="max-w-4xl text-6xl font-bold leading-[0.94] tracking-tight text-white xl:text-7xl">
                Networks grew smarter.{" "}
                <span className="text-cyan-400">The systems managing them didn&apos;t.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-10 max-w-2xl text-xl leading-9 text-slate-400">
                3rd-AI was built to close that gap — bringing Ambient
                Intelligence to connected infrastructure so it can sense,
                understand, orchestrate, and adapt without waiting for a human
                to tell it to.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── Founding story ──────────────────────────────────── */}
        <section className="relative py-24">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

              {/* Left — story */}
              <FadeIn delay={0}>
                <div>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400/70">
                    The Origin
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight text-white">
                    Founding Story
                  </h2>
                  <div className="mt-8 space-y-6 text-lg leading-8 text-slate-400">
                    <p>
                      [Founding story placeholder — e.g. &quot;After years working
                      inside the telecom OSS/BSS world, it became impossible to
                      ignore the contradiction: operators were deploying the most
                      sophisticated network hardware on the planet, managed by
                      systems built on 30-year-old foundations. The network
                      evolved. The intelligence layer stayed frozen.&quot;]
                    </p>
                    <p>
                      [Continue — e.g. &quot;3rd-AI was founded on the conviction
                      that this doesn&apos;t have to be the case. That the same
                      infrastructure carrying 5G and Wi-Fi 7 traffic should be
                      capable of understanding its own environment and acting on
                      that understanding — quietly, continuously, and without
                      cloud dependency.&quot;]
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Right — conviction pillars */}
              <FadeIn delay={0.15}>
                <div className="space-y-4">
                  {[
                    {
                      num: "01",
                      title: "Infrastructure should think for itself",
                      body: "Connected environments generate enough signal to understand their own state. Acting on that signal shouldn't require a human in the loop.",
                    },
                    {
                      num: "02",
                      title: "Privacy is non-negotiable",
                      body: "All inference runs locally on the device. Household and network traffic data never leaves the AP — zero cloud egress, by architecture.",
                    },
                    {
                      num: "03",
                      title: "The incumbent model is broken",
                      body: "Telecom OSS/BSS vendors have locked innovation out of the management layer for decades. 3rd-AI exists to prove there's a better way.",
                    },
                    {
                      num: "04",
                      title: "Energy efficiency is a first-class outcome",
                      body: "Autonomous optimization isn't just operationally better — it measurably reduces energy consumption and carbon emissions at fleet scale.",
                    },
                  ].map((p) => (
                    <div
                      key={p.num}
                      className="rounded-xl border border-white/8 bg-white/4 p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span className="mt-0.5 text-xs font-bold tracking-widest text-cyan-400/50">
                          {p.num}
                        </span>
                        <div>
                          <p className="font-semibold text-white">{p.title}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {p.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ── Founder ─────────────────────────────────────────── */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,211,238,0.04),transparent_55%)]" />
          <div className="mx-auto max-w-7xl px-8">

            <FadeIn delay={0}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400/70">
                Leadership
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                The Founder
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">

                {/* Founder card */}
                <div className="lg:col-span-1">
                  <div className="rounded-2xl border border-white/8 bg-white/4 p-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10 ring-1 ring-cyan-400/30">
                        <span className="text-xl font-bold text-cyan-400">SK</span>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">Sean Kim</p>
                        <p className="text-sm text-slate-400">Founder &amp; CEO</p>
                      </div>
                    </div>

                    <div className="my-6 h-px bg-white/8" />

                    <div className="space-y-3 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-cyan-400/50" />
                        <span>Telecom OSS/BSS specialist</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-cyan-400/50" />
                        <span>Network operations &amp; software innovation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-cyan-400/50" />
                        <span>Ambient Intelligence architecture</span>
                      </div>
                    </div>

                    <a
                      href="https://www.linkedin.com/company/3rd-ai.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-opacity hover:opacity-70"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn Profile
                    </a>
                  </div>
                </div>

                {/* Bio */}
                <div className="lg:col-span-2">
                  <div className="relative h-full rounded-2xl border border-white/8 bg-white/4 p-8">
                    <div className="absolute left-8 top-0 h-0.5 w-16 bg-cyan-400" />
                    <p className="text-lg leading-8 text-slate-300">
                      Sean brings deep expertise in telecom OSS/BSS systems and
                      a career spent at the intersection of network operations
                      and software innovation. Having worked closely with
                      operators on the front lines of network management, he saw
                      firsthand how incumbent vendors and decades-old system
                      foundations were blocking the kind of adaptive intelligence
                      that modern connected infrastructure demands.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-400">
                      That direct experience — watching networks grow exponentially
                      more capable while the systems managing them stayed frozen —
                      is what drove the founding of 3rd-AI. The conviction is
                      simple: infrastructure that carries Wi-Fi 7 and 5G traffic
                      should be intelligent enough to manage itself.
                    </p>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Mission statement ───────────────────────────────── */}
        <section className="relative py-24">
          <div className="mx-auto max-w-7xl px-8">
            <FadeIn delay={0}>
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-12 text-center">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400/70">
                  Our Mission
                </p>
                <p className="mx-auto max-w-3xl text-2xl font-semibold leading-snug text-white lg:text-3xl">
                  To bring Ambient Intelligence to connected environments —
                  enabling infrastructure to sense, understand, orchestrate,
                  and adapt{" "}
                  <span className="text-cyan-400">autonomously.</span>
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-8 text-center">
            <FadeIn delay={0}>
              <h2 className="text-3xl font-semibold text-white">
                Ready to see it in action?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
                Explore the platform or get in touch with our team for a
                technical briefing.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/#platform"
                  className="rounded-full bg-cyan-400 px-7 py-3.5 text-base font-semibold text-black transition-all duration-300 hover:scale-105"
                >
                  Explore the Platform
                </a>
                <a
                  href="/#contact"
                  className="rounded-full border border-white/15 px-7 py-3.5 text-base text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                >
                  Request a Technical Briefing
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
    </>
  );
}
