// projects.js
// All portfolio projects used by index.html

window.projects = [
  {
    id: "redline-engine-sounds",
    name: "Redline Engine Sounds",
    role: "Unity Developer (Freelance)",
    tagline: "Unity • C# • FMOD • Sound Engineering • Android",
    date: "2023-09-10",
    types: ["software", "simulation"],
    shortDesc:
      "Android engine sound simulator that recreates classic and supercar exhaust audio with manual gear and real-time chrono.",
    longDesc:
      "Redline Engine Sounds is a mobile car engine simulator developed for Android devices. I implemented manual shifting, throttle logic, FMOD-based sound layering, UI flows, and heavy performance optimization for low-end devices. Includes a built-in stopwatch for racing time trials.",
    coverImage: "images/redline-engine-sounds-cover.jpg",
    gallery: [
      { type: "image", src: "images/redlineengine_1.png", alt: "Main dashboard" },
      { type: "image", src: "images/redline-engine-sounds-screen-2.jpg", alt: "Gear & pedal controls" },
      { type: "youtube", src: "https://www.youtube.com/watch?v=Tp5mlPiPLVs", alt: "Gameplay demo" }
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.Okkagames.RedlineEngineSounds&hl=en" },
      { label: "YouTube Demo", url: "https://www.youtube.com/watch?v=Tp5mlPiPLVs" }
    ]
  },

  {
    id: "redline-motorcycle-sounds",
    name: "Redline Motorcycle Sounds",
    role: "Unity Developer (Freelance)",
    tagline: "Unity • C# • FMOD • Audio Engineering • Android",
    date: "2022-11-05",
    types: ["software", "simulation"],
    shortDesc:
      "Motorcycle engine sound simulator focusing on authentic exhaust, rev and throttle behaviour.",
    longDesc:
      "Redline Motorcycle Sounds focuses on realistic motorcycle exhaust modeling. I worked on multi-layered FMOD sound design, acceleration curve logic, smooth throttle interpolation, and UI transitions.",
    coverImage: "images/redline-moto-cover.jpg",
    gallery: [
      { type: "image", src: "images/redline-moto-screen-1.jpg", alt: "Motorcycle UI" }
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.Okka.RedlineMotorcycleSounds&hl=en" }
    ]
  },

  {
    id: "redline-drag-racing",
    name: "Redline Drag Racing",
    role: "Unity Developer (Freelance)",
    tagline: "Unity • C# • 2D Physics • Timing System",
    date: "2021-06-20",
    types: ["software", "simulation"],
    shortDesc:
      "Drag racing simulator designed around manual shifting, timing and acceleration behaviour.",
    longDesc:
      "Implemented reaction timing system, shifting window mechanics, acceleration curves, and lightweight physics to keep the game responsive even on very low-end phones.",
    coverImage: "images/redline-drag-cover.jpg",
    gallery: [
      { type: "image", src: "images/redline-drag-screen-1.jpg", alt: "Drag Racing UI" }
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.okkagames.redlinedragracing&hl=en" }
    ]
  },

  {
    id: "hyper-fast-drag",
    name: "Hyper Fast Drag",
    role: "Unity Developer (Freelance)",
    tagline: "Unity • C# • Mobile Optimization",
    date: "2020-12-15",
    types: ["software"],
    shortDesc:
      "High-speed drag racing experience optimized for mobile devices.",
    longDesc:
      "Hyper Fast Drag is a stylized drag racing game that focuses on fast sessions, simple mechanics, and smooth user experience.",
    coverImage: "images/hyper-fast-drag-cover.jpg",
    gallery: [
      { type: "image", src: "images/hyper-fast-drag-screen-1.jpg", alt: "Hyper Fast Drag" }
    ],
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.okkagames.HyperFastDrag&hl=en" }
    ]
  },

  {
    id: "dragon-faya",
    name: "Dragon Faya",
    role: "Unity Developer",
    tagline: "Unity • C# • 2D Game Design • iOS",
    date: "2021-10-01",
    types: ["software", "design"],
    shortDesc:
      "Casual mobile game featuring an arcade-style dragon flight system.",
    longDesc:
      "Contributed to gameplay logic, VFX, polishing UI and optimizing animation cycles.",
    coverImage: "images/dragon-faya-cover.jpg",
    gallery: [
      { type: "image", src: "images/dragon-faya-screen-1.jpg", alt: "Dragon Faya gameplay" }
    ],
    links: [
      { label: "App Store", url: "https://appadvice.com/app/dragon-faya/1597632362" }
    ]
  },

  {
    id: "dolmuscu-dayi",
    name: "Dolmuşçu Dayı",
    role: "Unity Developer",
    tagline: "Unity • C# • 2D Art • iOS • Mobile",
    date: "2022-07-20",
    types: ["software", "design"],
    shortDesc:
      "Humorous mobile game inspired by Turkish dolmuş culture with stylized visuals.",
    longDesc:
      "Developed core mechanics, UI flows, level logic and animation cycles using Unity 2D.",
    coverImage: "images/dolmuscu-dayi-cover.jpg",
    gallery: [
      { type: "image", src: "images/dolmuscu-dayi-screen-1.jpg", alt: "Dolmuşçu Dayı screenshot" }
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/dolmu%C5%9F%C3%A7u-day%C4%B1/id1636141841" }
    ]
  }
];
