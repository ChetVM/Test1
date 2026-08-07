import {
  FileText, Car, Layers, ShoppingCart, HardHat, FlaskConical, Shirt, Store,
} from "lucide-react";
import { Reveal } from "./motion";
import { INDUSTRIES } from "../data";

const ICONS = { FileText, Car, Layers, ShoppingCart, HardHat, FlaskConical, Shirt, Store };

export const Industries = () => (
  <section id="industries" className="bg-primary py-24 text-white md:py-32">
    <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
      <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
        <div>
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Industries We Serve
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Trusted across the sectors that build the economy.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-md text-base leading-relaxed text-white/60 lg:justify-self-end">
            From paper mills to steel plants, our freight expertise is tailored to the
            demands of each industry we move for.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 gap-px bg-white/15 md:grid-cols-4">
        {INDUSTRIES.map((ind, i) => {
          const Icon = ICONS[ind.icon];
          return (
            <Reveal key={ind.name} delay={(i % 4) * 0.06}>
              <div
                data-testid={`industry-card-${i}`}
                className="group flex h-full flex-col items-start gap-6 bg-primary p-8 transition-colors duration-300 hover:bg-white/[0.06] lg:p-10"
              >
                <Icon
                  className="text-accent transition-transform duration-300 group-hover:-translate-y-1"
                  size={32}
                  strokeWidth={1.5}
                />
                <h3 className="font-heading text-base font-bold text-white md:text-lg">
                  {ind.name}
                </h3>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
