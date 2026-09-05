export const portfolioData = {
  profile: {
    name: "Feri Yusgiantoro",
    role: "Game Developer & Game Design Student",
    subRole: "Unity Engine Specialist • GDD Architect • 2D Content Creator",
    tagline: {
      id: "Membawa Budaya, Cerita Rakyat & Street Food Nusantara ke Dunia Game.",
      en: "Bringing Indonesian Folklore, Heritage & Street Food Culture to Life through Video Games."
    },
    bio: {
      id: "Halo! Saya Feri Yusgiantoro, mahasiswa Game Design & Developer yang berfokus mengembangkan pengalaman game imersif berbasis Unity Engine. Saya memiliki passion mendalam untuk mengemas mitologi, legenda urban nusantara, dan kehangatan street food Indonesia menjadi mekanika game yang segar, engaging, dan berkarakter kuat. Saya aktif dalam menyusun Game Design Document (GDD) terstruktur dari konsep dasar hingga balancing, sekaligus merancang visual & asset game.",
      en: "Hello! I am Feri Yusgiantoro, a Game Design student and Developer focused on building immersive game experiences in the Unity Engine. I have a deep passion for translating Indonesian urban legends, local folklore, and iconic street food vibes into fresh, engaging, and memorable gameplay mechanics. I specialize in crafting comprehensive Game Design Documents (GDD) as well as 2D game asset creation."
    },
    status: {
      id: "Tersedia untuk Magang / Kolaborasi Proyek Game Indie",
      en: "Open for Internships & Indie Game Collaborations"
    },
    location: "Indonesia",
    email: "feriyusgiantoro.gamedev@gmail.com",
    socials: {
      itchio: "https://itch.io",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      instagram: "https://instagram.com",
      discord: "feridev#0000"
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
      genre: "Isometric Stealth-Heist / Folklore Comedy-Horror",
      status: "GDD & Prototype Ready",
      theme: "Folklore & Urban Myth",
      themeColor: "#d9532f",
      accentBg: "from-amber-950/40 via-red-950/30 to-black/80",
      shortDesc: {
        id: "Game stealth-heist isometrik yang terinspirasi legenda pesugihan Babi Ngepet. Pemain mengontrol siluman babi menyusup ke komplek perumahan, mencuri harta sambil memantau nyala lilin sakral.",
        en: "An isometric stealth-heist game inspired by Indonesian pesugihan folklore. Play as a mythical shape-shifting boar sneaking into suburban neighborhoods to hoard wealth while keeping the ritual candle burning."
      },
      tags: ["Unity", "C#", "Isometric Tilemap", "GDD Complete", "A* Pathfinding", "Stealth AI"],
      bannerSvg: "babi_ngepet",
      features: [
        {
          titleId: "Mekanika Sakral Lilin (Dual Reality)",
          titleEn: "Sacred Candle Dual-Management",
          descId: "Keberhasilan ritual bergantung pada kestabilan api lilin yang dijaga rekan di kamar rahasia. Api goyang saat bahaya mendekat!",
          descEn: "Ritual success relies on the candle flame monitored in the sanctuary. Sudden flickers warn of approaching security!"
        },
        {
          titleId: "AI Kompleks Perumahan & Hansip Patrol",
          titleEn: "Neighborhood Alertness & Hansip AI",
          descId: "Hansip membawa senter & peluit, anjing penjaga menggonggong saat mencium bau mistis, dan kamera CCTV warga.",
          descEn: "Guards patrol with flashlights, neighborhood dogs bark at supernatural presence, and alert neighbors trigger alarms."
        },
        {
          titleId: "Dynamic Friction Looting",
          titleEn: "Dynamic Friction Looting",
          descId: "Makin banyak perhiasan dan uang yang digasak, pergerakan babi semakin lambat dan menghasilkan suara gemerincing koin.",
          descEn: "The more gold and cash stolen, the heavier and noisier the boar becomes, increasing detection risks."
        }
      ],
      gddDetails: {
        highConcept: {
          id: "Menggabungkan ketegangan stealth tactical ala Shadow Tactics dengan humor satir dan folklore pesugihan lokal Indonesia.",
          en: "Combining tactical stealth tension with comedic satire of Indonesian get-rich-quick folklore."
        },
        coreLoop: {
          id: "Pilih Komplek Target ➔ Ritual Nyala Lilin ➔ Menyusup & Hindari Hansip/Anjing ➔ Sedot Harta Warga ➔ Kabur Sebelum Lilin Padam ➔ Upgrade Jimat Mistis",
          en: "Select Target Area ➔ Light Ritual Candle ➔ Infiltrate & Avoid Guards ➔ Loot Valuables ➔ Escape before Candle Extinguishes ➔ Upgrade Talismans"
        },
        targetAudience: "Pecinta game stealth, komedi horor indie, dan penikmat tema budaya lokal (PC / Mobile).",
        keySystems: [
          { name: "Vision Cones & Scent Radius", detail: "Hansip memiliki sudut pandang senter kerucut; anjing warga memiliki radius deteksi bau." },
          { name: "Lilin Stability System", detail: "Timer dinamis dipengaruhi angin, gempa kecil, atau kucing nakal di kamar ritual." },
          { name: "Pasar Gaib Progression", detail: "Toko upgrade jimat untuk meningkatkan kecepatan lari, peredam langkah kaki, dan durasi berkamuflase." }
        ],
        documentSections: [
          "1. Executive Summary & Design Pillars",
          "2. Gameplay Mechanics & Candle Resource System",
          "3. Enemy AI Archetypes (Hansip, Dog, Resident, CCTV)",
          "4. Level Layouts (RT 01 Perumahan Graha Asri)",
          "5. Sound Design (Kentongan, Suara Angin, Desah Mistis)"
        ]
      }
    },
    {
      id: "brutal-kitchen-survival",
      title: "Brutal Kitchen Survival",
      genre: "Top-Down Roguelike / Dystopian Kitchen Horror",
      status: "GDD & Asset Pipeline Spec",
      theme: "Dystopian Culinary Horror",
      themeColor: "#f59e0b",
      accentBg: "from-orange-950/40 via-amber-950/30 to-black/80",
      shortDesc: {
        id: "Roguelike top-down bertema dapur bawah tanah distopia. Siapkan pesanan mengerikan untuk para monster dan elit mutan di bawah tekanan waktu, atau kamu yang akan dijadikan bahan masakan selanjutnya!",
        en: "A top-down roguelike set in a brutal dystopian underground kitchen. Prepare bizarre orders for mutant overlords under extreme pressure, or become the next ingredient on the butcher block!"
      },
      tags: ["Unity 2D", "Pixel Art", "GDD Complete", "Procedural Waves", "Crafting System", "Boss Battles"],
      bannerSvg: "brutal_kitchen",
      features: [
        {
          titleId: "Weaponized Kitchen Utensils",
          titleEn: "Weaponized Kitchen Utensils",
          descId: "Gunakan wajan anti-lengket sebagai tameng, pisau daging sebagai proyektil bumerang, dan semprotan minyak mendidih.",
          descEn: "Use cast-iron woks as shields, cleavers as boomerangs, and flaming oil sprayers to fight chaotic kitchen hazards."
        },
        {
          titleId: "Pesanan Kritis & Panic Timers",
          titleEn: "Critical Orders & Panic Timers",
          descId: "Monster pelanggan punya kesabaran tipis. Resep masakan acak dengan kombinasi bahan distopia yang berbahaya.",
          descEn: "Mutant patrons have zero patience. Craft recipes with volatile ingredients under relentless countdowns."
        },
        {
          titleId: "Rogue Ingredient Upgrades",
          titleEn: "Rogue Ingredient Upgrades",
          descId: "Setiap ronde berhasil memberikan pilihan mutasi: Bumbu Pedas Asam Nuklir, Kompor Overclock, atau Sepatu Anti-Lantai Licin.",
          descEn: "Surviving shifts awards rogue-lite perk cards: Nuclear Chili Spices, Overclocked Burners, or Grease-Resistant Boots."
        }
      ],
      gddDetails: {
        highConcept: {
          id: "Overcooked meets Enter the Gungeon dalam suasana dapur horor kotor dengan elemen humor gelap.",
          en: "Overcooked meets Enter the Gungeon in a gritty, high-stakes dystopian kitchen filled with dark humor."
        },
        coreLoop: {
          id: "Terima Tiket Pesanan ➔ Tangkap Bahan Hidup / Potong ➔ Masak di Stasiun Api ➔ Bertahan dari Serbuan Hama Distopia ➔ Sajikan Tepat Waktu ➔ Pilih Rogue Perks",
          en: "Receive Order Slip ➔ Hunt Ingredients ➔ Cook on Hazardous Stations ➔ Fight Vermin ➔ Serve Order ➔ Pick Rogue Perks"
        },
        targetAudience: "Gamers penggemar roguelike bertempo cepat, simulasi manajemen intens, dan estetika pixel art retro.",
        keySystems: [
          { name: "Multi-Station Hazard Grid", detail: "Lantai licin karena ceceran minyak, kompor meledak jika overcooked, dan conveyor belt acak." },
          { name: "Customer Rage Threshold", detail: "Jika pesanan terlambat, pelanggan mendobrak masuk ke dapur sebagai mini-boss darurat." },
          { name: "Black Market Recipe Book", detail: "Pohon teknologi resep yang membuka variasi efek elemental pedas, racun, dan kejut listrik." }
        ],
        documentSections: [
          "1. Game Vision & Thematic Worldbuilding",
          "2. Combat & Cooking Synergies",
          "3. Ingredient Hierarchy & Volatility Chart",
          "4. Floor Hazards & Boss Phase Transitions (Head Inspector)",
          "5. Pixel Art & Audio Asset Specifications"
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
        { name: "Game Design Documents (GDD)", level: 95, descId: "Penyusunan dokumen desain menyeluruh dari core pillar, mechanics, ekonomi, hingga UI wireframe.", descEn: "Comprehensive design docs from core pillars, mechanics, economy, to UI wireframes." },
        { name: "Core Loop & Mechanics Balancing", level: 90, descId: "Merancang loop permainan adiktif dan tabel balancing parameter objek.", descEn: "Designing engaging game loops and mathematical balancing sheets." },
        { name: "Level Design & Flow", level: 85, descId: "Penyusunan layout ruang isometrik, 2D platforming, dan pacing tantangan bertahap.", descEn: "Isometric spatial layouts, 2D pacing, and structured difficulty curves." },
        { name: "Cultural Narrative Integration", level: 95, descId: "Mengadaptasi folklore, mitologi lokal, dan budaya Indonesia ke dalam narasi game modern.", descEn: "Infusing local folklore, street culture, and oral myth into modern video game narratives." }
      ]
    },
    engineCode: {
      categoryTitleId: "Engine & Pemrograman Game",
      categoryTitleEn: "Game Engine & Programming",
      items: [
        { name: "Unity Engine (2D / Isometric / 3D)", level: 90, descId: "Pengembangan game logic, tilemap isometric, physics 2D, particle systems, dan UI toolkit.", descEn: "Game logic architecture, isometric tilemaps, 2D physics, particles, and UI toolkit." },
        { name: "C# Scripting for Games", level: 85, descId: "OOP, ScriptableObjects untuk modular data item/musuh, State Machines untuk AI musuh.", descEn: "OOP, ScriptableObjects for modular item/enemy data, and State Machines for enemy AI." },
        { name: "Game AI & Pathfinding", level: 80, descId: "Implementasi A* Pathfinding, FOV cone detection, dan patrol behavior state trees.", descEn: "A* Pathfinding implementation, FOV cone detection, and patrol state trees." },
        { name: "Game Audio & SFX Integration", level: 80, descId: "Implementasi ambient soundscape, audio mixer, trigger peristiwa suara dinamis.", descEn: "Dynamic audio mixers, event-triggered sound effects, and atmospheric soundscapes." }
      ]
    },
    artPipeline: {
      categoryTitleId: "Art & Asset Creation Pipeline",
      categoryTitleEn: "Art & Content Creation Pipeline",
      items: [
        { name: "Pixel Art & Sprite Animation (Aseprite)", level: 85, descId: "Pembuatan karakter sprite, tile sheet environment, dan animasi frame-by-frame.", descEn: "Character sprite sheets, environment tilesets, and frame-by-frame animation." },
        { name: "2D Game Art & Illustration", level: 85, descId: "Desain konsep visual, splash art, icon item, dan ornamen bergaya Nusantara.", descEn: "Visual concept art, splash illustrations, item icons, and cultural motifs." },
        { name: "Game UI / UX Wireframing", level: 90, descId: "Perancangan tata letak antarmuka HUD, menu inventory, dan visual feedback yang jelas.", descEn: "HUD layouts, inventory menus, readable typography, and tactile UI feedback." },
        { name: "3D Low-Poly Basics (Blender)", level: 70, descId: "Dasar pemodelan low-poly untuk aset props isometrik dan blocking level.", descEn: "Low-poly modeling basics for isometric props and whiteboxing levels." }
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
    subtitleId: "Bagaimana saya menyusun dokumentasi game yang rapi, mudah dieksekusi tim, dan terstruktur:",
    subtitleEn: "How I formulate clean, modular, and developer-ready Game Design Documents:",
    steps: [
      {
        number: "01",
        titleId: "High Concept & Cultural Hook",
        titleEn: "High Concept & Cultural Hook",
        descId: "Menentukan USP (Unique Selling Proposition), tema budaya yang diangkat, dan pilar emosi utama pemain.",
        descEn: "Defining the USP, cultural narrative anchor, and the core emotional loop for the player."
      },
      {
        number: "02",
        titleId: "Core Loop & Mechanics Breakdown",
        titleEn: "Core Loop & Mechanics Breakdown",
        descId: "Merinci aksi detik-demi-detik pemain, siklus reward, sistem ekonomi in-game, dan relasi antar mekanika.",
        descEn: "Detailing second-to-second actions, reward pacing, economy cycles, and mechanical synergies."
      },
      {
        number: "03",
        titleId: "AI Behavior & Level Spatial Design",
        titleEn: "AI Behavior & Level Spatial Design",
        descId: "Diagram alur logika state machine musuh, layout grid level, titik spawn bahaya, dan pacing kesulitan.",
        descEn: "State machine logic flowcharts, grid level layouts, hazard spawners, and difficulty curves."
      },
      {
        number: "04",
        titleId: "Asset Matrix & Technical Handoff",
        titleEn: "Asset Matrix & Technical Handoff",
        descId: "Daftar spesifikasi aset sprite/audio, naming convention, parameter ScriptableObject untuk programmer.",
        descEn: "Asset breakdown tables, naming conventions, and ScriptableObject parameter specs for coders."
      }
    ]
  },

  aboutStory: {
    quoteId: "“Game adalah kanvas interaktif paling kuat untuk melestarikan dan memperkenalkan kekayaan budaya lokal ke generasi masa kini dan panggung global.”",
    quoteEn: "“Video games are the most powerful interactive canvas to preserve and project rich local heritage onto the modern global stage.”",
    paragraphsId: [
      "Perjalanan saya di dunia game development berakar dari ketertarikan mendalam pada interaktivitas dan penceritaan budaya. Sebagai mahasiswa Game Design, saya melihat bahwa Indonesia memiliki lautan inspirasi yang belum terjamah di ranah game internasional — mulai dari mistisisme mitologi daerah, kehangatan kehidupan gerobak street food, hingga dinamika sosial urban yang penuh warna.",
      "Spesialisasi saya berada pada perpaduan dua pilar penting: **Game Design & Dokumentasi (GDD)** yang presisi dan terstruktur, serta **Implementasi Teknis di Unity Engine**. Saya senang memecah konsep abstrak menjadi mekanika konkret yang terukur, merancang state machine AI, dan mengemasnya dengan visual pixel art atau 2D art yang menawan.",
      "Bagi saya, game yang hebat bukan hanya yang memiliki visual indah, tetapi game yang memiliki 'game feel' renyah, aturan main yang elegan, dan jiwa cerita yang berkesan di benak pemain."
    ],
    paragraphsEn: [
      "My journey in game development stems from a profound fascination with interactive storytelling and cultural worldbuilding. As a Game Design student, I believe Indonesia holds an untapped treasure trove of inspiration — from mystical urban legends and folklore to the energetic warmth of street food carts and vibrant community dynamics.",
      "My core strengths bridge two vital domains: structured **Game Design Documentation (GDD)** with clear systemic balancing, and **Hands-on Unity Engine Implementation**. I love transforming abstract concepts into mathematically sound game loops, designing responsive enemy AI, and crafting complementary 2D/Pixel Art assets.",
      "To me, a great game goes beyond pretty visuals — it thrives on punchy game feel, elegant rule design, and an unforgettable cultural soul that resonates with players worldwide."
    ]
  }
};
