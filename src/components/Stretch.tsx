import { motion } from "framer-motion";
import { STRETCH_GOALS, ROADMAP } from "../data/content";

export default function Stretch() {
  return (
    <section id="stretch" className="section">
      <div className="container-wide grid lg:grid-cols-2 gap-16">
        {/* Stretch goals */}
        <div>
          <div className="eyebrow mb-4">Stretch Goals</div>
          <h2 className="heading-display text-3xl md:text-4xl text-white mb-8">
            The further we go, <br />
            the deeper Tex digs.
          </h2>

          <ol className="space-y-4">
            {STRETCH_GOALS.map((g, i) => {
              const tone =
                g.state === "base"
                  ? "border-neon-amber/60 bg-neon-amber/5"
                  : g.state === "next"
                  ? "border-neon-amber/30 bg-noir-800/50"
                  : "border-white/10 bg-noir-800/40 opacity-80";
              return (
                <motion.li
                  key={g.amount}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`relative pl-12 pr-5 py-4 rounded-md border ${tone} transition`}
                >
                  <div
                    className={`absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      g.state === "base"
                        ? "bg-neon-amber text-noir-950"
                        : "bg-noir-700 border border-white/20 text-gray-400"
                    }`}
                  >
                    {g.state === "base" ? "✓" : i + 1}
                  </div>
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <span className="heading-display text-white text-base">
                      {g.label}
                    </span>
                    <span
                      className={`font-mono text-sm ${
                        g.state === "base"
                          ? "text-neon-amber"
                          : "text-gray-400"
                      }`}
                    >
                      {g.amount}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{g.body}</p>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* Roadmap */}
        <div>
          <div className="eyebrow mb-4">Roadmap</div>
          <h2 className="heading-display text-3xl md:text-4xl text-white mb-8">
            From Kickstarter <br />to launch day.
          </h2>

          <ol className="relative border-l-2 border-neon-amber/30 pl-8 space-y-8">
            {ROADMAP.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[42px] top-1.5 w-4 h-4 rounded-full bg-noir-950 border-2 border-neon-amber" />
                <div className="font-mono text-xs text-neon-amber/80 uppercase tracking-widest mb-1">
                  {step.date}
                </div>
                <h3 className="heading-display text-xl text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">{step.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
