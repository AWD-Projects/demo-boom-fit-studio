'use client'

import { motion } from 'framer-motion'

export function RotatingBadge({ size = 140, color = '#E8C84A' }: { size?: number; color?: string }) {
  const r = size * 0.38
  const cx = size / 2
  const text = 'MOVE · BREATH · BEGIN AGAIN · '

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <path
            id="circle-path"
            d={`M ${cx},${cx} m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`}
          />
        </defs>
        <text
          fontSize={size * 0.077}
          fill={color}
          fontFamily="var(--font-mono)"
          letterSpacing="2"
          textAnchor="start"
        >
          <textPath href="#circle-path">{text.repeat(2)}</textPath>
        </text>
      </svg>
    </motion.div>
  )
}
