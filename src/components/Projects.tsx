import { motion, useReducedMotion } from 'framer-motion'
import { projects, type Project } from '../data/content'
import { SectionHeader } from './SectionHeader'

const PER_ROW = 3
// Time between two platforms appearing; the link to the next one draws in between.
const STEP = 0.45

function chunk<T>(items: T[], size: number) {
  const rows: T[][] = []
  for (let i = 0; i < items.length; i += size) rows.push(items.slice(i, i + size))
  return rows
}

function StepText({ project, number }: { project: Project; number: number }) {
  return (
    <div className="path-text">
      <div className="path-head">
        <span className="path-num">{number}</span>
        <h3 className="path-title">{project.title}</h3>
      </div>
      <span className="path-status">{project.status}</span>
      <p className="path-desc">{project.summary}</p>
      <div className="path-techs">
        {project.techs.map((tech) => <span className="tech-pill" key={tech}>{tech}</span>)}
      </div>
      <div className="path-footer">
        <span>{project.footer}</span>
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer" className="path-link">
            <i className="fab fa-github" aria-hidden="true" /> CODE
          </a>
        ) : null}
      </div>
    </div>
  )
}

function Platform({ icon }: { icon: string }) {
  return (
    <div className="path-platform">
      <div className="path-tile">
        <span className="path-inner">
          <span className="path-icon"><i className={icon} aria-hidden="true" /></span>
        </span>
      </div>
    </div>
  )
}

export function Projects() {
  const reduced = useReducedMotion()
  const rows = chunk(projects, PER_ROW)

  return (
    <section id="projects">
      <SectionHeader index="03" kicker="PORTFOLIO" title="SECURITY" accent="PROJECTS" />
      <div className="path">
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="path-row"
            initial={reduced ? false : 'hidden'}
            whileInView="shown"
            viewport={{ once: true, amount: 0.25 }}
          >
            {row.map((project, index) => {
              const number = rowIndex * PER_ROW + index + 1
              const low = index % 2 === 1
              return (
                <div
                  key={project.title}
                  className={`path-step${low ? ' is-low' : ''}`}
                  style={{ ['--col' as string]: index + 1 }}
                >
                  {!low ? <StepTextAnimated project={project} number={number} delay={index * STEP} /> : null}
                  <motion.div
                    className="path-visual"
                    variants={{
                      hidden: { opacity: 0, y: 40, scale: 0.8 },
                      shown: { opacity: 1, y: 0, scale: 1, transition: { delay: index * STEP, duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                    }}
                  >
                    <Platform icon={project.icon} />
                    {index < row.length - 1 ? (
                      <motion.span
                        className="path-link-line"
                        aria-hidden="true"
                        variants={{
                          hidden: { scaleX: 0 },
                          shown: { scaleX: 1, transition: { delay: index * STEP + 0.3, duration: 0.4 } },
                        }}
                      />
                    ) : null}
                  </motion.div>
                  {low ? <StepTextAnimated project={project} number={number} delay={index * STEP} /> : null}
                </div>
              )
            })}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function StepTextAnimated({ project, number, delay }: { project: Project; number: number; delay: number }) {
  return (
    <motion.div
      className="path-text-wrap"
      variants={{
        hidden: { opacity: 0, y: 16 },
        shown: { opacity: 1, y: 0, transition: { delay: delay + 0.15, duration: 0.5 } },
      }}
    >
      <StepText project={project} number={number} />
    </motion.div>
  )
}
