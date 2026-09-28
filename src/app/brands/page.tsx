import { BadgeCheck, Phone } from "lucide-react";
import { BRANDS, BUSINESS, IMG } from "@/data/site";
import { PageHero, Reveal, SectionHeading } from "@/components/ui";

export default function BrandsPage() {
  return (
    <div>
      <PageHero eyebrow="Authorised Range" title={<>Premium <span className="text-gold-gradient">Brands</span> We Carry</>} sub="25+ trusted brands — 100% genuine stock, billing aur warranty ke saath." image={IMG.tvWall} />
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Official Collection" title={<>Har Top Brand, <span className="text-gold-gradient">Ek Hi Chhat Ke Neeche</span></>} />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {BRANDS.map((b, i) => (
              <Reveal key={b} delay={(i % 4) * 0.05}>
                <div className="lux-card glass rounded-3xl px-6 py-8 text-center group">
                  <p className="font-display text-xl sm:text-2xl font-bold tracking-wide group-hover:text-[#f5c451] transition">{b}</p>
                  <p className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold tracking-widest uppercase text-emerald-300"><BadgeCheck className="h-3.5 w-3.5" /> Genuine</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <div className="glass-strong rounded-[2rem] p-8 sm:p-10 gold-border text-center relative overflow-hidden">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-48 w-[500px] rounded-full bg-[#2e7bff]/20 blur-[100px]" />
              <h3 className="font-display text-2xl sm:text-3xl font-semibold relative">Koi specific model chahiye?</h3>
              <p className="mt-2 text-slate-300 text-sm sm:text-base relative">Brand + model WhatsApp kariye — best price 30 minute me.</p>
              <div className="mt-5 flex flex-wrap justify-center gap-3 relative">
                <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="btn-shine rounded-full bg-[#25D366] px-7 py-3 font-bold text-white text-sm">WhatsApp Model</a>
                <a href={BUSINESS.phoneHref} className="rounded-full bg-gradient-to-r from-[#f5c451] to-[#d4af37] px-7 py-3 font-bold text-black text-sm inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {BUSINESS.phone}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
