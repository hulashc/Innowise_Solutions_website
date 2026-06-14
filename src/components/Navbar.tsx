"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const mobileRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const isHome = pathname === "/";
  const progress = useTransform(scrollY, [0, 200], [0, 1]);

  const navBg = useTransform(progress, [0, 1], ["rgba(255,255,255,0)", "rgba(255,255,255,0.9)"]);
  const navBlur = useTransform(progress, [0, 1], ["blur(0px)", "blur(12px)"]);
  const navBorder = useTransform(progress, [0, 1], ["1px solid rgba(229,231,235,0)", "1px solid rgba(229,231,235,1)"]);
  const textColor = useTransform(progress, [0, 1], isHome ? ["#ffffff", "#000000"] : ["#000000", "#000000"]);
  const hamburgerColor = useTransform(progress, [0, 1], isHome ? ["rgba(255,255,255,0.8)", "#000000"] : ["#000000", "#000000"]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        backgroundColor: navBg,
        backdropFilter: navBlur,
        borderBottom: navBorder,
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="w-full pl-6 pr-1 md:pr-2 h-20 flex items-center">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl tracking-tight"
        >
          <motion.span style={{ color: textColor }} className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
              <rect x="2" y="2" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 14h12M14 8v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="14" cy="14" r="3" fill="currentColor" fillOpacity="0.3" />
            </svg>
            Innowise Solutions
          </motion.span>
        </Link>

        <div className="flex-1" />
        <div className="hidden md:flex items-center gap-6 bg-white rounded-lg px-4 py-1 mr-4 md:mr-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="relative text-sm font-semibold text-black/80 hover:text-brand transition-all duration-200 uppercase tracking-wider group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: hamburgerColor }}
          className="md:hidden transition-all duration-200 cursor-pointer p-2 hover:text-black"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white transition-all duration-200 py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
