import Link from "next/link";
import type { Metadata } from "next";
import CtaBackground from "@/components/CtaBackground";

export const metadata: Metadata = {
  title: "About",
  description: "Founded in Leicester, Innowise Solutions is a trusted technology partner specialising in AI-powered cloud, cyber security, and ERP services.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="pt-28 pb-16 md:pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs text-black/55 dark:text-white/55 uppercase tracking-[0.2em] mb-6">About Us</p>
          <h1 className="text-[1.5rem] sm:text-5xl lg:text-7xl font-bold text-black dark:text-white max-w-3xl leading-[0.9] sm:leading-[0.85] mb-4 md:mb-6">
            Technology partner built for growth.
          </h1>
          <p className="text-sm md:text-base text-black/65 dark:text-white/65 max-w-xl mb-8 leading-relaxed">
            Founded in Leicester, we help organisations across the UK automate, secure, and scale their IT operations with AI-driven solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand text-white rounded-md px-6 py-2.5 font-semibold text-sm hover:bg-brand-dark transition-all duration-200"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* STORY */}
      <section className="py-12 md:py-16 px-6 border-t border-gray-200 dark:border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-xs text-black/55 dark:text-white/55 uppercase tracking-[0.2em] mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white max-w-2xl mb-6 leading-tight">
                From a simple idea to a trusted technology partner.
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-black/65 dark:text-white/65 text-sm leading-relaxed">
                Innowise Solutions was founded in Leicester with a straightforward belief: technology should work for people, not the other way around. What started as a small IT consultancy has grown into a trusted partner for organisations across the UK, from local enterprises to national institutions.
              </p>
              <p className="text-black/65 dark:text-white/65 text-sm leading-relaxed">
                We specialise in AI-powered cloud infrastructure, cyber security, data analytics, managed IT support, and Microsoft Dynamics ERP. Every engagement starts with understanding your business first and technology second.
              </p>
              <p className="text-black/65 dark:text-white/65 text-sm leading-relaxed">
                Today we serve clients across healthcare, finance, education, local government, and the private sector. We remain independently owned and headquartered in Leicester, where we continue to invest in local talent and long-term client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-12 md:py-16 px-6 border-t border-gray-200 dark:border-border">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs text-black/55 dark:text-white/55 uppercase tracking-[0.2em] mb-4">Our Values</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white max-w-3xl mb-12 md:mb-16 leading-tight">
            Built on trust, delivered with integrity.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Client-First Approach",
                desc: "We measure success by outcomes, not hours. Every recommendation is made with your business objectives in mind.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
              },
              {
                title: "Engineering Excellence",
                desc: "We hire for depth. Our team brings real engineering experience across cloud, security, data, and ERP. No shortcuts, no cookie-cutter solutions.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                ),
              },
              {
                title: "Transparency First",
                desc: "Weekly updates, live staging, clear documentation, and direct access to your engineering team. No black boxes, no surprises.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ),
              },
            ].map((value) => (
               <div key={value.title} className="bg-brand border border-brand/20 rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_15px_rgba(74,35,111,0.5),0_0_40px_-10px_rgba(74,35,111,0.3)]">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-white font-semibold text-base mb-3">{value.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-12 md:py-16 px-6 border-t border-gray-200 dark:border-border">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs text-black/55 dark:text-white/55 uppercase tracking-[0.2em] mb-4">Leadership</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white max-w-2xl mb-6 leading-tight">
            Meet the team behind the technology.
          </h2>
          <p className="text-black/65 dark:text-white/65 text-sm leading-relaxed max-w-2xl mb-12">
            Our leadership team brings together decades of experience across cloud engineering, cyber security, and enterprise systems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Sarah Mitchell", role: "Managing Director", tint: "bg-[radial-gradient(circle_at_50%_50%,rgba(74,35,111,0.15),transparent_70%)]" },
              { name: "James Adeyemi", role: "Head of Cloud Engineering", tint: "bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_70%)]" },
              { name: "Rachel Chen", role: "Head of Cyber Security", tint: "bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.15),transparent_70%)]" },
            ].map((person) => {
              const initials = person.name.split(" ").map(n => n[0]).join("");
              return (
                 <div key={person.name} className="group relative rounded-xl overflow-hidden border border-brand/20 transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_15px_rgba(74,35,111,0.5),0_0_40px_-10px_rgba(74,35,111,0.3)]">
                  <div className="aspect-[4/3] bg-brand/80 relative overflow-hidden">
                    <div className={`absolute inset-0 ${person.tint}`} />
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl sm:text-7xl font-bold text-white/10 select-none">{initials}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-brand/90 via-brand/50 to-transparent">
                      <p className="text-white/80 text-sm font-semibold">{person.name}</p>
                    </div>
                  </div>
                  <div className="p-4 md:p-5 bg-brand">
                    <p className="text-white/65 text-sm">{person.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 md:py-16 px-6 border-t border-gray-200 dark:border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: "12+", label: "Years in business" },
              { number: "200+", label: "Projects delivered" },
              { number: "98%", label: "Client retention" },
              { number: "24/7", label: "Security monitoring" },
            ].map((stat) => (
               <div key={stat.label} className="bg-brand border border-brand/20 rounded-xl p-6 text-center transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_15px_rgba(74,35,111,0.5),0_0_40px_-10px_rgba(74,35,111,0.3)]">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-white/55 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden">
            <CtaBackground />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 text-center px-6 py-10 md:py-14">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}>
                Let&rsquo;s build something together.
              </h2>
              <p className="text-white/70 text-sm max-w-lg mx-auto mb-8 leading-relaxed" style={{ textShadow: "0 1px 16px rgba(0,0,0,0.4)" }}>
                Tell us about your challenge and one of our specialists will be in touch within one business day.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-brand text-white rounded-lg px-8 py-3 font-semibold hover:bg-brand-dark transition-all duration-200"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
