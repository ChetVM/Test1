import { Reveal } from "./motion";
import { FLEET } from "../data";

export const FleetGallery = () => (
  <section id="fleet" className="bg-surface py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Our Fleet
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
              A modern, company-owned fleet built for the long haul.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[260px] lg:grid-cols-4">
        {FLEET.map((f, i) => (
          <Reveal key={f.title} delay={(i % 4) * 0.06} className={f.span}>
            <div
              data-testid={`fleet-card-${i}`}
              className="group relative h-full w-full overflow-hidden"
            >
              <img
                src={f.img}
                alt={f.title}
                className="grayscale-img h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="mb-2 block h-1 w-8 bg-accent transition-all duration-300 group-hover:w-14" />
                <h3 className="font-heading text-lg font-bold text-white">{f.title}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
