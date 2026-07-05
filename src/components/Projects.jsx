import React, { useState } from 'react';
import Sportify from './Sportify';

const projects = [
  {
    title: "Public Health Data Warehouse & Analytics",
    description: "Architected an end-to-end ETL pipeline and dimensional model (SQL/TSQL) to process and visualize public health datasets.",
    tags: ["SQL", "ETL", "Power BI", "Data Warehousing"],
    mediaType: "video",
    mediaSrc: "/videos/powerbi-demo.mp4",
    github: "https://github.com/Ayoleyi-dev/Public-Health-Data-Warehouse-Analytics-Pipeline-",
    notion: "https://opposite-cloudberry-e53.notion.site/10facf464a654c9b9279d566b35c2cfb"
  },
  {
    title: "Agrospectra NDVI Analysis",
    description: "Developed a Python pipeline utilizing OpenCV and NumPy to process UAV/Satellite multispectral bands, generating spatial heatmaps to assess crop health.",
    tags: ["Python", "NumPy", "OpenCV", "Geospatial Analysis"],
    mediaType: "image",
    mediaSrc: "/images/ndvi_heatmap_output.png",
    github: "https://github.com/Ayoleyi-dev/Agrospectra-NDVI-Analysis",
    notion: "YOUR_NOTION_LINK"
  },
  {
    title: "Spotify Exploratory Data Analysis",
    description: "Interactive dashboard exploring audio features like danceability, energy, and tempo to predict track popularity.",
    tags: ["React", "Recharts", "Python", "Pandas"],
    mediaType: "component", 
    videoSrc: "/videos/spotify-demo.mp4", // Added video source for the toggle
    github: "https://github.com/Ayoleyi-dev/Spotify-EDA-project",
    notion: "https://opposite-cloudberry-e53.notion.site/10facf464a654c9b9279d566b35c2cfb"
  }
];

// Extracted Card Component to safely use useState hooks inside the map loop
const ProjectCard = ({ proj }) => {
  const [activeView, setActiveView] = useState(proj.videoSrc ? 'video' : 'chart');

  return (
    <div className="flex flex-col lg:flex-row gap-8 bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
      
      {/* Media Container */}
      <div className="w-full lg:w-1/2 aspect-video bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex flex-col">
        {proj.videoSrc && proj.mediaType === 'component' ? (
          <>
            {/* Toggle Tabs */}
            <div className="flex border-b border-slate-800 bg-slate-950 shrink-0">
              <button 
                onClick={() => setActiveView('chart')}
                className={`flex-1 py-3 text-sm font-bold transition-colors ${activeView === 'chart' ? 'text-emerald-400 border-b-2 border-emerald-400 bg-slate-900/50' : 'text-slate-500 hover:text-slate-300'}`}
              >
                📊 Interactive Chart
              </button>
              <button 
                onClick={() => setActiveView('video')}
                className={`flex-1 py-3 text-sm font-bold transition-colors ${activeView === 'video' ? 'text-emerald-400 border-b-2 border-emerald-400 bg-slate-900/50' : 'text-slate-500 hover:text-slate-300'}`}
              >
                🎥 Video Walkthrough
              </button>
            </div>
            
            {/* Content Area */}
            <div className="flex-grow relative bg-slate-900 min-h-[250px]">
              {activeView === 'chart' && <Sportify />}
              {activeView === 'video' && (
                <video 
                  src={proj.videoSrc} 
                  controls 
                  className="w-full h-full object-contain bg-black" 
                />
              )}
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center relative">
            {proj.mediaType === 'video' && (
              <video src={proj.mediaSrc} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            )}
            {proj.mediaType === 'image' && (
              <img src={proj.mediaSrc} alt={`${proj.title} visualization`} className="w-full h-full object-cover" />
            )}
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
        <h4 className="text-2xl font-bold text-slate-100">{proj.title}</h4>
        <p className="text-slate-400 leading-relaxed">{proj.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {proj.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-800 text-emerald-400 text-xs font-mono rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <a href={proj.github} target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-300 hover:text-white flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Source Code
          </a>
          <a href={proj.notion} target="_blank" rel="noreferrer" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-2">
            Read Case Study →
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-10">
      <h3 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-4">Featured Research & Analytics</h3>
      <div className="grid grid-cols-1 gap-16">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} proj={proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;