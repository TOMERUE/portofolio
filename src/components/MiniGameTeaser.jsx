import React, { useState, useEffect } from 'react';
import { Trophy, RotateCcw, Volume2, VolumeX, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

const FlyIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <ellipse cx="9" cy="11" rx="6" ry="3.5" fill="#f3eee4" opacity="0.5" transform="rotate(-28 9 11)" />
    <ellipse cx="23" cy="11" rx="6" ry="3.5" fill="#f3eee4" opacity="0.5" transform="rotate(28 23 11)" />
    <ellipse cx="16" cy="18" rx="5.5" ry="8" fill="#2b2823" stroke="#f3eee4" strokeWidth="1.2" />
    <circle cx="13" cy="15" r="1.6" fill="#b3462a" />
    <circle cx="19" cy="15" r="1.6" fill="#b3462a" />
  </svg>
);

const AntIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7">
    <g stroke="#f3eee4" strokeWidth="1.3" fill="none" strokeLinecap="round">
      <path d="M16 13 L10 8 M16 13 L22 8 M14 20 L8 24 M18 20 L24 24 M14 16 L8 13 M18 16 L24 13" />
    </g>
    <circle cx="16" cy="9" r="3.2" fill="#f3eee4" />
    <ellipse cx="16" cy="17" rx="3.2" ry="4.6" fill="#f3eee4" />
    <ellipse cx="16" cy="24" rx="4.2" ry="3.6" fill="#f3eee4" />
  </svg>
);

export const MiniGameTeaser = ({ lang }) => {
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const [highScore, setHighScore] = useState(0);
  const [isSpicyActive, setIsSpicyActive] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [floatingTexts, setFloatingTexts] = useState([]);

  const [pests, setPests] = useState([
    { id: 1, type: 'fly', x: 25, y: 35 },
    { id: 2, type: 'fly', x: 65, y: 40 },
    { id: 3, type: 'ant', x: 45, y: 70 }
  ]);

  useEffect(() => {
    if (floatingTexts.length > 0) {
      const timer = setTimeout(() => {
        setFloatingTexts((prev) => prev.slice(1));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [floatingTexts]);

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
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {
      // AudioContext may be restricted until user interaction
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

    setFloatingTexts((prev) => [
      ...prev,
      { id: Date.now(), text: `+${pts}`, x: e.clientX, y: e.clientY }
    ]);

    setPests((prev) =>
      prev.map((p) =>
        p.id === pestId
          ? { ...p, x: Math.floor(Math.random() * 70) + 15, y: Math.floor(Math.random() * 60) + 20 }
          : p
      )
    );

    if (newCombo % 5 === 0) {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#b3462a', '#59684a', '#d8cfbd']
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
      colors: ['#b3462a', '#8d341f', '#d8cfbd']
    });

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
    <div className="border border-ink bg-paper">
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6 border-b border-rule">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
            {lang === 'id' ? 'Teaser interaktif' : 'Interactive teaser'}
          </div>
          <h3 className="mt-1 font-serif text-xl text-ink">
            Sumpit Guardian — Mie Ayam Defense
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-[11px] text-ink-muted">
            <Trophy className="w-3.5 h-3.5" />
            <span>{highScore}</span>
          </div>
          <div className="font-mono text-[11px] text-ink">
            {score} <span className="text-ink-muted">/ x{combo}</span>
          </div>

          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 text-ink-muted hover:text-ink transition-colors"
            title={soundEnabled ? 'Mute SFX' : 'Unmute SFX'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={resetGame}
            className="p-1.5 text-ink-muted hover:text-ink transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <div className="relative h-64 sm:h-72 w-full bg-ink overflow-hidden cursor-crosshair select-none flex items-center justify-center">
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#f3eee4_1px,transparent_1px)] [background-size:22px_22px]" />

          <div className="relative w-44 h-44 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <ellipse cx="100" cy="140" rx="72" ry="28" fill="#000" opacity="0.35" />
              <path d="M20,80 Q100,165 180,80 Q165,45 100,45 Q35,45 20,80 Z" fill="#f3eee4" stroke="#d8cfbd" strokeWidth="2" />
              <path d="M85,100 Q90,90 100,90 Q110,90 110,100 Q105,106 95,106 Z" fill="#b3462a" />
              <ellipse cx="100" cy="70" rx="62" ry="22" fill="#e9e1d2" stroke="#c3b8a5" strokeWidth="2" />
              <circle cx="76" cy="68" r="9" fill="#8a8173" />
              <rect x="100" y="58" width="16" height="12" rx="2" fill="#6b4a2f" />
              <path d="M120,55 Q135,50 145,62 Q130,70 120,62 Z" fill="#59684a" />
              <circle cx="100" cy="72" r="5" fill="#b3462a" />
            </svg>

            <div className="absolute top-0 w-full flex justify-center gap-4 pointer-events-none">
              <svg viewBox="0 0 12 30" className="w-3 h-8 opacity-40">
                <path d="M6 28 Q2 18 6 10 Q10 2 6 -4" stroke="#f3eee4" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
              <svg viewBox="0 0 12 30" className="w-3 h-8 opacity-30">
                <path d="M6 28 Q2 18 6 10 Q10 2 6 -4" stroke="#f3eee4" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {pests.map((pest) => (
            <button
              key={pest.id}
              onClick={(e) => handleSquashPest(e, pest.id)}
              style={{ top: `${pest.y}%`, left: `${pest.x}%` }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 p-2 transition-transform duration-300 hover:scale-110 z-20"
              aria-label={lang === 'id' ? 'Tepuk hama' : 'Squash pest'}
            >
              {pest.type === 'fly' ? <FlyIcon /> : <AntIcon />}
            </button>
          ))}

          {floatingTexts.map((ft) => (
            <div
              key={ft.id}
              style={{ left: ft.x, top: ft.y }}
              className="fixed pointer-events-none text-paper font-mono text-sm animate-fadeUp z-50"
            >
              {ft.text}
            </div>
          ))}

          <div className="absolute bottom-3 left-4 right-4 font-mono text-[10px] uppercase tracking-[0.1em] text-paper/50">
            {lang === 'id'
              ? 'Klik lalat & semut untuk menangkis dengan sumpit'
              : 'Click the flies & ants to defend with chopsticks'}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6 border-t border-rule">
        <div className="text-[13px] text-ink-soft">
          <span className="font-medium text-ink">
            {lang === 'id' ? 'Mekanika bumbu:' : 'Condiment mechanics:'}
          </span>{' '}
          {lang === 'id' ? 'combo meningkatkan multiplier skor.' : 'combos increase the score multiplier.'}
        </div>

        <button
          onClick={triggerSambalBlast}
          disabled={isSpicyActive}
          className={`inline-flex items-center gap-2 px-4 py-2.5 text-[12px] font-medium transition-colors ${
            isSpicyActive
              ? 'bg-paper-deep text-ink-muted border border-rule cursor-not-allowed'
              : 'bg-accent text-paper hover:bg-accent-deep'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>
            {isSpicyActive
              ? (lang === 'id' ? 'Sambal aktif (+2x)' : 'Sambal active (+2x)')
              : (lang === 'id' ? 'Sambal blast (+500)' : 'Sambal blast (+500)')}
          </span>
        </button>
      </div>
    </div>
  );
};
