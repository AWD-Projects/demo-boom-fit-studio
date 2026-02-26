'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    if (!name || !email) return
    window.location.href = `mailto:boomfitstudio@gmail.com?subject=Reserva primera clase — ${name}&body=Nombre: ${name}%0AEmail: ${email}`
    setSubmitted(true)
  }

  return (
    <section id="cta" className="relative bg-boom-blue py-32 md:py-40 overflow-hidden">
      {/* Fantasma */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display text-white leading-none"
          style={{ fontSize: '30vw', opacity: 0.05 }}
        >
          BOOM
        </span>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-mono text-boom-black/50 text-xs tracking-[0.25em] uppercase mb-8"
        >
          [ PRIMERA CLASE ]
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-white leading-none mb-6"
          style={{ fontSize: 'clamp(56px, 10vw, 120px)' }}
        >
          TU PRIMERA
          <br />
          CLASE ES GRATIS.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-body text-white/75 text-lg mb-12"
        >
          Reserva tu lugar antes de la apertura. Sin compromisos.
        </motion.p>

        {!submitted ? (
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/10 border border-white/25 text-white placeholder:text-white/40 px-4 py-3.5 text-sm font-body focus:outline-none focus:border-white w-full"
            />
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border border-white/25 text-white placeholder:text-white/40 px-4 py-3.5 text-sm font-body focus:outline-none focus:border-white w-full"
            />
            <button
              onClick={handleSubmit}
              className="font-mono text-sm tracking-[0.18em] uppercase bg-boom-black text-boom-offwhite px-8 py-4 hover:bg-boom-gold hover:text-boom-black transition-colors duration-200 w-full"
            >
              RESERVA AHORA →
            </button>
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-white text-4xl"
          >
            ¡LISTO. TE ESPERAMOS.
          </motion.p>
        )}

        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://instagram.com/boomfitstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest text-white/60 hover:text-white transition-colors uppercase"
          >
            @boomfitstudio
          </a>
          <span className="hidden sm:block font-mono text-white/30 text-xs">·</span>
          <a
            href="mailto:boomfitstudio@gmail.com"
            className="font-mono text-xs tracking-widest text-white/60 hover:text-white transition-colors"
          >
            boomfitstudio@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}
