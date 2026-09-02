import ContactCta from '../components/ContactCta.jsx'
import { Reveal } from '../components/ui.jsx'
import { products, productCats, catOrder } from '../content/products.js'

export default function Products({ t, lang }) {
  const p = t.productsPage

  return (
    <>
      <header className="page-hero">
        <div className="aurora aurora-v" style={{ right: -200, top: -180 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-badge"><span className="accent">✦</span> {t.navProducts}</div>
          <h1>{p.title}</h1>
          <p>{p.sub}</p>
        </div>
      </header>

      <div className="section" style={{ paddingTop: 20 }}>
        {catOrder.map((cat) => {
          const items = Object.entries(products).filter(([, pr]) => pr.cat === cat)
          if (!items.length) return null
          return (
            <div key={cat} style={{ marginBottom: 46 }}>
              <Reveal>
                <div className="mono" style={{ fontSize: 15, letterSpacing: 3, color: 'var(--acc)', margin: '0 0 18px' }}>
                  {productCats[lang][cat].toUpperCase()}
                </div>
              </Reveal>
              <div className="bento-grid">
                {items.map(([slug, pr]) => (
                  <Reveal key={slug}>
                    <a href={`#/productos/${slug}`} className="card" style={{ display: 'block', height: '100%', padding: 0, overflow: 'hidden' }}>
                      <div style={{ position: 'relative', height: 150, overflow: 'hidden' }}>
                        <img src={pr.img} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.85)' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 45%, var(--card))' }} />
                        {pr.logo && (
                          <img src={pr.logo} alt="" style={{ position: 'absolute', left: 22, bottom: 12, height: 42, objectFit: 'contain', background: '#fff', borderRadius: 10, padding: '4px 8px', boxShadow: '0 4px 14px rgba(0,0,0,.18)' }} />
                        )}
                      </div>
                      <div style={{ padding: '18px 24px 26px' }}>
                        <h3 style={{ fontSize: 18.5 }}>{pr[lang].name}</h3>
                        <p style={{ fontSize: 14 }}>{pr[lang].tagline}</p>
                        <span className="card-link">{p.view} →</span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <ContactCta t={t} />
    </>
  )
}
