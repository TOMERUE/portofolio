import React, { useState, useEffect } from 'react';
import { Gamepad2, FileText, Sparkles, Menu, X, Globe, Download, Mail } from 'lucide-react';

export const Navbar = ({ lang, setLang, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelId: 'Beranda', labelEn: 'Home' },
    { href: '#about', labelId: 'Tentang', labelEn: 'About' },
    { href: '#projects', labelId: 'Proyek Game', labelEn: 'Projects' },
    { href: '#skills', labelId: 'Keahlian', labelEn: 'Skills' },
    { href: '#gdd', labelId: 'Dokumen GDD', labelEn: 'GDD Specs' },
    { href: '#contact', labelId: 'Kontak', labelEn: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0c1017]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo / Avatar Badge */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#d9532f] via-[#f59e0b] to-[#10b981] p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0f151e] rounded-[10px] flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div>
            <span className="font-bold text-base sm:text-lg text-white tracking-tight flex items-center gap-1.5 font-heading">
              Feri Yusgiantoro
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </span>
            <span className="text-[11px] font-mono-game text-amber-400/90 block -mt-0.5">
              Unity Dev • GDD Designer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#141c26]/70 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {lang === 'id' ? link.labelId : link.labelEn}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Language Switcher */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Toggle Button */}
          <button
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-mono-game transition-colors"
            title={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-bold">{lang === 'id' ? '🇮🇩 ID' : '🇬🇧 EN'}</span>
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#d9532f] to-[#f59e0b] hover:from-[#c24624] hover:to-[#e08e07] text-white text-xs font-semibold shadow-md shadow-amber-500/20 transition-all hover:shadow-amber-500/40"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Hubungi Saya' : 'Get in Touch'}</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono-game text-amber-400"
          >
            {lang === 'id' ? 'ID' : 'EN'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e141d] border-b border-white/10 px-4 py-4 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 transition-colors"
            >
              {lang === 'id' ? link.labelId : link.labelEn}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-2.5 rounded-xl bg-gradient-to-r from-[#d9532f] to-[#f59e0b] text-white text-sm font-semibold"
            >
              {lang === 'id' ? 'Hubungi Saya' : 'Get in Touch'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
