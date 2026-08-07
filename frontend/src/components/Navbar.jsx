import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY, NAV_LINKS } from "../data";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        data-testid="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "glass-dark border-b border-white/[0.06] shadow-elegant"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 lg:px-14">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-16" : "h-20 lg:h-24"
            }`}
          >
            <button
              data-testid="nav-logo"
              onClick={() => {
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 group whitespace-nowrap"
            >
              <span
                className={`flex items-center justify-center bg-accent font-heading font-extrabold text-white transition-all duration-500 shadow-elegant ${
                  scrolled ? "h-9 w-9 text-sm rounded-[10px]" : "h-11 w-11 text-base rounded-[12px] lg:h-12 lg:w-12 lg:text-lg lg:rounded-[14px]"
                }`}
              >
                AF
              </span>
              <span className="flex flex-col items-start leading-none">
                <span className={`font-heading font-bold text-white transition-all duration-500 ${scrolled ? "text-sm" : "text-[15px] lg:text-base"}`}>
                  Atlas Freight
                </span>
                <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                  Logistics
                </span>
              </span>
            </button>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.href}
                  data-testid={`nav-link-${l.label.toLowerCase()}`}
                  onClick={() => go(l.href)}
                  className="link-underline text-sm font-medium text-white/85 transition-colors duration-200 hover:text-white"
                >
                  {l.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4 xl:gap-5">
              <a
                href={`tel:${COMPANY.phone1}`}
                className="hidden items-center gap-2 text-xs font-medium text-white/70 hover:text-white transition-colors xl:flex"
              >
                <Phone size={14} className="text-accent" />
                {COMPANY.phone1}
              </a>
              <button
                data-testid="nav-quote-btn"
                onClick={() => go("#contact")}
                className="group relative overflow-hidden whitespace-nowrap rounded-full bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-elegant transition-transform duration-300 hover:scale-[1.03] xl:px-6"
              >
                <span className="relative z-10">Get Free Quote</span>
                <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 group-hover:translate-x-0" />
              </button>
            </div>

            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition-colors hover:bg-white/[0.1] active:scale-95"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer rendered outside motion.header to avoid transform scope */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed left-0 right-0 top-16 bottom-0 z-40 bg-primary"
          >
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-6"
            >
              <div className="flex-1">
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                  Menu
                </div>
                <nav className="flex flex-col divide-y divide-white/10">
                  {NAV_LINKS.map((l, i) => (
                    <motion.button
                      key={l.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                      data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                      onClick={() => go(l.href)}
                      className="group flex items-center justify-between py-5 text-left"
                    >
                      <span className="font-heading text-2xl font-bold text-white transition-colors group-hover:text-accent">
                        {l.label}
                      </span>
                      <ArrowRight
                        size={18}
                        className="text-white/40 transition-all group-hover:translate-x-1 group-hover:text-accent"
                      />
                    </motion.button>
                  ))}
                </nav>
              </div>

              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-6 space-y-3"
              >
                <button
                  onClick={() => go("#contact")}
                  className="group flex w-full items-center justify-between rounded-full bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-elegant"
                >
                  Get Free Quote
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white"
                >
                  Chat on WhatsApp
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm text-white/60"
              >
                <a href={`tel:${COMPANY.phone1}`} className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone size={15} className="text-accent" />
                  {COMPANY.phone1}
                </a>
                <div className="text-xs text-white/40">
                  {COMPANY.address.line1}
                  <br />
                  {COMPANY.address.line2}, {COMPANY.address.line3}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
