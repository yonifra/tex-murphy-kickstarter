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

export const PAGE_COPY = {
  hero: {
    eyebrow: "Tex Murphy · 1994 Cult Classic · Rebuilt in Unreal Engine 5",
    body:
      "Old San Francisco is open again: rain-lashed streets, upgraded FMVs, modern controls, new playable spaces, and the same detective noir soul that made Under a Killing Moon a cult classic.",
    status: "KICKSTARTER LAUNCHING SOON — FOLLOW NOW FOR THE ACT 1 BACKER DROP",
    primaryCta: "Back the Kickstarter",
    secondaryCta: "Watch the Proof",
    stats: [
      ["1994", "Cult Classic"],
      ["Act 1", "Backer Build"],
      ["UE5", "Playable Remake"],
    ],
  },
  trailer: {
    eyebrow: "Campaign Video",
    title: "First, see Chandler Avenue in motion.",
    caption: "Real-time UE5 capture · Kickstarter proof-of-concept footage",
  },
  showcase: {
    eyebrow: "Proof of Work",
    title: "Not concept art. The remake is already playable.",
    body:
      "Successful Kickstarter pages prove the product fast. These examples show the exact pitch: the same 1994 scenes, rebuilt as explorable Unreal 5 spaces with modern atmosphere, UI, controls, and new gameplay touches.",
    proofEyebrow: "Kickstarter proof points",
    backCta: "Back the Kickstarter",
    beforeAfterEyebrow: "Before / After",
    comparisonTitle: "1994 frame vs. Unreal 5 scene",
    comparisonBody:
      "The goal is not to erase the original. It is to preserve the layout, mood, props, and weird Tex Murphy texture while finally letting players move through it as a modern 3D adventure.",
    remakeLabel: "Unreal 5 remake",
    originalLabel: "1994 original",
    sameSceneLabel: "Same scene · rebuilt",
    footageEyebrow: "Build Footage",
    videoTitle: "Feature footage from the current build",
    videoBody:
      "Short muted loops keep the page fast while showing the campaign's strongest visual arguments.",
    filtersEyebrow: "Player Choice",
    filterTitle: "Optional visual filters",
    filterBody:
      "Play it clean, like a 1950s detective film, or with the blood-red Tex Murphy sky intact.",
  },
  features: {
    eyebrow: "What's New",
    title: "A faithful remake. Not a reskin.",
    body:
      "Every upgrade is designed to answer one backer question: why fund this now? Because the remake keeps what fans love and removes the friction that keeps new players away.",
  },
  tiers: {
    eyebrow: "Back the Remake",
    title: "Pick your pledge tier.",
    body:
      "Clear rewards, visible proof, and a realistic scope. Kickstarter only charges you if the campaign reaches its goal.",
    note:
      "Digital rewards have no shipping. Physical rewards and high-touch cameo rewards will include final fulfillment details on the live Kickstarter page. Two premium collector tiers are intentionally held back until their deliverables are priced responsibly.",
  },
  stretch: {
    eyebrow: "Stretch Goals",
    title: "Funding changes the speed and reach of the remake.",
    roadmapEyebrow: "Roadmap",
    roadmapTitle: "From campaign close to full release.",
  },
  faq: {
    eyebrow: "Frequently Asked",
    title: "The honest answers.",
  },
  newsletter: {
    eyebrow: "Don't miss launch day",
    title: "Be on Chandler Avenue when the doors open.",
    body:
      "Join the launch list for the Kickstarter alert, backer-only development updates, and the Act 1 reward timing as soon as the campaign goes live.",
    button: "Notify Me",
    success: "You're on the list. Watch your inbox — Tex will be in touch.",
    error: "That doesn't look like a valid email, detective.",
    secondaryCta: "Back the Kickstarter",
  },
};

