import React, { useState } from 'react';
import { Gamepad2, FileText, Sparkles, ArrowRight, CheckCircle2, Eye, Tag, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GameArtIllustration } from './GameArtIllustrations';
import { MiniGameTeaser } from './MiniGameTeaser';

export const Projects = ({ lang, onSelectProject }) => {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterOptions = [
    { id: 'all', labelId: 'Semua Proyek (3)', labelEn: 'All Projects (3)' },
    { id: 'folklore', labelId: 'Folklore & Mistis', labelEn: 'Folklore & Myths' },
    { id: 'roguelike', labelId: 'Roguelike & Horror', labelEn: 'Roguelike & Horror' },
    { id: 'streetfood', labelId: 'Street Food & Kasual', labelEn: 'Street Food & Casual' }
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'folklore') return p.id === 'b4b1-ngepet';
    if (selectedFilter === 'roguelike') return p.id === 'brutal-kitchen-survival';
    if (selectedFilter === 'streetfood') return p.id === 'sumpit-guardian';
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#0c1017] bg-batik-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-amber-500/30 text-xs font-mono-game text-amber-400">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'PORTOFOLIO GAME & GDD' : 'GAME PROJECTS & GDD'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            {lang === 'id' ? (
              <>
                Karya & Eksplorasi <span className="text-gradient-fire">Game Design</span>
              </>
            ) : (
              <>
                Featured <span className="text-gradient-fire">Game Design</span> Concepts
              </>
            )}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'id' 
              ? 'Tiga konsep game unggulan berbasis Unity yang memadukan keunikan budaya lokal, sistem mekanika mendalam, dan dokumentasi GDD terstruktur.' 
              : 'Three featured Unity game concepts blending authentic local culture, deep mechanical systems, and modular GDD specs.'}
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono-game transition-all ${
                  selectedFilter === opt.id
                    ? 'bg-gradient-to-r from-[#d9532f] to-[#f59e0b] text-white font-bold shadow-lg shadow-amber-500/20'
                    : 'bg-[#141c26] text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {lang === 'id' ? opt.labelId : opt.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-2xl glass-card border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1.5"
            >
              {/* Illustration Banner Area */}
              <div className="relative h-56 w-full overflow-hidden border-b border-white/10 bg-black">
                <GameArtIllustration type={project.bannerSvg} className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
                
                {/* Status Badge overlay */}
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono-game font-semibold bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{project.status}</span>
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  {/* Genre Tag */}
                  <div className="text-xs font-mono-game text-amber-400 font-semibold tracking-wide">
                    {project.genre}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {lang === 'id' ? project.shortDesc.id : project.shortDesc.en}
                  </p>

                  {/* Key Features Quick Bullets */}
                  <div className="space-y-1.5 pt-2">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1 font-medium">
                          {lang === 'id' ? feat.titleId : feat.titleEn}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Tags & Action */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400 font-mono-game"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#172230] hover:bg-gradient-to-r hover:from-[#d9532f] hover:to-[#f59e0b] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/10 hover:border-amber-400/50 transition-all duration-300 shadow-md group-hover:bg-[#202e40]"
                  >
                    <FileText className="w-4 h-4 text-amber-400 group-hover:text-white" />
                    <span>{lang === 'id' ? 'Buka Detail & GDD' : 'Read GDD & Spec Sheet'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Teaser Banner / Mini Game Section */}
        <div className="pt-8">
          <MiniGameTeaser lang={lang} />
        </div>

      </div>
    </section>
  );
};
