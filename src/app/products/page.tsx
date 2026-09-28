"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Phone, Search, X } from "lucide-react";
import { BUSINESS, CATEGORIES, IMG, PRODUCTS, type Product } from "@/data/site";
import { PageHero, Reveal } from "@/components/ui";

function Catalog() {
  const params = useSearchParams();
  const initialCat = params.get("cat") ?? "All";
  const initialSearch = params.get("search") ?? "";
  const [cat, setCat] = useState(initialCat);
  const [q, setQ] = useState(initialSearch);
  const [active, setActive] = useState<Product | null>(null);

  const list = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const okCat = cat === "All" || p.category === cat;
      const needle = q.trim().toLowerCase();
      const okQ = !needle || (p.name + " " + p.category + " " + p.description).toLowerCase().includes(needle);
      return okCat && okQ;
    });
  }, [cat, q]);

  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="glass rounded-3xl p-4 sm:p-5 flex flex-col lg:flex-row gap-3 lg:items-center">
          <label className="flex items-center gap-2 flex-1 rounded-2xl bg-black/40 border border-white/10 px-4 py-3">
            <Search className="h-4 w-4 text-slate-400 shrink-0" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search — TV, fridge, inverter, wire…" className="w-full bg-transparent outline-none text-sm placeholder:text-slate-500" />
            {q && <button onClick={() => setQ("")} aria-label="Clear"><X className="h-4 w-4 text-slate-400" /></button>}
          </label>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {["All", ...CATEGORIES].map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold tracking-wide transition ${cat === c ? "bg-gradient-to-r from-[#f5c451] to-[#d4af37] text-black" : "glass text-slate-300 hover:text-[#f5c451]"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-400">{list.length} products {cat !== "All" ? `in ${cat}` : "across all categories"}{q ? ` matching “${q}”` : ""}</p>

        {list.length === 0 ? (
          <div className="mt-8 glass rounded-3xl p-12 text-center">
            <p className="font-display text-2xl">Kuch nahi mila — lekin tension mat lijiye!</p>
            <p className="mt-2 text-slate-400 text-sm">Call kariye, hum 25+ brands se arrange kar denge.</p>
            <a href={BUSINESS.phoneHref} className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f5c451] to-[#d4af37] px-6 py-3 font-bold text-black"><Phone className="h-4 w-4" /> {BUSINESS.phone}</a>
          </div>
        ) : (
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {list.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 0.05}>
                <button onClick={() => setActive(p)} className="lux-card glass rounded-3xl overflow-hidden block group text-left w-full">
                  <div className="relative h-52 overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                    {p.badge && <span className="absolute top-3 left-3 rounded-full bg-[#d4af37] px-3 py-1 text-[11px] font-bold text-black">{p.badge}</span>}
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00d4ff]">{p.category}</p>
                    <h3 className="mt-1.5 font-semibold leading-snug group-hover:text-[#f5c451] transition">{p.name}</h3>
                    <p className="mt-2 text-[13px] text-slate-400 line-clamp-2">{p.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#f5c451]">View Details <ArrowRight className="h-3.5 w-3.5" /></span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        )}

        <AnimatePresence>
          {active && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[95] grid place-items-center p-4 bg-black/75 backdrop-blur-sm" onClick={() => setActive(null)}>
              <motion.div initial={{ scale: 0.92, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 16 }} onClick={(e) => e.stopPropagation()} className="glass-strong rounded-[1.8rem] overflow-hidden max-w-2xl w-full gold-border">
                <div className="relative h-64 sm:h-80">
                  <img src={active.image} alt={active.name} className="h-full w-full object-cover" />
                  <button onClick={() => setActive(null)} className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-[#d4af37] hover:text-black transition" aria-label="Close"><X className="h-5 w-5" /></button>
                  {active.badge && <span className="absolute bottom-4 left-4 rounded-full bg-[#d4af37] px-4 py-1.5 text-xs font-bold text-black">{active.badge}</span>}
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#00d4ff]">{active.category}</p>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold mt-2">{active.name}</h3>
                  <p className="mt-3 text-slate-300">{active.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={BUSINESS.phoneHref} className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f5c451] to-[#d4af37] px-6 py-3 font-bold text-black text-sm"><Phone className="h-4 w-4" /> Enquire: {BUSINESS.phone}</a>
                    <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-bold text-sm hover:text-[#f5c451] transition">WhatsApp Price</a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <div>
      <PageHero eyebrow="Premium Catalog" title={<>Products Crafted For <span className="text-gold-gradient">Every Home</span></>} sub="Search, filter aur explore karein — 1500+ products, 25+ brands, sab genuine billing ke saath." image={IMG.tvWall} />
      <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading catalog…</div>}>
        <Catalog />
      </Suspense>
    </div>
  );
}
