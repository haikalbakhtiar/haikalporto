interface KPICardProps {
  value: string
  label: string
  color?: string
  sub?: string
}

export default function KPICard({ value, label, color = "#38BDF8", sub }: KPICardProps) {
  return (
    <div
      style={{
        background: "#1E293B",
        border: `2px solid ${color}`,
        borderRadius: "12px",
        padding: "22px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "32px", fontWeight: 800, color, lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ fontSize: "13px", color: "#94A3B8", marginTop: "8px" }}>
        {label}
      </div>
      {sub && (
        <div style={{ fontSize: "12px", color, marginTop: "5px", fontWeight: 600 }}>
          {sub}
        </div>
      )}
    </div>
  )
}
