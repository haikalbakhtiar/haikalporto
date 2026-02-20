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
                  cell === "FAIL" || cell === "Critical" || cell === "Open"
                    ? "text-rose-400 font-semibold"
                    : cell === "Pass" || cell === "Closed" || cell === "Resolved"
                    ? "text-emerald-400"
                    : cell === "In Progress" || cell === "Medium"
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
    title: "Test Planning",
    icon: "📝",
    borderColor: "border-sky-400",
    tools: ["Test Plan Doc", "JIRA", "Confluence"],
    desc: "Before any testing begins, a structured test plan was prepared covering scope, objectives, test types, resource allocation, schedule, and risk mitigation. The plan was agreed and signed off by the project lead and client representative.",
    tableLabel: "Test Plan Summary — ITSM Platform Upgrade v3.2",
    tableHeaders: ["Section", "Detail"],
    tableRows: [
      ["Project", "ITSM Platform Upgrade v3.2"],
      ["Test Scope", "Incident module, SLA engine, reporting dashboards, user access"],
      ["Test Types", "Functional, Integration, Regression, UAT"],
      ["Total Test Cases", "248"],
      ["Test Period", "2024-02-05 to 2024-02-23 (3 weeks)"],
      ["Environments", "SIT (System Integration), UAT (User Acceptance)"],
      ["Sign-off Required From", "Project Manager, Client Lead, QA Lead"],
    ],
    finding: null,
    action: null,
  },
  {
    phase: "02",
    title: "Test Case Design",
    icon: "✍️",
    borderColor: "border-purple-400",
    tools: ["Excel Test Cases", "Confluence", "Boundary Analysis"],
    desc: "248 test cases were designed across 6 functional areas using equivalence partitioning and boundary value analysis. Each test case included preconditions, test steps, expected results, and links to requirements. Cases were reviewed and approved before execution began.",
    tableLabel: "Test Case Distribution by Module",
    tableHeaders: ["Module", "Test Cases", "Priority", "Type"],
    tableRows: [
      ["Incident Creation & Routing", "52", "High", "Functional"],
      ["SLA Timer & Breach Logic", "48", "Critical", "Functional + Integration"],
      ["Escalation Workflow", "34", "High", "Functional"],
      ["Reporting & Dashboard Output", "41", "High", "Functional + UAT"],
      ["User Access & Permissions", "28", "Medium", "Security"],
      ["System Integration (API)", "45", "Critical", "Integration + Regression"],
    ],
    finding: null,
    action: null,
  },
  {
    phase: "03",
    title: "Test Execution — SIT",
    icon: "🧪",
    borderColor: "border-emerald-400",
    tools: ["JIRA", "Excel Tracker", "ServiceNow SIT env"],
    desc: "System Integration Testing was executed over 10 days. 248 test cases were executed, uncovering 19 defects. Critical defects in the SLA breach logic and API integration were immediately escalated. 16 of 19 defects were resolved and re-tested within the SIT window.",
    tableLabel: "SIT Execution Results — ITSM Platform v3.2",
    tableHeaders: ["Test Case ID", "Module", "Priority", "Result", "Defect Raised", "Status"],
    tableRows: [
      ["TC-SIT-001", "Incident Creation", "High", "Pass", "None", "Closed"],
      ["TC-SIT-012", "SLA Timer Logic", "Critical", "FAIL", "DEF-007", "Resolved"],
      ["TC-SIT-013", "SLA Breach Alert", "Critical", "FAIL", "DEF-008", "Resolved"],
      ["TC-SIT-045", "Escalation Workflow", "High", "Pass", "None", "Closed"],
      ["TC-SIT-089", "API Integration", "Critical", "FAIL", "DEF-015", "Open"],
      ["TC-SIT-112", "Dashboard Output", "High", "Pass", "None", "Closed"],
      ["TC-SIT-198", "User Permissions", "Medium", "FAIL", "DEF-019", "Resolved"],
      ["TC-SIT-248", "Regression — Core", "High", "Pass", "None", "Closed"],
    ],
    finding: "19 defects raised. 3 critical: SLA timer miscalculating breach thresholds by 15 minutes, breach alert emails not triggering, and API payload dropping custom fields on handoff. These would have caused incorrect SLA reporting in production.",
    action: "Critical defects DEF-007, DEF-008 were resolved by the dev team within 48 hours and re-verified. DEF-015 (API) remained open and was tracked as a known risk into UAT — the dev lead confirmed a fix in the next build cycle.",
  },
  {
    phase: "04",
    title: "UAT Coordination",
    icon: "✅",
    borderColor: "border-amber-400",
    tools: ["UAT Test Scripts", "Zoom Sessions", "Defect Log"],
    desc: "UAT was conducted with 8 end users across 3 departments over 5 days. I coordinated sessions, distributed test scripts, walked users through scenarios, documented their feedback, and tracked all raised issues in a defect log. 6 new issues were raised by users, 4 of which were resolved before sign-off.",
    tableLabel: "UAT Session Log — 5 Days, 8 Users, 3 Departments",
    tableHeaders: ["Day", "Dept", "Users", "Scenarios Tested", "Issues Raised", "Resolved", "Sign-off"],
    tableRows: [
      ["Day 1", "IT Operations", "3", "Incident creation, routing, escalation", "2", "2", "Yes"],
      ["Day 2", "Service Desk", "2", "SLA compliance view, breach alerts", "2", "1", "Partial"],
      ["Day 3", "Management", "2", "Dashboard, reporting, KPI views", "1", "1", "Yes"],
      ["Day 4", "IT Operations", "1", "Re-test Day 2 open issue + regression", "1", "1", "Yes"],
      ["Day 5", "All", "8", "Full end-to-end walkthrough", "0", "0", "Yes — Full"],
    ],
    finding: "Service Desk users flagged that the SLA breach alert email did not display the ticket priority in the subject line — a usability issue not caught in SIT. This caused confusion in triaging urgent tickets from email alone.",
    action: "Email template was updated by the dev team to include priority and ticket category in the subject line before Day 4. This directly improved the team's ability to triage from inbox without opening the portal — saving estimated 3-4 minutes per P1 alert.",
  },
  {
    phase: "05",
    title: "Defect Lifecycle",
    icon: "🐛",
    borderColor: "border-rose-400",
    tools: ["JIRA Defect Board", "Severity Matrix", "Re-test Tracking"],
    desc: "All defects were logged with severity, steps to reproduce, expected vs actual results, screenshots, and developer assignment. A defect board in JIRA tracked status from New → In Progress → Fixed → Re-test → Closed. The full lifecycle for all 25 raised defects was managed and closed before UAT sign-off.",
    tableLabel: "Defect Summary — Full Lifecycle (SIT + UAT Combined)",
    tableHeaders: ["Defect ID", "Module", "Severity", "Status", "Dev Fix Time", "Re-verified"],
    tableRows: [
      ["DEF-007", "SLA Timer Logic", "Critical", "Closed", "24 hrs", "Yes"],
      ["DEF-008", "Breach Email Alert", "Critical", "Closed", "48 hrs", "Yes"],
      ["DEF-015", "API Integration", "Critical", "Closed", "72 hrs", "Yes"],
      ["DEF-019", "User Permissions", "High", "Closed", "36 hrs", "Yes"],
      ["DEF-021", "Email Subject Line", "Medium", "Closed", "8 hrs", "Yes"],
      ["DEF-024", "Report Date Filter", "Low", "Closed", "12 hrs", "Yes"],
      ["DEF-025", "Dashboard Load Time", "Low", "Closed", "16 hrs", "Yes"],
    ],
    finding: "All 25 defects were closed before final UAT sign-off. 3 critical defects were resolved within 72 hours of being raised. Zero defects were carried into production — a full clean release.",
    action: "The defect-free production release was achieved because every critical defect was escalated immediately with clear reproduction steps and business impact documented. This allowed the dev team to prioritise correctly and avoid costly post-production fixes.",
  },
  {
    phase: "06",
    title: "Sign-off & Documentation",
    icon: "📄",
    borderColor: "border-cyan-400",
    tools: ["Test Summary Report", "Sign-off Form", "Confluence"],
    desc: "A full Test Summary Report was produced documenting test coverage, execution results, defect summary, open risks, and sign-off recommendation. The report was presented to the project manager and client lead. Formal sign-off was obtained, clearing the build for production deployment.",
    tableLabel: "Test Summary Report — Final Metrics",
    tableHeaders: ["Metric", "Value"],
    tableRows: [
      ["Total Test Cases Designed", "248"],
      ["Total Test Cases Executed", "248 (100%)"],
      ["Pass on First Run", "229 (92.3%)"],
      ["Defects Raised (SIT + UAT)", "25"],
      ["Critical Defects", "3 (all closed)"],
      ["Defects Open at Sign-off", "0"],
      ["UAT Sign-off", "Approved — all 8 users"],
      ["Production Release Status", "Cleared for deployment"],
    ],
    finding: "100% test execution coverage was achieved with a 92.3% first-run pass rate. All 25 defects were resolved and closed. The project delivered a defect-free production release on schedule.",
    action: "The structured approach — test plan agreed upfront, critical defects escalated immediately, UAT coordinated with real end users — is what enabled zero defects at go-live. Skipping any of these steps would have created rework and production risk.",
  },
];

export default function SystemTestingPage() {
  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-accent text-sm font-mono hover:underline mb-8 inline-block">
          &larr; Back to Portfolio
        </Link>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">Full Process Walkthrough</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">System Testing</h1>
          <div className="w-16 h-1 bg-accent rounded mb-6" />
          <p className="text-white/60 max-w-3xl mb-6 text-lg leading-relaxed">
            A complete system testing case study for an ITSM platform upgrade (v3.2). From test
            planning to production sign-off — every phase shows the real data, what was found, and
            why acting on each finding prevented costly post-release failures.
          </p>
          <div className="flex flex-wrap gap-3 mb-16">
            {["248 test cases", "25 defects closed", "0 defects at go-live", "100% UAT sign-off"].map((b) => (
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
          <Link href="/system-testing" className="px-6 py-3 rounded-xl border border-white/20 text-white/50 font-semibold hover:border-white/40 transition-all">
            &larr; System Testing
          </Link>
        </div>
      </div>
    </div>
  );
}
