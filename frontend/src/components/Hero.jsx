import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { MaskedLines, Counter } from "./motion";
import { STATS, FLEET } from "../data";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} id="home" className="relative min-h-screen overflow-hidden bg-primary grain-overlay">
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src={FLEET[0].img}
          alt="Modern logistics trucks on an Indian highway"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-16 pt-32 md:px-12 lg:px-16">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-accent" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Est. 2000 · Pan India Freight
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="max-w-5xl font-heading text-5xl font-black leading-[1.02] tracking-tighter text-white md:text-6xl lg:text-8xl">
          <MaskedLines lines={["India's Trusted", "Logistics Partner"]} delay={0.3} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/80 md:text-xl"
        >
          25+ years of excellence in transportation &amp; supply chain solutions —
          delivering trust across every mile.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button
            data-testid="hero-quote-btn"
            onClick={() => scrollTo("#contact")}
            className="group flex items-center justify-center gap-3 bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-primary"
          >
            Get Free Quote
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            data-testid="hero-services-btn"
            onClick={() => scrollTo("#services")}
            className="flex items-center justify-center gap-3 border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-primary"
          >
            Our Services
          </button>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 border-t border-white/15 bg-primary/60 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-white/10 px-6 md:grid-cols-5 md:px-12 lg:px-16">
          {STATS.map((s) => (
            <div key={s.label} className="px-2 py-7 text-center md:py-8">
              <div className="font-heading text-3xl font-black text-white md:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/60 md:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-32 right-6 z-10 hidden md:block lg:right-16">
        <ArrowDown className="animate-bounce text-white/50" size={22} />
      </div>
    </section>
  );
};
