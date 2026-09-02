import { useEffect, useRef, useState } from 'react'
import { geoEquirectangular, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import world from 'world-atlas/countries-110m.json'

/*
 * Flat dotted map of the Americas with pulsing pins on FMP's markets
 * (the countries covered by their fiscal-localization add-ons) and arcs
 * back to headquarters in Santo Domingo.
 */

const PINS = [
  { name: 'SANTO DOMINGO · HQ', lon: -69.93, lat: 18.47, hq: true },
  { name: 'MÉXICO', lon: -99.13, lat: 19.43 },
  { name: 'GUATEMALA', lon: -90.52, lat: 14.63 },
  { name: 'VENEZUELA', lon: -66.9, lat: 10.48 },
]

const W = 960
const H = 560

function makeProjection() {
  // window over Central America + the Caribbean: lon -120..-45, lat -8..34
  const lonSpan = (120 - 45) * (Math.PI / 180)
  const scale = W / lonSpan
  return geoEquirectangular().center([-82.5, 15]).scale(scale).translate([W / 2, H / 2])
}

export default function RegionMap({ t, dark = false }) {
  const canvasRef = useRef(null)
  const [pins, setPins] = useState([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const proj = makeProjection()

    // paint land into an offscreen canvas so we can sample where dots belong
    const off = document.createElement('canvas')
    off.width = W
    off.height = H
    const octx = off.getContext('2d', { willReadFrequently: true })
    const land = feature(world, world.objects.countries)
    const opath = geoPath(proj, octx)
    octx.fillStyle = '#fff'
    octx.beginPath()
    opath(land)
    octx.fill()
    const data = octx.getImageData(0, 0, W, H).data

    canvas.width = W * 2
    canvas.height = H * 2
    const ctx = canvas.getContext('2d')
    ctx.setTransform(2, 0, 0, 2, 0, 0)
    ctx.clearRect(0, 0, W, H)

    // dotted land — brighter dots on the dark theme
    const dotRgb = dark ? '120,200,240' : '27,117,183'
    const step = 7
    for (let y = step / 2; y < H; y += step) {
      for (let x = step / 2; x < W; x += step) {
        if (data[(Math.round(y) * W + Math.round(x)) * 4 + 3] > 128) {
          const d = Math.hypot(x - W / 2, y - H / 2) / (W / 2)
          ctx.fillStyle = `rgba(${dotRgb},${Math.max(0.14, 0.5 - d * 0.34).toFixed(3)})`
          ctx.beginPath()
          ctx.arc(x, y, 1.5, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    // arcs from HQ to each market
    const [hx, hy] = proj([PINS[0].lon, PINS[0].lat])
    for (const p of PINS.slice(1)) {
      const [px, py] = proj([p.lon, p.lat])
      const mx = (hx + px) / 2
      const my = Math.min(hy, py) - Math.hypot(px - hx, py - hy) * 0.22
      const grad = ctx.createLinearGradient(hx, hy, px, py)
      grad.addColorStop(0, dark ? 'rgba(142,216,248,.85)' : 'rgba(0,28,65,.75)')
      grad.addColorStop(1, dark ? 'rgba(70,189,235,.3)' : 'rgba(70,189,235,.35)')
      ctx.strokeStyle = grad
      ctx.lineWidth = 1.4
      ctx.beginPath()
      ctx.moveTo(hx, hy)
      ctx.quadraticCurveTo(mx, my, px, py)
      ctx.stroke()
    }

    // expose projected pin positions (as % so CSS pins track responsive scaling)
    setPins(PINS.map((p) => {
      const [x, y] = proj([p.lon, p.lat])
      return { ...p, left: (x / W) * 100, top: (y / H) * 100 }
    }))
  }, [dark])

  return (
    <div className="map-section">
      <div className="aurora aurora-v" style={{ left: '50%', top: -300, transform: 'translateX(-50%)' }} />
      <div className="map-copy">
        <div className="kicker">{t.globeKicker}</div>
        <h2>{t.globeTitle}</h2>
        <p>{t.globeSub}</p>
      </div>
      <div className="map-stage">
        <canvas ref={canvasRef} style={{ aspectRatio: `${W} / ${H}` }} />
        {pins.map((p) => (
          <div key={p.name} className="map-pin" style={{ left: `${p.left}%`, top: `${p.top}%` }}>
            <div className="map-pin-ring" />
            <div className={`map-pin-dot ${p.hq ? 'hq' : ''}`} />
            <div className="map-pin-lbl">{p.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
