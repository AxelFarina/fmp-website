import RegionMap from '../components/RegionMap.jsx'
import ContactCta from '../components/ContactCta.jsx'
import { Reveal, SpotCard } from '../components/ui.jsx'
import { industriesFor } from '../i18n.js'
import { products } from '../content/products.js'

const SHOWCASE = ['sap-business-one', 'sap-s4hana-rise', 'trebol-hrm-cloud', 'facturacion-electronica', 'medical-suite', 'addons']
const IND_PREVIEW = [0, 2, 7, 6, 8, 15, 5, 17] // comercio, construcción, salud, educación, financieros, turismo, transporte, bienes raíces
const BARS = [42, 66, 50, 84, 58, 92, 70, 48, 76, 60, 88, 54]

const TAGS = [
  { label: 'S/4HANA', style: { top: -20, right: 46, animationDelay: '.6s' } },
  { label: 'BUSINESS ONE', style: { left: -38, top: 96, animationDelay: '1.4s' } },
  { label: 'POS B1', style: { left: -20, bottom: 64, animationDelay: '.2s' } },
  { label: 'TREBOL HRM', style: { right: -30, bottom: 120, animationDelay: '1s' } },
  { label: 'M365', style: { right: -14, top: 150, animationDelay: '1.8s' } },
]

