import React from 'react';
import { Gamepad2, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = ({ lang }) => {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070b10] border-t border-white/10 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Mission */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#d9532f] to-[#f59e0b] p-0.5 shrink-0">
              <div className="w-full h-full bg-[#0d131c] rounded-[10px] flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="text-white font-bold text-base font-heading">
                Feri Yusgiantoro
              </div>
              <div className="text-[11px] font-mono-game text-slate-400">
                {lang === 'id' ? profile.tagline.id : profile.tagline.en}
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono-game">
            <a href="#home" className="hover:text-amber-400 transition-colors">
              {lang === 'id' ? 'Beranda' : 'Home'}
            </a>
            <a href="#about" className="hover:text-amber-400 transition-colors">
              {lang === 'id' ? 'Tentang' : 'About'}
            </a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">
              {lang === 'id' ? 'Proyek Game' : 'Projects'}
            </a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">
              {lang === 'id' ? 'Keahlian' : 'Skills'}
            </a>
            <a href="#gdd" className="hover:text-amber-400 transition-colors">
              {lang === 'id' ? 'GDD' : 'GDD Specs'}
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              {lang === 'id' ? 'Kontak' : 'Contact'}
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-2 font-mono-game text-xs"
          >
            <span>{lang === 'id' ? 'Kembali ke Atas' : 'Back to Top'}</span>
            <ArrowUp className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Bottom copyright & culture note */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left font-mono-game">
          <div>
            © {new Date().getFullYear()} Feri Yusgiantoro. Crafted with passion for Indonesian Folklore & Game Design.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with Unity Dev Spirit &</span>
            <span className="text-red-500">🌶️</span>
            <span>Street Food Energy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
