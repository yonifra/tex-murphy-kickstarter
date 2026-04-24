# AGENTS.md

Kickstarter landing page for the **Tex Murphy: Under a Killing Moon** fan remake.
Companion site to https://www.killingmoonrising.com/. Single page, marketing-first,
optimized to drive backers to Kickstarter.

## Stack

- **Vite 5 + React 19 + TypeScript** (Vite 8 / rolldown was tried and broke on macOS — `@rolldown/binding-darwin-universal` not found. Stay on Vite 5 unless you intentionally upgrade Node ≥ 22.12 and re-test.)
- **Tailwind CSS v3** (NOT v4 — config is `tailwind.config.js` + `postcss.config.js`, classic `@tailwind base/components/utilities` directives in `src/index.css`).
- **framer-motion** for scroll/entry animations.
- **lucide-react** for icons.
- Google Fonts loaded via `<link>` in `index.html`: Cinzel (display), Share Tech Mono (mono), Inter (body).

## Commands

```
npm install
npm run dev      # local dev server
npm run build    # tsc -b && vite build  → dist/
npm run lint
npm run preview  # serve dist/
```

Node engine warnings appear under Node 20.18 but everything builds and lints clean.

## Architecture

Single-page app. Each section is a self-contained component composed in `src/App.tsx`. Order in `App.tsx` IS the visual order on the page — reorder there.

```
src/
  App.tsx              # composes sections in display order
  main.tsx             # React root
  index.css            # Tailwind layers + design tokens (.btn-primary, .card-noir, .heading-display, .eyebrow, .grain, .container-*)
  data/content.ts      # ALL copy lives here: SITE, FEATURES, TIERS, STRETCH_GOALS, ROADMAP, FAQ
  components/
    Nav.tsx            # fixed top nav, scrolls fade-in
    Hero.tsx           # custom SVG skyline + animated moon + CSS rain
    Story.tsx          # plot + dossier card
    Features.tsx       # icon grid (icon names are strings → mapped to lucide components)
    Trailer.tsx        # YouTube embed (video id oP5sLixCQH8)
    Tiers.tsx          # pledge tiers; tier.popular adds glow + "Most Backed" badge; accent: "amber" | "cyan"
    Stretch.tsx        # stretch goals (state: "base"|"next"|"future") + roadmap timeline
    Faq.tsx            # accordion (single-open)
    CtaNewsletter.tsx  # email form
    Footer.tsx
```

## Content editing rules

- **All marketing copy lives in `src/data/content.ts`.** Do NOT inline copy in components — find or add a constant.
- `SITE.kickstarterUrl` is a placeholder (`https://www.kickstarter.com/`). Every "Back the Kickstarter" button reads from it — update in one place when the campaign URL is live.
- `SITE.newsletterEndpoint` is empty by default. If set, `CtaNewsletter` will POST `{ email }` JSON to it; otherwise the form just shows the success state locally.
- `Features.tsx` maps `icon` strings → lucide components via the `ICONS` record. To use a new icon, import it and add it to that record; don't pass component refs through data.
- `TIERS[].accent` is `"amber"` (default) or `"cyan"` (premium tiers). Don't add new accent values without extending the conditional styling in `Tiers.tsx`.
- `STRETCH_GOALS[].state` is `"base" | "next" | "future"` — drives styling. Cast as `const` in the data file.

## Design system (non-obvious bits)

- Colors are extended in `tailwind.config.js`: `noir-{700..950}`, `neon-{amber,gold,red,cyan,magenta}`. Use these instead of raw hex.
- Reusable component classes are in `@layer components` of `src/index.css`: `btn-primary`, `btn-ghost`, `card-noir`, `section`, `eyebrow`, `heading-display`, `text-glow-amber`, `text-glow-cyan`, `container-narrow`, `container-wide`, `grain`.
- Custom keyframes/animations: `animate-flicker` (neon flicker), `animate-rain` (hero rain), `animate-pulseGlow` (CTA pulse).
- Hero moon, skyline and rain are pure SVG/CSS — no images. If you replace with real art, update `Hero.tsx` and add to `public/`.

## Assets

- No bundled images. Trailer is a YouTube embed.
- Favicon: `public/moon.svg` (inline SVG moon, matches brand).
- `og.jpg` is referenced in `index.html` but does NOT exist yet — add one before going public, or remove the meta tag.

## Gotchas

- `tailwind.config.js` uses `export default` (ESM) — `package.json` has `"type": "module"`. Don't switch to `module.exports`.
- Do not upgrade to Tailwind v4 without rewriting the config and CSS entry — current setup is v3-style.
- Do not upgrade Vite to v8 unless on Node ≥ 22.12 and you've verified rolldown native binaries install on macOS.
- `tsc -b` runs before `vite build`; type errors WILL fail the build. Keep `data/content.ts` shapes consistent with consumers (Tiers, Stretch, Faq).
