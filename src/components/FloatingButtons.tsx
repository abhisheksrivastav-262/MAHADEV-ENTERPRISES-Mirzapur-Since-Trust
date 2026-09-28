"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Phone } from "lucide-react";
import { BUSINESS } from "@/data/site";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const f = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[85] flex flex-col gap-3 items-end">
        <AnimatePresence>
          {showTop && (
            <motion.button initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="grid h-11 w-11 place-items-center rounded-full glass-strong gold-border text-[#f5c451] hover:bg-[#d4af37] hover:text-black transition" aria-label="Back to top">
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
        <a href={BUSINESS.phoneHref} aria-label="Call now" className="grid h-13 w-13 sm:h-14 sm:w-14 place-items-center rounded-full bg-gradient-to-br from-[#2e7bff] to-[#00b3ff] text-white shadow-[0_16px_40px_-10px_rgba(46,123,255,0.9)] hover:scale-110 transition p-4">
          <Phone className="h-5 w-5" />
        </a>
        <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-10px_rgba(37,211,102,0.9)] hover:scale-110 transition">
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
          <svg viewBox="0 0 24 24" className="relative h-7 w-7 fill-current"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.2-.7.5-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2 0-.1-.2-.2-.5-.3z" /></svg>
        </a>
      </div>
    </>
  );
}
