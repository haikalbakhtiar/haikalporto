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

function DataTable({
  label,
  headers,
  rows,
}: {
  label: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
      <p className="text-xs font-mono text-accent/80 px-4 py-2 border-b border-white/10 bg-card/50">
        {label}
      </p>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-card/80">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left text-accent text-xs font-semibold whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 text-xs whitespace-nowrap ${
                    cell.includes("YES") || cell.includes("Escalated") || cell.includes("BREACH")
                      ? "text-rose-400 font-semibold"
                      : cell.includes("No") || cell.includes("Resolved") || cell.includes("Pass")
                      ? "text-emerald-400"
                      : "text-white/60"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const steps = [
  {
    step: "01",
    title: "Data Extraction",
    borderColor: "border-sky-400",
    icon: "⚙️",
    tools: ["SQL", "Power Query", "Excel", "CSV Export"],
    description:
      "Raw data was extracted from three source systems: the ITSM ticketing platform (ServiceNow), the property booking management system, and manual Excel trackers maintained by operations. SQL queries pulled ticket records filtered by Q1 2024 date range. The combined raw dataset contained 5,132 rows before cleaning.",
    tableLabel: "Raw Ticket Extract — ServiceNow (Sample of 5,132 rows)",
    tableHeaders: ["Ticket ID", "Category", "Priority", "Opened At", "Assigned To", "Status", "Closed At"],
    tableRows: [
      ["INC0019821", "Network", "P2", "2024-01-03 08:12", "Team A", "Open", "—"],
      ["INC0019822", "Hardware", "P3", "2024-01-03 09:45", "Team B", "In Progress", "—"],
      ["INC0019823", "Software", "P1", "2024-01-03 10:01", "Team A", "Escalated", "—"],
      ["INC0019824", "Access", "P4", "2024-01-03 11:30", "Team C", "Open", "—"],
      ["INC0019825", "Network", "P2", "2024-01-03 13:00", "Team A", "Resolved", "2024-01-03 16:10"],
      ["INC0019826", "Software", "P3", "2024-01-03 14:22", "Team B", "Resolved", "2024-01-03 22:01"],
      ["INC0019827", "Access", "P1", "2024-01-04 07:55", "Team A", "Resolved", "2024-01-04 08:44"],
      ["INC0019828", "Hardware", "P2", "2024-01-04 09:10", "Team A", "Open", "—"],
    ],
    finding: null,
    action: null,
  },
  {
    step: "02",
    title: "Data Cleaning",
    borderColor: "border-purple-400",
    icon: "🧹",
    tools: ["Power Query", "Excel", "Python Pandas"],
    description:
      "The raw 5,132-row extract contained significant quality issues. Using Power Query and Python Pandas, 624 issues were resolved: duplicates removed, nulls filled using escalation logic, date formats standardised, and priority mis-classifications corrected by cross-referencing the SLA contract matrix. Final clean dataset: 4,508 rows.",
    tableLabel: "Data Quality Issues Found and Resolved",
    tableHeaders: ["Issue Type", "Count Found", "Resolution Method", "After Fix"],
    tableRows: [
      ["Duplicate rows", "312", "Remove exact duplicates on Ticket ID", "0 duplicates"],
      ["Null Assigned To", "89", "Map from escalation log by timestamp", "0 nulls"],
      ["Date format variants (6 types)", "241", "Standardise to YYYY-MM-DD HH:MM", "1 format"],
      ["Wrong priority level", "14", "Cross-check SLA contract priority rules", "Corrected"],
      ["Missing resolution time", "57", "Calculate from open + close timestamps", "57 filled"],
      ["Incomplete category labels", "22", "Remap using ITSM category dictionary", "Corrected"],
    ],
    finding: null,
    action: null,
  },
  {
    step: "03",
    title: "Data Transformation",
    borderColor: "border-emerald-400",
    icon: "🔄",
    tools: ["DAX (Power BI)", "Power Query M", "Python Pandas"],
    description:
      "The clean dataset was modelled into a star schema: Fact_Tickets as the central table linked to Dim_Teams, Dim_Category, and Dim_Date. DAX calculated columns were added for Resolution Time (hrs), SLA Target per priority tier, SLA Breach Flag (boolean), Week Number, and Month label. This enabled slicing and drill-through in Power BI.",
    tableLabel: "Transformed Fact_Tickets — Calculated Fields Added (10 of 4,508 rows)",
    tableHeaders: ["Ticket ID", "Priority", "Res. Time (hrs)", "SLA Target (hrs)", "Breached?", "Week", "Month"],
    tableRows: [
      ["INC0019821", "P2", "3.4", "4", "No", "W01", "Jan"],
      ["INC0019822", "P3", "9.1", "8", "YES", "W01", "Jan"],
      ["INC0019823", "P1", "1.8", "1", "YES", "W01", "Jan"],
      ["INC0019824", "P4", "18.2", "24", "No", "W01", "Jan"],
      ["INC0019825", "P2", "2.9", "4", "No", "W01", "Jan"],
      ["INC0019826", "P3", "7.4", "8", "No", "W01", "Jan"],
      ["INC0019827", "P1", "0.9", "1", "No", "W01", "Jan"],
      ["INC0019828", "P2", "5.1", "4", "YES", "W01", "Jan"],
      ["INC0019829", "P4", "22.0", "24", "No", "W01", "Jan"],
      ["INC0019830", "P3", "8.9", "8", "YES", "W01", "Jan"],
    ],
    finding: null,
    action: null,
  },
  {
    step: "04",
    title: "Analysis",
    borderColor: "border-amber-400",
    icon: "🔎",
    tools: ["Power BI", "Excel PivotTable", "Trend Analysis"],
    description:
      "Analysis of Q1 2024 (4,508 tickets) revealed critical SLA breach patterns concentrated in P2 and P3 tickets assigned to Team A. The breach rate peaked at 34% in Week 3 of January due to a documented staff shortage. Category drill-down showed Network tickets had the highest volume (38%) but Software tickets had the worst resolution compliance (only 62% on time).",
    tableLabel: "Q1 2024 SLA Breach Analysis by Team and Priority",
    tableHeaders: ["Team", "Priority", "Total Tickets", "Breached", "Breach Rate", "Avg Res. Time (hrs)"],
    tableRows: [
      ["Team A", "P1", "142", "38", "26.8%", "1.4"],
      ["Team A", "P2", "498", "169", "33.9%", "5.2"],
      ["Team A", "P3", "621", "198", "31.9%", "9.4"],
      ["Team B", "P2", "310", "47", "15.2%", "3.8"],
      ["Team B", "P3", "402", "61", "15.2%", "7.1"],
      ["Team C", "P4", "890", "89", "10.0%", "19.8"],
      ["Team C", "P3", "355", "49", "13.8%", "7.6"],
    ],
    finding:
      "Team A handles 55% of all tickets but has a 31% average breach rate — 2x higher than Teams B and C. Root cause traced to understaffing on P1/P2 queue during morning shifts (08:00-11:00). If left unresolved, continued SLA breaches will trigger penalty clauses in the contract and damage client trust.",
    action:
      "Team A must be reinforced with 2 additional staff on morning shifts (Mon-Fri 08:00-11:00). This directly addresses the 68% of breaches that occur in that window. Without this action, the contract penalty clause activates at a 25% monthly breach rate — Team A is currently at 31%.",
  },
  {
    step: "05",
    title: "Visualization",
    borderColor: "border-rose-400",
    icon: "📊",
    tools: ["Power BI", "Tableau", "Dashboard Design"],
    description:
      "An interactive 3-tab SLA Compliance Dashboard was built in Power BI. Tab 1 shows real-time KPIs with gauge charts. Tab 2 shows weekly trend lines per team with forecast overlay. Tab 3 is a drill-through breach detail table with root-cause tagging. Stakeholders can filter by date range, team, priority, and category with full cross-visual interaction.",
    tableLabel: "Dashboard KPI Scorecard — Q1 2024 (Jan to Mar)",
    tableHeaders: ["KPI Metric", "January", "February", "March", "Contract Target"],
    tableRows: [
      ["Total Tickets", "1,621", "1,388", "1,499", "—"],
      ["Resolved On Time", "1,102", "1,071", "1,199", "—"],
      ["SLA Compliance %", "68.0%", "77.2%", "80.1%", "90% minimum"],
      ["Avg Resolution Time (hrs)", "6.8", "5.9", "5.2", "5 hrs max"],
      ["P1 Breach Count", "28", "19", "11", "0 target"],
      ["Repeat Incidents", "143", "98", "72", "50 or less"],
      ["Customer Satisfaction Score", "3.4/5", "3.8/5", "4.1/5", "4.0 minimum"],
    ],
    finding:
      "SLA compliance improved from 68% to 80.1% after Team A reinforcement — a 12.1% gain. However, the dashboard exposed a new risk: Customer Satisfaction reached 4.1 in March but P1 breach count (11) still exceeds the 0-target in the contract.",
    action:
      "The operations manager must introduce a P1 auto-escalation rule that triggers after 45 minutes without resolution action, to close the gap between the current 11 P1 breaches and the contracted 0-breach target before end of Q2.",
  },
  {
    step: "06",
    title: "Reporting",
    borderColor: "border-cyan-400",
    icon: "📋",
    tools: ["Power BI Scheduled Refresh", "Excel Deck", "Email Distribution"],
    description:
      "Reports were distributed on 3 structured cadences to ensure decision-makers acted on findings at the right time. Each report format was tailored to its audience: ops leads needed fast daily counts, managers needed weekly trends, and senior leadership needed monthly strategic summaries with forward actions.",
    tableLabel: "Reporting Cadence — Audience, Content, Format and Schedule",
    tableHeaders: ["Cadence", "Audience", "Core Content", "Format", "Delivery Time"],
    tableRows: [
      ["Daily", "Ops Team Lead", "Open ticket count, P1/P2 live status, yesterday breach count", "Auto Power BI email", "09:00 daily"],
      ["Weekly", "Department Manager", "Week-on-week SLA trend, team compliance %, top breach categories, staffing flags", "Excel deck + Power BI link", "Monday 08:30"],
      ["Monthly", "Senior Management", "Full SLA scorecard, root cause analysis, Q-on-Q trend, contract risk flags, next-month actions", "PowerPoint presentation", "1st working day, 10:00"],
    ],
    finding:
      "By end of Q1, the team achieved a 12.1% SLA compliance improvement and a 50% reduction in P1 breaches — both directly traceable to actions taken in response to weekly and monthly reports.",
    action:
      "Maintain all three cadences into Q2. Add a 90-day rolling forecast tab to the monthly deck to proactively flag capacity risks before they become SLA breaches — shifting the team from reactive to predictive operations.",
  },
];

export default function DataAnalyticsPage() {
  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-accent text-sm font-mono hover:underline mb-8 inline-block">
          &larr; Back to Portfolio
        </Link>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">
            End-to-End Case Study
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Data Analytics</h1>
          <div className="w-16 h-1 bg-accent rounded mb-6" />
          <p className="text-white/60 max-w-3xl mb-6 text-lg leading-relaxed">
            A complete analytics walkthrough using 4,508 ITSM tickets from Q1 2024. Each step
            shows the real data, the problem uncovered, and the specific reason why the team
            must act — whether to avoid contract penalties, improve resolution rates, or grow
            customer satisfaction scores.
          </p>
          <div className="flex flex-wrap gap-3 mb-16">
            {["4,508 tickets analysed", "Q1 2024", "+12.1% SLA improvement", "−50% P1 breaches"].map((b) => (
              <span
                key={b}
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/20"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-24">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              id={`step-${s.step}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={`border-l-4 ${s.borderColor} pl-6 mb-6`}>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-5xl font-extrabold text-white/10 leading-none">{s.step}</span>
                  <span className="text-2xl">{s.icon}</span>
                  <h2 className="text-2xl font-bold text-white">{s.title}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.tools.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              </div>

              <p className="text-white/70 leading-relaxed mb-4 text-base">{s.description}</p>

              <DataTable
                label={s.tableLabel}
                headers={s.tableHeaders}
                rows={s.tableRows}
              />

              {s.finding && (
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="bg-amber-500/10 border border-amber-400/30 rounded-xl p-5">
                    <p className="text-amber-400 font-semibold text-sm mb-2">🔍 Finding</p>
                    <p className="text-white/70 text-sm leading-relaxed">{s.finding}</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-5">
                    <p className="text-emerald-400 font-semibold text-sm mb-2">
                      ✅ Why the Team Must Act
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">{s.action}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Outcome Banner */}
        <motion.div
          className="mt-24 bg-card rounded-2xl p-10 border border-accent/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-accent">Quarter-End Outcomes</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "+12.1%", label: "SLA Compliance Improvement", sub: "Jan 68% → Mar 80.1%" },
              { metric: "−61%", label: "P1 Breach Reduction", sub: "28 breaches → 11 by March" },
              { metric: "−50%", label: "Repeat Incidents", sub: "143 → 72 over the quarter" },
            ].map((o) => (
              <div key={o.label} className="text-center">
                <p className="text-5xl font-extrabold text-accent mb-2">{o.metric}</p>
                <p className="text-white font-semibold mb-1">{o.label}</p>
                <p className="text-white/40 text-sm">{o.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 flex gap-4 flex-wrap">
          <Link href="/system-testing" className="px-6 py-3 rounded-xl border border-accent text-accent font-semibold hover:bg-accent/10 transition-all duration-200">
            Next: System Testing &rarr;
          </Link>
          <Link href="/" className="px-6 py-3 rounded-xl border border-white/20 text-white/50 font-semibold hover:border-white/40 transition-all duration-200">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
