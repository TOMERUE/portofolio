import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const About = ({ lang }) => {
  const { aboutStory } = portfolioData;

  const corePillars = [
    {
      titleId: "Nusantara Cultural Worldbuilding",
      titleEn: "Nusantara Cultural Worldbuilding",
      descId: "Menggali mitologi, cerita rakyat pedesaan, dan atmosfer kuliner kaki lima untuk ditransformasikan menjadi pilar emosi dan gameplay yang unik.",
      descEn: "Exploring local mythologies, folklore, and street food atmospheres to craft distinct emotional anchors and gameplay hooks."
    },
    {
      titleId: "Sistem Dokumentasi GDD Terstruktur",
      titleEn: "Structured GDD Architecture",
      descId: "Menulis dokumen desain yang komprehensif, modular, dan siap digunakan programmer (core loop, state AI, economy, UI/UX).",
      descEn: "Formulating comprehensive, modular, and dev-ready design documents (core loops, AI states, economy, UI/UX)."
    },
    {
      titleId: "Implementasi Unity & Asset Pipeline",
      titleEn: "Unity Execution & Asset Creation",
      descId: "Menguasai scripting C#, tilemap isometrik, physics 2D, particle FX, serta kreasi aset visual pixel art (Aseprite) dan ilustrasi.",
      descEn: "Proficient in C# scripting, isometric tilemaps, 2D physics, particles, and 2D/pixel art asset pipelines (Aseprite)."
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-28 border-t border-rule bg-paper-deep/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl">
          <div className="eyebrow">01 — {lang === 'id' ? 'Tentang' : 'About'}</div>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-ink">
            {lang === 'id' ? (
              <>
                Merajut warisan Nusantara ke dalam{' '}
                <em className="italic text-accent">mekanika game.</em>
              </>
            ) : (
              <>
                Weaving Indonesian heritage into{' '}
                <em className="italic text-accent">game mechanics.</em>
              </>
            )}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {lang === 'id'
              ? 'Visi, latar belakang, dan pendekatan saya dalam merancang pengalaman game yang bermakna.'
              : 'My vision, background, and approach to crafting resonant game experiences.'}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-7">
            <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft">
              {(lang === 'id' ? aboutStory.paragraphsId : aboutStory.paragraphsEn).map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <blockquote className="mt-10 border-l-2 border-accent pl-6">
              <p className="font-serif text-lg sm:text-xl italic leading-snug text-ink">
                {lang === 'id' ? aboutStory.quoteId : aboutStory.quoteEn}
              </p>
            </blockquote>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 border-t border-rule pt-7">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  {lang === 'id' ? 'Desain' : 'Design'}
                </div>
                <p className="mt-2 text-sm text-ink-soft">
                  {lang === 'id'
                    ? 'Riset mekanika, balancing sheet, wireframe UI, dan penulisan GDD.'
                    : 'Mechanics research, balancing sheets, UI wireframes, and GDD writing.'}
                </p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  {lang === 'id' ? 'Produksi' : 'Production'}
                </div>
                <p className="mt-2 text-sm text-ink-soft">
                  {lang === 'id'
                    ? 'C# scripting, tilemap isometrik, pixel art, dan implementasi di Unity.'
                    : 'C# scripting, isometric tilemaps, pixel art, and Unity implementation.'}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted pb-3 border-b border-ink">
              {lang === 'id' ? 'Tiga pilar pendekatan' : 'Three design pillars'}
            </div>

            <ol className="divide-y divide-rule">
              {corePillars.map((pillar, idx) => (
                <li key={idx} className="py-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] text-accent">0{idx + 1}</span>
                    <h3 className="font-serif text-lg text-ink">
                      {lang === 'id' ? pillar.titleId : pillar.titleEn}
                    </h3>
                  </div>
                  <p className="mt-2 pl-8 text-sm leading-relaxed text-ink-soft">
                    {lang === 'id' ? pillar.descId : pillar.descEn}
                  </p>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
};
