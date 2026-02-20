"use client"
import TravelGlobe from "@/components/TravelGlobe"
import Link from "next/link"
import { useState } from "react"


const card: React.CSSProperties = { background:"#1E293B", border:"1px solid #334155", borderRadius:"16px", padding:"24px" }
const inner: React.CSSProperties = { maxWidth:"1100px", margin:"0 auto" }
const sec = (bg = "#0F172A"): React.CSSProperties => ({ background:bg, padding:"80px 24px" })
const sectionTitle = (color = "#38BDF8"): React.CSSProperties => ({ fontSize:"clamp(22px,3vw,34px)", fontWeight:800, color, marginBottom:"8px" })

const COUNTRIES = [
  "🇸🇬 Singapore","🇮🇩 Indonesia","🇹🇭 Thailand","🇻🇳 Vietnam","🇮🇳 India",
  "🇨🇳 China","🇯🇵 Japan","🇳🇿 New Zealand","🇹🇷 Turkey","🇭🇺 Hungary",
  "🇪🇸 Spain","🇦🇹 Austria","🇨🇿 Czech Republic","🇰🇿 Kazakhstan","🇰🇬 Kyrgyzstan",
  "🇮🇹 Italy","🇨🇭 Switzerland","🇩🇪 Germany","🇸🇦 Saudi Arabia","🇹🇼 Taiwan",
]

const SKILLS = [
  {
    area:"Data Analytics", color:"#38BDF8", icon:"📊",
    items:["Excel — VLOOKUP, Pivot Tables, Power Query","SQL — extraction & aggregation","Data cleaning & transformation","KPI dashboards & management reporting","SLA, margin, fraud, CLV, sell-through analysis"],
  },
  {
    area:"System Testing", color:"#7C3AED", icon:"🧪",
    items:["Functional & regression test case design","Defect logging & lifecycle tracking (JIRA)","UAT coordination with stakeholders","Test summary reports & go-live risk assessment","ServiceNow & test management tools"],
  },
  {
    area:"Service Level Management", color:"#10B981", icon:"📋",
    items:["SLA definition by priority tier (P1–P4)","Breach monitoring & trend reporting","Root cause analysis on SLA failures","Escalation workflow design","ServiceNow compliance dashboard setup"],
  },
  {
    area:"Travel & Tour Planning", color:"#F59E0B", icon:"✈️",
    items:["Freelance tour guide — 20 countries firsthand","Custom itinerary & logistics planning","Group coordination & vendor management","Asia, Europe, Central Asia, Middle East","End-to-end trip planning"],
  },
]

