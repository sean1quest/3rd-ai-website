import FadeIn from "@/components/ui/FadeIn";

export default function Architecture() {
  const layers = [
    {
      title: "Connected Environment",
      subtitle: "People • Activity • Devices • Infrastructure",
    },
    {
      title: "Continuous Telemetry",
      subtitle: "Real-Time Environmental Awareness",
    },
    {
      title: "Ambient Intelligence Engine",
      subtitle:
        "Contextual Understanding • Pattern Learning • Decision Intelligence",
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
        <FadeIn className="mx-auto mb-24 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400 md:text-base">
            Ambient Intelligence Architecture
          </p>

          <h2 className="text-5xl font-semibold tracking-tight text-white">
            From Awareness to Autonomous Action
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            A layered system that turns raw environmental signals into
            autonomous, real-time action.
          </p>
        </FadeIn>

        {/* Architecture Flow */}
        <div className="mx-auto flex max-w-lg flex-col items-center">
          {layers.map((layer, index) => (
            <FadeIn
              key={layer.title}
              delay={index * 0.12}
              className="flex w-full flex-col items-center"
            >
              <div
                className={`w-full rounded-3xl text-center transition-all duration-300 hover:-translate-y-1 border border-white/10 bg-white/[0.03] hover:border-cyan-400/60 hover:bg-white/[0.08] hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)] ${
                  layer.featured ? "px-8 py-12" : "p-8"
                }`}
              >
                <h3 className="text-2xl font-semibold text-white">
                  {layer.title}
                </h3>

                {layer.featured ? (
                  <ul className="mt-8 list-disc list-inside space-y-3 text-left text-slate-300 mx-auto w-fit">
                    <li>Contextual Understanding</li>
                    <li>Pattern Learning</li>
                    <li>Decision Intelligence</li>
                  </ul>
                ) : (
                  <p className="mt-3 text-slate-400">
                    {layer.subtitle}
                  </p>
                )}
              </div>

              {index !== layers.length - 1 && (
                <div className="relative flex h-14 items-center justify-center">
                  <div className="h-full w-px bg-gradient-to-b from-cyan-400/70 to-transparent" />

                  <svg
                    className="absolute top-1/2 -translate-y-1/2"
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      stroke="#00D9FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
