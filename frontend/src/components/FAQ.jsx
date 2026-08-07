import { Reveal } from "./motion";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "./ui/accordion";
import { FAQS } from "../data";

export const FAQ = () => (
  <section id="faq" className="bg-background py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                FAQ
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
              Answers to the questions we hear most.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Still have a question? Reach our team directly and we will get back to you
              the same working day.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full border-t border-border">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  data-testid={`faq-item-${i}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="py-6 text-left font-heading text-base font-bold text-primary hover:text-accent hover:no-underline md:text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
