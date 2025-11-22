// projects.js
// All portfolio projects live here. index.html reads window.projects.

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
      "Redline Engine Sounds is a mobile car engine simulator developed for Android devices. I implemented manual shifting, throttle logic, FMOD-based sound layering, UI flows, and performance optimization for low-end devices. The app also includes a built-in stopwatch so users can race against their own best times.",
    // Ana kartta görünen kapak görseli
    coverImage: "images/redlineengine_1.jpg",
    // Modal içinde galeri
    gallery: [
      {
        type: "image",
        src: "images/redlineengine_1.jpg",
        alt: "Redline Engine Sounds main dashboard"
      },
      {
        type: "image",
        src: "images/redline-engine-sounds-screen-2.jpg",
        alt: "Gear and pedal controls in Redline Engine Sounds"
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
    id: "fire-evacuation-simulation",
    name: "Fire Evacuation Training Simulation",
    role: "Simulation Developer",
    tagline: "Unity • C# • Environment Scanning • Fire Safety",
    date: "",
    types: ["software", "simulation"],
    shortDesc:
      "Custom fire evacuation simulation where the real environment is scanned and recreated. The goal is to trigger the alarm and follow arrows to reach the safe zone.",
    longDesc:
      "This project is a fire evacuation training simulation built for a specific real-world space. The environment is scanned and modeled to create a location-specific experience. In the simulation, the user must locate and trigger the fire alarm, then follow dynamic guidance arrows and route indicators to reach the designated safe zone. The experience is designed to help people learn how to react under emergency conditions, understand escape paths, and practice quick decision-making in a realistic but controlled scenario.",
    coverImage: "images/fire-evac-sim-cover.jpg",
     gallery: [
      {
        type: "image",
        src: "images/redlineengine_1.jpg",
        alt: "Redline Engine Sounds main dashboard"
      },
      {
        type: "youtube",
        src: "https://youtu.be/pptgV_zM5ts",
        alt: "Fire evacuation training simulation demo"
      }
    ],
    links: [
      {
        label: "YouTube Demo",
        url: "https://youtu.be/pptgV_zM5ts"
      }
    ]
  },

  {
    id: "redline-motorcycle-sounds",
    name: "Redline Motorcycle Sounds",
    role: "Unity Developer (Freelance)",
    tagline: "Unity • C# • Motorcycle Exhaust Simulation • Android",
    date: "2023-06-01",
    types: ["software", "simulation"],
    shortDesc:
      "Mobile simulator featuring realistic motorcycle exhaust and engine sounds.",
    longDesc:
      "Redline Motorcycle Sounds is a focused engine sound simulator for motorcycle enthusiasts. I worked on the sound system, throttle response, looping, and performance optimization so the app runs smoothly across a wide range of Android devices.",
    coverImage: "images/redline-motorcycle-cover.jpg",
    gallery: [
      {
        type: "image",
        src: "images/redline-motorcycle-cover.jpg",
        alt: "Redline Motorcycle Sounds main screen"
      },
      {
        type: "youtube",
        src: "https://www.youtube.com/watch?v=Tp5mlPiPLVs",
        alt: "Motorcycle sound demo"
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
    tagline: "Unity • C# • Drag Racing Physics • Android",
    date: "2022-11-15",
    types: ["software", "simulation"],
    shortDesc:
      "Drag racing simulator with manual shifting, reaction time and acceleration behavior.",
    longDesc:
      "Redline Drag Racing is a drag racing game where I implemented manual gear shifting, start-light timing, and car acceleration behavior. I handled core gameplay logic, UI flows and tuning of the driving feel.",
    coverImage: "images/redline-drag-cover.jpg",
    gallery: [
      {
        type: "image",
        src: "images/redline-drag-cover.jpg",
        alt: "Redline Drag Racing main menu"
      },
      {
        type: "youtube",
        src: "https://www.youtube.com/watch?v=Tp5mlPiPLVs",
        alt: "Redline Drag Racing gameplay"
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
    tagline: "Unity • C# • Mobile Racing • Android",
    date: "2022-03-20",
    types: ["software"],
    shortDesc:
      "High-speed drag racing experience optimized for mobile devices.",
    longDesc:
      "Hyper Fast Drag is a fast-paced drag racing game focused on quick sessions and responsive controls. I worked on car setup, progression flow and gameplay implementation, keeping performance stable on lower-end devices.",
    coverImage: "images/hyper-fast-drag-cover.jpg",
    gallery: [
      {
        type: "image",
        src: "images/hyper-fast-drag-cover.jpg",
        alt: "Hyper Fast Drag cover screen"
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
      "Casual mobile game featuring a fire-breathing dragon and arcade-style gameplay.",
    longDesc:
      "Dragon Faya is an iOS casual game built with Unity. I contributed to gameplay systems, effects and general polish, focusing on keeping controls simple and satisfying for short play sessions.",
    coverImage: "images/dragon-faya-cover.jpg",
    gallery: [
      {
        type: "image",
        src: "images/dragon-faya-cover.jpg",
        alt: "Dragon Faya cover art"
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
    tagline: "Unity • C# • 2D Mobile Game • iOS",
    date: "2022-07-20",
    types: ["software", "design"],
    shortDesc:
      "Humorous mobile game about driving a Turkish dolmuş and managing passengers.",
    longDesc:
      "Dolmuşçu Dayı is a 2D mobile game where players control a Turkish minibus driver. I worked on core gameplay, UI and moment-to-moment interactions, focusing on a light, humorous experience suited to mobile sessions.",
    coverImage: "images/dolmuscu-dayi-cover.jpg",
    gallery: [
      {
        type: "image",
        src: "images/dolmuscu-dayi-cover.jpg",
        alt: "Dolmuşçu Dayı cover art"
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
