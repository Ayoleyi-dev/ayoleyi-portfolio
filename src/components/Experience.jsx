import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="flex flex-col gap-8">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-4"
      >
        Leadership & Technical Consulting
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* ULSSA Experience */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 bg-slate-900/40 rounded-xl border border-slate-800"
        >
          <div className="text-emerald-400 font-mono text-sm mb-2">Community Manager & Tutor</div>
          <h4 className="text-xl font-bold text-slate-100 mb-2">ULSSA Tech for Students Programme</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Managed the community and served as an Assistant Tutor for the Data Analysis track. Translated complex data concepts for students during the 10-week virtual program.
          </p>
        </motion.div>

        {/* Silver Lue Experience */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 bg-slate-900/40 rounded-xl border border-slate-800"
        >
          <div className="text-emerald-400 font-mono text-sm mb-2">Data Analyst Consultant</div>
          <h4 className="text-xl font-bold text-slate-100 mb-2">Silver Lue</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Analyzed marketing strategies and campaign metrics, utilizing data insights to streamline operations and demonstrate a quantifiable increase in sales and performance.
          </p>
        </motion.div>

        {/* Sonofiam Experience */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 bg-slate-900/40 rounded-xl border border-slate-800 md:col-span-2"
        >
          <div className="text-emerald-400 font-mono text-sm mb-2">Full-Stack Developer & Digital Strategist</div>
          <h4 className="text-xl font-bold text-slate-100 mb-2">Sonofiam (sonofiam.com)</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Built and deployed a custom e-commerce web platform. Managed the brand's digital architecture, including social media presence optimization and targeted ad campaigns.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;