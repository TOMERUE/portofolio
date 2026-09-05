import React, { useState, useEffect, useRef } from 'react';
import { Utensils, Zap, Trophy, RotateCcw, Volume2, VolumeX, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const MiniGameTeaser = ({ lang }) => {
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const [highScore, setHighScore] = useState(0);
  const [isSpicyActive, setIsSpicyActive] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [floatingTexts, setFloatingTexts] = useState([]);
  
  // Pest list on screen
  const [pests, setPests] = useState([
    { id: 1, type: 'fly', x: 25, y: 35, speed: 1.5 },
    { id: 2, type: 'fly', x: 65, y: 40, speed: 1.2 },
    { id: 3, type: 'ant', x: 45, y: 70, speed: 0.8 }
  ]);

  // Floating text timer cleanup
  useEffect(() => {
    if (floatingTexts.length > 0) {
      const timer = setTimeout(() => {
        setFloatingTexts((prev) => prev.slice(1));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [floatingTexts]);

  // Pest repositioning loop
  useEffect(() => {
    const interval = setInterval(() => {
      setPests((prevPests) =>
        prevPests.map((p) => {
          const moveX = (Math.random() - 0.5) * 15;
          const moveY = (Math.random() - 0.5) * 15;
          let newX = Math.min(Math.max(p.x + moveX, 15), 85);
          let newY = Math.min(Math.max(p.y + moveY, 20), 80);
          return { ...p, x: newX, y: newY };
        })
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const playClickSound = (freq = 600) => {
    if (!soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {
      // AudioContext might be restricted until user interacts
    }
  };

  const handleSquashPest = (e, pestId) => {
    e.stopPropagation();
    playClickSound(800 + combo * 100);

    const pts = 100 * combo * (isSpicyActive ? 2 : 1);
    const newScore = score + pts;
    const newCombo = combo + 1;
    
    setScore(newScore);
    setCombo(newCombo);
    if (newScore > highScore) setHighScore(newScore);

    // Add floating combo text
    const rect = e.currentTarget.getBoundingClientRect();
    setFloatingTexts((prev) => [
      ...prev,
      { id: Date.now(), text: `+${pts} (x${combo})`, x: e.clientX, y: e.clientY }
    ]);

    // Respawn pest to random location
    setPests((prev) =>
      prev.map((p) =>
        p.id === pestId
          ? { ...p, x: Math.floor(Math.random() * 70) + 15, y: Math.floor(Math.random() * 60) + 20 }
          : p
      )
    );

    // Milestone confetti
    if (newCombo % 5 === 0) {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#f59e0b', '#d9532f', '#10b981']
      });
    }
  };

  const triggerSambalBlast = () => {
    if (isSpicyActive) return;
    playClickSound(1200);
    setIsSpicyActive(true);
    setScore((s) => s + 500);

    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ef4444', '#f97316', '#fbbf24']
    });

    // Squash all pests instantly
    setPests((prev) =>
      prev.map((p) => ({
        ...p,
        x: Math.floor(Math.random() * 70) + 15,
        y: Math.floor(Math.random() * 60) + 20
      }))
    );

    setTimeout(() => {
      setIsSpicyActive(false);
    }, 4000);
  };

  const resetGame = () => {
    setScore(0);
    setCombo(1);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden glass-card border border-emerald-500/25 p-5 sm:p-7 shadow-2xl">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono-game uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Mini Interactive Teaser' : 'Interactive Mini Teaser'}</span>
            </span>
            <span className="text-[10px] bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono-game">
              Playable Arcade Concept
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white font-heading mt-0.5">
            Sumpit Guardian: Mie Ayam Defense
          </h3>
        </div>

        {/* Stats & Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 flex items-center gap-2 text-xs font-mono-game">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-slate-400">Score:</span>
            <span className="text-white font-bold text-sm">{score}</span>
          </div>

          <div className="px-3 py-1.5 rounded-lg bg-black/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono-game font-bold">
            Combo x{combo}
          </div>

          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors border border-white/10"
            title={soundEnabled ? 'Mute SFX' : 'Unmute SFX'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          <button
            onClick={resetGame}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors border border-white/10"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Game Stage Area */}
      <div className="relative h-64 sm:h-72 w-full rounded-xl bg-gradient-to-b from-[#0a1812] via-[#0e241c] to-[#08140f] border border-white/10 overflow-hidden cursor-crosshair select-none flex items-center justify-center">
        {/* Table Wooden Ring Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Center Mie Ayam Bowl Graphic */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
            <ellipse cx="100" cy="140" rx="75" ry="30" fill="#2d1305" opacity="0.6" />
            <path d="M20,80 Q100,165 180,80 Q165,45 100,45 Q35,45 20,80 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2.5" />
            {/* Rooster Logo */}
            <path d="M85,100 Q90,90 100,90 Q110,90 110,100 Q105,106 95,106 Z" fill="#dc2626" />
            <polygon points="110,95 116,97 111,100" fill="#f59e0b" />
            {/* Steaming Noodles */}
            <ellipse cx="100" cy="70" rx="65" ry="24" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
            <circle cx="75" cy="68" r="10" fill="#a8a29e" />
            <rect x="100" y="58" width="16" height="12" rx="3" fill="#78350f" />
            <path d="M120,55 Q135,50 145,62 Q130,70 120,62 Z" fill="#16a34a" />
            <circle cx="100" cy="72" r="6" fill="#ef4444" />
          </svg>

          {/* Steam FX */}
          <div className="absolute top-2 w-full flex justify-center gap-4 pointer-events-none opacity-60">
            <span className="text-xl animate-bounce">♨️</span>
            <span className="text-xl animate-bounce delay-150">♨️</span>
          </div>
        </div>

        {/* Interactive Clickable Pests */}
        {pests.map((pest) => (
          <button
            key={pest.id}
            onClick={(e) => handleSquashPest(e, pest.id)}
            style={{ top: `${pest.y}%`, left: `${pest.x}%` }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 p-2 group transition-transform duration-300 hover:scale-125 z-20"
            aria-label="Tepuk Hama Sumpit"
          >
            {pest.type === 'fly' ? (
              <div className="relative flex items-center justify-center">
                <span className="text-2xl filter drop-shadow-md animate-spin" style={{ animationDuration: '3s' }}>
                  🪰
                </span>
                <span className="absolute -top-1 -right-1 text-[10px] bg-red-600 text-white font-mono-game px-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  TAP!
                </span>
              </div>
            ) : (
              <div className="relative flex items-center justify-center">
                <span className="text-2xl filter drop-shadow-md animate-pulse">
                  🐜
                </span>
              </div>
            )}
          </button>
        ))}

        {/* Floating Combat / Score Texts */}
        {floatingTexts.map((ft) => (
          <div
            key={ft.id}
            style={{ left: ft.x, top: ft.y }}
            className="fixed pointer-events-none text-amber-300 font-bold font-mono-game text-sm animate-fadeUp z-50 transform -translate-x-1/2 -translate-y-1/2"
          >
            {ft.text}
          </div>
        ))}

        {/* Hint overlay on screen */}
        <div className="absolute bottom-3 left-4 text-[11px] font-mono-game text-emerald-300/80 bg-black/60 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
          <Utensils className="w-3 h-3 text-amber-400" />
          <span>{lang === 'id' ? 'Klik hama lalat & semut untuk menangkis dengan sumpit!' : 'Click the flies & ants to defend with chopsticks!'}</span>
        </div>
      </div>

      {/* Bottom Power-Ups Bar */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="text-xs text-slate-300">
          <span className="font-semibold text-emerald-400">{lang === 'id' ? 'Mekanika Bumbu Meja:' : 'Condiment Mechanics:'}</span>{' '}
          {lang === 'id' ? 'Kombinasi combo meningkatkan multiplier skor!' : 'Combos increase score multiplier!'}
        </div>

        <button
          onClick={triggerSambalBlast}
          disabled={isSpicyActive}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold font-mono-game flex items-center gap-2 transition-all ${
            isSpicyActive
              ? 'bg-red-900/60 text-red-300 border border-red-500/30 cursor-not-allowed'
              : 'bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white shadow-lg shadow-red-500/20'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>
            {isSpicyActive
              ? (lang === 'id' ? 'SAMBAL AKTIF! (+2X)' : 'SAMBAL BLAST ACTIVE!')
              : (lang === 'id' ? 'AKTIFKAN SAMBAL BLAST (+500)' : 'TRIGGER SAMBAL BLAST (+500)')}
          </span>
        </button>
      </div>
    </div>
  );
};
