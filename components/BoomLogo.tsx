'use client'

type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type LogoProps = { size?: LogoSize; color?: string }

const sizeMap: Record<LogoSize, string> = {
  xs: 'text-xl',
  sm: 'text-3xl',
  md: 'text-5xl',
  lg: 'text-7xl',
  xl: 'text-9xl'
}

export function BoomLogo({ size = 'md', color = '#F2F0EB' }: LogoProps) {
  const circleStyle = {
    display: 'inline-block',
    width: '0.68em',
    height: '0.68em',
    borderRadius: '50%',
    border: `0.1em solid ${color}`,
    verticalAlign: 'middle',
    marginBottom: '0.08em',
    marginLeft: '-0.02em',
    marginRight: '-0.02em',
  }

  return (
    <span
      className={`font-display tracking-tight leading-none ${sizeMap[size]}`}
      style={{ color, letterSpacing: '-0.01em' }}
    >
      B<span style={circleStyle} /><span style={circleStyle} />M
    </span>
  )
}
