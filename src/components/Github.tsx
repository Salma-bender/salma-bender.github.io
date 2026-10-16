import { githubProfile, profile, repos } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Github() {
  return (
    <section id="github">
      <SectionHeader index="06" kicker="OPEN SOURCE" title="GITHUB" accent="REPOS" />
      <div className="github-section-inner">
        <Reveal className="github-profile-card" delay={0.05}>
          <div className="gh-avatar"><i className="fab fa-github" aria-hidden="true" /></div>
          <div className="gh-username">{githubProfile.handle}</div>
          <p className="gh-bio">{githubProfile.bio}</p>
          <div className="gh-stats">
            {githubProfile.stats.map((stat) => (
              <div className="gh-stat" key={stat.label}>
                <div className="gh-stat-n">{stat.value}</div>
                <div className="gh-stat-l">{stat.label}</div>
              </div>
            ))}
          </div>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn-primary" style={{ width: '100%' }}>
            <i className="fab fa-github" /> VIEW PROFILE
          </a>
        </Reveal>
        <div className="repos-grid">
          {repos.map((repo, index) => (
            <Reveal key={repo.name} delay={0.08 + index * 0.05}>
              <a
                href={repo.href ?? profile.github}
                target="_blank"
                rel="noreferrer"
                className={`repo-card${repo.upcoming ? ' is-upcoming' : ''}`}
              >
                <div>
                  <div className="repo-name"><i className={repo.icon} aria-hidden="true" /> {repo.name}</div>
                  <p className="repo-desc">{repo.description}</p>
                  <div className="repo-meta">
                    <span className="repo-lang"><span className={`lang-dot lang-${repo.langClass}`} /> {repo.lang}</span>
                    <span className="repo-stars">
                      <i className={repo.upcoming ? 'fas fa-clock' : 'fas fa-star'} aria-hidden="true" /> {repo.stars}
                    </span>
                  </div>
                </div>
                <i className="fas fa-external-link-alt" style={{ color: 'var(--text-dim)', fontSize: '0.7rem' }} aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
