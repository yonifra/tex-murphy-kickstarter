import { motion } from "framer-motion";

const DETECTIVE_IMG = "/tex_murphy.png";

export default function Story() {
  return (
    <section id="story" className="section grain">
      <div className="container-narrow grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="eyebrow mb-4">Case File · 12 / 2042</div>
          <h2 className="heading-display text-4xl md:text-5xl text-white mb-6">
            A legendary detective,{" "}
            <span className="text-tex-orange">reborn.</span>
          </h2>

          <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
            <p>
              Tex Murphy has hit rock bottom. Recently divorced. Out of work.
              Low on cash. Living in a run-down corner of Old San Francisco where
              the neon flickers and the rain never quite lets up.
            </p>
            <p>
              Then the pawnshop across the street gets hit. A mysterious woman
              calling herself Countess Renier walks through the door. And what
              starts as a missing-statuette job spirals into a doomsday
              conspiracy run by a cult who calls themselves the{" "}
              <span className="text-neon-amber font-medium">Brotherhood of Purity</span>.
            </p>
            <p className="text-gray-400">
              Post-WWIII San Francisco is split between Norms and Mutants. The
              old city is a pressure cooker. And Tex is one bad decision away
              from being just another body in the rain.
            </p>
          </div>

          <blockquote className="mt-10 border-l-2 border-neon-amber pl-6 italic text-xl text-gray-200 font-display">
            "It was the kind of night that made you wonder if the moon was
            really watching — or just waiting."
            <footer className="mt-3 text-xs uppercase tracking-widest text-neon-amber/70 not-italic font-body">
              — Tex Murphy
            </footer>
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="card-noir p-1">
            <div className="aspect-[4/5] rounded-lg bg-[radial-gradient(ellipse_at_70%_30%,_rgba(169,179,214,0.18),_transparent_60%)] relative overflow-hidden">
              {/* faint detective silhouette as backdrop watermark */}
              <img
                src={DETECTIVE_IMG}
                alt=""
                aria-hidden
                className="absolute right-[-10%] bottom-0 h-[95%] w-auto object-contain opacity-30 mix-blend-screen pointer-events-none select-none"
                draggable={false}
              />
              {/* file dossier */}
              <div className="absolute inset-0 p-6 font-mono text-[11px] text-tex-orange/90 leading-relaxed">
                <div className="flex justify-between border-b border-tex-orange/30 pb-2 mb-3">
                  <span>CONFIDENTIAL</span>
                  <span>FILE #042</span>
                </div>
                <div className="space-y-1">
                  <div>SUBJECT: __ MURPHY, T.</div>
                  <div>OCCUPATION: P.I.</div>
                  <div>LOCATION: CHANDLER AVE, OLD S.F.</div>
                  <div>STATUS: ACTIVE — CASE OPEN</div>
                  <div className="pt-2">CASE: BROTHERHOOD OF PURITY</div>
                  <div>THREAT-LEVEL: ████████░░ 8/10</div>
                  <div>EVIDENCE: PARTIAL · ASSUMED HOSTILE</div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 border-t border-tex-orange/30 pt-3 text-[10px] opacity-70">
                  // CASEFILE LOADED · DEC 2042 · NORM/MUTANT CLEARANCE: ALL
                </div>
              </div>
              <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />
              <div className="absolute -inset-1 rounded-lg shadow-glow-orange pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
