import type { Metadata } from "next"
import "./globals.css"
import Navbar from "../components/Navbar"
export const metadata: Metadata = { title: "Haikal Bakhtiar | Portfolio", description: "Data Analyst | System Tester | Tour Guide" }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body>
      <Navbar />
      <main>{children}</main>
      <footer style={{ background:"#0A0F1E", borderTop:"1px solid #1E293B", padding:"28px", textAlign:"center", color:"#475569", fontSize:"13px" }}>
        © 2026 Haikal Bakhtiar
      </footer>
    </body></html>
  )
}
