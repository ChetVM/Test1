import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "./motion";
import { COMPANY } from "../data";

const CTA_BG = "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2400&q=80";

export const CTASection = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`;

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-primary shadow-elegant-lg">
            {/* Background image */}
            <motion.img
              src={CTA_BG}
              alt="Freight highway at dusk"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/85 to-primary/60" />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 85% 30%, hsl(var(--accent)) 0%, transparent 40%)",
              }}
            />

            <div className="relative grid grid-cols-1 gap-10 p-10 md:p-16 lg:grid-cols-12 lg:gap-16 lg:p-20">
              <div className="lg:col-span-8">
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                    Ready When You Are
                  </span>
                </div>
                <h2 className="font-heading text-4xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl">
                  Let&apos;s move your freight
                  <span className="text-accent"> forward.</span>
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                  Get a transparent quote today. Our team responds within hours — no
                  hidden fees, no obligations.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4 lg:col-span-4">
                <button
                  data-testid="cta-quote-btn"
                  onClick={() => scrollTo("#contact")}
                  className="group inline-flex w-full items-center justify-between rounded-full bg-accent px-7 py-5 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-elegant-lg transition-transform duration-300 hover:scale-[1.02]"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <a
                  data-testid="cta-whatsapp-btn"
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-between rounded-full border border-white/25 bg-white/[0.04] px-7 py-5 text-sm font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-primary"
                >
                  <span>WhatsApp Us</span>
                  <MessageCircle size={18} className="text-accent transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
