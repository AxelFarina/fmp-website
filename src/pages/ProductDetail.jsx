import { useEffect, useRef, useState } from 'react'
import ContactCta from '../components/ContactCta.jsx'
import { Reveal } from '../components/ui.jsx'
import { products, productCats } from '../content/products.js'

/* Tap a feature tile — the navy spotlight shows its detail. Auto-rotates until tapped. */
function FeatureExplorer({ items, hint, cta }) {
  const [active, setActive] = useState(0)
  const [locked, setLocked] = useState(false)

  // switching products swaps the items array — start over
  useEffect(() => { setActive(0); setLocked(false) }, [items])

  useEffect(() => {
    if (locked || items.length < 2) return
    const id = setInterval(() => setActive((v) => (v + 1) % items.length), 3600)
    return () => clearInterval(id)
  }, [locked, items.length])

  const safe = Math.min(active, items.length - 1)
  const it = items[safe]

  return (
    <div className="section" style={{ paddingTop: 30, paddingBottom: 30 }}>
      <div className="svc-grid svc-grid-fit">
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            className={`svc-tile ${i === safe ? 'on' : ''}`}
            onClick={() => { setActive(i); setLocked(true) }}
          >
            <div className="ico">{item.icon}</div>
            <div className="lbl">{item.title}</div>
          </button>
        ))}
      </div>
      <p className="svc-hint">{hint}</p>
      <div className="svc-spot">
        <div className="svc-spot-in" key={safe}>
          <div className="svc-spot-ico">{it.icon}</div>
          <div>
            <h3>{it.title}</h3>
            <p style={{ marginBottom: 18 }}>{it.desc}</p>
            <a href="#/contacto" className="svc-cta">{cta} →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Named items with descriptions become a tap-to-open accordion — first one open. */
function LeadsAccordion({ sec }) {
  const [open, setOpen] = useState(0)
  return (
    <Reveal>
      <div className="prose">
        <h2>{sec.title}</h2>
        {sec.intro && <p>{sec.intro}</p>}
      </div>
      <div className="faq faq-tight">
        {sec.items.map((it, i) => (
          <div key={it.lead} className={`faq-item ${open === i ? 'open' : ''}`}>
            <button type="button" className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{it.lead}</span>
              <span className="faq-caret">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <div className="faq-a">{it.text}</div>}
          </div>
        ))}
      </div>
    </Reveal>
  )
}

/* Sequential content becomes numbered visual cards. */
function StepCards({ sec }) {
  return (
    <Reveal>
      <div className="prose"><h2>{sec.title}</h2>{sec.intro && <p>{sec.intro}</p>}</div>
      <div className="pstep-grid">
        {sec.items.map((it, i) => (
          <div key={it.lead} className="pstep">
            <div className="pstep-num">0{i + 1}</div>
            <div className="pstep-title">{it.lead}</div>
            <p>{it.text}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

/* Animated progress bar that fills when scrolled into view. */
function Bar({ label, value }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          el.style.width = `${value}%`
          io.disconnect()
        }
      }),
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value])
  return (
    <div className="bar-row">
      <div className="bar-top">
        <span>{label}</span>
        <span className="mono accent">{value}%</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" ref={ref} style={{ width: 0 }} />
      </div>
    </div>
  )
}

