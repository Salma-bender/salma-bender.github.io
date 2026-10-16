import { useReducedMotion } from 'framer-motion'
import { marqueeItems } from '../data/content'

export function Marquee() {
  const reduced = useReducedMotion()

  return (
    <div className="marquee-bleed">
      <div className={`marquee${reduced ? ' is-static' : ''}`} aria-hidden="true">
        <div className="marquee-track">
          <div className="marquee-group">
            {marqueeItems.map((item) => (
              <span className="marquee-item" key={item}>{item}</span>
            ))}
          </div>
          {reduced ? null : (
            <div className="marquee-group">
              {marqueeItems.map((item) => (
                <span className="marquee-item" key={`${item}-copy`}>{item}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
