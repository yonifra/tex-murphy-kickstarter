import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { SITE } from "../data/content";

export default function CtaNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("err");
      return;
    }
    // If a newsletter endpoint is wired in SITE.newsletterEndpoint, POST it.
    if (SITE.newsletterEndpoint) {
      fetch(SITE.newsletterEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }).catch(() => {});
    }
    setStatus("ok");
    setEmail("");
  }

  return (
    <section className="section relative overflow-hidden">
      {/* dramatic backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,181,71,0.18),_transparent_70%)]" />
        <div className="absolute inset-0 bg-scanlines opacity-20" />
      </div>

      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="card-noir p-10 md:p-14 text-center shadow-glow"
        >
          <div className="eyebrow mb-5 justify-center">Don't miss launch day</div>
          <h2 className="heading-display text-3xl md:text-5xl text-white mb-5">
            Be on Chandler Avenue <br />
            <span className="text-tex-orange">when the doors open.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Backers on the list get the launch alert first, plus an early-bird
            $5 discount on the Detective tier. No spam. No fluff. Just case
            updates from the team.
          </p>

          <form
            onSubmit={onSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Mail
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("idle");
                }}
                placeholder="detective@chandlerave.com"
                className="w-full pl-10 pr-4 py-3.5 rounded-md bg-noir-900/80 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-neon-amber/60 focus:ring-2 focus:ring-neon-amber/20 transition"
              />
            </div>
            <button type="submit" className="btn-primary whitespace-nowrap">
              Notify Me <ArrowRight size={16} />
            </button>
          </form>

          {status === "ok" && (
            <p className="mt-4 text-sm text-neon-amber">
              You're on the list. Watch your inbox — Tex will be in touch.
            </p>
          )}
          {status === "err" && (
            <p className="mt-4 text-sm text-neon-red">
              That doesn't look like a valid email, detective.
            </p>
          )}

          <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest font-mono">
            Or jump straight in →{" "}
            <a
              href={SITE.kickstarterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-amber hover:underline"
            >
              Back the Kickstarter
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
