import Link from "next/link"

const card: React.CSSProperties = { background:"#1E293B", border:"1px solid #334155", borderRadius:"14px", padding:"26px" }

export default function SystemTesting() {
  return (
    <div style={{ background:"#0F172A", minHeight:"100vh" }}>

      {/* HERO */}
      <section style={{ background:"#0A0F1E", padding:"60px 24px 48px", borderBottom:"1px solid #1E293B" }}>
        <div style={{ maxWidth:"900px", margin:"0 auto" }}>
          <div style={{ fontSize:"11px", color:"#64748B", fontWeight:700, letterSpacing:"2px", marginBottom:"12px" }}>EXPERTISE</div>
          <h1 style={{ fontSize:"clamp(28px,4vw,48px)", fontWeight:800, color:"#F1F5F9", marginBottom:"12px" }}>🧪 System Testing</h1>
          <p style={{ color:"#94A3B8", fontSize:"16px", lineHeight:1.75, maxWidth:"680px" }}>
            End-to-end quality assurance experience across functional testing, regression, UAT coordination, and defect lifecycle management within structured IT project environments.
          </p>
        </div>
      </section>

      <div style={{ maxWidth:"1100px", margin:"0 auto", padding:"52px 24px" }}>

        {/* Overview */}
        <div style={{ background:"#1E293B", border:"1px solid #334155", borderLeft:"4px solid #7C3AED", borderRadius:"0 12px 12px 0", padding:"24px 28px", marginBottom:"48px" }}>
          <p style={{ color:"#CBD5E1", fontSize:"15px", lineHeight:1.9, margin:0 }}>
            Experienced in the full software testing lifecycle — from reading requirements and designing test cases through to executing tests, managing defects, coordinating UAT with business stakeholders, and producing formal test summary reports. Worked across functional, regression, integration, and user acceptance testing in ITSM and business application environments. Proficient in JIRA for defect tracking and ServiceNow for ITSM-integrated testing workflows.
          </p>
        </div>

        {/* What I Do */}
        <h2 style={{ fontSize:"22px", fontWeight:800, color:"#F1F5F9", marginBottom:"8px" }}>What I Do</h2>
        <p style={{ color:"#64748B", fontSize:"14px", marginBottom:"24px" }}>Core testing capabilities applied across IT projects and ITSM environments.</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"16px", marginBottom:"52px" }}>
          {[
            {
              icon:"📝", title:"Test Case Design",
              desc:"Design structured, traceable test cases from functional requirements — covering positive, negative, boundary, and edge case scenarios.",
              skills:["Requirements traceability matrix","Equivalence partitioning","Boundary value analysis","Negative & error-path testing"],
            },
            {
              icon:"🔍", title:"Defect Management",
              desc:"Log, classify, track, and manage defects through the full lifecycle — from initial discovery through retesting to formal closure.",
              skills:["Defect severity & priority classification","Reproduction steps & evidence","Retest & regression verification","Defect trend reporting in JIRA"],
            },
            {
              icon:"👥", title:"UAT Coordination",
              desc:"Plan and facilitate user acceptance testing sessions with business stakeholders, documenting outcomes and obtaining formal sign-off.",
              skills:["UAT test scenario walkthroughs","Stakeholder sign-off documentation","Issue triage and resolution tracking","Business-to-IT communication"],
            },
            {
              icon:"🔄", title:"Regression Testing",
              desc:"Execute regression test suites after system changes or new releases to confirm no existing functionality has been broken.",
              skills:["Smoke & sanity test execution","Regression suite management","Post-deployment verification","Change impact assessment"],
            },
            {
              icon:"🔗", title:"Integration Testing",
              desc:"Validate data flows and system interactions between modules, ensuring end-to-end processes behave correctly across integrated components.",
              skills:["End-to-end flow validation","Data integrity checks","Cross-module interaction testing","API and interface verification"],
            },
            {
              icon:"📊", title:"Test Reporting",
              desc:"Produce clear test summary reports with pass/fail metrics, coverage analysis, outstanding defect risk, and formal go-live recommendations.",
              skills:["Test execution metrics & KPIs","Risk-based go/no-go recommendation","Test coverage reporting","Management-ready summary format"],
            },
          ].map(i => (
            <div key={i.title} style={{ ...card, borderTop:"3px solid #7C3AED" }}>
              <div style={{ fontSize:"28px", marginBottom:"10px" }}>{i.icon}</div>
              <div style={{ fontWeight:700, fontSize:"15px", color:"#F1F5F9", marginBottom:"8px" }}>{i.title}</div>
              <p style={{ color:"#94A3B8", fontSize:"13px", lineHeight:1.7, marginBottom:"14px" }}>{i.desc}</p>
              <ul style={{ listStyle:"none", padding:0, margin:0 }}>
                {i.skills.map(s => (
                  <li key={s} style={{ color:"#64748B", fontSize:"12px", padding:"3px 0", display:"flex", gap:"6px" }}>
                    <span style={{ color:"#7C3AED" }}>›</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Testing Types */}
        <h2 style={{ fontSize:"22px", fontWeight:800, color:"#F1F5F9", marginBottom:"8px" }}>Types of Testing</h2>
        <p style={{ color:"#64748B", fontSize:"14px", marginBottom:"24px" }}>Testing approaches applied depending on project phase and requirement.</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"12px", marginBottom:"52px" }}>
          {[
            { type:"Functional Testing",    icon:"⚙️", desc:"Validates that each feature behaves as per the specified requirements."                    },
            { type:"Regression Testing",    icon:"🔄", desc:"Ensures new changes have not broken previously working functionality."                     },
            { type:"Integration Testing",   icon:"🔗", desc:"Tests data flow and interaction between integrated system modules."                        },
            { type:"UAT",                   icon:"👥", desc:"Business stakeholders verify the system meets their needs before go-live."                  },
            { type:"Smoke Testing",         icon:"💨", desc:"Quick high-level check that core functions are working after a new build."                  },
            { type:"Sanity Testing",        icon:"✅", desc:"Focused re-check of specific areas after a defect fix or minor change."                    },
            { type:"Exploratory Testing",   icon:"🔭", desc:"Unscripted testing to find edge cases and unexpected behaviour."                           },
            { type:"Negative Testing",      icon:"❌", desc:"Tests invalid inputs and error paths to confirm the system handles them correctly."         },
          ].map(t => (
            <div key={t.type} style={{ background:"#1E293B", border:"1px solid #334155", borderRadius:"12px", padding:"18px 16px" }}>
              <div style={{ fontSize:"22px", marginBottom:"8px" }}>{t.icon}</div>
              <div style={{ fontWeight:700, fontSize:"13px", color:"#F1F5F9", marginBottom:"5px" }}>{t.type}</div>
              <div style={{ color:"#64748B", fontSize:"12px", lineHeight:1.6 }}>{t.desc}</div>
            </div>
          ))}
        </div>

        {/* Testing Process */}
        <h2 style={{ fontSize:"22px", fontWeight:800, color:"#F1F5F9", marginBottom:"8px" }}>Testing Process</h2>
        <p style={{ color:"#64748B", fontSize:"14px", marginBottom:"24px" }}>The end-to-end process followed on every testing engagement.</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:"12px", marginBottom:"52px" }}>
          {[
            { step:"01", label:"Requirements Review",   desc:"Analyse functional specs, user stories, and acceptance criteria to identify testable scenarios." },
            { step:"02", label:"Test Planning",         desc:"Define scope, approach, entry/exit criteria, and resource allocation for the test cycle."        },
            { step:"03", label:"Test Case Design",      desc:"Write test cases with steps, input data, expected results, and pass/fail criteria."              },
            { step:"04", label:"Test Execution",        desc:"Execute test cases systematically and document actual results against expected outcomes."         },
            { step:"05", label:"Defect Logging",        desc:"Raise defects in JIRA with severity, priority, steps to reproduce, and supporting evidence."      },
            { step:"06", label:"Retest & Regression",   desc:"Verify each defect fix and execute regression suite to confirm no new issues introduced."        },
            { step:"07", label:"UAT Sign-Off",          desc:"Facilitate stakeholder UAT session, collect feedback, document formal go/no-go decision."        },
            { step:"08", label:"Test Report",           desc:"Deliver final summary — metrics, coverage, outstanding risk, and go-live recommendation."        },
          ].map(p => (
            <div key={p.step} style={{ background:"#1E293B", border:"1px solid #334155", borderRadius:"12px", padding:"20px 16px", textAlign:"center" }}>
              <div style={{ fontSize:"20px", fontWeight:800, color:"#7C3AED", marginBottom:"8px" }}>{p.step}</div>
              <div style={{ fontWeight:700, fontSize:"13px", color:"#F1F5F9", marginBottom:"6px" }}>{p.label}</div>
              <div style={{ color:"#64748B", fontSize:"12px", lineHeight:1.6 }}>{p.desc}</div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <h2 style={{ fontSize:"22px", fontWeight:800, color:"#F1F5F9", marginBottom:"8px" }}>Tools & Platforms</h2>
        <p style={{ color:"#64748B", fontSize:"14px", marginBottom:"24px" }}>Platforms and tools used across testing engagements.</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"12px", marginBottom:"52px" }}>
          {[
            { tool:"JIRA",           use:"Defect tracking, test lifecycle management, sprint boards",      icon:"🐞" },
            { tool:"Confluence",     use:"Test plan documentation, knowledge base, sign-off records",      icon:"📄" },
            { tool:"ServiceNow",     use:"ITSM ticket validation, SLA rule testing, incident workflows",   icon:"🖥️" },
            { tool:"Excel / Sheets", use:"Test case management, defect logs, coverage matrices",           icon:"📊" },
            { tool:"Browser DevTools",use:"Front-end validation, console error checking, network testing", icon:"🌐" },
            { tool:"Email & Outlook",use:"UAT stakeholder coordination, sign-off communication trails",    icon:"📧" },
          ].map(t => (
            <div key={t.tool} style={{ background:"#1E293B", border:"1px solid #334155", borderRadius:"12px", padding:"18px 16px" }}>
              <div style={{ fontSize:"22px", marginBottom:"8px" }}>{t.icon}</div>
              <div style={{ fontWeight:700, fontSize:"13px", color:"#F1F5F9", marginBottom:"5px" }}>{t.tool}</div>
              <div style={{ color:"#64748B", fontSize:"12px", lineHeight:1.6 }}>{t.use}</div>
            </div>
          ))}
        </div>

        {/* Case Study Block */}
        <div style={{ background:"#1E293B", border:"1px solid #334155", borderRadius:"14px", padding:"28px", marginBottom:"32px" }}>
          <div style={{ fontSize:"12px", color:"#7C3AED", fontWeight:700, letterSpacing:"1px", marginBottom:"10px" }}>
            SYSTEM TESTING
          </div>
          <div style={{ fontWeight:700, fontSize:"17px", color:"#F1F5F9", marginBottom:"8px" }}>
            🎫 System Testing — End-to-End Quality Assurance & Release Control
          </div>
          <div style={{ color:"#94A3B8", fontSize:"14px", lineHeight:1.7, marginBottom:"16px" }}>
A full-cycle ITSM platform upgrade testing case study covering test planning, execution (SIT & UAT), defect lifecycle management, and final sign-off — closing 25 defects, resolving all critical issues within 72 hours, and achieving a zero-defect production release with 100% UAT approval.          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"20px" }}>
            {["Functional Testing","Regression Testing","UAT Coordination","Defect Logging","SLA Rule Validation","ServiceNow","Test Reporting"].map(tag => (
              <span key={tag} style={{ background:"#0F172A", color:"#7C3AED", padding:"5px 12px", borderRadius:"20px", fontSize:"12px", border:"1px solid #7C3AED33", fontWeight:600 }}>
                {tag}
              </span>
            ))}
          </div>
          <Link href="/system-testingcs" style={{ display:"inline-block", background:"#7C3AED", color:"#fff", padding:"11px 24px", borderRadius:"8px", fontWeight:700, fontSize:"14px", textDecoration:"none" }}>
            View Case Study →
          </Link>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign:"center" }}>
          <Link href="/#contact" style={{ display:"inline-block", background:"#7C3AED", color:"#fff", padding:"13px 32px", borderRadius:"8px", fontWeight:700, fontSize:"15px", textDecoration:"none", marginRight:"12px" }}>
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
