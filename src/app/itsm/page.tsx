import PageHero from "../../components/PageHero"
import FindingBox from "../../components/FindingBox"
import ActionBox from "../../components/ActionBox"
import DataTable from "../../components/DataTable"
import KPICard from "../../components/KPICard"
import ITSMCharts from "@/components/charts/ITSMCharts"

const step = { background: "#1E293B", borderRadius: "12px", padding: "28px", border: "1px solid #334155", marginBottom: "24px" } as React.CSSProperties
const h2s = { fontSize: "22px", fontWeight: 800, color: "#F1F5F9", marginBottom: "8px" } as React.CSSProperties
const h3s = { fontSize: "17px", fontWeight: 700, color: "#38BDF8", marginTop: "22px", marginBottom: "10px" } as React.CSSProperties
const ps = { color: "#94A3B8", lineHeight: 1.75, fontSize: "14px", margin: "10px 0" } as React.CSSProperties
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "14px", margin: "18px 0" } as React.CSSProperties

function Num({ n }: { n: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#38BDF8", color: "#0F172A", borderRadius: "50%", width: "34px", height: "34px", fontWeight: 800, fontSize: "15px", marginBottom: "12px" }}>
      {n}
    </div>
  )
}

export default function ITSM() {
  return (
    <div style={{ background: "#0F172A", minHeight: "100vh" }}>
      <PageHero
        icon="🎫"
        title="ITSM Service Desk Analytics"
        hook="32.4% of tickets breached SLA — one team was the root cause, and nobody had connected the dots yet."
        tags={["SLA Compliance", "Breach Rate", "Team Performance", "Priority Analysis", "CSAT Correlation"]}
        stats={[
          { label: "Total Tickets", value: "4,508" },
          { label: "Period", value: "Q1 2024" },
          { label: "SLA Breached", value: "1,180" },
          { label: "Avg Resolution", value: "24.9h" },
          { label: "Teams Analysed", value: "4" },
        ]}
      />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px" }}>

        <div style={step}>
          <Num n="1" />
          <h2 style={h2s}>Step 1 — Data Extraction from ServiceNow</h2>
          <p style={ps}>All 4,508 incident tickets were exported from the ITSM system covering Q1 2024 (Jan 1 – Mar 31). The raw export came as a CSV with 14 columns including Ticket ID, Created Date, Priority, Category, Assigned Team, Status, Resolved Date, and Resolution Hours.</p>
          <DataTable
            caption="Raw export — first 10 rows from ServiceNow"
            headers={["Ticket ID", "Created Date", "Priority", "Category", "Team", "Status", "Resolution Hrs", "SLA Target"]}
            rows={[
              ["INC0000001", "2024-03-22", "P2-High", "Application", "Team C", "Resolved", "4.3h", "8h"],
              ["INC0000002", "2024-03-27", "P4-Low", "Email", "Team A", "Resolved", "120.3h", "48h"],
              ["INC0000003", "2024-03-18", "P1-Critical", "Software", "Team D", "Resolved", "5.1h", "4h"],
              ["INC0000004", "2024-01-01", "P4-Low", "Software", "Team D", "Resolved", "35.0h", "48h"],
              ["INC0000005", "2024-02-13", "P2-High", "Access", "Team A", "Closed", "3.0h", "8h"],
              ["INC0000006", "2024-02-28", "P3-Medium", "Access", "Team A", "Closed", "6.9h", "24h"],
              ["INC0000007", "2024-03-14", "P2-High", "Hardware", "Team A", "In Progress", "—", "8h"],
              ["INC0000008", "2024-01-13", "P3-Medium", "Access", "Team C", "Resolved", "38.2h", "24h"],
              ["INC0000009", "2024-02-04", "P4-Low", "Application", "Team A", "Resolved", "44.4h", "48h"],
              ["INC0000010", "2024-02-04", "P4-Low", "Application", "Team B", "Pending", "—", "48h"],
            ]}
          />
        </div>

        <div style={step}>
          <Num n="2" />
          <h2 style={h2s}>Step 2 — Data Cleaning</h2>
          <p style={ps}>Six issues were identified and resolved before analysis ran.</p>
          <DataTable
            caption="Cleaning log — every change documented"
            headers={["Issue Found", "Count", "Action Taken", "Result"]}
            rows={[
              ["Duplicate Ticket IDs", "23", "Removed — kept latest entry", "4,485 unique tickets"],
              ["Blank Resolved Date (open tickets)", "866", "Excluded from SLA calc only", "866 excluded"],
              ["Resolution Hours = 0", "12", "Removed — logging error", "Dropped"],
              ["Priority field blank", "8", "Set to P4-Low per standard", "Imputed"],
              ["Team name inconsistent casing", "47", "Standardised to Team X format", "Unified"],
              ["SLA Target column missing", "All rows", "Derived: P1=4h P2=8h P3=24h P4=48h", "Calculated column added"],
            ]}
          />
          <p style={ps}><strong style={{ color: "#38BDF8" }}>After cleaning: 3,642 resolved tickets</strong> ready for SLA analysis.</p>
        </div>

        <div style={step}>
          <Num n="3" />
          <h2 style={h2s}>Step 3 — Transform: VLOOKUP + Pivot Table</h2>
          <p style={ps}>VLOOKUP joined the SLA target table to each ticket by Priority. Four calculated columns were added. A Pivot Table grouped by Team x Priority to surface the breach pattern.</p>
          <DataTable
            caption="Calculated columns added"
            headers={["New Column", "Formula / Logic", "Example"]}
            rows={[
              ["SLA_Target_Hours", "VLOOKUP(Priority, SLATable, 2, 0)", "8h for P2-High"],
              ["SLA_Breached", "IF(Resolution_Hrs > SLA_Target, 1, 0)", "1 = breached"],
              ["Month_Label", "TEXT(Created_Date, MMM YYYY)", "Jan 2024"],
              ["Resolution_Day", "TEXT(Created_Date, DDD)", "Monday"],
            ]}
          />
          <h3 style={h3s}>Pivot Table — SLA Breach Rate by Team</h3>
          <DataTable
            caption="This is what the management chart was built from"
            headers={["Team", "P1 Breach", "P2 Breach", "P3 Breach", "P4 Breach", "Overall", "Status"]}
            rows={[
              ["Team A – Desktop", "52%", "44%", "38%", "28%", "39.0%", "🔴 CRITICAL"],
              ["Team B – Network", "38%", "30%", "26%", "20%", "26.3%", "🟡 AT RISK"],
              ["Team C – Application", "44%", "38%", "33%", "25%", "35.0%", "🟡 AT RISK"],
              ["Team D – Service Desk", "40%", "32%", "27%", "22%", "28.8%", "🟡 AT RISK"],
              ["Overall", "45.6%", "35.2%", "30.1%", "22.8%", "32.4%", "🔴 BREACH"],
            ]}
          />
          <FindingBox>
            <strong>Team A has a 39% breach rate</strong> — 14 points above the contractual threshold of 25%. Their P1-Critical tickets breach at 52%, meaning more than half of urgent issues are not resolved on time. This pattern appears consistently across all 3 months of Q1.
          </FindingBox>
        </div>

        <div style={step}>
          <Num n="4" />
          <h2 style={h2s}>Step 4 — Analysis</h2>
          <div style={grid}>
            <KPICard value="4,508" label="Total Tickets Q1 2024" color="#38BDF8" />
            <KPICard value="32.4%" label="Overall Breach Rate" color="#F43F5E" sub="Above 25% threshold" />
            <KPICard value="39.0%" label="Team A Breach Rate" color="#F43F5E" sub="Highest of all teams" />
            <KPICard value="24.9h" label="Avg Resolution Time" color="#F59E0B" />
            <KPICard value="2.1 / 5" label="CSAT — Breached Tickets" color="#F43F5E" sub="vs 4.2/5 on-time" />
          </div>
          <DataTable
            caption="Ticket volume and breach rate by category"
            headers={["Category", "Ticket Count", "% of Total", "Avg Resolution Hrs", "Breach Rate"]}
            rows={[
              ["Software", "842", "18.7%", "28.3h", "36.2%"],
              ["Application", "798", "17.7%", "31.2h", "38.9%"],
              ["Access", "756", "16.8%", "22.1h", "28.4%"],
              ["Hardware", "734", "16.3%", "19.8h", "29.1%"],
              ["Network", "688", "15.3%", "25.6h", "30.7%"],
              ["Email", "490", "10.9%", "16.2h", "21.3%"],
            ]}
          />
          <FindingBox>
            <strong>Application and Software have the highest breach rates at 36–39%</strong> — and these are also the two categories where Team A handles the most volume. That connection is why Team A's overall breach rate is the worst across all teams.
          </FindingBox>
        </div>

        <div style={step}>
          <Num n="5" />
          <h2 style={h2s}>Step 5 — Visualisation</h2>
          <ITSMCharts />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", margin: "16px 0" }}>
            {[
              ["SLA Compliance vs Breach by Team", "Grouped bar — green for compliance, red for breach. Team A visually isolated. Used in weekly PowerPoint."],
              ["Breach Rate by Priority Level", "Bar chart — P1 at 45.6%. Drives the escalation protocol conversation."],
              ["Monthly Breach Trend Jan–Mar 2024", "Line chart — March improved after team realignment. Proves the intervention worked."],
            ].map(([t, d]) => (
              <div key={t} style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "8px", padding: "16px" }}>
                <div style={{ color: "#38BDF8", fontWeight: 700, fontSize: "13px", marginBottom: "7px" }}>{t}</div>
                <div style={{ color: "#64748B", fontSize: "12px", lineHeight: 1.6 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={step}>
          <Num n="6" />
          <h2 style={h2s}>Step 6 — Report to Management</h2>
          <DataTable
            caption="Reporting cadence"
            headers={["Report", "Frequency", "Audience", "Key Metric", "Format"]}
            rows={[
              ["Daily Breach Monitor", "Daily 9am", "Team Leads", "Breach count by team today", "Email"],
              ["Weekly Ops Report", "Every Monday", "Ops Manager", "Breach trend + top 5 delayed", "PowerPoint 9 slides"],
              ["Monthly Management Report", "1st of month", "Senior Management", "YTD SLA + team scorecard", "PowerPoint 14 slides"],
            ]}
          />
          <ActionBox title="WHY MANAGEMENT MUST ACT">
            <ul style={{ paddingLeft: "18px", lineHeight: 2.1, fontSize: "14px" }}>
              <li><strong>Contract penalty clause activates at 30%+ breach for 2 consecutive months.</strong> Team A is at 39%. One more month triggers the penalty automatically.</li>
              <li><strong>CSAT impact is measurable:</strong> Breached tickets score 2.1/5 vs 4.2/5 for on-time. Every breach is a direct hit to the quarterly client satisfaction report.</li>
              <li><strong>Action assigned:</strong> IT Manager to move 2 senior L2 technicians to Team A P1/P2 queue by Feb 10. Target: breach below 28% within 3 weeks.</li>
              <li><strong>Escalation trigger:</strong> If breach remains above 30% at the March review, contract renegotiation protocol initiates with the client.</li>
            </ul>
          </ActionBox>
        </div>

      </div>
    </div>
  )
}
