import Link from "next/link";
import Image from "next/image";

export type Project = { slug: string; number: string; title: string; category: string; description: string; tags: string[]; motif: "data" | "gym" };

export const projects: Project[] = [
  { slug: "datavision", number: "01", title: "DataVision", category: "Projeto em destaque / Dados", description: "Plataforma web que reúne importação, preparação, análise exploratória e visualização de dados em painéis interativos.", tags: ["Python", "Pandas", "Flask", "Chart.js"], motif: "data" },
  { slug: "gym-os", number: "02", title: "Gym OS", category: "Gestão / Plataforma web", description: "Sistema de gestão de academias que reúne operação administrativa, pagamentos e controle de acesso por reconhecimento facial.", tags: ["Python", "Flask", "PostgreSQL", "Docker"], motif: "gym" },
];

export function ProjectCard({ project }: { project: Project }) {
  return <article className={`project-card project-${project.motif}`}>
    <Link className="project-link" href={`/projects/${project.slug}`} aria-label={`Ver projeto ${project.title}`}>
      <div className="project-visual" aria-hidden="true">
        <span className="visual-corner">IM / {project.number}</span>
        {project.motif === "data" ? <Image className="project-screenshot" src="/images/datavision/overview.jpg" alt="" fill sizes="(max-width: 700px) 100vw, 60vw" /> : <div className="gym-visual"><div className="gym-orbit"><span>G</span></div><span>GYM / OS</span></div>}
      </div>
      <div className="project-info"><div><p className="eyebrow">{project.number} / {project.category}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><span className="project-arrow" aria-hidden="true">↗</span></div>
    </Link>
  </article>;
}
