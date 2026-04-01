"use client";

import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Zhas Project",
    description:
      "Малые гранты до 1 000 000 тенге для молодёжи категории NEET (18-34 лет). 280+ грантов в 20 регионах Казахстана.",
    year: "2022 — 2024",
    tags: ["Молодёжь", "Гранты"],
  },
  {
    num: "02",
    title: "Общественный мониторинг госуслуг",
    description:
      'Оценка качества государственных услуг методом «тайный покупатель» — 10 исследований по заказу Управления социального развития Астаны.',
    year: "2019",
    tags: ["Мониторинг", "Госуслуги"],
  },
  {
    num: "03",
    title: "ISO 37001 — Антикоррупция",
    description:
      "Обучение по внедрению системы менеджмента борьбы со взяточничеством. Семинары для НПО и госслужащих.",
    year: "2019 — 2024",
    tags: ["Антикоррупция", "ISO"],
  },
  {
    num: "04",
    title: "Школа женского лидерства",
    description:
      "Обучение 70+ женщин основам социального предпринимательства для достижения экономической независимости.",
    year: "2019",
    tags: ["Женщины", "Лидерство"],
  },
  {
    num: "05",
    title: "50 лучших социальных проектов",
    description:
      "Ежегодная ярмарка и награждение лучших социальных проектов предпринимателей Астаны. Статуэтки «Үздік жоба».",
    year: "2024",
    tags: ["Ярмарка", "Астана"],
  },
  {
    num: "06",
    title: "Профилактика экстремизма",
    description:
      "Комплекс мер по профилактике религиозного экстремизма: обучение распознаванию вербовщиков в социальных сетях.",
    year: "2019 — 2024",
    tags: ["Безопасность"],
  },
  {
    num: "07",
    title: "Финансовая грамотность",
    description:
      "Курсы по финансовой грамотности для молодых семей: бюджетирование, управление долгами, запуск бизнес-проектов.",
    year: "2025",
    tags: ["Финансы"],
  },
  {
    num: "08",
    title: "Карта социальных проблем столицы",
    description:
      "Картирование и анализ социальных проблем Астаны для выявления ключевых направлений улучшения жизни горожан.",
    year: "2019",
    tags: ["Аналитика"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-44 px-6 md:px-12 bg-bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted text-[10px] uppercase tracking-[5px] mb-6"
        >
          (02) {'\u2014'} Проекты
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-text-light mb-20 leading-[1.1]"
        >
          Ключевые
          <br />
          <span className="text-text-muted font-light">направления.</span>
        </motion.h2>

        <div>
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.03, duration: 0.6 }}
              className="group border-t border-border-light py-7 md:py-9 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline cursor-default hover:pl-2 transition-all duration-500"
            >
              <div className="md:col-span-1">
                <span className="text-text-muted text-[11px] font-mono">{project.num}</span>
              </div>

              <div className="md:col-span-4">
                <h3 className="font-display text-lg md:text-xl font-semibold text-text-light group-hover:text-accent transition-colors duration-500 mb-2 md:mb-0">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 md:mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase tracking-[1px] text-text-muted/60 border border-border-light/50 px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5">
                <p className="text-text-muted text-[13px] leading-[1.7]">
                  {project.description}
                </p>
              </div>

              <div className="md:col-span-2 flex items-center justify-between md:flex-col md:items-end md:gap-2">
                <span className="text-text-muted/50 text-[11px] font-mono">{project.year}</span>
                <span className="text-text-muted/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-500 text-base">
                  {'\u2192'}
                </span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border-light" />
        </div>
      </div>
    </section>
  );
}
