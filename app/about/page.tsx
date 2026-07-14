import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
        <section className="relative overflow-hidden bg-black pt-32 md:pt-56 pb-8 md:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(34,211,238,0.07),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.05),transparent_55%)]" />

          <div className="relative mx-auto max-w-7xl px-8">
            <FadeIn delay={0}>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                About 3rd-AI
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="max-w-4xl text-4xl md:text-6xl font-bold leading-[0.94] tracking-tight text-white xl:text-7xl">
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
        <section className="relative py-12 md:py-24">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

              {/* Left — story */}
              <FadeIn delay={0}>
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight text-white">
                    Founding Story
                  </h2>
                  <div className="mt-8 space-y-6 text-lg leading-8 text-slate-400">
                    <p>
                      After years at the intersection of telecom operations and software,
                      one contradiction became impossible to ignore. Operators were deploying
                      the most sophisticated connected infrastructure ever built — Wi-Fi 7,
                      5G, edge compute — while the systems responsible for managing it
                      remained largely unchanged from a previous era. The intelligence layer
                      had been left behind.
                    </p>
                    <p>
                      3rd-AI was founded on the conviction that this gap can be closed.
                      That connected infrastructure — the access points, the routers, the
                      edge devices already deployed in homes and buildings around the world
                      — carries enough signal to understand its own environment. And that
                      understanding should translate directly into action, quietly and
                      continuously, without human intervention, without cloud dependency,
                      and without changing a single piece of hardware.
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
                      body: "All inference runs locally on the device. Network traffic data never leaves the device — zero cloud egress, by architecture.",
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
                      className="rounded-xl border border-cyan-400/40 bg-[#030508] p-6 transition-all duration-300 hover:border-cyan-400/80"
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

        {/* ── Mission statement ───────────────────────────────── */}
        <section className="relative py-12 md:py-24">
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
        <section className="py-12 md:py-24">
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
      <Footer />
    </>
  );
}
