import { asset, heroStats, profile, terminalLines } from '../data/content'
import { OrbitalField } from './OrbitalField'

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-stage">
      <div className="hero-copy">
        <p className="hero-tag hero-rise" style={{ animationDelay: '0.15s' }}>
          ÉLÈVE INGÉNIEURE EN SÉCURITÉ IT · RECHERCHE STAGE PFE 6 MOIS · FÉV. 2027
        </p>
        <h1 className="hero-name hero-rise" style={{ animationDelay: '0.3s' }}>
          SALMA<br /><span>BENDER</span>
        </h1>
        <p className="hero-title hero-rise" style={{ animationDelay: '0.45s' }}>
          SOC ANALYST &nbsp;/&nbsp; THREAT INTELLIGENCE &nbsp;/&nbsp; SECURITY ENGINEER
        </p>
        <div className="hero-terminal hero-rise" style={{ animationDelay: '0.6s' }}>
          <div className="terminal-bar">
            <span className="t-dot red" />
            <span className="t-dot amber" />
            <span className="t-dot green" />
          </div>
          {terminalLines.map((line, index) => (
            <div key={index} className="terminal-line" style={{ animationDelay: `${0.9 + index * 0.16}s` }}>
              {line.kind === 'cmd' || line.kind === 'prompt' ? (
                <span className="t-prompt">root@seclab:~$ </span>
              ) : null}
              {line.kind === 'cmd' ? <span className="t-cmd">{line.command}</span> : null}
              {line.kind === 'out' ? <span className={`t-out t-${line.tone}`}>{line.text}</span> : null}
              {line.kind === 'prompt' ? <span className="t-cursor" /> : null}
            </div>
          ))}
        </div>
        <div className="hero-actions hero-rise" style={{ animationDelay: '1s' }}>
          <a href="#projects" className="btn-primary"><i className="fas fa-shield-alt" /> VIEW PROJECTS</a>
          <a href={asset(profile.cv)} download className="btn-secondary"><i className="fas fa-download" /> DOWNLOAD CV</a>
        </div>
      </div>
      <div className="hero-visual hero-rise" style={{ animationDelay: '0.4s' }}>
        <OrbitalField />
      </div>
      </div>
      <div className="hero-stats hero-rise" style={{ animationDelay: '1.15s' }}>
        {heroStats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <div className="stat-number">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
      <a href="#about" className="scroll-indicator">
        <span>SCROLL</span>
        <span className="arrow" />
      </a>
    </section>
  )
}
