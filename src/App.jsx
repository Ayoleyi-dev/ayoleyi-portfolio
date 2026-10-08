import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-400 selection:text-slate-950">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-emerald-400 focus:p-3 focus:text-slate-950">
        Skip to content
      </a>
      <header className="border-b border-slate-800/70">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <a href="#top" className="font-bold tracking-tight text-slate-100 hover:text-emerald-400">
            Ayoleyi <span className="text-emerald-400">/ Analytics</span>
          </a>
          <div className="flex items-center gap-4 text-sm text-slate-300 sm:gap-7">
            <a className="hover:text-emerald-400" href="#projects">Projects</a>
            <a className="hover:text-emerald-400" href="#experience">Experience</a>
            <a className="hover:text-emerald-400" href="#contact">Contact</a>
          </div>
        </nav>
      </header>
      <main id="main-content" className="mx-auto flex max-w-6xl flex-col gap-20 px-5 pb-16 pt-8 sm:px-8 md:gap-28 md:pt-12">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-slate-800 px-5 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Ayoleyi Gbenga-Ayodeji · Portfolio projects clearly distinguish synthetic data from real observations.
      </footer>
    </div>
  );
}
