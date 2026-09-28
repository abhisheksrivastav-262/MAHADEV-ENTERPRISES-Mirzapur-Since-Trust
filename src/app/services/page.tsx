import Link from "next/link";
import { Home, MessagesSquare, Package, Phone, Plug, ShieldCheck, Store, Tv, Wrench } from "lucide-react";
import { BUSINESS, IMG, SERVICES } from "@/data/site";
import { PageHero, Reveal, SectionHeading } from "@/components/ui";

const ICONS: Record<string, typeof Tv> = { Tv, Plug, Home, Wrench, MessagesSquare, Package, Store, ShieldCheck };

export default function ServicesPage() {
  return (
    <div>
      <PageHero eyebrow="What We Do" title={<>Services Beyond <span className="text-gold-gradient">Just Selling</span></>} sub="Bikne se pehle sahi salah, bikne ke baad poora saath — yahi Mahadev service promise hai." image={IMG.electrician} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="8 Premium Services" title={<>Har Zaroorat Ka <span className="text-gold-gradient">Solution</span></>} />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon] ?? Tv;
              return (
                <Reveal key={s.title} delay={(i % 4) * 0.07}>
                  <div className="lux-card glass rounded-3xl overflow-hidden h-full group">
                    <div className="relative h-44 overflow-hidden">
                      <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-4 grid h-11 w-11 place-items-center rounded-xl bg-[#0b1020]/85 backdrop-blur gold-border group-hover:scale-110 transition"><Icon className="h-5 w-5 text-[#f5c451]" /></span>
                    </div>
                    <div className="p-6">
                      <p className="text-[11px] font-bold tracking-[0.25em] text-slate-500">0{i + 1}</p>
                      <h3 className="font-display text-xl font-semibold mt-1">{s.title}</h3>
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-12">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#d4af37]/25">
              <img src={IMG.storeAisle} alt="Service" className="h-64 sm:h-72 w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent flex items-center">
                <div className="p-8 sm:p-12 max-w-xl">
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold">Bulk order ya new home setup?</h3>
                  <p className="mt-2 text-slate-300 text-sm sm:text-base">Ek call par quotation, delivery aur fitting — sab managed.</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={BUSINESS.phoneHref} className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f5c451] to-[#d4af37] px-6 py-3 font-bold text-black text-sm"><Phone className="h-4 w-4" /> {BUSINESS.phone}</a>
                    <Link href="/contact" className="rounded-full glass px-6 py-3 text-sm font-bold hover:text-[#f5c451] transition">Request Callback</Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
