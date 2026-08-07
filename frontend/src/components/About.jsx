import { Target, Eye, Compass } from "lucide-react";
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

export const About = () => (
  <section id="about" className="bg-background py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
        {/* Left: intro */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                About Atlas Freight
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
              Two and a half decades of moving India forward.
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
        </div>

        {/* Right: image with clipped frame */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -left-4 -top-4 hidden h-full w-full border border-accent md:block" />
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={FLEET[2].img}
                  alt="Atlas Freight warehouse and distribution operations"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Mission / Vision / Values */}
      <div className="mt-20 grid grid-cols-1 border-l border-t border-border md:grid-cols-3">
        {PILLARS.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.08}>
            <div className="group h-full border-b border-r border-border p-8 transition-colors duration-300 hover:bg-surface lg:p-10">
              <div className="flex items-center justify-between">
                <p.icon className="text-accent" size={30} strokeWidth={1.5} />
                <span className="font-heading text-4xl font-black text-border transition-colors duration-300 group-hover:text-accent">
                  {p.n}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold text-primary">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
