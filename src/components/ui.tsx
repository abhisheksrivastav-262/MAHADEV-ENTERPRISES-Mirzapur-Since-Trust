"use client";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, delay = 0, y = 28, className = "" }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, sub, center = true }: { eyebrow: string; title: React.ReactNode; sub?: string; center?: boolean }) {
  return (
    <Reveal className={`${center ? "text-center mx-auto" : "text-left"} max-w-3xl`}>
      <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.28em] uppercase text-[#f5c451]">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#d4af37]" />
        {eyebrow}
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4af37]" />
      </p>
      <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
        {title}
      </h2>
      {sub && <p className="mt-4 text-slate-300/90 text-base sm:text-lg leading-relaxed">{sub}</p>}
    </Reveal>
  );
}

export function Counter({ to, suffix = "+", duration = 1.8 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{val.toLocaleString("en-IN")}{suffix}</span>;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  return <motion.div className="fixed top-0 left-0 right-0 h-[3px] z-[90] origin-left bg-gradient-to-r from-[#2e7bff] via-[#00d4ff] to-[#d4af37]" style={{ scaleX }} />;
}

export function PageHero({ eyebrow, title, sub, image }: { eyebrow: string; title: React.ReactNode; sub: string; image: string }) {
  return (
    <header className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="absolute inset-0">
        <img src={image} alt={eyebrow} className="h-full w-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070f]/70 via-[#05070f]/85 to-[#05070f]" />
        <div className="absolute inset-0 hero-grid-bg" />
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#2e7bff]/30 blur-[110px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#d4af37]/20 blur-[110px]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 text-center">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#f5c451]">
          {eyebrow}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          {title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mx-auto mt-5 max-w-2xl text-slate-300 text-base sm:text-lg">
          {sub}
        </motion.p>
      </div>
    </header>
  );
}

export function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-1" aria-label={`${n} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`h-4 w-4 ${i < n ? "fill-[#f5c451]" : "fill-white/20"}`}>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
