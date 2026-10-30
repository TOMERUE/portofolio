import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = ({ lang }) => {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-ink py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-start gap-3">
            <span className="w-9 h-9 border border-ink flex items-center justify-center font-mono text-xs shrink-0">
              FY
            </span>
            <div>
              <div className="font-serif text-lg text-ink">Feri Yusgiantoro</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted max-w-xs leading-relaxed">
                {lang === 'id' ? profile.tagline.id : profile.tagline.en}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">
            <a href="#about" className="hover:text-accent transition-colors">{lang === 'id' ? 'Tentang' : 'About'}</a>
            <a href="#projects" className="hover:text-accent transition-colors">{lang === 'id' ? 'Proyek' : 'Projects'}</a>
            <a href="#skills" className="hover:text-accent transition-colors">{lang === 'id' ? 'Keahlian' : 'Skills'}</a>
            <a href="#gdd" className="hover:text-accent transition-colors">GDD</a>
            <a href="#contact" className="hover:text-accent transition-colors">{lang === 'id' ? 'Kontak' : 'Contact'}</a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted hover:text-accent transition-colors"
          >
            {lang === 'id' ? 'Ke atas' : 'Back to top'}
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted">
          <span>
            &copy; {new Date().getFullYear()} Feri Yusgiantoro
          </span>
          <span>
            {lang === 'id'
              ? 'Dirancang & dibangun sendiri — Unity, GDD, Nusantara.'
              : 'Designed & built by hand — Unity, GDD, Nusantara.'}
          </span>
        </div>
      </div>
    </footer>
  );
};
