"use client";
import { motion } from "framer-motion";
const skillGroups = [
  { category: "Data & Analytics", skills: ["Excel / Power Query","Power BI","Tableau","SQL","Python (Pandas)","Data Reporting"] },
  { category: "IT & Systems", skills: ["ITSM","Incident Validation","SLA Compliance","System Testing","UAT","ServiceNow"] },
  { category: "Business & Ops", skills: ["Revenue Tracking","Booking Management","Pricing Strategy","Process Documentation","Guesthouse Ops"] },
  { category: "Travel & Planning", skills: ["Itinerary Design","Multi-country Logistics","Budget Planning","Booking Platforms","Tour Guiding"] },
];
export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">What I Know</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills &amp; Expertise</h2>
          <div className="w-16 h-1 bg-accent rounded mb-8" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div key={group.category} className="bg-card rounded-2xl p-6 border border-white/10 hover:border-accent/40 transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <h3 className="text-accent font-semibold mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (<span key={s} className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">{s}</span>))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
