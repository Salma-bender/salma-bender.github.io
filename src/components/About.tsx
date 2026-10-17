import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { aboutLeft, aboutParagraph, aboutRight, asset, logo, profile, wheelInner, wheelOuter, type Tool } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

type Point = { title: string; text: string; live?: boolean }

function ToolBadge({ tool }: { tool: Tool }) {
  return (
    <span className="wheel-badge" title={tool.name}>
      {tool.slug ? (
        <img src={logo(tool.slug)} alt={tool.name} loading="lazy" />
      ) : (
        <span className="wheel-badge-text" style={{ color: tool.color }}>{tool.name}</span>
      )}
    </span>
  )
}

function Ring({ tools, radius, reverse }: { tools: Tool[]; radius: number; reverse?: boolean }) {
  return (
    <div className={`wheel-ring${reverse ? ' is-reverse' : ''}`}>
      {tools.map((tool, index) => {
        const angle = (index / tools.length) * Math.PI * 2 - Math.PI / 2
        return (
          <div
            key={tool.name}
            className="wheel-item"
            style={{ left: `${50 + radius * Math.cos(angle)}%`, top: `${50 + radius * Math.sin(angle)}%` }}
          >
            <ToolBadge tool={tool} />
          </div>
        )
      })}
    </div>
  )
}

// Each info point fades and slides in at its own moment of the scroll, one after another.
function SidePoint({ point, side, progress, start }: { point: Point; side: 'left' | 'right'; progress: MotionValue<number>; start: number }) {
  const opacity = useTransform(progress, [start, start + 0.12], [0, 1])
  const x = useTransform(progress, [start, start + 0.12], [side === 'left' ? -40 : 40, 0])
  return (
    <motion.li className="wheel-point" style={{ opacity, x }}>
      <h3>{point.title}</h3>
      <p className={point.live ? 'is-live' : undefined}>{point.text}</p>
    </motion.li>
  )
}

export function About() {
  const reduced = useReducedMotion()
  const stageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ['start end', 'center center'] })

  // The photo drops in from above, spinning and growing until it settles in the centre of the wheel.
  const photoY = useTransform(scrollYProgress, [0, 0.55], [-320, 0])
  const photoScale = useTransform(scrollYProgress, [0, 0.55], [0.3, 1])
  const photoRotate = useTransform(scrollYProgress, [0, 0.55], [-180, 0])
  const photoOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const ringScale = useTransform(scrollYProgress, [0.25, 0.7], [0.55, 1])
  const ringOpacity = useTransform(scrollYProgress, [0.25, 0.6], [0, 1])

  const still = reduced ? 1 : undefined
  const sideProgress = reduced ? undefined : scrollYProgress

  const renderSide = (points: Point[], side: 'left' | 'right') => (
    <ul className={`wheel-side is-${side}`}>
      {points.map((point, index) =>
        sideProgress ? (
          <SidePoint
            key={point.title}
            point={point}
            side={side}
            progress={sideProgress}
            start={0.5 + index * 0.13 + (side === 'right' ? 0.06 : 0)}
          />
        ) : (
          <li key={point.title} className="wheel-point">
            <h3>{point.title}</h3>
            <p className={point.live ? 'is-live' : undefined}>{point.text}</p>
          </li>
        ),
      )}
    </ul>
  )

  return (
    <section id="about">
      <SectionHeader index="01" kicker="WHO AM I" title="ABOUT" accent="ME" />
      <Reveal className="about-lead" delay={0.08}>
        <p>{aboutParagraph}</p>
      </Reveal>
      <div className="wheel-layout" ref={stageRef}>
        {renderSide(aboutLeft, 'left')}
        <div className="wheel">
          <motion.div
            className="wheel-rings"
            style={{ scale: still ?? ringScale, opacity: still ?? ringOpacity }}
          >
            <span className="wheel-track t1" aria-hidden="true" />
            <span className="wheel-track t2" aria-hidden="true" />
            <Ring tools={wheelOuter} radius={46} />
            <Ring tools={wheelInner} radius={31} reverse />
          </motion.div>
          <motion.div
            className="wheel-photo"
            style={reduced ? undefined : { y: photoY, scale: photoScale, rotate: photoRotate, opacity: photoOpacity }}
          >
            <span className="wheel-photo-frame">
              <img src={asset(profile.photo)} alt={profile.name} />
            </span>
          </motion.div>
        </div>
        {renderSide(aboutRight, 'right')}
      </div>
    </section>
  )
}
