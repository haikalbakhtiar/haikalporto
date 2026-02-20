"use client"
import React from "react"

export default function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <div style={{ background: "#1E293B", border: "1px solid #334155", borderRadius: "12px", padding: "24px" }}>
      <div style={{ fontWeight: 700, fontSize: "14px", color: "#F1F5F9", marginBottom: "4px" }}>{title}</div>
      {subtitle && <div style={{ fontSize: "12px", color: "#64748B", marginBottom: "16px" }}>{subtitle}</div>}
      <div style={{ marginTop: subtitle ? "0" : "12px" }}>{children}</div>
    </div>
  )
}
