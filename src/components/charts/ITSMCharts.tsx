"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer, ReferenceLine, Cell } from "recharts"
import ChartCard from "../ChartCard"

const teamData = [
  { team: "Team A", Compliance: 61, Breach: 39 },
  { team: "Team B", Compliance: 73.7, Breach: 26.3 },
  { team: "Team C", Compliance: 65, Breach: 35 },
  { team: "Team D", Compliance: 71.2, Breach: 28.8 },
]
const priorityData = [
  { priority: "P1 Critical", breach: 45.6 },
  { priority: "P2 High", breach: 35.2 },
  { priority: "P3 Medium", breach: 30.1 },
  { priority: "P4 Low", breach: 22.8 },
]
const trendData = [
  { month: "Jan 2024", breach: 34.1, target: 25 },
  { month: "Feb 2024", breach: 33.8, target: 25 },
  { month: "Mar 2024", breach: 29.4, target: 25 },
]
const tt = { contentStyle: { background: "#1E293B", border: "1px solid #334155", borderRadius: "8px" }, labelStyle: { color: "#F1F5F9", fontWeight: 700 }, itemStyle: { color: "#94A3B8" } }

export default function ITSMCharts() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px", margin: "24px 0" }}>
      <ChartCard title="SLA Compliance vs Breach Rate by Team" subtitle="Green = met SLA, Red = breached. Team A is critical.">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={teamData} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="team" tick={{ fill: "#94A3B8", fontSize: 12 }} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} unit="%" />
            <Tooltip {...tt} formatter={(v?: number) => v !== undefined ? `${v}%` : ''} />
            <Legend wrapperStyle={{ color: "#94A3B8", fontSize: 12 }} />
            <ReferenceLine y={25} stroke="#F59E0B" strokeDasharray="4 4" label={{ value: "25% limit", fill: "#F59E0B", fontSize: 11 }} />
            <Bar dataKey="Compliance" fill="#10B981" radius={[4,4,0,0]} />
            <Bar dataKey="Breach" fill="#F43F5E" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Breach Rate by Priority Level" subtitle="P1 Critical tickets breach at 45.6%">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={priorityData} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="priority" tick={{ fill: "#94A3B8", fontSize: 11 }} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} unit="%" domain={[0, 60]} />
            <Tooltip {...tt} formatter={(v?: number) => v !== undefined ? `${v}%` : ''} />
            <ReferenceLine y={25} stroke="#F59E0B" strokeDasharray="4 4" />
            <Bar dataKey="breach" name="Breach Rate" radius={[4,4,0,0]}>
              {priorityData.map((e, i) => <Cell key={i} fill={e.breach > 30 ? "#F43F5E" : "#F59E0B"} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Monthly Breach Trend — Q1 2024" subtitle="March improved after team realignment in late Feb">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={trendData} margin={{ top: 10, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="month" tick={{ fill: "#94A3B8", fontSize: 12 }} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} unit="%" domain={[0, 45]} />
            <Tooltip {...tt} formatter={(v?: number) => v !== undefined ? `${v}%` : ''} />
            <Legend wrapperStyle={{ color: "#94A3B8", fontSize: 12 }} />
            <ReferenceLine y={25} stroke="#F59E0B" strokeDasharray="4 4" label={{ value: "Contract limit", fill: "#F59E0B", fontSize: 11 }} />
            <Line type="monotone" dataKey="breach" name="Breach Rate" stroke="#F43F5E" strokeWidth={3} dot={{ fill: "#F43F5E", r: 6 }} />
            <Line type="monotone" dataKey="target" name="Target" stroke="#10B981" strokeWidth={2} strokeDasharray="5 5" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  )
}
