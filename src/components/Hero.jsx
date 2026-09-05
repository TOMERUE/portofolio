import React from 'react';
import { Gamepad2, Sparkles, ArrowRight, FileText, ChevronDown, Layers, Code2, Flame } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ lang, onOpenProject }) => {
  const { profile, projects } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-nusantara-mesh bg-batik-grid overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-[#d9532f]/20 via-[#f59e0b]/15 to-[#10b981]/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182332]/90 border border-amber-500/30 text-xs font-mono-game shadow-lg">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-amber-300 font-medium">
                {lang === 'id' ? profile.status.id : profile.status.en}
              </span>
            </div>

            {/* Main Title & Hero Name */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-mono-game uppercase tracking-widest text-slate-400">
                {profile.role}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-tight">
                {lang === 'id' ? (
                  <>
                    Membawa <span className="text-gradient-fire">Budaya & Folklore</span> ke Dunia Game.
                  </>
                ) : (
                  <>
                    Bringing <span className="text-gradient-fire">Indonesian Folklore</span> to Video Games.
                  </>
                )}
              </h1>
            </div>

            {/* Sub-tagline & Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {lang === 'id' ? profile.bio.id : profile.bio.en}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d9532f] to-[#f59e0b] hover:from-[#c24624] hover:to-[#e08e07] text-white font-semibold text-sm sm:text-base flex items-center gap-2.5 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:translate-y-[-2px]"
              >
                <Gamepad2 className="w-5 h-5" />
                <span>{lang === 'id' ? 'Jelajahi Proyek Game' : 'Explore Game Projects'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#gdd"
                className="px-5 py-3.5 rounded-xl bg-[#151e2b] hover:bg-[#1c283a] text-slate-200 border border-white/15 font-semibold text-sm sm:text-base flex items-center gap-2 transition-all hover:border-amber-500/40"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>{lang === 'id' ? 'Metodologi GDD' : 'GDD Methodology'}</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-medium text-sm sm:text-base border border-white/10 transition-colors"
              >
                {lang === 'id' ? 'Kontak' : 'Contact'}
              </a>
            </div>

            {/* Highlights Stats Ribbon */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
              {profile.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#131b26]/80 border border-white/10 text-center space-y-0.5">
                  <div className="text-xl sm:text-2xl font-bold font-mono-game text-amber-400">
                    {stat.id}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight">
                    {lang === 'id' ? stat.labelId : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Featured Game Showcase Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative space-y-4">
              
              {/* Card 1: B4B1 Ngepet Highlight */}
              <div 
                onClick={() => onOpenProject(projects[0])}
                className="cursor-pointer group relative p-5 rounded-2xl bg-gradient-to-br from-[#1e1518] to-[#121822] border border-red-500/30 hover:border-red-500/60 shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2.5 rounded-xl bg-red-500/10 border border-red-500/20">
                      🐗
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono-game text-red-400 font-semibold">
                          FOLKLORE STEALTH
                        </span>
                        <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded font-mono-game">
                          GDD Spec
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        B4B1 Ngepet
                      </h3>
                    </div>
                  </div>
                  <span className="p-2 rounded-lg bg-white/5 group-hover:bg-amber-500/20 text-slate-400 group-hover:text-amber-300 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-300 line-clamp-2">
                  {lang === 'id' ? projects[0].shortDesc.id : projects[0].shortDesc.en}
                </p>
              </div>

              {/* Card 2: Brutal Kitchen Survival Highlight */}
              <div 
                onClick={() => onOpenProject(projects[1])}
                className="cursor-pointer group relative p-5 rounded-2xl bg-gradient-to-br from-[#201910] to-[#121822] border border-amber-500/30 hover:border-amber-500/60 shadow-xl transition-all duration-300 hover:-translate-y-1 sm:translate-x-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      🔪
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono-game text-amber-400 font-semibold">
                          PIXEL ROGUELIKE
                        </span>
                        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono-game">
                          Unity 2D
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        Brutal Kitchen Survival
                      </h3>
                    </div>
                  </div>
                  <span className="p-2 rounded-lg bg-white/5 group-hover:bg-amber-500/20 text-slate-400 group-hover:text-amber-300 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-300 line-clamp-2">
                  {lang === 'id' ? projects[1].shortDesc.id : projects[1].shortDesc.en}
                </p>
              </div>

              {/* Card 3: Sumpit Guardian Highlight */}
              <div 
                onClick={() => onOpenProject(projects[2])}
                className="cursor-pointer group relative p-5 rounded-2xl bg-gradient-to-br from-[#0c1f19] to-[#121822] border border-emerald-500/30 hover:border-emerald-500/60 shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      🍜
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono-game text-emerald-400 font-semibold">
                          STREET FOOD DEFENSE
                        </span>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono-game">
                          Interactive
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        Sumpit Guardian: Mie Ayam Edition
                      </h3>
                    </div>
                  </div>
                  <span className="p-2 rounded-lg bg-white/5 group-hover:bg-emerald-500/20 text-slate-400 group-hover:text-emerald-300 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-300 line-clamp-2">
                  {lang === 'id' ? projects[2].shortDesc.id : projects[2].shortDesc.en}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors text-xs font-mono-game"
          >
            <span>{lang === 'id' ? 'GULIR KE BAWAH' : 'SCROLL TO EXPLORE'}</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
