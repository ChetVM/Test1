import { Star, Quote } from "lucide-react";
import { Reveal } from "./motion";
import { TESTIMONIALS } from "../data";

export const Testimonials = () => (
  <section id="testimonials" className="bg-surface py-20 md:py-28 lg:py-36">
    <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
      <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-white px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Client Testimonials
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl font-heading text-3xl font-bold leading-[1.05] text-primary md:text-4xl lg:text-[3.5rem]">
              Trusted by the businesses we move for.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted-foreground">
              Real feedback from operations heads, plant managers and supply chain
              directors who partner with Atlas every day.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <div
              data-testid={`testimonial-card-${i}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent hover:shadow-elegant-lg md:p-10"
            >
              {/* Large quote mark */}
              <Quote
                className="absolute -right-2 -top-2 text-accent/10 transition-colors duration-500 group-hover:text-accent/20"
                size={130}
                strokeWidth={1}
              />

              <div className="relative flex gap-1">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="relative mt-6 flex-1 text-base leading-relaxed text-primary/90 md:text-lg">
                “{t.quote}”
              </p>

              <div className="relative mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-full bg-accent/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
                  <img
                    src={t.img}
                    alt={t.name}
                    className="relative h-14 w-14 rounded-full object-cover ring-2 ring-white"
                  />
                </div>
                <div>
                  <div className="font-heading text-base font-bold text-primary">{t.name}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
