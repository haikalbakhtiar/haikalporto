"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Cell } from "recharts"
import ChartCard from "../ChartCard"

const sellData = [
  { size: "XS", Women: 14, Men: 12, Accessories: 18 },
  { size: "S",  Women: 38, Men: 41, Accessories: 52 },
  { size: "M",  Women: 68, Men: 71, Accessories: 65 },
  { size: "L",  Women: 72, Men: 69, Accessories: 67 },
  { size: "XL", Women: 44, Men: 48, Accessories: 42 },
  { size: "XXL",Women: 16, Men: 19, Accessories: 14 },
]
const deadData = [
  { category: "Women", deadSKUs: 7 },
  { category: "Men", deadSKUs: 5 },
  { category: "Accessories", deadSKUs: 8 },
]
const mdData = [
  { category: "Women",       fullPrice: 68420, discounted: 58180 },
  { category: "Men",         fullPrice: 54890, discounted: 48340 },
  { category: "Accessories", fullPrice: 38200, discounted: 30920 },
]
const tt = { contentStyle: { background: "#1E293B", border: "1px solid #334155", borderRadius: "8px" }, labelStyle: { color: "#F1F5F9", fontWeight: 700 }, itemStyle: { color: "#94A3B8" } }

export default function FashionCharts() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px", margin: "24px 0" }}>
      <ChartCard title="Sell-Through Rate by Size & Category" subtitle="Below 20% dotted line = dead stock">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={sellData} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="size" tick={{ fill: "#94A3B8", fontSize: 12 }} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} unit="%" domain={[0, 85]} />
            <Tooltip {...tt} formatter={(v?: number) => v !== undefined ? `${v}%` : ''} />
            <Legend wrapperStyle={{ color: "#94A3B8", fontSize: 12 }} />
            <ReferenceLine y={20} stroke="#F43F5E" strokeDasharray="4 4" label={{ value: "Dead stock 20%", fill: "#F43F5E", fontSize: 11 }} />
            <ReferenceLine y={65} stroke="#10B981" strokeDasharray="4 4" label={{ value: "Target 65%", fill: "#10B981", fontSize: 11 }} />
            <Bar dataKey="Women" fill="#F59E0B" radius={[3,3,0,0]} />
            <Bar dataKey="Men" fill="#38BDF8" radius={[3,3,0,0]} />
            <Bar dataKey="Accessories" fill="#7C3AED" radius={[3,3,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Dead Stock SKU Count by Category" subtitle="18 SKUs total with sell-through below 20%">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={deadData} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="category" tick={{ fill: "#94A3B8", fontSize: 12 }} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} allowDecimals={false} />
            <Tooltip {...tt} formatter={(v?: number) => v !== undefined ? `${v} SKUs` : ''} />
            <Bar dataKey="deadSKUs" name="Dead SKUs" radius={[6,6,0,0]}>
              {deadData.map((_, i) => <Cell key={i} fill={i === 2 ? "#7C3AED" : "#F43F5E"} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Full-Price vs Post-Discount Revenue" subtitle="Gap = revenue lost to markdowns">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={mdData} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="category" tick={{ fill: "#94A3B8", fontSize: 12 }} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} tickFormatter={(v) => `RM ${(v/1000).toFixed(0)}k`} />
            <Tooltip {...tt} formatter={(v?: number) => v !== undefined ? `RM ${v.toLocaleString()}` : ''} />
            <Legend wrapperStyle={{ color: "#94A3B8", fontSize: 12 }} />
            <Bar dataKey="fullPrice" name="Full Price" fill="#10B981" radius={[4,4,0,0]} />
            <Bar dataKey="discounted" name="Post-Discount" fill="#F43F5E" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  )
}
