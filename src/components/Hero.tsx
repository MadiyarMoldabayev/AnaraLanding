"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-bg overflow-hidden">
      {/* Split layout: text left, photo right */}
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left — text content */}
        <div className="flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-20 pt-32 md:pt-20 relative z-10 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-text-muted text-[10px] uppercase tracking-[4px]">
              Астана, Казахстан
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold leading-[0.88] tracking-[-0.03em] mb-6"
          >
            <span className="block text-[clamp(2.8rem,8vw,6.5rem)] text-text-dark">
              АНАРА
            </span>
            <span className="block text-[clamp(2.8rem,8vw,6.5rem)] text-text-dark">
              БИТЕБАЕВА
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-20 h-[1.5px] bg-text-dark mb-6 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-text-body text-[13px] md:text-[15px] uppercase tracking-[3px] leading-relaxed mb-10 max-w-md"
          >
            Исполнительный директор
            <br />
            ОЮЛ «Казахстанская ассоциация Даму»
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="flex items-center gap-8"
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-text-dark text-bg text-xs uppercase tracking-[2px] font-medium hover:bg-accent transition-colors duration-500"
            >
              Узнать больше
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="text-text-body text-xs uppercase tracking-[2px] hover:text-text-dark transition-colors border-b border-text-body/30 hover:border-text-dark pb-0.5"
            >
              Связаться
            </a>
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[60vh] md:h-auto order-1 md:order-2"
        >
          <Image
            src="/anara.jpg"
            alt="Анара Битебаева"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Gradient overlays for blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent md:bg-none" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-bg/30 via-transparent to-transparent" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-bg/20 via-transparent to-bg/10" />
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-border origin-left z-20"
      />
    </section>
  );
}
