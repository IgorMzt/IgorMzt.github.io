import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";

const features = [
  "Importação e diagnóstico de arquivos CSV e Excel",
  "Indicadores de qualidade dos dados",
  "Mapeamento de colunas com revisão do usuário",
  "Limpeza e preparação assistida",
  "Painéis e indicadores analíticos",
  "Detecção de anomalias por regras estatísticas e comportamentais",
  "Comparação entre execuções de análises",
];

const technologies = ["Python", "Flask", "Pandas", "NumPy", "SQLAlchemy", "SQLite", "JavaScript", "Chart.js", "Matplotlib", "Pytest"];

export function DataVisionCaseStudy() {
  return <main id="conteudo" className="case-study datavision-case">
    <div className="container">
      <Link className="back-link" href="/#projetos"><ArrowIcon direction="left" /> Voltar aos projetos</Link>
      <header className="case-hero">
        <p className="eyebrow">01 / DADOS · PLATAFORMA WEB</p>
        <h1>DataVision<span>.</span></h1>
        <p>Uma plataforma de análise de dados que transforma arquivos tabulares em indicadores e painéis interativos.</p>
        <a className="button button-primary case-repo-link" href="https://github.com/IgorMzt/DataVision" target="_blank" rel="noopener noreferrer">Ver repositório no GitHub <span aria-hidden="true"><ArrowIcon /></span></a>
      </header>

      <figure className="case-image case-image-hero">
        <Image src="/images/datavision/overview.jpg" alt="Página inicial do DataVision com apresentação do fluxo de dados, preparação, análise e resultados" width={1280} height={720} priority sizes="(max-width: 1200px) 100vw, 1200px" />
        <figcaption>Entrada da plataforma e visão do fluxo de análise.</figcaption>
      </figure>

      <section className="case-section case-two-columns" aria-labelledby="problem-title">
        <div><p className="eyebrow">O DESAFIO</p><h2 id="problem-title">Do arquivo bruto à leitura útil.</h2></div>
        <div className="case-prose"><p>Antes de analisar uma planilha, é preciso conferir colunas, corrigir valores ausentes e entender a qualidade dos registros. Quando essas etapas ficam espalhadas por várias ferramentas, a análise demora mais.</p><p>Criei o DataVision para reunir importação, preparação, análise exploratória e visualização em um só fluxo. A plataforma recebe arquivos CSV e Excel e apresenta indicadores e painéis interativos.</p></div>
      </section>

      <section className="case-section" aria-labelledby="flow-title">
        <div className="case-section-heading"><p className="eyebrow">O FLUXO</p><h2 id="flow-title">Preparar. Analisar. Visualizar.</h2></div>
        <div className="case-steps"><div><span>01</span><h3>Importar</h3><p>Carregamento de arquivos CSV e Excel e diagnóstico inicial dos dados.</p></div><div><span>02</span><h3>Preparar</h3><p>Indicadores de qualidade, mapeamento de colunas revisável e limpeza assistida.</p></div><div><span>03</span><h3>Explorar</h3><p>Indicadores, gráficos, detecção de anomalias e comparação entre análises.</p></div></div>
      </section>

      <div className="case-image-grid">
        <figure className="case-image"><Image src="/images/datavision/quality.jpg" alt="Tela de qualidade dos dados com contagens de linhas, colunas, ausentes, duplicatas e diagnóstico" width={1280} height={720} sizes="(max-width: 700px) 100vw, 50vw" /><figcaption>Diagnóstico de qualidade e estrutura dos dados.</figcaption></figure>
        <figure className="case-image"><Image src="/images/datavision/anomalies.jpg" alt="Lista de transações sinalizadas pelo mecanismo de detecção de anomalias do DataVision" width={1280} height={720} sizes="(max-width: 700px) 100vw, 50vw" /><figcaption>Desvios identificados para investigação.</figcaption></figure>
      </div>

      <section className="case-section case-two-columns" aria-labelledby="features-title">
        <div><p className="eyebrow">FUNCIONALIDADES</p><h2 id="features-title">Uma visão integrada dos dados.</h2></div>
        <ul className="case-feature-list">{features.map((feature, index) => <li key={feature}><span>{String(index + 1).padStart(2, "0")}</span>{feature}</li>)}</ul>
      </section>

      <section className="case-section case-two-columns" aria-labelledby="technology-title">
        <div><p className="eyebrow">TECNOLOGIAS E DADOS</p><h2 id="technology-title">Da preparação à interface.</h2></div>
        <div className="case-prose"><p>O projeto usa bases tabulares em CSV e Excel. Dados financeiros simulados serviram para testar transações, valores ausentes, duplicidades, comportamentos atípicos e indicadores de desempenho.</p><div className="case-tech-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
      </section>

      <section className="case-section case-two-columns" aria-labelledby="decisions-title">
        <div><p className="eyebrow">MEU PAPEL E DECISÕES</p><h2 id="decisions-title">Análise com revisão e rastreabilidade.</h2></div>
        <div className="case-prose"><p>Separei o processamento em serviços de preparação, análise, detecção de anomalias e comparação entre execuções. O arquivo original é preservado enquanto as transformações acontecem em uma cópia processada.</p><p>Como cada planilha pode usar nomes de colunas diferentes, o sistema sugere o papel de cada uma e pede a confirmação do usuário. As anomalias vêm acompanhadas dos motivos do alerta. A pontuação indica distância em relação ao padrão observado; não é uma probabilidade de fraude.</p></div>
      </section>

      <figure className="case-image case-image-wide"><Image src="/images/datavision/dashboard.jpg" alt="Painel do DataVision com indicadores de transações e gráficos de distribuição por status e valor por produto" width={1280} height={720} sizes="(max-width: 1200px) 100vw, 1200px" /><figcaption>Painel analítico com dados financeiros simulados.</figcaption></figure>

      <section className="case-section case-two-columns" aria-labelledby="result-title"><div><p className="eyebrow">RESULTADO E VALIDAÇÃO</p><h2 id="result-title">Do diagnóstico aos sinais investigáveis.</h2></div><div className="case-prose"><p>Com os dados financeiros simulados, a plataforma apresenta qualidade dos registros, distribuição de transações por status e valor por produto. A lista de anomalias destaca operações fora do padrão para investigação, sem classificá-las automaticamente como fraude.</p><p>O repositório inclui testes automatizados para componentes do processamento, da análise e das rotas principais. O projeto reúne preparação, exploração e visualização em um fluxo modular.</p><a className="text-link" href="https://github.com/IgorMzt/DataVision" target="_blank" rel="noopener noreferrer">Explorar o código no GitHub <span aria-hidden="true"><ArrowIcon /></span></a></div></section>
      <Link className="back-link" href="/#projetos"><ArrowIcon direction="left" /> Todos os projetos</Link>
    </div>
  </main>;
}
