import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Gamepad2, 
  MessageSquare, 
  MapPin, 
  Sparkles,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
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
    
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      // Keep state visible
    }, 500);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090d14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-amber-500/30 text-xs font-mono-game text-amber-400">
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'KONTAK & KOLABORASI' : 'CONTACT & COLLABORATION'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            {lang === 'id' ? (
              <>
                Mari Bangun <span className="text-gradient-fire">Game Luar Biasa</span> Bersama
              </>
            ) : (
              <>
                Let's Build <span className="text-gradient-fire">Awesome Games</span> Together
              </>
            )}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'id'
              ? 'Terbuka untuk peluang magang Game Design, peran Unity Developer, penulisan GDD, maupun kolaborasi proyek game indie.'
              : 'Open for Game Design internships, Unity developer roles, GDD consultancy, and indie game collaborations.'}
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card with Copy button */}
            <div className="p-6 rounded-2xl glass-card border border-amber-500/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono-game text-amber-400 font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'id' ? 'Email Resmi' : 'Official Email'}</span>
              </div>
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-mono-game truncate">
                    {profile.email}
                  </span>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10 shrink-0"
                  title="Salin Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social & Platform Channels */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
              <h3 className="text-sm font-bold text-white font-heading uppercase tracking-wider">
                {lang === 'id' ? 'Platform Game Dev & Media Sosial' : 'Game Dev Platforms & Profiles'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Itch.io */}
                <a
                  href={profile.socials.itchio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 hover:bg-[#fa5c5c]/15 border border-white/5 hover:border-[#fa5c5c]/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Gamepad2 className="w-4 h-4 text-[#fa5c5c]" />
                    <span className="text-xs font-bold text-slate-200 group-hover:text-white">Itch.io</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#fa5c5c]" />
                </a>

                {/* LinkedIn */}
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 hover:bg-[#0a66c2]/15 border border-white/5 hover:border-[#0a66c2]/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#0a66c2] fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
                    </svg>
                    <span className="text-xs font-bold text-slate-200 group-hover:text-white">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#0a66c2]" />
                </a>

                {/* GitHub */}
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-slate-300 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                    </svg>
                    <span className="text-xs font-bold text-slate-200 group-hover:text-white">GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
                </a>

                {/* Discord */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-[#5865F2]" />
                    <span className="text-xs font-bold text-slate-200">Discord</span>
                  </div>
                  <span className="text-[11px] font-mono-game text-slate-300 font-medium">{profile.socials.discord}</span>
                </div>
              </div>
            </div>

            {/* Location & Availability Note */}
            <div className="p-4 rounded-xl bg-[#121924] border border-white/5 flex items-center gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{lang === 'id' ? 'Berdomisili di Indonesia • Terbuka untuk remote & on-site' : 'Based in Indonesia • Available for remote & on-site work'}</span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    {lang === 'id' ? 'Pesan Berhasil Terkirim!' : 'Message Sent Successfully!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    {lang === 'id'
                      ? 'Terima kasih telah menghubungi Feri Yusgiantoro. Saya akan membalas pesan Anda sesegera mungkin.'
                      : 'Thank you for reaching out to Feri Yusgiantoro. I will get back to you as soon as possible.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', roleInterest: 'Collab / Game Project', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-mono-game transition-colors"
                  >
                    {lang === 'id' ? 'Kirim Pesan Lain' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white font-heading">
                      {lang === 'id' ? 'Kirim Pesan Langsung' : 'Send a Direct Message'}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {lang === 'id' ? 'Silakan isi formulir di bawah ini untuk diskusi proyek atau lowongan:' : 'Fill out the form below for project discussions or role inquiries:'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-game text-slate-300">
                        {lang === 'id' ? 'Nama Anda' : 'Your Name'} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'id' ? 'Misal: Budi Santoso' : 'e.g. John Doe'}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-amber-400 text-slate-100 text-sm outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-game text-slate-300">
                        {lang === 'id' ? 'Email Anda' : 'Your Email'} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-amber-400 text-slate-100 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Interest Topic */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-game text-slate-300">
                      {lang === 'id' ? 'Topik Diskusi / Peluang' : 'Subject / Topic'}
                    </label>
                    <select
                      value={formData.roleInterest}
                      onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-amber-400 text-slate-100 text-sm outline-none transition-colors"
                    >
                      <option value="Collab / Game Project">
                        {lang === 'id' ? 'Kolaborasi Game Indie / Proyek Bersama' : 'Indie Game Project Collaboration'}
                      </option>
                      <option value="Internship / Fulltime">
                        {lang === 'id' ? 'Peluang Magang / Full-time (Game Design & Unity)' : 'Internship / Fulltime Position'}
                      </option>
                      <option value="GDD Consultation">
                        {lang === 'id' ? 'Diskusi & Review Game Design Document (GDD)' : 'GDD Review & System Consultation'}
                      </option>
                      <option value="General Hello">
                        {lang === 'id' ? 'Diskusi Santai / Tanya Jawab Seputar Game' : 'Casual Game Dev Chat'}
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-game text-slate-300">
                      {lang === 'id' ? 'Isi Pesan' : 'Message'} <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === 'id'
                          ? 'Ceritakan tentang ide game, lowongan studio, atau tawaran kolaborasi Anda...'
                          : 'Share your project ideas, studio opportunities, or collaboration details...'
                      }
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-amber-400 text-slate-100 text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d9532f] to-[#f59e0b] hover:from-[#c24624] hover:to-[#e08e07] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'id' ? 'Kirim Pesan Sekarang' : 'Send Message Now'}</span>
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
