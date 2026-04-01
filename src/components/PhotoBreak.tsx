"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function PhotoBreak() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[50vh] md:h-[70vh] overflow-hidden bg-bg-dark">
      <motion.div style={{ y }} className="absolute inset-0 scale-[1.2]">
        <Image
          src="https://qcfsyxgfwfeiorfymnfi.supabase.co/storage/v1/object/public/images/damu-logo.png"
          alt="Казахстанская ассоциация Даму"
          fill
          className="object-contain opacity-40"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-[clamp(1.5rem,5vw,4rem)] font-bold text-text-light text-center leading-[1.1] px-6 max-w-3xl"
        >
          48 проектов.
          <br />
          <span className="font-light text-text-light/50">20 регионов. Один Казахстан.</span>
        </motion.p>
      </div>

      {/* Top / bottom gradients */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bg to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
