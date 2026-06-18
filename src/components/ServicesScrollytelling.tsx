"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

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

function ScrollyCard({ card, index, total, scrollYProgress }: { card: typeof cards[0]; index: number; total: number; scrollYProgress: MotionValue<number> }) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.08, end - 0.08, end],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    index === 0 ? [1, 0.92] : [0.92, 1]
  );
  const y = useTransform(
    scrollYProgress,
    [start, end],
    [0, 40]
  );

  return (
    <motion.div
      style={{ opacity, scale, y, willChange: "transform, opacity" }}
      className="absolute inset-0 bg-brand rounded-xl overflow-hidden border border-brand/20 flex flex-col md:flex-row"
    >
      <div className="relative w-full md:w-[45%] h-[200px] md:h-auto shrink-0">
        <Image src={card.img} alt="" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
        <p className="text-xs text-white/55 uppercase tracking-[0.2em] mb-3">{card.title}</p>
        <p className="text-white/65 text-sm leading-relaxed">{card.desc}</p>
      </div>
    </motion.div>
  );
}

export default function ServicesScrollytelling() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-dvh overflow-hidden bg-white dark:bg-surface flex items-center justify-center">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="relative w-full" style={{ maxHeight: "min(65vh, 580px)", height: "65vh" }}>
            {cards.map((card, i) => (
              <ScrollyCard key={card.title} card={card} index={i} total={cards.length} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
