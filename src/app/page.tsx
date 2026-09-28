"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, BadgeCheck, Headset, IndianRupee, MapPin, Phone, ShieldCheck, Sparkles, Star, ThumbsUp, Truck } from "lucide-react";
import { BUSINESS, BRANDS, IMG, PRODUCTS, TESTIMONIALS } from "@/data/site";
import { Counter, Reveal, SectionHeading, Stars } from "@/components/ui";

const WHY = [
  { icon: BadgeCheck, title: "Genuine Products", desc: "100% original with GST bill & brand warranty. No duplicate, no compromise." },
  { icon: IndianRupee, title: "Best Prices", desc: "Wholesale-style rates in retail — Mirzapur ka sabse fair price promise." },
  { icon: Award, title: "Trusted Brands", desc: "Samsung, LG, Havells, Polycab & 25+ top brands under one roof." },
  { icon: ShieldCheck, title: "Warranty Support", desc: "Claim tak hum saath — service centre coordination hum karte hain." },
  { icon: ThumbsUp, title: "Expert Guidance", desc: "Room, budget & need ke hisaab se sahi model, bina overselling." },
  { icon: Headset, title: "Fast Customer Service", desc: "Call, WhatsApp ya store visit — turant response, same-day delivery." },
];

const CATS = [
  { name: "LED & Smart TVs", img: IMG.tvWall, count: "40+ models" },
  { name: "Refrigerators", img: IMG.fridge, count: "30+ models" },
  { name: "Air Conditioners", img: IMG.acUnit, count: "25+ models" },
  { name: "Fans & Lighting", img: IMG.fanWhite, count: "200+ designs" },
  { name: "Inverters & Batteries", img: IMG.battery, count: "Full backup" },
  { name: "Wires & Switches", img: IMG.switches, count: "500+ items" },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center pt-32 pb-16">
        <div className="absolute inset-0">
          <img src={IMG.heroShowroom} alt="Luxury electronics showroom" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070f] via-[#05070f]/85 to-[#05070f]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-transparent to-[#05070f]/60" />
          <div className="absolute inset-0 hero-grid-bg opacity-70" />
          <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#2e7bff]/25 blur-[130px] animate-pulse" />
          <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-[#d4af37]/20 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-semibold tracking-widest uppercase text-[#f5c451]">
              <Sparkles className="h-3.5 w-3.5" /> Mirzapur's Premium Electronics Destination
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="font-display mt-6 text-4xl sm:text-5xl lg:text-[3.6rem] font-semibold leading-[1.08]">
              Your Trusted <span className="text-gold-gradient">Electronics</span> & <span className="text-electric-gradient">Electrical</span> Partner in Mirzapur
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-5 text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
              {BUSINESS.tagline}. LED TVs, home appliances, inverters, lighting & complete wiring — genuine brands, best prices, lifetime trust.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-8 flex flex-wrap gap-3">
              <a href={BUSINESS.phoneHref} className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f5c451] to-[#d4af37] px-7 py-3.5 font-bold text-black shadow-[0_18px_45px_-12px_rgba(212,175,55,0.8)] hover:scale-[1.03] transition">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <Link href="/products" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-bold text-white hover:border-[#d4af37]/60 hover:text-[#f5c451] transition">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-[#f5c451] text-[#f5c451]" /> 4.9 rated by 2000+ locals</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#f5c451]" /> {BUSINESS.shortAddress}</span>
            </motion.div>
          </div>

          <div className="hidden lg:grid gap-4 relative">
            <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity }} className="glass lux-card rounded-3xl p-4 flex items-center gap-4 ml-10">
              <img src={IMG.smartTv} alt="Smart TV" className="h-20 w-28 rounded-2xl object-cover" loading="lazy" />
              <div><p className="text-xs text-[#f5c451] font-bold tracking-widest uppercase">Bestseller</p><p className="font-semibold">4K Smart TVs from top brands</p></div>
            </motion.div>
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 0.6 }} className="glass lux-card rounded-3xl p-4 flex items-center gap-4 mr-10">
              <img src={IMG.battery} alt="Inverter battery" className="h-20 w-28 rounded-2xl object-cover" loading="lazy" />
              <div><p className="text-xs text-[#00d4ff] font-bold tracking-widest uppercase">Power Backup</p><p className="font-semibold">Inverter + Battery combos</p></div>
            </motion.div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, delay: 1 }} className="glass lux-card rounded-3xl p-4 flex items-center gap-4 ml-20">
              <img src={IMG.bulbs} alt="Lighting" className="h-20 w-28 rounded-2xl object-cover" loading="lazy" />
              <div><p className="text-xs text-[#f5c451] font-bold tracking-widest uppercase">Lighting</p><p className="font-semibold">Designer LEDs & décor lights</p></div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-[11px] tracking-[0.3em] uppercase">
          Scroll
          <span className="block h-10 w-px bg-gradient-to-b from-[#d4af37] to-transparent" />
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="relative border-y border-white/10 bg-[#070b18]/90 py-5 overflow-hidden">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-10 px-5">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i} className="font-display text-lg sm:text-xl font-semibold tracking-widest text-slate-400 hover:text-[#f5c451] transition whitespace-nowrap">{b.toUpperCase()} <span className="text-[#d4af37] ml-8">✦</span></span>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Curated For You" title={<>Featured <span className="text-gold-gradient">Categories</span></> as unknown as string} sub="Har ghar aur har business ke liye — handpicked premium range." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATS.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 0.08}>
                <Link href={`/products?cat=${encodeURIComponent(c.name.includes("Fans") ? "Fans" : c.name.includes("Inverters") ? "Inverters" : c.name.includes("Wires") ? "Wires & Cables" : c.name)}`} className="lux-card group relative overflow-hidden rounded-3xl border border-white/10 block">
                  <img src={c.img} alt={c.name} className="h-64 w-full object-cover group-hover:scale-110 transition duration-[1.2s]" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-0 p-6 flex items-end justify-between w-full">
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#f5c451]">{c.count}</p>
                      <h3 className="font-display text-2xl font-semibold mt-1">{c.name}</h3>
                    </div>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f5c451] text-black group-hover:rotate-45 transition duration-500"><ArrowRight className="h-5 w-5 -rotate-45 group-hover:rotate-0 transition duration-500" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative py-20 bg-[#070b18] border-y border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/3 h-72 w-72 rounded-full bg-[#2e7bff]/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Why Mahadev" title={<>Why Mirzapur <span className="text-gold-gradient">Trusts Us</span></> as unknown as string} sub="Sasta bhi, genuine bhi, service ke saath — yahi hai Mahadev promise." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.08}>
                <div className="lux-card glass rounded-3xl p-7 h-full">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br from-[#2e7bff]/30 to-[#d4af37]/20 gold-border p-3.5"><w.icon className="h-6 w-6 text-[#f5c451]" /></span>
                  <h3 className="mt-5 font-display text-xl font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[{ v: 5000, l: "Happy Customers" }, { v: 1500, l: "Products In Store" }, { v: 25, l: "Premium Brands" }, { v: 10, l: "Years of Trust" }].map((s) => (
            <Reveal key={s.l}>
              <div className="text-center glass rounded-3xl py-8 px-4 lux-card">
                <p className="font-display text-4xl sm:text-5xl font-bold text-gold-gradient"><Counter to={s.v} /></p>
                <p className="mt-2 text-xs sm:text-sm tracking-[0.2em] uppercase text-slate-400">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading center={false} eyebrow="Customer Favourites" title={<>Best Selling <span className="text-gold-gradient">Products</span></> as unknown as string} />
            <Reveal><Link href="/products" className="inline-flex items-center gap-2 text-sm font-bold text-[#f5c451] hover:gap-3 transition-all">View All Products <ArrowRight className="h-4 w-4" /></Link></Reveal>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.slice(0, 8).map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 0.07}>
                <Link href={`/products?search=${encodeURIComponent(p.name)}`} className="lux-card glass rounded-3xl overflow-hidden block group">
                  <div className="relative h-52 overflow-hidden">
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-110 transition duration-700" loading="lazy" />
                    {p.badge && <span className="absolute top-3 left-3 rounded-full bg-[#d4af37] px-3 py-1 text-[11px] font-bold text-black">{p.badge}</span>}
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00d4ff]">{p.category}</p>
                    <h3 className="mt-1.5 font-semibold leading-snug group-hover:text-[#f5c451] transition">{p.name}</h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#f5c451]">View Details <ArrowRight className="h-3.5 w-3.5" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-[#070b18] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Beyond Sales" title={<>Services With <span className="text-gold-gradient">White-Glove Care</span></> as unknown as string} />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[{ icon: Truck, t: "Same-Day Delivery", d: "Mirzapur city me turant delivery." }, { icon: ShieldCheck, t: "Installation Support", d: "AC, TV, inverter expert fitting." }, { icon: Headset, t: "Consultation", d: "Sahi model, sahi budget me." }, { icon: BadgeCheck, t: "Warranty Help", d: "Claim tak poora support." }].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.07}>
                <div className="glass rounded-3xl p-6 lux-card text-center">
                  <s.icon className="mx-auto h-8 w-8 text-[#f5c451]" />
                  <h3 className="mt-3 font-semibold">{s.t}</h3>
                  <p className="mt-1 text-sm text-slate-400">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-8"><Link href="/services" className="btn-shine inline-flex rounded-full bg-white/10 border border-white/15 px-7 py-3 text-sm font-bold hover:border-[#d4af37]/60 hover:text-[#f5c451] transition">Explore All Services</Link></Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Love From Mirzapur" title={<>Customer <span className="text-gold-gradient">Reviews</span></> as unknown as string} />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="glass lux-card rounded-3xl p-7 h-full flex flex-col">
                  <Stars n={t.rating} />
                  <blockquote className="mt-4 text-[15px] text-slate-200 leading-relaxed flex-1">“{t.text}”</blockquote>
                  <figcaption className="mt-5 border-t border-white/10 pt-4"><p className="font-semibold">{t.name}</p><p className="text-xs text-slate-400">{t.area} • {t.product}</p></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-8"><Link href="/testimonials" className="text-sm font-bold text-[#f5c451] inline-flex items-center gap-2 hover:gap-3 transition-all">Read All Reviews <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="lux-card relative overflow-hidden rounded-[2rem] border border-[#d4af37]/25">
            <img src={IMG.showroom2} alt="Showroom" className="h-[320px] sm:h-[380px] w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent flex items-center">
              <div className="p-8 sm:p-12 max-w-xl">
                <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#f5c451]">Visit Our Store</p>
                <h3 className="font-display text-3xl sm:text-4xl font-semibold mt-3">Experience Luxury, In Person on Tahsil Road</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/gallery" className="rounded-full bg-white text-black px-6 py-3 text-sm font-bold hover:bg-[#f5c451] transition">View Gallery</Link>
                  <a href={BUSINESS.mapDirections} target="_blank" rel="noreferrer" className="rounded-full glass px-6 py-3 text-sm font-bold hover:border-[#d4af37]/60 hover:text-[#f5c451] transition">Get Directions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1e4d] via-[#0b1020] to-[#3a2a05]" />
        <div className="absolute inset-0 hero-grid-bg" />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight">Looking for the Best <span className="text-gold-gradient">Electronics Store</span> in Mirzapur?</h2>
            <p className="mt-4 text-slate-300">Ek call par best price, genuine product aur turant delivery. Aaj hi visit karein ya call karein.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={BUSINESS.phoneHref} className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f5c451] to-[#d4af37] px-8 py-4 font-bold text-black"><Phone className="h-4 w-4" /> Call Now — {BUSINESS.phone}</a>
              <a href={BUSINESS.mapDirections} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 font-bold hover:text-[#f5c451] transition"><MapPin className="h-4 w-4" /> Get Directions</a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
