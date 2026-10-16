import { projects, type Project } from '../data/content'
import { ConnectorLines } from './ConnectorLines'
import { IsometricPlatform } from './IsometricPlatform'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

function Summary({ text }: { text: string }) {
  const token = '(labsoc.local)'
  const at = text.indexOf(token)
  if (at === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, at)}(<em>labsoc.local</em>){text.slice(at + token.length)}
    </>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const className = `project-card accent-${project.accent}${project.featured ? ' is-featured' : ''}`
  const body = (
    <>
      <div className="project-tools">
        <span className="project-tools-label">TOOLS</span>
        <div className="project-techs">
          {project.techs.map((tech) => (
            <span className="tech-pill" key={tech}>{tech}</span>
          ))}
        </div>
      </div>
      <IsometricPlatform icon={project.icon} accent={project.accent} />
      <div className="project-main">
        <div className="project-head">
          <span className="project-status">{project.status}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-desc">
          <Summary text={project.summary} />
          {project.scenarios?.map((scenario) => (
            <p key={scenario.lead} className={`scenario ${scenario.tone}`}>
              <strong>► {scenario.lead}</strong> — {scenario.text}
            </p>
          ))}
        </div>
        <div className={`project-footer${project.footerTone === 'amber' ? ' is-amber' : ''}`}>{project.footer}</div>
      </div>
    </>
  )

  if (!project.href) return <article className={className}>{body}</article>

  return (
    <a className={className} href={project.href} target="_blank" rel="noreferrer">
      {body}
    </a>
  )
}

export function Projects() {
  return (
    <section id="projects">
      <SectionHeader index="03" kicker="PORTFOLIO" title="SECURITY" accent="PROJECTS" />
      <div className="stage projects-grid">
        <ConnectorLines />
        {projects.map((project, index) => (
          <Reveal key={project.title} className={project.featured ? 'is-wide' : undefined} delay={(index % 3) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
