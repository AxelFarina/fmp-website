import { useEffect, useState } from 'react'
import { Reveal } from '../components/ui.jsx'

const DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=' +
  encodeURIComponent('FMP Technology Services, C. Luis Padilla 53, Santo Domingo')

/* Live clock in Santo Domingo time. */
function Clock({ label }) {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = () => setTime(new Date().toLocaleTimeString('es-DO', {
      timeZone: 'America/Santo_Domingo', hour: '2-digit', minute: '2-digit',
    }))
    fmt()
    const id = setInterval(fmt, 15000)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="clock-chip">
      <span className="dot" />
      {label} · {time}
    </span>
  )
}

/* Single-select chip row. Pass otherLbl/otherPh to add an "Other" chip that reveals a free-text input. */
function ChipRow({ options, value, onPick, otherLbl, otherPh }) {
  const isPreset = options.includes(value)
  const [other, setOther] = useState(() => Boolean(value) && !isPreset)
  const otherOn = other || (Boolean(value) && !isPreset)

  return (
    <>
      <div className="wiz-chips">
        {options.map((o) => (
          <button key={o} type="button" className={`wiz-chip ${!otherOn && value === o ? 'on' : ''}`}
            onClick={() => { setOther(false); onPick(value === o ? '' : o) }}>
            {o}
          </button>
        ))}
        {otherLbl && (
          <button type="button" className={`wiz-chip ${otherOn ? 'on' : ''}`}
            onClick={() => { setOther(!otherOn); onPick('') }}>
            <span>{otherOn ? '✓' : '+'}</span>{otherLbl}
          </button>
        )}
      </div>
      {otherLbl && otherOn && (
        <input
          className="wiz-input"
          style={{ maxWidth: 320, marginTop: 12 }}
          placeholder={otherPh}
          value={isPreset ? '' : value}
          onChange={(e) => onPick(e.target.value)}
          autoFocus
        />
      )}
    </>
  )
}

