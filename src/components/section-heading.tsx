export function SectionHeading({ index, eyebrow, title, description }: { index: string; eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><p className="eyebrow"><span>{index}</span> / {eyebrow}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div>;
}
