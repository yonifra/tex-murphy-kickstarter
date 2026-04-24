export const SITE = {
  kickstarterUrl: "https://www.kickstarter.com/", // TODO: replace with real campaign URL when live
  newsletterEndpoint: "", // optional: POST endpoint for email signup
  socials: {
    facebook: "https://www.facebook.com/share/g/18zsxyVFhm/",
    instagram: "https://www.instagram.com/killingmoonrising/",
    youtube: "https://www.youtube.com/@4dvisual",
    reddit: "https://www.reddit.com/r/UnderAKillingMoon/",
    discord: "https://discord.gg/fjWqTWvNbx",
    twitch: "https://www.twitch.tv/uakm_remake",
  },
  officialSite: "https://www.killingmoonrising.com/",
};

export const FEATURES = [
  {
    title: "Ray-Traced Unreal 5 World",
    body:
      "Old San Francisco rebuilt from the ground up — every wall poster, neon sign and rain-slick alley re-created with cinematic ray-traced lighting.",
    icon: "Sparkles",
  },
  {
    title: "Walk Where You Couldn't Before",
    body:
      "Step inside Rook's Pawnshop. Pull up a stool at Louie's Brew & Stew. Locations once locked behind FMV are now fully explorable 3D environments.",
    icon: "Map",
  },
  {
    title: "Modern Controls, Faithful Soul",
    body:
      "WASD + mouse-look replace the 1994 click-to-move controls. The UI is rebuilt for 2026 — but every menu still feels unmistakably Tex.",
    icon: "Gamepad2",
  },
  {
    title: "HD Full-Motion Video",
    body:
      "All FMV reconstructed from the original 1994 performance tapes and AI-upscaled from 480i to full HD — the original cast as you've never seen them.",
    icon: "Film",
  },
  {
    title: "Remastered Score",
    body:
      "The iconic soundtrack lifted from MIDI into high-fidelity recordings, re-orchestrated for the moody Chandler-Avenue noir it was always meant to be.",
    icon: "Music",
  },
  {
    title: "Enhanced Investigation",
    body:
      "Reworked clue-gathering and dialogue systems that respect the 1994 design philosophy while removing the friction that aged worst.",
    icon: "Search",
  },
];

export const TIERS = [
  {
    name: "The Tip Jar",
    price: "$10",
    tagline: "Buy Tex a drink at Louie's.",
    perks: [
      "Backer-only newsletter",
      "Name in the digital credits",
      "Exclusive Discord backer role",
    ],
    accent: "amber",
    popular: false,
  },
  {
    name: "The Detective",
    price: "$35",
    tagline: "Digital copy + soundtrack on launch day.",
    perks: [
      "Digital download (PC) on release",
      "Remastered HD soundtrack",
      "Digital art-book PDF",
      "All Tip Jar rewards",
    ],
    accent: "amber",
    popular: true,
  },
  {
    name: "The Norm",
    price: "$75",
    tagline: "For the fans who never stopped believing.",
    perks: [
      "Everything in The Detective",
      "Beta access (3 months pre-launch)",
      "Behind-the-scenes documentary",
      "Printable Chandler Avenue poster (digital)",
    ],
    accent: "amber",
    popular: false,
  },
  {
    name: "The Brotherhood",
    price: "$150",
    tagline: "Collector's-grade physical bundle.",
    perks: [
      "Everything in The Norm",
      "Physical CD soundtrack in retro jewel case",
      "Printed Tex Murphy art-book",
      "Numbered enamel pin set",
    ],
    accent: "amber",
    popular: false,
  },
  {
    name: "The Moonchild",
    price: "$500",
    tagline: "Step into the world.",
    perks: [
      "Everything in The Brotherhood",
      "Your name on a poster inside the game",
      "Signed certificate from the team",
      "Private dev Q&A invite",
    ],
    accent: "cyan",
    popular: false,
  },
  {
    name: "The Countess",
    price: "$1,500",
    tagline: "Become a character.",
    perks: [
      "Everything in The Moonchild",
      "Be modeled as a background NPC in-game",
      "Executive Producer credit",
      "1-on-1 video call with the lead developer",
    ],
    accent: "cyan",
    popular: false,
  },
];

export const STRETCH_GOALS = [
  { amount: "$250K", label: "Funded — Core Remake", state: "base" as const, body: "The full Under a Killing Moon experience, rebuilt." },
  { amount: "$400K", label: "Full Voice-Over Remaster", state: "next" as const, body: "Re-recorded VO for every line, with new directing." },
  { amount: "$600K", label: "Steam Deck & Mac Native", state: "future" as const, body: "Optimized native builds beyond Windows." },
  { amount: "$850K", label: "Director's Cut Content", state: "future" as const, body: "Restored cut scenes from the 1994 design docs." },
  { amount: "$1.2M", label: "Tex Murphy II Greenlit", state: "future" as const, body: "The Pandora Directive begins production immediately after launch." },
];

export const ROADMAP = [
  { date: "Q2 2026", title: "Kickstarter Live", body: "Campaign launch + community goals." },
  { date: "Q4 2026", title: "Vertical Slice", body: "Chandler Avenue + Pawnshop case fully playable." },
  { date: "Q3 2027", title: "Closed Beta", body: "Backers at The Norm tier and above get hands-on." },
  { date: "Q2 2028", title: "Launch", body: "Full release on PC. Mac & Steam Deck stretch-goal pending." },
];

export const FAQ = [
  {
    q: "Is this an official Tex Murphy remake?",
    a: "It is an independent passion project led by developer Yuval Dorfman, working with the original 1994 FMV footage and audio in collaboration with the rights holders. Every effort is being made to honor the original creators and the spirit of the series.",
  },
  {
    q: "Do I need to have played the 1994 original?",
    a: "Not at all. The remake is a complete, standalone experience — the perfect entry point for newcomers, and a faithful homecoming for veterans.",
  },
  {
    q: "What platforms will it ship on?",
    a: "Windows PC at launch. Mac and Steam Deck native builds are stretch goals. The game targets Unreal Engine 5 with ray tracing for high-end rigs and scalable settings for older hardware.",
  },
  {
    q: "Is the original cast involved?",
    a: "The remake uses fully reconstructed and AI-upscaled FMV from the original 1994 performances — Chris Jones as Tex, Margot Kidder, Brian Keith, and the rest of the legendary cast. Where new VO is added, it is recorded with great care.",
  },
  {
    q: "When will the game ship?",
    a: "Target launch is 2028. Backers at The Norm tier and above get closed beta access in 2027. We will keep backers in the loop with monthly progress updates.",
  },
  {
    q: "What if the campaign isn't fully funded?",
    a: "Kickstarter is all-or-nothing. If we don't hit goal, you are not charged. We commit to absolute transparency about budget, timelines and risks every step of the way.",
  },
];
