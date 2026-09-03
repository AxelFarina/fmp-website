import { useEffect, useRef, useState } from 'react'

export default function Nav({ t, lang, setLang, route, theme, setTheme }) {
  const [open, setOpen] = useState(false)       // products dropdown
  const [mobile, setMobile] = useState(false)   // hamburger menu
  const dropRef = useRef(null)

  // close menus when clicking outside / after navigation
  useEffect(() => {
    const onClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  useEffect(() => { setOpen(false); setMobile(false) }, [route.page, route.slug])

  // also close on any link click — same-route links fire no hashchange
  const closeAll = () => { setOpen(false); setMobile(false) }

  const is = (p) => (route.page === p ? 'on' : '')

  return (
    <>
      <nav className="nav">
        <div className="nav-brand">
          <a href="#/" aria-label="FMP Technology Services" onClick={closeAll}>
            <img
              src={theme === 'dark' ? 'assets/fmp-logo-white.svg' : 'assets/fmp-logo.svg'}
              alt="FMP Technology Services"
              className="nav-logo"
            />
          </a>
          <span className="nav-brand-sep" />
          <img src="assets/img/sap-partner.png" alt="SAP Partner" className="nav-sap-badge" />
        </div>
        <div className="nav-links">
          <a href="#/" className={is('home')} onClick={closeAll}>{t.navHome}</a>
          <a href="#/nosotros" className={is('nosotros')} onClick={closeAll}>{t.navAbout}</a>
          <a href="#/servicios" className={is('servicios')} onClick={closeAll}>{t.navServices}</a>
          <div className={`nav-drop ${open ? 'open' : ''}`} ref={dropRef}>
            <button
              type="button"
              className={`nav-drop-btn ${route.page === 'productos' || route.page === 'producto' ? 'on' : ''}`}
              onClick={() => setOpen(!open)}
            >
              {t.navProducts} <span className="nav-caret">▼</span>
            </button>
            {open && (
              <div className="nav-menu">
                {t.prodMenu.map((cat) => (
                  <div key={cat.cat} style={{ display: 'contents' }}>
                    <div className="nav-menu-cat">{cat.cat}</div>
                    {cat.items.map((p) => (
                      <a key={p.slug} href={`#/productos/${p.slug}`} onClick={closeAll}>{p.label}</a>
                    ))}
                  </div>
                ))}
                <div className="nav-menu-cat" />
                <a href="#/productos" className="nav-menu-all" onClick={closeAll}>{t.navAllProducts} →</a>
              </div>
            )}
          </div>
          <a href="#/partnership" className={is('partnership')} onClick={closeAll}>{t.navPartnership}</a>
          <a href="#/contacto" className={is('contacto')} onClick={closeAll}>{t.navContact}</a>
        </div>
        <div className="nav-right">
          <button
            type="button"
            className="theme-toggle"
            aria-label="Theme"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? '☾' : '☀'}
          </button>
          <div className="lang-toggle">
            <button className={lang === 'es' ? 'on' : ''} onClick={() => setLang('es')}>ES</button>
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <a href="#/contacto" className="btn-primary" onClick={closeAll}>{t.navCta}</a>
          <button type="button" className="nav-burger" aria-label="Menu" onClick={() => setMobile(!mobile)}>
            {mobile ? '✕' : '☰'}
          </button>
        </div>
      </nav>
      {mobile && (
        <div className="nav-mobile">
          <a href="#/" onClick={closeAll}>{t.navHome}</a>
          <a href="#/nosotros" onClick={closeAll}>{t.navAbout}</a>
          <a href="#/servicios" onClick={closeAll}>{t.navServices}</a>
          <a href="#/productos" onClick={closeAll}>{t.navProducts}</a>
          {t.prodMenu.map((cat) => (
            <div key={cat.cat} style={{ display: 'contents' }}>
              <div className="nav-menu-cat">{cat.cat}</div>
              {cat.items.map((p) => (
                <a key={p.slug} href={`#/productos/${p.slug}`} onClick={closeAll}>{p.label}</a>
              ))}
            </div>
          ))}
          <a href="#/partnership" onClick={closeAll}>{t.navPartnership}</a>
          <a href="#/contacto" onClick={closeAll}>{t.navContact}</a>
        </div>
      )}
    </>
  )
}
