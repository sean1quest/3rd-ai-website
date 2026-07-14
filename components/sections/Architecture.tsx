import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

const layers = [
  {
    step: "01",
    title: "Connected Environment",
    subtitle: "People · Activity · Devices · Infrastructure",
    body: "The physical environment continuously generates signals — device presence, traffic patterns, usage rhythms — that 3rd-AI listens to.",
  },
  {
    step: "02",
    title: "Container Runtime",
    subtitle: "OCI-Compliant · Zero Hardware Changes or Integration",
    body: "3rd-AI runs as a container on your existing infrastructure. No hardware modifications. No forklift upgrades. Deploys via standard container tooling.",
  },
  {
    step: "03",
    title: "Continuous Telemetry",
    subtitle: "Real-Time Environmental Awareness",
    body: "Raw signals are normalized, filtered, and streamed into the intelligence engine — every band, every device, every minute.",
  },
  {
    step: "04",
    title: "Ambient Intelligence Engine",
    subtitle: "Contextual Understanding · Pattern Learning · Decision Intelligence",
    body: "The core of the platform. Behavioral patterns are learned, context is understood, and autonomous decisions are made — entirely on-device.",
    badge: true,
  },
  {
    step: "05",
    title: "Autonomous Orchestration",
    subtitle: "Policy & Action Coordination",
    body: "Decisions are translated into precise, targeted actions across the infrastructure — executed autonomously without human intervention.",
  },
];

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden bg-black py-16 md:py-32"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.05),transparent_65%)]" />


      {/* Platform banner — bottom strip */}
      <div className="absolute inset-x-0 -bottom-16 h-56 overflow-hidden">
        <Image
          src="/images/platform-banner.png"
          alt=""
          fill
          className="object-cover opacity-50"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-8">

        {/* Header */}
        <FadeIn className="mx-auto mb-10 md:mb-20 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400 md:text-base">
            Ambient Intelligence Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            From Awareness to Autonomous Action
          </h2>
          <p className="mt-8 text-lg leading-8 text-slate-400">
            A layered system that turns raw environmental signals into autonomous,
            real-time action — deployed as a container on your existing infrastructure.
          </p>
        </FadeIn>

        {/* Horizontal pipeline */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0">
            {layers.map((layer, index) => (
              <div key={layer.title} className="flex flex-1 items-stretch">

                {/* Card — all cards share the same cyan style */}
                <div className="relative flex flex-1 flex-col rounded-2xl border border-cyan-400/40 bg-[#030508] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/80 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.4)]">

                  {/* Step number */}
                  <span className="mb-4 text-sm font-bold tracking-widest text-cyan-400">
                    {layer.step}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-semibold leading-snug text-cyan-400">
                    {layer.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="mt-2 text-sm leading-relaxed text-cyan-400/60">
                    {layer.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="my-4 h-px w-full bg-cyan-400/20" />

                  {/* Body */}
                  <p className="text-base leading-7 text-slate-400">
                    {layer.body}
                  </p>

                  {/* Badge — only on Ambient Intelligence Engine */}
                  {layer.badge && (
                    <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                      <span className="text-xs font-medium text-cyan-400">On-Device · Zero Egress</span>
                    </div>
                  )}
                </div>

                {/* Arrow connector */}
                {index !== layers.length - 1 && (
                  <div className="hidden lg:flex w-8 flex-shrink-0 items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10h12M12 5l5 5-5 5" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}

              </div>
            ))}
          </div>
        </FadeIn>

        {/* Footer callout */}
        <FadeIn delay={0.2}>
          <div className="mt-12 flex flex-col gap-6 px-2 py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <p className="text-base leading-7 text-slate-400">
              <span className="text-lg font-semibold text-cyan-400">Container-native deployment.</span>{" "}
              3rd-AI runs as an OCI-compliant container on your existing infrastructure —
              no hardware modifications, no vendor lock-in, no forklift upgrades required.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-medium lg:flex-shrink-0 lg:gap-6">
              <span className="text-lg font-semibold text-cyan-400/70">OCI-Compliant</span>
              <span className="text-slate-600">·</span>
              <span className="text-lg font-semibold text-cyan-400/70">Open Standards</span>
              <span className="text-slate-600">·</span>
              <span className="text-lg font-semibold text-cyan-400/70">Zero Hardware Changes or Integration</span>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
