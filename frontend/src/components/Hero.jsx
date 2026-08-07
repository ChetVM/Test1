import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, PlayCircle, Star } from "lucide-react";
import { MaskedLines, Counter } from "./motion";
import { STATS } from "../data";

const HERO_IMG =
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=80";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen overflow-hidden bg-primary grain-overlay"
    >
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Cinematic view of modern logistics fleet at dusk"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[1] bg-gradient-to-br from-primary/90 via-primary/50 to-transparent"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-primary via-primary/25 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-40 pt-40 md:px-10 lg:px-14">
        {/* Trust chip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-[11px] sm:tracking-[0.25em]">
            Trusted since 2000 · 500+ Enterprise Clients
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="max-w-5xl font-heading text-5xl font-bold leading-[1.02] text-white md:text-6xl lg:text-[5.5rem]">
          <MaskedLines lines={["India's Trusted", "Logistics Partner"]} delay={0.35} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7 }}
          className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/75 md:text-xl"
        >
          25+ years of excellence in transportation and supply chain
          solutions — delivering trust across every mile.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <button
            data-testid="hero-quote-btn"
            onClick={() => scrollTo("#contact")}
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-elegant-lg transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10">Get Free Quote</span>
            <ArrowRight
              size={17}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
            <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 group-hover:translate-x-0" />
          </button>
          <button
            data-testid="hero-services-btn"
            onClick={() => scrollTo("#services")}
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.04] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-primary"
          >
            <PlayCircle size={18} className="text-accent transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
            Our Services
          </button>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35, duration: 0.7 }}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/60"
        >
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} className="fill-accent text-accent" />
            ))}
            <span className="ml-2 font-medium text-white/85">4.9 average client rating</span>
          </div>
          <span className="hidden h-4 w-px bg-white/20 sm:block" />
          <span className="font-medium">28 States Covered</span>
          <span className="hidden h-4 w-px bg-white/20 sm:block" />
          <span className="font-medium">98% On-Time Delivery</span>
        </motion.div>
      </div>

      {/* Premium stat cards floating below hero */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-3 rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-3 backdrop-blur-xl md:grid-cols-5 md:gap-4 md:p-4"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group rounded-[14px] bg-white/[0.03] p-5 transition-colors duration-300 hover:bg-white/[0.07] md:p-6"
            >
              <div className="font-heading text-3xl font-bold text-white md:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/55 md:text-xs">
                {s.label}
              </div>
              <div className="mt-4 h-[2px] w-6 bg-accent transition-all duration-500 group-hover:w-14" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
