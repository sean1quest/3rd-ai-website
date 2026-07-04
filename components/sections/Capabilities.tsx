export default function Capabilities() {
  const capabilities = [
    {
      title: "Energy Optimization",
      status: "Commercially Validated",
      description:
        "Autonomously reduces Wi-Fi infrastructure energy consumption while maintaining exceptional user experience.",
      bullets: [
        "Dynamic power optimization",
        "1.15 W reduction during inactive periods",
        "Continuous autonomous adaptation",
      ],
    },
    {
      title: "Coverage Optimization",
      status: "Platform Roadmap",
      description:
        "Continuously adapts Wi-Fi coverage and RF behavior based on contextual awareness and network conditions.",
      bullets: [
        "Adaptive RF optimization",
        "Coverage balancing",
        "Enhanced user experience",
      ],
    },
    {
      title: "Occupancy Intelligence",
      status: "Platform Roadmap",
      description:
        "Transforms infrastructure telemetry into occupancy awareness and behavioral intelligence without dedicated sensors.",
      bullets: [
        "Presence awareness",
        "Behavioral insights",
        "Context formation",
      ],
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-[#05080D] py-32"
    >
      {/* Ambient Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.04),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-8">
        {/* Section Header */}

        <div className="mx-auto mb-20 max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Platform Capabilities
          </p>

          <h2 className="text-5xl font-semibold tracking-tight text-white">
            Intelligence That Delivers Value
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Powered by a single Ambient Intelligence Platform, each capability
            transforms continuous sensing into measurable operational outcomes.
          </p>
        </div>

        {/* Capability Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.05]"
            >
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
                {capability.status}
              </div>

              <h3 className="mt-6 text-3xl font-semibold text-white">
                {capability.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-400">
                {capability.description}
              </p>

              <div className="mt-8 h-px bg-white/10" />

              <ul className="mt-8 space-y-4">
                {capability.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing Statement */}

        <div className="mx-auto mt-24 max-w-4xl text-center">
          <p className="text-xl leading-9 text-slate-300">
            One Ambient Intelligence Platform.
            <br />
            Continuously expanding capabilities across connected
            infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}