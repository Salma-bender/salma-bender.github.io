import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

export function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav>
      <a href="#home" className="nav-logo" onClick={() => setOpen(false)}>
        <span className="nav-logo-bracket">[</span>SALMA.BENDER<span className="nav-logo-bracket">]</span>
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
      </ul>
      <div className="nav-status">
        <span className="status-dot" />
        SYSTEMS_ONLINE
      </div>
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
    </nav>
  )
}
