import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
    <header
      data-testid="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
        <div className="flex h-20 items-center justify-between">
          <button
            data-testid="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <span className="flex h-11 w-11 items-center justify-center bg-accent font-heading text-lg font-black text-white">
              AF
            </span>
            <span className="hidden sm:flex flex-col items-start leading-none">
              <span className="font-heading text-base font-extrabold uppercase tracking-wide text-white">
                Atlas Freight
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                Logistics
              </span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                onClick={() => go(l.href)}
                className="relative text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button
              data-testid="nav-quote-btn"
              onClick={() => go("#contact")}
              className="bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-primary"
            >
              Get Free Quote
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
        <div data-testid="mobile-menu" className="lg:hidden bg-primary border-t border-white/10">
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
              className="mt-4 bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white"
            >
              Get Free Quote
            </button>
            <a href={`tel:${COMPANY.phone1}`} className="mt-3 text-center text-sm text-white/60">
              {COMPANY.phone1}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
