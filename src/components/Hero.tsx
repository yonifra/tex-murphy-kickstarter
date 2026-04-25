import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { SITE } from "../data/content";

const TITLE_IMG = "/logo.png";
const DETECTIVE_IMG = "/tex_murphy.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden grain bg-tex-backdrop"
    >
      {/* Cinematic backdrop */}
      <div className="absolute inset-0 -z-10">
        {/* deep red glow at the bottom — matches the warm gradient strip on the poster */}
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-[radial-gradient(ellipse_at_50%_120%,_rgba(255,58,20,0.28),_transparent_70%)]" />
        {/* cool moonlight wash from the right */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_30%,_rgba(169,179,214,0.18),_transparent_60%)]" />

        {/* skyline silhouette */}
        <svg
          className="absolute bottom-0 inset-x-0 w-full h-[40vh] opacity-90"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="skyfade" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#080406" stopOpacity="0" />
              <stop offset="60%" stopColor="#080406" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#080406" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect width="1440" height="600" fill="url(#skyfade)" />
          <g fill="#000">
            <polygon points="0,600 0,420 80,420 80,360 140,360 140,300 220,300 220,420 280,420 280,260 360,260 360,420 440,420 440,340 520,340 520,420 600,420 600,200 700,200 700,420 800,420 800,300 900,300 900,420 1000,420 1000,260 1080,260 1080,420 1160,420 1160,340 1240,340 1240,420 1320,420 1320,300 1440,300 1440,600" />
          </g>
          <g fill="#ff8a3a" opacity="0.55">
            {[
              [110, 380], [160, 320], [240, 320], [300, 280], [320, 350],
              [400, 290], [460, 360], [560, 230], [640, 250], [720, 320],
              [820, 330], [900, 290], [980, 290], [1100, 290], [1190, 360], [1280, 320]
            ].map(([x, y], i) => (
              <rect key={i} x={x} y={y} width="4" height="6" />
            ))}
          </g>
        </svg>

        {/* Big moon glow disk behind the detective — pure CSS, no extra art needed */}
        <div className="absolute right-[-8%] top-[6%] w-[60vmin] h-[60vmin] max-w-[680px] max-h-[680px] pointer-events-none">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_38%_35%,_#e8ecf8_0%,_#a9b3d6_40%,_#5a6388_70%,_transparent_100%)] opacity-95" />
          <div className="absolute inset-0 rounded-full shadow-[0_0_140px_30px_rgba(169,179,214,0.35)]" />
          {/* faint craters */}
          <div className="absolute inset-0 rounded-full opacity-40 bg-[radial-gradient(circle_at_30%_30%,_transparent_55%,_rgba(60,70,110,0.45)_70%,_transparent_85%)] mix-blend-multiply" />
        </div>

        {/* rain */}
        <div className="absolute inset-0 overflow-hidden opacity-25 [mask-image:linear-gradient(180deg,transparent,#000_30%,#000_70%,transparent)]">
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

      <div className="container-wide relative pt-28 md:pt-24 pb-16 grid lg:grid-cols-12 gap-8 items-center">
        {/* Left: title + copy + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 relative z-10"
        >
          <div className="eyebrow mb-5 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-tex-orange" />
            Tex Murphy · 1994 Cult Classic · Reborn in Unreal 5
          </div>

          {/* Title — uses the official-style logo PNG */}
          <img
            src={TITLE_IMG}
            alt="Under a Killing Moon"
            className="w-full max-w-xl md:max-w-2xl mb-8 select-none"
            draggable={false}
            style={{
              filter:
                "drop-shadow(0 0 24px rgba(255,255,255,0.12)) drop-shadow(0 6px 0 rgba(0,0,0,0.35))",
            }}
          />

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
            Old San Francisco, December 2042. Rain, neon, and a private eye one
            case away from rock bottom. The legendary cyberpunk noir adventure
            returns — rebuilt from the ground up, faithful to every frame.
          </p>

          <p className="font-mono text-sm text-tex-orange/90 mb-10 tracking-wider">
            <span className="inline-block w-2 h-2 rounded-full bg-tex-orange animate-pulse mr-2 align-middle" />
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
                <div className="heading-display text-2xl md:text-3xl text-tex-orange">
                  {n}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Detective in front of the moon glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 relative h-[460px] sm:h-[600px] lg:h-[720px] order-first lg:order-last"
        >
          <div className="absolute inset-0 flex items-end justify-center">
            <img
              src={DETECTIVE_IMG}
              alt="Tex Murphy — silhouette in fedora and trench coat"
              className="h-full w-auto max-w-none object-contain select-none"
              draggable={false}
              style={{
                filter:
                  "drop-shadow(0 0 40px rgba(255,58,20,0.45)) drop-shadow(0 30px 50px rgba(0,0,0,0.6))",
              }}
            />
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