/* Four-step conversational request wizard — chips over dropdowns, summary before send. */
function Wizard({ c }) {
  const w = c.wiz
  const [step, setStep] = useState(0)
  const [interests, setInterests] = useState(() => new Set())
  const [f, setF] = useState({})

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const pick = (k) => (v) => setF({ ...f, [k]: v })
  const toggleInterest = (i) => setInterests((prev) => {
    const next = new Set(prev)
    if (next.has(i)) next.delete(i)
    else next.add(i)
    return next
  })

  const emailOk = /\S+@\S+\.\S+/.test(f.email || '')
  const detailsOk = (f.nombre || '').trim() && emailOk
  const canNext = step !== 2 || detailsOk

  const picked = w.interests.filter((_, i) => interests.has(i))

  const submit = () => {
    const lines = [
      `${w.sumInterest}: ${picked.join(', ') || '—'}`,
      `${c.fCompany}: ${f.empresa || '—'}${f.ciudad ? ` · ${f.ciudad}` : ''}`,
      `${c.fRole}: ${f.cargo || '—'} · ${c.fSize}: ${f.personas || '—'}`,
      `${c.fName}: ${f.nombre || ''} ${f.apellido || ''}`,
      `${c.fEmail}: ${f.email || ''}`,
      `${c.fPhone}: ${f.tel || '—'}`,
      '',
      f.mensaje || '',
    ].join('\n')
    window.location.href = `mailto:comercial@fmp.com.do?subject=${encodeURIComponent(c.mailSubject)}&body=${encodeURIComponent(lines)}`
  }

  return (
    <div className="wiz">
      <div className="wiz-in">
        <div className="wiz-track"><div className="wiz-fill" style={{ width: `${((step + 1) / 4) * 100}%` }} /></div>
        <div className="wiz-steps">
          {w.steps.map((s, i) => (
            <span key={s} className={`wiz-step-lbl ${i <= step ? 'on' : ''}`}>{i + 1} · {s}</span>
          ))}
        </div>

        <div className="wiz-body" key={step}>
          {step === 0 && (
            <>
              <h3>{w.q1}</h3>
              <p className="wiz-sub">{w.q1Sub}</p>
              <div className="wiz-chips">
                {w.interests.map((it, i) => (
                  <button key={it} type="button" className={`wiz-chip ${interests.has(i) ? 'on' : ''}`}
                    onClick={() => toggleInterest(i)}>
                    <span>{interests.has(i) ? '✓' : '+'}</span>{it}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <h3>{w.q2}</h3>
              <p className="wiz-sub">{w.q2Sub}</p>
              <div className="wiz-group">{c.fCompany}</div>
              <input className="wiz-input" style={{ maxWidth: 420 }} value={f.empresa || ''} onChange={set('empresa')} />
              <div className="wiz-group">{c.fCity}</div>
              <ChipRow options={c.cities} value={f.ciudad || ''} onPick={pick('ciudad')} otherLbl={c.otherLbl} otherPh={c.otherPh} />
              <div className="wiz-group">{c.fRole}</div>
              <ChipRow options={c.roles} value={f.cargo || ''} onPick={pick('cargo')} otherLbl={c.otherLbl} otherPh={c.otherPh} />
              <div className="wiz-group">{c.fSize}</div>
              <ChipRow options={c.sizes} value={f.personas || ''} onPick={pick('personas')} />
            </>
          )}

          {step === 2 && (
            <>
              <h3>{w.q3}</h3>
              <p className="wiz-sub">{w.q3Sub}</p>
              <div className="wiz-inputs">
                <input className="wiz-input" placeholder={c.fName} value={f.nombre || ''} onChange={set('nombre')} />
                <input className="wiz-input" placeholder={c.fLast} value={f.apellido || ''} onChange={set('apellido')} />
                <input className="wiz-input" type="email" placeholder={c.fEmail} value={f.email || ''} onChange={set('email')} />
                <input className="wiz-input" placeholder={`${c.fPhone} · 000-000-0000`} value={f.tel || ''} onChange={set('tel')} />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h3>{w.q4}</h3>
              <p className="wiz-sub">{w.q4Sub}</p>
              <textarea className="wiz-input" rows="3" placeholder={c.fMsg} value={f.mensaje || ''} onChange={set('mensaje')} />
              <div className="wiz-group">{w.summaryTitle}</div>
              {picked.length > 0 && (
                <div className="wiz-sum-row"><span className="wiz-sum-lbl">{w.sumInterest}</span>{picked.join(' · ')}</div>
              )}
              {(f.empresa || f.ciudad || f.cargo || f.personas) && (
                <div className="wiz-sum-row">
                  <span className="wiz-sum-lbl">{w.sumCompany}</span>
                  {[f.empresa, f.ciudad, f.cargo, f.personas].filter(Boolean).join(' · ')}
                </div>
              )}
              <div className="wiz-sum-row">
                <span className="wiz-sum-lbl">{w.sumContact}</span>
                {[`${f.nombre || ''} ${f.apellido || ''}`.trim(), f.email, f.tel].filter(Boolean).join(' · ')}
              </div>
            </>
          )}
        </div>

        <div className="wiz-nav">
          {step > 0
            ? <button type="button" className="wiz-back" onClick={() => setStep(step - 1)}>← {w.back}</button>
            : <span />}
          {step === 2 && !detailsOk && <span className="wiz-note">{w.emailReq}</span>}
          {step < 3
            ? <button type="button" className="wiz-next" disabled={!canNext} onClick={() => setStep(step + 1)}>{w.next} →</button>
            : <button type="button" className="wiz-next" onClick={submit}>{c.fBtn} ✦</button>}
        </div>
      </div>
    </div>
  )
}

export default function Contact({ t }) {
  const c = t.contact

  return (
    <>
      <header className="page-hero">
        <div className="aurora aurora-v" style={{ right: -200, top: -180 }} />
        <div className="aurora aurora-p" style={{ left: -160, top: 40 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-badge"><span className="accent">✦</span> {t.navContact}</div>
          <h1>{c.title}</h1>
          <p>{c.sub}</p>
          <div className="hero-chips">
            <Clock label={c.clockLbl} />
            <span className="clock-chip"><span className="dot" />{c.replyBadge}</span>
          </div>
        </div>
      </header>

      {/* channel cards */}
      <div className="section" style={{ paddingTop: 10, paddingBottom: 40 }}>
        <div className="chan-grid">
          <Reveal>
            <div className="chan-card">
              <div className="chan-ico">✉</div>
              <h3>{c.writeTitle}</h3>
              <p className="chan-val">{c.writeText}<br /><strong style={{ color: 'var(--head)' }}>comercial@fmp.com.do</strong></p>
              <div className="chan-actions">
                <a href="mailto:comercial@fmp.com.do" className="chan-btn">✉ {c.chanWriteAction}</a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="chan-card">
              <div className="chan-ico">✆</div>
              <h3>{c.callTitle}</h3>
              <p className="chan-val">{c.callText}<br /><strong style={{ color: 'var(--head)' }}>{c.phone}</strong></p>
              <div className="chan-actions">
                <a href="tel:+18096202177" className="chan-btn">✆ {c.chanCallAction}</a>
                <a href="https://wa.me/18297620971" target="_blank" rel="noreferrer" className="chan-btn">✆ {c.chanWaAction}</a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="chan-card">
              <div className="chan-ico">◉</div>
              <h3>{c.visitTitle}</h3>
              <p className="chan-val">{c.address}</p>
              <div className="chan-actions">
                <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="chan-btn">◉ {c.chanVisitAction}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* request wizard */}
      <div className="section" style={{ paddingTop: 30, paddingBottom: 50 }}>
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div className="kicker">{t.productPage.asideTitle}</div>
          <h2>{c.formTitle}</h2>
          <p>{c.formSub}</p>
        </div>
        <Reveal>
          <Wizard c={c} />
        </Reveal>
      </div>

      {/* map */}
      <div className="section" style={{ paddingTop: 20 }}>
        <Reveal>
          <div className="map-frame">
            <div className="map-frame-in">
              <iframe
                title="FMP Technology Services"
                src="https://maps.google.com/maps?q=FMP%20-%20technology%20services%20C.%20Luis%20Padilla%2053%2C%20Santo%20Domingo&t=m&z=17&output=embed&iwloc=near"
                style={{ filter: 'saturate(.9)' }}
                loading="lazy"
                allowFullScreen
              />
              <div className="map-addr">
                <div className="lbl">{c.visitTitle.toUpperCase()}</div>
                <div className="val">{c.address}</div>
                <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="chan-btn">◉ {c.chanVisitAction}</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  )
}
