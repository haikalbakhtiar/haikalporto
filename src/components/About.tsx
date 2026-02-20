"use client";
import { motion } from "framer-motion";
const highlights = [
  { label: "Degree", value: "Computer Science" },
  { label: "Focus", value: "ITSM & Data Analytics" },
  { label: "Experience", value: "3+ Years Ops & Analytics" },
  { label: "Location", value: "Petaling Jaya, MY" },
];
export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">Who I Am</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-accent rounded mb-8" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div className="text-white/70 leading-relaxed space-y-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p>I&apos;m a <span className="text-white font-medium">Computer Science graduate</span> with hands-on experience in IT Service Management (ITSM), operational reporting, and process support within structured, fast-paced environments.</p>
            <p>Experienced in validating incidents, service requests, and SLA compliance, producing accurate reports and dashboards, and supporting operational decision-making across daily, weekly, and monthly cycles.</p>
            <p>I also manage <span className="text-white font-medium">guesthouse operations</span> — revenue tracking, booking data, pricing strategies and weekly payment follow-ups — and work as a <span className="text-white font-medium">freelance travel planner</span> for group trips across New Zealand, Japan, and Europe.</p>
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-4" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {highlights.map((h) => (
              <div key={h.label} className="bg-card rounded-2xl p-6 border border-white/10 text-center">
                <p className="text-accent text-sm font-mono mb-1">{h.label}</p>
                <p className="text-white font-semibold">{h.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
