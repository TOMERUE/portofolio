import React from 'react';
import { FileText, Sparkles, CheckCircle2, ArrowRight, Layers, Award, Download, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const GDDSection = ({ lang, onOpenFeaturedGDD }) => {
  const { gddPillars, projects } = portfolioData;

  return (
    <section id="gdd" className="py-24 relative bg-[#0c1017] bg-nusantara-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-amber-500/30 text-xs font-mono-game text-amber-400">
            <FileText className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'ARSITEKTUR DOKUMENTASI' : 'DESIGN DOCUMENTATION ARCHITECTURE'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            {lang === 'id' ? (
              <>
                Standar Penulisan <span className="text-gradient-fire">Game Design Document (GDD)</span>
              </>
            ) : (
              <>
                Standardized <span className="text-gradient-fire">Game Design Document (GDD)</span> Framework
              </>
            )}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'id' ? gddPillars.subtitleId : gddPillars.subtitleEn}
          </p>
        </div>

        {/* 4-Step Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gddPillars.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-amber-500/40 transition-all duration-300 space-y-4 relative group hover:-translate-y-1"
            >
              {/* Step number badge */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d9532f]/20 to-[#f59e0b]/20 border border-amber-500/30 flex items-center justify-center font-mono-game font-bold text-amber-400 text-lg group-hover:scale-110 transition-transform">
                {step.number}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                {lang === 'id' ? step.titleId : step.titleEn}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'id' ? step.descId : step.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Featured GDD Quick Access Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#182433] via-[#121a24] to-[#151d28] border border-amber-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono-game text-amber-400 font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>{lang === 'id' ? 'Featured GDD Case Study' : 'Featured GDD Case Study'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              {lang === 'id' 
                ? 'Studi Kasus Lengkap: B4B1 Ngepet — Stealth System & Candle Economy' 
                : 'Full Case Study: B4B1 Ngepet — Stealth System & Candle Economy'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              {lang === 'id'
                ? 'Pelajari bagaimana pilar folklore pesugihan, dual-management lilin ritual, dan AI patrol Hansip dirancang secara matematis dalam dokumen desain resmi.'
                : 'Explore how Indonesian folklore pesugihan, dual-management candle rituals, and Hansip stealth AI are designed systematically in the full GDD spec.'}
            </p>
          </div>

          <button
            onClick={() => onOpenFeaturedGDD(projects[0])}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d9532f] to-[#f59e0b] hover:from-[#c24624] hover:to-[#e08e07] text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
          >
            <FileText className="w-4 h-4" />
            <span>{lang === 'id' ? 'Buka Dokumen GDD Lengkap' : 'Open Full GDD Breakdown'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
