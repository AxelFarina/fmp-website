import { useRef } from 'react'
import { useReveal } from '../hooks.js'

/* Renders either an image icon (asset path) or a plain glyph. */
export function Ico({ icon }) {
  if (typeof icon === 'string' && icon.startsWith('assets/')) {
    return <img src={icon} alt="" loading="lazy" />
  }
  return <>{icon}</>
}

export function Reveal({ children, className = '' }) {
  const ref = useReveal()
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

/* Card whose glow follows the cursor. */
export function SpotCard({ className = '', style, children }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const card = ref.current
    const glow = card?.querySelector('.spot-glow')
    if (!glow) return
    const r = card.getBoundingClientRect()
    glow.style.left = `${e.clientX - r.left - 170}px`
    glow.style.top = `${e.clientY - r.top - 170}px`
    glow.style.opacity = '1'
  }
  const onLeave = () => {
    const glow = ref.current?.querySelector('.spot-glow')
    if (glow) glow.style.opacity = '0'
  }
  return (
    <div ref={ref} className={className} style={style} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="spot-glow" />
      {children}
    </div>
  )
}
