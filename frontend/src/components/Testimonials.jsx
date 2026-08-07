import { Star, Quote } from "lucide-react";
import { Reveal } from "./motion";
import { TESTIMONIALS } from "../data";

export const Testimonials = () => (
  <section id="testimonials" className="bg-surface py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Client Testimonials
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
              Trusted by the businesses we move for.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <div
              data-testid={`testimonial-card-${i}`}
              className="flex h-full flex-col border border-border bg-background p-8 transition-colors duration-300 hover:border-accent"
            >
              <Quote className="text-accent" size={30} />
              <div className="mt-5 flex gap-1">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-5 flex-1 text-base leading-relaxed text-primary/90">
                “{t.quote}”
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-12 w-12 object-cover grayscale"
                />
                <div>
                  <div className="font-heading text-sm font-bold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
