import React, { useEffect } from 'react';
import { X, Sparkles, FileText, CheckCircle2, Cpu, Crosshair, ArrowRight, Layers, Award } from 'lucide-react';
import { GameArtIllustration } from './GameArtIllustrations';

export const ProjectModal = ({ project, lang, onClose, onSelectOtherProject, allProjects }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#111722] border border-amber-500/25 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar with Accent */}
        <div className="relative p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#182232] to-[#121924]">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-game uppercase tracking-wider text-amber-400 font-semibold">
                  Game Design Document (GDD)
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono-game">
                  {project.status}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8 custom-scrollbar">
          {/* Game Banner & Short Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 h-52 rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <GameArtIllustration type={project.bannerSvg} className="w-full h-full" />
            </div>

            <div className="md:col-span-7 space-y-3">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-mono-game bg-amber-500/15 border border-amber-500/30 text-amber-300">
                {project.genre}
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {lang === 'id' ? project.shortDesc.id : project.shortDesc.en}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono-game"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* High Concept & Cultural Pillar */}
          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-500/10 via-red-500/5 to-transparent border border-amber-500/20">
            <div className="flex items-center gap-2 text-amber-400 text-sm font-bold uppercase tracking-wider font-mono-game mb-2">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'id' ? 'Konsep Inti & Filosofi Budaya' : 'High Concept & Cultural Hook'}</span>
            </div>
            <p className="text-slate-100 font-medium text-sm sm:text-base italic">
              "{lang === 'id' ? project.gddDetails.highConcept.id : project.gddDetails.highConcept.en}"
            </p>
            <div className="mt-3 text-xs text-slate-400 flex items-center gap-2">
              <span className="font-semibold text-slate-300">Target Audience:</span>
              <span>{project.gddDetails.targetAudience}</span>
            </div>
          </div>

          {/* Core Gameplay Loop Breakdown */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono-game text-amber-400 uppercase tracking-wider font-semibold flex items-center gap-2">
              <Crosshair className="w-4 h-4" />
              <span>{lang === 'id' ? 'Siklus Inti Permainan (Core Loop)' : 'Core Gameplay Loop'}</span>
            </h3>
            <div className="p-4 rounded-xl bg-[#17202d] border border-white/10 text-slate-200 text-sm leading-relaxed font-mono-game">
              {lang === 'id' ? project.gddDetails.coreLoop.id : project.gddDetails.coreLoop.en}
            </div>
          </div>

          {/* Key Game Systems */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono-game text-amber-400 uppercase tracking-wider font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>{lang === 'id' ? 'Sistem & Mekanika Utama' : 'Key Game Systems & Mechanics'}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.gddDetails.keySystems.map((sys, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#141d29] border border-white/5 space-y-1.5 hover:border-amber-500/30 transition-colors">
                  <div className="text-xs font-bold text-amber-300 font-mono-game">{sys.name}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{sys.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features Bullet List */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono-game text-amber-400 uppercase tracking-wider font-semibold flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>{lang === 'id' ? 'Fitur Unggulan Gameplay' : 'Featured Gameplay Highlights'}</span>
            </h3>
            <div className="space-y-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-semibold text-slate-200">
                      {lang === 'id' ? feat.titleId : feat.titleEn}:
                    </span>{' '}
                    <span className="text-slate-400">
                      {lang === 'id' ? feat.descId : feat.descEn}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GDD Document Specification Table of Contents */}
          <div className="space-y-3 p-5 rounded-xl bg-[#131b26] border border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono-game text-slate-300 uppercase tracking-wider font-semibold flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>{lang === 'id' ? 'Struktur Bab Dokumen GDD' : 'GDD Specification Sections'}</span>
              </h3>
              <span className="text-[11px] text-amber-400 font-mono-game font-semibold">
                Modular & Dev-Ready
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
              {project.gddDetails.documentSections.map((sec, idx) => (
                <div key={idx} className="flex items-center gap-2 font-mono-game bg-black/20 p-2 rounded border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>{sec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Switch to Other Projects quick bar */}
          <div className="pt-4 border-t border-white/10">
            <div className="text-xs text-slate-400 font-mono-game mb-3">
              {lang === 'id' ? 'Lihat Proyek Game Lainnya:' : 'Explore Other Game Projects:'}
            </div>
            <div className="flex flex-wrap gap-2">
              {allProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onSelectOtherProject(p)}
                  disabled={p.id === project.id}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono-game flex items-center gap-1.5 transition-all ${
                    p.id === project.id
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 cursor-default'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <span>{p.title}</span>
                  {p.id !== project.id && <ArrowRight className="w-3 h-3 text-slate-500" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0e141e] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            {lang === 'id' ? 'Ingin diskusi GDD atau kolaborasi Unity?' : 'Interested in GDD review or Unity collaboration?'}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#d9532f] to-[#f59e0b] hover:from-[#c24624] hover:to-[#e08e07] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-amber-500/20 transition-all"
            >
              {lang === 'id' ? 'Hubungi Feri' : 'Contact Feri'}
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs sm:text-sm font-medium border border-white/10 transition-colors"
            >
              {lang === 'id' ? 'Tutup' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
