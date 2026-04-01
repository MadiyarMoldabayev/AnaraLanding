"use client";

import { motion } from "framer-motion";

const items = [
  "48 проектов",
  "20 регионов",
  "С 2019 года",
  "280+ грантов",
  "Zhas Project",
  "ISO 37001",
  "Социальное предпринимательство",
  "НКО",
];

export default function Marquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-5 border-b border-border overflow-hidden bg-bg"
    >
      <div className="animate-marquee whitespace-nowrap flex">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center mx-6 md:mx-10">
            <span className="font-display text-sm md:text-base font-medium text-text-muted uppercase tracking-[4px]">
              {item}
            </span>
            <span className="ml-6 md:ml-10 w-1 h-1 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </motion.div>
  );
}
