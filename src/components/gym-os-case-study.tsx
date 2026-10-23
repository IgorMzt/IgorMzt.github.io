import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";

const features = [
  "Cadastro e gerenciamento de alunos",
  "Controle de entrada por reconhecimento facial com múltiplas amostras",
  "Intervalo entre leituras e otimização do controle de acesso",
  "Gerenciamento de alunos por professores",
  "Painel administrativo e relatórios",
  "Integração financeira com a API Asaas",
  "Separação dos dados de diferentes academias",
];

const technologies = ["Python", "Flask", "PostgreSQL", "SQLite", "HTML", "CSS", "JavaScript", "Jinja2", "Docker", "Pytest", "API Asaas", "React Native", "Expo"];

export function GymOSCaseStudy() {
  return <main id="conteudo" className="case-study gym-case">
    <div className="container">
      <Link className="back-link" href="/#projetos"><ArrowIcon direction="left" /> Voltar aos projetos</Link>
      <header className="case-hero">
        <p className="eyebrow">02 / GESTÃO · PLATAFORMA WEB</p>
        <h1>Gym OS<span>.</span></h1>
        <p>Um sistema de gestão de academias que conecta a operação administrativa ao controle de acesso e aos pagamentos.</p>
        <a className="button button-primary case-repo-link" href="https://github.com/IgorMzt/Gym-Os" target="_blank" rel="noopener noreferrer">Ver repositório no GitHub <span aria-hidden="true"><ArrowIcon /></span></a>
      </header>

      <div className="gym-case-visual" aria-hidden="true"><span className="gym-case-label">GYM OS / 02</span><div className="gym-case-symbol"><span>G</span></div><span className="gym-case-caption">GESTÃO · ACESSO · FINANCEIRO</span></div>

      <section className="case-section case-two-columns" aria-labelledby="gym-problem-title">
        <div><p className="eyebrow">O DESAFIO</p><h2 id="gym-problem-title">Uma operação, muitos sistemas.</h2></div>
        <div className="case-prose"><p>Academias precisam administrar alunos, professores, mensalidades e acesso. Processos manuais ou sistemas desconectados fragmentam essas informações e dificultam a gestão e o acompanhamento das atividades.</p><p>O Gym OS reúne essas operações em uma plataforma web, integrando ferramentas administrativas, pagamentos e controle de entrada por reconhecimento facial.</p></div>
      </section>

      <section className="case-section" aria-labelledby="gym-flow-title">
        <div className="case-section-heading"><p className="eyebrow">A ESTRUTURA</p><h2 id="gym-flow-title">Gestão conectada.</h2></div>
        <div className="case-steps"><div><span>01</span><h3>Administrar</h3><p>Cadastros de alunos e professores, vínculos, painel e relatórios.</p></div><div><span>02</span><h3>Controlar acesso</h3><p>Identificação facial com múltiplas amostras e mecanismos de otimização de leituras.</p></div><div><span>03</span><h3>Acompanhar pagamentos</h3><p>Situação de mensalidades e integração financeira com a API Asaas.</p></div></div>
      </section>

      <section className="case-section case-two-columns" aria-labelledby="gym-features-title">
        <div><p className="eyebrow">FUNCIONALIDADES</p><h2 id="gym-features-title">Módulos que trabalham juntos.</h2></div>
        <ul className="case-feature-list">{features.map((feature, index) => <li key={feature}><span>{String(index + 1).padStart(2, "0")}</span>{feature}</li>)}</ul>
      </section>

      <section className="case-section case-two-columns" aria-labelledby="gym-data-title">
        <div><p className="eyebrow">DADOS E TECNOLOGIAS</p><h2 id="gym-data-title">Da operação à persistência.</h2></div>
        <div className="case-prose"><p>A aplicação trabalha com dados cadastrais de alunos e professores, registros de acesso, vínculos operacionais, situação de mensalidades, transações financeiras e dados biométricos usados na identificação facial.</p><div className="case-tech-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
      </section>

      <section className="case-section case-two-columns" aria-labelledby="gym-decisions-title">
        <div><p className="eyebrow">MEU PAPEL E DECISÕES</p><h2 id="gym-decisions-title">Conectar operação e controle de acesso.</h2></div>
        <div className="case-prose"><p>Reuni cadastros, controle de acesso e financeiro em módulos conectados. A identificação facial usa múltiplas amostras e um intervalo entre tentativas para reduzir leituras repetidas.</p><p>Na evolução documentada do projeto, um programa local passou a integrar câmera e catraca, com armazenamento temporário e sincronização para funcionar sem conexão. A aplicação separa dados por academia e mantém arquivos biométricos fora da área pública da interface.</p></div>
      </section>

      <section className="case-section case-two-columns" aria-labelledby="gym-evolution-title">
        <div><p className="eyebrow">EVOLUÇÃO DO PROJETO</p><h2 id="gym-evolution-title">Da gestão ao modelo SaaS.</h2></div>
        <div className="case-prose"><p>A linha V6 documentada no repositório reúne gerenciamento centralizado, assinaturas e personalização por academia, além de um aplicativo do aluno em React Native e Expo.</p><p>A arquitetura separa a operação de cada academia do controle central do produto. O projeto segue em evolução.</p></div>
      </section>

      <section className="case-section case-two-columns" aria-labelledby="gym-result-title">
        <div><p className="eyebrow">RESULTADO</p><h2 id="gym-result-title">Módulos integrados, evolução incremental.</h2></div>
        <div className="case-prose"><p>Um fluxo reúne cadastro do aluno, verificação de acesso e acompanhamento administrativo. A arquitetura documentada separa rotas, serviços, dados e o agente local de acesso.</p><p>Em uma etapa anterior de validação, <strong>64 testes automatizados passaram</strong>. A contagem representa aquela etapa do desenvolvimento.</p><a className="text-link" href="https://github.com/IgorMzt/Gym-Os" target="_blank" rel="noopener noreferrer">Explorar o código no GitHub <span aria-hidden="true"><ArrowIcon /></span></a></div>
      </section>

      <Link className="back-link" href="/#projetos"><ArrowIcon direction="left" /> Todos os projetos</Link>
    </div>
  </main>;
}
