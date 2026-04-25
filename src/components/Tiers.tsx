import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { TIERS, SITE } from "../data/content";

export default function Tiers() {
  return (
    <section id="tiers" className="section relative">
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <div className="eyebrow mb-4">Back the Remake</div>
          <h2 className="heading-display text-4xl md:text-5xl text-white mb-5">
            Pick your{" "}
            <span className="text-tex-orange">case file.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Every tier moves the needle. Every backer gets credited. Pledges
            are processed by Kickstarter — you are only charged if the campaign
            is funded.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TIERS.map((tier, i) => {
            const isCyan = tier.accent === "cyan";
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`card-noir p-7 flex flex-col relative ${
                  tier.popular
                    ? "border-neon-amber/60 shadow-glow scale-[1.02] z-10"
                    : "hover:border-white/20"
                } ${isCyan ? "border-neon-cyan/30 hover:border-neon-cyan/60" : ""} transition-all`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-neon-amber text-noir-950 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                    <Star size={10} fill="currentColor" /> Most Backed
                  </div>
                )}

                <div className="mb-5">
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-2">
                    Tier
                  </div>
                  <h3
                    className={`heading-display text-2xl mb-2 ${
                      isCyan ? "text-neon-cyan text-glow-cyan" : "text-white"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`heading-display text-4xl ${
                        isCyan ? "text-neon-cyan" : "text-neon-amber"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span className="text-xs text-gray-500 uppercase">+ shipping</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2 italic">{tier.tagline}</p>
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {tier.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <Check
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${
                          isCyan ? "text-neon-cyan" : "text-neon-amber"
                        }`}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={SITE.kickstarterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-md font-semibold uppercase tracking-wider text-xs transition ${
                    tier.popular
                      ? "btn-primary"
                      : isCyan
                      ? "border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10"
                      : "border border-white/15 text-white hover:border-neon-amber/50 hover:text-neon-amber"
                  }`}
                >
                  Pledge {tier.price}
                </a>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-500 mt-10 max-w-xl mx-auto">
          All tiers include the digital backer-only newsletter and a credit in
          the game. International shipping calculated at fulfilment. Tier
          contents may evolve based on stretch-goal outcomes.
        </p>
      </div>
    </section>
  );
}
