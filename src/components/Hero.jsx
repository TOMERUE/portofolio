import React from 'react';
import { ArrowRight, ArrowUpRight, ArrowDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ lang, onOpenProject }) => {
  const { profile, projects } = portfolioData;

  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">

          <div className="lg:col-span-7">
            <div className="eyebrow">Portofolio 2026 — Game Design</div>

            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem] text-ink">
              {lang === 'id' ? (
                <>
                  Game yang tumbuh dari{' '}
                  <em className="italic text-accent">cerita Nusantara.</em>
                </>
              ) : (
                <>
                  Games that grow from{' '}
                  <em className="italic text-accent">Indonesian stories.</em>
                </>
              )}
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-olive" />
                {lang === 'id' ? profile.status.id : profile.status.en}
              </span>
              <span className="hidden sm:inline text-rule">/</span>
              <span>Based in Indonesia</span>
            </div>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              {lang === 'id' ? profile.bio.id : profile.bio.en}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-accent text-paper px-5 py-3 text-sm font-medium hover:bg-accent-deep transition-colors"
              >
                {lang === 'id' ? 'Lihat Proyek' : 'View Projects'}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#gdd" className="text-sm text-ink editorial-link">
                {lang === 'id' ? 'Metodologi GDD' : 'GDD Methodology'}
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 border-t border-rule pt-7">
              {profile.stats.map((stat, idx) => (
                <div key={idx}>
                  <dt className="font-serif text-2xl text-ink">{stat.id}</dt>
                  <dd className="mt-1 font-mono text-[10px] leading-relaxed uppercase tracking-[0.12em] text-ink-muted">
                    {lang === 'id' ? stat.labelId : stat.labelEn}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <div className="flex items-baseline justify-between border-b border-ink pb-3">
              <h2 className="font-serif text-xl text-ink">
                {lang === 'id' ? 'Karya Pilihan' : 'Selected Work'}
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                03 — 2026
              </span>
            </div>

            <div className="divide-y divide-rule">
              {projects.map((project, idx) => (
                <button
                  key={project.id}
                  onClick={() => onOpenProject(project)}
                  className="group w-full text-left py-5 flex items-start gap-4"
                >
                  <span className="font-mono text-[11px] text-ink-muted pt-1.5">
                    0{idx + 1}
                  </span>
                  <span className="flex-1">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-accent mb-1">
                      {project.genre.split('/')[0].trim()}
                    </span>
                    <span className="block font-serif text-lg text-ink group-hover:text-accent transition-colors">
                      {project.title}
                    </span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 mt-1.5 text-ink-muted group-hover:text-accent transition-colors" />
                </button>
              ))}
            </div>

            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink hover:text-accent transition-colors"
            >
              {lang === 'id' ? 'Semua proyek & GDD' : 'All projects & GDDs'}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        <div className="mt-20 pt-6 border-t border-rule flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
          <span className="hidden sm:inline">Unity · C# · Game Design Document · Pixel Art</span>
          <a href="#about" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
            {lang === 'id' ? 'Kenali saya' : 'About me'}
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
