'use client'

import { useEffect, useState } from 'react'
import { BoomLogo } from './BoomLogo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-boom-black/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <BoomLogo size="sm" color="#2255E8" />

        <a
          href="#cta"
          className="font-mono text-xs tracking-[0.18em] uppercase px-5 py-2.5 border border-boom-blue text-boom-blue hover:bg-boom-blue hover:text-boom-offwhite transition-colors duration-200"
        >
          Reserva tu lugar
        </a>
      </div>
    </nav>
  )
}
