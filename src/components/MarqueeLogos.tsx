const clients = [
  { name: "Northwood Digital", style: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/50" },
  { name: "Meridian Healthcare", style: "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800/50" },
  { name: "Ashford & Co", style: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/50" },
  { name: "Pinnacle Group", style: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/50" },
  { name: "Whitehall Tech", style: "text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800/50" },
  { name: "Thames Valley Housing", style: "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800/50" },
  { name: "London Credit Union", style: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/50" },
  { name: "Evergreen Finance", style: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/50" },
  { name: "Citizens Advice Bureau", style: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800/50" },
  { name: "University of Leicester", style: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800/50" },
  { name: "Leicester City Council", style: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/50" },
  { name: "East Midlands NHS Trust", style: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800/50" },
];

export default function MarqueeLogos() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 mb-8 md:mb-12">
        <p className="text-center text-xs text-black/45 dark:text-white/45 uppercase tracking-widest">
          Trusted by teams building the next generation
        </p>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-3 animate-marquee w-max">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={`r1-${i}`}
              className={`inline-flex items-center gap-2 border rounded-full px-5 py-2 text-sm whitespace-nowrap ${client.style}`}
            >
              <span className="w-2 h-2 rounded-full shrink-0 bg-current opacity-30" />
              {client.name}
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden mt-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-3 animate-marquee-reverse w-max">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={`r2-${i}`}
              className={`inline-flex items-center gap-2 border rounded-full px-5 py-2 text-sm whitespace-nowrap ${client.style}`}
            >
              <span className="w-2 h-2 rounded-full shrink-0 bg-current opacity-30" />
              {client.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
