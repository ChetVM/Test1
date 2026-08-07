import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FileText, ClipboardList, Package, Navigation, TruckIcon, PackageCheck } from "lucide-react";
import { Reveal } from "./motion";
import { PROCESS } from "../data";

const ICONS = [FileText, ClipboardList, Package, Navigation, TruckIcon, PackageCheck];

export const Process = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.3"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="bg-background py-20 md:py-28 lg:py-36">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <div className="mb-20 text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                How We Work
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto max-w-3xl font-heading text-[2.125rem] font-bold leading-[1.05] text-primary md:text-4xl lg:text-[3.5rem]">
              A transparent process, from quote to doorstep.
            </h2>
          </Reveal>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="relative hidden lg:block">
          {/* Track */}
          <div className="absolute left-8 right-8 top-9 h-[3px] bg-border" />
          <motion.div
            style={{ width: lineWidth }}
            className="absolute left-8 top-9 h-[3px] bg-accent origin-left"
          />

          <div className="relative grid grid-cols-6 gap-5">
            {PROCESS.map((p, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={p.step} delay={i * 0.1}>
                  <div data-testid={`process-step-${i}`} className="text-center">
                    <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-elegant border-2 border-accent relative z-10">
                      <Icon className="text-accent" size={26} strokeWidth={1.75} />
                    </div>
                    <div className="mt-6 font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent">
                      Step {p.step}
                    </div>
                    <h3 className="mt-2 font-heading text-lg font-bold text-primary">{p.title}</h3>
                    <p className="mx-auto mt-3 max-w-[200px] text-sm leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="relative lg:hidden">
          <div className="absolute left-[35px] top-0 h-full w-[3px] bg-border" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[35px] top-0 w-[3px] bg-accent origin-top"
          />
          <div className="space-y-8">
            {PROCESS.map((p, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={p.step} delay={i * 0.08}>
                  <div className="flex gap-5" data-testid={`process-step-mobile-${i}`}>
                    <div className="flex h-[72px] w-[72px] flex-none items-center justify-center rounded-full bg-white shadow-elegant border-2 border-accent relative z-10">
                      <Icon className="text-accent" size={26} strokeWidth={1.75} />
                    </div>
                    <div className="pt-2">
                      <div className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent lg:text-xs">
                        Step {p.step}
                      </div>
                      <h3 className="mt-1 font-heading text-lg font-bold text-primary">{p.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground lg:text-sm">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
