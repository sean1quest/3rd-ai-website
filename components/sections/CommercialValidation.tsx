"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import AnimatedStat from "@/components/ui/AnimatedStat";
import PowerConsumptionChart from "@/components/ui/PowerConsumptionChart";
import NetworkTrafficChart from "@/components/ui/NetworkTrafficChart";
import HourClassificationChart from "@/components/ui/HourClassificationChart";

const tabs = [
  {
    id: "traffic",
    label: "Network Traffic Profile",
    subtitle: "Avg MB/min per hour · 2026-05-08 to 2026-05-12 (UTC+8) · QUIET zone = autonomous sleep window",
    chart: <NetworkTrafficChart />,
  },
  {
    id: "classification",
    label: "Hour Classification",
    subtitle: "Behavioral classification output · per radio band · per hour of day",
    chart: <HourClassificationChart />,
  },
  {
    id: "power",
    label: "Power Consumption",
    subtitle: "5-15-5 field test · power-saving reduced consumption by 16% vs. baseline",
    chart: <PowerConsumptionChart />,
  },
];

function ChartTabs() {
  const [active, setActive] = useState("traffic");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-col gap-1 rounded-xl border border-white/8 bg-white/[0.02] p-1 sm:flex-row">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200
              ${active === tab.id
                ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/30"
                : "text-slate-500 hover:text-slate-300"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Chart area */}
      <div className="mt-6 px-2">
        <p className="mb-6 text-xs text-slate-500">{current.subtitle}</p>
        <div className="min-h-[280px]">
          {current.chart}
        </div>
      </div>
    </div>
  );
}

const validations = [
  {
    title: "Real-World Validation",
    description:
      "Successfully demonstrated on live connected infrastructure, validating the Ambient Intelligence Platform under real-world deployment conditions.",
  },
  {
    title: "Measurable Impact",
    description:
      "Autonomous optimization learns real usage patterns, identifies quiet periods, and reduces energy consumption — without impacting the user experience.",
  },
  {
    title: "Expandable Platform",
    description:
      "Designed to grow beyond energy optimization into new intelligent applications — all without changing the underlying platform or infrastructure.",
  },
  {
    title: "Ready for Operator Deployment",
    description:
      "Built for carrier-grade environments with a scalable, container-native architecture designed for deployment across large infrastructure fleets.",
  },
];

export default function CommercialValidation() {
  return (
    <section
      id="validation"
      className="relative overflow-hidden bg-[#04070C] py-12 md:py-32"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.05),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-8">

        {/* Header */}
        <FadeIn className="mx-auto mb-20 max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400 md:text-base">
            Market Validation
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Validated in Real-World Environments
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            The Ambient Intelligence Platform has been validated through
            real-world deployment, demonstrating measurable operational value
            while establishing the foundation for future intelligent
            applications.
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.1} className="mb-20 px-2">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Measured Results — Wi-Fi Power Optimization
            </p>
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              One example use case with proven results
            </h3>
            <p className="mt-4 text-slate-400">
              Learned from real user behavior patterns — without impacting
              the user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
            {[
              { value: 16, suffix: "%", label: "Power Reduction" },
              { value: 1520, suffix: " tCO₂e", label: "Avoided Annually", small: true },
              { value: 3.8, suffix: " GWh", label: "Annual Energy Saving*", decimals: 1 },
              { prefix: "$", value: 1.1, suffix: "M+", label: "Annual Cost Savings*", decimals: 1 },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-cyan-400/20 bg-[#04070C] p-4 transition-all duration-300 hover:border-cyan-400/60 hover:bg-white/[0.04] hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]"
              >
                <div className="whitespace-nowrap text-3xl font-bold text-cyan-400 md:text-4xl lg:text-5xl">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <AnimatedStat value={stat.value} decimals={stat.decimals} />
                  <span className={stat.small ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"}>
                    {stat.suffix}
                  </span>
                </div>
                <div className="mt-3 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-slate-500">
            *Projected at a deployment scale of 1 million access points.
          </p>
        </FadeIn>

        {/* Tabbed charts */}
        <FadeIn delay={0.15} className="mb-20">
          <ChartTabs />
        </FadeIn>

        {/* Validation Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {validations.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div className="h-full rounded-2xl border border-cyan-400/40 bg-[#04070C] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/80 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.4)]">
                <div className="mb-6 h-px w-16 bg-cyan-400" />
                <h3 className="text-xl font-semibold text-cyan-400">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Closing */}
        <FadeIn className="mx-auto mt-10 md:mt-24 max-w-4xl text-center">
          <p className="text-xl leading-9 text-slate-300">
            One use case. Proven results. More to come.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
