export default function CommercialValidation() {
  const validations = [
    {
      title: "Real-World Validation",
      description:
        "Successfully demonstrated on operational Wi-Fi infrastructure, validating the Ambient Intelligence Platform under real deployment conditions.",
    },
    {
      title: "Measurable Impact",
      description:
        "Autonomous optimization identifies inactive operating periods and reduces infrastructure energy consumption while maintaining a seamless user experience.",
    },
    {
      title: "Expandable Platform",
      description:
        "Designed to extend beyond Energy Optimization into Coverage Optimization, Occupancy Intelligence, and future Ambient Intelligence applications without changing the underlying platform.",
    },
    {
      title: "Ready for Operator Deployment",
      description:
        "Built for carrier-grade environments with a scalable architecture designed for deployment across large infrastructure fleets.",
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
            Market Validation
          </p>

          <h2 className="text-5xl font-semibold tracking-tight text-white">
            Validated in Real-World Environments
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            The Ambient Intelligence Platform has been validated through
            real-world deployment, demonstrating measurable operational value
            while establishing the foundation for future intelligent
            applications.
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
            Validated today. Built for the future of connected environments.
          </p>
        </div>
      </div>
    </section>
  );
}