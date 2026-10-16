export function IsometricPlatform({
  icon,
  accent,
  compact = false,
}: {
  icon: string
  accent: string
  compact?: boolean
}) {
  return (
    <div className={`iso-scene${compact ? ' iso-scene-sm' : ''} accent-${accent}`} data-connector>
      <div className="iso-float">
        <div className="iso-platform">
          <span className="iso-ring iso-ring-a" />
          <span className="iso-ring iso-ring-b" />
          <span className="iso-glyph"><i className={icon} aria-hidden="true" /></span>
        </div>
      </div>
    </div>
  )
}
