import React, { useState } from 'react';
import { 
  Gamepad2, 
  Code2, 
  Palette, 
  Layers, 
  Sparkles, 
  FileText, 
  Layout, 
  GitBranch, 
  Headphones, 
  Cpu,
  CheckCircle,
  BarChart3
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = ({ lang }) => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('design');

  const tabOptions = [
    { id: 'design', labelId: 'Game Design & GDD', labelEn: 'Game Design & GDD', icon: Layers },
    { id: 'code', labelId: 'Unity & C# Programming', labelEn: 'Unity & C# Programming', icon: Code2 },
    { id: 'art', labelId: 'Art & Asset Pipeline', labelEn: 'Art & Asset Creation', icon: Palette }
  ];

  const currentSkillGroup = 
    activeTab === 'design' 
      ? skills.gameDesign 
      : activeTab === 'code' 
      ? skills.engineCode 
      : skills.artPipeline;

  const toolIconsMap = {
    Gamepad2,
    Code2,
    Palette,
    Layout,
    FileText,
    GitBranch,
    Headphones,
    GitFork: GitBranch
  };

  return (
    <section id="skills" className="py-24 relative bg-[#090d14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-amber-500/30 text-xs font-mono-game text-amber-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'KEAHLIAN & TOOLSET' : 'SKILLS & TOOLSET'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            {lang === 'id' ? (
              <>
                Keahlian Teknis & <span className="text-gradient-gold">Design Pipeline</span>
              </>
            ) : (
              <>
                Technical Mastery & <span className="text-gradient-gold">Design Pipeline</span>
              </>
            )}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'id' 
              ? 'Menghubungkan logika sistem matematis dan keindahan visual untuk menciptakan pengalaman game yang terpadu.' 
              : 'Bridging mathematical system logic and aesthetic charm to craft cohesive game experiences.'}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3">
          {tabOptions.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold font-mono-game transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#d9532f] to-[#f59e0b] text-white shadow-lg shadow-amber-500/25 border-transparent'
                    : 'bg-[#131b26] text-slate-300 hover:text-white hover:bg-[#1a2535] border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{lang === 'id' ? tab.labelId : tab.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Active Skill Group Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentSkillGroup.items.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-amber-500/30 transition-all duration-300 space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-xs font-mono-game font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  {skill.level}%
                </span>
              </div>

              {/* Progress meter */}
              <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#d9532f] via-[#f59e0b] to-[#10b981] rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'id' ? skill.descId : skill.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Tools & Software Ecosystem Bar */}
        <div className="p-8 rounded-2xl bg-[#111722] border border-white/10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>{lang === 'id' ? 'Ekosistem Tool & Perangkat Lunak' : 'Software & Production Tools'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {lang === 'id' ? 'Perangkat utama yang digunakan dalam siklus produksi game sehari-hari' : 'Primary toolchain used across daily game development workflows'}
              </p>
            </div>
            <span className="text-xs font-mono-game text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              Production Ready
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {skills.tools.map((tool, idx) => {
              const IconComponent = toolIconsMap[tool.icon] || Gamepad2;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/30 text-center space-y-2 hover:bg-white/10 transition-all group"
                >
                  <div className="w-8 h-8 mx-auto rounded-lg bg-black/40 flex items-center justify-center text-slate-300 group-hover:text-amber-400 transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white font-heading">{tool.name}</div>
                  <div className="text-[10px] text-slate-400 font-mono-game">{tool.category}</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
