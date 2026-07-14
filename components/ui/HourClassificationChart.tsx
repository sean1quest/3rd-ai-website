"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

// Classification per hour per interface — extracted from screenshot
// status: Q=QUIET, B=BUSY, S=SPARSE
const ra1  = ["B","B","Q","Q","Q","Q","Q","Q","Q","Q","Q","B","B","B","B","B","B","Q","B","B","B","B","Q","Q"];
const rai1 = ["Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","B","B","Q","B","B","B","B","B","B","B","B","B","B"];

const hours = Array.from({ length: 24 }, (_, i) => i);

// Transform into recharts-friendly format for two horizontal bars
const ra1Data  = hours.map(h => ({ hour: h, status: ra1[h]  }));
const rai1Data = hours.map(h => ({ hour: h, status: rai1[h] }));

const COLOR = { Q: "#22D3EE", B: "#EF4444", S: "#64748B" };
const LABEL = { Q: "Quiet", B: "Busy", S: "Sparse" };

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const status = payload[0]?.payload?.status;
  return (
    <div className="rounded-xl border border-white/10 bg-[#04070C] px-4 py-3 text-xs shadow-lg">
      <p className="mb-1 font-semibold text-white">Hour {label}:00</p>
      <p style={{ color: COLOR[status as keyof typeof COLOR] }}>
        {LABEL[status as keyof typeof LABEL]}
      </p>
    </div>
  );
};

function InterfaceRow({ label, data }: { label: string; data: typeof ra1Data }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-10 flex-shrink-0 text-right text-xs font-medium text-slate-400">{label}</span>
      <div className="flex flex-1 gap-px">
        {data.map((d) => (
          <div
            key={d.hour}
            className="group relative flex-1 cursor-default rounded-sm transition-opacity hover:opacity-80"
            style={{
              height: "40px",
              background: COLOR[d.status as keyof typeof COLOR],
              opacity: d.status === "Q" ? 0.8 : d.status === "B" ? 0.75 : 0.4,
            }}
            title={`Hour ${d.hour}:00 — ${LABEL[d.status as keyof typeof LABEL]}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HourClassificationChart() {
  return (
    <div className="w-full">
      {/* Hour axis */}
      <div className="mb-3 flex items-center gap-4">
        <span className="w-10 flex-shrink-0" />
        <div className="flex flex-1">
          {hours.map((h) => (
            <div key={h} className="flex-1 text-center text-xs text-slate-600">
              {h % 3 === 0 ? h : ""}
            </div>
          ))}
        </div>
      </div>

      {/* Rows */}
      <div className="space-y-3">
        <InterfaceRow label="6 GHz" data={rai1Data} />
        <InterfaceRow label="5 GHz" data={ra1Data}  />
      </div>

      {/* Hour axis bottom */}
      <div className="mt-2 flex items-center gap-4">
        <span className="w-10 flex-shrink-0" />
        <div className="flex flex-1">
          {hours.map((h) => (
            <div key={h} className="flex-1 text-center text-xs text-slate-600">
              {h % 3 === 0 ? h : ""}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-5 flex items-center gap-6 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-cyan-400/80" />
          <span>Quiet — sleep authorized</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-red-500/75" />
          <span>Busy — radios active</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-slate-500/60" />
          <span>Sparse data</span>
        </div>
      </div>
    </div>
  );
}
