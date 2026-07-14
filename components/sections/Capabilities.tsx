import FadeIn from "@/components/ui/FadeIn";

export default function Capabilities() {
  const steps = [
    {
      number: "01",
      title: "Continuous Environmental Awareness",
      subtitle: "Real-Time Sensing",
      description:
        "Monitors people, activity, devices, and infrastructure around the clock to maintain real-time situational awareness.",
    },
    {
      number: "02",
      title: "Behavioral Intelligence",
      subtitle: "Trend Recognition",
      description:
        "Learns behavioral patterns, occupancy trends, and operational context to transform telemetry into meaningful understanding.",
    },
    {
      number: "03",
      title: "Decision Intelligence",
      subtitle: "Contextual Reasoning",
      description:
        "Determines the optimal response by combining learned context, operational objectives, and continuously evolving environmental conditions.",
    },
    {
      number: "04",
      title: "Coordinated Response",
      subtitle: "Autonomous Coordination",
      description:
        "Coordinates intelligent actions across connected infrastructure while maintaining service continuity and user experience.",
    },
    {
      number: "05",
      title: "Continuous Learning",
      subtitle: "Adaptive Optimization",
      description:
        "Learns from every outcome and steadily improves future decisions without manual intervention.",
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-black py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.05),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <FadeIn className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400 md:text-base">
            PLATFORM CAPABILITIES
          </p>

          <h2 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
            Intelligence in Action
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">
            The Ambient Intelligence Platform combines five core capabilities to
            continuously sense, understand, decide, orchestrate, and improve
            connected environments.
          </p>
        </FadeIn>

        {/* Timeline */}
        <div className="relative mx-auto mt-24 max-w-5xl">
          {/* Vertical Line */}
          <div className="absolute left-7 top-0 h-full w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent" />

          <ol className="space-y-16">
            {steps.map((step, index) => (
              <li key={step.number}>
                <FadeIn delay={index * 0.1} className="relative flex gap-8">
                  {/* Number */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyan-400/40 bg-black">
                    <span className="text-sm font-semibold text-cyan-400">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-white/[0.08] hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]">
                    <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                      <h3 className="text-3xl font-semibold text-white">
                        {step.title}
                      </h3>

                      <p className="text-cyan-400">
                        {step.subtitle}
                      </p>
                    </div>

                    <p className="mt-5 max-w-3xl leading-8 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
