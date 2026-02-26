'use client'

import { motion } from 'framer-motion'

const disciplines = [
  {
    num: '01',
    name: 'FUNCIONAL',
    desc: 'Circuitos de alta intensidad diseñados para construir capacidad real. No solo quema — transforma.',
  },
  {
    num: '02',
    name: 'FUERZA',
    desc: 'Progresión con propósito. Método estructurado. Para quienes van en serio y miden su avance.',
  },
  {
    num: '03',
    name: 'HOT-MAT PILATES',
    desc: 'Sala caliente, trabajo profundo. Core, movilidad y fuerza desde adentro. Control total.',
  },
  {
    num: '04',
    name: 'HOT-BARRE',
    desc: 'Influenciado por ballet y funcional. Pequeños movimientos. Grandes resultados. Precisión al límite.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export function Disciplines() {
  return (
    <section className="bg-boom-gray py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-mono text-boom-gold text-xs tracking-[0.25em] uppercase mb-6"
        >
          [ 04 DISCIPLINAS ]
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-boom-offwhite leading-none mb-4"
          style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
        >
          ELIGE TU RITMO.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-body text-boom-offwhite/50 text-lg mb-16"
        >
          Alta intensidad. Método real. Sin filtros.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-boom-midgray">
          {disciplines.map((d, i) => (
            <motion.div
              key={d.num}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-boom-black hover:bg-[#0f0f0f] transition-colors duration-200 p-8 md:p-10 border-t border-boom-blue group"
            >
              <p className="font-mono text-boom-gold text-xs tracking-widest mb-4">
                {d.num}
              </p>
              <h3 className="font-display text-boom-offwhite text-4xl md:text-5xl leading-none mb-4 group-hover:text-boom-blue transition-colors duration-300">
                {d.name}
              </h3>
              <p className="font-body text-boom-offwhite/55 text-sm leading-relaxed max-w-xs">
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
