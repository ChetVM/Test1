import {
  Award, Truck, Navigation, UserCheck, Clock, Headphones, ShieldCheck, IndianRupee,
} from "lucide-react";
import { Reveal } from "./motion";
import { WHY_CHOOSE } from "../data";

const ICONS = { Award, Truck, Navigation, UserCheck, Clock, Headphones, ShieldCheck, IndianRupee };

export const WhyChooseUs = () => (
  <section id="why" className="bg-background py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
      <div className="mb-16 text-center">
        <Reveal>
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Why Choose Us
            </span>
            <span className="h-px w-12 bg-accent" />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
            The reliability advantage that keeps clients with us for decades.
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {WHY_CHOOSE.map((w, i) => {
          const Icon = ICONS[w.icon];
          return (
            <Reveal key={w.title} delay={(i % 4) * 0.06}>
              <div
                data-testid={`why-card-${i}`}
                className="group h-full bg-background p-8 transition-colors duration-300 hover:bg-surface"
              >
                <span className="font-heading text-2xl font-black text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="mt-6 text-primary" size={30} strokeWidth={1.5} />
                <h3 className="mt-5 font-heading text-lg font-bold text-primary">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
