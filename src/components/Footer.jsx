import { useState } from 'react'

const SOCIALS = [
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/fmptechnologyservices/',
    d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/fmptechservices/',
    d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/company/fmp-technology-services/',
    d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
]

export default function Footer({ t }) {
  const [email, setEmail] = useState('')

  const subscribe = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(t.newsSubject)
    const body = encodeURIComponent(`${t.newsBody}: ${email}`)
    window.location.href = `mailto:comercial@fmp.com.do?subject=${subject}&body=${body}`
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <img src="assets/fmp-logo-white.svg" alt="FMP Technology Services" className="footer-logo" />
            <p className="footer-blurb">{t.footBlurb}</p>
            <div className="footer-social">
              {SOCIALS.map((s) => (
                <a key={s.title} href={s.href} target="_blank" rel="noreferrer" title={s.title} aria-label={s.title}>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="footer-col-title">{t.colCompany}</div>
            <div className="footer-links">
              <a href="#/">{t.navHome}</a>
              <a href="#/nosotros">{t.navAbout}</a>
              <a href="#/servicios">{t.navServices}</a>
              <a href="#/productos">{t.navProducts}</a>
              <a href="#/partnership">{t.navPartnership}</a>
              <a href="#/contacto">{t.navContact}</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">{t.colProducts}</div>
            <div className="footer-links">
              {t.footProducts.map((p) => (
                <a key={p.slug} href={`#/productos/${p.slug}`}>{p.label}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="footer-col-title">{t.colContact}</div>
            <div className="footer-links">
              <a href="mailto:comercial@fmp.com.do">comercial@fmp.com.do</a>
              <span>{t.footLocation}</span>
            </div>
            <img src="assets/img/sap-partner.png" alt="SAP Partner" className="footer-sap-badge" />
          </div>
        </div>

        <div className="footer-news">
          <div className="footer-news-title">{t.newsTitle}</div>
          <form className="footer-news-form" onSubmit={subscribe}>
            <input
              type="email"
              required
              placeholder={t.newsPh}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">{t.newsBtn}</button>
          </form>
        </div>

        <div className="footer-legal">
          <span>© 2026 FMP TECHNOLOGY SERVICES. {t.rights}</span>
          <span>{t.footerTag}</span>
        </div>
      </div>
    </footer>
  )
}
