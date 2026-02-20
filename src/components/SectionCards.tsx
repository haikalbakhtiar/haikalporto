"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    title: "Data Analytics",
    href: "/data-analytics",
    emoji: "📊",
    desc: "Full 6-step pipeline: extraction, cleaning, transformation, analysis, visualization, and structured daily/weekly/monthly reporting with real datasets and findings.",
    tags: ["SQL", "Power BI", "Tableau", "Python"],
    color: "hover:border-sky-400/50",
  },
  {
    title: "System Testing",
    href: "/system-testing",
    emoji: "🧪",
    desc: "Incident validation, UAT coordination, regression testing, defect lifecycle management, and test documentation within structured ITSM environments.",
    tags: ["UAT", "ITSM", "Defect Tracking", "Test Plans"],
    color: "hover:border-purple-400/50",
  },
  {
    title: "Service Level Management",
    href: "/service-level",
    emoji: "📋",
    desc: "End-to-end SLM: contract review, KPI definition, SLA dashboard development, validation against contractual obligations, and stakeholder reporting.",
    tags: ["SLA", "Power BI", "KPI Design", "Governance"],
    color: "hover:border-emerald-400/50",
  },
];

export default function SectionCards() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Areas of Expertise</h2>
          <div className="w-16 h-1 bg-accent rounded mb-10" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={s.href}
                className={`bg-card rounded-2xl p-6 border border-white/10 ${s.color} transition-all duration-300 flex flex-col h-full group block`}
              >
                <div className="text-4xl mb-4">{s.emoji}</div>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-accent text-sm font-mono mt-4 group-hover:translate-x-1 transition-transform">
                  View full case study --&gt;
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
