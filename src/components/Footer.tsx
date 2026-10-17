import { asset, navLinks, profile } from '../data/content'

const contacts = [
  { icon: 'fas fa-envelope', label: 'EMAIL', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'fas fa-phone', label: 'TÉLÉPHONE', value: profile.phoneDisplay, href: profile.phoneHref },
  { icon: 'fas fa-map-marker-alt', label: 'LOCALISATION', value: profile.location },
  { icon: 'fab fa-linkedin-in', label: 'LINKEDIN', value: `in/${profile.linkedinLabel}`, href: profile.linkedin, external: true },
  { icon: 'fab fa-github', label: 'GITHUB', value: `github.com/${profile.githubHandle}`, href: profile.github, external: true },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#home" className="nav-logo">
            <span className="nav-logo-bracket">[</span>SALMA.BENDER<span className="nav-logo-bracket">]</span>
          </a>
          <p>
            Élève ingénieure en Sécurité IT à la FST de Marrakech. SOC, SIEM, Threat Intelligence, SOAR
            et IA appliquée à la détection des menaces.
          </p>
          <div className="footer-avail">
            <span className="avail-dot" /> DISPONIBLE — STAGE PFE 6 MOIS · FÉV. 2027
          </div>
          <div className="footer-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub"><i className="fab fa-github" /></a>
            <a href={`mailto:${profile.email}`} className="social-link" aria-label="Email"><i className="fas fa-envelope" /></a>
            <a href={profile.phoneHref} className="social-link" aria-label="Téléphone"><i className="fas fa-phone" /></a>
            <a href={asset(profile.cv)} download className="social-link" aria-label="Télécharger le CV"><i className="fas fa-download" /></a>
          </div>
        </div>

        <div>
          <h4 className="footer-heading">// CONTACT</h4>
          <ul className="footer-contacts">
            {contacts.map((item) => (
              <li key={item.label}>
                <span className="footer-icon"><i className={item.icon} aria-hidden="true" /></span>
                <span className="footer-contact-text">
                  <span className="footer-contact-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}>{item.value}</a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">// NAVIGATION</h4>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.id}><a href={link.href}>{link.label}</a></li>
            ))}
            <li><a href={asset(profile.cv)} download>CV (PDF)</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} <span className="footer-name">{profile.name}</span> — Élève ingénieure en Sécurité IT — FST Marrakech, UCA</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  )
}
