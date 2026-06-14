const logos = [
  "Northwood Digital", "Meridian Healthcare", "Ashford & Co", "Pinnacle Group", "Whitehall Tech",
  "Thames Valley Housing", "London Credit Union", "Evergreen Finance", "Citizen Advice Bureau", "University of Leicester",
  "Leicester City Council", "East Midlands NHS Trust",
];

export default function MarqueeLogos() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 mb-8 md:mb-12">
        <p className="text-center text-xs text-black/45 uppercase tracking-widest">
          Trusted by teams building the next generation
        </p>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-3 animate-marquee w-max">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={`r1-${i}`}
              className="inline-flex items-center border border-black/10 rounded-full px-6 py-2 text-sm text-black/45 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden mt-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-3 animate-marquee-reverse w-max">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={`r2-${i}`}
              className="inline-flex items-center border border-black/10 rounded-full px-6 py-2 text-sm text-black/45 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
