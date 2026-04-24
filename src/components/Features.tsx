import { motion } from "framer-motion";
import {
  Sparkles,
  Map,
  Gamepad2,
  Film,
  Music,
  Search,
  type LucideIcon,
} from "lucide-react";
import { FEATURES } from "../data/content";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Map,
  Gamepad2,
  Film,
  Music,
  Search,
};

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-4">What's New</div>
          <h2 className="heading-display text-4xl md:text-5xl text-white mb-5">
            A faithful remake. <br />
            <span className="text-neon-amber text-glow-amber">Not a reskin.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Every system rebuilt for 2026 — every detail still answers to 1994.
            This is what 30 years of love letters to a cult classic looks like.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon] ?? Sparkles;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-noir p-6 group hover:border-neon-amber/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-md bg-neon-amber/10 border border-neon-amber/30 flex items-center justify-center mb-5 group-hover:bg-neon-amber/20 transition">
                  <Icon size={20} className="text-neon-amber" />
                </div>
                <h3 className="heading-display text-lg text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