const CASES = [
  { href:"/itsm",    icon:"🎫", color:"#38BDF8", title:"ITSM Service Desk", hook:"32.4% SLA breach — one team was the root cause." },
  { href:"/fraud",   icon:"💳", color:"#7C3AED", title:"Fraud Detection",   hook:"3 flags predicted 85% of all fraud cases." },
  { href:"/fashion", icon:"👗", color:"#F59E0B", title:"Fashion Retail",    hook:"RM 24k trapped in dead stock — same 2 sizes." },
  { href:"/travel",  icon:"✈️", color:"#F43F5E", title:"Travel Operations", hook:"RM 80k/year overrun — nobody had noticed." },
  { href:"/cafe",    icon:"☕", color:"#10B981", title:"Cafe Profitability", hook:"Most popular drink was least profitable." },
]

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div style={{ background:"#0F172A" }}>

      {/* ── HERO ── */}
      <section style={{ background:"linear-gradient(135deg,#0A0F1E 0%,#0F172A 60%,#1E1035 100%)", padding:"100px 24px 80px", textAlign:"center" }}>
        <div style={{ maxWidth:"800px", margin:"0 auto" }}>
          <h1 style={{ fontSize:"clamp(36px,6vw,72px)", fontWeight:800, lineHeight:1.1, marginBottom:"20px" }}>
            <span style={{ color:"#F1F5F9" }}>Haikal </span>
            <span style={{ background:"linear-gradient(90deg,#38BDF8,#7C3AED)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Bakhtiar</span>
          </h1>
          <p style={{ fontSize:"clamp(15px,2vw,18px)", color:"#94A3B8", marginBottom:"16px", lineHeight:1.7 }}>
            Data Analyst · System Tester · SLM Specialist · Travel Planner
          </p>
          <p style={{ fontSize:"15px", color:"#64748B", marginBottom:"40px", maxWidth:"620px", margin:"0 auto 40px", lineHeight:1.8 }}>
            Computer Science graduate with hands-on experience in IT Service Management, operational reporting, data analytics, and multi-country travel planning.
          </p>
          <div style={{ display:"flex", gap:"12px", justifyContent:"center", flexWrap:"wrap" }}>
      
      <a href="#analytics"
        onMouseEnter={() => setHovered("hero-cases")}
        onMouseLeave={() => setHovered(null)}
        style={{
          display:"inline-block", padding:"14px 32px",
          background: hovered === "hero-cases" ? "#0EA5E9" : "#38BDF8",
          color:"#0A0F1E", borderRadius:"10px", fontWeight:700,
          fontSize:"15px", textDecoration:"none", cursor:"pointer",
          transform: hovered === "hero-cases" ? "translateY(-2px)" : "translateY(0)",
          boxShadow: hovered === "hero-cases" ? "0 8px 24px #38BDF855" : "none",
          transition:"all 0.2s ease",
        }}>View Case Studies</a>

      <a href="#contact"
        onMouseEnter={() => setHovered("hero-contact")}
        onMouseLeave={() => setHovered(null)}
        style={{
          display:"inline-block", padding:"14px 32px",
          background: hovered === "hero-contact" ? "#1E293B" : "transparent",
          color: hovered === "hero-contact" ? "#F1F5F9" : "#94A3B8",
          border:"1px solid #334155", borderRadius:"10px", fontWeight:600,
          fontSize:"15px", textDecoration:"none", cursor:"pointer",
          transform: hovered === "hero-contact" ? "translateY(-2px)" : "translateY(0)",
          transition:"all 0.2s ease",
        }}>Contact Me</a>

      <a href="/tours"
        onMouseEnter={() => setHovered("hero-tour")}
        onMouseLeave={() => setHovered(null)}
        style={{
          display:"inline-block", padding:"14px 32px",
          background: hovered === "hero-tour" ? "#92400E" : "transparent",
          color: hovered === "hero-tour" ? "#FDE68A" : "#F59E0B",
          border:"1px solid #F59E0B", borderRadius:"10px", fontWeight:600,
          fontSize:"15px", textDecoration:"none", cursor:"pointer",
          transform: hovered === "hero-tour" ? "translateY(-2px)" : "translateY(0)",
          transition:"all 0.2s ease",
        }}>✈️ Tour Guide</a>
                </div>
              </div>
            </section>

      {/* ── ABOUT ── */}
      <section id="about" style={sec("#0A0F1E")}>
        <div style={inner}>
          <h2 style={sectionTitle("#38BDF8")}>About</h2>
          <div style={{ width:"48px", height:"4px", background:"#38BDF8", borderRadius:"2px", marginBottom:"40px" }} />

          <div className="about-top-row" style={{ display:"grid", gridTemplateColumns:"auto 1fr", gap:"32px", alignItems:"start" }}>

            {/* Left — Photo + Name + Tags */}
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"20px" }}>
              <div style={{
                width:"200px", height:"175px", borderRadius:"50%",
                border:"3px solid #38BDF8",
                boxShadow:"0 0 0 8px #38BDF811, 0 8px 40px #38BDF844",
                overflow:"hidden", flexShrink:0,
                animation:"float 6s ease-in-out infinite",
              }}>
                <img src="/profile.jpg" alt="Haikal Bakhtiar" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              </div>

              <div style={{ textAlign:"center" }}>
                <div style={{ fontWeight:800, fontSize:"20px", color:"#F1F5F9", marginBottom:"6px" }}>Haikal Bakhtiar</div>
                <div style={{ color:"#64748B", fontSize:"13px" }}>
                  📍 Kuala Lumpur, MY &nbsp;·&nbsp; Willing to relocate
                </div>
              </div>

              {/* Role tags */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px", width:"100%" }}>
                {[
                  { icon:"📊", label:"Data Analytics" },
                  { icon:"🧪", label:"System Testing" },
                  { icon:"📋", label:"SLM" },
                  { icon:"✈️", label:"Tour Planning" },
                ].map(t => (
                  <div key={t.label} style={{
                    background:"#1E293B", border:"1px solid #334155",
                    borderRadius:"10px", padding:"10px 12px",
                    display:"flex", alignItems:"center", gap:"8px",
                  }}>
                    <span style={{ fontSize:"16px" }}>{t.icon}</span>
                    <span style={{ color:"#94A3B8", fontSize:"12px", fontWeight:600 }}>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Bio */}
            <div style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
              <div style={{ background:"#1E293B", border:"1px solid #334155", borderRadius:"16px", padding:"24px 26px" }}>
                <p style={{ color:"#CBD5E1", fontSize:"14px", lineHeight:1.95, margin:"0 0 14px" }}>
                  I&apos;m a Computer Science graduate based in Kuala Lumpur with hands-on experience in Data Analytics, System Testing, and Service Level Management within structured ITSM environments. I specialize in translating contracts and operational processes into measurable KPIs, validated dashboards, and risk-controlled releases — ensuring accuracy, compliance, and data-driven decision-making.
                </p>
                <p style={{ color:"#CBD5E1", fontSize:"14px", lineHeight:1.95, margin:"0 0 14px" }}>
                  Beyond corporate operations, I manage small business revenue tracking and booking data, strengthening my discipline in transaction validation, reporting accuracy, and margin analysis. I also bring real-world coordination experience as a freelance tour guide across 20 countries, combining logistics planning, stakeholder management, and operational execution.
                </p>
                <div style={{ width:"100%", height:"1px", background:"#334155", margin:"16px 0" }} />
                <p style={{ color:"#38BDF8", fontSize:"14px", lineHeight:1.95, fontWeight:600, margin:0 }}>
                  💡 I work best where data, process, and accountability intersect — turning complexity into structured, measurable outcomes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


            {/* DATA ANALYTICS */}
      <section id="analytics" style={sec("#0A0F1E")}>
        <div style={inner}>
          <h2 style={sectionTitle("#38BDF8")}>Data Analytics</h2>
          <div style={{ width:"48px", height:"4px", background:"#38BDF8", borderRadius:"2px", marginBottom:"12px" }} />
          <p style={{ color:"#64748B", fontSize:"15px", marginBottom:"32px" }}>
            5 end-to-end case studies covering service desk, fraud, retail, operations, and profitability analysis.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"14px", marginBottom:"32px" }}>
            {CASES.map(c => (
              <CaseCard key={c.href} c={c} />
            ))}
          </div>
          <div style={{ textAlign:"center" }}>
            <Link href="/analytics" style={{ display:"inline-block", background:"#38BDF8", color:"#0F172A", padding:"13px 32px", borderRadius:"8px", fontWeight:700, fontSize:"15px", textDecoration:"none" }}>
              View All Case Studies →
            </Link>
          </div>
        </div>
      </section>


      {/* ── SYSTEM TESTING ── */}
      <section id="testing" style={sec("#0F172A")}>
        <div style={inner}>
          <h2 style={sectionTitle("#7C3AED")}>System Testing</h2>
          <div style={{ width:"48px", height:"4px", background:"#7C3AED", borderRadius:"2px", marginBottom:"12px" }} />
          <p style={{ color:"#64748B", fontSize:"15px", marginBottom:"32px" }}>
            Functional testing, regression, UAT coordination, and defect lifecycle management across IT projects.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"16px", marginBottom:"32px" }}>
            {[
              { icon:"📝", t:"Test Case Design", d:"Structured test cases for functional and regression testing across end-to-end business workflows." },
              { icon:"🔍", t:"Defect Management", d:"Full defect lifecycle in JIRA — logging, tracking, prioritising, and resolution sign-off." },
              { icon:"👥", t:"UAT Coordination", d:"Working directly with business stakeholders to run and document user acceptance testing." },
              { icon:"📊", t:"Test Reporting", d:"Pass/fail summaries, coverage metrics, and go-live risk assessments for management." },
            ].map(i => (
              <div key={i.t} style={{ ...card, borderTop:"3px solid #7C3AED" }}>
                <div style={{ fontSize:"26px", marginBottom:"10px" }}>{i.icon}</div>
                <div style={{ fontWeight:700, fontSize:"14px", color:"#F1F5F9", marginBottom:"6px" }}>{i.t}</div>
                <p style={{ color:"#94A3B8", fontSize:"13px", lineHeight:1.7, margin:0 }}>{i.d}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center" }}>
            <Link href="/system-testing" style={{ display:"inline-block", background:"#7C3AED", color:"#fff", padding:"13px 32px", borderRadius:"8px", fontWeight:700, fontSize:"15px", textDecoration:"none" }}>
              View System Testing →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE LEVEL MANAGEMENT ── */}
      <section id="slm" style={sec("#0A0F1E")}>
        <div style={inner}>
          <h2 style={sectionTitle("#10B981")}>Service Level Management</h2>
          <div style={{ width:"48px", height:"4px", background:"#10B981", borderRadius:"2px", marginBottom:"12px" }} />
          <p style={{ color:"#64748B", fontSize:"15px", marginBottom:"32px" }}>
            SLA definition, breach monitoring, root cause analysis, and compliance reporting in ServiceNow environments.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"16px", marginBottom:"32px" }}>
            {[
              { icon:"📏", t:"SLA Definition", d:"Defined SLA targets by priority tier (P1–P4) aligned to business and contractual requirements." },
              { icon:"📈", t:"Breach Monitoring", d:"Daily and weekly breach tracking reports — identifying teams and categories exceeding thresholds." },
              { icon:"🔎", t:"Root Cause Analysis", d:"RCA on SLA breaches to surface systemic issues — volume spikes, capacity gaps, category patterns." },
              { icon:"🖥️", t:"ServiceNow Reporting", d:"ITSM platform configuration, SLA rule setup, and compliance dashboard management." },
            ].map(i => (
              <div key={i.t} style={{ ...card, borderTop:"3px solid #10B981" }}>
                <div style={{ fontSize:"26px", marginBottom:"10px" }}>{i.icon}</div>
                <div style={{ fontWeight:700, fontSize:"14px", color:"#F1F5F9", marginBottom:"6px" }}>{i.t}</div>
                <p style={{ color:"#94A3B8", fontSize:"13px", lineHeight:1.7, margin:0 }}>{i.d}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center" }}>
            <Link href="/service-level" style={{ display:"inline-block", background:"#10B981", color:"#0F172A", padding:"13px 32px", borderRadius:"8px", fontWeight:700, fontSize:"15px", textDecoration:"none" }}>
              View Service Level Management →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRAVEL CTA ── */}
      <section style={{ background:"linear-gradient(135deg,#0F172A,#1E1035)", padding:"80px 24px" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
            gap:"40px",
            alignItems:"center",
          }}>

            {/* Left — Text */}
            <div>
              <div style={{ fontSize:"52px", marginBottom:"16px" }}>✈️</div>
              <h2 style={{ fontSize:"clamp(24px,3vw,40px)", fontWeight:800, color:"#F1F5F9", marginBottom:"16px", lineHeight:1.2 }}>
                Freelance Tour Guide & Planner
              </h2>
              <p style={{ color:"#94A3B8", fontSize:"15px", lineHeight:1.8, marginBottom:"16px" }}>
                20 countries. Personalised itineraries. Adventure, culture, and off-the-beaten-path experiences across Asia, Europe, Central Asia, and beyond.
              </p>

              {/* Stats */}
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"12px", marginBottom:"28px" }}>
                {[
                  { v:"20",   l:"Countries" },
                  { v:"6",    l:"Guided Trips" },
                  { v:"100%", l:"Firsthand" },
                ].map(s => (
                  <div key={s.l} style={{ background:"#0F172A44", border:"1px solid #F59E0B33", borderRadius:"10px", padding:"12px 8px", textAlign:"center" }}>
                    <div style={{ fontSize:"20px", fontWeight:800, color:"#F59E0B" }}>{s.v}</div>
                    <div style={{ fontSize:"10px", color:"#64748B", marginTop:"3px" }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <Link href="/tours" style={{
                display:"inline-block", background:"#F59E0B", color:"#0F172A",
                padding:"13px 32px", borderRadius:"8px", fontWeight:800,
                fontSize:"15px", textDecoration:"none",
              }}>
                Explore Guided Trips →
              </Link>
            </div>

            {/* Right — Globe */}
            <div style={{
              background:"#0A0F1E",
              borderRadius:"24px",
              border:"1px solid #334155",
              overflow:"hidden",
              padding:"16px 0 8px",
              boxShadow:"0 0 0 1px #1E293B, 0 16px 48px #00000066",
              position:"relative",
            }}>
              <div style={{
                position:"absolute", inset:0,
                borderRadius:"24px",
                boxShadow:"inset 0 0 48px 24px #0A0F1E",
                pointerEvents:"none",
                zIndex:10,
              }} />
              <TravelGlobe />
            </div>

          </div>
        </div>
      </section>



      {/* ── CONTACT ── */}
      <section id="contact" style={sec("#0F172A")}>
        <div style={{ ...inner, maxWidth:"640px" }}>
          <h2 style={sectionTitle("#38BDF8")}>Contact</h2>
          <div style={{ width:"48px", height:"4px", background:"#38BDF8", borderRadius:"2px", marginBottom:"12px" }} />
          <p style={{ color:"#64748B", fontSize:"15px", lineHeight:1.8, marginBottom:"32px" }}>
            Available for data analytics projects, system testing roles, SLM consulting, and freelance tour planning. Based in Kuala Lumpur — willing to relocate.
          </p>
          <ContactForm />
        </div>
      </section>

    </div>
  )
}

function ContactForm() {
  const [btnHovered, setBtnHovered] = useState(false)
  const [sending,  setSending]  = useState(false)
  const [name,    setName]    = useState("")
  const [email,   setEmail]   = useState("")
  const [purpose, setPurpose] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Portfolio Enquiry — ${purpose || "General"} — from ${name}`)
    const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Purpose: ${purpose}

Message:
${message}

---
Sent via haikalbakhtiar.com portfolio contact form`
    )

    window.location.href = `mailto:haikal_bakhtiar@yahoo.com?subject=${subject}&body=${body}`
  }

  const inputStyle: React.CSSProperties = {
    width:"100%", background:"#1E293B", border:"1px solid #334155",
    borderRadius:"8px", padding:"12px 14px", color:"#F1F5F9",
    fontSize:"14px", outline:"none", boxSizing:"border-box",
  }
  const labelStyle: React.CSSProperties = {
    display:"block", fontSize:"12px", color:"#64748B",
    fontWeight:700, letterSpacing:"1px", marginBottom:"6px",
  }

  return (
    <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"16px" }}>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px" }}>
        <div>
          <label style={labelStyle}>YOUR NAME</label>
          <input
            required
            placeholder="e.g. John Doe"
            value={name}
            onChange={e => setName(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>EMAIL ADDRESS</label>
          <input
            required
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>ENQUIRY TYPE</label>
        <select
          required
          value={purpose}
          onChange={e => setPurpose(e.target.value)}
          style={inputStyle}
        >
          <option value="">Select an enquiry...</option>
          <option value="Data Analytics Project">Data Analytics Project</option>
          <option value="System Testing Role">System Testing Role</option>
          <option value="Service Level Management">Service Level Management</option>
          <option value="Travel Planning / Tour Guide">Travel Planning / Tour Guide</option>
          <option value="General Enquiry">Other / General Enquiry</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>MESSAGE</label>
        <textarea
          required
          rows={5}
          placeholder="Tell me about your project or enquiry…"
          value={message}
          onChange={e => setMessage(e.target.value)}
          style={{ ...inputStyle, resize:"vertical" }}
        />

      </div>

      <button type="submit"
        disabled={sending}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          width:"100%", padding:"14px",
          background: sending ? "#334155" : btnHovered ? "#0EA5E9" : "#38BDF8",
          color:"#0A0F1E", border:"none", borderRadius:"10px",
          fontWeight:700, fontSize:"15px", cursor: sending ? "not-allowed" : "pointer",
          transform: btnHovered && !sending ? "translateY(-2px)" : "translateY(0)",
          boxShadow: btnHovered && !sending ? "0 8px 24px #38BDF855" : "none",
          transition:"all 0.2s ease",
        }}>
        {sending ? "Sending…" : "Send Message →"}
      </button>


      <p style={{ color:"#475569", fontSize:"12px", textAlign:"center", margin:0 }}>
        Clicking Send will open your email client pre-filled and addressed to{" "}
        <span style={{ color:"#38BDF8" }}>haikal_bakhtiar@yahoo.com</span>
      </p>

    </form>
  )
}


