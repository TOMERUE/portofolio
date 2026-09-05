import React from 'react';

// Custom SVG illustrations tailored for each game concept
export const GameArtIllustration = ({ type, className = "w-full h-full" }) => {
  if (type === 'babi_ngepet') {
    return (
      <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#1a0f0d] via-[#241310] to-[#0d0908] ${className}`}>
        {/* Isometric Grid Background */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#d9532f_1px,transparent_1px),linear-gradient(to_bottom,#d9532f_1px,transparent_1px)] bg-[size:28px_28px] [transform:rotateX(55deg)_rotateZ(-45deg)]" />
        
        {/* Radial Glow */}
        <div className="absolute w-48 h-48 bg-[#d9532f]/25 rounded-full blur-2xl animate-pulse" />

        <svg viewBox="0 0 400 240" className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          {/* Isometric Tile Base */}
          <polygon points="200,190 320,130 200,70 80,130" fill="#1e2638" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.4" />
          <polygon points="80,130 200,190 200,210 80,150" fill="#141a26" />
          <polygon points="200,190 320,130 320,150 200,210" fill="#0e131d" />

          {/* Gold Coin Stacks / Loot */}
          <ellipse cx="270" cy="120" rx="14" ry="7" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
          <ellipse cx="270" cy="115" rx="14" ry="7" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />
          <ellipse cx="270" cy="110" rx="14" ry="7" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
          
          <ellipse cx="290" cy="130" rx="10" ry="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
          <ellipse cx="290" cy="126" rx="10" ry="5" fill="#fef08a" stroke="#d97706" strokeWidth="1" />

          {/* The Mythical Boar (B4B1) Shape - Stealth Stylized */}
          <g transform="translate(150, 85)">
            {/* Boar Body */}
            <ellipse cx="40" cy="35" rx="35" ry="24" fill="#2d1515" stroke="#d9532f" strokeWidth="2.5" />
            {/* Dark Shroud / Pesugihan Robe */}
            <path d="M15,30 Q40,10 65,30 Q70,45 60,50 Q40,40 20,48 Z" fill="#450a0a" opacity="0.8" />
            {/* Snout */}
            <ellipse cx="72" cy="40" rx="10" ry="8" fill="#7f1d1d" stroke="#d9532f" strokeWidth="1.5" />
            <circle cx="70" cy="39" r="1.5" fill="#1c0505" />
            <circle cx="74" cy="39" r="1.5" fill="#1c0505" />
            {/* Glowing Red Eyes */}
            <ellipse cx="55" cy="28" rx="4" ry="3" fill="#ef4444" className="animate-ping" style={{ transformOrigin: '55px 28px' }} />
            <ellipse cx="55" cy="28" rx="3" ry="2" fill="#fca5a5" />
            {/* Small Glowing Fangs */}
            <polygon points="68,43 72,49 70,43" fill="#fef08a" />
            <polygon points="62,43 65,48 64,43" fill="#fef08a" />
            {/* Boar Ears */}
            <polygon points="30,15 40,8 38,20" fill="#7f1d1d" stroke="#d9532f" strokeWidth="1" />
            {/* Stealth Dust / Smoke particles */}
            <circle cx="10" cy="45" r="4" fill="#d9532f" opacity="0.4" />
            <circle cx="0" cy="38" r="6" fill="#f59e0b" opacity="0.3" />
          </g>

          {/* Sacred Ritual Candle & Flame (Key Mechanic) */}
          <g transform="translate(100, 75)">
            {/* Brass Plate */}
            <ellipse cx="20" cy="55" rx="18" ry="8" fill="#b45309" stroke="#fef08a" strokeWidth="1" />
            {/* Candle Body */}
            <rect x="15" y="25" width="10" height="30" rx="2" fill="#fffbeb" stroke="#fde68a" strokeWidth="1" />
            {/* Wick */}
            <line x1="20" y1="25" x2="20" y2="18" stroke="#451a03" strokeWidth="2" />
            {/* Flame Aura */}
            <ellipse cx="20" cy="12" rx="12" ry="16" fill="#f59e0b" opacity="0.3" />
            {/* Flame Body */}
            <path d="M20,2 Q26,10 24,18 Q20,22 16,18 Q14,10 20,2 Z" fill="#ef4444" />
            <path d="M20,6 Q23,12 22,17 Q20,20 18,17 Q17,12 20,6 Z" fill="#fef08a" />
          </g>

          {/* Hansip Flashlight Cone Beam in Distance */}
          <polygon points="360,20 180,110 260,170" fill="url(#flashlightGrad)" opacity="0.35" />
          
          <defs>
            <linearGradient id="flashlightGrad" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute top-3 left-3 bg-red-950/80 border border-red-500/40 text-red-200 text-xs px-2.5 py-1 rounded-md font-mono-game flex items-center gap-1.5 shadow-md">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          <span>STEALTH ACTIVE • LILIN 87%</span>
        </div>
      </div>
    );
  }

  if (type === 'brutal_kitchen') {
    return (
      <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#1c1204] via-[#241a08] to-[#0c0803] ${className}`}>
        {/* Pixel / Checker Kitchen Floor */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Fire Glow */}
        <div className="absolute w-52 h-52 bg-[#f59e0b]/20 rounded-full blur-2xl" />

        <svg viewBox="0 0 400 240" className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          {/* Industrial Iron Kitchen Counter */}
          <rect x="50" y="110" width="300" height="90" rx="8" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
          <rect x="58" y="118" width="284" height="20" fill="#374151" rx="4" />
          <line x1="50" y1="145" x2="350" y2="145" stroke="#111827" strokeWidth="3" />
          
          {/* Rivets */}
          <circle cx="65" cy="128" r="2.5" fill="#9ca3af" />
          <circle cx="335" cy="128" r="2.5" fill="#9ca3af" />

          {/* Flaming Industrial Wok / Stove */}
          <g transform="translate(90, 70)">
            {/* Flames under wok */}
            <path d="M20,60 Q30,35 35,55 Q45,30 50,60 Q40,65 20,60 Z" fill="#ef4444" />
            <path d="M25,58 Q32,42 35,53 Q40,38 45,58 Z" fill="#fbbf24" />
            {/* Wok base */}
            <ellipse cx="35" cy="55" rx="30" ry="12" fill="#111827" stroke="#9ca3af" strokeWidth="2" />
            {/* Boiling Green Hazardous Stew */}
            <ellipse cx="35" cy="53" rx="26" ry="9" fill="#10b981" />
            <circle cx="28" cy="51" r="3" fill="#34d399" />
            <circle cx="42" cy="54" r="2" fill="#6ee7b7" />
            {/* Steam / Sparks */}
            <circle cx="33" cy="35" r="2" fill="#fbbf24" opacity="0.8" />
            <circle cx="38" cy="25" r="3" fill="#ef4444" opacity="0.6" />
          </g>

          {/* Dystopian Chef Hero with Cleaver & Cast Iron Pan */}
          <g transform="translate(195, 45)">
            {/* Chef Hat - Dirty / Battle Torn */}
            <path d="M25,20 Q15,5 35,0 Q50,0 55,20 Z" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
            <rect x="25" y="18" width="30" height="8" fill="#d1d5db" rx="2" />
            
            {/* Head with Gasmask / Respirator */}
            <circle cx="40" cy="35" r="14" fill="#374151" stroke="#4b5563" strokeWidth="2" />
            {/* Glowing Orange Visor */}
            <rect x="30" y="30" width="20" height="8" rx="4" fill="#f97316" stroke="#fbbf24" strokeWidth="1.5" />
            <circle cx="40" cy="42" r="5" fill="#1f2937" stroke="#f59e0b" strokeWidth="1" />

            {/* Apron / Armor */}
            <path d="M22,48 L58,48 L54,85 L26,85 Z" fill="#991b1b" stroke="#f87171" strokeWidth="1.5" />
            <circle cx="40" cy="62" r="6" fill="#f59e0b" />

            {/* Weaponized Giant Meat Cleaver in Hand */}
            <g transform="translate(56, 35) rotate(25)">
              <rect x="0" y="0" width="6" height="22" fill="#78350f" rx="1" />
              <path d="M-6,22 L14,22 L18,50 L-10,50 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
              {/* Blade Edge */}
              <line x1="-10" y1="50" x2="18" y2="50" stroke="#38bdf8" strokeWidth="2" />
            </g>
          </g>

          {/* Order Slip Suspended on Wire */}
          <g transform="translate(300, 35) rotate(-8)">
            <rect x="0" y="0" width="40" height="55" rx="3" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
            <line x1="8" y1="12" x2="32" y2="12" stroke="#dc2626" strokeWidth="2.5" />
            <line x1="8" y1="22" x2="28" y2="22" stroke="#451a03" strokeWidth="2" />
            <line x1="8" y1="30" x2="32" y2="30" stroke="#451a03" strokeWidth="1.5" />
            <line x1="8" y1="38" x2="22" y2="38" stroke="#451a03" strokeWidth="1.5" />
            {/* Skull / Warning Stamp */}
            <circle cx="28" cy="42" r="5" fill="#ef4444" opacity="0.7" />
          </g>
        </svg>

        <div className="absolute top-3 left-3 bg-amber-950/80 border border-amber-500/40 text-amber-200 text-xs px-2.5 py-1 rounded-md font-mono-game flex items-center gap-1.5 shadow-md">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>SHIFT 04 • WAVE 12/20</span>
        </div>
      </div>
    );
  }

  // Sumpit Guardian
  return (
    <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#051c14] via-[#09261b] to-[#04110c] ${className}`}>
      {/* Bamboo / Traditional Grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]" />
      
      {/* Emerald Warm Glow */}
      <div className="absolute w-52 h-52 bg-[#10b981]/20 rounded-full blur-2xl animate-pulse" />

      <svg viewBox="0 0 400 240" className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
        {/* Traditional Wooden Table Surface */}
        <ellipse cx="200" cy="185" rx="170" ry="40" fill="#2e1005" stroke="#78350f" strokeWidth="2" />
        <ellipse cx="200" cy="180" rx="160" ry="35" fill="#451a03" />

        {/* The Legendary Indonesian Rooster Bowl (Mangkok Ayam Jago) */}
        <g transform="translate(125, 60)">
          {/* Bowl Outer Shadow */}
          <ellipse cx="75" cy="85" rx="72" ry="38" fill="#1c1917" opacity="0.5" />
          
          {/* Ceramic Bowl Body */}
          <path d="M5,45 Q75,125 145,45 Q135,15 75,15 Q15,15 5,45 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
          
          {/* Red Rooster Motif on Bowl Side */}
          <path d="M60,65 Q65,55 75,55 Q85,55 85,65 Q80,72 70,72 Z" fill="#dc2626" />
          <polygon points="85,60 92,62 86,65" fill="#f59e0b" />
          <path d="M55,60 Q52,50 62,52" stroke="#16a34a" strokeWidth="2" fill="none" />
          <circle cx="78" cy="59" r="1.5" fill="#000000" />

          {/* Steaming Yellow Noodles (Mie) */}
          <ellipse cx="75" cy="35" rx="60" ry="22" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
          <path d="M30,35 Q50,45 75,32 Q100,20 120,36" stroke="#ca8a04" strokeWidth="3" fill="none" />
          <path d="M35,28 Q60,38 85,25 Q110,40 115,28" stroke="#ca8a04" strokeWidth="2.5" fill="none" />
          
          {/* Diced Chicken (Ayam Kecap) */}
          <rect x="55" y="24" width="14" height="10" rx="3" fill="#78350f" stroke="#451a03" strokeWidth="1" />
          <rect x="72" y="22" width="16" height="11" rx="3" fill="#92400e" stroke="#451a03" strokeWidth="1" />
          <rect x="65" y="32" width="13" height="9" rx="3" fill="#78350f" stroke="#451a03" strokeWidth="1" />

          {/* Green Bok Choy / Sawi Hijau */}
          <path d="M90,20 Q115,15 125,28 Q110,38 95,28 Z" fill="#16a34a" stroke="#15803d" strokeWidth="1.5" />
          <path d="M100,22 L115,26" stroke="#86efac" strokeWidth="1.5" />

          {/* Crispy Fried Wonton (Pangsit Goreng) */}
          <polygon points="20,18 45,28 32,45" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />

          {/* Meatball (Bakso Sapi) */}
          <circle cx="45" cy="35" r="9" fill="#a8a29e" stroke="#78716c" strokeWidth="1.5" />

          {/* Fiery Red Sambal Dollop */}
          <circle cx="85" cy="38" r="6" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
          <circle cx="84" cy="37" r="1.5" fill="#fef08a" />

          {/* Steam Wafts */}
          <path d="M60,10 Q65,0 60,-12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.6" fill="none" className="animate-pulse" />
          <path d="M80,8 Q85,-3 80,-16" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" fill="none" className="animate-pulse" />
          <path d="M100,12 Q105,2 100,-10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.5" fill="none" className="animate-pulse" />
        </g>

        {/* The Guardian Bamboo Chopsticks (Sumpit) */}
        <g transform="translate(245, 20) rotate(-22)">
          {/* Stick 1 */}
          <polygon points="0,0 8,2 4,140 0,140" fill="#d97706" stroke="#fef08a" strokeWidth="1" />
          {/* Stick 2 */}
          <polygon points="12,0 20,2 14,140 10,140" fill="#b45309" stroke="#fef08a" strokeWidth="1" />
          {/* Energy / Slap Arc */}
          <path d="M-10,120 Q5,150 25,120" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.8" strokeLinecap="round" />
        </g>

        {/* Pesky Flying Insect / Fly Target */}
        <g transform="translate(80, 50)" className="animate-bounce">
          <ellipse cx="10" cy="10" rx="6" ry="4" fill="#1f2937" />
          {/* Wings */}
          <ellipse cx="6" cy="5" rx="5" ry="3" fill="#67e8f9" opacity="0.7" transform="rotate(-30 6 5)" />
          <ellipse cx="14" cy="5" rx="5" ry="3" fill="#67e8f9" opacity="0.7" transform="rotate(30 14 5)" />
          {/* Red Eyes */}
          <circle cx="15" cy="9" r="1.5" fill="#ef4444" />
        </g>
      </svg>

      <div className="absolute top-3 left-3 bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs px-2.5 py-1 rounded-md font-mono-game flex items-center gap-1.5 shadow-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span>MIE AYAM DEFENSE • COMBO x5</span>
      </div>
    </div>
  );
};
