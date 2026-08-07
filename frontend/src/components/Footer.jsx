import { Linkedin, Facebook, Twitter, Instagram, ArrowUp } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES, INDUSTRIES } from "../data";

const go = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const Footer = () => (
  <footer className="bg-primary text-white">
    <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20 lg:px-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center bg-accent font-heading text-lg font-black text-white">
              AF
            </span>
            <div className="leading-none">
              <div className="font-heading text-base font-extrabold uppercase tracking-wide">
                Atlas Freight
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                Logistics
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/50">{COMPANY.tagline}</p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Facebook, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#home"
                data-testid={`social-link-${i}`}
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="mt-6 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <button onClick={() => go(l.href)} className="text-sm text-white/50 transition-colors hover:text-accent">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">Services</h4>
          <ul className="mt-6 space-y-3">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.title}>
                <button onClick={() => go("#services")} className="text-left text-sm text-white/50 transition-colors hover:text-accent">
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-6 space-y-3 text-sm text-white/50">
            <li>{COMPANY.address.line1}</li>
            <li>{COMPANY.address.line2}</li>
            <li>{COMPANY.address.line3}</li>
            <li className="pt-2">
              <a href={`tel:${COMPANY.phone1}`} className="transition-colors hover:text-accent">{COMPANY.phone1}</a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-accent">{COMPANY.email}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row md:px-12 lg:px-16">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Atlas Freight Logistics. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#home" className="text-xs text-white/40 transition-colors hover:text-accent">Privacy Policy</a>
          <a href="#home" className="text-xs text-white/40 transition-colors hover:text-accent">Terms &amp; Conditions</a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-testid="back-to-top"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </div>
  </footer>
);
