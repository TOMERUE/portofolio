import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const GDDSection = ({ lang, onOpenFeaturedGDD }) => {
  const { gddPillars, projects } = portfolioData;

  return (
    <section id="gdd" className="py-24 sm:py-28 border-t border-rule">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl">
          <div className="eyebrow">04 — {lang === 'id' ? 'Metodologi' : 'Methodology'}</div>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-ink">
            {lang === 'id' ? (
              <>
                Standar penulisan{' '}
                <em className="italic text-accent">Game Design Document.</em>
              </>
            ) : (
              <>
                A standard for{' '}
                <em className="italic text-accent">Game Design Documents.</em>
              </>
            )}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {lang === 'id' ? gddPillars.subtitleId : gddPillars.subtitleEn}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {gddPillars.steps.map((step, idx) => (
            <div key={idx} className="border-t border-ink pt-5">
              <div className="font-serif text-3xl text-accent">{step.number}</div>
              <h3 className="mt-3 font-serif text-lg leading-snug text-ink">
                {lang === 'id' ? step.titleId : step.titleEn}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                {lang === 'id' ? step.descId : step.descEn}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-ink text-paper p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                {lang === 'id' ? 'Studi kasus GDD' : 'GDD case studies'}
              </div>
              <h3 className="mt-3 font-serif text-2xl sm:text-3xl leading-tight">
                {lang === 'id'
                  ? 'Dokumentasi lengkap: Brutal Kitchen & B4B1 Ngepet'
                  : 'Complete specs: Brutal Kitchen & B4B1 Ngepet'}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/70">
                {lang === 'id'
                  ? 'Pelajari bagaimana survival 20 wave, sistem 6 senjata, sinergi item, serta mekanika stealth LOS dan ekonomi koin dirancang secara mendalam.'
                  : 'Explore how 20-wave survival pacing, six-weapon systems, item synergies, and stealth LOS mechanics are documented in detail.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2.5 w-full lg:w-auto shrink-0">
              <button
                onClick={() => onOpenFeaturedGDD(projects[1])}
                className="inline-flex items-center justify-center gap-2 bg-accent px-4 py-3 text-[12px] font-medium text-paper hover:bg-accent-deep transition-colors"
              >
                {lang === 'id' ? 'GDD Brutal Kitchen' : 'Brutal Kitchen GDD'}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenFeaturedGDD(projects[0])}
                className="inline-flex items-center justify-center gap-2 border border-paper/30 px-4 py-3 text-[12px] font-medium text-paper hover:border-paper transition-colors"
              >
                {lang === 'id' ? 'GDD B4B1 Ngepet' : 'B4B1 Ngepet GDD'}
              </button>
              <button
                onClick={() => onOpenFeaturedGDD(projects[2])}
                className="inline-flex items-center justify-center gap-2 border border-paper/30 px-4 py-3 text-[12px] font-medium text-paper hover:border-paper transition-colors"
              >
                {lang === 'id' ? 'GDD Sumpit Guardian' : 'Sumpit Guardian GDD'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