export const FEATURES = [
  {
    title: "Cutting-Edge UE5 3D",
    body:
      "Chandler Avenue is being rebuilt from the ground up in Unreal Engine 5, faithful down to wall posters, signage, alley geometry, and the original noir staging.",
    icon: "Sparkles",
  },
  {
    title: "Walk Where FMV Once Stopped",
    body:
      "Step inside Rook's Pawnshop. Pull up a stool at Louie's Brew & Stew. Locations once locked behind FMV are now fully explorable 3D environments.",
    icon: "Map",
  },
  {
    title: "One Connected Chandler Avenue",
    body:
      "The remake turns Chandler Avenue into one interconnected space with no loading screens interrupting the investigation.",
    icon: "DoorOpen",
  },
  {
    title: "Modern Controls and UI",
    body:
      "WASD movement, mouse look, and a transformed interface make the game readable in 2026 while preserving the visual language of Under a Killing Moon.",
    icon: "Gamepad2",
  },
  {
    title: "HD and 2K FMV Reconstruction",
    body:
      "Full-motion video is being reconstructed from digitized 1994 performance tapes and upscaled from 480i toward full HD and 2K presentation.",
    icon: "Film",
  },
  {
    title: "Weather, Sound, and Atmosphere",
    body:
      "Rain, lightning, fog, dynamic skies, glass droplets, remastered music, and upgraded ambient sound turn the city into a mood machine.",
    icon: "CloudRain",
  },
  {
    title: "New Content and VO",
    body:
      "New minigames, a flashlight, new pickups, reshoots for lost FMV, and new voice lines expand areas that were never playable before.",
    icon: "Mic2",
  },
];

export const SHOWCASE = {
  proofPoints: [
    "Playable Act 1 reward planned immediately after the campaign ends.",
    "Direct 1994-to-remake comparisons show scope without hand-waving.",
    "Visual upgrades are tied to concrete gameplay improvements, not screenshots alone.",
  ],
  comparisons: [
    {
      title: "Chandler Avenue Rebuilt",
      body: "The same scene language, now staged as a modern, explorable UE5 environment.",
      remake: "/showcase/cutting-edge-3d/remake-1.jpg",
      original: "/showcase/cutting-edge-3d/original-1.jpg",
      remakeAlt: "Unreal Engine 5 remake scene from Under a Killing Moon",
      originalAlt: "Original 1994 Under a Killing Moon scene used for comparison",
    },
    {
      title: "Original Composition, Modern Depth",
      body: "Lighting, geometry, materials, and atmosphere are rebuilt while respecting the source framing.",
      remake: "/showcase/cutting-edge-3d/remake-3.jpg",
      original: "/showcase/cutting-edge-3d/original-3.jpg",
      remakeAlt: "Modern remake scene with upgraded geometry and lighting",
      originalAlt: "Original 1994 scene showing the same composition",
    },
    {
      title: "From Static Backdrop to Place",
      body: "The remake turns nostalgic images into navigable spaces with texture, scale, and movement.",
      remake: "/showcase/cutting-edge-3d/remake-5.jpg",
      original: "/showcase/cutting-edge-3d/original-5.jpg",
      remakeAlt: "Remake environment showing upgraded 3D detail",
      originalAlt: "Original 1994 game scene for remake comparison",
    },
  ],
  videos: [
    {
      title: "Fog, Rain, and Volumetrics",
      body: "Weather effects add ambient pressure to every step through Chandler Avenue.",
      src: "/showcase/video/weather-volumetrics.mp4",
      label: "Atmosphere",
    },
    {
      title: "Modern UI",
      body: "The interface is rebuilt for current players while staying recognizably Tex.",
      src: "/showcase/video/modern-ui.mp4",
      label: "Interface",
    },
    {
      title: "No Loading Screens",
      body: "The street becomes one connected investigation space instead of disconnected scenes.",
      src: "/showcase/video/no-loading-screens.mp4",
      label: "Exploration",
    },
    {
      title: "New Minigames",
      body: "Optional interactions like alley basketball make the remake feel lived-in, not museum-preserved.",
      src: "/showcase/video/basketball-minigame.mp4",
      label: "New Content",
    },
  ],
  filters: [
    {
      title: "Regular",
      src: "/showcase/filters/regular.jpg",
      alt: "Regular color presentation filter for the remake",
    },
    {
      title: "Noir",
      src: "/showcase/filters/noir.jpg",
      alt: "Black and white noir visual filter for the remake",
    },
    {
      title: "Red Noir",
      src: "/showcase/filters/red-noir.jpg",
      alt: "Noir visual filter with Tex Murphy red skies",
    },
  ],
};

