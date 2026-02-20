"use client";
import { motion } from "framer-motion";
import Link from "next/link";

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
      {label}
    </span>
  );
}

function DataTable({ label, headers, rows }: { label: string; headers: string[]; rows: string[][] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
      <p className="text-xs font-mono text-accent/80 px-4 py-2 border-b border-white/10 bg-card/50">{label}</p>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-card/80">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left text-accent text-xs font-semibold whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 text-xs whitespace-nowrap ${
                  cell.includes("BREACH") || cell.includes("At Risk") || cell.includes("Penalty")
                    ? "text-rose-400 font-semibold"
                    : cell.includes("Met") || cell.includes("Compliant") || cell.includes("Pass")
                    ? "text-emerald-400"
                    : cell.includes("Warning") || cell.includes("Monitor")
                    ? "text-amber-400"
                    : "text-white/60"
                }`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const phases = [
  {
    phase: "01",
    title: "Contract Review",
    icon: "📃",
    borderColor: "border-sky-400",
    tools: ["SLA Contract", "Priority Matrix", "Excel"],
    desc: "The SLA contract was reviewed end-to-end to extract all measurable service obligations. Each obligation was mapped to a priority tier, response and resolution target, and a penalty clause if applicable. This formed the master reference for all downstream KPI design and dashboard logic.",
    tableLabel: "Contracted SLA Obligations by Priority Tier",
    tableHeaders: ["Priority", "Definition", "Response Target", "Resolution Target", "Availability", "Penalty if Breached"],
    tableRows: [
      ["P1 — Critical", "Full service outage", "15 min", "1 hr", "99.9% / month", "5% monthly fee credit"],
      ["P2 — High", "Major function impaired", "30 min", "4 hrs", "99.5% / month", "2% monthly fee credit"],
      ["P3 — Medium", "Partial degradation", "1 hr", "8 hrs", "—", "Warning issued"],
      ["P4 — Low", "Minor issue / request", "4 hrs", "24 hrs", "—", "No penalty"],
    ],
    finding: "P1 carries a 5% fee credit penalty per breach, which at the current contract value represents a significant financial exposure if multiple P1 incidents breach in a single month. The contract defines a 99.9% availability target — meaning no more than 44 minutes of unplanned downtime per month.",
    action: "The operations team must be made aware of the financial implications of P1 breaches and the exact 44-minute downtime cap. This context was embedded directly into dashboard tooltips and the monthly SLA report to ensure decision-makers understood the cost of inaction.",
  },
  {
    phase: "02",
    title: "KPI Definition",
    icon: "🎯",
    borderColor: "border-purple-400",
    tools: ["KPI Framework", "DAX Logic", "Excel"],
    desc: "Each contracted obligation was translated into a measurable KPI with a defined data source, calculation formula, breach threshold, and RAG (Red/Amber/Green) status logic. This KPI dictionary became the single source of truth for all dashboard metrics.",
    tableLabel: "KPI Dictionary — SLA Dashboard Metrics",
    tableHeaders: ["KPI Name", "Formula", "Green", "Amber", "Red (Breach)"],
    tableRows: [
      ["P1 Compliance Rate", "P1 resolved on time / Total P1 x 100", "100%", "95-99%", "Below 95%"],
      ["P2 Compliance Rate", "P2 resolved on time / Total P2 x 100", "Above 90%", "85-90%", "Below 85%"],
      ["Avg P1 Resolution Time", "Sum of P1 resolution hrs / P1 count", "Below 0.8 hrs", "0.8-1.0 hrs", "Above 1 hr"],
      ["Monthly Availability %", "Uptime mins / Total mins x 100", "Above 99.9%", "99.5-99.9%", "Below 99.5%"],
      ["Repeat Incident Rate", "Repeat tickets / Total tickets x 100", "Below 5%", "5-10%", "Above 10%"],
      ["SLA Overall Score", "Weighted avg of all tier compliance", "Above 90%", "80-90%", "Below 80%"],
    ],
    finding: "The repeat incident rate KPI revealed a gap not visible in standard SLA reporting — some tickets were being closed and re-opened repeatedly, inflating the resolution volume without actually solving root causes.",
    action: "The Repeat Incident Rate KPI was added to the weekly report and given a dedicated section in the monthly deck. The operations team was asked to investigate any repeat rate above 8% for root-cause action — directly reducing noise in ticket volume and improving real resolution quality.",
  },
  {
    phase: "03",
    title: "Dashboard Development",
    icon: "🖥️",
    borderColor: "border-emerald-400",
    tools: ["Power BI", "DAX", "Data Model Design"],
    desc: "A 3-page SLA Compliance Dashboard was built in Power BI. Page 1: Executive Summary with KPI gauges and traffic-light indicators. Page 2: Team-level compliance trends by week. Page 3: Breach Detail drill-through table with root-cause tags. All visuals are cross-filtered and connected to a live data model that refreshes daily.",
    tableLabel: "Dashboard Design Specification",
    tableHeaders: ["Page", "Visual Type", "Metrics Shown", "Filter Options", "Audience"],
    tableRows: [
      ["Page 1 — Executive Summary", "KPI cards, gauge charts, RAG table", "Overall SLA score, P1/P2 compliance, availability %", "Month, Quarter", "Senior Management"],
      ["Page 2 — Team Trends", "Line chart, bar chart, heatmap", "Weekly compliance by team, breach count trend", "Team, Priority, Date range", "Department Manager"],
      ["Page 3 — Breach Detail", "Drill-through table, matrix", "Ticket ID, breach duration, assigned team, root cause", "Priority, Category, Team", "Ops Team Lead"],
    ],
    finding: "During dashboard development, the data model revealed that P2 breach counts were being under-reported by 14% in the legacy Excel tracker because the old tracker used a different timestamp logic than the contract definition.",
    action: "The breach calculation logic in the dashboard was corrected to align with the exact contractual definition. This corrected view was presented to the client — who initially challenged the higher breach counts — with full documentation of the old vs new logic difference.",
  },
  {
    phase: "04",
    title: "Contract Validation",
    icon: "✅",
    borderColor: "border-amber-400",
    tools: ["Dashboard vs Contract Matrix", "Excel", "Sign-off Log"],
    desc: "Every KPI displayed on the dashboard was individually validated against its corresponding clause in the SLA contract. A validation matrix was produced documenting the contract clause reference, the KPI formula used, a sample test case, and the sign-off status. This was reviewed and approved by the service delivery manager and client representative.",
    tableLabel: "Dashboard Validation Matrix — KPI vs Contract Clause",
    tableHeaders: ["KPI", "Contract Clause Ref", "Formula Validated", "Sample Test Result", "Status"],
    tableRows: [
      ["P1 Compliance Rate", "Section 4.1 — P1 Response & Resolution", "Yes", "1 breach in Jan = 92.3% — Compliant with calc", "Compliant"],
      ["P2 Compliance Rate", "Section 4.2 — P2 Service Obligations", "Yes", "169 breaches / 498 tickets = 66.1% — At Risk", "At Risk"],
      ["Avg P1 Resolution Time", "Section 4.1.3 — Resolution SLA", "Yes", "Avg 1.4 hrs — BREACH (target 1 hr)", "BREACH"],
      ["Monthly Availability %", "Section 5.1 — Availability SLA", "Yes", "99.82% Jan — Met 99.9% after P1 fix", "Met"],
      ["Repeat Incident Rate", "Section 6.3 — Quality Obligation", "Yes", "8.8% Jan — Warning threshold", "Warning"],
      ["SLA Overall Score", "Section 7 — Composite Score", "Yes", "68% Jan — Below 80% Amber threshold", "BREACH"],
    ],
    finding: "Validation revealed that P2 compliance and Overall SLA Score were both in breach territory in January. The P2 breach rate (66.1%) was previously hidden because the legacy tracker had been averaging across all priorities, masking the severity within specific tiers.",
    action: "The client was formally notified of the P2 compliance gap with a remediation plan. The service delivery manager accepted accountability and committed to a 75% P2 compliance target by end of February and 85% by March — both tracked via weekly dashboard review meetings.",
  },
  {
    phase: "05",
    title: "Reporting & Governance",
    icon: "📊",
    borderColor: "border-rose-400",
    tools: ["Monthly SLA Report", "PowerPoint", "Weekly Review Meeting"],
    desc: "Structured SLA reports were produced and distributed on weekly and monthly cadences. Monthly reports included a full scorecard, trend charts, root-cause summaries, remediation status, and a risk forecast for the next period. Weekly SLA review meetings were held with the operations team to track in-flight actions.",
    tableLabel: "Monthly SLA Scorecard — Q1 2024 (Contract Baseline: 90%)",
    tableHeaders: ["SLA Metric", "Jan Actual", "Feb Actual", "Mar Actual", "Target", "Trend"],
    tableRows: [
      ["P1 Compliance %", "73.2%", "84.2%", "92.3%", "100%", "Improving"],
      ["P2 Compliance %", "66.1%", "74.8%", "82.1%", "90%", "Improving"],
      ["Availability %", "99.82%", "99.91%", "99.94%", "99.9%", "Met from Feb"],
      ["Avg P1 Res. Time (hrs)", "1.4", "1.1", "0.9", "1.0 max", "Met from Mar"],
      ["Repeat Incident Rate", "8.8%", "7.1%", "4.9%", "5% max", "Met from Mar"],
      ["Overall SLA Score", "68.0%", "77.2%", "80.1%", "90%", "Improving"],
    ],
    finding: "By end of Q1, availability and average P1 resolution time both met contracted targets. The Overall SLA Score improved from 68% to 80.1% — still 10 points below the 90% threshold but with a clear upward trajectory driven directly by weekly reporting and management action.",
    action: "The monthly report was used to secure management approval for a Q2 staffing increase and a P1 auto-escalation rule. Both decisions were data-backed from the dashboard, proving that consistent SLA reporting directly translates into resource investment decisions.",
  },
];

export default function ServiceLevelPage() {
  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-accent text-sm font-mono hover:underline mb-8 inline-block">
          &larr; Back to Portfolio
        </Link>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">Full Process Walkthrough</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Service Level Management</h1>
          <div className="w-16 h-1 bg-accent rounded mb-6" />
          <p className="text-white/60 max-w-3xl mb-6 text-lg leading-relaxed">
            A complete SLM case study: from reading the SLA contract to building a validated Power BI
            dashboard and producing governance reports that drove real management decisions. Every
            finding shows the contractual stakes — and why the team had to act.
          </p>
          <div className="flex flex-wrap gap-3 mb-16">
            {["5-phase SLM process", "+12.1% SLA improvement", "P2 gap uncovered", "Management action secured"].map((b) => (
              <span key={b} className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/20">{b}</span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-24">
          {phases.map((p) => (
            <motion.div
              key={p.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={`border-l-4 ${p.borderColor} pl-6 mb-6`}>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-5xl font-extrabold text-white/10 leading-none">{p.phase}</span>
                  <span className="text-2xl">{p.icon}</span>
                  <h2 className="text-2xl font-bold text-white">{p.title}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t) => <Tag key={t} label={t} />)}
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-4 text-base">{p.desc}</p>
              <DataTable label={p.tableLabel} headers={p.tableHeaders} rows={p.tableRows} />
              {p.finding && (
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="bg-amber-500/10 border border-amber-400/30 rounded-xl p-5">
                    <p className="text-amber-400 font-semibold text-sm mb-2">🔍 Finding</p>
                    <p className="text-white/70 text-sm leading-relaxed">{p.finding}</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-5">
                    <p className="text-emerald-400 font-semibold text-sm mb-2">✅ Why the Team Must Act</p>
                    <p className="text-white/70 text-sm leading-relaxed">{p.action}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex gap-4 flex-wrap">
          <Link href="/service-level" className="px-6 py-3 rounded-xl border border-white/20 text-white/50 font-semibold hover:border-white/40 transition-all">
            &larr; Service Level Management
          </Link>
        </div>
      </div>
    </div>
  );
}
