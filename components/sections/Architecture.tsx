export default function Architecture() {
  const layers = [
    {
      title: "Connected Environment",
      subtitle: "People • Devices • Infrastructure",
    },
    {
      title: "Continuous Telemetry",
      subtitle: "Real-Time Environmental Awareness",
    },
    {
      title: "Ambient Intelligence Engine",
      subtitle: "Contextual Understanding • Pattern Learning • Decision Intelligence",
      featured: true,
    },
    {
      title: "Autonomous Orchestration",
      subtitle: "Policy & Action Coordination",
    },
  ];

  return (
    <section
      id="architecture"
      className="relative overflow-hidden bg-black py-32"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.05),transparent_65%)]" />

      <div className="relative mx-auto max-w-6xl px-8">

        {/* Header */}

        <div className="mx-auto mb-24 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Ambient Intelligence Architecture
          </p>

          <h2 className="text-5xl font-semibold tracking-tight text-white">
            From Awareness to Autonomous Action
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Bringing Ambient Intelligence to connected environments—enabling
            infrastructure to sense, understand, orchestrate, and adapt
            autonomously.
          </p>

        </div>

        {/* Architecture Flow */}

        <div className="mx-auto flex max-w-lg flex-col items-center">

          {layers.map((layer, index) => (
            <div
              key={layer.title}
              className="flex w-full flex-col items-center"
            >
              <div
                className={`w-full rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-1 ${
                  layer.featured
                    ? "border border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_60px_rgba(0,217,255,0.15)]"
                    : "border border-white/10 bg-white/[0.03] hover:border-cyan-400/30 hover:bg-white/[0.05]"
                }`}
              >
                <h3
                  className={`text-2xl font-semibold ${
                    layer.featured ? "text-cyan-300" : "text-white"
                  }`}
                >
                  {layer.title}
                </h3>

                {layer.featured ? (
                  <div className="mt-6 space-y-2 text-slate-300">
                    <p>• Contextual Understanding</p>
                    <p>• Pattern Learning</p>
                    <p>• Decision Intelligence</p>
                  </div>
                ) : (
                  <p className="mt-3 text-slate-400">
                    {layer.subtitle}
                  </p>
                )}
              </div>

              {index !== layers.length - 1 && (
                <div className="flex h-14 items-center justify-center">
                  <div
                    className={`h-full w-px ${
                      layer.featured
                        ? "bg-gradient-to-b from-cyan-300 to-transparent"
                        : "bg-gradient-to-b from-cyan-400/70 to-transparent"
                    }`}
                  />
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}