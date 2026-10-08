import React from 'react';

const projects = [
  {
    title: 'Public Health Data Warehouse & Analytics Pipeline',
    area: 'Business intelligence · Healthcare',
    description: 'I modelled a synthetic healthcare reporting scenario in SQL Server, added data-quality constraints and repeatable checks, and connected the output to Power BI.',
    question: 'How can a healthcare team reliably track activity, patient categories and costs?',
    evidence: 'SQL validation, dimensional modelling, Power BI reporting and CI checks.',
    tags: ['SQL Server', 'T-SQL', 'Power BI', 'ETL'],
    github: 'https://github.com/Ayoleyi-dev/Public-Health-Data-Warehouse-Analytics-Pipeline',
    caseStudy: 'https://github.com/Ayoleyi-dev/Public-Health-Data-Warehouse-Analytics-Pipeline/blob/main/CASE_STUDY.md',
    preview: 'healthcare'
  },
  {
    title: 'Jumia Nigeria Smartphone Market Analysis',
    area: 'Commercial & market analytics',
    description: 'I cleaned a historical snapshot of smartphone marketplace listings, corrected scraper parsing issues and explored brand presence, advertised prices and seller patterns.',
    question: 'How do advertised prices and marketplace listings vary by brand and seller type?',
    evidence: '1,960 initial rows; 1,908 in-scope smartphone-candidate listings. Listings are not sales.',
    tags: ['Python', 'Pandas', 'SQL', 'Web scraping'],
    github: 'https://github.com/Ayoleyi-dev/Jumia-Phone-Market-Webscraping-EDA',
    caseStudy: 'https://github.com/Ayoleyi-dev/Jumia-Phone-Market-Webscraping-EDA/blob/main/reports/analysis_findings.md'
  },
  {
    title: 'Hytale Player & Server Analytics',
    area: 'Product analytics · Telemetry',
    description: 'I built an analytics pipeline and dashboard for simulated player behaviour, then a Java server collector to capture observed lifecycle and health events on a local test server.',
    question: 'How could a game team measure engagement and server health responsibly?',
    evidence: 'Reproducible synthetic metrics and genuine local-server observations are explicitly separated.',
    tags: ['Java', 'Python', 'SQLite', 'Streamlit'],
    github: 'https://github.com/Ayoleyi-dev/Hytale-Data-Analysis-Project',
    caseStudy: 'https://github.com/Ayoleyi-dev/Hytale-Data-Analysis-Project/blob/main/PROJECT_STORY.md',
    demo: 'https://hytale-analytics-ayoleyi.streamlit.app'
  },
  {
    title: 'PII Privacy & Data Quality Pipeline',
    area: 'Data validation · Privacy',
    description: 'I wrote a Python workflow that checks synthetic customer data, pseudonymizes identifiers and produces privacy-aware quality reports.',
    question: 'Can records be checked for quality without copying sensitive values into issue logs?',
    evidence: 'Masking and pseudonymization rules, validation checks and automated tests. Synthetic data only.',
    tags: ['Python', 'Data quality', 'Privacy', 'Pytest'],
    github: 'https://github.com/Ayoleyi-dev/PII-Data-Privacy-QA-Pipeline'
  },
  {
    title: 'AI Document Extraction QA Validator',
    area: 'Data automation · Quality assurance',
    description: 'I built post-extraction checks for invoice JSON, including schema validity, duplicate identifiers, line-item calculations and invoice reconciliation.',
    question: 'How can bad extraction results be flagged before they reach downstream systems?',
    evidence: 'Record-level issue reports and batch summaries, with tests for invalid inputs and financial mismatches.',
    tags: ['Python', 'JSON Schema', 'Validation', 'Pytest'],
    github: 'https://github.com/Ayoleyi-dev/AI-Document-Extraction-QA-Validator'
  },
  {
    title: 'Excel Chocolate Sales Analysis',
    area: 'Excel · Sales reporting',
    description: 'I audited a historical sales workbook and built interactive views for KPI monitoring, products, markets and scenario planning.',
    question: 'How can sales reporting help someone explore performance and plan a target?',
    evidence: '1,094 historical transactions, filter-driven views, data audit and what-if planning.',
    tags: ['Excel', 'PivotTables', 'SUMIFS', 'Scenario planning'],
    github: 'https://github.com/Ayoleyi-dev/Excel-Chocolate-Sales-Analysis'
  }
];

function ProjectCard({ project, index }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition-colors hover:border-emerald-500/40">
      <div className="flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">{project.area}</p>
          <span className="font-mono text-sm text-slate-500">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold tracking-tight text-white sm:text-2xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
        {project.preview === 'healthcare' && (
          <video
            className="mt-5 w-full rounded-lg border border-slate-700 bg-slate-950"
            src="/videos/powerbi-demo.mp4"
            controls
            preload="none"
            aria-label="Power BI healthcare dashboard walkthrough"
          />
        )}
        <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Business question</p>
          <p className="mt-2 text-sm leading-6 text-slate-200">{project.question}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Evidence / scope</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{project.evidence}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">{tag}</span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 pt-7 text-sm font-semibold">
          <a className="text-emerald-400 hover:text-emerald-300 focus-visible:underline" href={project.github} target="_blank" rel="noreferrer">
            View repository ↗
          </a>
          {project.caseStudy && (
            <a className="text-slate-200 hover:text-white focus-visible:underline" href={project.caseStudy} target="_blank" rel="noreferrer">
              Read case study ↗
            </a>
          )}
          {project.demo && (
            <a className="text-slate-200 hover:text-white focus-visible:underline" href={project.demo} target="_blank" rel="noreferrer">
              Live dashboard ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24">
      <div className="mb-9 max-w-3xl">
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-emerald-400">Portfolio</p>
        <h2 id="projects-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Selected analytics & automation projects
        </h2>
        <p className="mt-4 leading-7 text-slate-400">
          I show the questions I tried to answer, the systems I built and the limits of the data.
          Each project links directly to the source code or supporting documentation.
        </p>
      </div>
      <div className="grid items-stretch gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.github} project={project} index={index} />
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Also exploring</p>
        <h3 className="mt-2 text-xl font-bold text-white">Computational biology & scientific analytics</h3>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
          I study Biochemistry and also explore bioinformatics, structural modelling and molecular docking.
          My in-silico modelling work is exploratory research; computational predictions are not laboratory
          validation or evidence of clinical effectiveness.
        </p>
        <a href="https://github.com/Ayoleyi-dev/Ai-Homology-Modeling" target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-semibold text-emerald-400 hover:text-emerald-300">
          Explore molecular modelling research ↗
        </a>
      </div>
    </section>
  );
}
