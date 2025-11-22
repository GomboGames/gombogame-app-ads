// projects.js
// All portfolio projects used by index.html

window.projects = [
  {
    id: "redline-engine-sounds",
    name: "Redline Engine Sounds",
    role: "Unity Developer (Freelance)",
    tagline: "Unity • C# • FMOD • Android",
    date: "2023-09-10",
    types: ["software", "simulation"],
    shortDesc:
      "Android engine sound simulator that recreates classic and supercar exhaust audio with manual gear and real-time chrono.",
    longDesc:
      "Redline Engine Sounds is a mobile car engine simulator developed for Android devices. The game lets players experience realistic engine and exhaust sounds from both classic and high-performance cars. I implemented manual shifting, throttle and brake logic, UI flows, and performance optimizations for low-end devices. A built-in stopwatch lets users race against their own times and compare results with friends.",
    coverImage: "images/redline-engine-sounds-cover.jpg",
    gallery: [
      {
        type: "image",
        src: "images/redline-engine-sounds-screen-1.jpg",
        alt: "Redline Engine Sounds main dashboard"
      },
      {
        type: "image",
        src: "images/redline-engine-sounds-screen-2.jpg",
        alt: "Manual gear and pedal controls in Redline Engine Sounds"
      },
      {
        type: "youtube",
        src: "https://www.youtube.com/watch?v=Tp5mlPiPLVs",
        alt: "Redline Engine Sounds gameplay demo"
      }
    ],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.Okkagames.RedlineEngineSounds&hl=en"
      },
      {
        label: "YouTube Demo",
        url: "https://www.youtube.com/watch?v=Tp5mlPiPLVs"
      }
    ]
  },

  {
    id: "redline-motorcycle-sounds",
    name: "Redline Motorcycle Sounds",
    role: "Unity Developer (Freelance)",
    tagline: "Unity • C# • Audio Design • Android",
    date: "2022-11-05",
    types: ["software", "simulation"],
    shortDesc:
      "Motorcycle engine sound simulator focusing on authentic exhaust, rev and throttle behaviour.",
    longDesc:
      "Redline Motorcycle Sounds is a mobile simulator that focuses on realistic motorcycle exhaust and engine audio. I worked on integrating multi-layered sound assets, throttle response logic and smooth UI transitions. The app is optimized for a wide range of Android devices and targets players who enjoy engine sound experiences.",
    coverImage: "images/redline-moto-cover.jpg",
    gallery: [
      {
        type: "image",
        src: "images/redline-moto-screen-1.jpg",
        alt: "Redline Motorcycle Sounds main UI"
      }
    ],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.Okka.RedlineMotorcycleSounds&hl=en"
      }
    ]
  },

  {
    id: "redline-drag-racing",
    name: "Redline Drag Racing",
    role: "Unity Developer (Freelance)",
    tagline: "Unity • C# • 2D Physics • Android",
    date: "2021-06-20",
    types: ["software", "simulation"],
    shortDesc:
      "Drag racing simulator designed around manual shifting, timing and acceleration behaviour.",
    longDesc:
      "Redline Drag Racing is a drag racing simulator focused on manual shifting and reaction timing. I implemented core race logic, gear-change windows, UI feedback and basic car physics. The game is designed to be lightweight and responsive on Android devices.",
    coverImage: "images/redline-drag-cover.jpg",
    gallery: [
      {
        type: "image",
        src: "images/redline-drag-screen-1.jpg",
        alt: "Redline Drag Racing gameplay screen"
      }
    ],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.okkagames.redlinedragracing&hl=en"
      }
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
      "Fast-paced drag racing experience optimized for mobile devices.",
    longDesc:
      "Hyper Fast Drag is a stylized drag racing game that focuses on quick sessions and responsive controls. I worked on gameplay flow, input handling, simple tuning options and performance optimization to keep the experience smooth on low-end phones.",
    coverImage: "images/hyper-fast-drag-cover.jpg",
    gallery: [
      {
        type: "image",
        src: "images/hyper-fast-drag-screen-1.jpg",
        alt: "Hyper Fast Drag race start screen"
      }
    ],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.okkagames.HyperFastDrag&hl=en"
      }
    ]
  },

  {
    id: "dragon-faya",
    name: "Dragon Faya",
    role: "Unity Developer",
    tagline: "Unity • Mobile Game • iOS",
    date: "2021-10-01",
    types: ["software", "design"],
    shortDesc:
      "Casual mobile game featuring a stylized dragon, simple controls and arcade-style gameplay.",
    longDesc:
      "Dragon Faya is a casual mobile title released on iOS. I contributed to gameplay logic, simple VFX and UI polish. The game focuses on quick arcade-style sessions and easy-to-learn mechanics.",
    coverImage: "images/dragon-faya-cover.jpg",
    gallery: [
      {
        type: "image",
        src: "images/dragon-faya-screen-1.jpg",
        alt: "Dragon Faya gameplay screenshot"
      }
    ],
    links: [
      {
        label: "App Store",
        url: "https://appadvice.com/app/dragon-faya/1597632362"
      }
    ]
  },

  {
    id: "dolmuscu-dayi",
    name: "Dolmuşçu Dayı",
    role: "Unity Developer",
    tagline: "Unity • C# • Mobile Game • iOS",
    date: "2022-07-20",
    types: ["software", "design"],
    shortDesc:
      "Humorous mobile game inspired by Turkish dolmuş culture with stylized visuals.",
    longDesc:
      "Dolmuşçu Dayı is a casual game released on iOS, inspired by Turkish dolmuş culture. I worked on core mechanics, UI flows and basic level structure. The project mixes fun interactions with a local theme and stylized art direction.",
    coverImage: "images/dolmuscu-dayi-cover.jpg",
    gallery: [
      {
        type: "image",
        src: "images/dolmuscu-dayi-screen-1.jpg",
        alt: "Dolmuşçu Dayı main menu screen"
      }
    ],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/dolmu%C5%9F%C3%A7u-day%C4%B1/id1636141841"
      }
    ]
  }
];
