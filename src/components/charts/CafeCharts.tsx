"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer, Cell } from "recharts"
import ChartCard from "../ChartCard"

const categoryData = [
  { category: "Coffee", revenue: 42180, profit: 23960 },
  { category: "Matcha", revenue: 38960, profit: 26420 },
  { category: "Pastry", revenue: 17100, profit: 4860 },
]
const marginData = [
  { product: "Cold Brew", margin: 81.3 },
  { product: "Espresso", margin: 78.2 },
  { product: "Muffin", margin: 77.5 },
  { product: "Cappuccino", margin: 75.4 },
  { product: "Matcha Latte", margin: 75.6 },
  { product: "Latte", margin: 74.3 },
  { product: "Matcha Frappe", margin: 73.7 },
  { product: "Croissant", margin: 72.0 },
].sort((a, b) => b.margin - a.margin)
const monthlyData = [
  { month: "Jan", revenue: 6840 }, { month: "Feb", revenue: 7120 },
  { month: "Mar", revenue: 7890 }, { month: "Apr", revenue: 8240 },
  { month: "May", revenue: 9140 }, { month: "Jun", revenue: 9680 },
  { month: "Jul", revenue: 8920 }, { month: "Aug", revenue: 8450 },
  { month: "Sep", revenue: 7640 }, { month: "Oct", revenue: 8180 },
  { month: "Nov", revenue: 9340 }, { month: "Dec", revenue: 6820 },
]
const tt = { contentStyle: { background: "#1E293B", border: "1px solid #334155", borderRadius: "8px" }, labelStyle: { color: "#F1F5F9", fontWeight: 700 }, itemStyle: { color: "#94A3B8" } }

export default function CafeCharts() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px", margin: "24px 0" }}>
      <ChartCard title="Revenue vs Profit by Category" subtitle="Matcha generates MORE profit than Coffee despite less revenue">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={categoryData} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="category" tick={{ fill: "#94A3B8", fontSize: 12 }} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} tickFormatter={(v) => `RM ${(v/1000).toFixed(0)}k`} />
            <Tooltip {...tt} formatter={(v?: number) => v !== undefined ? `RM ${v.toLocaleString()}` : ''} />
            <Legend wrapperStyle={{ color: "#94A3B8", fontSize: 12 }} />
            <Bar dataKey="revenue" name="Revenue" fill="#38BDF8" radius={[4,4,0,0]} />
            <Bar dataKey="profit" name="Profit" fill="#10B981" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Contribution Margin % per Product" subtitle="Ranked high to low — Cold Brew leads, Croissant lowest">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={marginData} layout="vertical" margin={{ top: 5, right: 20, left: 70, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis type="number" tick={{ fill: "#94A3B8", fontSize: 11 }} unit="%" domain={[65, 90]} />
            <YAxis type="category" dataKey="product" tick={{ fill: "#94A3B8", fontSize: 11 }} width={90} />
            <Tooltip {...tt} formatter={(v?: number) => v !== undefined ? `${v}%` : ''} />
            <Bar dataKey="margin" name="Margin %" radius={[0,4,4,0]}>
              {marginData.map((e, i) => <Cell key={i} fill={e.margin >= 75 ? "#10B981" : "#F59E0B"} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Monthly Revenue Trend — Jan to Dec 2024" subtitle="Q2 and Q4 peaks guide staffing and Matcha stock decisions">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={monthlyData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="month" tick={{ fill: "#94A3B8", fontSize: 11 }} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} tickFormatter={(v) => `RM ${(v/1000).toFixed(0)}k`} />
            <Tooltip {...tt} formatter={(v?: number) => v !== undefined ? `RM ${v.toLocaleString()}` : ''} />
            <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#10B981" strokeWidth={3} dot={{ fill: "#10B981", r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  )
}
