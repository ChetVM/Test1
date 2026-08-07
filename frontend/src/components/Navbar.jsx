import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";
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

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      data-testid="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark border-b border-white/[0.06] shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16" : "h-24"
          }`}
        >
          <button
            data-testid="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <span
              className={`flex items-center justify-center bg-accent font-heading font-extrabold text-white transition-all duration-500 shadow-elegant ${
                scrolled ? "h-9 w-9 text-sm rounded-[10px]" : "h-12 w-12 text-lg rounded-[14px]"
              }`}
            >
              AF
            </span>
            <span className="hidden sm:flex flex-col items-start leading-none">
              <span className={`font-heading font-bold text-white transition-all duration-500 ${scrolled ? "text-sm" : "text-base"}`}>
                Atlas Freight
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent mt-0.5">
                Logistics
              </span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-10">
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

          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${COMPANY.phone1}`}
              className="flex items-center gap-2 text-xs font-medium text-white/70 hover:text-white transition-colors"
            >
              <Phone size={14} className="text-accent" />
              {COMPANY.phone1}
            </a>
            <button
              data-testid="nav-quote-btn"
              onClick={() => go("#contact")}
              className="group relative overflow-hidden rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-elegant transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10">Get Free Quote</span>
              <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 group-hover:translate-x-0" />
            </button>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="lg:hidden glass-dark border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                onClick={() => go(l.href)}
                className="py-3 text-left text-base font-medium text-white/85 border-b border-white/10"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go("#contact")}
              className="mt-5 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white"
            >
              Get Free Quote
            </button>
            <a href={`tel:${COMPANY.phone1}`} className="mt-4 text-center text-sm text-white/60">
              {COMPANY.phone1}
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
};
