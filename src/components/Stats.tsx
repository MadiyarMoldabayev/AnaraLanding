"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { number: 48, suffix: "", label: "Проектов", sub: "реализовано с 2019" },
  { number: 280, suffix: "+", label: "Грантов", sub: "для молодёжи NEET" },
  { number: 20, suffix: "", label: "Регионов", sub: "по всему Казахстану" },
  { number: 70, suffix: "+", label: "Женщин", sub: "обучено предпринимательству" },
];

export default function Stats() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-bg">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted text-[10px] uppercase tracking-[5px] mb-16"
        >
          Цифры
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="bg-bg p-6 md:p-10"
            >
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-text-dark leading-none mb-3">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              </p>
              <p className="text-text-dark text-xs uppercase tracking-[2px] font-medium mb-1">
                {stat.label}
              </p>
              <p className="text-text-muted text-[11px]">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
