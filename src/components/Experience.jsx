import React from 'react';

const experiences = [
  {
    title: 'Data & Analytics Officer',
    organisation: 'DIAMS',
    type: 'Operations & reporting',
    description: 'I maintain operational trackers, validate incoming records and prepare recurring KPI reports. I also improve Google Sheets reporting workflows with Apps Script.'
  },
  {
    title: 'Analytics work',
    organisation: 'Silver Lue',
    type: 'Audience & market insights',
    description: 'I cleaned and analysed audience and content-performance data, summarising patterns and recommendations for publishing decisions.'
  },
  {
    title: 'Data & Market Analytics Consultant',
    organisation: 'Son of I Am · Client project',
    type: 'Commercial research',
    description: 'I assembled source-tracked artwork price comparisons in Excel to support discussion of pricing and positioning. Findings are comparative research, not verified sales results.'
  },
  {
    title: 'SIWES Trainee',
    organisation: 'NAFDAC · Analytical Chemistry / HPLC laboratories',
    type: 'Laboratory data integrity',
    description: 'I have worked with structured analytical documentation, quality-control procedures and traceable records in laboratory settings.'
  }
];

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-24">
      <div className="mb-9 max-w-3xl">
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-emerald-400">Experience</p>
        <h2 id="experience-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          The work behind the projects
        </h2>
        <p className="mt-4 leading-7 text-slate-400">
          My focus is reliable reporting and practical analysis. I keep client data private and describe
          work without attaching unsupported percentages or commercial outcomes.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {experiences.map((item) => (
          <article key={item.organisation} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">{item.type}</p>
            <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-1 text-sm font-medium text-slate-300">{item.organisation}</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
