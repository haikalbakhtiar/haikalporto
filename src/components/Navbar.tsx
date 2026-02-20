"use client"
import Link from "next/link"
import { useState } from "react"

const ANALYTICS_ITEMS = [
  { href:"/analytics",  label:"📊 All Case Studies" },
  { href:"/itsm",       label:"🎫 ITSM Service Desk" },
  { href:"/fraud",      label:"💳 Fraud Detection" },
  { href:"/fashion",    label:"👗 Fashion Retail" },
  { href:"/travel",     label:"✈️ Travel Operations" },
  { href:"/cafe",       label:"☕ Cafe Profitability" },
]

const NAV_LINKS = [
  { href:"/#about",        label:"About" },
  { href:"/#skills",       label:"Skills" },
  { href:"/#testing",      label:"System Testing" },
  { href:"/system-testing",label:"→ Full Page" },
  { href:"/#slm",          label:"Service Level Mgmt" },
  { href:"/service-level", label:"→ Full Page" },
  { href:"/tours",         label:"✈️ Travel" },
  { href:"/#contact",      label:"Contact" },
]

export default function Navbar() {
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [dropOpen,  setDropOpen]  = useState(false)
  const [mDropOpen, setMDropOpen] = useState(false)

  const close = () => { setMenuOpen(false); setMDropOpen(false) }

  const linkStyle = {
    color:"#94A3B8", padding:"6px 10px", borderRadius:"6px",
    fontSize:"13px", fontWeight:500 as const,
    whiteSpace:"nowrap" as const, textDecoration:"none" as const,
  }

  return (
    <>
      <nav style={{ background:"#0A0F1E", borderBottom:"1px solid #1E293B", position:"sticky", top:0, zIndex:100, padding:"0 20px" }}>
        <div style={{ maxWidth:"1300px", margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:"60px" }}>

          {/* Logo */}
          <Link href="/" style={{ color:"#38BDF8", fontWeight:800, fontSize:"20px", textDecoration:"none", flexShrink:0 }}>
            HB<span style={{ color:"#7C3AED" }}>.</span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display:"flex", gap:"2px", alignItems:"center", flexWrap:"wrap" }} className="desktop-nav">
            <Link href="/#about"  style={linkStyle}>About</Link>
            <Link href="/#skills" style={linkStyle}>Skills</Link>

            {/* Analytics dropdown */}
            <div style={{ position:"relative" }}
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}>
              <Link href="/analytics" style={{ ...linkStyle, display:"flex", alignItems:"center", gap:"4px" }}>
                Data Analytics <span style={{ fontSize:"10px", opacity:0.5 }}>▼</span>
              </Link>
              {dropOpen && (
                <div style={{ position:"absolute", top:"calc(100% + 4px)", left:0, background:"#1E293B", border:"1px solid #334155", borderRadius:"10px", minWidth:"210px", padding:"6px", boxShadow:"0 8px 32px #00000077", zIndex:200 }}>
                  {ANALYTICS_ITEMS.map(item => (
                    <Link key={item.href} href={item.href} onClick={() => setDropOpen(false)}
                      style={{ display:"block", color:"#CBD5E1", padding:"9px 14px", borderRadius:"7px", fontSize:"13px", textDecoration:"none", fontWeight:500 }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/system-testing" style={linkStyle}>System Testing</Link>
            <Link href="/service-level"  style={linkStyle}>Service Level Mgmt</Link>
            <Link href="/tours"          style={{ ...linkStyle, color:"#F59E0B" }}>✈️ Travel</Link>
            <Link href="/#contact"       style={linkStyle}>Contact</Link>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ display:"none", background:"none", border:"1px solid #334155", borderRadius:"8px", padding:"8px 10px", cursor:"pointer", flexDirection:"column", gap:"5px", alignItems:"center", justifyContent:"center" }}
            className="hamburger"
            aria-label="Menu"
          >
            <span style={{ display:"block", width:"20px", height:"2px", background: menuOpen ? "#F43F5E" : "#94A3B8", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none", transition:"all 0.2s" }} />
            <span style={{ display:"block", width:"20px", height:"2px", background:"#94A3B8", opacity: menuOpen ? 0 : 1, transition:"all 0.2s" }} />
            <span style={{ display:"block", width:"20px", height:"2px", background: menuOpen ? "#F43F5E" : "#94A3B8", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none", transition:"all 0.2s" }} />
          </button>

        </div>
      </nav>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div style={{ position:"fixed", top:"60px", left:0, right:0, bottom:0, background:"#0A0F1E", zIndex:99, overflowY:"auto", padding:"16px 20px 40px", borderTop:"1px solid #1E293B" }}>

          <Link href="/#about"  style={mLink} onClick={close}>About</Link>
          <Link href="/#skills" style={mLink} onClick={close}>Skills</Link>

          {/* Analytics accordion */}
          <div>
            <button
              onClick={() => setMDropOpen(o => !o)}
              style={{ ...mLink, background:"none", border:"none", cursor:"pointer", width:"100%", textAlign:"left" as const, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              📊 Data Analytics
              <span style={{ fontSize:"12px", color:"#64748B" }}>{mDropOpen ? "▲" : "▼"}</span>
            </button>
            {mDropOpen && (
              <div style={{ paddingLeft:"16px", borderLeft:"2px solid #334155", marginBottom:"4px" }}>
                {ANALYTICS_ITEMS.map(item => (
                  <Link key={item.href} href={item.href} onClick={close}
                    style={{ display:"block", color:"#64748B", padding:"9px 12px", fontSize:"13px", textDecoration:"none" }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/system-testing" style={mLink} onClick={close}>🧪 System Testing</Link>
          <Link href="/service-level"  style={mLink} onClick={close}>📋 Service Level Mgmt</Link>
          <Link href="/tours"          style={{ ...mLink, color:"#F59E0B" }} onClick={close}>✈️ Travel</Link>
          <Link href="/#contact"       style={mLink} onClick={close}>Contact</Link>

          {/* Info strip */}
          <div style={{ marginTop:"24px", padding:"16px", background:"#1E293B", borderRadius:"12px", border:"1px solid #334155" }}>
            <div style={{ fontSize:"13px", color:"#64748B" }}>📍 Kuala Lumpur, MY</div>
            <div style={{ fontSize:"13px", color:"#64748B", marginTop:"4px" }}>💼 Open to work · Willing to relocate</div>
          </div>
        </div>
      )}

      {/* Responsive styles injected */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
    </>
  )
}

const mLink: React.CSSProperties = {
  display:"block", color:"#CBD5E1", padding:"14px 12px",
  fontSize:"15px", fontWeight:500, textDecoration:"none",
  borderBottom:"1px solid #1E293B",
}
