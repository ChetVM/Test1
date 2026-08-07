import {
  Truck, Package, Zap, FileText, Factory, Warehouse, Container, MapPin, ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./motion";
import { SERVICES } from "../data";

const ICONS = { Truck, Package, Zap, FileText, Factory, Warehouse, Container, MapPin };

export const Services = () => (
  <section id="services" className="bg-surface py-20 md:py-28 lg:py-36">
    <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
      <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-white px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                What We Move
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-3xl font-heading text-3xl font-bold leading-[1.05] text-primary md:text-4xl lg:text-[3.5rem]">
              Complete logistics solutions, engineered for every load.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted-foreground">
              Eight specialised services under one accountable network — from a single
              pallet to full industrial supply chains.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <Reveal key={s.title} delay={(i % 4) * 0.08}>
              <div
                data-testid={`service-card-${i}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent hover:shadow-elegant-lg"
              >
                {/* Icon */}
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface transition-all duration-500 group-hover:bg-accent group-hover:shadow-elegant">
                    <Icon
                      className="text-accent transition-colors duration-500 group-hover:text-white"
                      size={30}
                      strokeWidth={1.75}
                    />
                  </div>
                  <ArrowUpRight
                    className="absolute right-0 top-0 text-border opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-accent"
                    size={22}
                  />
                </div>

                <h3 className="mt-8 font-heading text-lg font-bold text-primary">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>

                <div className="mt-6 h-[2px] w-8 bg-accent transition-all duration-500 group-hover:w-20" />
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
