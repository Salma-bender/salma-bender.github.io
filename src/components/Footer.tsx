import { asset, profile } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="footer-left">
        <div>© {year} <span>{profile.name}</span> — Ingénieure en Sécurité IT — FSTG Marrakech — UCA</div>
      </div>
      <div className="footer-socials">
        <a href={profile.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub"><i className="fab fa-github" /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
        <a href={`mailto:${profile.email}`} className="social-link" aria-label="Email"><i className="fas fa-envelope" /></a>
        <a href={asset(profile.cv)} download className="social-link" aria-label="Télécharger le CV"><i className="fas fa-download" /></a>
      </div>
    </footer>
  )
}
