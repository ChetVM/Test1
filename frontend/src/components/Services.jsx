import {
  Truck, Package, Zap, FileText, Factory, Warehouse, Container, MapPin, ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./motion";
import { SERVICES } from "../data";

const ICONS = { Truck, Package, Zap, FileText, Factory, Warehouse, Container, MapPin };

export const Services = () => (
  <section id="services" className="bg-surface py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                What We Move
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
              Complete logistics solutions, engineered for every load.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
            Eight specialised services under one accountable network — from a single
            pallet to full industrial supply chains.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <div
                data-testid={`service-card-${i}`}
                className="group relative h-full border-b border-r border-border bg-background p-8 transition-colors duration-300 hover:bg-primary lg:p-9"
              >
                <div className="flex items-start justify-between">
                  <Icon
                    className="text-accent transition-transform duration-300 group-hover:scale-110"
                    size={34}
                    strokeWidth={1.5}
                  />
                  <ArrowUpRight
                    className="text-border opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-white"
                    size={20}
                  />
                </div>
                <h3 className="mt-8 font-heading text-lg font-bold text-primary transition-colors duration-300 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/70">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
