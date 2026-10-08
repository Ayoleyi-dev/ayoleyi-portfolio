import React from 'react';

const skills = ['SQL & data modelling', 'Power BI & Excel', 'Python & Pandas', 'Reporting automation'];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="flex flex-col-reverse items-center gap-10 py-6 lg:flex-row lg:gap-16 lg:py-12">
      <div className="flex-1 text-center lg:text-left">
        <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
          Data analytics · Business intelligence · Automation
        </p>
        <h1 id="hero-title" className="text-4xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
          Hi, I'm Ayoleyi <span className="text-emerald-400">Gbenga-Ayodeji.</span>
        </h1>
        <h2 className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
          I build data systems people can understand and trust.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 lg:mx-0">
          I'm a Lagos-based data analyst and Biochemistry undergraduate at the University of Lagos.
          I work on operational reporting, SQL analytics, data quality, dashboards and workflow automation.
          My portfolio combines hands-on reporting work with reproducible projects in healthcare,
          e-commerce and product analytics.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start" aria-label="Core skills">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300">
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
          <a href="#projects" className="rounded-lg bg-emerald-400 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400">
            Explore my work →
          </a>
          <a href="mailto:ayoleyi05@gmail.com?subject=Analytics%20opportunity" className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-emerald-400 hover:text-emerald-400">
            Get in touch
          </a>
          <a href="https://github.com/Ayoleyi-dev" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-800 px-6 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-500">
            GitHub ↗
          </a>
        </div>
        <p className="mt-5 text-sm text-slate-500">
          Open to junior Data Analyst, BI, reporting and analytics automation opportunities.
        </p>
      </div>
      <div className="w-44 shrink-0 sm:w-56 lg:w-72">
        <div className="relative">
          <div className="absolute inset-3 rounded-full bg-emerald-500/25 blur-3xl" aria-hidden="true" />
          <img
            src="/images/ayoleyi.png"
            alt="Portrait of Ayoleyi Gbenga-Ayodeji"
            className="relative aspect-square w-full rounded-full border-4 border-slate-800 object-cover shadow-2xl"
            width="288"
            height="288"
          />
        </div>
        <div className="relative mt-5 rounded-xl border border-slate-800 bg-slate-900/80 p-4 text-center">
          <p className="text-xs uppercase tracking-widest text-emerald-400">Academic background</p>
          <p className="mt-1 text-sm font-semibold text-slate-100">B.Sc. Biochemistry · UNILAG</p>
          <p className="mt-1 text-xs text-slate-400">Expected graduation: 2027</p>
        </div>
      </div>
    </section>
  );
}
