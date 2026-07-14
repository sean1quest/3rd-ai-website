"use client";

import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceArea,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

// Data extracted from screenshot — avg MB/min per hour, 2026-05-08 to 2026-05-12 (UTC+8)
// ra1 = 5 GHz, rai1 = 6 GHz
const data = [
  { hour: "00", ra1: 14.2, rai1: 1.8,  zone: "busy"  },
  { hour: "01", ra1: 16.1, rai1: 1.2,  zone: "busy"  },
  { hour: "02", ra1: 1.0,  rai1: 0.8,  zone: "quiet" },
  { hour: "03", ra1: 0.5,  rai1: 0.4,  zone: "quiet" },
  { hour: "04", ra1: 0.3,  rai1: 0.3,  zone: "quiet" },
  { hour: "05", ra1: 0.2,  rai1: 0.2,  zone: "quiet" },
  { hour: "06", ra1: 0.2,  rai1: 0.2,  zone: "quiet" },
  { hour: "07", ra1: 0.3,  rai1: 0.3,  zone: "quiet" },
  { hour: "08", ra1: 0.4,  rai1: 0.3,  zone: "quiet" },
  { hour: "09", ra1: 2.1,  rai1: 3.8,  zone: "quiet" },
  { hour: "10", ra1: 2.8,  rai1: 10.8, zone: "quiet" },
  { hour: "11", ra1: 34.8, rai1: 11.2, zone: "busy"  },
  { hour: "12", ra1: 34.5, rai1: 14.2, zone: "busy"  },
  { hour: "13", ra1: 20.5, rai1: 12.8, zone: "busy"  },
  { hour: "14", ra1: 18.2, rai1: 17.8, zone: "busy"  },
  { hour: "15", ra1: 23.5, rai1: 18.2, zone: "busy"  },
  { hour: "16", ra1: 21.2, rai1: 15.5, zone: "busy"  },
  { hour: "17", ra1: 12.8, rai1: 7.2,  zone: "busy"  },
  { hour: "18", ra1: 9.5,  rai1: 8.8,  zone: "busy"  },
  { hour: "19", ra1: 23.8, rai1: 12.5, zone: "busy"  },
  { hour: "20", ra1: 24.2, rai1: 7.8,  zone: "busy"  },
  { hour: "21", ra1: 20.8, rai1: 6.5,  zone: "busy"  },
  { hour: "22", ra1: 10.2, rai1: 7.8,  zone: "busy"  },
  { hour: "23", ra1: 8.5,  rai1: 8.2,  zone: "busy"  },
];

const formatY = (v: number) => `${v}M`;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-white/10 bg-[#04070C] px-4 py-3 text-xs shadow-lg">
      <p className="mb-2 font-semibold text-white">Hour {label}:00</p>
      {payload.map((p: any) => (
        <p key={p.dataKey} style={{ color: p.color }}>
          {p.name}: {p.value}M MB/min
        </p>
      ))}
    </div>
  );
};

export default function NetworkTrafficChart() {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="quietGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity={0.08} />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity={0.01} />
            </linearGradient>
          </defs>

          {/* Zone backgrounds */}
          <ReferenceArea x1="00" x2="01" fill="rgba(239,68,68,0.06)" />
          <ReferenceArea x1="02" x2="10" fill="rgba(34,211,238,0.06)" />
          <ReferenceArea x1="11" x2="23" fill="rgba(239,68,68,0.06)" />

          {/* Threshold lines */}
          <ReferenceLine y={13} stroke="rgba(34,211,238,0.25)" strokeDasharray="6 4" />
          <ReferenceLine y={5}  stroke="rgba(34,211,238,0.15)" strokeDasharray="6 4" />

          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />

          <XAxis
            dataKey="hour"
            tick={{ fill: "#64748B", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => v}
          />
          <YAxis
            tick={{ fill: "#64748B", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={formatY}
            width={36}
          />

          <Tooltip content={<CustomTooltip />} />

          <Legend
            wrapperStyle={{ fontSize: "11px", color: "#64748B", paddingTop: "12px" }}
            formatter={(value) => (
              <span style={{ color: "#94A3B8" }}>{value}</span>
            )}
          />

          <Line
            type="monotone"
            dataKey="ra1"
            name="5 GHz band"
            stroke="#22D3EE"
            strokeWidth={2}
            dot={{ fill: "#22D3EE", r: 3, strokeWidth: 0 }}
            activeDot={{ r: 5, fill: "#22D3EE" }}
          />
          <Line
            type="monotone"
            dataKey="rai1"
            name="6 GHz band"
            stroke="#94A3B8"
            strokeWidth={2}
            strokeDasharray="6 3"
            dot={{ fill: "#94A3B8", r: 3, strokeWidth: 0 }}
            activeDot={{ r: 5, fill: "#94A3B8" }}
          />
        </ComposedChart>
      </ResponsiveContainer>

      {/* Zone legend */}
      <div className="mt-4 flex items-center gap-6 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm" style={{ background: "rgba(34,211,238,0.15)" }} />
          <span>Quiet zone — autonomous sleep authorized</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm" style={{ background: "rgba(239,68,68,0.12)" }} />
          <span>Busy zone — radios remain active</span>
        </div>
      </div>
    </div>
  );
}
