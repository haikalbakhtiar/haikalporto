"use client"
import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false })

const VISITED_ISO = new Set([
  "SGP","IDN","THA","VNM","IND","CHN","JPN","NZL",
  "TUR","HUN","ESP","AUT","CZE","KAZ","KGZ","ITA",
  "CHE","DEU","SAU","TWN",
])

// Also match by name as fallback
const VISITED_NAMES = new Set([
  "Singapore","Indonesia","Thailand","Vietnam","India","China","Japan",
  "New Zealand","Turkey","Hungary","Spain","Austria","Czech Republic",
  "Czech Rep.","Czechia","Kazakhstan","Kyrgyzstan","Italy","Switzerland",
  "Germany","Saudi Arabia","Taiwan",
])

export default function TravelGlobe() {
  const globeRef  = useRef<any>(null)
  const [countries, setCountries] = useState<any[]>([])
  const [hovered,   setHovered]   = useState<any>(null)
  const [size,      setSize]      = useState(460)

  useEffect(() => {
    fetch("/countries.geojson")
      .then(r => r.json())
      .then(d => {
        // Debug: log first feature to see property names
        if (d.features?.length) console.log("GeoJSON props:", d.features[0].properties)
        setCountries(d.features || [])
      })
  }, [])

  useEffect(() => {
    if (globeRef.current && countries.length) {
      const ctrl = globeRef.current.controls()
      ctrl.autoRotate      = true
      ctrl.autoRotateSpeed = 0.5
      ctrl.enableZoom      = false
      globeRef.current.pointOfView({ lat: 20, lng: 80, altitude: 1.8 }, 0)
    }
  }, [countries])

  useEffect(() => {
    const update = () => setSize(Math.min(window.innerWidth - 48, 460))
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const isVisited = (feat: any): boolean => {
    if (!feat?.properties) return false
    const p = feat.properties
    // Try every possible ISO property name
    const iso = p.ISO_A3 || p.iso_a3 || p.ISO3 || p.iso3 || p.ADM0_A3 || p.id || ""
    // Try every possible name property
    const name = p.ADMIN || p.admin || p.NAME || p.name || p.NAME_EN || p.sovereignt || ""
    return VISITED_ISO.has(iso.toUpperCase()) || VISITED_NAMES.has(name)
  }

  const getCountryName = (feat: any): string => {
    if (!feat?.properties) return ""
    const p = feat.properties
    return p.ADMIN || p.admin || p.NAME || p.name || p.NAME_EN || p.sovereignt || "Unknown"
  }

  const getCapColor = (feat: any): string => {
    if (hovered && feat === hovered) return "#7C3AED"
    if (isVisited(feat))             return "#38BDF8"
    return "#1E3A5F"
  }

  const getSideColor = (feat: any): string => {
    if (isVisited(feat)) return "#1D6FA0"
    return "#0F2744"
  }

  return (
    <div style={{ position:"relative", width:"100%", display:"flex", flexDirection:"column", alignItems:"center" }}>
      {/* Title */}
        <div style={{ fontSize:"12px", fontWeight:700, color:"#38BDF8", letterSpacing:"1.5px", marginBottom:"8px", textAlign:"center" }}>
        COUNTRIES VISITED · 20
        </div>
      {/* Tooltip */}
      {hovered && (
        <div style={{
          position:"absolute", top:"12px", left:"50%",
          transform:"translateX(-50%)",
          background:"#1E293B", border:`1px solid ${isVisited(hovered) ? "#38BDF8" : "#334155"}`,
          borderRadius:"8px", padding:"6px 16px",
          fontSize:"13px", color:"#F1F5F9", fontWeight:600,
          zIndex:10, pointerEvents:"none", whiteSpace:"nowrap",
          boxShadow:"0 4px 16px #00000055",
        }}>
          {isVisited(hovered) ? "✅" : "🌍"} {getCountryName(hovered)}
          {isVisited(hovered) && (
            <span style={{ color:"#38BDF8", marginLeft:"8px", fontSize:"11px", fontWeight:400 }}>visited</span>
          )}
        </div>
      )}

      <Globe
        ref={globeRef}
        width={size}
        height={size}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#38BDF8"
        atmosphereAltitude={0.15}
        globeImageUrl=""
        polygonsData={countries}
        polygonCapColor={getCapColor}
        polygonSideColor={getSideColor}
        polygonStrokeColor={() => "#0F172A"}
        polygonAltitude={(feat: any) => isVisited(feat) ? 0.015 : 0.005}
        onPolygonHover={(feat: any) => setHovered(feat ?? null)}
        polygonsTransitionDuration={200}
      />

      {/* Legend */}
      <div style={{ display:"flex", gap:"16px", marginTop:"8px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"6px", fontSize:"12px", color:"#64748B" }}>
          <div style={{ width:"12px", height:"12px", borderRadius:"3px", background:"#38BDF8" }} />
          Visited (20)
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:"6px", fontSize:"12px", color:"#64748B" }}>
          <div style={{ width:"12px", height:"12px", borderRadius:"3px", background:"#1E3A5F" }} />
          Not yet
        </div>
      </div>
      <p style={{ color:"#475569", fontSize:"11px", margin:"6px 0 0", textAlign:"center" }}>
        Drag to rotate
      </p>
    </div>
  )
}
