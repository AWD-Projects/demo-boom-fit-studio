export function Ticker() {
  const content =
    'NOT HERE TO BLEND IN · HERE TO BOOM · FUNCIONAL · FUERZA · HOT-MAT PILATES · HOT-BARRE · READY · SET · BOOM · '

  return (
    <div className="bg-boom-blue py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-ticker" style={{ width: 'max-content' }}>
        {[content, content, content].map((text, i) => (
          <span
            key={i}
            className="font-display text-boom-offwhite text-2xl tracking-wide px-0"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