export default function Home({ t, lang }) {
  const h = t.home
  const industries = industriesFor(lang)

  return (
    <>
      <header className="hero" id="top">
        <div className="aurora aurora-v" style={{ left: -220, top: -160 }} />
        <div className="aurora aurora-p" style={{ right: -180, top: 120 }} />
        <div className="hero-grid">
          <div>
            <div className="hero-badge" data-intro>
              <span className="accent">✦</span> {h.badge}
            </div>
            <h1 data-intro>
              {h.title1} <span className="grad-text">{h.title2}</span>
            </h1>
            <p className="hero-sub" data-intro>{h.sub}</p>
            <div className="hero-ctas" data-intro>
              <a href="#/contacto" className="btn-hero">{h.cta1}</a>
              <a href="#/productos" className="btn-hero-ghost">{h.cta2}</a>
            </div>
            <div className="hero-stats" data-intro>
              {[
                { num: h.statYears, lbl: h.statYearsLbl },
                { num: h.statClients, lbl: h.statClientsLbl },
                { num: h.statServices, lbl: h.statServicesLbl },
              ].map((s) => (
                <div key={s.lbl} className="hstat">
                  <div className="hstat-num">{s.num}</div>
                  <div className="hstat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="dash-wrap" data-intro="fade">
            <div className="dash">
              <div className="dash-in">
                <div className="dash-head">
                  <div className="dash-dot" /><div className="dash-dot" /><div className="dash-dot" />
                  <div className="dash-title">{h.dashTitle}</div>
                  <div className="dash-live">{h.dashLive}</div>
                </div>
                <div className="dash-kpis">
                  {h.dashKpis.map((k) => (
                    <div key={k.lbl} className="kpi">
                      <div className="kpi-lbl">{k.lbl}</div>
                      <div className="kpi-val">{k.val}</div>
                      <div className="kpi-delta">{k.delta}</div>
                    </div>
                  ))}
                </div>
                <div className="dash-main">
                  <div className="dash-chart">
                    {BARS.map((v, i) => (
                      <div
                        key={i}
                        className={`dash-bar ${i % 5 === 3 ? 'hot' : ''}`}
                        style={{ height: `${v}%`, animationDelay: `${(i * 0.28).toFixed(2)}s` }}
                      />
                    ))}
                  </div>
                  <div className="dash-feed">
                    {h.dashFeed.map((f, i) => (
                      <div key={f.text} className="feed-row" style={{ animationDelay: `${i * 1.4}s` }}>
                        <div className="feed-ico">{f.icon}</div>
                        <span>{f.text}</span>
                        <span className="feed-ok">OK</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="float-tag" style={{ top: -24, left: -30, animationDelay: '0s' }}>
              <img src="assets/sap.svg" alt="SAP" />
            </div>
            {TAGS.map((tag) => (
              <div key={tag.label} className="float-tag" style={tag.style}>{tag.label}</div>
            ))}
          </div>
        </div>
      </header>

      {/* SAP partner benefits */}
      <div className="section" style={{ paddingTop: 50 }}>
        <div className="bento-top" style={{ alignItems: 'stretch' }}>
          <Reveal>
            <SpotCard className="card card-lg" style={{ height: '100%' }}>
              <div style={{ position: 'absolute', bottom: -100, left: -40, width: 380, height: 280, background: 'radial-gradient(closest-side, rgba(70,189,235,.22), transparent 70%)' }} />
              <div className="kicker">{h.benefitsKicker}</div>
              <h3 style={{ fontSize: 26, letterSpacing: '-1px' }}>{h.benefitsTitle}</h3>
              <ul style={{ margin: '20px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13, position: 'relative' }}>
                {h.benefits.map((b) => (
                  <li key={b} style={{ position: 'relative', paddingLeft: 28, fontSize: 15, lineHeight: 1.6, color: 'rgba(15,42,68,.75)' }}>
                    <span style={{ position: 'absolute', left: 0, top: 1, color: '#1B75B7', fontWeight: 700 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </SpotCard>
          </Reveal>
          <Reveal>
            <div className="card" style={{ padding: 0, height: '100%', minHeight: 320, overflow: 'hidden' }}>
              <img src="assets/img/office-team.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.75) brightness(.7)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(4,24,46,.94))' }} />
              <div style={{ position: 'absolute', left: 26, right: 26, bottom: 22 }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: 2, color: '#9FDDF8', marginBottom: 8 }}>FMP · SAP PARTNER</div>
                <div style={{ fontSize: 17, fontWeight: 600, color: '#fff' }}>{h.whyTitle}</div>
                <p style={{ margin: '8px 0 0', fontSize: 13.5, lineHeight: 1.6, color: 'rgba(235,245,252,.8)' }}>{h.whyText}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* numbered quick-wins rows */}
      <div className="section" style={{ paddingTop: 20, paddingBottom: 60 }}>
        <Reveal>
          <div className="why-rows">
            {h.quick.map((q, i) => (
              <div key={q.title} className="why-row">
                <div className="why-num">0{i + 1}</div>
                <div className="why-title">{q.title}</div>
                <div className="why-desc">{q.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* services preview */}
      <div className="section">
        <div className="section-head">
          <div className="kicker">{h.servicesKicker}</div>
          <h2>{h.servicesTitle}</h2>
        </div>
        <div className="bento-grid-4">
          {t.services.items.slice(2, 6).map((s) => (
            <Reveal key={s.title}>
              <SpotCard className="card" style={{ height: '100%' }}>
                <div className="card-icon">{s.icon}</div>
                <h3 style={{ fontSize: 17 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5 }}>{s.desc}</p>
              </SpotCard>
            </Reveal>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 34 }}>
          <a href="#/servicios" className="btn-hero-ghost">{h.servicesMore} →</a>
        </div>
      </div>

      {/* products showcase */}
      <div className="industries-band">
        <div className="section-head" style={{ padding: '0 32px' }}>
          <div className="kicker">{h.prodKicker}</div>
          <h2>{h.prodTitle}</h2>
        </div>
        <div className="ind-grid ind-grid-3">
          {SHOWCASE.map((slug) => {
            const p = products[slug]
            return (
              <Reveal key={slug}>
                <a href={`#/productos/${slug}`} className="ind-card ind-card-lg" style={{ display: 'block', cursor: 'pointer' }}>
                  <img src={p.img} alt={p[lang].name} loading="lazy" />
                  <div className="ind-desc">{p[lang].tagline}</div>
                  <div className="ind-label">{p[lang].name} <span className="accent">→</span></div>
                </a>
              </Reveal>
            )
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: 34 }}>
          <a href="#/productos" className="btn-hero-ghost">{h.prodMore} →</a>
        </div>
      </div>

      {/* industries preview */}
      <div className="section">
        <div className="section-head">
          <div className="kicker">{h.indKicker}</div>
          <h2>{h.indTitle}</h2>
          <p>{h.indSub}</p>
        </div>
        <div className="ind-grid" style={{ padding: 0, maxWidth: 'none' }}>
          {IND_PREVIEW.map((i) => (
            <Reveal key={industries[i].name}>
              <div className="ind-card">
                <img src={industries[i].img} alt={industries[i].name} loading="lazy" />
                <div className="ind-desc">{industries[i].desc}</div>
                <div className="ind-label">{industries[i].name}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 34 }}>
          <a href="#/nosotros" className="btn-hero-ghost">{h.indMore} →</a>
        </div>
      </div>

      <RegionMap t={{ globeKicker: h.globeKicker, globeTitle: h.globeTitle, globeSub: h.globeSub }} />
      <ContactCta t={t} />
    </>
  )
}
