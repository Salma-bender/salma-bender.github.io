import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { asset, navLinks, profile } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false)
    }
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className={`nav-wrap${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav">
        <a href="#home" className="nav-brand" onClick={() => setOpen(false)}>
          <span className="nav-brand-mark">SB</span>
          <span className="nav-brand-name">{profile.name}</span>
        </a>
        <ul className={`nav-links${open ? ' is-open' : ''}`} id="navLinks">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={active === link.id ? 'is-active' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-cv-mobile">
            <a href={asset(profile.cv)} download onClick={() => setOpen(false)}>
              <i className="fas fa-download" aria-hidden="true" /> Télécharger le CV
            </a>
          </li>
        </ul>
        <a href={asset(profile.cv)} download className="nav-cv">
          <i className="fas fa-download" aria-hidden="true" /> CV
        </a>
        <button
          className={`hamburger${open ? ' is-open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <motion.span className="nav-progress" style={{ scaleX: progress }} aria-hidden="true" />
      </nav>
    </header>
  )
}
