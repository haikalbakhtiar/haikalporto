import PageHero from "../../components/PageHero"
import FindingBox from "../../components/FindingBox"
import ActionBox from "../../components/ActionBox"
import DataTable from "../../components/DataTable"
import KPICard from "../../components/KPICard"
import FashionCharts from "@/components/charts/FashionCharts"

const step = { background: "#1E293B", borderRadius: "12px", padding: "28px", border: "1px solid #334155", marginBottom: "24px" } as React.CSSProperties
const h2s = { fontSize: "22px", fontWeight: 800, color: "#F1F5F9", marginBottom: "8px" } as React.CSSProperties
const h3s = { fontSize: "17px", fontWeight: 700, color: "#F59E0B", marginTop: "22px", marginBottom: "10px" } as React.CSSProperties
const ps = { color: "#94A3B8", lineHeight: 1.75, fontSize: "14px", margin: "10px 0" } as React.CSSProperties
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "14px", margin: "18px 0" } as React.CSSProperties

function Num({ n }: { n: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#F59E0B", color: "#0F172A", borderRadius: "50%", width: "34px", height: "34px", fontWeight: 800, fontSize: "15px", marginBottom: "12px" }}>
      {n}
    </div>
  )
}

export default function Fashion() {
  return (
    <div style={{ background: "#0F172A", minHeight: "100vh" }}>
      <PageHero
        icon="👗"
        title="Fashion Retail Analytics"
        hook="RM 24,000 trapped in unsold inventory — and it was all the same 2 sizes. The data showed exactly which to stop ordering."
        tags={["Sell-Through Rate", "Dead Stock Detection", "Markdown Impact", "Inventory Turnover", "Size-Level Analysis"]}
        stats={[
          { label: "SKUs Analysed", value: "450" },
          { label: "Dead Stock SKUs", value: "18" },
          { label: "Trapped Value", value: "RM 24k" },
          { label: "Discount Revenue", value: "32%" },
          { label: "Margin Erosion", value: "-8.9%" },
        ]}
      />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px" }}>

        <div style={step}>
          <Num n="1" />
          <h2 style={h2s}>Step 1 — Data Extraction</h2>
          <p style={ps}>450 active SKUs were exported from the inventory management system and POS covering Women, Men, and Accessories across Physical Store and Online channels.</p>
          <DataTable
            caption="Raw export — 10 sample SKU records"
            headers={["SKU", "Category", "Sub", "Size", "Channel", "Units In", "Units Sold", "Orig Price", "Discount"]}
            rows={[
              ["SKU-1000", "Women", "Dress", "M", "Physical", "120", "96", "RM 189", "0%"],
              ["SKU-1001", "Women", "Dress", "XS", "Online", "80", "9", "RM 189", "0%"],
              ["SKU-1002", "Men", "Shirt", "L", "Physical", "150", "118", "RM 145", "0%"],
              ["SKU-1003", "Men", "Shirt", "XXL", "Online", "95", "16", "RM 145", "30%"],
              ["SKU-1004", "Accessories", "Bag", "M", "Physical", "60", "48", "RM 220", "0%"],
              ["SKU-1005", "Women", "Jeans", "XS", "Online", "75", "8", "RM 210", "40%"],
              ["SKU-1006", "Men", "Jacket", "L", "Physical", "88", "71", "RM 340", "0%"],
              ["SKU-1007", "Accessories", "Watch", "S", "Online", "45", "12", "RM 480", "25%"],
              ["SKU-1008", "Women", "Blouse", "M", "Physical", "110", "87", "RM 128", "0%"],
              ["SKU-1009", "Men", "Polo", "XXL", "Physical", "90", "14", "RM 118", "40%"],
            ]}
          />
        </div>

        <div style={step}>
          <Num n="2" />
          <h2 style={h2s}>Step 2 — Data Cleaning</h2>
          <DataTable
            caption="Issues found and resolved"
            headers={["Issue", "Count", "Action", "Result"]}
            rows={[
              ["Duplicate SKU entries", "12", "Removed — kept latest", "438 clean records"],
              ["Units Sold > Units Received", "4", "Capped at Units Received", "Corrected"],
              ["Blank discount column", "89", "Set to 0% — confirmed full-price", "Imputed"],
              ["Negative revenue records", "2", "Removed — returns error", "Dropped"],
              ["Blank Channel field", "15", "Set to Physical Store", "Imputed"],
            ]}
          />
        </div>

        <div style={step}>
          <Num n="3" />
          <h2 style={h2s}>Step 3 — Transform: VLOOKUP + Calculated Fields + Pivot</h2>
          <p style={ps}>VLOOKUP joined the COGS reference table to each SKU. Four retail metrics were calculated per row. A Pivot Table grouped by Size x Category to surface the sell-through pattern.</p>
          <DataTable
            caption="Calculated fields added"
            headers={["Metric", "Formula", "Purpose"]}
            rows={[
              ["Sell-Through Rate", "Units Sold / Units Received", "How much stock actually sold"],
              ["Dead Stock Flag", "IF(Sell-Through < 20%, 1, 0)", "Flags non-moving inventory"],
              ["Actual Revenue", "Units Sold x Sell Price", "Revenue after discount"],
              ["Gross Margin %", "(Revenue - COGS) / Revenue x 100", "Profitability per SKU"],
            ]}
          />
          <h3 style={h3s}>Pivot Output — Sell-Through % by Size x Category</h3>
          <DataTable
            caption="This is what the management chart was built from"
            headers={["Size", "Women", "Men", "Accessories", "Avg", "Dead Stock?"]}
            rows={[
              ["XS", "14%", "12%", "18%", "14.7%", "🔴 YES"],
              ["S", "38%", "41%", "52%", "43.7%", "🟡 Below Target"],
              ["M", "68%", "71%", "65%", "68.0%", "🟢 Strong"],
              ["L", "72%", "69%", "67%", "69.3%", "🟢 Strong"],
              ["XL", "44%", "48%", "42%", "44.7%", "🟡 Below Target"],
              ["XXL", "16%", "19%", "14%", "16.3%", "🔴 YES"],
            ]}
          />
          <FindingBox>
            <strong>M and L sizes sell at 68–69% yet represent only 35% of total units ordered.</strong> XS and XXL fall below the 20% dead-stock threshold across all 3 categories. RM 24,197 is locked in non-moving XS/XXL units — cash that should be going to M/L restocking.
          </FindingBox>
        </div>

        <div style={step}>
          <Num n="4" />
          <h2 style={h2s}>Step 4 — Analysis</h2>
          <div style={grid}>
            <KPICard value="48.2%" label="Avg Sell-Through" color="#F59E0B" sub="Target: 65%" />
            <KPICard value="32%" label="Revenue from Discounts" color="#F43F5E" />
            <KPICard value="-8.9%" label="Margin Erosion" color="#F43F5E" />
            <KPICard value="RM 24k" label="Dead Stock Value" color="#F43F5E" />
          </div>
          <DataTable
            caption="Markdown impact by category"
            headers={["Category", "Full-Price Revenue", "Post-Discount Revenue", "Margin Before", "Margin After", "Erosion"]}
            rows={[
              ["Women", "RM 68,420", "RM 58,180", "52.3%", "44.1%", "-8.2%"],
              ["Men", "RM 54,890", "RM 48,340", "49.8%", "41.9%", "-7.9%"],
              ["Accessories", "RM 38,200", "RM 30,920", "58.4%", "47.6%", "-10.8%"],
              ["TOTAL", "RM 161,510", "RM 137,440", "53.4%", "44.5%", "-8.9%"],
            ]}
          />
          <FindingBox>
            <strong>30% of all revenue came from discounted items, reducing gross margin by 8.9%.</strong> Accessories suffered most — XS/XXL Accessories SKUs were discounted repeatedly to force clearance, destroying margin on the highest-pricing-power category.
          </FindingBox>
        </div>

        <div style={step}>
          <Num n="5" />
          <h2 style={h2s}>Step 5 — Visualisation</h2>
          <FashionCharts />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", margin: "16px 0" }}>
            {[
              ["Sell-Through Rate by Size and Category", "Grouped bar — M/L at 68-69%, XS/XXL below 20%. Visual mandate to stop over-ordering extreme sizes."],
              ["Dead Inventory Count by Category", "Bar — 18 dead SKUs, Accessories worst with 8. Tells management exactly where the problem is."],
              ["Markdown Impact: Full Price vs Discounted", "Side-by-side bars — RM 24k lost to discounting. Drives markdown policy tightening conversation."],
            ].map(([t, d]) => (
              <div key={t} style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "8px", padding: "16px" }}>
                <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: "13px", marginBottom: "7px" }}>{t}</div>
                <div style={{ color: "#64748B", fontSize: "12px", lineHeight: 1.6 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={step}>
          <Num n="6" />
          <h2 style={h2s}>Step 6 — Report to Management</h2>
          <DataTable
            caption="Actions submitted from this analysis"
            headers={["Finding", "Action Required", "Owner", "Deadline", "Expected Impact"]}
            rows={[
              ["XS/XXL dead stock RM 24k", "Freeze all XS/XXL reorders immediately", "Procurement Manager", "This week", "Stops new dead stock"],
              ["XS/XXL unsold units", "40% markdown clearance campaign", "Retail Manager", "This weekend", "Recover ~RM 14k"],
              ["M/L underordered vs demand", "Shift order ratio to 50% M/L from 35%", "Procurement Manager", "Next order cycle", "Sell-through 48% to 62%"],
              ["Markdown eroding margin", "Enforce Week 6/8 markdown trigger policy", "Operations Director", "2 weeks", "Stop unplanned discounting"],
            ]}
          />
          <ActionBox title="WHY MANAGEMENT MUST ACT">
            <ul style={{ paddingLeft: "18px", lineHeight: 2.1, fontSize: "14px" }}>
              <li><strong>Cash flow:</strong> RM 24,197 tied in XS/XXL cannot be reinvested in M/L. Every week they sit, recovery value drops further.</li>
              <li><strong>Margin decay:</strong> Currently at 38% avg discount. Trending toward 50%+ after week 8. The clearance window closes in 3 weeks as Q2 arrives.</li>
              <li><strong>Next season risk:</strong> Without a procurement ratio change now, the same problem repeats next quarter with fresh stock in the same wrong proportions.</li>
            </ul>
          </ActionBox>
        </div>

      </div>
    </div>
  )
}
