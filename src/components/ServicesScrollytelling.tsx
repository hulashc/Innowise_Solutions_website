"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "AI Cloud Services",
    desc: "Intelligent migration, AI-optimised architecture and managed operations on AWS and Azure — built for reliability and cost efficiency.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    title: "AI Cyber Security",
    desc: "Proactive threat detection, AI-driven vulnerability management and 24/7 SOC monitoring powered by Rapid7.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
  },
  {
    title: "AI Dynamics ERP",
    desc: "Implement, customise and support AI-enhanced Dynamics 365 solutions that unify finance, supply chain, and operations.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
];

export default function ServicesScrollytelling() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const els = cardsRef.current;
    if (!section || !els.every(Boolean)) return;

    const ctx = gsap.context(() => {
      gsap.set(els[1], { scale: 0.95, y: 20, rotateX: 2, opacity: 0 });
      gsap.set(els[2], { scale: 0.9, y: 40, rotateX: 4, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: "+=280%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl.to({}, { duration: 0.2 })
        .to(els[0], { scale: 0.95, y: -20, rotateX: -2, opacity: 0, duration: 0.6, ease: "power2.inOut" }, 0.2)
        .to(els[1], { scale: 1, y: 0, rotateX: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 0.2)
        .to({}, { duration: 0.2 })
        .to(els[1], { scale: 0.95, y: -20, rotateX: -2, opacity: 0, duration: 0.6, ease: "power2.inOut" })
        .to(els[2], { scale: 1, y: 0, rotateX: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .to({}, { duration: 0.2 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="h-dvh overflow-hidden bg-white dark:bg-surface flex items-center justify-center">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="relative w-full" style={{ maxHeight: "min(65vh, 580px)", height: "65vh" }}>
            {cards.map((card, i) => (
              <div
                key={card.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="absolute inset-0 bg-white dark:bg-surface rounded-xl overflow-hidden border border-gray-200 dark:border-border flex flex-col md:flex-row"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="relative w-full md:w-[45%] h-[200px] md:h-auto shrink-0">
                  <Image src={card.img} alt="" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                </div>
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <p className="text-xs text-black/55 dark:text-white/55 uppercase tracking-[0.2em] mb-3">{card.title}</p>
                  <p className="text-black/65 dark:text-white/65 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
