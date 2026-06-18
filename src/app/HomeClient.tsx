"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MarqueeLogos from "@/components/MarqueeLogos";
import CountUp from "@/components/CountUp";
import CtaBackground from "@/components/CtaBackground";
import Testimonials from "@/components/Testimonials";

export default function HomeClient() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, -80]);
  const featuresRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"],
  });
  const glowStrength = useTransform(scrollYProgress, (v) => Math.sin(v * Math.PI));
  const glowShadow = useTransform(glowStrength, (s) => {
    const a = 0.06 + s * 0.54;
    const b = 0.03 + s * 0.37;
    return `0 0 15px rgba(74,35,111,${a.toFixed(2)}), 0 0 40px -8px rgba(74,35,111,${b.toFixed(2)})`;
  });

  return (
    <>
      <section className="h-dvh p-2 md:p-2 overflow-hidden">
        <div className="relative w-full h-full rounded-xl md:rounded-2xl border border-white overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: bgY }}>
            <Image
              src="/hero_bg.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 w-full h-full px-4 md:pr-10 lg:pr-14 md:pl-4 lg:pl-6 flex flex-col justify-center md:pt-24 lg:pt-32">
            <div className="max-w-2xl lg:max-w-3xl">
              <h1 className="text-[clamp(2rem,6vw,6rem)] font-bold text-white tracking-tight leading-[0.9] sm:leading-[0.85] mb-3 md:mb-6">
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="block"
                >
                  AI-driven infrastructure.
                </motion.span>
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.36 }}
                  className="block"
                >
                  built for real business.
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="text-[clamp(0.875rem,1.5vw,1.5rem)] text-white max-w-xl mb-8 md:mb-10 leading-relaxed"
              >
                From AI-powered cloud migrations and intelligent cybersecurity to smart ERP systems &mdash; we design, implement, and manage the technology that powers your growth.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="flex flex-wrap gap-4 pb-6 md:pb-0"
            >
              <Link
                href="/services"
                className="inline-block bg-brand text-white rounded-md font-medium text-[clamp(0.875rem,1.3vw,1.375rem)] px-6 py-2.5 md:px-8 md:py-3 hover:bg-brand-dark transition-all duration-200"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-white/20 text-white rounded-lg text-[clamp(0.875rem,1.3vw,1.375rem)] px-6 py-2.5 md:px-8 md:py-3 hover:bg-white/5 transition-all duration-200"
              >
                Let&rsquo;s Talk
              </Link>
            </motion.div>
            </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5"
            >
              <motion.div className="w-1 h-1 rounded-full bg-white/60" />
            </motion.div>
          </motion.div>
          </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-12 md:py-16 px-6"
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs text-black/55 dark:text-white/55 uppercase tracking-[0.2em] mb-4">
            About Us
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white max-w-2xl mb-6 leading-tight">
            Technology that works for your business.
          </h2>
          <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed max-w-3xl mb-12 md:mb-16">
            Founded in Leicester, Innowise Solutions has grown into a trusted technology partner for organisations across the UK and beyond. Our AI-driven approach helps businesses automate, optimise, and innovate across every layer of their IT stack.
          </p>

          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-2">
            <motion.div className="bg-brand border border-brand/20 rounded-xl p-4 md:p-6" style={{ boxShadow: glowShadow }}>
              <div className="mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/55">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                </svg>
              </div>
              <h3 className="text-white font-medium text-base mb-2">AI-powered delivery</h3>
              <p className="text-white/65 text-sm leading-relaxed">We combine AI-driven automation with deep engineering expertise to deliver faster, smarter, and with fewer surprises.</p>
            </motion.div>

            <motion.div className="bg-brand border border-brand/20 rounded-xl p-4 md:p-6 flex flex-col justify-center" style={{ boxShadow: glowShadow }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/55 mb-4">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                <path d="M8 10h.01M12 10h.01M16 10h.01" strokeLinecap="round" />
              </svg>
              <h3 className="text-white font-medium text-base mb-2">Intelligent Support</h3>
              <p className="text-white/65 text-sm leading-relaxed">Our AI-powered helpdesk resolves 80% of tickets without human escalation &mdash; average resolution time: 4 minutes.</p>
            </motion.div>

            <motion.div className="bg-brand border border-brand/20 rounded-xl flex flex-col" style={{ boxShadow: glowShadow }}>
              <div className="flex-1 p-4 md:p-6 flex flex-col justify-center border-b border-white/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/55 mb-4">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
                <h3 className="text-white font-medium text-base mb-2">AI-ready security</h3>
                <p className="text-white/65 text-sm leading-relaxed">Our AI-enhanced threat detection and response frameworks keep your infrastructure resilient and compliant.</p>
              </div>
              <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/55 mb-4">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <h3 className="text-white font-medium text-base mb-2">Continuous innovation</h3>
                <p className="text-white/65 text-sm leading-relaxed">We stay ahead of the curve so you do too &mdash; bringing AI capabilities and emerging tech into your roadmap.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="stats"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-12 md:py-16 px-6"
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs text-black/55 dark:text-white/55 uppercase tracking-[0.2em] mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white max-w-3xl mb-12 md:mb-16 leading-tight">
            Built on trust, proven in practice.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              { target: 98, suffix: "%", prefix: "", decimals: 0, desc: "Client retention rate year-on-year" },
              { target: 4, suffix: "hr", prefix: "", decimals: 0, desc: "Average critical incident response time" },
              { target: 24, suffix: "/7", prefix: "", decimals: 0, desc: "Security monitoring and SOC coverage" },
              { target: 0, suffix: "", prefix: "", decimals: 0, desc: "Cost overruns on fixed-scope projects" },
            ].map((stat) => (
              <motion.div
                key={stat.desc}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  boxShadow: "0 12px 30px -8px rgba(74,35,111,0.2)",
                  borderColor: "rgba(74,35,111,0.6)",
                  backgroundColor: "rgba(255,255,255,1)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 20, mass: 0.5 }}
                className="bg-brand border border-brand/20 rounded-xl p-4 md:p-6 group cursor-pointer"
              >
                <div className="text-5xl font-bold text-white mb-2">
                  <CountUp target={stat.target} suffix={stat.suffix} prefix={stat.prefix || ""} decimals={stat.decimals || 0} />
                </div>
                <p className="text-white/55 group-hover:text-white/85 text-sm leading-relaxed transition-colors duration-300">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-block bg-brand text-white rounded-lg px-6 py-2.5 font-semibold text-sm hover:bg-brand-dark transition-all duration-200"
          >
            Start the Conversation &rarr;
          </Link>
        </div>
      </motion.section>

      <motion.section
        id="services"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-12 md:py-16 px-6"
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs text-black/55 dark:text-white/55 uppercase tracking-[0.2em] mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white max-w-2xl mb-12 md:mb-16 leading-tight">
            AI-powered technology services that scale.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "AI Partnered Services",
                desc: "Strategic AI integration and partnered solutions that transform your workflows and unlock new capabilities.",
                img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
              },
              {
                title: "Cloud Services",
                desc: "Migration, architecture and managed operations on AWS and Azure — built for reliability and cost efficiency.",
                img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80",
              },
              {
                title: "Data & Analytics",
                desc: "End-to-end data engineering, BI, and analytics solutions that turn raw data into actionable insights.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
              },
              {
                title: "Managed IT Support",
                desc: "Comprehensive IT support, infrastructure management, and helpdesk services to keep your business running smoothly.",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
              },
              {
                title: "Cyber Security",
                desc: "Proactive threat detection, vulnerability management and 24/7 SOC monitoring powered by Rapid7.",
                img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
              },
              {
                title: "Microsoft Dynamics ERP",
                desc: "Implement, customise and support Dynamics 365 solutions that unify finance, supply chain, and operations.",
                img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
              },
            ].map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <MarqueeLogos />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <Testimonials />
      </motion.div>

      <motion.section
        id="cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-12 md:py-16 px-6"
      >
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden">
          <CtaBackground />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-[1200px] mx-auto text-center px-6 py-10 md:py-14">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}
            >
              Ready to get started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-white/70 text-sm max-w-lg mx-auto mb-8 leading-relaxed"
              style={{ textShadow: "0 1px 16px rgba(0,0,0,0.4)" }}
            >
              Tell us about your challenge and one of our specialists will be in touch within one business day.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="inline-block bg-brand text-white rounded-lg px-8 py-3 font-semibold hover:bg-brand-dark transition-all duration-200"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

function ServiceCard({ service }: { service: { title: string; desc: string; img: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-xl overflow-hidden border border-gray-200 dark:border-border hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-300 cursor-pointer"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image src={service.img} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
          <p className="text-white/90 text-xs uppercase tracking-widest font-medium">
            {service.title}
          </p>
        </div>
      </div>
      <div className="p-4 md:p-6 bg-brand">
        <p className="text-white/65 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">{service.desc}</p>
      </div>
    </motion.div>
  );
}
