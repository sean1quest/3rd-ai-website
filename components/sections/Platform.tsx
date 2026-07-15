import FadeIn from "@/components/ui/FadeIn";

const approach = [
  {
    num: "01",
    title: "Behavioral Traffic Analysis",
    body: "3rd-AI ingests per-band telemetry from the access point — every client, every minute. A KMeans clustering algorithm identifies IDLE vs ACTIVE traffic boundaries, self-calibrating thresholds per radio interface based on real household usage patterns.",
  },
  {
    num: "02",
    title: "Coverage Fidelity Gating",
    body: "Before acting, the platform validates telemetry coverage per hourly window. Hours below 65% fidelity are flagged as SPARSE SIGNAL — the agent abstains rather than misread a data gap as genuine inactivity. Conservative by design.",
  },
  {
    num: "03",
    title: "On-Device Inference",
    body: "The Ambient Intelligence Engine runs on-device by default, with optional cloud or TR-369 connectivity. It forecasts the next 24-hour optimization window using a structured behavioral context table, confirming a sleep schedule only when all radio interfaces agree.",
  },
  {
    num: "04",
    title: "Autonomous Radio Management",
    body: "Once confirmed, the platform delivers action payloads directly to the AP power-control API. High-band radios (5 GHz, 6 GHz) enter sleep state. Clients are steered to the 2.4 GHz anchor. Full audit trail written to local storage.",
  },
];

const specs = [
  { label: "Deployment", value: "OCI container · zero hardware changes" },
  { label: "Inference", value: "On-device, plus cloud or TR-369" },
  { label: "Telemetry", value: "Continuous, real-time monitoring" },
  { label: "Threshold", value: "Adaptive, tunes itself over time" },
  { label: "Standards", value: "Open, vendor- and chipset-agnostic" },
];

export default function Platform() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-[#030508] py-16 md:py-32"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.05),transparent_60%)]" />


      <div className="relative mx-auto max-w-7xl px-8">

        {/* Header */}
        <FadeIn className="mx-auto mb-10 md:mb-20 max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400 md:text-base">
            Platform
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-white">
            Wi-Fi Power Optimization
            <br />
            <span className="text-cyan-400">Driven by Behavior.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Most access points run all radios at full power, around the clock —
            regardless of whether anyone is using them. 3rd-AI learns real
            household usage patterns and autonomously powers down idle radios
            during confirmed quiet windows. No schedules. No rules.
          </p>
        </FadeIn>

        {/* Technical approach — 4 steps */}
        <FadeIn delay={0.1}>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-cyan-400/40 bg-cyan-400/20 md:grid-cols-2">
            {approach.map((step) => (
              <div
                key={step.num}
                className="group bg-[#030508] p-10 transition-all duration-300 hover:bg-white/[0.04] hover:shadow-[inset_0_0_50px_-12px_rgba(34,211,238,0.4)]"
              >
                <span className="mb-4 block text-sm font-bold tracking-widest text-cyan-400">
                  {step.num}
                </span>
                <h3 className="text-xl font-semibold text-cyan-400">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-400">
                  {step.body}
                </p>
                <div className="mt-8 h-px w-16 bg-cyan-400" />
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Technical specs bar */}
        <FadeIn delay={0.2}>
          <div className="mt-8 px-2 py-6">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400/70">
              Technical Specifications
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {specs.map((s) => (
                <div key={s.label}>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {s.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-300">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
