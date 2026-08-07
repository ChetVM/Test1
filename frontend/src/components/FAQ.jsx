import { HelpCircle } from "lucide-react";
import { Reveal } from "./motion";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "./ui/accordion";
import { FAQS } from "../data";

export const FAQ = () => (
  <section id="faq" className="bg-background py-20 md:py-28 lg:py-36">
    <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Frequently Asked
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-heading text-3xl font-bold leading-[1.05] text-primary md:text-4xl lg:text-5xl">
              Answers to the questions we hear most.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Still have a question? Reach our team directly and we will get back to you
              the same working day.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex items-start gap-4 rounded-[18px] border border-border bg-surface p-5">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent/10">
                <HelpCircle className="text-accent" size={20} />
              </div>
              <div>
                <div className="font-heading text-sm font-bold text-primary">Need direct assistance?</div>
                <a href="#contact" className="mt-1 inline-block text-sm text-muted-foreground hover:text-accent transition-colors">
                  Get in touch with our team →
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  data-testid={`faq-item-${i}`}
                  className="overflow-hidden rounded-[16px] border border-border bg-white px-6 transition-colors duration-300 hover:border-accent/50 data-[state=open]:border-accent data-[state=open]:shadow-elegant"
                >
                  <AccordionTrigger className="py-6 text-left font-heading text-base font-bold text-primary hover:no-underline md:text-lg [&[data-state=open]]:text-accent">
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
