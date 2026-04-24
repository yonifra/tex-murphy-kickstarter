import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { SITE } from "../data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden grain"
    >
      {/* Cinematic backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,181,71,0.15),_transparent_70%)]" />
        {/* skyline silhouette */}
        <svg
          className="absolute bottom-0 inset-x-0 w-full h-[55vh] text-noir-900"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="skyfade" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0a0c14" stopOpacity="0" />
              <stop offset="40%" stopColor="#0a0c14" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#05060a" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect width="1440" height="600" fill="url(#skyfade)" />
          <g fill="#05060a">
            <polygon points="0,600 0,420 80,420 80,360 140,360 140,300 220,300 220,420 280,420 280,260 360,260 360,420 440,420 440,340 520,340 520,420 600,420 600,200 700,200 700,420 800,420 800,300 900,300 900,420 1000,420 1000,260 1080,260 1080,420 1160,420 1160,340 1240,340 1240,420 1320,420 1320,300 1440,300 1440,600" />
          </g>
          {/* lit windows */}
          <g fill="#ffb547" opacity="0.7">
            {[
              [110, 380], [160, 320], [240, 320], [300, 280], [320, 350],
              [400, 290], [460, 360], [560, 230], [640, 250], [720, 320],
              [820, 330], [900, 290], [980, 290], [1100, 290], [1190, 360], [1280, 320]
            ].map(([x, y], i) => (
              <rect key={i} x={x} y={y} width="4" height="6" />
            ))}
          </g>
        </svg>

        {/* Massive moon */}
        <div className="absolute right-[-6%] top-[8%] w-[55vmin] h-[55vmin] max-w-[640px] max-h-[640px] pointer-events-none">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,_#fff3d4,_#ffb547_45%,_#7a3c10_85%,_transparent_100%)] opacity-95" />
          <div className="absolute inset-0 rounded-full shadow-[0_0_140px_40px_rgba(255,160,71,0.35)]" />
          {/* crater shadow giving "killing" mood */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,_transparent_55%,_rgba(120,30,30,0.35)_70%,_transparent_85%)] mix-blend-multiply" />
        </div>

        {/* rain */}
        <div className="absolute inset-0 overflow-hidden opacity-30 [mask-image:linear-gradient(180deg,transparent,#000_30%,#000_70%,transparent)]">
          {Array.from({ length: 60 }).map((_, i) => (
            <span
              key={i}
              className="absolute top-0 w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-rain"
              style={{
                left: `${(i * 1.7) % 100}%`,
                animationDelay: `${(i % 10) * 0.13}s`,
                animationDuration: `${0.8 + (i % 5) * 0.15}s`,
              }}
            />
          ))}
        </div>

        {/* scanlines */}
        <div className="absolute inset-0 bg-scanlines opacity-30 mix-blend-overlay" />
      </div>

      <div className="container-wide relative pt-28 md:pt-0 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="eyebrow mb-5 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-neon-amber" />
            Tex Murphy · 1994 Cult Classic · Reborn in Unreal 5
          </div>

          <h1 className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6">
            Under a{" "}
            <span className="text-neon-amber text-glow-amber animate-flicker inline-block">
              Killing
            </span>{" "}
            Moon.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
            Old San Francisco, December 2042. Rain, neon, and a private eye one
            case away from rock bottom. The legendary cyberpunk noir adventure
            returns — rebuilt from the ground up, faithful to every frame.
          </p>

          <p className="font-mono text-sm text-neon-amber/80 mb-10 tracking-wider">
            <span className="inline-block w-2 h-2 rounded-full bg-neon-red animate-pulse mr-2 align-middle" />
            KICKSTARTER LAUNCHING SOON — JOIN THE BACKERS' LIST BELOW
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={SITE.kickstarterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary animate-pulseGlow"
            >
              Back the Kickstarter <ArrowRight size={16} />
            </a>
            <a href="#trailer" className="btn-ghost">
              <Play size={16} /> Watch the Trailer
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ["1994", "Original Release"],
              ["400K+", "Original Copies Sold"],
              ["UE 5", "Rebuilt From Scratch"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="heading-display text-2xl md:text-3xl text-neon-amber">
                  {n}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-xs font-mono uppercase tracking-widest">
        ↓ Case File Below
      </div>
    </section>
  );
}
