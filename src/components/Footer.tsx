import { SITE } from "../data/content";

const SOCIALS: { label: string; href: string }[] = [
  { label: "Discord", href: SITE.socials.discord },
  { label: "Reddit", href: SITE.socials.reddit },
  { label: "YouTube", href: SITE.socials.youtube },
  { label: "Instagram", href: SITE.socials.instagram },
  { label: "Facebook", href: SITE.socials.facebook },
  { label: "Twitch", href: SITE.socials.twitch },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-10">
      <div className="container-wide grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-neon-amber to-[#7a4a14]">
              <div className="absolute top-0.5 right-0 w-7 h-7 rounded-full bg-noir-950" />
            </div>
            <span className="heading-display text-white">
              Killing Moon <span className="text-neon-amber">// Remake</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 max-w-md">
            An independent passion project re-imagining the 1994 Tex Murphy
            cyberpunk-noir classic in Unreal Engine 5. Made by fans, for fans.
            Not affiliated with the original publisher.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow mb-4">Site</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#story" className="text-gray-400 hover:text-neon-amber">The Story</a></li>
            <li><a href="#features" className="text-gray-400 hover:text-neon-amber">Features</a></li>
            <li><a href="#tiers" className="text-gray-400 hover:text-neon-amber">Back It</a></li>
            <li><a href="#faq" className="text-gray-400 hover:text-neon-amber">FAQ</a></li>
            <li>
              <a href={SITE.officialSite} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-amber">
                Official site ↗
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow mb-4">Community</div>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-amber"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-wide mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-gray-500 font-mono uppercase tracking-widest">
        <div>© 2026 Killing Moon Rising · A fan-driven remake</div>
        <div>
          Tex Murphy and Under a Killing Moon are trademarks of their respective owners.
        </div>
      </div>
    </footer>
  );
}
