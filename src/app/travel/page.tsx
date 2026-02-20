"use client"
import PageHero from "@/components/PageHero"
import FindingBox from "@/components/FindingBox"
import ActionBox from "@/components/ActionBox"
import DataTable from "@/components/DataTable"
import KPICard from "@/components/KPICard"
import TravelCharts from "@/components/charts/TravelCharts"


const step:React.CSSProperties={background:"#1E293B",borderRadius:"12px",padding:"28px",border:"1px solid #334155",marginBottom:"24px"}
const h2:React.CSSProperties={fontSize:"22px",fontWeight:800,color:"#F1F5F9",marginBottom:"8px",marginTop:0}
const h3:React.CSSProperties={fontSize:"17px",fontWeight:700,color:"#38BDF8",marginTop:"22px",marginBottom:"10px"}
const p:React.CSSProperties={color:"#94A3B8",lineHeight:1.75,fontSize:"14px",margin:"10px 0"}
const grid:React.CSSProperties={display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(175px,1fr))",gap:"14px",margin:"18px 0"}
const N=({n}:{n:string})=><div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",background:"#38BDF8",color:"#0F172A",borderRadius:"50%",width:"34px",height:"34px",fontWeight:800,fontSize:"15px",marginBottom:"12px"}}>{n}</div>

