"use client";

import { motion } from "framer-motion";

const partners = [
  "Министерство культуры и информации РК",
  "НАО «Центр поддержки гражданских инициатив»",
  "Управление внутренней политики Астаны",
  "Управление молодёжной политики Астаны",
  "Благотворительный фонд «Halyk»",
  "Партия «AMANAT»",
];

export default function Partners() {
  return (
    <section id="partners" className="py-28 md:py-44 px-6 md:px-12 bg-bg">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted text-[10px] uppercase tracking-[5px] mb-6"
        >
          (03) {'\u2014'} Партнёры
        </motion.p>

        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-5"
          >
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-text-dark leading-[1.1] mb-6">
              Сотрудничество<span className="text-accent">.</span>
            </h2>
            <p className="text-text-body text-[14px] leading-[1.8] max-w-sm">
              Мы работаем с государственными органами, международными организациями
              и общественными фондами для максимального социального воздействия.
            </p>
          </motion.div>

          <div className="md:col-span-6 md:col-start-7">
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className="group flex items-center justify-between py-5 border-b border-border hover:border-text-dark/15 transition-all duration-400 cursor-default"
              >
                <span className="text-text-body text-[14px] md:text-[15px] group-hover:text-text-dark group-hover:translate-x-2 transition-all duration-400">
                  {partner}
                </span>
                <span className="text-text-muted/40 text-[10px] font-mono group-hover:text-accent transition-colors duration-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
