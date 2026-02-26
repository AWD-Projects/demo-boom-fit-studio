'use client'

import { motion } from 'framer-motion'
import { RotatingBadge } from './RotatingBadge'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 },
  }),
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-boom-black pt-24 pb-16">
      {/* Fantasma tipográfico */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display text-[38vw] text-boom-offwhite leading-none"
          style={{ opacity: 0.025 }}
        >
          BOOM
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
          {/* Copy */}
          <div className="flex-1 max-w-3xl">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-mono text-boom-gold text-xs tracking-[0.25em] uppercase mb-8"
            >
              [ NARVARTE · CDMX · PRÓXIMAMENTE ]
            </motion.p>

            <div className="overflow-hidden mb-2">
              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-display text-boom-offwhite leading-none"
                style={{ fontSize: 'clamp(72px, 13vw, 160px)' }}
              >
                WHEN IT HITS...
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h1
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-display text-boom-blue leading-none"
                style={{ fontSize: 'clamp(72px, 13vw, 160px)' }}
              >
                YOU'LL FEEL IT
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-display text-boom-offwhite leading-none"
                style={{ fontSize: 'clamp(72px, 13vw, 160px)' }}
              >
                IN EVERY BEAT.
              </motion.h1>
            </div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="w-16 h-px bg-boom-blue mb-8"
            />

            <motion.p
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-body text-boom-offwhite/60 text-lg max-w-sm mb-8 leading-relaxed"
            >
              4 disciplinas. Un solo studio. Narvarte.
            </motion.p>

            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-2 mb-10"
            >
              {['FUNCIONAL', 'FUERZA', 'HOT-MAT PILATES', 'HOT-BARRE'].map((d) => (
                <span
                  key={d}
                  className="font-mono text-xs tracking-widest uppercase px-3 py-1.5 border border-boom-blue/40 text-boom-offwhite/70"
                >
                  {d}
                </span>
              ))}
            </motion.div>

            <motion.div
              custom={7}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#cta"
                className="font-body font-medium text-boom-offwhite bg-boom-blue px-8 py-4 hover:bg-boom-blue/80 transition-colors duration-200 text-sm tracking-wide"
              >
                Reserva tu primera clase gratis
              </a>
              <a
                href="https://instagram.com/boomfitstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-boom-offwhite/50 hover:text-boom-offwhite transition-colors duration-200 self-center tracking-widest uppercase"
              >
                @boomfitstudio →
              </a>
            </motion.div>
          </div>

          {/* Badge lateral */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="hidden lg:flex flex-col items-center gap-8"
          >
            <RotatingBadge size={160} color="#E8C84A" />
            <span
              className="font-display text-boom-gold/30 leading-none select-none"
              style={{ fontSize: '120px' }}
            >
              !
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
