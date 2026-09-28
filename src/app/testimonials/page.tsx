"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { BUSINESS, IMG, TESTIMONIALS } from "@/data/site";
import { Counter, PageHero, Reveal, SectionHeading, Stars } from "@/components/ui";

export default function TestimonialsPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);
  const cur = TESTIMONIALS[idx];

  return (
    <div>
      <PageHero eyebrow="Real Reviews" title={<>Customers <span className="text-gold-gradient">Love Us</span></>} sub="Google-style genuine reviews — Mirzapur ke parivaaron aur vyapariyon ki zubaani." image={IMG.shopping} />

      <section className="py-14">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="glass-strong rounded-[2rem] p-8 sm:p-12 gold-border relative overflow-hidden text-center min-h-[340px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={idx} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.45 }}>
                <div className="flex justify-center"><Stars n={cur.rating} /></div>
                <blockquote className="font-display mt-5 text-xl sm:text-2xl leading-relaxed">“{cur.text}”</blockquote>
                <p className="mt-5 font-bold">{cur.name} <span className="font-normal text-slate-400">• {cur.area}</span></p>
                <p className="text-xs tracking-[0.25em] uppercase text-[#f5c451] mt-1">{cur.product}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-7 flex items-center justify-center gap-3">
              <button onClick={() => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="grid h-11 w-11 place-items-center rounded-full glass hover:text-[#f5c451] transition" aria-label="Previous"><ChevronLeft className="h-5 w-5" /></button>
              <div className="flex gap-1.5">{TESTIMONIALS.map((_, i) => (<span key={i} className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-[#f5c451]" : "w-2 bg-white/20"}`} />))}</div>
              <button onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)} className="grid h-11 w-11 place-items-center rounded-full glass hover:text-[#f5c451] transition" aria-label="Next"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[{ v: 5000, s: "+", l: "Happy Customers" }, { v: 49, s: "/5", l: "Average Rating" }, { v: 98, s: "%", l: "Would Recommend" }].map((s) => (
              <div key={s.l} className="glass rounded-3xl py-6"><p className="font-display text-3xl sm:text-4xl font-bold text-gold-gradient"><Counter to={s.v} suffix={s.s} /></p><p className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-slate-400 mt-1">{s.l}</p></div>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.06}>
                <figure className="glass lux-card rounded-3xl p-7 h-full flex flex-col">
                  <Stars n={t.rating} />
                  <blockquote className="mt-4 text-[15px] text-slate-200 leading-relaxed flex-1">“{t.text}”</blockquote>
                  <figcaption className="mt-5 border-t border-white/10 pt-4"><p className="font-semibold">{t.name}</p><p className="text-xs text-slate-400">{t.area} • {t.product}</p></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-10">
            <a href={BUSINESS.phoneHref} className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f5c451] to-[#d4af37] px-8 py-4 font-bold text-black"><Phone className="h-4 w-4" /> Become Our Next Happy Customer</a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
