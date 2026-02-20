"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-highlight/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <motion.p className="text-accent font-mono text-sm tracking-widest uppercase mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Hello, I&apos;m</motion.p>
        <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Haikal</motion.h1>
        <motion.p className="text-xl md:text-2xl text-white/60 font-light mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>Data Analyst &middot; System Tester &middot; SLM Specialist &middot; Travel Planner</motion.p>
        <motion.p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Computer Science graduate with hands-on experience in IT Service Management, operational reporting, data analytics, and multi-country travel planning.</motion.p>
        <motion.div className="flex gap-4 justify-center flex-wrap" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <a href="/#work" className="px-6 py-3 rounded-xl bg-accent text-primary font-semibold hover:bg-accent/80 transition-all">View My Work</a>
          <a href="/#contact" className="px-6 py-3 rounded-xl border border-accent text-accent font-semibold hover:bg-accent/10 transition-all">Get In Touch</a>
        </motion.div>
      </div>
    </section>
  );
}
