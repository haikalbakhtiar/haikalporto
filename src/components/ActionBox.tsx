import React from "react"

export default function ActionBox({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <div
      style={{
        background: "#1E293B",
        borderLeft: "4px solid #10B981",
        borderRadius: "0 8px 8px 0",
        padding: "20px 24px",
        margin: "20px 0",
      }}
    >
      <div
        style={{
          color: "#10B981",
          fontWeight: 700,
          fontSize: "11px",
          letterSpacing: "1.5px",
          marginBottom: "8px",
        }}
      >
        ✅ {title || "WHY MANAGEMENT MUST ACT"}
      </div>
      <div style={{ color: "#CBD5E1", fontSize: "14px", lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  )
}
