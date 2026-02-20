interface StatItem {
  label: string
  value: string
}

interface PageHeroProps {
  icon: string
  title: string
  hook: string
  tags: string[]
  stats: StatItem[]
}

export default function PageHero({ icon, title, hook, tags, stats }: PageHeroProps) {
  return (
    <section
      style={{
        background: "#0A0F1E",
        borderBottom: "1px solid #1E293B",
        padding: "56px 24px 44px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ fontSize: "44px", marginBottom: "14px" }}>{icon}</div>
        <h1
          style={{
            fontSize: "clamp(24px, 4vw, 46px)",
            fontWeight: 800,
            color: "#F1F5F9",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "clamp(15px, 2vw, 19px)",
            color: "#38BDF8",
            fontStyle: "italic",
            marginBottom: "24px",
            maxWidth: "800px",
            lineHeight: 1.65,
            fontWeight: 600,
          }}
        >
          &ldquo;{hook}&rdquo;
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "28px",
          }}
        >
          {tags.map((t) => (
            <span
              key={t}
              style={{
                background: "#1E293B",
                color: "#94A3B8",
                padding: "5px 12px",
                borderRadius: "20px",
                fontSize: "12px",
                border: "1px solid #334155",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "12px",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                background: "#1E293B",
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid #334155",
              }}
            >
              <div style={{ fontSize: "20px", fontWeight: 800, color: "#38BDF8" }}>
                {s.value}
              </div>
              <div style={{ fontSize: "11px", color: "#64748B", marginTop: "3px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
