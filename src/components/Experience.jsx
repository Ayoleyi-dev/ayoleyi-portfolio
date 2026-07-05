import React from 'react';

const Experience = () => {
  return (
    <section className="flex flex-col gap-8">
      <h3 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-4">Leadership & Technical Consulting</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* ULSSA Experience */}
        <div className="p-6 bg-slate-900/40 rounded-xl border border-slate-800">
          <div className="text-emerald-400 font-mono text-sm mb-2">Community Manager & Tutor</div>
          <h4 className="text-xl font-bold text-slate-100 mb-2">ULSSA Tech for Students Programme</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Managed the community and served as an Assistant Tutor for the Data Analysis track. Translated complex data concepts for students during the 10-week virtual program.
          </p>
        </div>

        {/* Silver Lue Experience */}
        <div className="p-6 bg-slate-900/40 rounded-xl border border-slate-800">
          <div className="text-emerald-400 font-mono text-sm mb-2">Data Analyst Consultant</div>
          <h4 className="text-xl font-bold text-slate-100 mb-2">Silver Lue</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Analyzed marketing strategies and campaign metrics, utilizing data insights to streamline operations and demonstrate a quantifiable increase in sales and performance.
          </p>
        </div>

        {/* Sonofiam Experience */}
        <div className="p-6 bg-slate-900/40 rounded-xl border border-slate-800 md:col-span-2">
          <div className="text-emerald-400 font-mono text-sm mb-2">Full-Stack Developer & Digital Strategist</div>
          <h4 className="text-xl font-bold text-slate-100 mb-2">Sonofiam (sonofiam.com)</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Built and deployed a custom e-commerce web platform. Managed the brand's digital architecture, including social media presence optimization and targeted ad campaigns.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Experience;