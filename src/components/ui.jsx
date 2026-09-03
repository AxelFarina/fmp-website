import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks.js'

/* Counts up from 0 when scrolled into view. Parses "+9000" style strings. */
export function Counter({ value, duration = 1600 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(value)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const target = parseInt(String(value).replace(/[^\d]/g, ''), 10)
    if (!target || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const prefix = String(value).match(/^[^\d]*/)[0]
    setDisplay(prefix + '0')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / duration)
          const eased = 1 - Math.pow(1 - p, 3)
          setDisplay(prefix + Math.round(target * eased).toLocaleString('en-US'))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      })
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])
  return <span ref={ref}>{display}</span>
}

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
