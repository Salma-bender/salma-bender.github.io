import { asset, profile } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const channels = [
  { className: 'phone', href: profile.phoneHref, icon: 'fas fa-phone', label: 'TÉLÉPHONE', value: profile.phoneDisplay, external: false },
  { className: 'linkedin', href: profile.linkedin, icon: 'fab fa-linkedin-in', label: 'LINKEDIN', value: profile.linkedinLabel, external: true },
  { className: 'github', href: profile.github, icon: 'fab fa-github', label: 'GITHUB', value: profile.githubHandle, external: true },
  { className: 'cv', href: asset(profile.cv), icon: 'fas fa-file-pdf', label: 'CV', value: 'Télécharger PDF', external: false, download: true },
]

export function Contact() {
  return (
    <section id="contact">
      <SectionHeader index="07" kicker="REACH OUT" title="GET IN" accent="TOUCH" />
      <div className="contact-centered-wrapper">
        <Reveal delay={0.05}>
          <div className="contact-availability">
            <span className="avail-dot" />
            DISPONIBLE — STAGE PFE · FÉVRIER 2027
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="contact-intro">
            Je suis à la recherche d'un <strong>stage PFE</strong> en cybersécurité —
            SOC analyst, Blue Team, Threat Intelligence ou sécurité des SI.<br />
            Disponible à partir de <strong>février 2027</strong>.
            N'hésitez pas à me contacter directement.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <a href={`mailto:${profile.email}`} className="contact-cta-email">
            <i className="fas fa-terminal" />
            {profile.email}
          </a>
        </Reveal>
        <div className="contact-cards">
          {channels.map((channel, index) => (
            <Reveal key={channel.label} delay={index * 0.06}>
              <a
                href={channel.href}
                className={`contact-card ${channel.className}`}
                {...(channel.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                {...(channel.download ? { download: true } : {})}
              >
                <span className="contact-card-icon"><i className={channel.icon} aria-hidden="true" /></span>
                <span className="contact-card-label">{channel.label}</span>
                <span className="contact-card-value">{channel.value}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
