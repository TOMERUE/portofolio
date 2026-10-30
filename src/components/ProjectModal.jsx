import React, { useEffect } from 'react';
import { X, ArrowUpRight, ArrowRight } from 'lucide-react';
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-paper border border-ink overflow-hidden flex flex-col animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 sm:p-6 border-b border-rule flex items-start justify-between gap-6 bg-paper-deep/60">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
              Game Design Document — {project.status}
            </div>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl leading-tight text-ink">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-ink-muted hover:text-ink transition-colors shrink-0"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-8 space-y-9">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 h-48 border border-rule bg-[#14110f] overflow-hidden">
              <GameArtIllustration type={project.bannerSvg} className="w-full h-full" />
            </div>

            <div className="md:col-span-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                {project.genre}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {lang === 'id' ? project.shortDesc.id : project.shortDesc.en}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[10px] text-ink-muted">
                {project.tags.map((tag, idx) => (
                  <span key={idx}>
                    {tag}
                    {idx < project.tags.length - 1 && <span className="ml-2 text-rule">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-l-2 border-accent pl-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
              {lang === 'id' ? 'Konsep inti & budaya' : 'High concept & cultural hook'}
            </div>
            <p className="mt-2 font-serif text-lg leading-snug italic text-ink">
              {lang === 'id' ? project.gddDetails.highConcept.id : project.gddDetails.highConcept.en}
            </p>
            <div className="mt-3 font-mono text-[11px] text-ink-muted">
              {lang === 'id' ? 'Target audiens' : 'Target audience'}: {project.gddDetails.targetAudience}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted border-b border-ink pb-2">
              {lang === 'id' ? 'Core gameplay loop' : 'Core gameplay loop'}
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-ink-soft font-mono">
              {lang === 'id' ? project.gddDetails.coreLoop.id : project.gddDetails.coreLoop.en}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted border-b border-ink pb-2">
              {lang === 'id' ? 'Sistem & mekanika utama' : 'Key systems & mechanics'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-rule border border-rule mt-3">
              {project.gddDetails.keySystems.map((sys, idx) => (
                <div key={idx} className="bg-paper p-4">
                  <div className="font-serif text-[15px] text-ink">{sys.name}</div>
                  <p className="mt-2 text-[12px] leading-relaxed text-ink-soft">{sys.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted border-b border-ink pb-2">
              {lang === 'id' ? 'Fitur unggulan' : 'Featured gameplay highlights'}
            </h3>
            <div className="divide-y divide-rule">
              {project.features.map((feat, idx) => (
                <div key={idx} className="py-3">
                  <div className="text-sm font-medium text-ink">
                    {lang === 'id' ? feat.titleId : feat.titleEn}
                  </div>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">
                    {lang === 'id' ? feat.descId : feat.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted border-b border-ink pb-2">
              {lang === 'id' ? 'Struktur bab dokumen GDD' : 'GDD specification sections'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 mt-1">
              {project.gddDetails.documentSections.map((sec, idx) => (
                <div key={idx} className="py-2 border-b border-rule font-mono text-[11px] text-ink-soft">
                  {sec}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted mb-3">
              {lang === 'id' ? 'Proyek lainnya' : 'Other projects'}
            </div>
            <div className="flex flex-wrap gap-2">
              {allProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onSelectOtherProject(p)}
                  disabled={p.id === project.id}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] border transition-colors ${
                    p.id === project.id
                      ? 'border-accent text-accent cursor-default'
                      : 'border-rule text-ink-soft hover:border-ink hover:text-ink'
                  }`}
                >
                  <span>{p.title}</span>
                  {p.id !== project.id && <ArrowRight className="w-3 h-3" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5 border-t border-rule bg-paper-deep/60 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-ink-muted">
            {lang === 'id' ? 'Tertarik diskusi GDD atau kolaborasi Unity?' : 'Interested in GDD review or Unity collaboration?'}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 bg-accent text-paper px-4 py-2 text-xs font-medium hover:bg-accent-deep transition-colors"
            >
              {lang === 'id' ? 'Hubungi Feri' : 'Contact Feri'}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="text-xs text-ink editorial-link"
            >
              {lang === 'id' ? 'Tutup' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
