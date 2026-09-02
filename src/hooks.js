import { useEffect, useRef, useState } from 'react'

/* Fade-and-rise an element in when it scrolls into view. */
export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('shown')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

/* Tiny hash router: '#/', '#/nosotros', '#/productos/<slug>', ... */
const PAGES = new Set(['nosotros', 'servicios', 'productos', 'partnership', 'contacto'])

function parseHash() {
  const raw = (window.location.hash || '#/').replace(/^#\/?/, '')
  const parts = raw.split('/').filter(Boolean)
  if (parts.length === 0) return { page: 'home', slug: null }
  if (parts[0] === 'productos' && parts[1]) return { page: 'producto', slug: parts[1] }
  if (PAGES.has(parts[0])) return { page: parts[0], slug: null }
  return { page: 'home', slug: null }
}

export function useRoute() {
  const [route, setRoute] = useState(parseHash)
  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return route
}
