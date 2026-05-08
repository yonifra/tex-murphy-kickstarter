import {
  CAMPAIGN_PAGE,
  FAQ,
  FEATURES,
  ROADMAP,
  SHOWCASE,
  STRETCH_GOALS,
  TIERS,
} from "../data/content";

const LOGO_IMG = "/logo.png";
const TEX_IMG = "/tex_murphy.png";

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <header className="mb-8">
      <div className="font-mono text-xs uppercase tracking-[0.28em] text-neon-amber/80">
        {eyebrow}
      </div>
      <h2 className="heading-display mt-3 text-3xl text-white md:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-base leading-relaxed text-gray-400">{body}</p>}
    </header>
  );
}

function CampaignSection({ children }: { children: React.ReactNode }) {
  return <section className="border-t border-white/10 py-12 md:py-16">{children}</section>;
}

function StoryImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-8">
      <img src={src} alt={alt} className="w-full rounded-sm border border-white/10" />
      <figcaption className="mt-3 text-center text-sm italic text-gray-500">{caption}</figcaption>
    </figure>
  );
}

export default function KickstarterCampaign() {
  const copy = CAMPAIGN_PAGE;

  return (
    <main className="min-h-screen bg-noir-950 text-gray-200">
      <div className="mx-auto max-w-5xl px-5 py-8 md:px-8 md:py-12">
        <header className="pb-8 md:pb-12">
          <div className="mx-auto mb-6 max-w-xl text-center">
            <img src={LOGO_IMG} alt="Under a Killing Moon" className="mx-auto w-full" />
          </div>
          <p className="text-center font-mono text-xs uppercase tracking-[0.28em] text-neon-amber/80">
            {copy.hero.kicker}
          </p>
          <h1 className="heading-display mx-auto mt-4 max-w-4xl text-center text-4xl text-white md:text-6xl">
            {copy.hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-300">
            {copy.hero.intro}
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
            <div className="overflow-hidden rounded-sm border border-white/10 bg-black">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/oP5sLixCQH8?rel=0"
                title="Tex Murphy: Under a Killing Moon Remake campaign video"
                allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <aside className="border border-white/10 bg-noir-800/60 p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-gray-500">{copy.hero.meta}</p>
              <p className="mt-2 text-sm text-gray-400">{copy.hero.creator}</p>
              <div className="mt-5 space-y-4">
                {copy.hero.stats.map((stat) => (
                  <div key={stat.label} className="border-t border-white/10 pt-4">
                    <div className="heading-display text-3xl text-neon-amber">{stat.value}</div>
                    <div className="mt-1 text-sm uppercase tracking-wider text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 border border-neon-amber/30 bg-neon-amber/10 px-4 py-3 font-mono text-xs uppercase tracking-widest text-neon-amber">
                {copy.hero.note}
              </p>
            </aside>
          </div>
        </header>

        <div className="border-y border-white/10 py-5">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-neon-amber/80">Story</p>
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {copy.storyLinks.map((link) => (
              <div key={link} className="text-sm font-semibold text-gray-300">
                {link}
              </div>
            ))}
          </div>
        </div>

        <CampaignSection>
          <SectionHeader eyebrow="Intro" title="Tex Murphy is coming back to Chandler Avenue" />
          <img
            src={TEX_IMG}
            alt="Tex Murphy silhouette"
            className="mx-auto mb-8 h-64 w-auto object-contain opacity-90"
          />
          <div className="space-y-5 text-lg leading-relaxed text-gray-300">
            <p>
              This Kickstarter exists to fund a faithful remake of Under a Killing Moon, the cult FMV adventure that introduced many players to Tex Murphy's strange, funny, rain-soaked corner of post-war San Francisco.
            </p>
            <p>
              The aim is not to sand away the personality of the original. The aim is to rebuild the game so players can finally walk through the places the 1994 version could only imply: Rook's Pawnshop, Louie's Brew & Stew, the alley, the street, and the connected spaces around Chandler Avenue.
            </p>
          </div>
          {copy.introImages.map((image) => (
            <StoryImage key={image.src} {...image} />
          ))}
        </CampaignSection>

        <CampaignSection>
          <SectionHeader eyebrow={copy.sections.why.eyebrow} title={copy.sections.why.title} />
          <div className="space-y-5 text-lg leading-relaxed text-gray-300">
            {copy.sections.why.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <video
            src="/showcase/video/no-loading-screens.mp4"
            className="mt-8 aspect-video w-full rounded-sm border border-white/10 object-cover"
            controls
            preload="metadata"
          />
        </CampaignSection>

        <CampaignSection>
          <SectionHeader {...copy.sections.proof} />
          <div className="space-y-10">
            {SHOWCASE.comparisons.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-noir-800/50 p-4">
                <h3 className="heading-display mb-2 text-2xl text-white">{item.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-400">{item.body}</p>
                <div className="grid gap-4 md:grid-cols-[1.45fr_1fr]">
                  <figure>
                    <img src={item.remake} alt={item.remakeAlt} className="w-full rounded border border-white/10" />
                    <figcaption className="mt-2 font-mono text-xs uppercase tracking-widest text-neon-amber">
                      {copy.comparisonLabels.remake}
                    </figcaption>
                  </figure>
                  <figure>
                    <img src={item.original} alt={item.originalAlt} className="w-full rounded border border-white/10" />
                    <figcaption className="mt-2 font-mono text-xs uppercase tracking-widest text-gray-500">
                      {copy.comparisonLabels.original}
                    </figcaption>
                  </figure>
                </div>
              </article>
            ))}
          </div>
        </CampaignSection>

        <CampaignSection>
          <SectionHeader {...copy.sections.featureFootage} />
          <div className="grid gap-6 md:grid-cols-2">
            {SHOWCASE.videos.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-lg border border-white/10 bg-noir-800/50">
                <video
                  src={item.src}
                  className="aspect-video w-full object-cover"
                  controls
                  preload="metadata"
                />
                <div className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-neon-amber">
                    {item.label}
                  </p>
                  <h3 className="heading-display mt-1 text-xl text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </CampaignSection>

        <CampaignSection>
          <SectionHeader {...copy.sections.features} />
          <div className="grid gap-4 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <article key={feature.title} className="rounded-lg border border-white/10 bg-noir-800/50 p-5">
                <h3 className="heading-display text-xl text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{feature.body}</p>
              </article>
            ))}
          </div>
        </CampaignSection>

        <CampaignSection>
          <SectionHeader {...copy.sections.filters} />
          <div className="grid gap-4 md:grid-cols-3">
            {SHOWCASE.filters.map((filter) => (
              <figure key={filter.title} className="rounded-lg border border-white/10 bg-noir-800/50 p-3">
                <img src={filter.src} alt={filter.alt} className="aspect-video w-full rounded object-cover" />
                <figcaption className="mt-3 heading-display text-lg text-white">{filter.title}</figcaption>
              </figure>
            ))}
          </div>
        </CampaignSection>

        <CampaignSection>
          <SectionHeader {...copy.sections.rewards} />
          <div className="mb-8 border border-neon-amber/30 bg-neon-amber/10 p-5 text-gray-300">
            <p className="heading-display text-2xl text-white">Every paid tier is designed to be understandable at a glance.</p>
            <p className="mt-3 leading-relaxed">
              Kickstarter backers need to know what they get and when. The $15 tier gives supporters Act 1 after the campaign closes. The $30 tier is the full digital game. Higher tiers add in-world recognition, physical packaging, or cameo-level participation.
            </p>
          </div>
          <div className="space-y-4">
            {TIERS.map((tier) => (
              <article key={tier.name} className="rounded-lg border border-white/10 bg-noir-800/50 p-5">
                <div className="flex flex-col gap-2 border-b border-white/10 pb-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                      {copy.rewardLabels.tier}
                    </p>
                    <h3 className="heading-display text-2xl text-white">{tier.name}</h3>
                    <p className="mt-1 text-sm italic text-gray-400">{tier.tagline}</p>
                  </div>
                  <div className="heading-display text-3xl text-neon-amber">{tier.price}</div>
                </div>
                <div className="pt-4">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-gray-500">
                    {copy.rewardLabels.includes}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {tier.perks.map((perk) => (
                      <li key={perk}>- {perk}</li>
                    ))}
                  </ul>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-gray-500">
                    {tier.shipping ? copy.rewardLabels.shipping : copy.rewardLabels.digital}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </CampaignSection>

        <CampaignSection>
          <SectionHeader {...copy.sections.stretch} />
          <div className="space-y-4">
            {STRETCH_GOALS.map((goal) => (
              <article key={goal.amount} className="rounded-lg border border-white/10 bg-noir-800/50 p-5">
                <div className="heading-display text-3xl text-neon-amber">{goal.amount}</div>
                <h3 className="heading-display mt-1 text-xl text-white">{goal.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{goal.body}</p>
              </article>
            ))}
          </div>
        </CampaignSection>

        <CampaignSection>
          <SectionHeader {...copy.sections.roadmap} />
          <ol className="space-y-4">
            {ROADMAP.map((step) => (
              <li key={step.title} className="rounded-lg border border-white/10 bg-noir-800/50 p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-neon-amber">{step.date}</p>
                <h3 className="heading-display mt-1 text-xl text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{step.body}</p>
              </li>
            ))}
          </ol>
        </CampaignSection>

        <CampaignSection>
          <SectionHeader eyebrow={copy.sections.shipping.eyebrow} title={copy.sections.shipping.title} />
          <div className="space-y-5 text-lg leading-relaxed text-gray-300">
            {copy.sections.shipping.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </CampaignSection>

        <CampaignSection>
          <SectionHeader eyebrow={copy.sections.team.eyebrow} title={copy.sections.team.title} />
          <div className="space-y-5 text-lg leading-relaxed text-gray-300">
            {copy.sections.team.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </CampaignSection>

        <CampaignSection>
          <SectionHeader eyebrow={copy.sections.budget.eyebrow} title={copy.sections.budget.title} body={copy.sections.budget.body} />
          <ul className="space-y-3 rounded-lg border border-white/10 bg-noir-800/50 p-5 text-gray-300">
            {copy.sections.budget.items.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </CampaignSection>

        <CampaignSection>
          <SectionHeader eyebrow={copy.sections.risks.eyebrow} title={copy.sections.risks.title} />
          <div className="space-y-5 text-lg leading-relaxed text-gray-300">
            {copy.sections.risks.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </CampaignSection>

        <CampaignSection>
          <SectionHeader eyebrow="FAQ" title="Questions backers will ask" />
          <div className="space-y-6">
            {FAQ.map((item) => (
              <article key={item.q}>
                <h3 className="heading-display text-xl text-white">{item.q}</h3>
                <p className="mt-2 leading-relaxed text-gray-400">{item.a}</p>
              </article>
            ))}
          </div>
        </CampaignSection>

        <CampaignSection>
          <SectionHeader {...copy.sections.final} />
          <div className="rounded-lg border border-neon-amber/30 bg-neon-amber/10 p-6 text-center">
            <p className="heading-display text-2xl text-white">Under a Killing Moon deserves to be playable again.</p>
            <p className="mt-3 text-gray-300">Help bring Tex back to Chandler Avenue.</p>
          </div>
        </CampaignSection>
      </div>
    </main>
  );
}
