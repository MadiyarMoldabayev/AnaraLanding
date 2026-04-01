"use client";

import { motion } from "framer-motion";

const socials = [
  { label: "Instagram", href: "https://instagram.com/oul_kad" },
  { label: "Email", href: "mailto:npodamu@mail.ru" },
  { label: "nponews.kz", href: "https://nponews.kz" },
];

const navLinks = [
  { label: "История", href: "#about" },
  { label: "Проекты", href: "#projects" },
  { label: "Партнёры", href: "#partners" },
  { label: "Контакты", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 bg-bg border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <p className="font-display text-2xl font-bold text-text-dark mb-3">
              Анара Битебаева
            </p>
            <p className="text-text-muted text-[12px] leading-relaxed max-w-xs">
              Исполнительный директор ОЮЛ «Казахстанская ассоциация Даму».
              Астана, Казахстан.
            </p>
          </motion.div>

          {/* Nav */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="text-text-muted text-[10px] uppercase tracking-[3px] mb-4">Навигация</p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-text-body text-[13px] hover:text-text-dark transition-colors duration-300"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-text-muted text-[10px] uppercase tracking-[3px] mb-4">Соцсети</p>
            <div className="flex flex-col gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  className="text-text-body text-[13px] hover:text-text-dark transition-colors duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-[11px]">
            {'\u00A9'} 2026 ОЮЛ «Казахстанская ассоциация Даму»
          </p>
          <a
            href="#"
            className="text-text-muted text-[11px] uppercase tracking-[2px] hover:text-text-dark transition-colors"
          >
            Наверх {'\u2191'}
          </a>
        </div>
      </div>
    </footer>
  );
}
