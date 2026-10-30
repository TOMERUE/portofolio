import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GameArtIllustration } from './GameArtIllustrations';
import { MiniGameTeaser } from './MiniGameTeaser';

export const Projects = ({ lang, onSelectProject }) => {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterOptions = [
    { id: 'all', labelId: 'Semua (3)', labelEn: 'All (3)' },
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
    <section id="projects" className="py-24 sm:py-28 border-t border-rule">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="eyebrow">02 — {lang === 'id' ? 'Proyek' : 'Projects'}</div>
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-ink">
              {lang === 'id' ? (
                <>
                  Karya & eksplorasi{' '}
                  <em className="italic text-accent">game design.</em>
                </>
              ) : (
                <>
                  Featured{' '}
                  <em className="italic text-accent">game design</em> work.
                </>
              )}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {lang === 'id'
                ? 'Tiga konsep game Unity yang memadukan budaya lokal, sistem mekanika mendalam, dan dokumentasi GDD terstruktur.'
                : 'Three Unity game concepts blending local culture, deep mechanical systems, and structured GDD documentation.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`font-mono text-[11px] uppercase tracking-[0.1em] pb-1 border-b transition-colors ${
                  selectedFilter === opt.id
                    ? 'border-accent text-accent'
                    : 'border-transparent text-ink-muted hover:text-ink'
                }`}
              >
                {lang === 'id' ? opt.labelId : opt.labelEn}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col border border-rule bg-paper hover:border-ink transition-colors"
            >
              <div className="relative h-52 w-full overflow-hidden border-b border-rule bg-[#14110f]">
                <GameArtIllustration type={project.bannerSvg} className="w-full h-full" />
                <span className="absolute top-3 right-3 z-20 font-mono text-[10px] uppercase tracking-[0.1em] px-2 py-1 bg-black/75 text-paper border border-white/20">
                  {project.status}
                </span>
              </div>

              <div className="flex-1 flex flex-col p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                  {project.genre.split('/')[0].trim()}
                </div>
                <h3 className="mt-2 font-serif text-xl leading-snug text-ink group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft line-clamp-3">
                  {lang === 'id' ? project.shortDesc.id : project.shortDesc.en}
                </p>

                <div className="mt-5 space-y-1.5">
                  {project.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex gap-2 text-[13px] text-ink-soft">
                      <span className="text-accent">—</span>
                      <span className="line-clamp-1">{lang === 'id' ? feat.titleId : feat.titleEn}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-[10px] text-ink-muted">
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
                      <span key={tIdx}>
                        {tag}
                        {tIdx < 3 && <span className="ml-2 text-rule">·</span>}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="mt-5 w-full inline-flex items-center justify-between border border-ink px-4 py-2.5 text-[12px] font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
                  >
                    <span>{lang === 'id' ? 'Buka detail & GDD' : 'Read GDD & spec'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <MiniGameTeaser lang={lang} />
        </div>

        <div className="mt-12 flex justify-end">
          <a
            href="#gdd"
            className="inline-flex items-center gap-1.5 text-sm text-ink editorial-link"
          >
            {lang === 'id' ? 'Lihat arsitektur dokumentasi GDD' : 'See the GDD documentation framework'}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
