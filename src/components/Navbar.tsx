"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { BUSINESS, CATEGORIES, NAV_LINKS } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-[80] bg-gradient-to-r from-[#0b1020] via-[#111832] to-[#0b1020] border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-9 text-[11px] sm:text-xs text-slate-300">
          <p className="truncate tracking-wide">{BUSINESS.tagline}</p>
          <div className="hidden sm:flex items-center gap-4">
            <span>{BUSINESS.hours}</span>
            <a href={BUSINESS.phoneHref} className="flex items-center gap-1 font-semibold text-[#f5c451] hover:text-white transition">
              <Phone className="h-3 w-3" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      <nav className={`fixed top-9 inset-x-0 z-[80] transition-all duration-500 ${scrolled ? "glass-strong shadow-[0_18px_50px_-20px_rgba(0,0,0,0.9)]" : "bg-transparent"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-[72px] flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="relative h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-2xl gold-border shadow-lg group-hover:rotate-6 transition-transform duration-500 shrink-0">
              <Image src="/logo.jpeg" alt="Mahadev Enterprises logo" fill sizes="48px" className="object-cover" priority />
              <span className="absolute -inset-1 rounded-2xl bg-[#d4af37]/25 blur-lg -z-10" />
            </span>
            <span className="leading-tight">
              <span className="font-display block text-base sm:text-lg font-bold tracking-wide text-white">MAHADEV <span className="text-gold-gradient">ENTERPRISES</span></span>
              <span className="block text-[10px] tracking-[0.32em] uppercase text-slate-400">Mirzapur • Since Trust</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {NAV_LINKS.slice(0, 4).map((l) => (
              l.label === "Products" ? (
                <div key={l.href} className="relative" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
                  <Link href="/products" className={`flex items-center gap-1 px-4 py-2.5 rounded-full transition ${pathname.startsWith("/products") ? "text-[#f5c451]" : "text-slate-200 hover:text-white"}`}>
                    Products <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mega ? "rotate-180" : ""}`} />
                  </Link>
                  <AnimatePresence>
                    {mega && (
                      <motion.div initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }} transition={{ duration: 0.25 }} className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px]">
                        <div className="glass-strong rounded-3xl p-5 grid grid-cols-2 gap-1.5 shadow-2xl">
                          {CATEGORIES.map((c) => (
                            <Link key={c} href={`/products?cat=${encodeURIComponent(c)}`} className="px-4 py-2.5 rounded-xl text-[13px] text-slate-200 hover:text-[#f5c451] hover:bg-white/5 transition flex items-center justify-between group/i">
                              {c} <span className="opacity-0 group-hover/i:opacity-100 transition text-[#f5c451]">→</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={l.href} href={l.href} className={`px-4 py-2.5 rounded-full transition ${pathname === l.href ? "text-[#f5c451]" : "text-slate-200 hover:text-white hover:bg-white/5"}`}>
                  {l.label}
                </Link>
              )
            ))}
            {NAV_LINKS.slice(4).map((l) => (
              <Link key={l.href} href={l.href} className={`px-4 py-2.5 rounded-full transition ${pathname === l.href ? "text-[#f5c451]" : "text-slate-200 hover:text-white hover:bg-white/5"}`}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href={BUSINESS.phoneHref} className="btn-shine hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2e7bff] to-[#00b3ff] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(46,123,255,0.8)] hover:shadow-[0_14px_36px_-10px_rgba(46,123,255,0.9)] transition">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden grid h-11 w-11 place-items-center rounded-full glass text-white" aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden overflow-hidden glass-strong border-t border-white/10">
              <div className="px-5 py-4 grid gap-1 max-h-[70vh] overflow-y-auto">
                {NAV_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className={`px-4 py-3 rounded-2xl text-[15px] font-medium transition ${pathname === l.href ? "bg-[#d4af37]/15 text-[#f5c451]" : "text-slate-200 hover:bg-white/5"}`}>
                    {l.label}
                  </Link>
                ))}
                <a href={BUSINESS.phoneHref} className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#2e7bff] to-[#00b3ff] px-5 py-3.5 font-bold text-white">
                  <Phone className="h-4 w-4" /> {BUSINESS.phone}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
