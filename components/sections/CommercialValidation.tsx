export default function CommercialValidation() {
  const validations = [
    {
      title: "Commercially Validated",
      description:
        "Energy Optimization has been successfully demonstrated on real Wi-Fi infrastructure, validating the Ambient Intelligence Platform in operational environments.",
    },
    {
      title: "Measurable Impact",
      description:
        "Autonomous optimization identifies inactive operating periods and reduces infrastructure energy consumption while maintaining seamless user experience.",
    },
    {
      title: "Platform Ready",
      description:
        "The same Ambient Intelligence Platform is designed to expand into Coverage Optimization and Occupancy Intelligence without changing the underlying architecture.",
    },
    {
      title: "Ready for Operator Deployment",
      description:
        "Built for carrier-grade environments with a scalable architecture that supports large-scale infrastructure deployments.",
    },
  ];

  return (
    <section
      id="validation"
      className="relative overflow-hidden bg-[#04070C] py-32"
    >
      {/* Ambient Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.05),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-8">
        {/* Header */}

        <div className="mx-auto mb-20 max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Commercial Validation
          </p>

          <h2 className="text-5xl font-semibold tracking-tight text-white">
            Proven Through Real-World Implementation
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Ambient Intelligence is more than a concept. Energy Optimization
            demonstrates how continuous sensing and autonomous orchestration
            translate into measurable operational value.
          </p>
        </div>

        {/* Validation Grid */}

        <div className="grid gap-8 md:grid-cols-2">
          {validations.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]"
            >
              <div className="mb-6 h-1.5 w-16 rounded-full bg-cyan-400" />

              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing */}

        <div className="mx-auto mt-24 max-w-4xl text-center">
          <p className="text-xl leading-9 text-slate-300">
            One Ambient Intelligence Platform.
            <br />
            Commercially validated today. Continuously expanding tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
}