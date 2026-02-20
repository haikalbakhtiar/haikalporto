"use client"
import Link from "next/link"

const COUNTRIES = [
  "🇸🇬 Singapore","🇮🇩 Indonesia","🇹🇭 Thailand","🇻🇳 Vietnam","🇮🇳 India",
  "🇨🇳 China","🇯🇵 Japan","🇳🇿 New Zealand","🇹🇷 Turkey","🇭🇺 Hungary",
  "🇪🇸 Spain","🇦🇹 Austria","🇨🇿 Czech Republic","🇰🇿 Kazakhstan","🇰🇬 Kyrgyzstan",
  "🇮🇹 Italy","🇨🇭 Switzerland","🇩🇪 Germany","🇸🇦 Saudi Arabia","🇹🇼 Taiwan",
]

const TRIPS = [
  {
    flag: "🇮🇩", country: "Indonesia", color: "#10B981", diffColor: "#F43F5E", difficulty: "Challenging", badge: "NEW",
    title: "Indonesia Volcano Trail",
    subtitle: "Tumpak Sewu · Mount Ijen · Mount Bromo",
    duration: "5 Days / 4 Nights",
    highlights: [
      "Tumpak Sewu — hidden multi-tiered waterfall deep in East Java jungle",
      "Mount Ijen — blue fire phenomenon at 2am crater trek (one of only 2 places on Earth)",
      "Mount Bromo — sunrise at the Sea of Sand, active caldera viewpoint",
      "Bromo Tengger Semeru National Park jeep tour",
      "Local homestay in Cemoro Lawang village",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrive Malang — Tumpak Sewu", desc: "Transfer to Lumajang. Trek through jungle to reach the base of Tumpak Sewu. Overnight near Ijen." },
      { day: "Day 2", title: "Mount Ijen Blue Fire Night Trek", desc: "Midnight departure. 3km crater trek. Witness electric-blue sulphuric flames before sunrise. Return and rest." },
      { day: "Day 3", title: "Ijen Sunrise + Transfer to Bromo", desc: "Second viewpoint at Ijen sunrise then drive to Bromo area. Check in at Cemoro Lawang village." },
      { day: "Day 4", title: "Mount Bromo Sunrise Jeep Tour", desc: "4am jeep to Penanjakan viewpoint. Sunrise over the Sea of Sand. Walk to Bromo crater rim. Afternoon free." },
      { day: "Day 5", title: "Transfer + Departure", desc: "Morning transfer to Surabaya or Malang airport. End of trip." },
    ],
    tags: ["Active Volcano","Night Trek","Blue Fire","Sunrise","Waterfall","East Java"],
  },
  {
    flag: "🇯🇵", country: "Japan", color: "#F43F5E", diffColor: "#10B981", difficulty: "Easy", badge: null,
    title: "Japan Highlights",
    subtitle: "Tokyo · Kyoto · Osaka · Nara",
    duration: "10 Days / 9 Nights",
    highlights: [
      "Tokyo — Shibuya scramble, Shinjuku, Akihabara and street food trails",
      "Arashiyama bamboo grove and Fushimi Inari shrine gates at dawn",
      "Nara deer park and Todaiji Great Buddha Hall",
      "Osaka Dotonbori food trail — takoyaki, ramen, wagyu beef",
      "Day trip to Hiroshima and Miyajima Island floating torii",
    ],
    itinerary: [
      { day: "Days 1–3", title: "Tokyo", desc: "Shinjuku, Harajuku, Akihabara, teamLab Borderless digital art museum." },
      { day: "Days 4–6", title: "Kyoto", desc: "Arashiyama bamboo grove, Fushimi Inari, Gion district, Kinkakuji Golden Pavilion." },
      { day: "Day 7", title: "Nara Day Trip", desc: "Deer park, Todaiji Great Buddha Hall, Kasuga Taisha shrine." },
      { day: "Days 8–10", title: "Osaka + Hiroshima", desc: "Dotonbori food street, Hiroshima Peace Museum, Miyajima floating torii gate." },
    ],
    tags: ["Culture","Food","Temples","City","Nature","Cherry Blossom"],
  },
  {
    flag: "🇰🇿", country: "Kazakhstan & Kyrgyzstan", color: "#38BDF8", diffColor: "#F59E0B", difficulty: "Moderate", badge: "RARE",
    title: "Central Asia Explorer",
    subtitle: "Almaty · Bishkek · Issyk-Kul · Song Kol",
    duration: "12 Days / 11 Nights",
    highlights: [
      "Charyn Canyon — Kazakhstan's answer to the Grand Canyon",
      "Issyk-Kul Lake — the world's second largest alpine lake",
      "Song Kol high-altitude lake at 3,016m — overnight in yurt camp",
      "Traditional Kyrgyz eagle hunting demonstration",
      "Bishkek Soviet-era architecture and Osh Bazaar",
    ],
    itinerary: [
      { day: "Days 1–3", title: "Almaty, Kazakhstan", desc: "Charyn Canyon day trip, Green Bazaar, Medeu ice rink, Shymbulak ski resort." },
      { day: "Day 4", title: "Cross to Bishkek", desc: "Border crossing to Kyrgyzstan. City tour, Osh Bazaar, Soviet monuments and statues." },
      { day: "Days 5–7", title: "Issyk-Kul Lake", desc: "North shore drive, boat trip, Karakol town, local guesthouse stay." },
      { day: "Days 8–10", title: "Song Kol Lake", desc: "4WD up to 3,016m. Nomadic yurt camp. Horseback riding, eagle hunting demonstration." },
      { day: "Days 11–12", title: "Return to Bishkek + Depart", desc: "Final bazaar, last-minute purchases, departure transfer." },
    ],
    tags: ["Off-the-Beaten-Path","Yurt Stay","Nomadic Culture","Alpine Lakes","Canyon"],
  },
  {
    flag: "🇹🇷", country: "Turkey", color: "#7C3AED", diffColor: "#10B981", difficulty: "Easy", badge: null,
    title: "Turkey — History & Landscape",
    subtitle: "Istanbul · Cappadocia · Pamukkale · Ephesus",
    duration: "9 Days / 8 Nights",
    highlights: [
      "Hot air balloon flight at sunrise over Cappadocia fairy chimneys",
      "Hagia Sophia and Blue Mosque in a single Istanbul morning",
      "Pamukkale cotton castle thermal pools and Hierapolis ruins",
      "Ancient city of Ephesus — walking the Library of Celsus",
      "Bosphorus sunset cruise between Europe and Asia",
    ],
    itinerary: [
      { day: "Days 1–3", title: "Istanbul", desc: "Grand Bazaar, Hagia Sophia, Blue Mosque, Bosphorus cruise, Spice Bazaar." },
      { day: "Days 4–6", title: "Cappadocia", desc: "Hot air balloon, Derinkuyu underground city, Goreme Open Air Museum, sunset valley hike." },
      { day: "Day 7", title: "Pamukkale", desc: "Thermal travertine terraces, Hierapolis ancient ruins, natural cotton pools." },
      { day: "Days 8–9", title: "Ephesus + Departure", desc: "Ancient Ephesus ruins, Library of Celsus, fly home from Izmir." },
    ],
    tags: ["History","Hot Air Balloon","Thermal Pools","Ancient Ruins","Culture"],
  },
  {
    flag: "🇨🇭", country: "Europe Multi-Country", color: "#F59E0B", diffColor: "#10B981", difficulty: "Easy", badge: null,
    title: "Europe Classic",
    subtitle: "Switzerland · Austria · Hungary · Czech Republic · Germany",
    duration: "14 Days / 13 Nights",
    highlights: [
      "Jungfraujoch — Top of Europe at 3,454m by cogwheel train",
      "Vienna Schönbrunn Palace and classical concert evening",
      "Budapest ruin bars and Széchenyi thermal baths",
      "Prague old town square and Charles Bridge at dawn",
      "Neuschwanstein Castle, Bavaria — the real-life Disney castle",
    ],
    itinerary: [
      { day: "Days 1–3", title: "Switzerland", desc: "Zurich arrival, Lucerne day trip, Jungfraujoch, Interlaken free time." },
      { day: "Days 4–5", title: "Vienna, Austria", desc: "Schönbrunn Palace, Belvedere Museum, Vienna State Opera evening." },
      { day: "Days 6–7", title: "Budapest, Hungary", desc: "Ruin bars, Széchenyi thermal baths, Parliament building by night." },
      { day: "Days 8–9", title: "Prague, Czech Republic", desc: "Charles Bridge dawn walk, Old Town Square, Prague Castle." },
      { day: "Days 10–14", title: "Munich + Bavaria, Germany", desc: "Neuschwanstein Castle, Hofbräuhaus, day trip to Salzburg, departure." },
    ],
    tags: ["Alpine","Architecture","Multi-Country","City Breaks","History"],
  },
  {
    flag: "🇳🇿", country: "New Zealand", color: "#38BDF8", diffColor: "#F59E0B", difficulty: "Moderate", badge: null,
    title: "New Zealand Adventure",
    subtitle: "Auckland · Rotorua · Queenstown · Milford Sound",
    duration: "10 Days / 9 Nights",
    highlights: [
      "Milford Sound fiords cruise — the 8th wonder of the world",
      "Rotorua geothermal fields and Maori cultural hangi dinner",
      "Queenstown — bungee jumping birthplace, Remarkables, jet boating",
      "Hobbiton movie set — The Shire from Lord of the Rings",
      "Franz Josef Glacier helicopter landing",
    ],
    itinerary: [
      { day: "Days 1–2", title: "Auckland + Hobbiton", desc: "City orientation, Hobbiton movie set tour, Waitomo glowworm caves." },
      { day: "Days 3–4", title: "Rotorua", desc: "Wai-O-Tapu geothermal, Maori hangi dinner, Redwood forest walk." },
      { day: "Days 5–7", title: "Queenstown", desc: "Bungee jumping, Remarkables viewpoint, jet boating, Lake Wakatipu cruise." },
      { day: "Days 8–9", title: "Milford Sound + Franz Josef", desc: "Fiords cruise, glacier helicopter landing over Southern Alps." },
      { day: "Day 10", title: "Christchurch + Departure", desc: "Final morning, transfer to Christchurch airport, depart." },
    ],
    tags: ["Adventure","Fiords","Glacier","Lord of the Rings","Maori Culture"],
  },
]

