interface DataTableProps {
  headers: string[]
  rows: (string | number)[][]
  caption?: string
}

export default function DataTable({ headers, rows, caption }: DataTableProps) {
  return (
    <div style={{ overflowX: "auto", margin: "16px 0" }}>
      {caption && (
        <p
          style={{
            color: "#64748B",
            fontSize: "12px",
            marginBottom: "6px",
            fontStyle: "italic",
          }}
        >
          {caption}
        </p>
      )}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "13px",
          minWidth: "480px",
        }}
      >
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                style={{
                  background: "#1E293B",
                  color: "#38BDF8",
                  padding: "10px 14px",
                  textAlign: "left",
                  fontWeight: 600,
                  borderBottom: "2px solid #334155",
                  whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#0F172A" : "#111827" }}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    padding: "9px 14px",
                    color: "#CBD5E1",
                    borderBottom: "1px solid #1E293B",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
