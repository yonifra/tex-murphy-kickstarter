import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { PAGE_COPY } from "../data/content";

export default function Trailer() {
  return (
    <section id="trailer" className="section">
      <div className="container-wide">
        <div className="max-w-2xl mb-12">
          <div className="eyebrow mb-4">{PAGE_COPY.trailer.eyebrow}</div>
          <h2 className="heading-display text-4xl md:text-5xl text-white">
            {PAGE_COPY.trailer.title}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="card-noir overflow-hidden shadow-glow"
        >
          <div className="relative aspect-video bg-noir-900">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/oP5sLixCQH8?rel=0"
              title="Tex Murphy: Under a Killing Moon Remake — Chandler Avenue Teaser"
              allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>

        <p className="mt-6 text-center text-sm text-gray-500 font-mono uppercase tracking-widest">
          <Play size={12} className="inline mb-0.5" /> {PAGE_COPY.trailer.caption}
        </p>
      </div>
    </section>
  );
}