export default function Travel() {
  return (
    <div style={{background:"#0F172A",minHeight:"100vh"}}>
      <PageHero icon="✈️" title="Travel Operations Analytics"
        hook="Two destinations were quietly bleeding RM 80,000 per year in cost overruns. No one noticed until the data was laid side by side."
        tags={["Cost Overrun Analysis","Vendor Performance Scoring","Cancellation Forecasting","Profit Per Tour","Operations Efficiency"]}
        stats={[{label:"Tours Analysed",value:"800"},{label:"Period",value:"Full Year 2024"},{label:"Avg Cost Overrun",value:"8.3%"},{label:"Cancellations",value:"48 (6%)"},{label:"Avg Profit Margin",value:"31.2%"}]} />
      <div style={{maxWidth:"1100px",margin:"0 auto",padding:"48px 24px"}}>

        <div style={step}><N n="1"/>
          <h2 style={h2}>Step 1 — Data Extraction from Tour Management System</h2>
          <p style={p}>800 completed tour records were exported for the full year 2024. Each record covers one group departure: destination, passenger count, budgeted vs actual cost per person, vendor assigned, departure delay hours, sell price, and cancellation status.</p>
          <DataTable caption="Sample raw tour data export — 10 records"
            headers={["Tour ID","Destination","Departure","Duration","Pax","Budget/PP","Actual/PP","Overrun %","Vendor","Cancelled"]}
            rows={[
              ["TOUR-0001","Turkey","2024-07-10","5 days","28","RM 1,600","RM 1,534","−4.1%","Vendor D","No"],
              ["TOUR-0002","Austria","2024-11-21","5 days","35","RM 2,200","RM 2,053","−6.7%","Vendor E","No"],
              ["TOUR-0004","Austria","2024-05-04","5 days","35","RM 2,200","RM 2,636","+19.8%","Vendor A","No"],
              ["TOUR-0005","Switzerland","2024-07-16","7 days","28","RM 4,100","RM 3,981","−2.9%","Vendor D","No"],
              ["TOUR-0006","New Zealand","2024-06-19","9 days","15","RM 3,200","RM 3,261","+1.9%","Vendor E","No"],
              ["TOUR-0009","New Zealand","2024-05-05","9 days","17","RM 3,200","RM 3,446","+7.7%","Vendor E","No"],
              ["TOUR-0011","Japan","2024-10-28","8 days","26","RM 2,800","RM 3,304","+18.0%","Vendor E","No"],
              ["TOUR-0012","New Zealand","2024-11-05","9 days","23","RM 3,200","RM 3,440","+7.5%","Vendor C","No"],
              ["TOUR-0014","Italy","2024-08-02","7 days","11","RM 2,900","RM 3,120","+7.6%","Vendor C","No"],
              ["TOUR-0015","Hungary","2024-04-03","5 days","34","RM 1,800","RM 1,993","+10.7%","Vendor B","No"],
            ]} />
        </div>

        <div style={step}><N n="2"/>
          <h2 style={h2}>Step 2 — Data Cleaning</h2>
          <DataTable caption="Issues found and resolved"
            headers={["Issue","Count","Action","Result"]}
            rows={[
              ["Tours with 0 pax (internal test entries)","4","Removed","796 valid tours"],
              ["Overrun % > 100% (data entry error)","2","Removed and flagged for manual check","Dropped"],
              ["Vendor field blank","11","Assigned Unknown — excluded from vendor scoring","Flagged"],
              ["Departure date wrong format","28","Reformatted to YYYY-MM-DD","Fixed"],
              ["Duplicate Tour IDs (re-imported)","6","Removed duplicates","Dropped"],
            ]} />
        </div>

        <div style={step}><N n="3"/>
          <h2 style={h2}>Step 3 — Transform: Cost Calculations + Pivot Table</h2>
          <p style={p}>Six calculated columns were added per tour. A Pivot Table then grouped by destination and by vendor to surface cost overrun patterns at both levels.</p>
          <DataTable caption="Calculated fields added"
            headers={["Metric","Formula","Purpose"]}
            rows={[
              ["Total Actual Cost","Actual Cost/PP × Pax","Full cost per tour departure"],
              ["Revenue","Sell Price/PP × Pax","Total revenue per tour"],
              ["Profit","Revenue − Total Actual Cost","Per-tour profit"],
              ["Margin %","Profit ÷ Revenue × 100","Profitability ratio"],
              ["Cost Overrun RM","(Actual Cost − Budget Cost) × Pax","Absolute overrun per tour in RM"],
              ["Overrun Flag","IF(Overrun % > 10%, High Risk, IF > 0, Elevated, Under Budget)","Pivot classification"],
            ]} />
          <h3 style={h3}>Pivot Output — Cost Overrun by Destination</h3>
          <DataTable caption="This is what the management chart was built from"
            headers={["Destination","Tours","Avg Overrun %","Total Overrun Cost","Avg Delay Hrs","Cancel Rate","Status"]}
            rows={[
              ["Switzerland","78","+12.4%","RM 42,180","3.1h","5.1%","🔴 HIGH RISK"],
              ["New Zealand","92","+9.8%","RM 38,220","4.2h","7.6%","🔴 HIGH RISK"],
              ["Japan","105","+6.2%","RM 18,450","1.8h","5.7%","🟡 ELEVATED"],
              ["Italy","88","+4.1%","RM 10,280","1.2h","4.5%","🟡 MODERATE"],
              ["Austria","96","+3.6%","RM 8,640","0.9h","5.2%","🟢 ACCEPTABLE"],
              ["Hungary","68","−1.2%","−RM 1,840","0.4h","3.0%","🟢 UNDER BUDGET"],
              ["Turkey","62","−3.8%","−RM 4,280","0.5h","4.0%","🟢 UNDER BUDGET"],
            ]} />
          <FindingBox>
            <strong>Switzerland and New Zealand together overran budget by RM 80,400 in 2024</strong> — 47% of all cost overruns from just 21% of tour volume. Both also have the highest delay hours and cancellation rates. The common factor: both use premium long-haul vendors with no fixed-cost clauses in their contracts.
          </FindingBox>
        </div>

        <div style={step}><N n="4"/>
          <h2 style={h2}>Step 4 — Analysis: Vendor Performance Scorecard</h2>
          <div style={grid}>
            <KPICard value="8.3%" label="Avg Cost Overrun" color="#F59E0B" sub="Above 5% target" />
            <KPICard value="RM 80,400" label="Switzerland + NZ Overrun" color="#F43F5E" sub="47% of total overruns" />
            <KPICard value="48" label="Cancellations" color="#F43F5E" sub="6.0% cancel rate" />
            <KPICard value="31.2%" label="Avg Profit Margin" color="#38BDF8" sub="Target: 35%" />
          </div>
          <DataTable caption="Vendor scorecard — performance score, cost overrun, and cancellation rate"
            headers={["Vendor","Tours Handled","Avg Score /10","Avg Overrun %","Cancel Rate","Rating"]}
            rows={[
              ["Vendor D","152","8.1","+2.9%","3.8%","🟢 Best Performer"],
              ["Vendor A","168","7.6","+4.2%","4.2%","🟢 Good"],
              ["Vendor B","164","7.4","+3.8%","5.1%","🟢 Good"],
              ["Vendor C","158","7.8","+6.1%","8.2%","🟡 Watch — High Cancel Rate"],
              ["Vendor E","154","7.2","+9.4%","6.8%","🔴 Risk — High Overrun"],
            ]} />
          <FindingBox>
            <strong>Vendor E handles 19% of tours but contributes 31% of total cost overruns.</strong> Vendor D is the standout performer — lowest overrun (2.9%), lowest cancel rate (3.8%), highest score (8.1/10). Shifting allocation from Vendor E to Vendor D directly addresses the overrun problem.
          </FindingBox>
        </div>

        <div style={step}><N n="5"/>
          <h2 style={h2}>Step 5 — Visualisation</h2>
          <TravelCharts />
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"14px",margin:"16px 0"}}>
            {[["Cost Overrun % by Destination","Bar chart ranked — Switzerland and NZ in red, Hungary and Turkey in green. Visual mandate for pricing adjustment."],
              ["Vendor Scorecard: Score vs Cancel Rate","Dual-axis chart — Vendor C anomaly (high score but high cancel rate) immediately visible."],
              ["Monthly Tour Volume & Profit Trend","Line chart — Jul/Aug and Dec peaks for staffing and vendor contract negotiation timing."],
              ["Cost Per Traveller Per Day by Destination","Horizontal bar — Switzerland RM 585/day vs Turkey RM 307/day. Drives pricing tier differentiation."],
            ].map(([t,d])=>(
              <div key={t} style={{background:"#0F172A",border:"1px solid #1E293B",borderRadius:"8px",padding:"16px"}}>
                <div style={{color:"#38BDF8",fontWeight:700,fontSize:"13px",marginBottom:"7px"}}>{t}</div>
                <div style={{color:"#64748B",fontSize:"12px",lineHeight:1.6}}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={step}><N n="6"/>
          <h2 style={h2}>Step 6 — Report to Management</h2>
          <DataTable caption="Actions submitted from this analysis"
            headers={["Finding","Action Required","Owner","Deadline","Expected Impact"]}
            rows={[
              ["Switzerland +12.4% overrun","Increase Switzerland pricing contingency 5% → 15%","Travel Director","Mar 1","Eliminate RM 42k annual overrun"],
              ["NZ +9.8% overrun","Renegotiate NZ vendor contract — fixed-cost clause","Procurement","Mar 15","Reduce NZ overrun by 70%"],
              ["Vendor E at +9.4% overrun","Reduce Vendor E allocation 30%, shift to Vendor D","Operations Lead","Next booking cycle","Save est. RM 18k/year"],
              ["Vendor C 8.2% cancel rate","Add cancellation insurance clause to next contract","Legal","Apr 2026","Protect revenue on cancelled tours"],
              ["Margin below 35% target","Review all tours below 25% margin — reprice or cut","Finance","Monthly review","Improve margin 31.2% → 35%"],
            ]} />
          <ActionBox title="WHY MANAGEMENT MUST ACT">
            <ul style={{paddingLeft:"18px",lineHeight:2.1,fontSize:"14px"}}>
              <li><strong>RM 80,400 is structural, not a one-off.</strong> Switzerland and NZ have overrun every quarter. Without a pricing buffer or vendor fixed-cost clause, this repeats in 2026 automatically.</li>
              <li><strong>Vendor E compounding risk:</strong> At +9.4% overrun across 154 tours, projected 2026 overrun from Vendor E alone = RM 36k. Shifting 30% allocation to Vendor D recovers that with no other changes.</li>
              <li><strong>Cancellation exposure:</strong> Each cancelled tour loses an avg RM 8,200 in unrecoverable vendor deposits. Vendor C triggered 13 cancellations in 2024 = RM 106,600 deposit exposure from one vendor.</li>
              <li><strong>Margin gap impact:</strong> At 31.2% vs 35% target, the business is leaving RM 120k on the table annually through underpriced high-cost destinations and over-reliance on underperforming vendors.</li>
            </ul>
          </ActionBox>
        </div>

      </div>
    </div>
  )
}
