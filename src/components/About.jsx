import React from 'react';
import { User, Sparkles, BookOpen, Compass, Code, Palette, Quote, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = ({ lang }) => {
  const { aboutStory, profile } = portfolioData;

  const corePillars = [
    {
      icon: Compass,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      titleId: "Nusantara Cultural Worldbuilding",
      titleEn: "Nusantara Cultural Worldbuilding",
      descId: "Menggali mitologi, cerita rakyat pedesaan, dan atmosfer kuliner kaki lima untuk ditransformasikan menjadi pilar emosi dan gameplay yang unik.",
      descEn: "Exploring local mythologies, folklore, and street food atmospheres to craft distinct emotional anchors and gameplay hooks."
    },
    {
      icon: BookOpen,
      color: "text-red-400 bg-red-500/10 border-red-500/30",
      titleId: "Sistem Dokumentasi GDD Terstruktur",
      titleEn: "Structured GDD Architecture",
      descId: "Menulis dokumen desain yang komprehensif, modular, dan siap digunakan programmer (Core loop, State AI, Economy, UI/UX).",
      descEn: "Formulating comprehensive, modular, and dev-ready design documents (Core loops, AI states, economy, UI/UX)."
    },
    {
      icon: Code,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      titleId: "Unity Implementation & Asset Pipeline",
      titleEn: "Unity Execution & Asset Creation",
      descId: "Menguasai scripting C#, tilemap isometrik, physics 2D, particle FX, serta kreasi aset visual pixel art (Aseprite) dan ilustrasi.",
      descEn: "Proficient in C# scripting, isometric tilemaps, 2D physics, particles, and 2D/pixel art asset pipelines (Aseprite)."
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#0c1017] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-amber-500/30 text-xs font-mono-game text-amber-400">
            <User className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'TENTANG SAYA' : 'ABOUT ME'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            {lang === 'id' ? (
              <>
                Merajut <span className="text-gradient-gold">Warisan Nusantara</span> ke dalam Mekanika Game
              </>
            ) : (
              <>
                Weaving <span className="text-gradient-gold">Indonesian Heritage</span> into Game Mechanics
              </>
            )}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'id' 
              ? 'Mengenal lebih dekat visi, latar belakang pendidikan, dan dedikasi saya dalam merancang pengalaman game yang bermakna.' 
              : 'Getting to know my vision, game design background, and commitment to crafting resonant game experiences.'}
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Story Card */}
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-amber-400 font-mono-game text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'id' ? 'Cerita & Dedikasi Desain' : 'Background & Design Philosophy'}</span>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {(lang === 'id' ? aboutStory.paragraphsId : aboutStory.paragraphsEn).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Quote block */}
              <div className="pt-4 border-t border-white/10 mt-6">
                <div className="flex gap-3">
                  <Quote className="w-8 h-8 text-amber-500/40 shrink-0" />
                  <p className="text-sm italic text-amber-200/90 font-medium">
                    {lang === 'id' ? aboutStory.quoteId : aboutStory.quoteEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Checklist Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#131b26] border border-white/5 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white font-heading">
                    {lang === 'id' ? 'Sisi Desain & Dokumentasi' : 'Design & GDD Specialist'}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {lang === 'id' ? 'Riset mekanika, balancing sheets, wireframe UI' : 'Mechanics research, balancing, UI wireframing'}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#131b26] border border-white/5 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white font-heading">
                    {lang === 'id' ? 'Sisi Teknis & Aset Kreatif' : 'Unity & Asset Pipeline'}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {lang === 'id' ? 'C# scripting, isometric tilemap, pixel art sprites' : 'C# scripting, isometric tilemaps, pixel sprites'}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3 Core Pillars Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono-game uppercase tracking-wider text-slate-400 px-1 font-semibold">
              {lang === 'id' ? '3 Pilar Utama Pendekatan Saya' : 'My 3 Core Design Pillars'}
            </div>

            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl glass-card border border-white/10 hover:border-amber-500/30 transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <span className={`p-2.5 rounded-xl border ${pillar.color}`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                      {lang === 'id' ? pillar.titleId : pillar.titleEn}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {lang === 'id' ? pillar.descId : pillar.descEn}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
