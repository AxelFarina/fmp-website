import { useState } from 'react'
import ContactCta from '../components/ContactCta.jsx'
import { Reveal, SpotCard, Counter } from '../components/ui.jsx'
import { industriesFor } from '../i18n.js'

/* Interactive: tap government processes on the left, watch them slot into the SAP board. */
function GovBuilder({ t }) {
  const g = t.about.gov
  const [sel, setSel] = useState(() => new Set([0, 2]))

  const toggle = (i) => setSel((prev) => {
    const next = new Set(prev)
    if (next.has(i)) next.delete(i)
    else next.add(i)
    return next
  })

  const picked = g.procs.map((p, i) => ({ p, i })).filter((x) => sel.has(x.i))

  return (
    <div className="section">
      <div className="section-head">
        <div className="kicker">{t.about.stateKicker}</div>
        <h2>{t.about.stateTitle}</h2>
        <p>{g.line}</p>
      </div>
      <div className="gov-grid">
        <div>
          <div className="gov-label">{g.procLabel}</div>
          <div className="gov-chips">
            {g.procs.map((p, i) => (
              <button key={p} type="button" className={`gov-chip ${sel.has(i) ? 'on' : ''}`} onClick={() => toggle(i)}>
                <span>{sel.has(i) ? '✓' : '+'}</span>{p}
              </button>
            ))}
          </div>
          <p className="gov-note">{g.note}</p>
        </div>
        <div className="gov-board">
          <div className="gov-board-in">
            <div className="gov-board-title">{g.boardTitle}</div>
            <div className="gov-board-sub">{g.boardSub}</div>
            {picked.length === 0 ? (
              <div className="gov-empty">{g.empty}</div>
            ) : (
              picked.map(({ p }) => (
                <div key={p} className="gov-slot">
                  <span className="ok">✓</span>{p}<span className="tag">→ SAP</span>
                </div>
              ))
            )}
            <div className="gov-count">{picked.length} / {g.procs.length} · {g.countLbl}</div>
            <div className="gov-svcs">
              {g.svcs.map((sv) => <span key={sv} className="gov-svc-tag">{sv}</span>)}
            </div>
            <a href="#/contacto" className="btn-hero gov-cta">{g.cta}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function About({ t, lang }) {
  const a = t.about
  const industries = industriesFor(lang)

  return (
    <>
      <header className="page-hero">
        <div className="aurora aurora-v" style={{ right: -200, top: -180 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-badge"><span className="accent">✦</span> {t.navAbout}</div>
          <h1>{a.title}</h1>
          <p>{a.sub}</p>
        </div>
      </header>

      {/* stats */}
      <div className="section" style={{ paddingTop: 10, paddingBottom: 40 }}>
        <div className="stats">
          {[
            { num: t.home.statYears, lbl: t.home.statYearsLbl },
            { num: t.home.statClients, lbl: t.home.statClientsLbl },
            { num: t.home.statServices, lbl: t.home.statServicesLbl },
          ].map((s) => (
            <Reveal key={s.lbl}>
              <div className="stat-card">
                <div className="stat-num"><Counter value={s.num} /></div>
                <div className="stat-label">{s.lbl}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* mission / vision / values */}
      <div className="section" style={{ paddingTop: 20 }}>
        <div className="mv-grid">
          <Reveal>
            <SpotCard className="card card-lg" style={{ height: '100%' }}>
              <div className="card-icon">◎</div>
              <h3>{a.missionTitle}</h3>
              <p style={{ fontSize: 15.5 }}>{a.mission}</p>
            </SpotCard>
          </Reveal>
          <Reveal>
            <SpotCard className="card card-lg" style={{ height: '100%' }}>
              <div className="card-icon">✦</div>
              <h3>{a.visionTitle}</h3>
              <p style={{ fontSize: 15.5 }}>{a.vision}</p>
            </SpotCard>
          </Reveal>
        </div>
        <Reveal>
          <div className="values-row" style={{ marginTop: 18 }}>
            {a.values.map((v) => (
              <div key={v.label} className="value-chip">
                <div className="ico">{v.icon}</div>
                <div className="lbl">{v.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* experience */}
      <div className="section" style={{ paddingTop: 30 }}>
        <div className="bento-top">
          <Reveal>
            <SpotCard className="card card-lg" style={{ height: '100%' }}>
              <div style={{ position: 'absolute', top: -80, right: -60, width: 280, height: 240, background: 'radial-gradient(closest-side, rgba(70,189,235,.22), transparent 70%)' }} />
              <div className="kicker">{a.expKicker}</div>
              <h3 style={{ fontSize: 25, letterSpacing: '-1px' }}>{a.expTitle}</h3>
              <p style={{ fontSize: 15.5, marginBottom: 16 }}>{a.exp}</p>
              <p style={{ fontSize: 15.5 }}>{a.commit}</p>
            </SpotCard>
          </Reveal>
          <Reveal>
            <div className="card" style={{ padding: 0, height: '100%', minHeight: 320, overflow: 'hidden' }}>
              <img src="assets/img/team-looking-futuristic-digital-interface-office-1.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.8) brightness(.75)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(4,24,46,.9))' }} />
              <div style={{ position: 'absolute', left: 26, bottom: 22 }}>
                <img src="assets/sap.svg" alt="SAP" style={{ width: 54, opacity: .9 }} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* industries */}
      <div className="industries-band">
        <div className="section-head" style={{ padding: '0 32px' }}>
          <div className="kicker">{a.indKicker}</div>
          <h2>{a.indTitle}</h2>
          <p>{a.indSub}</p>
        </div>
        <div className="ind-grid">
          {industries.map((ind) => (
            <Reveal key={ind.name}>
              <div className="ind-card">
                <img src={ind.img} alt={ind.name} loading="lazy" />
                <div className="ind-desc">{ind.desc}</div>
                <div className="ind-label">{ind.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* state institutions — interactive builder */}
      <Reveal>
        <GovBuilder t={t} />
      </Reveal>

      <ContactCta t={t} />
    </>
  )
}
