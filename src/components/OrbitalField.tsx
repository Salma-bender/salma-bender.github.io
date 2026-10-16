import { floatingPills, orbitalRings } from '../data/content'

export function OrbitalField() {
  return (
    <div className="orbit-wrap">
      <div className="orbit-stage" aria-hidden="true">
      <div className="orbit-core">
        <span className="orbit-core-ring" />
        <span className="orbit-core-label">SB</span>
      </div>
      {orbitalRings.map((ring, ringIndex) => {
        const spin = ring.direction === 'cw' ? 'orbit-cw' : 'orbit-ccw'
        const counter = ring.direction === 'cw' ? 'orbit-ccw' : 'orbit-cw'
        return (
          <div
            key={ring.size}
            className={`orbit-ring${ringIndex === 1 ? ' is-alt' : ''}`}
            style={{
              ['--size' as string]: ring.size,
              ['--dur' as string]: `${ring.duration}s`,
              animationName: spin,
            }}
          >
            {ring.items.map((label, index) => {
              const angle = (360 / ring.items.length) * index
              return (
                <div key={label} className="orbit-sat" style={{ transform: `rotate(${angle}deg)` }}>
                  <div className="orbit-upright" style={{ transform: `translate(-50%, -50%) rotate(${-angle}deg)` }}>
                    <div
                      className="orbit-face"
                      style={{ animationName: counter, animationDuration: `${ring.duration}s` }}
                    >
                      <span className={`orbit-badge${index % 2 ? ' is-green' : ''}`} title={label}>
                        {label}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
      </div>
      <ul className="float-pills" aria-hidden="true">
        {floatingPills.map((pill) => (
          <li key={pill} className="float-pill">{pill}</li>
        ))}
      </ul>
    </div>
  )
}
