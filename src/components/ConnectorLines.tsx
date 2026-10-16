import { useId, useLayoutEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export function ConnectorLines() {
  const reactId = useId().replace(/:/g, '')
  const reduced = useReducedMotion()
  const svgRef = useRef<SVGSVGElement>(null)
  const [paths, setPaths] = useState<string[]>([])

  useLayoutEffect(() => {
    const svg = svgRef.current
    const root = svg?.parentElement
    if (!svg || !root) return

    const measure = () => {
      const box = root.getBoundingClientRect()
      const points = [...root.querySelectorAll<HTMLElement>('[data-connector]')].map((node) => {
        const rect = node.getBoundingClientRect()
        return {
          x: rect.left + rect.width / 2 - box.left,
          y: rect.top + rect.height / 2 - box.top,
        }
      })
      const next: string[] = []
      for (let i = 0; i < points.length - 1; i += 1) {
        const a = points[i]
        const b = points[i + 1]
        if (!a || !b || Math.abs(a.y - b.y) > 220) continue
        const dx = b.x - a.x
        const dy = b.y - a.y
        const len = Math.hypot(dx, dy) || 1
        const bend = 36
        const cx = (a.x + b.x) / 2 + (-dy / len) * bend
        const cy = (a.y + b.y) / 2 + (dx / len) * bend
        next.push(`M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`)
      }
      setPaths(next)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <svg ref={svgRef} className="connectors" aria-hidden="true">
      {paths.map((d, index) => (
        <path
          key={`${reactId}-${index}`}
          d={d}
          className={`connector-line${index % 2 ? ' alt' : ''}${reduced ? ' is-static' : ''}`}
        />
      ))}
    </svg>
  )
}