export default function Tours() {
  return (
    <div style={{ background: "#0F172A", minHeight: "100vh" }}>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#0A0F1E,#1E1035)", padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "52px", marginBottom: "16px" }}>✈️</div>
          <h1 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, color: "#F1F5F9", marginBottom: "16px", lineHeight: 1.2 }}>
            Freelance Tour Guide &{" "}
            <span style={{ background: "linear-gradient(90deg,#F59E0B,#F43F5E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Trip Planner
            </span>
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "clamp(14px,2vw,17px)", lineHeight: 1.8, maxWidth: "620px", margin: "0 auto 32px" }}>
            Personalised itineraries built from firsthand experience across 20 countries. No generic packages — every trip is designed around you.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "36px" }}>
            {[{ v: "20", l: "Countries Visited" }, { v: "6", l: "Guided Trips" }, { v: "100%", l: "Firsthand Knowledge" }].map(s => (
              <div key={s.l} style={{ background: "#1E293B", border: "1px solid #334155", borderRadius: "12px", padding: "16px 24px", textAlign: "center" }}>
                <div style={{ fontSize: "24px", fontWeight: 800, color: "#F59E0B" }}>{s.v}</div>
                <div style={{ fontSize: "11px", color: "#64748B", marginTop: "4px" }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
            {COUNTRIES.map(c => (
              <span key={c} style={{ background: "#1E293B", border: "1px solid #334155", color: "#CBD5E1", padding: "4px 10px", borderRadius: "16px", fontSize: "12px" }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TRIPS GRID */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#F1F5F9", marginBottom: "8px" }}>Guided Trips</h2>
        <p style={{ color: "#64748B", fontSize: "15px", marginBottom: "40px" }}>All itineraries based on personal visits. Fully customisable to your group and pace.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "24px" }}>
          {TRIPS.map(t => (
            <div key={t.title} style={{ background: "#1E293B", border: "1px solid #334155", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column", borderTop: `4px solid ${t.color}` }}>

              {/* Header */}
              <div style={{ padding: "24px 24px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <span style={{ fontSize: "40px" }}>{t.flag}</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-end" }}>
                    {t.badge && (
                      <span style={{ background: t.color, color: "#0F172A", padding: "3px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: 800 }}>{t.badge}</span>
                    )}
                    <span style={{ background: "#0F172A", color: t.diffColor, padding: "3px 10px", borderRadius: "12px", fontSize: "11px", border: `1px solid ${t.diffColor}44` }}>{t.difficulty}</span>
                  </div>
                </div>
                <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 700, letterSpacing: "1px", marginBottom: "4px" }}>{t.country.toUpperCase()}</div>
                <h3 style={{ fontSize: "19px", fontWeight: 800, color: "#F1F5F9", marginBottom: "4px" }}>{t.title}</h3>
                <p style={{ color: t.color, fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>{t.subtitle}</p>
                <span style={{ fontSize: "12px", color: "#64748B" }}>🕐 {t.duration}</span>
              </div>

              {/* Highlights */}
              <div style={{ padding: "0 24px 16px" }}>
                <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 700, letterSpacing: "1px", marginBottom: "10px" }}>HIGHLIGHTS</div>
                <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                  {t.highlights.map((h, i) => (
                    <li key={i} style={{ color: "#94A3B8", fontSize: "13px", padding: "5px 0", borderBottom: "1px solid #0F172A", display: "flex", gap: "8px" }}>
                      <span style={{ color: t.color, fontWeight: 700, flexShrink: 0 }}>›</span>{h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div style={{ padding: "0 24px 16px" }}>
                <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 700, letterSpacing: "1px", marginBottom: "10px" }}>ITINERARY</div>
                {t.itinerary.map((d, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                    <div style={{ background: t.color + "22", color: t.color, borderRadius: "6px", padding: "4px 8px", fontSize: "10px", fontWeight: 700, whiteSpace: "nowrap", alignSelf: "flex-start" }}>{d.day}</div>
                    <div>
                      <div style={{ color: "#F1F5F9", fontSize: "13px", fontWeight: 600 }}>{d.title}</div>
                      <div style={{ color: "#64748B", fontSize: "12px", lineHeight: 1.6 }}>{d.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags + CTA */}
              <div style={{ padding: "16px 24px 24px", marginTop: "auto", borderTop: "1px solid #0F172A" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
                  {t.tags.map(tg => (
                    <span key={tg} style={{ background: "#0F172A", color: t.color, padding: "3px 10px", borderRadius: "12px", fontSize: "11px", border: `1px solid ${t.color}33` }}>{tg}</span>
                  ))}
                </div>
                <div style={{ background: t.color, color: "#0F172A", padding: "11px", borderRadius: "8px", textAlign: "center", fontWeight: 700, fontSize: "14px", cursor: "pointer" }}>
                  Enquire About This Trip
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* WHY BOOK WITH ME */}
      <section style={{ background: "#0A0F1E", padding: "60px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#F1F5F9", marginBottom: "8px", textAlign: "center" }}>Why Book With Me</h2>
          <p style={{ color: "#64748B", textAlign: "center", marginBottom: "36px", fontSize: "15px" }}>Not a travel agency. Just someone who has actually been there.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "16px" }}>
            {[
              { icon: "🗺️", title: "Firsthand Experience", desc: "Every destination I offer is one I have personally visited, explored, and experienced." },
              { icon: "✏️", title: "Custom Itineraries", desc: "No cookie-cutter packages. Your trip is built around your pace, budget, and interests." },
              { icon: "🧳", title: "End-to-End Planning", desc: "From flights to accommodation to daily activities — I handle all the logistics." },
              { icon: "🤝", title: "Local Connections", desc: "Trusted local guides and vetted vendors at each destination for authentic experiences." },
            ].map(i => (
              <div key={i.title} style={{ background: "#1E293B", border: "1px solid #334155", borderRadius: "12px", padding: "24px" }}>
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{i.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "15px", color: "#F1F5F9", marginBottom: "8px" }}>{i.title}</div>
                <p style={{ color: "#94A3B8", fontSize: "13px", lineHeight: 1.7 }}>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ textAlign: "center", padding: "32px 24px", borderTop: "1px solid #1E293B" }}>
        <Link href="/" style={{ color: "#64748B", fontSize: "14px" }}>← Back to Portfolio</Link>
      </div>

    </div>
  )
}
