import React, { useState } from 'react';
import {
  Gamepad2,
  Code2,
  Palette,
  Layout,
  FileText,
  GitBranch,
  Headphones
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = ({ lang }) => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('design');

  const tabOptions = [
    { id: 'design', labelId: 'Game Design & GDD', labelEn: 'Game Design & GDD' },
    { id: 'code', labelId: 'Unity & C#', labelEn: 'Unity & C#' },
    { id: 'art', labelId: 'Art & Asset', labelEn: 'Art & Assets' }
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
    Headphones
  };

  return (
    <section id="skills" className="py-24 sm:py-28 border-t border-rule bg-paper-deep/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl">
          <div className="eyebrow">03 — {lang === 'id' ? 'Keahlian' : 'Skills'}</div>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-ink">
            {lang === 'id' ? (
              <>
                Keahlian teknis &{' '}
                <em className="italic text-accent">design pipeline.</em>
              </>
            ) : (
              <>
                Technical craft &{' '}
                <em className="italic text-accent">design pipeline.</em>
              </>
            )}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {lang === 'id'
              ? 'Menghubungkan logika sistem dan keindahan visual untuk menciptakan pengalaman game yang utuh.'
              : 'Bridging system logic and visual craft to build cohesive game experiences.'}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-rule">
          {tabOptions.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 font-mono text-[11px] uppercase tracking-[0.1em] border-b-2 -mb-px transition-colors ${
                activeTab === tab.id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-ink-muted hover:text-ink'
              }`}
            >
              {lang === 'id' ? tab.labelId : tab.labelEn}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {currentSkillGroup.items.map((skill, idx) => (
            <div key={idx} className="py-7 border-b border-rule">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-lg text-ink">{skill.name}</h3>
                <span className="font-mono text-[11px] text-ink-muted">{skill.level}</span>
              </div>

              <div className="mt-3 h-px w-full bg-rule">
                <div
                  className="h-px bg-accent"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                {lang === 'id' ? skill.descId : skill.descEn}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink pb-3">
            <h3 className="font-serif text-xl text-ink">
              {lang === 'id' ? 'Perangkat & perangkat lunak' : 'Tools & software'}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
              {lang === 'id' ? 'Siklus produksi harian' : 'Daily production workflow'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4">
            {skills.tools.map((tool, idx) => {
              const IconComponent = toolIconsMap[tool.icon] || Gamepad2;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 py-4 border-b border-rule px-1 group"
                >
                  <IconComponent className="w-4 h-4 text-ink-muted group-hover:text-accent transition-colors shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[13px] font-medium text-ink truncate">{tool.name}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted truncate">
                      {tool.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
