import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion";
import { FLEET } from "../data";

export const FleetGallery = () => (
  <section id="fleet" className="bg-surface py-28 md:py-36">
    <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
      <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-white px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Our Fleet
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl font-heading text-3xl font-bold leading-[1.08] text-primary md:text-4xl lg:text-5xl">
              A modern, company-owned fleet
              <span className="text-accent"> built for</span> the long haul.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted-foreground">
              From long-haul containers to city distribution — every vehicle in our
              fleet is maintained, tracked and driven by trained professionals.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid auto-rows-[240px] grid-cols-1 gap-5 sm:grid-cols-2 md:auto-rows-[280px] lg:grid-cols-4">
        {FLEET.map((f, i) => (
          <Reveal key={f.title} delay={(i % 4) * 0.08} className={f.span}>
            <div
              data-testid={`fleet-card-${i}`}
              className="group relative h-full w-full overflow-hidden rounded-[20px] border border-border shadow-elegant"
            >
              <img
                src={f.img}
                alt={f.title}
                loading="lazy"
                className="tone-img h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/25 to-transparent transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:bg-accent">
                    <ArrowUpRight className="text-white" size={16} />
                  </span>
                </div>
                <div>
                  <div className="h-[2px] w-10 bg-accent transition-all duration-500 group-hover:w-20" />
                  <h3 className="mt-4 font-heading text-lg font-bold text-white md:text-xl">
                    {f.title}
                  </h3>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
