import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-20 flex flex-col gap-16 md:gap-24">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;