import {
  Award, Truck, Navigation, UserCheck, Clock, Headphones, ShieldCheck, IndianRupee,
} from "lucide-react";
import { Reveal } from "./motion";
import { WHY_CHOOSE } from "../data";

const ICONS = { Award, Truck, Navigation, UserCheck, Clock, Headphones, ShieldCheck, IndianRupee };

export const WhyChooseUs = () => (
  <section id="why" className="bg-background py-28 md:py-36">
    <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
      <div className="mb-20 text-center">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Why Choose Us
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-[1.05] text-primary md:text-4xl lg:text-[3.5rem]">
            The reliability advantage that keeps clients with us for decades.
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_CHOOSE.map((w, i) => {
          const Icon = ICONS[w.icon];
          return (
            <Reveal key={w.title} delay={(i % 4) * 0.08}>
              <div
                data-testid={`why-card-${i}`}
                className="group relative h-full overflow-hidden rounded-[20px] border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent hover:shadow-elegant-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface transition-all duration-500 group-hover:bg-primary">
                    <Icon
                      className="text-primary transition-colors duration-500 group-hover:text-accent"
                      size={26}
                      strokeWidth={1.75}
                    />
                  </div>
                  <span className="font-heading text-2xl font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-heading text-lg font-bold text-primary">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>

                {/* Corner sheen */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/10" />
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