export const CAMPAIGN_PAGE = {
  hero: {
    kicker: "Tex Murphy: Under a Killing Moon Remake",
    headline: "Help bring the 1994 cyberpunk noir classic back as a modern 3D adventure.",
    intro:
      "Under a Killing Moon is being rebuilt from the ground up in Unreal Engine 5: the same Chandler Avenue, the same detective soul, the same cult-classic weirdness, now with explorable environments, modern controls, upgraded FMVs, new interactions, and atmospheric effects that finally make Old San Francisco feel alive.",
    note:
      "This is Kickstarter campaign-page content: proof first, clear scope, concrete rewards, realistic funding goals, and honest risks.",
    meta: "Video Games · Old San Francisco · Unreal Engine 5",
    creator: "Created by Yuval Dorfman / 4D Visual",
    stats: [
      { value: "$65K", label: "base funding goal" },
      { value: "Act 1", label: "planned early backer build" },
      { value: "2-3 years", label: "core full-game target" },
    ],
  },
  storyLinks: [
    "Intro",
    "Why this remake",
    "1994 vs remake",
    "Feature footage",
    "Remake features",
    "Visual filters",
    "Rewards",
    "Stretch goals",
    "Roadmap",
    "Use of funds",
    "Shipping",
    "Team",
    "Risks",
    "FAQ",
  ],
  sections: {
    video: {
      eyebrow: "Campaign Video",
      title: "Start here: Chandler Avenue in motion",
      body:
        "A Kickstarter game page has to prove the project quickly. The footage below shows the current UE5 direction and the visual target for the remake.",
    },
    why: {
      eyebrow: "Why This Remake",
      title: "The original was ahead of its time. The interface was not.",
      paragraphs: [
        "Under a Killing Moon blended full-motion video, comedy, sci-fi noir, detective work, and strange post-war San Francisco atmosphere in a way few adventure games ever attempted. It built a world people still remember decades later.",
        "But returning to the original today is difficult for many players. The controls are dated, navigation is fragmented, video quality is limited by 1994 capture technology, and some places that felt real were only visible through FMV sequences.",
        "The remake keeps the story, tone, characters, and spatial identity intact while rebuilding the experience as a modern 3D adventure that new players can actually pick up and play.",
      ],
    },
    proof: {
      eyebrow: "Proof Of Work",
      title: "The remake is already past the idea stage",
      body:
        "The images below compare original 1994 scenes with the remake versions. The goal is not to reinterpret the game into something unrecognizable. The goal is to preserve the composition, props, locations, mood, and humor while giving players a fully navigable version of the world they imagined in 1994.",
    },
    featureFootage: {
      eyebrow: "Feature Footage",
      title: "What backer funding helps finish",
      body:
        "These short clips show concrete remake pillars: volumetric atmosphere, a modernized interface, a connected Chandler Avenue without loading screens, and new optional interactions that make the world feel lived in.",
    },
    features: {
      eyebrow: "Remake Features",
      title: "What is being rebuilt",
    },
    filters: {
      eyebrow: "Visual Filters",
      title: "Play it clean, noir, or red-noir",
      body:
        "Optional filters let players choose the tone: standard color, black-and-white detective film, or a noir mode that keeps the blood-red Tex Murphy sky.",
    },
    rewards: {
      eyebrow: "Rewards",
      title: "Backer tiers",
      body:
        "The reward structure starts low, gives early supporters something playable, and saves expensive fulfillment promises for tiers that can justify them.",
    },
    stretch: {
      eyebrow: "Funding Goals",
      title: "What additional funding changes",
      body:
        "The base goal gets the full game made, but higher funding changes production speed and platform reach. The more support the campaign earns, the more development can move from solo passion project to properly staffed production.",
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "Planned development path",
    },
    budget: {
      eyebrow: "Use Of Funds",
      title: "Where the money goes",
      body:
        "At the base goal, funds are treated as production fuel, not founder salary. They help create momentum, unlock additional funding opportunities, and cover the work needed to push the remake toward completion.",
      items: [
        "Unreal Engine 5 environment production and optimization",
        "FMV reconstruction, upscaling, missing-scene planning, and reshoots where needed",
        "Modern UI, controls, interaction, and gameplay systems",
        "Weather, lighting, sound, music, and ambient polish",
        "Physical reward planning and fulfillment for applicable tiers",
        "Additional developers if stretch goals are reached",
      ],
    },
    shipping: {
      eyebrow: "Shipping",
      title: "Physical rewards will be handled conservatively",
      paragraphs: [
        "Digital rewards are the safest and fastest rewards to deliver, which is why the early tiers focus on the Act 1 build, full digital game access, and in-game credit rewards.",
        "The physical big box tier is planned for backers who want the shelf piece, but final shipping costs should be calculated at fulfillment when manufacturing, carrier pricing, taxes, and destination rules are known.",
        "This avoids pretending that international shipping will be simple years before boxes are ready to leave the warehouse.",
      ],
    },
    team: {
      eyebrow: "Team",
      title: "A passion project built around preservation and playable proof",
      paragraphs: [
        "The remake is led by developer Yuval Dorfman, rebuilding the game with Unreal Engine 5 and the original 1994 FMV and audio material where available.",
        "The Kickstarter is intended to turn a playable remake effort into a properly funded production path: more development help, faster implementation, better restoration, and more polish without losing the spirit of Tex Murphy.",
        "The project is connected to the community around Killing Moon Rising and the long-time Tex Murphy fan base that has kept Chandler Avenue alive for decades.",
      ],
    },
    risks: {
      eyebrow: "Risks And Transparency",
      title: "What could affect delivery",
      paragraphs: [
        "This is an ambitious remake of a beloved FMV adventure, and the largest risks are production scope, lost or incomplete archival material, FMV restoration quality, and the amount of developer time available after the campaign.",
        "Some original tapes are lost to time, which means missing material may need careful reshoots. New playable areas also require new voice-over lines and additional testing to make sure the remake feels like Tex Murphy rather than a disconnected add-on.",
        "The campaign is structured around transparent milestones: Act 1 for early backers, a full PC release as the core target, and larger platform goals only if funding makes them realistic.",
      ],
    },
    final: {
      eyebrow: "Final Pitch",
      title: "If you ever wanted to walk into Rook's Pawnshop, this is the moment.",
      body:
        "Backing this project helps turn a cult classic from a memory into a playable modern remake. The target is simple: preserve what made Under a Killing Moon special, rebuild what time left behind, and let a new generation meet Tex Murphy on Chandler Avenue.",
    },
  },
  introImages: [
    {
      src: "/showcase/cutting-edge-3d/remake-1.jpg",
      alt: "Remake view of Chandler Avenue in Unreal Engine 5",
      caption: "Chandler Avenue is being rebuilt as a real 3D space, not just a backdrop.",
    },
    {
      src: "/showcase/cutting-edge-3d/remake-3.jpg",
      alt: "Another Unreal Engine 5 scene from the remake",
      caption: "The remake preserves the recognizable shape and staging of the original scenes.",
    },
  ],
  comparisonLabels: {
    remake: "Remake",
    original: "Original 1994",
  },
  rewardLabels: {
    tier: "Tier",
    pledge: "Pledge",
    includes: "Includes",
    shipping: "Physical shipping applies",
    digital: "Digital reward",
  },
};

