import { competitions, ctfAchievements } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Competitions() {
  return (
    <section id="competitions">
      <SectionHeader index="04" kicker="BATTLE RECORD" title="CTF" accent="COMPETITIONS" />
      <div className="ctf-boxes-grid">
        {competitions.map((event, index) => (
          <Reveal key={event.name} delay={index * 0.1}>
            <article className="ctf-box">
            {'rank' in event ? <div className="ctf-box-rank">{event.rank}</div> : <div className="ctf-box-status-label">{event.status}</div>}
            <div className="ctf-box-name">{event.name}</div>
            {event.org.map((line) => (
              <div className="ctf-box-org" key={line}>{line}</div>
            ))}
            <div className="ctf-box-tags">
              {event.tags.map((tag) => (
                <span key={tag.label} className={`ctf-cat-tag ${tag.tone}`}>{tag.label}</span>
              ))}
            </div>
            {'stats' in event && event.stats ? (
              <div className="ctf-box-stats">
                {event.stats.map((stat) => (
                  <div className="ctf-box-stat" key={stat.label}>
                    <span className="ctf-box-stat-n">{stat.value}</span>
                    <span className="ctf-box-stat-l">{stat.label}</span>
                  </div>
                ))}
              </div>
            ) : null}
            </article>
          </Reveal>
        ))}
        <Reveal className="ctf-achievements-banner" delay={0.2}>
          {ctfAchievements.map((item) => (
            <div className="ctf-achiev-item" key={item.label}>
              <div className="ctf-achiev-number">{item.value}</div>
              <div className="ctf-achiev-label">{item.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
