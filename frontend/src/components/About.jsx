import { Target, Eye, Compass, ShieldCheck, Navigation, Headphones, Truck, MapPin } from "lucide-react";
import { Reveal } from "./motion";
import { FLEET } from "../data";

const PILLARS = [
  {
    n: "01",
    icon: Target,
    title: "Our Mission",
    desc: "To move India's freight with unwavering reliability — connecting businesses to markets through a transport network built on precision, safety and trust.",
  },
  {
    n: "02",
    icon: Eye,
    title: "Our Vision",
    desc: "To be the most dependable logistics partner in the country, setting the benchmark for on-time delivery and supply chain excellence across every sector.",
  },
  {
    n: "03",
    icon: Compass,
    title: "Core Values",
    desc: "Integrity in every dealing, accountability for every shipment, and a relentless commitment to the businesses that depend on us, day after day.",
  },
];

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "ISO Certified" },
  { icon: Navigation, label: "GPS Tracking" },
  { icon: Headphones, label: "24×7 Support" },
  { icon: Truck, label: "Dedicated Fleet" },
  { icon: MapPin, label: "Pan India Coverage" },
];

export const About = () => (
  <section id="about" className="bg-background py-20 md:py-28 lg:py-36">
    <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
        {/* Left: intro */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                About Atlas Freight
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-heading text-[2.125rem] font-bold leading-[1.05] text-primary md:text-4xl lg:text-[3.5rem]">
              Two and a half decades of moving India forward<span className="text-accent">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              Atlas Freight Logistics has spent over 25 years building one of India&apos;s most
              trusted transportation networks. From Full Truck Load and Part Truck Load to
              express cargo, paper transport and industrial supply chains, we handle the
              freight that keeps businesses running.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Businesses choose us because we treat their cargo, their timelines and their
              reputation as our own — backed by a dedicated fleet, experienced drivers and a
              support team that never sleeps.
            </p>
          </Reveal>

          {/* Trust Badges */}
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              {TRUST_BADGES.map((b) => (
                <div
                  key={b.label}
                  data-testid={`trust-badge-${b.label.toLowerCase().replace(/[\s×]/g, "-")}`}
                  className="group flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2.5 transition-all duration-300 hover:border-accent hover:shadow-elegant"
                >
                  <b.icon className="text-accent transition-transform duration-300 group-hover:scale-110" size={16} />
                  <span className="text-[13px] font-semibold text-primary lg:text-xs">{b.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: image with premium framing */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-[20px] bg-accent md:block" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-elegant-lg">
                <img
                  src={FLEET[2].img}
                  alt="Atlas Freight warehouse and distribution operations"
                  className="tone-img h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-5 py-4 backdrop-blur-md shadow-elegant">
                  <div className="font-heading text-2xl font-bold text-primary">25+ Years</div>
                  <div className="text-xs font-medium text-muted-foreground">of freight excellence</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Mission / Vision / Values */}
      <div className="mt-16 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-3 md:gap-5 lg:mt-24">
        {PILLARS.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.08}>
            <div className="group h-full rounded-[20px] border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:shadow-elegant-lg lg:p-10">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface transition-colors duration-300 group-hover:bg-accent/10">
                  <p.icon className="text-accent" size={26} strokeWidth={1.75} />
                </div>
                <span className="font-heading text-3xl font-bold text-border transition-colors duration-300 group-hover:text-accent">
                  {p.n}
                </span>
              </div>
              <h3 className="mt-8 font-heading text-xl font-bold text-primary">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground lg:text-sm">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
