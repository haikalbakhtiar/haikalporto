import Link from "next/link"

const card: React.CSSProperties = { background:"#1E293B", border:"1px solid #334155", borderRadius:"14px", padding:"26px" }

export default function ServiceLevel() {
  return (
    <div style={{ background:"#0F172A", minHeight:"100vh" }}>
      <section style={{ background:"#0A0F1E", padding:"60px 24px 48px", borderBottom:"1px solid #1E293B" }}>
        <div style={{ maxWidth:"900px", margin:"0 auto" }}>
          <div style={{ fontSize:"11px", color:"#64748B", fontWeight:700, letterSpacing:"2px", marginBottom:"12px" }}>EXPERTISE</div>
          <h1 style={{ fontSize:"clamp(28px,4vw,48px)", fontWeight:800, color:"#F1F5F9", marginBottom:"12px" }}>📋 Service Level Management</h1>
          <p style={{ color:"#94A3B8", fontSize:"16px", lineHeight:1.75, maxWidth:"680px" }}>
            SLA definition, breach monitoring, root cause analysis, escalation workflow design, and compliance reporting — primarily within ServiceNow-based ITSM environments.
          </p>
        </div>
      </section>

      <div style={{ maxWidth:"1100px", margin:"0 auto", padding:"52px 24px" }}>

        {/* Overview */}
        <div style={{ background:"#1E293B", border:"1px solid #334155", borderLeft:"4px solid #10B981", borderRadius:"0 12px 12px 0", padding:"24px 28px", marginBottom:"40px" }}>
          <p style={{ color:"#CBD5E1", fontSize:"15px", lineHeight:1.85, margin:0 }}>
            Experienced in defining, monitoring, and reporting on service level agreements across multi-team IT environments. Skilled in identifying SLA breach patterns through data analysis, producing management-ready compliance reports, and designing escalation procedures that prevent contractual penalties.
          </p>
        </div>

        {/* Core Skills */}
        <h2 style={{ fontSize:"22px", fontWeight:800, color:"#F1F5F9", marginBottom:"20px" }}>Core Skills</h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"16px", marginBottom:"48px" }}>
          {[
            { icon:"📏", title:"SLA Definition & Design", desc:"Defined SLA targets by priority tier (P1–P4) aligned to business requirements and contractual obligations, with clear breach thresholds and measurement criteria.", skills:["Priority tier SLA matrices","Breach threshold definition","Contractual alignment"] },
            { icon:"📈", title:"Breach Monitoring", desc:"Built daily and weekly monitoring reports to identify teams, categories, and time periods consistently exceeding SLA targets before escalation is required.", skills:["Daily breach dashboards","Team-level SLA tracking","Trend identification"] },
            { icon:"🔎", title:"Root Cause Analysis", desc:"Conducted structured RCA on SLA breaches to surface systemic causes — volume spikes, team capacity, category-level patterns, and process gaps.", skills:["5-Why analysis","Category and team drilldown","Pattern recognition across periods"] },
            { icon:"⚡", title:"Escalation Workflows", desc:"Designed and documented escalation procedures for P1 and P2 incidents to ensure timely management involvement and avoid contractual penalty triggers.", skills:["P1/P2 escalation paths","Auto-escalation rule design","Stakeholder notification chains"] },
            { icon:"📋", title:"Compliance Reporting", desc:"Produced daily, weekly, and monthly SLA compliance reports for IT management and senior leadership, with trend charts and forward-looking breach risk indicators.", skills:["Management-ready report format","Trend and variance analysis","Forward breach risk flagging"] },
            { icon:"🖥️", title:"ServiceNow", desc:"Hands-on experience with ServiceNow for incident management, SLA rule configuration, compliance tracking dashboards, and automated breach alerting.", skills:["SLA rule configuration","Incident queue management","Compliance dashboard setup"] },
          ].map(i => (
            <div key={i.title} style={{ ...card, borderTop:"3px solid #10B981" }}>
              <div style={{ fontSize:"28px", marginBottom:"10px" }}>{i.icon}</div>
              <div style={{ fontWeight:700, fontSize:"15px", color:"#F1F5F9", marginBottom:"8px" }}>{i.title}</div>
              <p style={{ color:"#94A3B8", fontSize:"13px", lineHeight:1.7, marginBottom:"14px" }}>{i.desc}</p>
              <ul style={{ listStyle:"none", padding:0, margin:0 }}>
                {i.skills.map(s => (
                  <li key={s} style={{ color:"#64748B", fontSize:"12px", padding:"3px 0", display:"flex", gap:"6px" }}>
                    <span style={{ color:"#10B981" }}>›</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SLA Priority Table */}
        <h2 style={{ fontSize:"22px", fontWeight:800, color:"#F1F5F9", marginBottom:"20px" }}>SLA Priority Framework</h2>
        <div style={{ overflowX:"auto", marginBottom:"48px" }}>
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"14px", minWidth:"500px" }}>
            <thead>
              <tr>
                {["Priority","Description","SLA Target","Breach Impact","Escalation"].map(h => (
                  <th key={h} style={{ background:"#1E293B", color:"#10B981", padding:"12px 16px", textAlign:"left", fontWeight:700, borderBottom:"2px solid #334155", whiteSpace:"nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { p:"P1 — Critical",   d:"System down, business-critical impact",         t:"4 hours",  i:"🔴 Contract penalty risk", e:"Immediate — Director level" },
                { p:"P2 — High",       d:"Major function impaired, workaround limited",   t:"8 hours",  i:"🔴 High customer impact",  e:"1 hour — Manager level"   },
                { p:"P3 — Medium",     d:"Partial function loss, workaround available",   t:"24 hours", i:"🟡 Moderate impact",       e:"4 hours — Team Lead"      },
                { p:"P4 — Low",        d:"Minor issue, cosmetic or enhancement request",  t:"48 hours", i:"🟢 Low impact",            e:"Next business day"        },
              ].map((r, i) => (
                <tr key={r.p} style={{ background:i%2===0?"#0F172A":"#111827" }}>
                  <td style={{ padding:"11px 16px", color:"#F1F5F9", fontWeight:600, borderBottom:"1px solid #1E293B" }}>{r.p}</td>
                  <td style={{ padding:"11px 16px", color:"#94A3B8", borderBottom:"1px solid #1E293B" }}>{r.d}</td>
                  <td style={{ padding:"11px 16px", color:"#10B981", fontWeight:700, borderBottom:"1px solid #1E293B" }}>{r.t}</td>
                  <td style={{ padding:"11px 16px", color:"#CBD5E1", borderBottom:"1px solid #1E293B" }}>{r.i}</td>
                  <td style={{ padding:"11px 16px", color:"#64748B", borderBottom:"1px solid #1E293B" }}>{r.e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SLM Process */}
        <h2 style={{ fontSize:"22px", fontWeight:800, color:"#F1F5F9", marginBottom:"20px" }}>SLM Process</h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:"12px", marginBottom:"48px" }}>
          {[
            { step:"01", label:"SLA Design", desc:"Define priority tiers, targets, and measurement rules" },
            { step:"02", label:"Configure ITSM", desc:"Set up SLA rules and dashboards in ServiceNow" },
            { step:"03", label:"Monitor Daily", desc:"Track breach counts, near-breaches, and trending patterns" },
            { step:"04", label:"Escalate Early", desc:"Trigger escalation before SLA expires for P1/P2" },
            { step:"05", label:"Root Cause", desc:"Investigate breaches — team, category, volume, process" },
            { step:"06", label:"Report & Improve", desc:"Monthly compliance report with recommendations" },
          ].map(p => (
            <div key={p.step} style={{ background:"#1E293B", border:"1px solid #334155", borderRadius:"12px", padding:"20px 16px", textAlign:"center" }}>
              <div style={{ fontSize:"22px", fontWeight:800, color:"#10B981", marginBottom:"8px" }}>{p.step}</div>
              <div style={{ fontWeight:700, fontSize:"13px", color:"#F1F5F9", marginBottom:"6px" }}>{p.label}</div>
              <div style={{ color:"#64748B", fontSize:"12px", lineHeight:1.6 }}>{p.desc}</div>
            </div>
          ))}
        </div>

        {/* Service Level Management Case Study Block */}
        <div style={{ background:"#1E293B", border:"1px solid #334155", borderRadius:"14px", padding:"28px", marginBottom:"32px" }}>
          <div style={{ fontSize:"12px", color:"#10B981", fontWeight:700, letterSpacing:"1px", marginBottom:"10px" }}>
            SERVICE LEVEL MANAGEMENT
          </div>
          <div style={{ fontWeight:700, fontSize:"17px", color:"#F1F5F9", marginBottom:"8px" }}>
            🎫 Service Level Management (SLM) — End-to-End Governance & KPI Control
          </div>
          <div style={{ color:"#94A3B8", fontSize:"14px", lineHeight:1.7, marginBottom:"16px" }}>
            A full-cycle SLA case study covering contract review, KPI framework design, Power BI dashboard development, contract validation, and executive reporting — uncovering hidden compliance gaps and driving measurable SLA improvement (+12.1%) through data-backed management action.
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"20px" }}>
            {["Contract Review","KPI Definition","Dashboard Development","Contract Validation","Reporting & Governance"].map(tag => (
              <span key={tag} style={{ background:"#0F172A", color:"#10B981", padding:"5px 12px", borderRadius:"20px", fontSize:"12px", border:"1px solid #10B98133", fontWeight:600 }}>
                {tag}
              </span>
            ))}
          </div>
          <Link href="/service-levelcs" style={{ display:"inline-block", background:"#10B981", color:"#0F172A", padding:"11px 24px", borderRadius:"8px", fontWeight:700, fontSize:"14px", textDecoration:"none" }}>
            View Case Study →
          </Link>
          </div>



        {/* ITSM Case Study Link */}
        <div style={{ background:"#1E293B", border:"1px solid #334155", borderRadius:"14px", padding:"28px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"16px", marginBottom:"32px" }}>
          <div>
            <div style={{ fontSize:"12px", color:"#64748B", fontWeight:700, letterSpacing:"1px", marginBottom:"6px" }}>RELATED CASE STUDY</div>
            <div style={{ fontWeight:700, fontSize:"17px", color:"#F1F5F9", marginBottom:"4px" }}>🎫 ITSM Service Desk Analytics</div>
            <div style={{ color:"#94A3B8", fontSize:"14px" }}>Analysed 4,508 tickets — identified 39% breach rate root cause and delivered 3-action remediation plan.</div>
          </div>
          <Link href="/itsm" style={{ display:"inline-block", background:"#38BDF8", color:"#0F172A", padding:"11px 24px", borderRadius:"8px", fontWeight:700, fontSize:"14px", textDecoration:"none", whiteSpace:"nowrap" }}>
            View Case Study →
          </Link>
        </div>
        

        <div style={{ textAlign:"center" }}>
          <Link href="/#contact" style={{ display:"inline-block", background:"#10B981", color:"#0F172A", padding:"13px 32px", borderRadius:"8px", fontWeight:700, fontSize:"15px", textDecoration:"none", marginRight:"12px" }}>
            Work With Me →
          </Link>
          <Link href="/" style={{ display:"inline-block", color:"#64748B", fontSize:"14px", padding:"13px 0" }}>
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
