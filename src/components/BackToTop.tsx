import { useEffect, useState } from 'react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a href="#home" className={`back-to-top${visible ? ' is-visible' : ''}`} aria-label="Revenir en haut">
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </a>
  )
}
