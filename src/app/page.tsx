import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { ProjectCard, projects } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

const courses = [
  { title: "Inglês", provider: "CNA", year: "2024", status: "Concluído" },
];

export default function Home() {
  return <main id="conteudo">
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-top"><span className="eyebrow">PORTFÓLIO / 2026</span><span className="hero-status"><i /> DADOS / TECNOLOGIA</span></div>
      <div className="hero-content"><p className="hero-intro">Olá, eu sou</p><h1 id="hero-title">Igor Mazeti<span className="hero-dot">.</span></h1><p className="hero-position">Estudante de ADS no IFSP · Em busca de estágio em Dados e BI</p><div className="hero-bottom"><p>Transformo dados em análises claras e visualizações úteis. Construo projetos com Python, SQL e ferramentas de BI.</p><div className="hero-ctas"><Link className="button button-primary" href="#projetos">Explorar projetos <span aria-hidden="true"><ArrowIcon /></span></Link><Link className="text-link" href="#contato">Fale comigo <span aria-hidden="true"><ArrowIcon /></span></Link></div></div><div className="hero-profiles"><a href="https://github.com/IgorMzt" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon /></a><a href="https://www.linkedin.com/in/igor-mazeti" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowIcon /></a><a href="/curriculos/igor-mazeti-curriculo-dados.pdf" target="_blank" rel="noopener noreferrer">Currículo de Dados <ArrowIcon /></a></div></div>
      <div className="hero-footer"><span>ROLE PARA EXPLORAR</span><span>01 — 04</span></div>
    </section>

    <section id="projetos" className="section projects-section"><div className="container"><SectionHeading index="01" eyebrow="TRABALHOS SELECIONADOS" title="Projetos em foco." description="DataVision abre a seleção com dados e visualização; Gym OS mostra meu interesse em construir produtos digitais." /><div className="projects-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div></section>

    <section id="sobre" className="section about-section"><div className="container about-grid"><SectionHeading index="02" eyebrow="SOBRE" title="Entre lógica e clareza." /><div className="about-copy">
      <p>Sou Igor Mazeti de Oliveira. Dados são a área que mais me interessa: análise, visualização e a busca por respostas bem fundamentadas.</p>
      <p>Também me interesso por desenvolvimento de software como forma de criar ferramentas e experiências em torno dessas ideias. Aqui apresento projetos que conectam essas áreas.</p>
      <section className="learning-group" aria-labelledby="formation-heading"><h3 id="formation-heading" className="eyebrow">FORMAÇÃO</h3><div className="learning-list"><div className="learning-item"><span className="learning-year">2024 — 2027</span><div><strong>Análise e Desenvolvimento de Sistemas</strong><span>Instituto Federal de São Paulo (IFSP) · Conclusão prevista: dezembro de 2027</span></div></div></div></section>
      <section className="learning-group" aria-labelledby="courses-heading"><h3 id="courses-heading" className="eyebrow">CURSOS</h3><div className="learning-list">{courses.map((course) => <div className="learning-item" key={`${course.title}-${course.provider}`}><span className="learning-year">{course.year}</span><div><strong>{course.title}</strong><span>{course.provider} · {course.status}</span></div></div>)}</div></section>
    </div></div></section>

    <section className="section skills-section"><div className="container skills-grid"><SectionHeading index="03" eyebrow="ÁREAS E FERRAMENTAS" title="O que me move." /><div className="skill-lines"><div><span>01</span><div><h3>Análise de dados</h3><p>Python · Pandas · NumPy · SQL · Excel</p></div><span aria-hidden="true"><ArrowIcon /></span></div><div><span>02</span><div><h3>Visualização de dados e BI</h3><p>Power BI · Chart.js · Matplotlib</p></div><span aria-hidden="true"><ArrowIcon /></span></div><div><span>03</span><div><h3>Desenvolvimento de software</h3><p>Flask · HTML · CSS · JavaScript</p></div><span aria-hidden="true"><ArrowIcon /></span></div></div></div></section>

    <section id="contato" className="section contact-section"><div className="container"><p className="eyebrow">04 / CONTATO</p><h2>Vamos conversar<span>.</span></h2><p>Interessado em trocar ideias sobre dados, visualização ou um projeto?</p><div className="contact-actions"><a className="button button-primary" href="mailto:igormazetii@gmail.com">igormazetii@gmail.com <span aria-hidden="true"><ArrowIcon /></span></a><a className="text-link" href="https://wa.me/5511981713690" target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true"><ArrowIcon /></span></a><a className="text-link" href="https://www.linkedin.com/in/igor-mazeti" target="_blank" rel="noopener noreferrer">Conectar no LinkedIn <span aria-hidden="true"><ArrowIcon /></span></a></div>
      <div className="resume-section" aria-labelledby="resume-heading"><div className="resume-heading"><div><p className="eyebrow">PARA OPORTUNIDADES</p><h3 id="resume-heading">Currículos<span>.</span></h3></div><p>Escolha a versão mais próxima da vaga.</p></div><div className="resume-grid"><a className="resume-card resume-card-primary" href="/curriculos/igor-mazeti-curriculo-dados.pdf" target="_blank" rel="noopener noreferrer"><span className="eyebrow">01 / PDF · 1 PÁGINA</span><span className="resume-card-bottom"><strong>Dados e BI</strong><ArrowIcon /></span></a><a className="resume-card" href="/curriculos/igor-mazeti-curriculo-desenvolvimento.pdf" target="_blank" rel="noopener noreferrer"><span className="eyebrow">02 / PDF · 1 PÁGINA</span><span className="resume-card-bottom"><strong>Desenvolvimento de software</strong><ArrowIcon /></span></a></div></div>
    </div></section>
    <footer className="site-footer"><div className="container footer-inner"><span>© 2026 IGOR MAZETI DE OLIVEIRA</span><div className="footer-links"><a href="https://www.linkedin.com/in/igor-mazeti" target="_blank" rel="noopener noreferrer">LINKEDIN <ArrowIcon /></a><a href="https://github.com/IgorMzt" target="_blank" rel="noopener noreferrer">GITHUB <ArrowIcon /></a><Link href="#conteudo">VOLTAR AO TOPO <ArrowIcon direction="up" /></Link></div></div></footer>
  </main>;
}
