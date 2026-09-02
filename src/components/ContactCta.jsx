export default function ContactCta({ t }) {
  return (
    <div className="contact">
      <div className="cta-panel">
        <div className="cta-in">
          <div className="aurora aurora-deep-v" />
          <div className="aurora aurora-deep-p" />
          <div className="contact-inner">
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaSub}</p>
            <a href="#/contacto" className="btn-contact">{t.ctaBtn}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
