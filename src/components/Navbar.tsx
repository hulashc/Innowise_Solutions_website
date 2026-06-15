"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const { scrollY } = useScroll();
  const isHome = pathname === "/";
  const progress = useTransform(scrollY, [0, 200], [0, 1]);

  const lightBg = ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"];
  const darkBg = ["rgba(26,26,46,0)", "rgba(26,26,46,0.95)"];
  const navBg = useTransform(progress, [0, 1], isDark ? darkBg : lightBg);
  const navBlur = useTransform(progress, [0, 1], ["blur(0px)", "blur(12px)"]);
  const lightBorder = ["1px solid rgba(229,231,235,0)", "1px solid rgba(229,231,235,1)"];
  const darkBorder = ["1px solid rgba(42,42,62,0)", "1px solid rgba(42,42,62,1)"];
  const navBorder = useTransform(progress, [0, 1], isDark ? darkBorder : lightBorder);

  const homeTextColors = isDark ? ["#ffffff", "#e5e5e5"] : ["#ffffff", "#000000"];
  const innerTextColors = isDark ? ["#e5e5e5", "#e5e5e5"] : ["#000000", "#000000"];
  const textColor = useTransform(progress, [0, 1], isHome ? homeTextColors : innerTextColors);

  const homeHamburger = isDark ? ["rgba(255,255,255,0.8)", "#e5e5e5"] : ["rgba(255,255,255,0.8)", "#000000"];
  const innerHamburger = isDark ? ["#e5e5e5", "#e5e5e5"] : ["#000000", "#000000"];
  const hamburgerColor = useTransform(progress, [0, 1], isHome ? homeHamburger : innerHamburger);

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
      <div className="w-full pl-8 pr-2 md:pr-4 h-24 flex items-center">
        <Link
          href="/"
          className="flex items-center gap-3 font-bold text-2xl tracking-tight"
        >
          <motion.span style={{ color: textColor }} className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 28 28" fill="none" className="shrink-0">
              <rect x="2" y="2" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 14h12M14 8v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="14" cy="14" r="3" fill="currentColor" fillOpacity="0.3" />
            </svg>
            Innowise Solutions
          </motion.span>
        </Link>

        <div className="flex-1" />
        <div className="hidden md:flex items-center gap-8 mr-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="relative text-base font-semibold hover:text-brand transition-all duration-200 uppercase tracking-wider group"
            >
              <motion.span style={{ color: textColor }}>{link.label}</motion.span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <motion.button
          onClick={toggleTheme}
          style={{ color: hamburgerColor }}
          className="transition-all duration-200 cursor-pointer p-2 hover:text-brand mr-1"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </motion.button>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: hamburgerColor }}
          className="md:hidden transition-all duration-200 cursor-pointer p-2 hover:text-black dark:hover:text-white"
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/90 dark:bg-[#0d0d1a]/95 backdrop-blur-md border-t border-white/5 overflow-hidden"
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
