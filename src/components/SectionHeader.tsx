import { Reveal } from './Reveal'

export function SectionHeader({ index, kicker, title, accent }: { index: string; kicker: string; title: string; accent: string }) {
  return (
    <Reveal className="section-header">
      <span className="section-index" aria-hidden="true">{index}</span>
      <div className="section-heading">
        <div className="section-tag">{index}. {kicker}</div>
        <h2 className="section-title">{title} <span>{accent}</span></h2>
      </div>
    </Reveal>
  )
}
