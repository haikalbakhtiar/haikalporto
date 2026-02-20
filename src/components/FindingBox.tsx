import React from "react"

export default function FindingBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#1E293B",
        borderLeft: "4px solid #F43F5E",
        borderRadius: "0 8px 8px 0",
        padding: "20px 24px",
        margin: "20px 0",
      }}
    >
      <div
        style={{
          color: "#F43F5E",
          fontWeight: 700,
          fontSize: "11px",
          letterSpacing: "1.5px",
          marginBottom: "8px",
        }}
      >
        🔍 KEY FINDING
      </div>
      <div style={{ color: "#CBD5E1", fontSize: "14px", lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  )
}
