export default function Platform() {
  const pillars = [
    {
      title: "Continuous Sensing",
      description:
        "Continuously collects telemetry from connected infrastructure to establish situational awareness in near real time.",
    },
    {
      title: "Contextual Understanding",
      description:
        "Transforms telemetry into meaningful context through behavioral learning, pattern recognition, and autonomous reasoning.",
    },
    {
      title: "Autonomous Orchestration",
      description:
        "Coordinates intelligent actions across connected infrastructure, enabling continuous optimization without manual intervention.",
    },
  ];

  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-[#030508] py-32"
    >
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.05),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-8">
        {/* Section Introduction */}

        <div className="mx-auto mb-24 max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Ambient Intelligence Platform
          </p>

          <p className="mx-auto max-w-3xl text-xl leading-9 text-slate-300">
            A unified intelligence layer that continuously senses,
            understands, and autonomously optimizes connected
            infrastructure.
          </p>

          {/* Divider */}

          <div className="my-16 flex items-center justify-center">
            <div className="h-px w-24 bg-cyan-400/30" />

            <div className="mx-5 h-2 w-2 rounded-full bg-cyan-400" />

            <div className="h-px w-24 bg-cyan-400/30" />
          </div>

          <h2 className="text-5xl font-semibold leading-tight tracking-tight text-white">
            One Platform.
            <br />
            Continuous Intelligence.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Built on continuous sensing, contextual understanding,
            and autonomous orchestration, the Ambient Intelligence
            Platform powers intelligent capabilities that evolve
            over time.
          </p>
        </div>

        {/* Platform Pillars */}

        <div className="mx-auto flex max-w-2xl flex-col items-center">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="flex w-full flex-col items-center"
            >
              <div className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]">
                <h3 className="text-2xl font-semibold text-white">
                  {pillar.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {pillar.description}
                </p>
              </div>

              {index !== pillars.length - 1 && (
                <div className="flex h-14 items-center justify-center">
                  <div className="h-full w-px bg-gradient-to-b from-cyan-400/70 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Closing Narrative */}

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