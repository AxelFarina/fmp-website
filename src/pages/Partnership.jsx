import { useEffect, useState } from 'react'
import ContactCta from '../components/ContactCta.jsx'
import { Reveal } from '../components/ui.jsx'

/* Both forms POST to formsubmit.co, same as the original site. */
const FORM_ENDPOINT = 'https://formsubmit.co/alfredo.torres@fmp.com.do'

const scrollToForms = () => document.getElementById('ref-forms')?.scrollIntoView({ behavior: 'smooth' })

/* Tile + spotlight explorer for the Soluciones / Beneficios tabs. */
function TabExplorer({ items, cta }) {
  const [active, setActive] = useState(0)
  const [locked, setLocked] = useState(false)

  useEffect(() => { setActive(0); setLocked(false) }, [items])

  useEffect(() => {
    if (locked || items.length < 2) return
    const id = setInterval(() => setActive((v) => (v + 1) % items.length), 3600)
    return () => clearInterval(id)
  }, [locked, items.length])

  const safe = Math.min(active, items.length - 1)
  const it = items[safe]

  return (
    <>
      <div className="svc-grid svc-grid-fit">
        {items.map((item, i) => (
          <button
            key={item.lead}
            type="button"
            className={`svc-tile ${i === safe ? 'on' : ''}`}
            onClick={() => { setActive(i); setLocked(true) }}
          >
            <div className="ico">{item.icon}</div>
            <div className="lbl">{item.lead}</div>
          </button>
        ))}
      </div>
      <div className="svc-spot" style={{ marginTop: 26 }}>
        <div className="svc-spot-in" key={safe}>
          <div className="svc-spot-ico">{it.icon}</div>
          <div>
            <h3>{it.lead}</h3>
            <p style={{ marginBottom: 18 }}>{it.text}</p>
            <button type="button" className="svc-cta" onClick={scrollToForms}>{cta} →</button>
          </div>
        </div>
      </div>
    </>
  )
}

/* Numbered visual cards for the sequential tabs (Cómo funciona / Procesos). */
function TabSteps({ items }) {
  return (
    <div className="pstep-grid pstep-grid-4">
      {items.map((it, i) => (
        <div key={it.lead} className="pstep">
          <div className="pstep-num">0{i + 1}</div>
          <div className="pstep-title">{it.lead}</div>
          <p>{it.text}</p>
        </div>
      ))}
    </div>
  )
}

function Faq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {items.map((f, i) => (
        <div key={f.q} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button type="button" className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{f.q}</span>
            <span className="faq-caret">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <div className="faq-a">{f.a}</div>}
        </div>
      ))}
    </div>
  )
}

export default function Partnership({ t }) {
  const p = t.partnership
  const [tab, setTab] = useState(0)
  const active = p.tabs[tab]
  const isSteps = active.id === 'how' || active.id === 'process'

  return (
    <>
      <header className="page-hero">
        <div className="aurora aurora-p" style={{ right: -180, top: -160 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-badge"><span className="accent">✦</span> Partnership</div>
          <h1>{p.title}</h1>
          <p>{p.sub}</p>
          <div className="hero-stats" style={{ justifyContent: 'center', marginTop: 36 }}>
            {p.heroStats.map((s) => (
              <div key={s.lbl} className="hstat" style={{ textAlign: 'left' }}>
                <div className="hstat-num">{s.num}</div>
                <div className="hstat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* tabs */}
      <div className="section" style={{ paddingTop: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <div className="lab-tabs">
            {p.tabs.map((tb, i) => (
              <button key={tb.id} className={i === tab ? 'on' : ''} onClick={() => setTab(i)}>{tb.label}</button>
            ))}
          </div>
        </div>
        <p className="tab-intro">{active.intro}</p>
        {isSteps ? <TabSteps items={active.items} /> : <TabExplorer items={active.items} cta={p.tabCta} />}
        {active.outro && <p className="tab-outro">{active.outro}</p>}
      </div>

      {/* FAQ */}
      <div className="section" style={{ paddingTop: 30 }}>
        <div className="section-head">
          <h2>{p.faqTitle}</h2>
        </div>
        <Reveal>
          <Faq items={p.faq} />
        </Reveal>
      </div>

      {/* forms */}
      <div className="section" id="ref-forms" style={{ paddingTop: 30 }}>
        <div className="section-head">
          <h2>{p.formsTitle}</h2>
        </div>
        <div className="bento-grid-2" style={{ maxWidth: 1100, margin: '0 auto', alignItems: 'start' }}>
          <Reveal>
            <form className="contact-form" action={FORM_ENDPOINT} method="POST">
              <input type="hidden" name="_subject" value="Nuevo registro de referidor — FMP" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <h3 style={{ margin: '0 0 4px', fontSize: 21, color: '#0B2239' }}>{p.regTitle}</h3>
              <p style={{ margin: '0 0 10px', fontSize: 13.5, lineHeight: 1.6, color: 'rgba(15,42,68,.6)' }}>{p.regText}</p>
              <label>{p.regName}<input name="nombre" required placeholder={p.regNamePh} /></label>
              <label>{p.regEmail}<input name="correo" type="email" required placeholder={p.regEmailPh} /></label>
              <label>{p.regSpec}<textarea name="especializacion" rows="3" required placeholder={p.regSpecPh} /></label>
              <label style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10, fontWeight: 400, fontSize: 13, lineHeight: 1.5 }}>
                <input type="checkbox" name="terminos" required style={{ marginTop: 3 }} />
                <span>{p.regTerms}</span>
              </label>
              <button type="submit">{p.regBtn}</button>
              <p style={{ margin: 0, fontSize: 11.5, color: 'rgba(15,42,68,.45)', textAlign: 'center' }}>{p.regPrivacy}</p>
            </form>
          </Reveal>
          <Reveal>
            <form className="contact-form" action={FORM_ENDPOINT} method="POST">
              <input type="hidden" name="_subject" value="Nuevo referido único — FMP" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <h3 style={{ margin: '0 0 4px', fontSize: 21, color: '#0B2239' }}>{p.refTitle}</h3>
              <p style={{ margin: '0 0 10px', fontSize: 13.5, lineHeight: 1.6, color: 'rgba(15,42,68,.6)' }}>{p.refText}</p>
              <label>{p.refName}<input name="nombre_referidor" required placeholder={p.refNamePh} /></label>
              <label>{p.refCompany}<input name="empresa_referida" required placeholder={p.refCompanyPh} /></label>
              <label>{p.refContact}<input name="contacto_principal" required placeholder={p.refContactPh} /></label>
              <label>{p.refType}<input name="tipo_negocio" required placeholder={p.refTypePh} /></label>
              <label>{p.refDesc}<textarea name="descripcion_oportunidad" rows="3" placeholder={p.refDescPh} /></label>
              <label style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10, fontWeight: 400, fontSize: 13, lineHeight: 1.5 }}>
                <input type="checkbox" name="terminos" required style={{ marginTop: 3 }} />
                <span>{p.regTerms}</span>
              </label>
              <button type="submit">{p.refBtn}</button>
            </form>
          </Reveal>
        </div>
        <Reveal>
          <p className="tab-outro" style={{ marginTop: 40 }}>{p.closing}</p>
        </Reveal>
      </div>

      <ContactCta t={t} />
    </>
  )
}
