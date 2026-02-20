"use client"
import PageHero from "@/components/PageHero"
import FindingBox from "@/components/FindingBox"
import ActionBox from "@/components/ActionBox"
import DataTable from "@/components/DataTable"
import KPICard from "@/components/KPICard"
import FraudCharts from "@/components/charts/FraudCharts"

const step:React.CSSProperties={background:"#1E293B",borderRadius:"12px",padding:"28px",border:"1px solid #334155",marginBottom:"24px"}
const h2:React.CSSProperties={fontSize:"22px",fontWeight:800,color:"#F1F5F9",marginBottom:"8px",marginTop:0}
const h3:React.CSSProperties={fontSize:"17px",fontWeight:700,color:"#7C3AED",marginTop:"22px",marginBottom:"10px"}
const p:React.CSSProperties={color:"#94A3B8",lineHeight:1.75,fontSize:"14px",margin:"10px 0"}
const grid:React.CSSProperties={display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(175px,1fr))",gap:"14px",margin:"18px 0"}
const N=({n}:{n:string})=><div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",background:"#7C3AED",color:"#fff",borderRadius:"50%",width:"34px",height:"34px",fontWeight:800,fontSize:"15px",marginBottom:"12px"}}>{n}</div>

export default function Fraud() {
  return (
    <div style={{background:"#0F172A",minHeight:"100vh"}}>
      <PageHero icon="💳" title="Payment Fraud Detection"
        hook="3 simple flags — foreign IP, new device, after midnight — predicted 85% of fraud. The pattern was already in the data."
        tags={["Risk Score Modelling","Precision/Recall","Regional Fraud Analysis","False Positive Trade-off","Feature Engineering"]}
        stats={[{label:"Transactions",value:"5,000"},{label:"Fraud Cases",value:"312"},{label:"Fraud Rate",value:"6.2%"},{label:"Detection Rate",value:"85%"},{label:"High-Risk Regions",value:"2"}]} />
      <div style={{maxWidth:"1100px",margin:"0 auto",padding:"48px 24px"}}>

        <div style={step}><N n="1"/>
          <h2 style={h2}>Step 1 — Data Extraction from Payment Gateway Logs</h2>
          <p style={p}>5,000 payment transaction records were exported for Jan–Dec 2024. Each record includes metadata, device signals, IP geolocation, and a confirmed fraud label (0 = legitimate, 1 = fraud) for risk model validation.</p>
          <DataTable caption="Sample raw extract — payment transaction log"
            headers={["Payment ID","Date","Region","Type","Amount","Hour","New Device","Foreign IP","Is Fraud"]}
            rows={[
              ["PAY-00001","2024-03-14","Kuala Lumpur","Credit Card","RM 1,240","14","No","No","0"],
              ["PAY-00002","2024-03-14","Kedah","E-Wallet","RM 3,800","02","Yes","Yes","1"],
              ["PAY-00003","2024-03-15","Penang","Debit Card","RM 480","11","No","No","0"],
              ["PAY-00004","2024-03-15","Selangor","Credit Card","RM 580","23","Yes","No","1"],
              ["PAY-00005","2024-03-16","Johor Bahru","Bank Transfer","RM 2,100","09","No","No","0"],
              ["PAY-00006","2024-03-16","Kedah","BNPL","RM 920","03","Yes","Yes","1"],
              ["PAY-00007","2024-03-17","KL","Credit Card","RM 290","16","No","No","0"],
              ["PAY-00008","2024-03-17","Sabah","E-Wallet","RM 4,500","01","Yes","Yes","1"],
              ["PAY-00009","2024-03-18","Penang","Debit Card","RM 180","10","No","No","0"],
              ["PAY-00010","2024-03-18","Selangor","Credit Card","RM 750","22","No","Yes","1"],
            ]} />
        </div>

        <div style={step}><N n="2"/>
          <h2 style={h2}>Step 2 — Data Cleaning</h2>
          <DataTable caption="Issues found and resolved"
            headers={["Issue","Count","Action","Result"]}
            rows={[
              ["Duplicate Transaction IDs","18","Removed","4,982 unique records"],
              ["Amount = RM 0.00 (test transactions)","12","Removed","Excluded"],
              ["Fraud label missing","34","Excluded from model training only","Flagged"],
              ["Hour field blank","7","Derived from full timestamp","Imputed"],
              ["Region field inconsistent casing","28","Standardised (e.g. kl → Kuala Lumpur)","Unified"],
            ]} />
        </div>

        <div style={step}><N n="3"/>
          <h2 style={h2}>Step 3 — Transform: Risk Feature Engineering + VLOOKUP</h2>
          <p style={p}>A risk score was built by combining 7 binary flags into a weighted total per transaction. VLOOKUP joined the regional risk weighting table to apply location-based score additions.</p>
          <DataTable caption="Risk score components — each flag adds points to the transaction total"
            headers={["Risk Flag","Condition","Points Added","Actual Fraud Rate When True"]}
            rows={[
              ["After-Midnight Transaction","Hour 00:00–04:59","+6","9.1%"],
              ["High Amount","Amount > RM 2,000","+8","11.4%"],
              ["New Device","Device not seen before for this customer","+5","8.2%"],
              ["Foreign IP Address","IP geolocated outside Malaysia","+10","14.8%"],
              ["Prior Fraud History","Customer flagged in last 90 days","+12","19.3%"],
              ["BNPL Payment Type","Buy Now Pay Later selected","+4","7.6%"],
              ["High-Risk Region","Kedah or Kuala Lumpur","+3","8.1%"],
            ]} />
          <h3 style={h3}>Pivot Output — Fraud Rate by Region</h3>
          <DataTable caption="Grouped by region — shows geographic concentration of fraud"
            headers={["Region","Total Transactions","Fraud Cases","Fraud Rate %","Risk Level"]}
            rows={[
              ["Kedah","342","28","8.2%","🔴 HIGH"],
              ["Kuala Lumpur","1,248","92","7.4%","🔴 HIGH"],
              ["Sabah","398","28","7.0%","🔴 HIGH"],
              ["Selangor","998","62","6.2%","🟡 ELEVATED"],
              ["Johor Bahru","892","44","4.9%","🟡 MODERATE"],
              ["Penang","748","38","5.1%","🟡 MODERATE"],
              ["Sarawak","374","20","5.3%","🟡 MODERATE"],
            ]} />
          <FindingBox>
            <strong>Kedah (8.2%) and KL (7.4%) show fraud rates more than 2× the national average.</strong> Transactions combining Foreign IP + New Device + After Midnight have an 18% fraud rate — nearly 3× the overall 6.2%. These 3 flags alone, as a detection rule, catch 85% of all confirmed fraud cases in this dataset.
          </FindingBox>
        </div>

        <div style={step}><N n="4"/>
          <h2 style={h2}>Step 4 — Analysis: Model Performance + Precision/Recall</h2>
          <div style={grid}>
            <KPICard value="312" label="Confirmed Fraud Cases" color="#F43F5E" sub="6.2% of all transactions" />
            <KPICard value="85%" label="Detection Rate" color="#7C3AED" sub="At threshold score 30" />
            <KPICard value="8.2%" label="Kedah Fraud Rate" color="#F43F5E" sub="Highest region" />
            <KPICard value="8%" label="False Positive Rate" color="#F59E0B" sub="Acceptable for 2FA trigger" />
          </div>
          <DataTable caption="Precision/Recall at different thresholds — finding the optimal cut-off"
            headers={["Threshold","Fraud Caught","False Positives","Precision","Recall","Recommendation"]}
            rows={[
              ["Score ≥ 20","92%","22%","71%","92%","Too many false positives — bad UX"],
              ["Score ≥ 30","85%","8%","86%","85%","✅ Recommended — best balance"],
              ["Score ≥ 40","71%","3%","94%","71%","Misses too much fraud"],
              ["Score ≥ 50","54%","1%","97%","54%","Too conservative"],
            ]} />
          <FindingBox>
            <strong>A threshold of 30 is optimal.</strong> It catches 85% of fraud while triggering a 2FA prompt for only 8% of legitimate customers — roughly 18 real people per week experiencing a minor delay. That is the trade-off to present to management: minor inconvenience for 18 people per week vs RM 477k in preventable fraud per year.
          </FindingBox>
        </div>

        <div style={step}><N n="5"/>
          <h2 style={h2}>Step 5 — Visualisation</h2>
          <FraudCharts />
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"14px",margin:"16px 0"}}>
            {[["Fraud Rate % by Region","Bar chart ranked — Kedah and KL isolated in red. No explanation needed after seeing this chart."],
              ["Risk Score Distribution: Fraud vs Legitimate","Overlapping histogram — legitimate clusters at 0–20, fraud at 30–80. Visual proof the model separates the two groups."],
              ["Precision vs Recall Curve","Line chart — score 30 marked as the optimal decision point. Management sees the trade-off being made."],
              ["Fraud Rate by Hour of Day","24-bar chart — 12am–4am has 2× daytime rate. Directly supports the after-midnight transaction limit."],
            ].map(([t,d])=>(
              <div key={t} style={{background:"#0F172A",border:"1px solid #1E293B",borderRadius:"8px",padding:"16px"}}>
                <div style={{color:"#7C3AED",fontWeight:700,fontSize:"13px",marginBottom:"7px"}}>{t}</div>
                <div style={{color:"#64748B",fontSize:"12px",lineHeight:1.6}}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={step}><N n="6"/>
          <h2 style={h2}>Step 6 — Report to Management</h2>
          <DataTable caption="Actions submitted to Risk Management from this analysis"
            headers={["Finding","Action Required","Owner","Deadline","Expected Impact"]}
            rows={[
              ["Kedah & KL at 7–8% fraud","Deploy 2FA for KL/Kedah transactions > RM 500","Risk Manager","Feb 17","Reduce regional fraud to < 4%"],
              ["3-flag combo = 18% fraud rate","Auto-flag for manual review when 2+ flags trigger","Risk Team","Feb 17","Catch 85% before payment clears"],
              ["BNPL at 7.6% fraud rate","Extra verification for BNPL > RM 300","Product Manager","Mar 1","Reduce BNPL fraud by est. 60%"],
              ["After-midnight elevated","Cap transactions at RM 1,000 between 12am–4am","Risk Manager","Feb 24","Limit exposure in highest-risk window"],
            ]} />
          <ActionBox title="WHY MANAGEMENT MUST ACT">
            <ul style={{paddingLeft:"18px",lineHeight:2.1,fontSize:"14px"}}>
              <li><strong>Financial exposure:</strong> 312 fraud cases × avg RM 1,800 = RM 561,600 total annual exposure. The model catches 85% = RM 477k recoverable per year.</li>
              <li><strong>Reputational risk:</strong> KL and Kedah concentration means affected customers are geographically clustered. One viral complaint about a stolen payment spreads fast locally.</li>
              <li><strong>Regulatory risk:</strong> Bank Negara Malaysia requires active fraud monitoring for payment processors. Non-compliance risks licence review — not just a fine.</li>
              <li><strong>False positive cost is minimal:</strong> ~18 real customers per week get a 2FA prompt. That is a 30-second inconvenience vs RM 477,000 in prevented fraud annually.</li>
            </ul>
          </ActionBox>
        </div>

      </div>
    </div>
  )
}
