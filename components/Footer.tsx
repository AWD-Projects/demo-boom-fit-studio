import { BoomLogo } from './BoomLogo'

export function Footer() {
  return (
    <footer className="bg-boom-black border-t border-boom-gray py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <BoomLogo size="xs" color="#2255E8" />
          <p className="font-mono text-boom-offwhite/25 text-xs tracking-[0.2em] uppercase">
            NARVARTE · BENITO JUÁREZ · CDMX
          </p>
          <div className="flex gap-6">
            <a
              href="https://instagram.com/boomfitstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-boom-offwhite/40 text-xs tracking-widest uppercase hover:text-boom-offwhite transition-colors"
            >
              INSTAGRAM
            </a>
            <a
              href="mailto:boomfitstudio@gmail.com"
              className="font-mono text-boom-offwhite/40 text-xs tracking-widest uppercase hover:text-boom-offwhite transition-colors"
            >
              EMAIL
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-boom-gray">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-boom-offwhite/18 text-xs tracking-widest text-center sm:text-left">
              © 2025 BOOM FITNESS STUDIO · TODOS LOS DERECHOS RESERVADOS
            </p>
            <a
              href="https://www.amoxtli.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-boom-offwhite/25 text-xs tracking-wide hover:text-boom-offwhite/50 transition-colors"
            >
              POWERED BY AMOXTLI<sup className="text-[8px]">®</sup>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
