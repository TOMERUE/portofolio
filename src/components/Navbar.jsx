import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', labelId: 'Tentang', labelEn: 'About' },
    { href: '#projects', labelId: 'Proyek', labelEn: 'Projects' },
    { href: '#skills', labelId: 'Keahlian', labelEn: 'Skills' },
    { href: '#gdd', labelId: 'GDD', labelEn: 'GDD' },
    { href: '#contact', labelId: 'Kontak', labelEn: 'Contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled
          ? 'bg-paper/95 border-b border-rule'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="w-9 h-9 border border-ink flex items-center justify-center font-mono text-xs tracking-tight text-ink group-hover:bg-ink group-hover:text-paper transition-colors">
            FY
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg text-ink">Feri Yusgiantoro</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
              Game Design &amp; Unity
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-ink-soft hover:text-accent transition-colors"
            >
              {lang === 'id' ? link.labelId : link.labelEn}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="font-mono text-[11px] tracking-[0.12em] text-ink-muted hover:text-accent transition-colors"
            title={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
          >
            {lang === 'id' ? 'ID / EN' : 'EN / ID'}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-ink text-paper px-4 py-2.5 text-[12px] font-medium hover:bg-accent transition-colors"
          >
            <span>{lang === 'id' ? 'Hubungi Saya' : 'Get in Touch'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="font-mono text-[11px] text-ink-muted"
          >
            {lang === 'id' ? 'ID' : 'EN'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink"
            aria-label="Buka menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-paper border-t border-rule px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 border-b border-rule/70 text-sm text-ink-soft"
            >
              {lang === 'id' ? link.labelId : link.labelEn}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-1.5 bg-ink text-paper px-4 py-2.5 text-xs"
          >
            {lang === 'id' ? 'Hubungi Saya' : 'Get in Touch'}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
};
