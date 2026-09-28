import { Award, Eye, HeartHandshake, Target } from "lucide-react";
import { BUSINESS, IMG } from "@/data/site";
import { PageHero, Reveal, SectionHeading, Counter } from "@/components/ui";

const TIMELINE = [
  { year: "2015", title: "The Beginning", desc: "Tahsil Road par ek chhoti electrical shop se shuruaat — sirf wires, switches aur bharosa." },
  { year: "2018", title: "Electronics Expansion", desc: "LED TVs, fridge, washing machine range launch — Mirzapur ka family store banna shuru." },
  { year: "2021", title: "Premium Showroom", desc: "Luxury display, branded zones aur lighting studio — shopping experience poori tarah upgrade." },
  { year: "2024", title: "Commercial Leadership", desc: "Bulk & builder supply, 25+ brands, 5000+ happy customers — Mirzapur ka trusted naam." },
  { year: "2026", title: "Digital Premium Era", desc: "Ye luxury website, WhatsApp ordering aur same-day service — trust ab online bhi." },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero eyebrow="About Mahadev Enterprises" title={<>Trust, Quality Aur <span className="text-gold-gradient">Mirzapur Ka Bharosa</span></>} sub="Ek chhoti dukaan se Mirzapur ke sabse premium electronics & electrical destination tak — hamari kahani." image={IMG.showroom2} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative">
              <img src={IMG.electrician} alt="Our team at work" className="rounded-[2rem] border border-white/10 h-[420px] w-full object-cover" loading="lazy" />
              <div className="absolute -bottom-6 -right-2 sm:right-6 glass-strong rounded-3xl px-6 py-5 gold-border shadow-2xl">
                <p className="font-display text-4xl font-bold text-gold-gradient"><Counter to={10} /></p>
                <p className="text-xs tracking-[0.2em] uppercase text-slate-300">Years of Trust</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading center={false} eyebrow="Our Story" title={<>Powering Homes, <span className="text-gold-gradient">Lighting Businesses</span></>} />
            <Reveal delay={0.1}>
              <p className="mt-5 text-slate-300 leading-relaxed">MAHADEV ENTERPRISES Tahsil Road, Mirzapur par sthit ek premium electronics & electrical store hai. Hum LED TVs, refrigerators, washing machines, ACs, fans, geysers, inverters, batteries, LED lighting, wires, switches aur complete home appliances me deal karte hain.</p>
              <p className="mt-4 text-slate-300 leading-relaxed">Hamara simple funda hai — <strong className="text-white">genuine product, sahi daam, aur bikne ke baad bhi saath.</strong> Isi wajah se hazaaron parivaar aur vyapari hum par bharosa karte hain.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="glass rounded-2xl p-5"><Target className="h-6 w-6 text-[#f5c451]" /><h3 className="mt-2 font-semibold">Mission</h3><p className="text-sm text-slate-400 mt-1">Har ghar tak genuine technology — sahi guidance ke saath.</p></div>
                <div className="glass rounded-2xl p-5"><Eye className="h-6 w-6 text-[#00d4ff]" /><h3 className="mt-2 font-semibold">Vision</h3><p className="text-sm text-slate-400 mt-1">Purvanchal ka sabse trusted electronics brand banna.</p></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#070b18] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Why Customers Trust Us" title={<>Bharose Ki <span className="text-gold-gradient">4 Wajah</span></>} />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Award, t: "Genuine Billing", d: "Har product GST bill + brand warranty card ke saath." },
              { icon: HeartHandshake, t: "After-Sales Saath", d: "Installation se warranty claim tak support." },
              { icon: Target, t: "Honest Advice", d: "Zaroorat ke hisaab se model — overselling nahi." },
              { icon: Eye, t: "Transparent Pricing", d: "MRP par best discount, hidden charges zero." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.07}>
                <div className="glass lux-card rounded-3xl p-6 text-center h-full"><c.icon className="mx-auto h-7 w-7 text-[#f5c451]" /><h3 className="mt-3 font-semibold">{c.t}</h3><p className="text-sm text-slate-400 mt-1">{c.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading eyebrow="Our Journey" title={<>Ek Safar, <span className="text-gold-gradient">Bharose Ka</span></>} />
          <div className="mt-12 relative pl-8 border-l border-[#d4af37]/30 space-y-8">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#f5c451] to-[#b8860b] shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
                  <p className="text-xs font-bold tracking-[0.3em] text-[#f5c451]">{t.year}</p>
                  <h3 className="font-display text-2xl font-semibold mt-1">{t.title}</h3>
                  <p className="text-slate-400 mt-1">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="glass-strong rounded-[2rem] p-8 sm:p-12 gold-border relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#d4af37]/15 blur-[100px]" />
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#f5c451]">Owner's Message</p>
              <blockquote className="font-display mt-4 text-xl sm:text-2xl leading-relaxed text-white">“Hamare liye har grahak parivaar hai. Aap paise se TV-fridge nahi, bharosa kharidte hain — aur us bharose ko nibhana hi Mahadev Enterprises ki asli kamai hai.”</blockquote>
              <p className="mt-6 text-sm text-slate-300">— Team Mahadev Enterprises, {BUSINESS.shortAddress} • <a className="text-[#f5c451] font-semibold" href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
