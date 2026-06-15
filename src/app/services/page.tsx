"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ServicesScrollytelling from "@/components/ServicesScrollytelling";
import CtaBackground from "@/components/CtaBackground";
export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative pt-28 md:pt-36 pb-20 md:pb-24 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs text-black/55 dark:text-white/55 uppercase tracking-[0.2em] mb-6"
          >
            What We Do
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="text-[1.5rem] sm:text-5xl lg:text-7xl font-bold text-black dark:text-white max-w-3xl leading-[0.9] sm:leading-[0.85] mb-4 md:mb-6"
          >
            Systems that scale with you.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-sm md:text-base text-black/65 dark:text-white/65 max-w-xl mb-8 md:mb-10 leading-relaxed"
          >
            From AI-powered cloud infrastructure to intelligent security and smart ERP &mdash; we design, build, and manage the technology that powers your growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-brand text-white rounded-md px-6 py-2.5 font-semibold text-sm hover:bg-brand-dark transition-all duration-200"
            >
              Let&rsquo;s talk about your business
            </Link>
          </motion.div>
        </div>
      </section>

      <ServicesScrollytelling />



      {/* ALL SERVICES */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs text-black/55 dark:text-white/55 uppercase tracking-[0.2em] mb-4">All Services</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white max-w-2xl mb-6 leading-tight">
              Everything your stack needs to perform.
            </h2>
            <p className="text-black/65 dark:text-white/65 text-sm leading-relaxed max-w-2xl">
              We go deep on your infrastructure, data, and interfaces &mdash; identifying exactly where performance breaks down and building the systems that hold under real pressure.
            </p>
          </motion.div>

          <AllServicesTabs />
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-16 md:py-24 px-6 border-t border-gray-200 dark:border-border">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xs text-black/55 dark:text-white/55 uppercase tracking-[0.2em] mb-4"
          >
            Our Approach
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold text-black dark:text-white max-w-3xl mb-12 md:mb-16 leading-tight"
          >
            Precision at every layer, from architecture to output.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: "Tailored to Your Business",
                desc: "Every solution is built from scratch for your specific needs. We don't retrofit templates or apply one-size-fits-all approaches.",
                badge: "System audit complete",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black/55 dark:text-white/55">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ),
              },
              {
                title: "Enterprise-Grade Reliability",
                desc: "We prioritise long-term maintainability, security, and performance over short-term speed. Built to last from day one.",
                badge: "99.9% uptime guarantee",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black/55 dark:text-white/55">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                title: "Full Visibility & Control",
                desc: "Weekly reviews, live staging environments, open documentation, and direct access to your engineering team.",
                badge: "Always transparent",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black/55 dark:text-white/55">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ),
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col gap-4"
              >
                <div className="mb-1">{item.icon}</div>
                <h3 className="text-black dark:text-white font-medium text-base">{item.title}</h3>
                <p className="text-black/65 dark:text-white/65 text-sm leading-relaxed">{item.desc}</p>
                <div className="inline-flex items-center gap-2 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-black/45 dark:text-white/45 text-xs">{item.badge}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section id="cta-services" className="py-16 md:py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden">
            <CtaBackground />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 text-center py-12 md:py-20 px-6">
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
                  className="inline-block bg-brand text-white rounded-full px-8 py-3 font-semibold hover:bg-brand-dark transition-all duration-200"
                >
                  Book a Consultation
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AllServicesTabs() {
  const [active, setActive] = useState(0);
  const tabs = [
    {
      title: "AI Partnered Services",
      desc: "We embed AI into your existing workflows, building custom models, automation pipelines, and intelligent agents that augment your team rather than replace it. From chatbot interfaces to predictive analytics, every solution is designed for real-world impact.",
      items: [
        "Custom AI model development and deployment",
        "Intelligent process automation and RPA",
        "AI-powered chatbots and virtual assistants",
        "Predictive analytics and forecasting",
        "Data pipeline engineering for AI readiness",
        "Model monitoring and ongoing optimisation",
      ],
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    },
    {
      title: "Cloud Services",
      desc: "We design, migrate, and manage cloud infrastructure on AWS and Azure that scales with your business. Our AI-optimised approach ensures you only pay for what you use while getting enterprise-grade reliability and performance.",
      items: [
        "Cloud migration strategy and execution",
        "AI-optimised architecture and auto-scaling",
        "Cost management and FinOps",
        "Kubernetes and container orchestration",
        "Hybrid and multi-cloud solutions",
        "24/7 managed operations and support",
      ],
      img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    },
    {
      title: "Data & Analytics",
      desc: "Raw data is your most underutilised asset. We build end-to-end data platforms that collect, clean, and transform your data into actionable insights — powering better decisions at every level of your organisation.",
      items: [
        "Data warehouse and lake architecture",
        "Business intelligence dashboards (Power BI, Tableau)",
        "Real-time data streaming and processing",
        "Data governance and quality frameworks",
        "AI-driven anomaly detection and reporting",
        "Legacy data migration and integration",
      ],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "Managed IT Support",
      desc: "Keep your business running with comprehensive IT support that covers everything from helpdesk to infrastructure management. We act as your extended IT department, resolving issues before they become problems.",
      items: [
        "24/7 helpdesk with SLA-backed response times",
        "Infrastructure monitoring and management",
        "Hardware and software procurement",
        "Network design and maintenance",
        "Patch management and system updates",
        "Employee onboarding and offboarding IT",
      ],
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    },
    {
      title: "Cyber Security",
      desc: "Protect your business with proactive, AI-driven security operations. We provide continuous threat monitoring, vulnerability management, and incident response — backed by Rapid7 and aligned to ISO 27001 and Cyber Essentials frameworks.",
      items: [
        "AI-driven threat detection and response",
        "Vulnerability assessments and penetration testing",
        "24/7 SOC monitoring powered by Rapid7",
        "Incident response planning and execution",
        "Compliance (ISO 27001, GDPR, Cyber Essentials)",
        "Security awareness training for teams",
      ],
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    },
    {
      title: "Microsoft Dynamics ERP",
      desc: "Transform your finance, supply chain, and operations with Dynamics 365. We handle end-to-end implementation, customisation, and support — including AI enhancements that automate workflows and surface intelligence where it matters most.",
      items: [
        "Dynamics 365 implementation and migration",
        "AI-enhanced finance and supply chain automation",
        "Legacy ERP migration and data cleansing",
        "Custom workflow and integration development",
        "User training and change management",
        "Ongoing support and managed upgrades",
      ],
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10 md:mb-14">
        {tabs.map((t, i) => (
          <button
            key={t.title}
            onClick={() => setActive(i)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              i === active
                ? "bg-brand text-white shadow-md shadow-brand/30"
                : "bg-gray-100 dark:bg-surface text-black/65 dark:text-white/65 hover:bg-gray-200 dark:bg-gray-700 hover:text-black/70 dark:hover:text-white/70"
            }`}
          >
            {t.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start"
        >
          <div>
            <p className="text-black/65 dark:text-white/65 text-sm leading-relaxed mb-6">
              {tabs[active].desc}
            </p>
            <div className="space-y-3 mb-8">
              {tabs[active].items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-brand mt-0.5 shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-black/65 dark:text-white/65 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block bg-brand text-white rounded-md px-6 py-2.5 font-semibold text-sm hover:bg-brand-dark transition-all duration-200"
            >
               Discuss Your Project
            </Link>
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-gray-100 dark:bg-surface border border-gray-200 dark:border-border">
            <Image src={tabs[active].img} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
