import { motion } from "framer-motion";
import { Reveal } from "./motion";
import { PROCESS } from "../data";

export const Process = () => (
  <section id="process" className="bg-background py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
      <div className="mb-16 text-center">
        <Reveal>
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
              How We Work
            </span>
            <span className="h-px w-12 bg-accent" />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
            A transparent process, from quote to doorstep.
          </h2>
        </Reveal>
      </div>

      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-0 top-8 hidden h-px w-full bg-border lg:block" />
        <motion.div
          className="absolute left-0 top-8 hidden h-px bg-accent lg:block"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08}>
              <div data-testid={`process-step-${i}`} className="relative">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center bg-primary font-heading text-lg font-black text-white">
                  {p.step}
                </div>
                <h3 className="mt-6 font-heading text-base font-bold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
