import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col gap-10 border-t border-slate-800 pt-12 pb-20">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-slate-100 mb-4">Let's Connect</h3>
        <p className="text-slate-400 max-w-lg mx-auto">
          Currently open to bioinformatics research collaborations, computational biology internships, and data analysis roles.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto w-full">
        <a href="/Ayoleyi_Bioinformatics_CADD_CV.pdf" download className="p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-emerald-500 text-center transition-colors">
          <span className="block text-slate-100 font-bold text-sm">Bioinformatics</span>
          <span className="block text-slate-500 text-xs mt-1">Download PDF</span>
        </a>
        <a href="/Ayoleyi_Data_Analytics_CV.pdf" download className="p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-emerald-500 text-center transition-colors">
          <span className="block text-slate-100 font-bold text-sm">Data Analytics</span>
          <span className="block text-slate-500 text-xs mt-1">Download PDF</span>
        </a>
        <a href="/Ayoleyi_Web_Development_CV.pdf" download className="p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-emerald-500 text-center transition-colors">
          <span className="block text-slate-100 font-bold text-sm">Webdevelopment</span>
          <span className="block text-slate-500 text-xs mt-1">Download PDF</span>
        </a>
        <a href="/Ayoleyi_Comprehensive_CV.pdf" download className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/50 hover:bg-emerald-500 hover:text-slate-950 text-center transition-colors">
          <span className="block text-emerald-400 font-bold text-sm hover:text-slate-950">Master Hybrid</span>
          <span className="block text-emerald-500/70 text-xs mt-1 hover:text-slate-900">Download PDF</span>
        </a>
      </div>

      <div className="flex justify-center gap-6 mt-8">
        <a href="https://github.com/Ayoleyi-dev" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 font-medium">GitHub</a>
        <a href="https://www.linkedin.com/in/ayoleyi-gbenga-ayodeji-aa99b6395/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 font-medium">LinkedIn</a>
        <a href="https://wa.me/qr/YK522NYXDRYLI1" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 font-medium">WhatsApp</a>
       <a href="https://x.com/AYOLEYING" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 font-medium">Twitter</a>
      </div>
    </section>
  );
};

export default Contact;
