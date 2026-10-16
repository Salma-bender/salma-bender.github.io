import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'

const sectionIds = ['home', ...navLinks.map((link) => link.id)]

export function useActiveSection() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const id = visible[0]?.target.id
        if (id) setActive(id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.2, 0.5] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return active
}
