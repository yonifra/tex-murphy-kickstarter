import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { PAGE_COPY, SHOWCASE, SITE } from "../data/content";

export default function Showcase() {
  return (
    <section id="showcase" className="section grain overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4">{PAGE_COPY.showcase.eyebrow}</div>
            <h2 className="heading-display text-4xl md:text-5xl text-white mb-5">
              {PAGE_COPY.showcase.title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
              {PAGE_COPY.showcase.body}
            </p>
          </div>

          <div className="lg:col-span-5 card-noir p-5 border-neon-amber/25">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-neon-amber mb-4">
              {PAGE_COPY.showcase.proofEyebrow}
            </div>
            <ul className="space-y-3">
              {SHOWCASE.proofPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-neon-amber" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <a
              href={SITE.kickstarterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full !py-3"
            >
              {PAGE_COPY.showcase.backCta} <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="eyebrow mb-4">{PAGE_COPY.showcase.beforeAfterEyebrow}</div>
            <h3 className="heading-display text-3xl md:text-4xl text-white mb-4">
              {PAGE_COPY.showcase.comparisonTitle}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {PAGE_COPY.showcase.comparisonBody}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {SHOWCASE.comparisons.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="card-noir p-4 md:p-5"
              >
                <div className="grid md:grid-cols-[1.6fr_1fr] gap-4">
                  <figure className="relative overflow-hidden rounded-lg bg-noir-900">
                    <img
                      src={item.remake}
                      alt={item.remakeAlt}
                      className="aspect-video h-full w-full object-cover"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                    <figcaption className="absolute left-3 top-3 rounded bg-neon-amber px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-noir-950">
                      {PAGE_COPY.showcase.remakeLabel}
                    </figcaption>
                  </figure>
                  <figure className="relative overflow-hidden rounded-lg bg-noir-900">
                    <img
                      src={item.original}
                      alt={item.originalAlt}
                      className="aspect-video h-full w-full object-cover grayscale"
                      loading="lazy"
                    />
                    <figcaption className="absolute left-3 top-3 rounded bg-black/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-gray-200 ring-1 ring-white/15">
                      {PAGE_COPY.showcase.originalLabel}
                    </figcaption>
                  </figure>
                </div>
                <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h4 className="heading-display text-xl text-white">{item.title}</h4>
                    <p className="mt-1 text-sm text-gray-400">{item.body}</p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neon-amber/80">
                    {PAGE_COPY.showcase.sameSceneLabel}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <div className="eyebrow mb-4">{PAGE_COPY.showcase.footageEyebrow}</div>
              <h3 className="heading-display text-3xl md:text-4xl text-white">
                {PAGE_COPY.showcase.videoTitle}
              </h3>
            </div>
            <p className="max-w-lg text-sm text-gray-500">
              {PAGE_COPY.showcase.videoBody}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {SHOWCASE.videos.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card-noir overflow-hidden group"
              >
                <div className="relative aspect-video bg-noir-900">
                  <video
                    className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:opacity-100"
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`${item.title} gameplay footage`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950/90 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-neon-amber backdrop-blur">
                    <Play size={11} fill="currentColor" /> {item.label}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="heading-display text-xl text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <div className="eyebrow mb-4">{PAGE_COPY.showcase.filtersEyebrow}</div>
              <h3 className="heading-display text-3xl md:text-4xl text-white">
                {PAGE_COPY.showcase.filterTitle}
              </h3>
            </div>
            <p className="max-w-lg text-sm text-gray-500">
              {PAGE_COPY.showcase.filterBody}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {SHOWCASE.filters.map((filter, i) => (
              <motion.figure
                key={filter.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="card-noir overflow-hidden"
              >
                <img
                  src={filter.src}
                  alt={filter.alt}
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="border-t border-white/10 p-4">
                  <div className="heading-display text-lg text-white">{filter.title}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