export const TIERS = [
  {
    name: "Follower",
    price: "$5",
    tagline: "Follow the case and help prove demand.",
    perks: [
      "No reward tier",
      "Campaign updates",
      "Helps the remake climb Kickstarter visibility",
    ],
    accent: "amber",
    popular: false,
    shipping: false,
  },
  {
    name: "Act One Detective",
    price: "$15",
    tagline: "Play the first act as soon as the campaign ends.",
    perks: [
      "Act 1 build after campaign close",
      "Name in the game credits",
      "Backer-only progress updates",
    ],
    accent: "amber",
    popular: false,
    shipping: false,
  },
  {
    name: "Full Case File",
    price: "$30",
    tagline: "The complete digital game when released.",
    perks: [
      "Full digital PC game at launch",
      "Act 1 backer build",
      "Name in the credits",
      "All Act One Detective rewards",
    ],
    accent: "amber",
    popular: true,
    shipping: false,
  },
  {
    name: "Chandler Graffiti",
    price: "$60",
    tagline: "Leave your name somewhere in the world.",
    perks: [
      "Everything in Full Case File",
      "Your name placed in-game",
      "Graffiti, phonebook, Crime Link, or similar placement",
    ],
    accent: "amber",
    popular: false,
    shipping: false,
  },
  {
    name: "Darkroom Evidence",
    price: "$150",
    tagline: "Put your face into Tex's world.",
    perks: [
      "Everything in Chandler Graffiti",
      "Your photo placed somewhere in-game",
      "Possible locations include Rusty's dark room or warehouse walls",
    ],
    accent: "amber",
    popular: false,
    shipping: false,
  },
  {
    name: "Big Box Collector",
    price: "$300",
    tagline: "A physical big box for the shelf.",
    perks: [
      "Everything in Darkroom Evidence",
      "Physical big box edition when released",
      "Collector-friendly throwback packaging",
    ],
    accent: "amber",
    popular: false,
    shipping: true,
  },
  {
    name: "Mutant Cameo",
    price: "$500",
    tagline: "Become part of Chandler Avenue.",
    perks: [
      "Everything in Big Box Collector",
      "3D scan session for an NPC mutant cameo",
      "Background character placement somewhere in Chandler Avenue",
    ],
    accent: "cyan",
    popular: false,
    shipping: true,
  },
  {
    name: "Executive Producer",
    price: "$1,000",
    tagline: "Top-line support for getting the remake finished faster.",
    perks: [
      "Everything in Mutant Cameo",
      "Executive Producer credit",
      "Private development Q&A with the team",
    ],
    accent: "cyan",
    popular: false,
    shipping: true,
  },
];

