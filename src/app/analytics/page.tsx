import Link from "next/link"

const CASES = [
  {
    href:"/itsm", icon:"🎫", color:"#38BDF8", title:"ITSM Service Desk Analytics",
    hook:"32.4% of tickets breached SLA — one team was the root cause.",
    details:"Analysed 4,508 Q1 tickets from ServiceNow. Identified Team A as the primary SLA breach driver at 39% — 14 points above the 25% contract threshold. Built breach-rate pivot by team × priority and presented a 3-action remediation plan to IT management.",
    tags:["SLA Compliance","Breach Rate","Team Performance","CSAT"],
    stats:[{ l:"Tickets", v:"4,508" },{ l:"Breach Rate", v:"32.4%" },{ l:"Team A", v:"39%" }],
  },
  {
    href:"/fraud", icon:"💳", color:"#7C3AED", title:"Payment Fraud Detection",
    hook:"3 flags predicted 85% of fraud. The pattern was already in the data.",
    details:"Built a 7-factor risk scoring model across 5,000 transactions. Foreign IP + New Device + After-Midnight combination flagged 18% fraud rate vs 6.2% baseline. Delivered precision/recall analysis and regional risk map to Risk Management.",
    tags:["Risk Scoring","Precision/Recall","Regional Analysis","2FA Policy"],
    stats:[{ l:"Transactions", v:"5,000" },{ l:"Detected", v:"85%" },{ l:"KL Rate", v:"7.4%" }],
  },
  {
    href:"/fashion", icon:"👗", color:"#F59E0B", title:"Fashion Retail Analytics",
    hook:"RM 24,000 trapped in dead stock. All the same 2 sizes.",
    details:"Analysed 450 SKUs across Women, Men, and Accessories. XS and XXL fell below the 20% dead-stock threshold while M and L hit 68–72%. Proposed procurement ratio shift and markdown trigger policy.",
    tags:["Sell-Through","Dead Stock","Markdown","Inventory"],
    stats:[{ l:"SKUs", v:"450" },{ l:"Dead Stock", v:"RM 24k" },{ l:"Erosion", v:"-8.9%" }],
  },
  {
    href:"/travel", icon:"✈️", color:"#F43F5E", title:"Travel Operations Analytics",
    hook:"Two destinations bleeding RM 80,000/year. Nobody had noticed.",
    details:"Reviewed 800 tours across 7 destinations. Switzerland (+12.4%) and New Zealand (+9.8%) overran every quarter — 47% of total overruns from 21% of volume. Vendor E identified. Delivered repricing and reallocation strategy.",
    tags:["Cost Overrun","Vendor Performance","Margin","Repricing"],
    stats:[{ l:"Tours", v:"800" },{ l:"Overrun", v:"RM 80,400" },{ l:"Margin", v:"31.2%" }],
  },
  {
    href:"/cafe", icon:"☕", color:"#10B981", title:"Cafe Profitability Analytics",
    hook:"Most popular drink was least profitable. Matcha told a different story.",
    details:"Processed 4,000 POS transactions for full year 2024. Matcha generated 47.8% of total profit from only 22% of orders. Top CLV customers were all Matcha buyers. Proposed loyalty card and staff upsell training.",
    tags:["Contribution Margin","CLV","Product Mix","Loyalty"],
    stats:[{ l:"Transactions", v:"4,000" },{ l:"Matcha Share", v:"47.8%" },{ l:"Best Margin", v:"67.8%" }],
  },
]

export default function Analytics() {
  return (
    <div style={{ background:"#0F172A", minHeight:"100vh" }}>
      <section style={{ background:"#0A0F1E", padding:"60px 24px 48px", borderBottom:"1px solid #1E293B" }}>
        <div style={{ maxWidth:"900px", margin:"0 auto" }}>
          <div style={{ fontSize:"11px", color:"#64748B", fontWeight:700, letterSpacing:"2px", marginBottom:"12px" }}>PORTFOLIO</div>
          <h1 style={{ fontSize:"clamp(28px,4vw,48px)", fontWeight:800, color:"#F1F5F9", marginBottom:"12px" }}>Data Analytics</h1>
          <p style={{ color:"#94A3B8", fontSize:"16px", lineHeight:1.75, maxWidth:"680px" }}>
            5 end-to-end case studies. Each follows the full analyst workflow: extract → clean → transform → analyse → visualise → report to management.
          </p>
        </div>
      </section>
      <section style={{ maxWidth:"1100px", margin:"0 auto", padding:"52px 24px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:"22px" }}>
          {CASES.map(c => (
            <Link key={c.href} href={c.href} style={{ background:"#1E293B", border:"1px solid #334155", borderRadius:"16px", padding:"28px", display:"block", textDecoration:"none", borderLeft:`4px solid ${c.color}` }}>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"12px" }}>
                <span style={{ fontSize:"28px" }}>{c.icon}</span>
                <span style={{ fontWeight:700, fontSize:"16px", color:"#F1F5F9" }}>{c.title}</span>
              </div>
              <p style={{ color:c.color, fontStyle:"italic", fontSize:"14px", marginBottom:"12px", lineHeight:1.6 }}>&ldquo;{c.hook}&rdquo;</p>
              <p style={{ color:"#94A3B8", fontSize:"13px", lineHeight:1.75, marginBottom:"16px" }}>{c.details}</p>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"8px", marginBottom:"14px" }}>
                {c.stats.map(st => (
                  <div key={st.l} style={{ background:"#0F172A", borderRadius:"8px", padding:"10px", textAlign:"center" }}>
                    <div style={{ fontSize:"16px", fontWeight:800, color:c.color }}>{st.v}</div>
                    <div style={{ fontSize:"10px", color:"#64748B", marginTop:"3px" }}>{st.l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
                {c.tags.map(t => <span key={t} style={{ background:"#0F172A", color:c.color, padding:"3px 10px", borderRadius:"12px", fontSize:"11px", border:`1px solid ${c.color}33` }}>{t}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
