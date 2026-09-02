import { useEffect, useRef, useState } from 'react'

/*
 * Intro splash: the FMP mark blooms in the center while pulse rings expand,
 * then the overlay fades out and the page staggers in behind it.
 */
export default function Splash() {
  const rootRef = useRef(null)
  const bgRef = useRef(null)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const timers = []
    timers.push(setTimeout(() => {
      if (bgRef.current) {
        bgRef.current.style.transition = 'opacity .9s ease'
        bgRef.current.style.opacity = '0'
      }
      if (rootRef.current) {
        rootRef.current.style.transition = 'opacity .9s ease'
        rootRef.current.style.opacity = '0'
        rootRef.current.style.pointerEvents = 'none'
      }
    }, 1500))
    timers.push(setTimeout(() => setGone(true), 2500))
    return () => timers.forEach(clearTimeout)
  }, [])

  if (gone) return null
  return (
    <div className="splash" ref={rootRef}>
      <div className="splash-bg" ref={bgRef} />
      <div className="splash-ring" />
      <div className="splash-ring r2" />
      <div className="splash-ring r3" />
      <div className="splash-center">
        <img src="assets/fmp-mark.svg" alt="FMP" className="splash-mark" />
      </div>
      <div className="splash-word">FMP · TECHNOLOGY SERVICES</div>
    </div>
  )
}