export const STRETCH_GOALS = [
  { amount: "$65K", label: "Core Full Game", state: "base" as const, body: "The full remake gets made over roughly 2-3 years, with funds used to attract more funding and accelerate development rather than pay founder salaries." },
  { amount: "$180K", label: "Full-Time Developer", state: "next" as const, body: "A dedicated developer joins full time so the game can be completed much faster." },
  { amount: "$300K", label: "Small Team Production", state: "future" as const, body: "The practical target for doing the remake properly: hire a small team and finish more efficiently." },
  { amount: "$500K", label: "PlayStation 5 and Xbox", state: "future" as const, body: "Console ports are added to the production plan." },
  { amount: "$600K", label: "Pocket Tex", state: "future" as const, body: "A lighter portable version for mobile and tablet devices." },
];

export const ROADMAP = [
  { date: "Launch", title: "Kickstarter Goes Live", body: "Campaign video, playable proof, reward tiers, and development updates begin driving backers to the page." },
  { date: "Campaign Close", title: "Act 1 Backer Build", body: "The $15+ tiers receive Act 1 immediately after the campaign ends." },
  { date: "Year 1", title: "Expanded Production", body: "Core systems, connected Chandler Avenue, HD FMVs, UI, controls, weather, and new playable areas move through production." },
  { date: "Years 2-3", title: "Full Release Target", body: "The full digital PC game ships, with timing accelerated if stretch goals fund additional developers." },
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
    a: "Windows PC is the core launch target. PlayStation 5 and Xbox are stretch goals at $500K, with Pocket Tex for mobile and tablets at $600K.",
  },
  {
    q: "Is the original cast involved?",
    a: "The remake reconstructs and upscales the original digitized 1994 FMV performances where available. New voice-over lines are planned for newly playable areas, and missing FMV material may require careful reshoots.",
  },
  {
    q: "When will the game ship?",
    a: "The core funding plan targets roughly 2-3 years for the full game. Backers at $15 and above are planned to receive Act 1 immediately after the campaign ends.",
  },
  {
    q: "Why are some premium tiers not listed yet?",
    a: "The spec includes $2,500 and $5,000 pledge levels, but their rewards are still being finalized. We would rather hold them back than publish expensive tiers before fulfillment, access, and production commitments are clear.",
  },
  {
    q: "What if the campaign isn't fully funded?",
    a: "Kickstarter is all-or-nothing. If we don't hit goal, you are not charged. We commit to absolute transparency about budget, timelines and risks every step of the way.",
  },
];
