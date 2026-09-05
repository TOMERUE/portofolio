export const portfolioData = {
  profile: {
    name: "Feri Yusgiantoro",
    studentId: "202310370311101",
    role: "Game Developer & Game Design Student",
    subRole: "Unity Engine Specialist • GDD Architect • 2D/Pixel Content Creator",
    tagline: {
      id: "Membawa Budaya, Cerita Rakyat & Street Food Nusantara ke Dunia Game.",
      en: "Bringing Indonesian Folklore, Heritage & Street Food Culture to Life through Video Games."
    },
    bio: {
      id: "Halo! Saya Feri Yusgiantoro, mahasiswa Game Design & Developer yang berfokus mengembangkan pengalaman game imersif berbasis Unity Engine. Saya memiliki passion mendalam untuk mengemas mitologi, legenda urban nusantara, dan kehangatan street food Indonesia menjadi mekanika game yang segar, engaging, dan berkarakter kuat. Saya aktif dalam menyusun Game Design Document (GDD) terstruktur dari konsep dasar hingga balancing, sekaligus merancang visual & asset game.",
      en: "Hello! I am Feri Yusgiantoro, a Game Design student and Developer focused on building immersive game experiences in the Unity Engine. I have a deep passion for translating Indonesian urban legends, local folklore, and iconic street food vibes into fresh, engaging, and memorable gameplay mechanics. I specialize in crafting comprehensive Game Design Documents (GDD) as well as 2D/Pixel game asset creation."
    },
    status: {
      id: "Tersedia untuk Magang / Kolaborasi Proyek Game Indie",
      en: "Open for Internships & Indie Game Collaborations"
    },
    location: "Indonesia",
    email: "feriyusgiantoro@gmail.com",
    socials: {
      itchio: "https://itch.io",
      linkedin: "https://linkedin.com",
      github: "https://github.com/TOMERUE",
      instagram: "https://instagram.com",
      discord: "@mafiatom"
    },
    stats: [
      { id: "3+", labelId: "Proyek & GDD Lengkap", labelEn: "Featured GDDs & Games" },
      { id: "Unity", labelId: "Core Game Engine (C#)", labelEn: "Core Engine (C#)" },
      { id: "100%", labelId: "Passion Budaya Nusantara", labelEn: "Indonesian Cultural Focus" },
      { id: "2D/Pixel", labelId: "Asset & Content Pipeline", labelEn: "Asset & Art Pipeline" }
    ]
  },

  projects: [
    {
      id: "b4b1-ngepet",
      title: "B4B1 Ngepet",
      genre: "Isometric Top-Down / Stealth-Heist Folklore Comedy",
      status: "GDD & Prototype Ready",
      theme: "Indonesian Pesugihan Folklore & Urban Myth",
      themeColor: "#d9532f",
      accentBg: "from-amber-950/40 via-red-950/30 to-black/80",
      shortDesc: {
        id: "Game stealth-heist isometrik single-screen terinspirasi legenda pesugihan Babi Ngepet (ala Hotline Miami / Stardew Valley versi maling malam). Pemain jadi warga kampung yang terlilit utang rentenir, menyusup jadi babi untuk mengumpulkan koin Rp 250.000 sambil menghindari patroli warga dan Line-of-Sight senter Hansip.",
        en: "A single-screen isometric top-down stealth-heist game inspired by Indonesian pesugihan folklore. Play as a debt-ridden villager turning into a mythical boar at midnight to loot coins (Rp 250,000/coin) while evading neighborhood patrols and flashlight Line-of-Sight before dawn."
      },
      tags: ["Unity", "C#", "Isometric Top-Down", "GDD Complete", "LOS Detection", "Stealth AI", "Endless Arcade"],
      bannerSvg: "babi_ngepet",
      features: [
        {
          titleId: "Mekanik Babi & Skill Deteksi Koin",
          titleEn: "Boar Mechanics & Coin Radar Skill",
          descId: "Kontrol WASD/Arrow untuk gerak dan lompat, sembunyi di semak-semak, serta aktifkan skill deteksi koin dengan indikator 3D arah & jarak koin (Rp 250.000 per koin).",
          descEn: "Full movement & jump controls, hide in foliage/bushes, and trigger Coin Radar skill with 3D directional arrow pointing to randomized spawn colliders."
        },
        {
          titleId: "Sistem Deteksi Musuh LOS (Line-of-Sight)",
          titleEn: "LOS Vision Cone & Point Light AI",
          descId: "Warga & Hansip menggunakan Spotlight (penglihatan jauh kerucut depan) dan Point Light (deteksi sekitar dekat). Musuh mengejar babi sampai titik terakhir terlihat.",
          descEn: "Patrols utilize Spotlight cones for forward sightlines and Point Lights for proximity awareness. Guards pursue until the last confirmed sighting."
        },
        {
          titleId: "Difficulty Scaling & Game Over RIGUL",
          titleEn: "Difficulty Scaling & RIGUL Game Over",
          descId: "Tiap 30-45 detik musuh bertambah (max 6-8), kecepatan musuh naik bertahap ala Pac-Man. Jika tertangkap total: Game Over 'RIGUL' (Babi Guling).",
          descEn: "Every 30-45s a new enemy spawns (cap 6-8), patrol speed scales like Pac-Man. Getting fully caught triggers 'RIGUL' (Roast Pig) Game Over screen."
        }
      ],
      gddDetails: {
        highConcept: {
          id: "Single-screen kamera isometric top-down (Hotline Miami / Stardew Valley vibe nyolong malam). Warga terhimpit utang rentenir terpaksa menjalani ritual babi ngepet tiap malam dengan taruhan tertangkap warga.",
          en: "Single-screen isometric top-down stealth heist. A debt-strapped villager undertakes nightly shape-shifting boar rituals to loot neighbors before sunrise."
        },
        coreLoop: {
          id: "[Isometric: Jalan-jalan, nyolong koin, ngendap-ngendap] ➔ Masuk Vision Cone Warga? ➔ Ya: Kabur / Sembunyi di Semak ➔ Gagal Lolos: RIGUL (Game Over) ➔ Berhasil: Akumulasi Koin & Rekor Skor",
          en: "[Isometric: Sneak, loot coins, dodge guards] ➔ Entered Vision Cone? ➔ Yes: Flee / Hide in Bushes ➔ Caught: RIGUL (Game Over) ➔ Escaped: Accumulate Coin High Score"
        },
        targetAudience: "Penggemar game stealth arcade, komedi lokal, dan visual retro isometric (PC / Web / Mobile).",
        keySystems: [
          { name: "Sistem Spawn Koin Berulang", detail: "Koin spawn 1-3 acak dalam batas Box Collider map, mengalirkan gameplay endless arcade dengan nilai akumulasi uang." },
          { name: "Multi-Level Map Layouts", detail: "LV1: 4 Rumah + Pos Ronda pusat; LV2: Perumahan Gang Padat; LV3: Labirin Lorong Sempit Kampung." },
          { name: "3D Low-Poly Boar Asset", detail: "Desain karakter 3D Cube Pig Cute Pro Series dengan indikator player saat memasuki lorong tertutup." }
        ],
        documentSections: [
          "1. Konsep Inti & Story Latar Belakang (Utang Rentenir)",
          "2. Mekanik Babi (Gerak, Lompat, Semak, Skill Deteksi Koin Rp 250k)",
          "3. Mekanik Enemy LOS (Spotlight Jauh & Point Light Dekat)",
          "4. Difficulty Scaling (Penambahan Musuh Tiap 30-45s & Speed Boost)",
          "5. Level Layouts (LV1 Pos Ronda, LV2 Perumahan, LV3 Labirin Gang)",
          "6. UI & Game Over Screen 'RIGUL' (Babi Guling)"
        ]
      }
    },
    {
      id: "brutal-kitchen-survival",
      title: "Brutal Kitchen Survival",
      genre: "2D Top-Down Roguelike / Action Arena Survival / Bullet Hell",
      status: "GDD 31-Halaman Lengkap",
      theme: "Dystopian Culinary Horror & Build Synergy",
      themeColor: "#f59e0b",
      accentBg: "from-orange-950/40 via-amber-950/30 to-black/80",
      shortDesc: {
        id: "Game 2D top-down roguelike action-arena survival (Brotato meets The Binding of Isaac) karya Feri Yusgiantoro. Bertahan hidup 20 Wave di dapur distopia restoran El Cauldron sebagai Chef Ramsgate melawan mutasi monster dapur, meracik sinergi 6 senjata sekaligus, dan menghadapi Head Chef Abomination.",
        en: "A 2D top-down roguelike action-arena survival game (Brotato meets The Binding of Isaac) by Feri Yusgiantoro. Survive 20 intense waves in the dystopian kitchen of El Cauldron as Chef Ramsgate, wielding up to 6 kitchen weapons simultaneously and defeating Head Chef Abomination."
      },
      tags: ["Unity 2D", "Pixel Art", "GDD Complete", "Roguelike", "Brotato-like", "Item Synergy", "Bullet Hell"],
      bannerSvg: "brutal_kitchen",
      features: [
        {
          titleId: "Chef Ramsgate & Skill Furious Flurry",
          titleEn: "Chef Ramsgate & Furious Flurry Rage",
          descId: "Kepala koki pemarah (HP 80, Speed Sedang, Luck -10%). Active Skill: Rage Mode 6 detik (Damage x2.5, Attack Speed x2.0, Aura Burn pasif).",
          descEn: "Furious veteran chef (HP 80, Normal Speed, Luck -10%). Active Skill: 6s Rage Mode (Damage x2.5, Attack Speed x2.0, Passive Burn Aura)."
        },
        {
          titleId: "Sistem 6 Senjata & Combine Tier",
          titleEn: "6-Weapon Arsenal & Auto-Combine Tier",
          descId: "Pegang 6 senjata sekaligus (Pisau, Spatula, Talenan, Wajan). Beli 2 senjata identik di Pantry Shop otomatis bergabung (combine) ke tier lebih tinggi.",
          descEn: "Hold up to 6 kitchen weapons (Cleaver, Spatula, Cutting Board, Wok). Buying identical weapons in Pantry Shop auto-combines them into higher tiers."
        },
        {
          titleId: "Sinergi Item Liar (Gas Cabe, Telur, Indomie)",
          titleEn: "Wild Item Synergies (Gas Cabe, Indomie, Garlic)",
          descId: "Kombinasi item ekstrem: Telur (Cracked Shield), Indomie (Regen HP), Tabung Gas + Cabai = Tabung Gas Cabai (Inferno Burst 110 dmg + ledakan api).",
          descEn: "Broken synergy combos: Egg (Cracked Shield), Indomie (Comfort Regen), Gas Tank + Chili = Chili Gas Tank (Inferno Burst 110 dmg + flame zone)."
        }
      ],
      gddDetails: {
        highConcept: {
          id: "Roguelike action-arena 2D top-down (Brotato x The Binding of Isaac). Bertahan di dapur distopia El Cauldron dari sisa makanan membusuk, genangan minyak, dan monster culinary abomination.",
          en: "2D top-down roguelike action-arena survival (Brotato x The Binding of Isaac). Survive the El Cauldron kitchen horrors fueled by years of kitchen wrath and food waste."
        },
        coreLoop: {
          id: "Pilih Karakter & Senjata ➔ Gelombang 60 Detik (Auto-Attack, Dodging No-Dash) ➔ Ambil Penny & XP ➔ Level Up Upgrade ➔ Pantry Shop (Belanja & Sinergi) ➔ Elite Boss (Sous Chef Golem & Fridge Tyrant) ➔ Wave 20 Final Boss Head Chef Abomination ➔ The Last Recipe 5-Sec Skill Check ➔ Chef Credits & Meta-Unlock",
          en: "Select Chef & Starter Weapon ➔ 60s Wave (Auto-Attack, No-Dash Dodging) ➔ Collect Penny & XP ➔ Level Up ➔ Pantry Shop (Shop & Synergies) ➔ Elite Bosses ➔ Wave 20 Final Boss ➔ The Last Recipe 5s Skill Check ➔ Chef Credits Meta-Progression"
        },
        targetAudience: "Penggemar roguelike arena survival bertempo cepat, penikmat sinergi item liar, dan pemain kompetitif (PC / Steam).",
        keySystems: [
          { name: "Monster Roster & Death Rattles", detail: "Cockroach Runner (Lendir slow -35%), Grease Blob (Minyak licin), Sous Chef Golem (HP 600 bara api), Fridge Tyrant (HP 850 Frost Burst), Scavenger Ant (Loot scatter), Head Chef Abomination (HP 3000 Phase 2 Bullet Hell)." },
          { name: "Dynamic Environmental Hazards", detail: "Wave 1-5 Dapur Normal ➔ Wave 6-10 Lantai Berminyak (Speed +20% licin) ➔ Wave 11-15 Meja Bergerak & Kompor Panas ➔ Wave 16-20 Dapur Terbakar & Wet Zone." },
          { name: "Fair Meta-progression & Mercy Mechanics", detail: "Chef Credits (CC) murni membuka variasi gaya bermain tanpa pay-to-win; Mercy System memberikan 1 Rare Item gratis jika gagal 3x di wave sama; Rookie Mode membawa 10% sisa Penny." }
        ],
        documentSections: [
          "1. Game Overview & Story El Cauldron (Feri Yusgiantoro - 202310370311101)",
          "2. Karakter Chef Ramsgate & Active Skill Furious Flurry",
          "3. Sistem Senjata (6 Slot, Auto-Attack, Upgrade Combine Tier)",
          "4. Katalog Item & Sinergi (Telur, Cabai, Indomie, Bawang Putih, Tabung Gas Cabai)",
          "5. Roster 7 Musuh & Death Rattle Hazards Lingkungan",
          "6. Level Design 20 Wave & Boss Fight Phase (The Last Recipe 5s)",
          "7. Sistem Ekonomi Dual-Drop (Penny/XP) & Pantry Shop Reroll",
          "8. Mercy Mechanics & Chef Credits (CC) Meta-Progression"
        ]
      }
    },
    {
      id: "sumpit-guardian",
      title: "Sumpit Guardian: Mie Ayam Edition",
      genre: "Casual Arcade Defense / Street Food Heritage",
      status: "Playable Concept & GDD",
      theme: "Indonesian Street Food Culture",
      themeColor: "#10b981",
      accentBg: "from-emerald-950/40 via-teal-950/30 to-black/80",
      shortDesc: {
        id: "Game defense kasual yang adiktif! Lindungi semangkuk mie ayam legendaris dari serbuan lalat nakal, semut rakus, dan kucing usil menggunakan kelihaian menjepit sumpit bambu tradisional.",
        en: "An addictive casual defense arcade game! Guard an iconic bowl of Indonesian Mie Ayam from relentless flies, greedy ants, and mischievous street cats using traditional bamboo chopsticks."
      },
      tags: ["Unity", "2D Physics", "Casual Gameplay", "Food Culture", "Particle FX", "GDD Complete"],
      bannerSvg: "sumpit_guardian",
      features: [
        {
          titleId: "Presisi Tepukan Sumpit",
          titleEn: "Chopstick Flick Precision",
          descId: "Sentuh, jepit, atau tepuk hama dengan timing presisi. Multi-combo memberikan bonus multiplier skor koin gerobak.",
          descEn: "Tap, pinch, and flick pests with precise timing. Multi-combos yield massive coin multiplier bonuses."
        },
        {
          titleId: "Kekuatan Bumbu Meja (Power-Ups)",
          titleEn: "Condiment Power-Ups",
          descId: "Sambal Pedas Mampus (Area Blast), Kuah Kaldu Panas (Slow Motion Wave), dan Kerupuk Pangsit (Shield Perlindungan Mangkuk).",
          descEn: "Extra Spicy Sambal (AOE Blast), Steaming Broth (Slow Motion), and Crispy Wonton Crackers (Bowl Shield)."
        },
        {
          titleId: "Variasi Mangkuk Kuliner Nusantara",
          titleEn: "Iconic Street Food Skins",
          descId: "Unlock gerobak vintage, mangkuk ayam jago legendaris, topping bakso urat, ceker pedas, hingga pangsit basah.",
          descEn: "Unlock legendary rooster bowls, vintage street carts, beef meatball toppings, and braised chicken delicacies."
        }
      ],
      gddDetails: {
        highConcept: {
          id: "Game arkade kasual yang merayakan kenikmatan street food mie ayam Indonesia dengan gameplay refleks yang memuaskan untuk semua usia.",
          en: "A delightful casual arcade celebrating Indonesia's most beloved street food noodle culture with snappy reflex gameplay."
        },
        coreLoop: {
          id: "Sajikan Mangkuk Mie Hangat ➔ Tangkis Gelombang Hama dengan Sumpit ➔ Aktifkan Sambal/Kuah Power-Up ➔ Selamatkan Skor Kepuasan Pembeli ➔ Upgrade Resep & Gerobak",
          en: "Serve Steaming Bowl ➔ Defend against Pest Waves with Chopsticks ➔ Trigger Sambal Blasts ➔ Maximize Customer Satisfaction ➔ Upgrade Cart & Toppings"
        },
        targetAudience: "Casual mobile gamers, pecinta kuliner Indonesia, dan penikmat game bertempo santai namun menantang.",
        keySystems: [
          { name: "Pest Wave Spawning Logic", detail: "Lalat manuver spiral cepat, semut merayap bergerombol di pinggir mangkuk, tangan kucing mencoba mencuri bakso." },
          { name: "Heat & Freshness Meter", detail: "Mie harus dihabiskan dalam kondisi prima; hama mengurangi kenikmatan estetika kuah." },
          { name: "Nusantara Street Food Gacha", detail: "Sistem koleksi topping: Bakso Halus, Pangsit Goreng, Ceker Kecap, Acar Mentimun." }
        ],
        documentSections: [
          "1. Core Vision & Cultural Resonance",
          "2. Tap/Gesture Input Mapping & Hitboxes",
          "3. Pest Economy & Difficulty Scaling Curves",
          "4. Visual Aesthetics: The Legendary Rooster Bowl Lore",
          "5. Casual Retention & Sound Design (Slurp & Crunch SFX)"
        ]
      }
    }
  ],

  skills: {
    gameDesign: {
      categoryTitleId: "Game Design & Dokumentasi (GDD)",
      categoryTitleEn: "Game Design & GDD Documentation",
      items: [
        { name: "Game Design Documents (GDD)", level: 95, descId: "Penyusunan dokumen desain menyeluruh dari core pillar, mechanics, ekonomi, hingga UI wireframe (seperti GDD 31-halaman Brutal Kitchen).", descEn: "Comprehensive design docs from core pillars, mechanics, economy, to UI wireframes (as demonstrated in the 31-page Brutal Kitchen GDD)." },
        { name: "Core Loop & Mechanics Balancing", level: 90, descId: "Merancang loop permainan adiktif dan tabel balancing parameter damage, weapon combining, dan survival pacing.", descEn: "Designing engaging game loops, weapon combining tables, and survival difficulty balancing." },
        { name: "Level Design & Flow", level: 85, descId: "Penyusunan layout ruang isometrik, 2D hazard grids, dan pacing tantangan wave bertahap.", descEn: "Isometric spatial layouts, 2D hazard grids, and structured wave pacing curves." },
        { name: "Cultural Narrative Integration", level: 95, descId: "Mengadaptasi folklore pesugihan, mitologi lokal, dan budaya kuliner ke dalam narasi game modern.", descEn: "Infusing local folklore, street food culture, and authentic urban myth into modern video game narratives." }
      ]
    },
    engineCode: {
      categoryTitleId: "Engine & Pemrograman Game",
      categoryTitleEn: "Game Engine & Programming",
      items: [
        { name: "Unity Engine (2D / Isometric / 3D)", level: 90, descId: "Pengembangan game logic, tilemap isometric, physics 2D, particle systems, dan UI toolkit.", descEn: "Game logic architecture, isometric tilemaps, 2D physics, particles, and UI toolkit." },
        { name: "C# Scripting for Games", level: 85, descId: "OOP, ScriptableObjects untuk modular data item/senjata, State Machines untuk AI musuh & boss.", descEn: "OOP, ScriptableObjects for modular item/weapon data, and State Machines for enemy AI & bosses." },
        { name: "Game AI & Line-of-Sight (LOS)", level: 85, descId: "Implementasi deteksi Spotlight/Pointlight LOS, A* Pathfinding, dan patrol behavior state trees.", descEn: "Spotlight/Pointlight LOS detection, A* Pathfinding implementation, and patrol state trees." },
        { name: "Game Audio & SFX Integration", level: 80, descId: "Implementasi ambient soundscape, audio mixer, trigger peristiwa suara dinamis.", descEn: "Dynamic audio mixers, event-triggered sound effects, and atmospheric soundscapes." }
      ]
    },
    artPipeline: {
      categoryTitleId: "Art & Asset Creation Pipeline",
      categoryTitleEn: "Art & Content Creation Pipeline",
      items: [
        { name: "Pixel Art & Sprite Animation (Aseprite)", level: 85, descId: "Pembuatan karakter chef, monster sprite sheets, tile sheet environment, dan animasi frame-by-frame.", descEn: "Chef character sprites, monster sprite sheets, environment tilesets, and frame-by-frame animation." },
        { name: "2D Game Art & Illustration", level: 85, descId: "Desain konsep visual, splash art, icon item, dan ornamen bergaya Nusantara.", descEn: "Visual concept art, splash illustrations, item icons, and cultural motifs." },
        { name: "Game UI / UX Wireframing", level: 90, descId: "Perancangan tata letak antarmuka HUD, menu inventory, dan visual feedback yang jelas.", descEn: "HUD layouts, inventory menus, readable typography, and tactile UI feedback." },
        { name: "3D Low-Poly Basics (Blender)", level: 75, descId: "Dasar pemodelan low-poly untuk aset props isometrik, cute cube character, dan blocking level.", descEn: "Low-poly modeling basics for isometric props, cute cube characters, and whiteboxing levels." }
      ]
    },
    tools: [
      { name: "Unity", icon: "Gamepad2", category: "Engine" },
      { name: "C#", icon: "Code2", category: "Language" },
      { name: "Aseprite", icon: "Palette", category: "Pixel Art" },
      { name: "Figma", icon: "Layout", category: "UI/UX" },
      { name: "Miro", icon: "GitFork", category: "Brainstorming" },
      { name: "Notion GDD", icon: "FileText", category: "Documentation" },
      { name: "Git / GitHub", icon: "GitBranch", category: "Version Control" },
      { name: "Audacity", icon: "Headphones", category: "Audio" }
    ]
  },

  gddPillars: {
    titleId: "Metodologi & Standar Desain Dokumen (GDD)",
    titleEn: "GDD Design Methodology & Standards",
    subtitleId: "Bagaimana saya menyusun dokumentasi game yang rapi, modular, dan siap dieksekusi tim developer:",
    subtitleEn: "How I formulate clean, modular, and developer-ready Game Design Documents:",
    steps: [
      {
        number: "01",
        titleId: "High Concept & Story Premise",
        titleEn: "High Concept & Story Premise",
        descId: "Menentukan USP (Unique Selling Proposition), latar belakang cerita (utang rentenir / dapur El Cauldron), dan pilar emosi utama pemain.",
        descEn: "Defining the USP, narrative backstory, and the core emotional anchor for the player."
      },
      {
        number: "02",
        titleId: "Core Loop & Mechanics Breakdown",
        titleEn: "Core Loop & Mechanics Breakdown",
        descId: "Merinci aksi detik-demi-detik pemain, siklus gelombang survival, sistem sinergi senjata, dan relasi antar mekanika.",
        descEn: "Detailing second-to-second player actions, survival wave cycles, weapon combining tables, and mechanical synergies."
      },
      {
        number: "03",
        titleId: "AI Behavior & Level Spatial Design",
        titleEn: "AI Behavior & Level Spatial Design",
        descId: "Diagram alur logika state machine musuh (LOS Spotlight/Pointlight), layout level, titik spawn bahaya, dan pacing kesulitan.",
        descEn: "State machine logic flowcharts, LOS detection cones, hazard grids, and difficulty scaling curves."
      },
      {
        number: "04",
        titleId: "Item Catalog & Technical Handoff",
        titleEn: "Item Catalog & Technical Handoff",
        descId: "Tabel spesifikasi item (Tier, Stats, Pasif), sprite sheets animasi NPC, naming convention, dan parameter ScriptableObject untuk programmer.",
        descEn: "Item specifications (Tier, Stats, Passives), NPC sprite sheet specs, naming conventions, and ScriptableObject parameter specs."
      }
    ]
  },

  aboutStory: {
    quoteId: "“Game adalah kanvas interaktif paling kuat untuk melestarikan dan memperkenalkan kekayaan budaya lokal ke generasi masa kini dan panggung global.”",
    quoteEn: "“Video games are the most powerful interactive canvas to preserve and project rich local heritage onto the modern global stage.”",
    paragraphsId: [
      "Perjalanan saya di dunia game development berakar dari ketertarikan mendalam pada interaktivitas dan penceritaan budaya. Sebagai mahasiswa Game Design, saya melihat bahwa Indonesia memiliki lautan inspirasi yang belum terjamah di ranah game internasional — mulai dari mistisisme mitologi daerah, kehangatan kehidupan gerobak street food, hingga dinamika sosial urban yang penuh warna.",
      "Spesialisasi saya berada pada perpaduan dua pilar penting: **Game Design & Dokumentasi (GDD)** yang presisi dan terstruktur (seperti GDD 31-halaman Brutal Kitchen Survival dan B4B1 Ngepet), serta **Implementasi Teknis di Unity Engine**. Saya senang memecah konsep abstrak menjadi mekanika konkret yang terukur, merancang state machine AI, dan mengemasnya dengan visual pixel art atau 2D art yang menawan.",
      "Bagi saya, game yang hebat bukan hanya yang memiliki visual indah, tetapi game yang memiliki 'game feel' renyah, aturan main yang elegan, dan jiwa cerita yang berkesan di benak pemain."
    ],
    paragraphsEn: [
      "My journey in game development stems from a profound fascination with interactive storytelling and cultural worldbuilding. As a Game Design student, I believe Indonesia holds an untapped treasure trove of inspiration — from mystical urban legends and folklore to the energetic warmth of street food carts and vibrant community dynamics.",
      "My core strengths bridge two vital domains: structured **Game Design Documentation (GDD)** with clear systemic balancing (such as the 31-page Brutal Kitchen Survival and B4B1 Ngepet GDDs), and **Hands-on Unity Engine Implementation**. I love transforming abstract concepts into mathematically sound game loops, designing responsive enemy AI, and crafting complementary 2D/Pixel Art assets.",
      "To me, a great game goes beyond pretty visuals — it thrives on punchy game feel, elegant rule design, and an unforgettable cultural soul that resonates with players worldwide."
    ]
  }
};
