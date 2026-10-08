import React from 'react';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 px-6 py-12 text-center sm:px-12">
      <p className="font-mono text-sm uppercase tracking-widest text-emerald-400">Let's connect</p>
      <h2 id="contact-title" className="mt-3 text-3xl font-bold text-white sm:text-4xl">Have a data problem worth solving?</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
        I'm interested in analyst, BI, operations reporting and automation roles, as well as relevant
        collaborations in healthcare and computational biology. Get in touch for my latest role-specific CV.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href="mailto:ayoleyi05@gmail.com?subject=Portfolio%20enquiry" className="rounded-lg bg-emerald-400 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-emerald-300">Email me ↗</a>
        <a href="https://www.linkedin.com/in/ayoleyi-gbenga-ayodeji-aa99b6395/" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-emerald-400">LinkedIn ↗</a>
        <a href="https://github.com/Ayoleyi-dev" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-emerald-400">GitHub ↗</a>
      </div>
      <p className="mt-6 text-xs text-slate-500">
        I provide my current CV directly so that employers receive an accurate, role-relevant version.
      </p>
    </section>
  );
}
