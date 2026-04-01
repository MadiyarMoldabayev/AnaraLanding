"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-44 px-6 md:px-12 bg-bg">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted text-[10px] uppercase tracking-[5px] mb-20"
        >
          (01) {'\u2014'} История
        </motion.p>

        {/* Big editorial quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(1.6rem,4vw,3.2rem)] font-light leading-[1.25] text-text-dark mb-20 max-w-4xl"
        >
          {'\u00AB'}Содействуя развитию каждого гражданина,
          <span className="text-accent"> мы содействуем развитию</span> всего
          Казахстана{'\u00BB'}
        </motion.blockquote>

        {/* Two-column body */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 md:col-start-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1.5px] bg-accent" />
              <span className="text-text-muted text-[10px] uppercase tracking-[3px]">Об организации</span>
            </div>
            <p className="text-text-body text-[15px] leading-[1.85]">
              ОЮЛ «Казахстанская ассоциация Даму» — некоммерческая организация,
              основанная в январе 2019 года в Астане. Мы оказываем услуги по реализации
              социально значимых проектов, направленных на развитие гражданского общества,
              поддержку молодёжи и повышение качества государственных услуг.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="md:col-span-5 md:col-start-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1.5px] bg-accent" />
              <span className="text-text-muted text-[10px] uppercase tracking-[3px]">Масштаб</span>
            </div>
            <p className="text-text-body text-[15px] leading-[1.85]">
              За время деятельности организация реализовала около 48 социально значимых проектов
              в сферах образования, молодёжной политики, гендерного равенства,
              противодействия коррупции и экстремизму, а также поддержки социального
              предпринимательства во всех 20 регионах Казахстана.
            </p>
          </motion.div>
        </div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 pt-10 border-t border-border"
        >
          <div className="flex flex-wrap gap-2.5">
            {[
              "Молодёжная политика",
              "Антикоррупция",
              "Социальное предпринимательство",
              "Гендерное равенство",
              "Мониторинг госуслуг",
              "Финансовая грамотность",
              "Противодействие экстремизму",
              "Устойчивое развитие",
              "Креативные индустрии",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 border border-border rounded-full text-text-body text-[11px] uppercase tracking-[1.5px] hover:text-text-dark hover:border-text-dark/20 hover:bg-surface transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
