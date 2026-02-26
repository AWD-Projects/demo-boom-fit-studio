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

export function Location() {
  return (
    <section className="bg-boom-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-mono text-boom-gold text-xs tracking-[0.25em] uppercase mb-16"
        >
          [ DÓNDE ]
        </motion.p>

        <div className="relative">
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p
              className="font-display text-boom-offwhite leading-none"
              style={{ fontSize: 'clamp(56px, 11vw, 130px)' }}
            >
              NARVARTE
            </p>
            <p
              className="font-display text-boom-blue/50 leading-none"
              style={{ fontSize: 'clamp(56px, 11vw, 130px)' }}
            >
              BENITO JUÁREZ
            </p>
            <p
              className="font-display text-boom-offwhite leading-none"
              style={{ fontSize: 'clamp(56px, 11vw, 130px)' }}
            >
              CDMX
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <span className="font-mono text-xs tracking-[0.2em] bg-boom-blue text-boom-offwhite px-4 py-2.5">
              [ PRÓXIMA APERTURA ]
            </span>
            <p className="font-body text-boom-offwhite/45 text-sm max-w-xs leading-relaxed">
              La dirección exacta se revelará antes de la apertura. Únete a la lista para ser
              el primero en saberlo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
