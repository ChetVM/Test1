import {
  FileText, Car, Layers, ShoppingCart, HardHat, FlaskConical, Shirt, Store, ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./motion";

const ICONS = { FileText, Car, Layers, ShoppingCart, HardHat, FlaskConical, Shirt, Store };

// Industry cards with background imagery
const DATA = [
  {
    icon: "FileText",
    name: "Paper Manufacturing",
    img: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "Car",
    name: "Automobile",
    img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "Layers",
    name: "Steel",
    img: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "ShoppingCart",
    name: "FMCG",
    img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "HardHat",
    name: "Construction",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "FlaskConical",
    name: "Chemical",
    img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "Shirt",
    name: "Textile",
    img: "https://images.unsplash.com/photo-1524292332709-b33366a7f165?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "Store",
    name: "Retail Distribution",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
  },
];

export const Industries = () => (
  <section id="industries" className="relative overflow-hidden bg-primary py-20 text-white md:py-28 lg:py-36">
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, hsl(var(--accent)) 0%, transparent 40%), radial-gradient(circle at 80% 80%, white 0%, transparent 50%)",
      }}
    />
    <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
      <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                Industries We Serve
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-3xl font-heading text-3xl font-bold leading-[1.05] text-white md:text-4xl lg:text-[3.5rem]">
              Trusted across the sectors that build the economy.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-white/60">
              From paper mills to steel plants, our freight expertise is tailored to the
              demands of each industry we move for.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {DATA.map((ind, i) => {
          const Icon = ICONS[ind.icon];
          return (
            <Reveal key={ind.name} delay={(i % 4) * 0.08}>
              <div
                data-testid={`industry-card-${i}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-[18px] border border-white/[0.06]"
              >
                <img
                  src={ind.img}
                  alt={ind.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/10 transition-opacity duration-500 group-hover:from-primary/95 group-hover:via-primary/60" />

                <div className="relative flex h-full flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.08] backdrop-blur-md transition-all duration-500 group-hover:bg-accent">
                      <Icon
                        className="text-accent transition-colors duration-500 group-hover:text-white"
                        size={20}
                        strokeWidth={1.75}
                      />
                    </div>
                    <ArrowUpRight
                      className="text-white/0 transition-all duration-500 group-hover:text-white"
                      size={20}
                    />
                  </div>
                  <div>
                    <div className="h-[2px] w-8 bg-accent transition-all duration-500 group-hover:w-14" />
                    <h3 className="mt-4 font-heading text-base font-bold text-white md:text-lg">
                      {ind.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
