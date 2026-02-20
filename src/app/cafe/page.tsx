"use client"
import PageHero from "@/components/PageHero"
import FindingBox from "@/components/FindingBox"
import ActionBox from "@/components/ActionBox"
import DataTable from "@/components/DataTable"
import KPICard from "@/components/KPICard"
import CafeCharts from "@/components/charts/CafeCharts"

const step:React.CSSProperties={background:"#1E293B",borderRadius:"12px",padding:"28px",border:"1px solid #334155",marginBottom:"24px"}
const h2:React.CSSProperties={fontSize:"22px",fontWeight:800,color:"#F1F5F9",marginBottom:"8px",marginTop:0}
const h3:React.CSSProperties={fontSize:"17px",fontWeight:700,color:"#10B981",marginTop:"22px",marginBottom:"10px"}
const p:React.CSSProperties={color:"#94A3B8",lineHeight:1.75,fontSize:"14px",margin:"10px 0"}
const grid:React.CSSProperties={display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(175px,1fr))",gap:"14px",margin:"18px 0"}
const N=({n}:{n:string})=><div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",background:"#10B981",color:"#0F172A",borderRadius:"50%",width:"34px",height:"34px",fontWeight:800,fontSize:"15px",marginBottom:"12px"}}>{n}</div>

export default function Cafe() {
  return (
    <div style={{background:"#0F172A",minHeight:"100vh"}}>
      <PageHero icon="☕" title="Cafe Profitability Analytics"
        hook="The most popular drink was also the least profitable. Matcha had half the orders but generated more total profit than Coffee."
        tags={["Contribution Margin","Product Mix","Customer Lifetime Value","Discount Impact","Monthly Trend"]}
        stats={[{label:"Transactions",value:"4,000"},{label:"Period",value:"Jan–Dec 2024"},{label:"Total Revenue",value:"RM 98,240"},{label:"Total Profit",value:"RM 38,120"},{label:"Best Margin",value:"67.8%"}]} />
      <div style={{maxWidth:"1100px",margin:"0 auto",padding:"48px 24px"}}>

        <div style={step}><N n="1"/>
          <h2 style={h2}>Step 1 — Data Extraction from POS System</h2>
          <p style={p}>4,000 transaction records were exported from the Square POS system for the full year 2024. Each row is one order: product name, quantity, sell price, discount applied, and customer ID for CLV tracking.</p>
          <DataTable caption="Sample raw POS export — 10 transactions"
            headers={["TXN ID","Date","Customer ID","Product","Type","Qty","Price","Discount","Revenue"]}
            rows={[
              ["TXN-00001","2024-01-04","CUST-0042","Matcha Latte","Matcha","1","RM 9.00","0%","RM 9.00"],
              ["TXN-00002","2024-01-04","CUST-0118","Latte","Coffee","2","RM 7.00","0%","RM 14.00"],
              ["TXN-00003","2024-01-05","CUST-0203","Croissant","Pastry","1","RM 5.00","15%","RM 4.25"],
              ["TXN-00004","2024-01-06","CUST-0042","Cold Brew","Coffee","1","RM 8.00","0%","RM 8.00"],
              ["TXN-00005","2024-01-07","CUST-0089","Matcha Frappe","Matcha","2","RM 9.50","0%","RM 19.00"],
              ["TXN-00006","2024-01-08","CUST-0312","Cappuccino","Coffee","1","RM 6.50","20%","RM 5.20"],
              ["TXN-00007","2024-01-09","CUST-0156","Banana Muffin","Pastry","3","RM 4.00","0%","RM 12.00"],
              ["TXN-00008","2024-01-10","CUST-0042","Matcha Latte","Matcha","1","RM 9.00","10%","RM 8.10"],
              ["TXN-00009","2024-01-11","CUST-0271","Espresso","Coffee","2","RM 5.50","0%","RM 11.00"],
              ["TXN-00010","2024-01-12","CUST-0118","Cheese Danish","Pastry","1","RM 4.50","0%","RM 4.50"],
            ]} />
        </div>

        <div style={step}><N n="2"/>
          <h2 style={h2}>Step 2 — Data Cleaning</h2>
          <DataTable caption="Issues found and resolved"
            headers={["Issue","Count","Action","Result"]}
            rows={[
              ["Zero-value transactions (voided orders)","34","Removed","Excluded"],
              ["Duplicate TXN IDs (double-scan)","8","Removed","Dropped"],
              ["Discount > 100% (cashier error)","2","Removed and flagged","Dropped"],
              ["Unknown product names","11","Mapped via VLOOKUP to product master","Resolved"],
              ["Missing Customer ID (walk-in)","156","Assigned WALK-IN — excluded from CLV","Flagged"],
            ]} />
        </div>

        <div style={step}><N n="3"/>
          <h2 style={h2}>Step 3 — Transform: VLOOKUP + Profit Calculation + Pivot</h2>
          <p style={p}>VLOOKUP joined the product cost table to each transaction row, enabling per-transaction profit. CLV was built by aggregating all profit by Customer ID in a secondary pivot table.</p>
          <DataTable caption="Calculated fields added"
            headers={["Metric","Formula","Purpose"]}
            rows={[
              ["Cost per Item","VLOOKUP(Product, CostTable, 2, 0)","Join COGS to each row"],
              ["Profit","Revenue − (Cost × Qty)","Contribution per transaction"],
              ["Margin %","Profit ÷ Revenue × 100","Profitability ratio"],
              ["CLV","SUMIF(Customer_ID, ..., Profit)","Total lifetime profit per customer"],
            ]} />
          <h3 style={h3}>Pivot Output — Contribution Margin by Product</h3>
          <DataTable caption="Products ranked by margin % — drives upsell training priorities"
            headers={["Product","Type","Price","Cost","Margin %","Avg Orders/Day"]}
            rows={[
              ["Cold Brew","Coffee","RM 8.00","RM 1.50","81.3%","6.4"],
              ["Matcha Latte","Matcha","RM 9.00","RM 2.20","75.6%","10.8"],
              ["Matcha Frappe","Matcha","RM 9.50","RM 2.50","73.7%","8.2"],
              ["Latte","Coffee","RM 7.00","RM 1.80","74.3%","14.2"],
              ["Cappuccino","Coffee","RM 6.50","RM 1.60","75.4%","9.8"],
              ["Espresso","Coffee","RM 5.50","RM 1.20","78.2%","5.1"],
              ["Croissant","Pastry","RM 5.00","RM 1.40","72.0%","9.2"],
              ["Banana Muffin","Pastry","RM 4.00","RM 0.90","77.5%","7.8"],
            ]} />
          <FindingBox>
            <strong>Coffee has the highest order volume (Latte: 14.2/day) but Matcha generates more total profit.</strong> Matcha Latte and Matcha Frappe together account for 38% of monthly profit from just 22% of orders. Pastries are high-frequency, low-ticket — lots of staff effort for small margin contribution.
          </FindingBox>
        </div>

        <div style={step}><N n="4"/>
          <h2 style={h2}>Step 4 — Analysis</h2>
          <div style={grid}>
            <KPICard value="RM 98,240" label="Total Revenue 2024" color="#10B981" />
            <KPICard value="RM 38,120" label="Total Profit" color="#10B981" sub="38.8% margin" />
            <KPICard value="67.8%" label="Matcha Avg Margin" color="#10B981" sub="Best category" />
            <KPICard value="28.4%" label="Pastry Avg Margin" color="#F43F5E" sub="Lowest" />
          </div>
          <DataTable caption="Revenue and profit breakdown by product category"
            headers={["Category","Revenue","Cost","Profit","Margin %","% of Total Profit"]}
            rows={[
              ["Coffee","RM 42,180","RM 18,220","RM 23,960","56.8%","43.4%"],
              ["Matcha","RM 38,960","RM 12,540","RM 26,420","67.8%","47.8%"],
              ["Pastry","RM 17,100","RM 12,240","RM 4,860","28.4%","8.8%"],
              ["TOTAL","RM 98,240","RM 43,000","RM 55,240","56.2%","100%"],
            ]} />
          <DataTable caption="Top 5 customers by lifetime value — built from pivot grouped by Customer ID"
            headers={["Customer ID","Visits","Total Spend","Total Profit","Avg Order","Top Product"]}
            rows={[
              ["CUST-0042","28","RM 248","RM 168","RM 8.86","Matcha Latte"],
              ["CUST-0118","24","RM 196","RM 122","RM 8.17","Latte"],
              ["CUST-0089","21","RM 214","RM 148","RM 10.19","Matcha Frappe"],
              ["CUST-0203","19","RM 167","RM 98","RM 8.79","Cappuccino"],
              ["CUST-0156","18","RM 188","RM 128","RM 10.44","Matcha Frappe"],
            ]} />
          <FindingBox>
            <strong>Top 10 customers generate 18% of total profit — all top 5 are Matcha buyers.</strong> Matcha customers return 40% more frequently than Coffee-only customers (21 visits vs 15/year). A Matcha loyalty programme retains the highest-value segment.
          </FindingBox>
        </div>

        <div style={step}><N n="5"/>
          <h2 style={h2}>Step 5 — Visualisation</h2>
          <CafeCharts />
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"14px",margin:"16px 0"}}>
            {[["Revenue vs Profit by Product Type","Grouped bar — Matcha profit gap vs Coffee clearly visible despite lower revenue. Core product strategy insight."],
              ["Contribution Margin % per Product","Horizontal bar ranked high to low — Cold Brew leads, Pastries lowest. Drives upsell training focus."],
              ["Monthly Revenue Trend Jan–Dec 2024","Line with area fill — Q2 and Q4 peaks for seasonal staffing decisions."],
              ["Discount Impact on Margin","Before/after bars — 18% of txns discounted, costing RM 4,840 total. Drives policy tightening."],
            ].map(([t,d])=>(
              <div key={t} style={{background:"#0F172A",border:"1px solid #1E293B",borderRadius:"8px",padding:"16px"}}>
                <div style={{color:"#10B981",fontWeight:700,fontSize:"13px",marginBottom:"7px"}}>{t}</div>
                <div style={{color:"#64748B",fontSize:"12px",lineHeight:1.6}}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={step}><N n="6"/>
          <h2 style={h2}>Step 6 — Report to Management</h2>
          <DataTable caption="Actions submitted to management"
            headers={["Finding","Action","Owner","Deadline","Impact"]}
            rows={[
              ["Matcha = highest profit/order","Train staff on Matcha upselling at counter","Ops Manager","Feb 20","Est. +RM 5,800/month"],
              ["Pastry margin at 28.4%","Raise pastry price RM 0.80 OR renegotiate supplier","Ops Manager","Mar 15","Margin → 38%"],
              ["18% txns discounted informally","Loyalty-only discount policy — no ad hoc","Manager","This week","Stop RM 4,840/year leakage"],
              ["Top CLV = Matcha buyers","Launch Matcha loyalty card (10th free)","Manager","Next month","Retain highest-value segment"],
            ]} />
          <ActionBox title="WHY MANAGEMENT MUST ACT">
            <ul style={{paddingLeft:"18px",lineHeight:2.1,fontSize:"14px"}}>
              <li><strong>Revenue ceiling:</strong> Matcha at 22% of orders is underutilised daily. A 5% shift in order mix = +RM 580 profit/month with zero extra cost.</li>
              <li><strong>Opportunity cost:</strong> A Matcha Latte generates RM 6.80 profit. A muffin generates RM 0.90. Counter space and staff time are finite resources — the allocation matters.</li>
              <li><strong>Discount leakage:</strong> RM 4,840 lost in 2024 to informal discounts not tied to any loyalty programme. A one-page policy stops this immediately.</li>
              <li><strong>Loyalty programme ROI:</strong> Costs under RM 2k to implement. The top 10 Matcha customers alone generate RM 1,380 profit/year. Pays for itself in 2 months.</li>
            </ul>
          </ActionBox>
        </div>

      </div>
    </div>
  )
}
