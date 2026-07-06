import TelemetryField from "@/components/animation/TelemetryField";

export default function Telemetry() {
  return (
    <section className="relative overflow-hidden bg-black py-32">

      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.04),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            CONTINUOUS TELEMETRY
          </p>

          <h2 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
            Every Environment Tells a Story
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">
            Ambient Intelligence begins with continuous sensing. Telemetry
            streams from the environment are transformed into contextual
            awareness, enabling infrastructure to understand behavior before
            taking action.
          </p>

        </div>

        {/* Landscape Card */}
        <div className="mx-auto mt-20 max-w-6xl">

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">

            <TelemetryField />

          </div>

        </div>

      </div>

    </section>
  );
}