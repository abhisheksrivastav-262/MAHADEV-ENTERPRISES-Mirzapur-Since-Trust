"use client";
import { useState } from "react";
import { CheckCircle2, Clock, MapPin, Phone, Send } from "lucide-react";
import { BUSINESS, IMG } from "@/data/site";
import { PageHero, Reveal, SectionHeading } from "@/components/ui";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", product: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const text = `Namaste! Main ${form.name} (${form.phone}). Mujhe ${form.product} chahiye. ${form.message}`;
    window.open(`https://wa.me/918303364970?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div>
      <PageHero eyebrow="Get In Touch" title={<>Visit, Call Ya <span className="text-gold-gradient">WhatsApp Kariye</span></>} sub="Same-day response, best price aur expert guidance — bas ek message door." image={IMG.storeAisle} />

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <SectionHeading center={false} eyebrow="Store Info" title={<>Mahadev <span className="text-gold-gradient">Enterprises</span></>} />
            <Reveal>
              <div className="glass rounded-3xl p-6 space-y-4 text-sm">
                <p className="flex gap-3"><MapPin className="h-5 w-5 text-[#f5c451] shrink-0" /> {BUSINESS.address}</p>
                <a href={BUSINESS.phoneHref} className="flex gap-3 font-bold text-lg text-[#f5c451] hover:text-white transition"><Phone className="h-5 w-5 mt-1" /> {BUSINESS.phone}</a>
                <p className="flex gap-3 text-slate-300"><Clock className="h-5 w-5 text-[#f5c451] shrink-0" /> {BUSINESS.hours} (All 7 days)</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <a href={BUSINESS.phoneHref} className="btn-shine rounded-full bg-gradient-to-r from-[#2e7bff] to-[#00b3ff] px-5 py-2.5 text-xs font-bold">Click-to-Call</a>
                  <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-bold">WhatsApp</a>
                  <a href={BUSINESS.mapDirections} target="_blank" rel="noreferrer" className="rounded-full glass px-5 py-2.5 text-xs font-bold hover:text-[#f5c451]">Directions</a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-white/10 h-72">
                <iframe title="Mahadev Enterprises Map" src={BUSINESS.mapEmbed} className="h-full w-full grayscale-[30%] contrast-[1.05]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-3" delay={0.05}>
            <form onSubmit={submit} className="glass-strong rounded-[2rem] p-7 sm:p-10 gold-border h-full">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold">Request Best Price / Callback</h2>
              <p className="mt-1 text-sm text-slate-400">Form bhariye — hum WhatsApp/call par turant reply karenge.</p>
              {sent && <p className="mt-4 flex items-center gap-2 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 px-4 py-3 text-sm text-emerald-300"><CheckCircle2 className="h-4 w-4" /> Dhanyavaad! WhatsApp khul raha hai — hum jald sampark karenge.</p>}
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <label className="block"><span className="text-xs font-bold tracking-widest uppercase text-slate-400">Name *</span><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Aapka naam" className="mt-2 w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3.5 text-sm outline-none focus:border-[#d4af37]/70 placeholder:text-slate-500" /></label>
                <label className="block"><span className="text-xs font-bold tracking-widest uppercase text-slate-400">Phone *</span><input required pattern="[0-9+ ]{10,15}" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="10-digit mobile" className="mt-2 w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3.5 text-sm outline-none focus:border-[#d4af37]/70 placeholder:text-slate-500" /></label>
                <label className="block"><span className="text-xs font-bold tracking-widest uppercase text-slate-400">Email</span><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="mt-2 w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3.5 text-sm outline-none focus:border-[#d4af37]/70 placeholder:text-slate-500" /></label>
                <label className="block"><span className="text-xs font-bold tracking-widest uppercase text-slate-400">Product Required *</span>
                  <select required value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} className="mt-2 w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3.5 text-sm outline-none focus:border-[#d4af37]/70 text-slate-200">
                    <option value="">— Select —</option>
                    {["LED / Smart TV", "Refrigerator", "Washing Machine", "Air Conditioner", "Ceiling Fan", "Geyser / Cooler", "Inverter / Battery", "LED Lights", "Wires & Cables", "Switches / MCB", "Bulk / Commercial Order", "Other"].map((o) => (<option key={o} value={o} className="bg-black">{o}</option>))}
                  </select>
                </label>
                <label className="block sm:col-span-2"><span className="text-xs font-bold tracking-widest uppercase text-slate-400">Message</span><textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Model, size, budget — kuch bhi likhiye…" className="mt-2 w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3.5 text-sm outline-none focus:border-[#d4af37]/70 placeholder:text-slate-500 resize-none" /></label>
              </div>
              <button type="submit" className="btn-shine mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f5c451] to-[#d4af37] px-8 py-4 font-bold text-black"><Send className="h-4 w-4" /> Send Enquiry on WhatsApp</button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
