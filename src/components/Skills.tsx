import { skillCategories } from '../data/content'
import { Marquee } from './Marquee'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Skills() {
  return (
    <section id="skills">
      <SectionHeader index="02" kicker="CAPABILITIES" title="TECHNICAL" accent="SKILLS" />
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} delay={(index % 3) * 0.08}>
            <article className="skill-category">
            <div className="skill-cat-header">
              <div className="skill-cat-icon"><i className={category.icon} aria-hidden="true" /></div>
              <div className="skill-cat-title">{category.title}</div>
            </div>
            <div className="skill-tags">
              {category.tags.map((tag) => (
                <span key={tag} className={`skill-tag${category.tone ? ` ${category.tone}` : ''}`}>{tag}</span>
              ))}
            </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Marquee />
    </section>
  )
}
