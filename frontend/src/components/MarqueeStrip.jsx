import Marquee from "react-fast-marquee";

const ITEMS = [
  "Full Truck Load",
  "Part Truck Load",
  "Express Cargo",
  "Warehousing",
  "Paper Transport",
  "Industrial Cargo",
  "Pan India",
  "Supply Chain",
];

export const MarqueeStrip = () => (
  <div data-testid="marquee-strip" className="border-y border-border bg-surface py-6">
    <Marquee speed={40} gradient={false} autoFill>
      {ITEMS.map((item, i) => (
        <div key={i} className="flex items-center">
          <span className="px-10 font-heading text-sm font-bold uppercase tracking-[0.25em] text-primary">
            {item}
          </span>
          <span className="h-1.5 w-1.5 bg-accent" />
        </div>
      ))}
    </Marquee>
  </div>
);
