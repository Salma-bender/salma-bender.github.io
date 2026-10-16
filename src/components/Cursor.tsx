import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const dot = dotRef.current
    const ring = ringRef.current
    if (!fine || !dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let frame = 0

    const onMove = (event: MouseEvent) => {
      mx = event.clientX
      my = event.clientY
    }
    const onOver = (event: MouseEvent) => {
      const target = event.target
      const hot = target instanceof Element && target.closest('a, button, .skill-tag, .project-card, .cert-card, .contact-card, .repo-card')
      ring.classList.toggle('is-hot', Boolean(hot))
    }
    const tick = () => {
      if (reduced) {
        rx = mx
        ry = my
      } else {
        rx += (mx - rx) * 0.15
        ry += (my - ry) * 0.15
      }
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`
      frame = window.requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    frame = window.requestAnimationFrame(tick)
    return () => {
      window.cancelAnimationFrame(frame)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
    }
  }, [reduced])

  return (
    <div className="cursor" aria-hidden="true">
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </div>
  )
}
