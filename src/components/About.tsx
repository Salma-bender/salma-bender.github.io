import { aboutBadges, aboutHighlights, aboutInfo, aboutParagraphs, asset, profile } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function About() {
  return (
    <section id="about">
      <SectionHeader index="01" kicker="WHO AM I" title="ABOUT" accent="ME" />
      <div className="about-grid">
        <Reveal className="about-visual" delay={0.08}>
          <div className="about-avatar-wrapper">
            <span className="about-ring r1" />
            <span className="about-ring r2" />
            <div className="avatar-hex">
              <img src={asset(profile.photo)} alt="Salma Bender" />
            </div>
          </div>
          <div className="about-badges">
            {aboutBadges.map((badge) => (
              <span className="badge" key={badge}>{badge}</span>
            ))}
          </div>
        </Reveal>
        <Reveal className="about-text" delay={0.16}>
          <div className="about-summary">
            {aboutParagraphs.map((parts, index) => (
              <p key={index}>
                {parts.map((part, partIndex) => (
                  typeof part === 'string' ? <span key={partIndex}>{part}</span> : <strong key={partIndex}>{part.strong}</strong>
                ))}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="about-meta">
        <div className="about-highlight-row">
          {aboutHighlights.map((item) => (
            <div className="about-highlight" key={item.label}>
              <div className="hl-number">{item.value}</div>
              <div className="hl-label">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="about-info-grid">
          {aboutInfo.map((item) => (
            <div className="info-item" key={item.label}>
              <span className="info-label">{item.label}</span>
              <span className={`info-value${item.accent ? ' is-live' : ''}`}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
