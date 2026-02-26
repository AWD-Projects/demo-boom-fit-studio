'use client'

import { motion } from 'framer-motion'
import { BoomLogo } from './BoomLogo'

const coaches = [
  { id: '01', specialty: 'FUNCIONAL + FUERZA' },
  { id: '02', specialty: 'HOT MAT PILATES' },
  { id: '03', specialty: 'HOT BARRE' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export function Coaches() {
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
          [ EQUIPO ]
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-boom-offwhite leading-none mb-20"
          style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
        >
          LOS QUE TE
          <br />
          VAN A MOVER.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((c, i) => (
            <motion.div
              key={c.id}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="aspect-[3/4] bg-boom-blue/8 border border-boom-blue/20 flex items-center justify-center mb-4">
                <BoomLogo size="lg" color="#2255E8" />
              </div>
              <p className="font-display text-boom-offwhite text-2xl leading-none mb-1">
                COACH {c.id}
              </p>
              <p className="font-mono text-boom-gold text-xs tracking-widest uppercase mb-2">
                {c.specialty}
              </p>
              <p className="font-body text-boom-offwhite/35 text-sm">Próximamente</p>
            </motion.div>
          ))}

          {/* Vacante */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="aspect-[3/4] border border-dashed border-boom-gold/40 flex flex-col items-center justify-center gap-4 mb-4 p-6 text-center">
              <span
                className="font-display text-boom-gold/35 leading-none"
                style={{ fontSize: '80px' }}
              >
                !
              </span>
              <p className="font-display text-boom-offwhite text-xl leading-tight">
                ¿ERES EL SIGUIENTE?
              </p>
              <p className="font-body text-boom-offwhite/50 text-xs leading-relaxed">
                Buscamos coaches con método y presencia.
              </p>
            </div>
            <a
              href="mailto:boomfitstudio@gmail.com"
              className="font-mono text-boom-gold text-xs tracking-widest uppercase hover:underline"
            >
              boomfitstudio@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
