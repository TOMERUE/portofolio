import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = ({ lang }) => {
  const { profile } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleInterest: 'Collab / Game Project',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const socials = [
    { label: 'Itch.io', href: profile.socials.itchio },
    { label: 'LinkedIn', href: profile.socials.linkedin },
    { label: 'GitHub', href: profile.socials.github }
  ];

  return (
    <section id="contact" className="py-24 sm:py-28 border-t border-rule bg-paper-deep/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl">
          <div className="eyebrow">05 — {lang === 'id' ? 'Kontak' : 'Contact'}</div>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-ink">
            {lang === 'id' ? (
              <>
                Mari membangun sesuatu{' '}
                <em className="italic text-accent">bersama.</em>
              </>
            ) : (
              <>
                Let&rsquo;s build something{' '}
                <em className="italic text-accent">together.</em>
              </>
            )}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {lang === 'id'
              ? 'Terbuka untuk magang Game Design, peran Unity Developer, penulisan GDD, maupun kolaborasi proyek game indie.'
              : 'Open for Game Design internships, Unity developer roles, GDD consultancy, and indie game collaborations.'}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-5">
            <div className="border-t border-ink pt-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                {lang === 'id' ? 'Email' : 'Email'}
              </div>
              <div className="mt-2 flex items-center justify-between gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="font-serif text-xl sm:text-2xl text-ink hover:text-accent transition-colors break-all"
                >
                  {profile.email}
                </a>
                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 text-ink-muted hover:text-accent transition-colors shrink-0"
                  title={lang === 'id' ? 'Salin email' : 'Copy email'}
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-olive" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="mt-8 border-t border-ink pt-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                {lang === 'id' ? 'Platform & media sosial' : 'Platforms & socials'}
              </div>
              <div className="divide-y divide-rule">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-3.5 group"
                  >
                    <span className="text-sm text-ink-soft group-hover:text-accent transition-colors">
                      {social.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-accent transition-colors" />
                  </a>
                ))}
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-sm text-ink-soft">Discord</span>
                  <span className="font-mono text-[12px] text-ink-muted">{profile.socials.discord}</span>
                </div>
              </div>
            </div>

            <p className="mt-8 font-mono text-[11px] leading-relaxed text-ink-muted">
              {lang === 'id'
                ? 'Berdomisili di Indonesia. Tersedia untuk remote & on-site.'
                : 'Based in Indonesia. Available for remote & on-site work.'}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-rule bg-paper p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    {lang === 'id' ? 'Terkirim' : 'Sent'}
                  </div>
                  <h3 className="mt-3 font-serif text-2xl text-ink">
                    {lang === 'id' ? 'Terima kasih.' : 'Thank you.'}
                  </h3>
                  <p className="mt-3 text-sm text-ink-soft max-w-md mx-auto">
                    {lang === 'id'
                      ? 'Pesan Anda sudah diterima. Saya akan membalas sesegera mungkin.'
                      : 'Your message has been received. I will get back to you as soon as possible.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', roleInterest: 'Collab / Game Project', message: '' });
                    }}
                    className="mt-6 text-sm text-ink editorial-link"
                  >
                    {lang === 'id' ? 'Kirim pesan lain' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                        {lang === 'id' ? 'Nama' : 'Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'id' ? 'Nama lengkap' : 'Full name'}
                        className="field-line mt-1"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                        {lang === 'id' ? 'Email' : 'Email'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="field-line mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                      {lang === 'id' ? 'Topik' : 'Subject'}
                    </label>
                    <select
                      value={formData.roleInterest}
                      onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                      className="field-line mt-1"
                    >
                      <option value="Collab / Game Project">
                        {lang === 'id' ? 'Kolaborasi game indie' : 'Indie game collaboration'}
                      </option>
                      <option value="Internship / Fulltime">
                        {lang === 'id' ? 'Magang / full-time' : 'Internship / full-time'}
                      </option>
                      <option value="GDD Consultation">
                        {lang === 'id' ? 'Review & konsultasi GDD' : 'GDD review & consultation'}
                      </option>
                      <option value="General Hello">
                        {lang === 'id' ? 'Obrolan santai seputar game' : 'Casual game dev chat'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                      {lang === 'id' ? 'Pesan' : 'Message'} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === 'id'
                          ? 'Ceritakan ide game, lowongan studio, atau tawaran kolaborasi Anda.'
                          : 'Share your project ideas, studio opportunities, or collaboration details.'
                      }
                      className="field-line mt-1 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-accent text-paper px-5 py-3 text-sm font-medium hover:bg-accent-deep transition-colors"
                  >
                    {lang === 'id' ? 'Kirim pesan' : 'Send message'}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
