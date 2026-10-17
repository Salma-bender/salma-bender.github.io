import { useReducedMotion } from 'framer-motion'
import { logo, marqueeTools, type Tool } from '../data/content'

function Item({ tool }: { tool: Tool }) {
  return (
    <span className="marquee-item">
      {tool.slug ? <img src={logo(tool.slug)} alt="" loading="lazy" /> : <i className="fas fa-shield-alt" aria-hidden="true" />}
      {tool.name}
    </span>
  )
}

export function Marquee() {
  const reduced = useReducedMotion()

  return (
    <div className="marquee-bleed">
      <p className="marquee-label">// OUTILS ET TECHNOLOGIES QUE J'UTILISE</p>
      <div className={`marquee${reduced ? ' is-static' : ''}`} aria-hidden="true">
        <div className="marquee-track">
          <div className="marquee-group">
            {marqueeTools.map((tool) => <Item key={tool.name} tool={tool} />)}
          </div>
          {reduced ? null : (
            <div className="marquee-group">
              {marqueeTools.map((tool) => <Item key={`${tool.name}-copy`} tool={tool} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
