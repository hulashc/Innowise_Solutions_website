const testimonials = [
  {
    quote:
      "Innowise migrated our entire infrastructure to Azure with zero downtime. Their AI-optimised architecture cut our monthly cloud costs by 34% while improving performance across all services.",
    name: "David Akintunde",
    role: "Head of IT",
    org: "Leicester City Council",
  },
  {
    quote:
      "The team implemented a Dynamics 365 ERP that unified our finance, procurement, and HR systems. For the first time, we have real-time visibility across all departments.",
    name: "Sarah Mitchell",
    role: "Chief Financial Officer",
    org: "London Credit Union",
  },
  {
    quote:
      "Their 24/7 SOC monitoring detected a sophisticated ransomware attempt within 90 seconds and isolated it before any data was compromised. Their response was textbook.",
    name: "James Adeyemi",
    role: "CISO",
    org: "East Midlands NHS Trust",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <p className="animate-fade-in-up text-xs text-black/55 dark:text-white/55 uppercase tracking-[0.2em] mb-4 text-center">
          Client Success
        </p>
        <h2 className="animate-fade-in-up text-3xl sm:text-5xl font-bold text-black dark:text-white max-w-3xl mx-auto mb-12 md:mb-16 leading-tight text-center" style={{ animationDelay: "0.1s" }}>
          Trusted by organisations across the UK.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="animate-fade-in-up relative bg-brand border border-brand/20 rounded-xl p-6 md:p-8 flex flex-col justify-between"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white/15 mb-4">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="text-white/80 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-white/55 text-xs">{t.role}, {t.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
