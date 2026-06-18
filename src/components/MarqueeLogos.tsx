const industries = [
  "Healthcare", "Finance", "Education", "Government",
  "Manufacturing", "Retail", "Professional Services",
];

export default function MarqueeLogos() {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-[1200px] mx-auto px-6 mb-8 md:mb-12">
        <p className="text-center text-xs text-black/45 dark:text-white/45 uppercase tracking-widest">
          Trusted by organisations across the UK
        </p>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-3 animate-marquee w-max">
          {[...industries, ...industries].map((industry, i) => (
            <span
              key={`r1-${i}`}
              className="inline-flex items-center gap-2 border border-brand/20 rounded-full px-5 py-2 text-sm whitespace-nowrap text-brand bg-brand/5"
            >
              <span className="w-2 h-2 rounded-full shrink-0 bg-brand opacity-30" />
              {industry}
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden mt-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-3 animate-marquee-reverse w-max">
          {[...industries, ...industries].map((industry, i) => (
            <span
              key={`r2-${i}`}
              className="inline-flex items-center gap-2 border border-brand/20 rounded-full px-5 py-2 text-sm whitespace-nowrap text-brand bg-brand/5"
            >
              <span className="w-2 h-2 rounded-full shrink-0 bg-brand opacity-30" />
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
