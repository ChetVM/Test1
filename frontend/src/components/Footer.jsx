import { useState } from "react";
import {
  Linkedin, Facebook, Twitter, Instagram, ArrowUp, Send, Phone, Mail, MapPin, CheckCircle2,
} from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES, INDUSTRIES } from "../data";

const go = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e) => {
    e.preventDefault();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 10%, hsl(var(--accent)) 0%, transparent 40%), radial-gradient(circle at 90% 90%, white 0%, transparent 45%)",
        }}
      />

      {/* Newsletter band */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-6 py-14 md:grid-cols-2 md:px-10 md:py-16 lg:px-14">
          <div>
            <h3 className="font-heading text-[26px] font-bold leading-tight text-white md:text-3xl lg:text-4xl">
              Get logistics insights,
              <span className="text-accent"> straight to your inbox.</span>
            </h3>
            <p className="mt-3 text-[15px] text-white/60 md:text-base">
              Quarterly updates on freight trends, industry benchmarks and network expansions.
              No spam, ever.
            </p>
          </div>
          <form onSubmit={onSubscribe} className="flex w-full">
            <div className="relative flex w-full items-center overflow-hidden rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md focus-within:border-accent transition-colors duration-300">
              <input
                data-testid="newsletter-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email"
                className="w-full bg-transparent px-6 py-4 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                data-testid="newsletter-submit"
                className="group m-1.5 flex flex-none items-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-transform duration-300 hover:scale-[1.03]"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 size={16} /> Subscribed
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24 lg:px-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-accent font-heading text-lg font-extrabold text-white shadow-elegant">
                AF
              </span>
              <div className="leading-none">
                <div className="font-heading text-base font-bold uppercase tracking-wide">
                  Atlas Freight
                </div>
                <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                  Logistics
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {COMPANY.tagline} 25+ years of moving India&apos;s freight with unwavering
              reliability across 28 states.
            </p>

            <div className="mt-8 space-y-3">
              <a href={`tel:${COMPANY.phone1}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-accent transition-colors">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-white/10">
                  <Phone size={14} className="text-accent" />
                </span>
                {COMPANY.phone1}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-accent transition-colors">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-white/10">
                  <Mail size={14} className="text-accent" />
                </span>
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-white/10">
                  <MapPin size={14} className="text-accent" />
                </span>
                <span className="leading-relaxed">
                  {COMPANY.address.line1}, {COMPANY.address.line2}
                  <br />
                  {COMPANY.address.line3}
                </span>
              </div>
            </div>

            <div className="mt-8 flex gap-2.5">
              {[Linkedin, Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#home"
                  data-testid={`social-link-${i}`}
                  aria-label="Social link"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Quick Links
            </h4>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button onClick={() => go(l.href)} className="text-sm text-white/75 transition-colors hover:text-accent">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Services
            </h4>
            <ul className="mt-6 space-y-3">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <button onClick={() => go("#services")} className="text-left text-sm text-white/75 transition-colors hover:text-accent">
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Industries
            </h4>
            <ul className="mt-6 space-y-3">
              {INDUSTRIES.slice(0, 6).map((ind) => (
                <li key={ind.name}>
                  <button onClick={() => go("#industries")} className="text-left text-sm text-white/75 transition-colors hover:text-accent">
                    {ind.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row md:px-10 lg:px-14">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Atlas Freight Logistics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#home" className="text-xs text-white/50 transition-colors hover:text-accent">Privacy Policy</a>
            <a href="#home" className="text-xs text-white/50 transition-colors hover:text-accent">Terms &amp; Conditions</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              data-testid="back-to-top"
              aria-label="Back to top"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
