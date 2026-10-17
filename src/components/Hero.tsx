import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { asset, heroHighlights, heroRoles, heroStats, profile } from '../data/content'
import { OrbitalField } from './OrbitalField'

// Cycles through the specialities under the name, one word at a time.
function RotatingRole() {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => setIndex((value) => (value + 1) % heroRoles.length), 2600)
    return () => window.clearInterval(id)
  }, [reduced])

  return (
    <span className="hx-role-slot">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={heroRoles[index]}
          className="hx-role-word"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {heroRoles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-stage">
      <div className="hero-copy hx">
        <div className="hx-pill hero-rise" style={{ animationDelay: '0.1s' }}>
          <span className="avail-dot" />
          Disponible · Stage PFE de 6 mois · Février 2027
        </div>

        <p className="hx-eyebrow hero-rise" style={{ animationDelay: '0.2s' }}>
          Élève ingénieure en Sécurité IT · FST Marrakech
        </p>

        <h1 className="hx-name hero-rise" style={{ animationDelay: '0.3s' }}>
          Salma <span>Bender</span>
        </h1>

        <p className="hx-role hero-rise" style={{ animationDelay: '0.42s' }}>
          <span className="hx-role-lead">Spécialisée en</span>
          <RotatingRole />
        </p>

        <p className="hx-pitch hero-rise" style={{ animationDelay: '0.54s' }}>
          Je conçois des plateformes de détection et j'automatise la réponse aux incidents.
          Dernier projet : un SOC complet chez <strong>Al Barid Bank</strong>, capable de bloquer
          une IP malveillante en <strong>moins de 90 secondes</strong>.
        </p>

        <ul className="hx-cards">
          {heroHighlights.map((item, index) => (
            <li
              key={item.title}
              className="hx-card hero-rise"
              style={{ animationDelay: `${0.66 + index * 0.1}s` }}
            >
              <span className="hx-card-icon"><i className={item.icon} aria-hidden="true" /></span>
              <span className="hx-card-text">
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="hx-actions hero-rise" style={{ animationDelay: '1s' }}>
          <a href="#projects" className="hx-btn hx-btn-dark">
            Voir mes projets <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
          <a href={asset(profile.cv)} download className="hx-btn hx-btn-light">
            <i className="fas fa-download" aria-hidden="true" /> Télécharger le CV
          </a>
          <span className="hx-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><i className="fas fa-envelope" /></a>
          </span>
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