function CaseCard({ c }: { c: typeof CASES[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={c.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#273449" : "#1E293B",
        border: `1px solid ${hovered ? c.color : "#334155"}`,
        borderRadius: "12px",
        padding: "20px",
        display: "block",
        textDecoration: "none",
        borderLeft: `4px solid ${c.color}`,
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? `0 8px 24px ${c.color}22` : "none",
        transition: "all 0.2s ease",
        cursor: "pointer",
      }}
    >
      <div style={{ fontSize:"28px", marginBottom:"10px" }}>{c.icon}</div>
      <div style={{ fontWeight:700, fontSize:"14px", color:"#F1F5F9", marginBottom:"6px" }}>{c.title}</div>
      <div style={{ color:"#64748B", fontSize:"12px", lineHeight:1.6, fontStyle:"italic", marginBottom:"12px" }}>
        &ldquo;{c.hook}&rdquo;
      </div>
      <div style={{
        display: "inline-flex", alignItems:"center", gap:"4px",
        color: c.color, fontSize:"12px", fontWeight:700,
        opacity: hovered ? 1 : 0,
        transform: hovered ? "translateX(0)" : "translateX(-6px)",
        transition: "all 0.2s ease",
      }}>
        View case study <span>→</span>
      </div>
    </Link>
  )
}