function Section({ sec }) {
  if (sec.type === 'text') {
    return (
      <Reveal>
        {sec.title && <h2>{sec.title}</h2>}
        {sec.paras.map((p) => <p key={p} style={{ fontSize: 15.5, lineHeight: 1.75, color: 'rgba(15,42,68,.72)' }}>{p}</p>)}
      </Reveal>
    )
  }
  if (sec.type === 'leads') return <LeadsAccordion sec={sec} />
  if (sec.type === 'steps') return <StepCards sec={sec} />
  if (sec.type === 'modules') {
    return (
      <Reveal>
        <div className="prose"><h2>{sec.title}</h2>{sec.intro && <p>{sec.intro}</p>}</div>
        <div className="module-grid">
          {sec.items.map((m) => (
            <div key={m.label} className="module-tile">
              <div className="module-ico">{m.icon}</div>
              <div className="module-lbl">{m.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    )
  }
  if (sec.type === 'bars') {
    return (
      <Reveal>
        <div className="prose"><h2>{sec.title}</h2></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
          {sec.items.map((b) => <Bar key={b.label} label={b.label} value={b.value} />)}
        </div>
      </Reveal>
    )
  }
  return null
}

export default function ProductDetail({ t, lang, slug }) {
  const prod = Object.hasOwn(products, slug) ? products[slug] : null
  const pp = t.productPage
  const [expanded, setExpanded] = useState(false)

  // collapse the read-more fold when switching products
  useEffect(() => { setExpanded(false) }, [slug])

  if (!prod) {
    return (
      <div className="page-hero">
        <h1>404</h1>
        <p><a href="#/productos" className="accent">{t.navProducts} →</a></p>
      </div>
    )
  }

  const d = prod[lang]
  const related = Object.entries(products).filter(([s, p]) => p.cat === prod.cat && s !== slug)
  const intro = expanded ? d.intro : d.intro.slice(0, 1)
  const hasMore = d.intro.length > 1

  return (
    <>
      <header className="page-hero" style={{ textAlign: 'left', paddingBottom: 30 }}>
        <div className="aurora aurora-v" style={{ right: -220, top: -200 }} />
        <div className="detail-wrap detail-hero" style={{ position: 'relative', zIndex: 1 }}>
          <div className="detail-cols" style={{ alignItems: 'center' }}>
            <div>
              <div className="hero-badge"><span className="accent">✦</span> {productCats[lang][prod.cat]}</div>
              <h1 style={{ margin: '0 0 16px' }}>{d.name}</h1>
              <p style={{ margin: '0 0 14px', fontSize: 17, color: 'rgba(15,42,68,.8)' }}>{d.tagline}</p>
              {intro.map((p) => (
                <p key={p} style={{ margin: '0 0 14px', fontSize: 15.5, lineHeight: 1.7, color: 'rgba(15,42,68,.6)' }}>{p}</p>
              ))}
              {hasMore && (
                <button type="button" className="read-more" onClick={() => setExpanded(!expanded)}>
                  {expanded ? `− ${pp.less}` : `+ ${pp.more}`}
                </button>
              )}
              <div className="hero-ctas" style={{ justifyContent: 'flex-start', marginTop: 24 }}>
                <a href="#/contacto" className="btn-hero">{pp.demo}</a>
                <a href="#/contacto" className="btn-hero-ghost">{pp.contact}</a>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img src={prod.img} alt={d.name} className="detail-img" style={{ filter: 'saturate(.85)' }} />
              {prod.logo && (
                <img src={prod.logo} alt="" style={{ position: 'absolute', left: 18, bottom: 14, height: 46, objectFit: 'contain', filter: 'drop-shadow(0 2px 10px rgba(0,0,0,.7))' }} />
              )}
              {prod.stat && (
                <div className="stat-float">
                  <div className="stat-float-num">{prod.stat.value}</div>
                  <div className="stat-float-lbl">{prod.stat.label[lang]}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {d.highlights.length > 0 && (
        <FeatureExplorer items={d.highlights} hint={pp.hint} cta={pp.demo} />
      )}

      <div className="detail-wrap">
        <div className="detail-cols">
          <div>
            {d.sections.map((sec, i) => <Section key={i} sec={sec} />)}
            {prod.badge && (
              <img src={prod.badge} alt="SAP Partner" style={{ marginTop: 34, height: 52, borderRadius: 10 }} />
            )}
          </div>
          <div className="detail-aside">
            <div className="check-card">
              <h4>{pp.asideTitle}</h4>
              <p style={{ margin: '0 0 18px', fontSize: 14, lineHeight: 1.6, color: 'rgba(15,42,68,.6)' }}>{pp.asideText}</p>
              <a href="#/contacto" className="btn-primary" style={{ display: 'inline-block' }}>{pp.demo}</a>
            </div>
            {related.length > 0 && (
              <div className="check-card">
                <h4>{pp.related.toUpperCase()}</h4>
                <ul style={{ gap: 13 }}>
                  {related.map(([s, p]) => (
                    <li key={s}>
                      <a href={`#/productos/${s}`} className="accent" style={{ fontWeight: 600 }}>{p[lang].name} →</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <ContactCta t={t} />
    </>
  )
}
