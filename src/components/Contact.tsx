"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const contacts = [
  { label: "+7 776 702 77 27", href: "tel:+77767027727", type: "Телефон" },
  { label: "npodamu@mail.ru", href: "mailto:npodamu@mail.ru", type: "Email" },
  { label: "@oul_kad", href: "https://instagram.com/oul_kad", type: "Instagram" },
  { label: "nponews.kz", href: "https://nponews.kz", type: "Сайт" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-44 px-6 md:px-12 bg-bg-dark overflow-hidden">
      {/* Background photo with heavy overlay */}
      <div className="absolute inset-0">
        <Image
          src="/anara.jpg"
          alt=""
          fill
          className="object-cover object-top opacity-[0.07]"
          sizes="100vw"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted text-[10px] uppercase tracking-[5px] mb-6"
        >
          (04) {'\u2014'} Контакты
        </motion.p>

        <div className="grid md:grid-cols-12 gap-16 md:gap-8">
          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6"
          >
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold text-text-light leading-[0.95] mb-8">
              Давайте
              <br />
              работать
              <br />
              <span className="text-text-muted font-light">вместе</span>
              <span className="text-accent">.</span>
            </h2>
            <p className="text-text-muted text-[14px] leading-[1.8] max-w-md">
              Мы открыты для сотрудничества с государственными органами,
              НПО, бизнесом и международными организациями по реализации
              социально значимых проектов.
            </p>
          </motion.div>

          {/* Right — contact list */}
          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-end">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group flex items-center justify-between py-6 border-b border-border-light hover:border-accent/30 transition-all duration-500"
              >
                <div>
                  <p className="text-text-muted/50 text-[9px] uppercase tracking-[3px] mb-1.5">
                    {c.type}
                  </p>
                  <p className="text-text-light text-base md:text-lg font-display font-medium group-hover:text-accent group-hover:translate-x-2 transition-all duration-500">
                    {c.label}
                  </p>
                </div>
                <span className="text-text-muted/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-500 text-lg">
                  &#x2197;
                </span>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-accent" />
              <p className="text-text-muted text-[13px]">г. Астана, Казахстан</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
