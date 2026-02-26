'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
}

export function Schedule() {
  return (
    <section className="bg-boom-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-mono text-boom-gold text-xs tracking-[0.25em] uppercase mb-6"
        >
          [ HORARIOS ]
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
          AQUÍ NO HAY EXCUSAS.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-body text-boom-offwhite/50 text-lg mb-20"
        >
          Encuentra tu ventana.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-0">
          {[
            { label: 'ENTRE SEMANA', days: 'Lunes – Viernes', hours: '6:00 AM — 10:00 PM' },
            { label: 'FIN DE SEMANA', days: 'Sábado – Domingo', hours: '9:00 AM — 12:00 PM' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              custom={i + 3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`flex-1 p-10 md:p-14 border border-boom-blue/20 ${
                i === 0 ? 'md:border-r-0' : ''
              }`}
            >
              <p className="font-mono text-boom-gold text-xs tracking-[0.2em] uppercase mb-3">
                {item.label}
              </p>
              <p className="font-body text-boom-offwhite/40 text-sm mb-4">{item.days}</p>
              <p
                className="font-display text-boom-offwhite leading-none"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
              >
                {item.hours}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="font-mono text-boom-offwhite/25 text-xs tracking-[0.15em] mt-8">
          * HORARIOS SUJETOS A CONFIRMACIÓN AL MOMENTO DE APERTURA
        </p>
      </div>
    </section>
  )
}
