"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from "recharts"
import ChartCard from "../ChartCard"

const overrunData = [
  { dest: "Switzerland", overrun: 12.4 }, { dest: "New Zealand", overrun: 9.8 },
  { dest: "Japan", overrun: 6.2 }, { dest: "Italy", overrun: 4.1 },
  { dest: "Austria", overrun: 3.6 }, { dest: "Hungary", overrun: -1.2 },
  { dest: "Turkey", overrun: -3.8 },
].sort((a, b) => b.overrun - a.overrun)

const vendorData = [
  { vendor: "Vendor A", overrun: 4.2, cancel: 4.2 },
  { vendor: "Vendor B", overrun: 3.8, cancel: 5.1 },
  { vendor: "Vendor C", overrun: 6.1, cancel: 8.2 },
  { vendor: "Vendor D", overrun: 2.9, cancel: 3.8 },
  { vendor: "Vendor E", overrun: 9.4, cancel: 6.8 },
]

const marginData = [
  { dest: "Turkey", margin: 38.2 }, { dest: "Hungary", margin: 36.8 },
  { dest: "Austria", margin: 34.1 }, { dest: "Italy", margin: 31.4 },
  { dest: "Japan", margin: 29.8 }, { dest: "New Zealand", margin: 27.2 },
  { dest: "Switzerland", margin: 24.6 },
].sort((a, b) => b.margin - a.margin)

const tt = { contentStyle: { background: "#1E293B", border: "1px solid #334155", borderRadius: "8px" }, labelStyle: { color: "#F1F5F9", fontWeight: 700 }, itemStyle: { color: "#94A3B8" } }

export default function TravelCharts() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px", margin: "24px 0" }}>
      <ChartCard title="Cost Overrun % by Destination" subtitle="Switzerland and NZ bleeding RM 80,400/year combined">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={overrunData} margin={{ top: 10, right: 10, left: -10, bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="dest" tick={{ fill: "#94A3B8", fontSize: 10 }} angle={-20} textAnchor="end" />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} unit="%" />
            <Tooltip {...tt} formatter={(v?: number) => v !== undefined ? `${v}%` : ''} />
            <ReferenceLine y={0} stroke="#334155" />
            <ReferenceLine y={5} stroke="#F59E0B" strokeDasharray="4 4" label={{ value: "5% target", fill: "#F59E0B", fontSize: 11 }} />
            <Bar dataKey="overrun" name="Overrun %" radius={[4,4,0,0]}>
              {overrunData.map((e, i) => <Cell key={i} fill={e.overrun > 8 ? "#F43F5E" : e.overrun > 0 ? "#F59E0B" : "#10B981"} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Vendor Overrun % vs Cancel Rate" subtitle="Vendor E worst overrun — Vendor C worst cancel rate">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={vendorData} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="vendor" tick={{ fill: "#94A3B8", fontSize: 11 }} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} unit="%" domain={[0, 12]} />
            <Tooltip {...tt} formatter={(v?: number) => v !== undefined ? `${v}%` : ''} />
            <ReferenceLine y={5} stroke="#F59E0B" strokeDasharray="4 4" />
            <Bar dataKey="overrun" name="Cost Overrun %" fill="#F43F5E" radius={[4,4,0,0]} />
            <Bar dataKey="cancel" name="Cancel Rate %" fill="#7C3AED" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Profit Margin % by Destination" subtitle="Switzerland and NZ below 35% target — need repricing">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={marginData} layout="vertical" margin={{ top: 5, right: 20, left: 75, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis type="number" tick={{ fill: "#94A3B8", fontSize: 11 }} unit="%" domain={[0, 45]} />
            <YAxis type="category" dataKey="dest" tick={{ fill: "#94A3B8", fontSize: 11 }} width={90} />
            <Tooltip {...tt} formatter={(v?: number) => v !== undefined ? `${v}%` : ''} />
            <ReferenceLine x={35} stroke="#F59E0B" strokeDasharray="4 4" label={{ value: "Target 35%", fill: "#F59E0B", fontSize: 11, position: "top" }} />
            <Bar dataKey="margin" name="Margin %" radius={[0,4,4,0]}>
              {marginData.map((e, i) => <Cell key={i} fill={e.margin >= 35 ? "#10B981" : e.margin >= 28 ? "#F59E0B" : "#F43F5E"} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  )
}
