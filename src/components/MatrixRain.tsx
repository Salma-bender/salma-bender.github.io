import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

const CHARS = '01アイウエオカキクケコABCDEF{}[]<>/\\|=+-*&^%$#@!;:NMAP SCAN ALERT THREAT DETECT'

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let drops: number[] = []
    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drops = Array(Math.floor(canvas.width / 18)).fill(1)
    }
    const draw = () => {
      ctx.fillStyle = 'rgba(243,247,251,0.22)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#007f90'
      ctx.font = '13px "Share Tech Mono", monospace'
      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)] ?? '0'
        ctx.fillText(char, i * 18, y * 18)
        drops[i] = y * 18 > canvas.height && Math.random() > 0.975 ? 0 : y + 1
      })
    }

    init()
    const timer = window.setInterval(draw, 55)
    window.addEventListener('resize', init)
    return () => {
      window.clearInterval(timer)
      window.removeEventListener('resize', init)
    }
  }, [reduced])

  return <canvas id="matrix-canvas" ref={canvasRef} aria-hidden="true" />
}
