import { useEffect, useState } from 'react'
import ContactCta from '../components/ContactCta.jsx'
import { Reveal } from '../components/ui.jsx'

/* Tap a tile — the spotlight panel shows that service. Auto-rotates until the user takes over. */
function ServiceExplorer({ t }) {
  const s = t.services
  const [active, setActive] = useState(0)
  const [locked, setLocked] = useState(false)

  useEffect(() => {
    if (locked) return
    const id = setInterval(() => setActive((v) => (v + 1) % s.items.length), 4000)
    return () => clearInterval(id)
  }, [locked, s.items.length])

  const it = s.items[active]
  const tags = s.tagsList[active] || []

  return (
    <div className="section" style={{ paddingTop: 20 }}>
      <div className="svc-grid">
        {s.items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            className={`svc-tile ${i === active ? 'on' : ''}`}
            onClick={() => { setActive(i); setLocked(true) }}
          >
            <div className="ico">{item.icon}</div>
            <div className="lbl">{item.title}</div>
          </button>
        ))}
      </div>
      <p className="svc-hint">{s.hint}</p>
      <div className="svc-spot">
        <div className="svc-spot-in" key={active}>
          <div className="svc-spot-ico">{it.icon}</div>
          <div>
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
            <div className="svc-tags">
              {tags.map((tg) => <span key={tg} className="svc-tag">{tg}</span>)}
            </div>
            <a href="#/contacto" className="svc-cta">{s.spotCta} →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Auto-advancing timeline; clicking a step jumps to it. */
function Timeline({ t }) {
  const s = t.services
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep((v) => (v + 1) % s.steps.length), 3800)
    return () => clearInterval(id)
  }, [s.steps.length])

  const fillPct = (step / (s.steps.length - 1)) * 100

  return (
    <div className="timeline">
      <div className="aurora aurora-v" style={{ left: '50%', top: -280, transform: 'translateX(-50%)' }} />
      <div className="tl-head">
        <div className="kicker">{s.processKicker}</div>
        <h2>{s.processTitle}</h2>
        <p>{s.processSub}</p>
      </div>
      <div className="tl-wrap">
        <div className="tl-track">
          <div className="tl-fill" style={{ width: `${fillPct}%` }} />
        </div>
        <div className="tl-grid">
          {s.steps.map((p, i) => (
            <div
              key={p.num}
              className={`tl-step ${i === step ? 'active' : ''} ${i < step ? 'passed' : ''}`}
              onClick={() => setStep(i)}
            >
              <div className="tl-node">{p.num}</div>
              <div className="tl-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Services({ t }) {
  const s = t.services

  return (
    <>
      <header className="page-hero">
        <div className="aurora aurora-v" style={{ right: -200, top: -180 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-badge"><span className="accent">✦</span> {t.navServices}</div>
          <h1>{s.title}</h1>
          <p>{s.sub}</p>
        </div>
      </header>

      <ServiceExplorer t={t} />

      <Reveal>
        <Timeline t={t} />
      </Reveal>
      <ContactCta t={t} />
    </>
  )
}
