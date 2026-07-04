export default function Architecture() {
  const layers = [
    {
      title: "Ambient Intelligence Engine",
      subtitle: "Cloud Intelligence",
    },
    {
      title: "Docker Edge Runtime",
      subtitle: "Local AI Execution",
    },
    {
      title: "MQTT Client",
      subtitle: "Real-Time Messaging",
    },
    {
      title: "Wi-Fi Access Point",
      subtitle: "Infrastructure Control",
    },
    {
      title: "Connected Environment",
      subtitle: "Users • Devices • Context",
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
            Deployment Architecture
          </p>

          <h2 className="text-5xl font-semibold tracking-tight text-white">
            From Cloud Intelligence to Edge Action
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Ambient Intelligence is deployed across cloud and edge,
            enabling autonomous decisions while maintaining
            real-time responsiveness.
          </p>

        </div>

        {/* Architecture Stack */}

        <div className="mx-auto flex max-w-md flex-col items-center">

          {layers.map((layer, index) => (
            <div
              key={layer.title}
              className="flex w-full flex-col items-center"
            >
              <div className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]">

                <h3 className="text-2xl font-semibold text-white">
                  {layer.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {layer.subtitle}
                </p>

              </div>

              {index !== layers.length - 1 && (
                <div className="flex h-14 items-center justify-center">
                  <div className="h-full w-px bg-gradient-to-b from-cyan-400/70 to-transparent" />
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}