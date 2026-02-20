"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer, Cell, ReferenceLine } from "recharts"
import ChartCard from "../ChartCard"

const regionData = [
  { region: "Kedah", rate: 8.2 }, { region: "KL", rate: 7.4 },
  { region: "Sabah", rate: 7.0 }, { region: "Selangor", rate: 6.2 },
  { region: "Sarawak", rate: 5.3 }, { region: "Penang", rate: 5.1 },
  { region: "JB", rate: 4.9 },
].sort((a, b) => b.rate - a.rate)

const hourData = [
  { hour: "00", rate: 9.1 }, { hour: "01", rate: 10.2 }, { hour: "02", rate: 11.4 },
  { hour: "03", rate: 10.8 }, { hour: "04", rate: 8.9 }, { hour: "05", rate: 5.2 },
  { hour: "06", rate: 4.1 }, { hour: "07", rate: 3.8 }, { hour: "08", rate: 4.2 },
  { hour: "09", rate: 4.5 }, { hour: "10", rate: 4.8 }, { hour: "11", rate: 5.1 },
  { hour: "12", rate: 5.4 }, { hour: "13", rate: 5.2 }, { hour: "14", rate: 4.9 },
  { hour: "15", rate: 5.0 }, { hour: "16", rate: 5.3 }, { hour: "17", rate: 5.6 },
  { hour: "18", rate: 5.8 }, { hour: "19", rate: 6.1 }, { hour: "20", rate: 6.4 },
  { hour: "21", rate: 6.8 }, { hour: "22", rate: 7.2 }, { hour: "23", rate: 8.4 },
]

const prData = [
  { threshold: "≥20", precision: 71, recall: 92 },
  { threshold: "≥25", precision: 78, recall: 90 },
  { threshold: "≥30", precision: 86, recall: 85 },
  { threshold: "≥35", precision: 90, recall: 78 },
  { threshold: "≥40", precision: 94, recall: 71 },
  { threshold: "≥45", precision: 95, recall: 63 },
  { threshold: "≥50", precision: 97, recall: 54 },
]
const tt = { contentStyle: { background: "#1E293B", border: "1px solid #334155", borderRadius: "8px" }, labelStyle: { color: "#F1F5F9", fontWeight: 700 }, itemStyle: { color: "#94A3B8" } }

export default function FraudCharts() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px", margin: "24px 0" }}>
      <ChartCard title="Fraud Rate % by Region" subtitle="Kedah and KL are 2× the national average of 6.2%">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={regionData} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="region" tick={{ fill: "#94A3B8", fontSize: 11 }} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} unit="%" domain={[0, 12]} />
            <Tooltip {...tt} formatter={(v?: number) => v !== undefined ? `${v}%` : ''} />
            <ReferenceLine y={6.2} stroke="#F59E0B" strokeDasharray="4 4" label={{ value: "Avg 6.2%", fill: "#F59E0B", fontSize: 11 }} />
            <Bar dataKey="rate" name="Fraud Rate" radius={[4,4,0,0]}>
              {regionData.map((e, i) => <Cell key={i} fill={e.rate >= 7 ? "#F43F5E" : e.rate >= 6.2 ? "#F59E0B" : "#10B981"} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Fraud Rate by Hour of Day (24h)" subtitle="Red bars = 12am–4am window, 2× daytime rate">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={hourData} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="hour" tick={{ fill: "#94A3B8", fontSize: 9 }} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} unit="%" domain={[0, 14]} />
            <Tooltip {...tt} formatter={(v?: number) => v !== undefined ? `${v}%` : ''} labelFormatter={(l) => `${l}:00`} />
            <ReferenceLine y={6.2} stroke="#F59E0B" strokeDasharray="4 4" />
            <Bar dataKey="rate" name="Fraud Rate">
              {hourData.map((e, i) => <Cell key={i} fill={parseInt(e.hour) <= 4 || parseInt(e.hour) === 23 ? "#F43F5E" : "#7C3AED"} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Precision vs Recall Curve" subtitle="Score ≥30 is the optimal balance point">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={prData} margin={{ top: 10, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="threshold" tick={{ fill: "#94A3B8", fontSize: 12 }} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} unit="%" domain={[50, 100]} />
            <Tooltip {...tt} formatter={(v?: number) => v !== undefined ? `${v}%` : ''} />
            <ReferenceLine x="≥30" stroke="#10B981" strokeDasharray="4 4" label={{ value: "✅ Optimal", fill: "#10B981", fontSize: 11 }} />
            <Line type="monotone" dataKey="precision" name="Precision" stroke="#38BDF8" strokeWidth={3} dot={{ fill: "#38BDF8", r: 4 }} />
            <Line type="monotone" dataKey="recall" name="Recall" stroke="#F43F5E" strokeWidth={3} dot={{ fill: "#F43F5E", r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  )
}
