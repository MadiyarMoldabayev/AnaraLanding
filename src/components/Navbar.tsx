"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "История", href: "#about" },
  { label: "Проекты", href: "#projects" },
  { label: "Партнёры", href: "#partners" },
  { label: "Контакты", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <a href="#" className="font-display text-lg font-bold tracking-tight text-text-dark">
          Анара Битебаева
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-text-body text-[11px] uppercase tracking-[2.5px] hover:text-text-dark transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-6 h-4 cursor-pointer"
          aria-label="Menu"
        >
          <span className={`absolute left-0 w-full h-[1.5px] bg-text-dark transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 w-full h-[1.5px] bg-text-dark transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`} />
        </button>
      </motion.nav>

      {/* Mobile fullscreen overlay */}
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-10"
      >
        {links.map((l, i) => (
          <motion.a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: open ? 0.1 + i * 0.08 : 0, duration: 0.5 }}
            className="font-display text-4xl font-light text-text-dark hover:text-text-muted transition-colors"
          >
            {l.label}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}
