"use client";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">Reach Out</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Let&apos;s Connect</h2>
          <div className="w-16 h-1 bg-accent rounded mb-8 mx-auto" />
          <p className="text-white/60 mb-10">Whether you need a data analyst, ITSM support, system testing expertise or a travel planner — I&apos;d love to hear from you.</p>
        </motion.div>
        <motion.div className="bg-card rounded-2xl p-6 border border-white/10 space-y-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <input type="text" placeholder="Your Name" className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent transition-colors" />
          <input type="email" placeholder="Your Email" className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent transition-colors" />
          <select className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-white/60 focus:outline-none focus:border-accent transition-colors">
            <option value="">I need help with...</option>
            <option>Data Analytics &amp; Reporting</option>
            <option>System Testing</option>
            <option>Service Level Management</option>
            <option>Travel Planning</option>
            <option>Other</option>
          </select>
          <textarea rows={4} placeholder="Your message..." className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent transition-colors resize-none" />
          <button className="w-full py-4 rounded-xl bg-accent text-primary font-semibold hover:bg-accent/80 transition-all text-base">Send Message</button>
          <div className="flex justify-center gap-6 pt-2 text-white/40 text-sm">
            <span>&#128205; Petaling Jaya, Malaysia</span>
            <span>&#128231; your@email.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
