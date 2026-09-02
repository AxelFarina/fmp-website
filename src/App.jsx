import { useEffect, useState } from 'react'
import { dict } from './i18n.js'
import { useRoute } from './hooks.js'
import Splash from './components/Splash.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Partnership from './pages/Partnership.jsx'
import Contact from './pages/Contact.jsx'

const TITLES = {
  es: {
    home: 'FMP Technology Services — SAP Partner · Tecnología',
    nosotros: 'Nosotros — FMP Technology Services',
    servicios: 'Servicios — FMP Technology Services',
    productos: 'Productos — FMP Technology Services',
    partnership: 'Programa de Referidos — FMP Technology Services',
    contacto: 'Contáctanos — FMP Technology Services',
  },
  en: {
    home: 'FMP Technology Services — SAP Partner · Technology',
    nosotros: 'About us — FMP Technology Services',
    servicios: 'Services — FMP Technology Services',
    productos: 'Products — FMP Technology Services',
    partnership: 'Referral Program — FMP Technology Services',
    contacto: 'Contact us — FMP Technology Services',
  },
}

export default function App() {
  const route = useRoute()
  const [lang, setLang] = useState(() => localStorage.getItem('fmp-lang') || 'es')
  const [theme, setTheme] = useState(() => localStorage.getItem('fmp-theme') || 'light')
  const [showSplash, setShowSplash] = useState(
    () =>
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
      (window.location.hash === '' || window.location.hash === '#/'),
  )
  const t = dict[lang]

  // the intro plays once per page load — never again on route changes
  useEffect(() => {
    if (!showSplash) return
    const id = setTimeout(() => setShowSplash(false), 2600)
    return () => clearTimeout(id)
  }, [showSplash])

  useEffect(() => { localStorage.setItem('fmp-lang', lang) }, [lang])
  useEffect(() => {
    localStorage.setItem('fmp-theme', theme)
    document.documentElement.dataset.theme = theme
  }, [theme])
  useEffect(() => {
    const key = route.page === 'producto' ? 'productos' : route.page
    document.title = Object.hasOwn(TITLES[lang], key) ? TITLES[lang][key] : TITLES[lang].home
    document.documentElement.lang = lang
  }, [route, lang])

  // While the splash plays, hold the nav/hero copy hidden, then stagger it in.
  useEffect(() => {
    if (!showSplash) return
    const intros = Array.from(document.querySelectorAll('[data-intro]'))
    intros.forEach((el) => {
      el.style.opacity = '0'
      if (el.getAttribute('data-intro') !== 'fade') el.style.transform = 'translateY(26px)'
    })
    const timers = intros.map((el, i) =>
      setTimeout(() => {
        el.style.transition = 'opacity 1.2s ease, transform 1.2s cubic-bezier(.2,.7,.2,1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 1500 + i * 200),
    )
    return () => timers.forEach(clearTimeout)
  }, [showSplash])

  let page
  switch (route.page) {
    case 'nosotros': page = <About t={t} lang={lang} />; break
    case 'servicios': page = <Services t={t} />; break
    case 'productos': page = <Products t={t} lang={lang} />; break
    case 'producto': page = <ProductDetail t={t} lang={lang} slug={route.slug} />; break
    case 'partnership': page = <Partnership t={t} />; break
    case 'contacto': page = <Contact t={t} />; break
    default: page = <Home t={t} lang={lang} theme={theme} />
  }

  return (
    <>
      {showSplash && route.page === 'home' && <Splash />}
      <Nav t={t} lang={lang} setLang={setLang} route={route} theme={theme} setTheme={setTheme} />
      {page}
      <Footer t={t} />
    </>
  )
}
