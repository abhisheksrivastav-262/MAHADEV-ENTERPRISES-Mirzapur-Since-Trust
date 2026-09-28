"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X } from "lucide-react";
import { GALLERY, IMG } from "@/data/site";
import { PageHero, Reveal, SectionHeading } from "@/components/ui";

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div>
      <PageHero eyebrow="Inside Our World" title={<>Luxury <span className="text-gold-gradient">Gallery</span></>} sub="Showroom, displays aur happy customers — ek jhalak Mahadev experience ki." image={IMG.showroom2} />
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Masonry Collection" title={<>Store Ki <span className="text-gold-gradient">Jhalak</span></>} sub="Kisi bhi photo par click karke full view dekhein." />
          <div className="mt-10 columns-2 md:columns-3 gap-4 [column-fill:_balance]">
            {GALLERY.map((g, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <button onClick={() => setActive(i)} className={`group relative mb-4 block w-full overflow-hidden rounded-3xl border border-white/10 lux-card ${g.span === "tall" ? "aspect-[3/4]" : g.span === "wide" ? "aspect-[16/10]" : "aspect-square"}`}>
                  <img src={g.src} alt={g.label} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition duration-[1.1s]" />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-0 inset-x-0 p-5 flex items-center justify-between">
                    <span className="text-left font-semibold text-sm sm:text-base">{g.label}</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full glass text-[#f5c451] opacity-0 group-hover:opacity-100 transition"><Expand className="h-4 w-4" /></span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <AnimatePresence>
        {active !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[95] bg-black/90 backdrop-blur grid place-items-center p-4" onClick={() => setActive(null)}>
            <motion.figure initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.94 }} onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
              <div className="relative rounded-3xl overflow-hidden gold-border">
                <img src={GALLERY[active].src} alt={GALLERY[active].label} className="max-h-[75vh] w-full object-contain bg-black" />
                <button onClick={() => setActive(null)} className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-black/60 hover:bg-[#d4af37] hover:text-black transition" aria-label="Close"><X className="h-5 w-5" /></button>
              </div>
              <figcaption className="mt-3 flex items-center justify-between text-sm">
                <span className="font-semibold">{GALLERY[active].label}</span>
                <span className="text-slate-400">{active + 1} / {GALLERY.length}</span>
              </figcaption>
              <div className="mt-3 flex justify-between">
                <button onClick={() => setActive((active - 1 + GALLERY.length) % GALLERY.length)} className="glass rounded-full px-5 py-2.5 text-sm font-bold hover:text-[#f5c451]">← Prev</button>
                <button onClick={() => setActive((active + 1) % GALLERY.length)} className="glass rounded-full px-5 py-2.5 text-sm font-bold hover:text-[#f5c451]">Next →</button>
              </div>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
