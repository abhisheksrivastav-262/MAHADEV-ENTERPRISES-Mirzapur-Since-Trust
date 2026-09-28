"use client";
import Link from "next/link";
import Image from "next/image";
import { Clock, Globe, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative mt-0 overflow-hidden border-t border-[#d4af37]/20 bg-[#04060d]">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[700px] rounded-full bg-[#2e7bff]/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-11 w-11 overflow-hidden rounded-2xl gold-border shrink-0">
              <Image src="/logo.jpeg" alt="Mahadev Enterprises logo" fill sizes="44px" className="object-cover" />
            </span>
            <div className="font-display font-bold text-lg">MAHADEV <span className="text-gold-gradient">ENTERPRISES</span></div>
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed">{BUSINESS.tagline}. Mirzapur ka apna trusted electronics & electrical destination.</p>
          <div className="mt-5 flex gap-2">
            {[Share2, MessageCircle, Globe].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-full glass text-slate-300 hover:text-[#f5c451] hover:border-[#d4af37]/50 hover:-translate-y-1 transition-all">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-[0.22em] uppercase text-[#f5c451]">Quick Links</h4>
          <ul className="mt-4 grid grid-cols-2 md:grid-cols-1 gap-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><Link href={l.href} className="text-slate-300 hover:text-[#f5c451] transition">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-[0.22em] uppercase text-[#f5c451]">Top Categories</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {["LED & Smart TVs", "Refrigerators", "Air Conditioners", "Inverters & Batteries", "LED Lighting", "Wires & Switches"].map((c) => (
              <li key={c}><Link href={`/products?cat=${encodeURIComponent(c.includes("Inverters") ? "Inverters" : c.includes("Wires") ? "Wires & Cables" : c)}`} className="hover:text-[#f5c451] transition">{c}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-[0.22em] uppercase text-[#f5c451]">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[#f5c451] shrink-0" /> {BUSINESS.address}</li>
            <li><a href={BUSINESS.phoneHref} className="flex gap-2 hover:text-[#f5c451]"><Phone className="h-4 w-4 mt-0.5 text-[#f5c451] shrink-0" /> {BUSINESS.phone}</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-[#f5c451] shrink-0" /> {BUSINESS.hours}</li>
          </ul>
          <a href={BUSINESS.mapDirections} target="_blank" rel="noreferrer" className="btn-shine mt-5 inline-flex rounded-full border border-[#d4af37]/40 px-5 py-2.5 text-xs font-bold tracking-widest uppercase text-[#f5c451] hover:bg-[#d4af37] hover:text-black transition">Get Directions</a>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>Copyright © 2026 MAHADEV ENTERPRISES. All Rights Reserved.</p>
          <p>Tahsil Road, Mirzapur, UP – 231001 • Crafted with trust in India</p>
        </div>
      </div>
    </footer>
  );
}
