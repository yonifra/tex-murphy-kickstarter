import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "../data/content";

const LINKS = [
  { href: "#story", label: "Story" },
  { href: "#features", label: "Features" },
  { href: "#tiers", label: "Back It" },
  { href: "#stretch", label: "Stretch Goals" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-noir-950/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-neon-amber to-[#7a4a14] shadow-glow">
            <div className="absolute top-0.5 right-0 w-7 h-7 rounded-full bg-noir-950" />
          </div>
          <span className="heading-display text-sm md:text-base text-white">
            Killing Moon<span className="text-neon-amber"> //</span> Remake
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-gray-300 hover:text-neon-amber transition-colors uppercase tracking-wider"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href={SITE.kickstarterUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2.5 !text-xs">
            Back on Kickstarter
          </a>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-noir-950/95 backdrop-blur">
          <ul className="container-wide py-4 flex flex-col gap-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-gray-200 hover:text-neon-amber"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={SITE.kickstarterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full mt-2"
              >
                Back on Kickstarter
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
