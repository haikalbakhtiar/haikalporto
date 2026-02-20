"use client";
import { motion } from "framer-motion";
const guidedTrips = [
  { id: 1, destination: "New Zealand", emoji: "🇳🇿", type: "Group Tour Guided", highlights: ["Auckland city orientation and harbour","Rotorua geothermal and Maori cultural experience","Queenstown adventure activities coordination","Milford Sound scenic cruise logistics","Full end-to-end itinerary and booking management"], tags: ["Nature","Adventure","Cultural","Tour Guide"] },
  { id: 2, destination: "Japan", emoji: "🇯🇵", type: "Group Tour Guided", highlights: ["Tokyo city walking routes and transport navigation","Kyoto temple circuit planning and timing","Osaka food trail and street market guide","Hiroshima day trip logistics","JR Pass management and group coordination"], tags: ["Culture","Food","History","Tour Guide"] },
  { id: 3, destination: "Europe — Switzerland, Germany, Italy", emoji: "🇪🇺", type: "Group Tour Guided", highlights: ["Swiss Alps train routes (Glacier Express routing)","Zurich and Lucerne city day plans","Munich and Bavaria day trip coordination","Rome, Florence and Venice multi-city planning","Cross-border transport and accommodation logistics"], tags: ["Architecture","History","Mountains","Multi-country"] },
];
const soloTrips = [
  { country: "Hungary", emoji: "🇭🇺", note: "Budapest thermal baths, ruin bars, Danube river" },
  { country: "Austria", emoji: "🇦🇹", note: "Vienna imperial palaces, classical music scene" },
  { country: "Czech Republic", emoji: "🇨🇿", note: "Prague Old Town, castle district and culture" },
  { country: "Spain", emoji: "🇪🇸", note: "Barcelona architecture, Madrid city life" },
  { country: "Turkey", emoji: "🇹🇷", note: "Istanbul Bosphorus, Grand Bazaar, mosques" },
];
export default function Travel() {
  return (
    <section id="travel" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">Freelance Tour Guide &amp; Planner</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Travel Planning</h2>
          <div className="w-16 h-1 bg-accent rounded mb-8" />
        </motion.div>
        <h3 className="text-xl font-bold mb-6 text-white/80">Guided Group Trips</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {guidedTrips.map((trip, i) => (
            <motion.div key={trip.id} className="bg-card rounded-2xl p-6 border border-white/10 hover:border-accent/40 transition-all flex flex-col" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-5xl mb-3">{trip.emoji}</div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mb-3">{trip.type}</span>
                <h3 className="text-white font-bold text-xl mb-4">{trip.destination}</h3>
                <ul className="space-y-2 mb-4">{trip.highlights.map((h) => (<li key={h} className="flex items-start gap-2 text-white/50 text-sm"><span className="text-accent mt-0.5">&#8594;</span>{h}</li>))}</ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">{trip.tags.map((t) => (<span key={t} className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">{t}</span>))}</div>
            </motion.div>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-6 text-white/80">Solo Exploration — 5 Countries, 1 Trip</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {soloTrips.map((t, i) => (
            <motion.div key={t.country} className="bg-card rounded-2xl p-6 border border-white/10 text-center" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="text-4xl mb-2">{t.emoji}</div>
              <h4 className="text-white font-semibold text-sm mb-1">{t.country}</h4>
              <p className="text-white/40 text-xs leading-relaxed">{t.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
