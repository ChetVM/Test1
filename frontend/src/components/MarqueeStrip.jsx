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
  <div
    data-testid="marquee-strip"
    className="relative border-y border-border bg-surface py-7 marquee-mask"
  >
    <Marquee speed={35} gradient={false} autoFill>
      {ITEMS.map((item, i) => (
        <div key={i} className="flex items-center">
          <span className="px-12 font-heading text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
      ))}
    </Marquee>
  </div>
);
