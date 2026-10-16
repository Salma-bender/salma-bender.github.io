import { certifications, ctfPlatforms, type Cert } from '../data/content'
import { ConnectorLines } from './ConnectorLines'
import { IsometricPlatform } from './IsometricPlatform'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

function CertCard({ cert }: { cert: Cert }) {
  const className = `cert-card accent-${cert.accent}`
  const body = (
    <>
      <IsometricPlatform icon={cert.icon} accent={cert.accent} compact />
      <h3 className="cert-name">{cert.name}</h3>
      <p className="cert-issuer">{cert.issuer}</p>
      <span className={`cert-badge-tag${cert.badgeTone ? ` ${cert.badgeTone}` : ''}`}>{cert.badge}</span>
    </>
  )

  if (!cert.url) return <article className={className}>{body}</article>

  return (
    <a className={className} href={cert.url} target="_blank" rel="noreferrer">
      {body}
    </a>
  )
}

export function Certifications() {
  return (
    <section id="certifications">
      <SectionHeader index="05" kicker="CREDENTIALS" title="CERTS &" accent="PLATFORMS" />
      <div className="certs-layout">
        <div>
          <h3 className="panel-label">// CERTIFICATIONS</h3>
          <div className="stage cert-grid">
            <ConnectorLines />
            {certifications.map((cert, index) => (
              <Reveal key={cert.name} delay={(index % 3) * 0.08}>
                <CertCard cert={cert} />
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <h3 className="panel-label">// CTF PLATFORMS</h3>
          <div className="ctf-grid">
            {ctfPlatforms.map((platform, index) => (
              <Reveal key={platform.name} className="ctf-card" delay={index * 0.08}>
                <div className="ctf-platform">{platform.name}</div>
                <div className="ctf-stat">
                  {platform.lines.map(([label, value]) => (
                    <div key={label}>{label} <span>{value}</span></div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
