# CLAUDE.md — Abhinav Durgavarjhula Portfolio

## Project Identity

Personal portfolio site for Abhinav Durgavarjhula. Psychology BA + Management Minor at Dalhousie University (graduating April 2026). Focus areas: event management, marketing, community engagement, photography, and design. Based in Halifax, Nova Scotia. Open to opportunities.

This is a fully static React/Vite site. There is no backend, no database, and no Firebase. Do not introduce any server-side services.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18.3 + TypeScript 5.8 |
| Build | Vite 5.4 |
| Routing | React Router 7.15 |
| Animation | Framer Motion 11.18 + Lenis smooth scroll |
| Content | MDX 3 (blog posts and event detail pages) |
| Styling | Single flat CSS file: `src/index.css` |
| Deployment | GitHub Pages via GitHub Actions (`main` branch auto-deploys) |
| Base path | `/Portfolio-1.0/` (set in `vite.config.ts` and `BrowserRouter`) |

Fonts loaded from Google Fonts: Anton (display), Shantell Sans (handwritten).

---

## Directory Map

```
src/
  App.tsx               routing shell + AnimatePresence page fades
  main.tsx              entry point, Lenis init, SW cleanup
  index.css             all styles (single file, no modules)
  components/           one file per UI section
  data/
    index.ts            source of truth for all content arrays
  posts/
    index.ts            registry mapping slugs to MDX imports
    *.mdx               blog post bodies
  events/
    index.ts            registry mapping slugs to MDX imports
    *.mdx               event detail bodies
  pages/
    BlogPost.tsx        single blog post layout
    EventPost.tsx       single event post layout
  hooks/
    useCountUp.ts       animated number counter
    useMagnetic.ts      magnetic cursor effect
    useParticles.ts     particle animation
    useTilt.ts          3D tilt transform
  types/
    mdx.d.ts            MDX module declarations

public/
  designs/              design portfolio images (served at /designs/*)
  photos/               portrait and moment photos (served at /photos/*)
  videos/               (placeholder, videos are YouTube embeds via ID)
  resume.pdf            downloadable resume
  favicon.svg
  manifest.json
```

---

## Content Map

Every piece of user-facing content has one canonical location. Edit that location only.

| Content | File | Key |
|---|---|---|
| Hero tagline | `src/components/Hero.tsx` | inline JSX |
| Availability badge text | `src/components/Hero.tsx` | inline text |
| Marquee items | `src/components/Marquee.tsx` | inline array |
| Stats numbers and labels | `src/components/Stats.tsx` | `stats[]` |
| About bio + facts | `src/components/About.tsx` | inline JSX |
| Skills tags | `src/data/index.ts` | `skills[]` |
| Work experience | `src/data/index.ts` | `experiences[]` |
| Certifications | `src/data/index.ts` | `certs[]` |
| Blog card metadata | `src/data/index.ts` | `posts[]` |
| Blog post body | `src/posts/<slug>.mdx` | MDX |
| Event card metadata | `src/data/index.ts` | `eventsData[]` |
| Event detail body | `src/events/<slug>.mdx` | MDX |
| Contact info and socials | `src/components/Contact.tsx` | inline array |
| Footer | `src/components/Footer.tsx` | inline JSX |
| Photo strip items | `src/data/index.ts` | `photos[]` + upload to `public/photos/` |
| Video embeds | `src/data/index.ts` | `videos[]` (YouTube IDs only) |
| Design images | `src/data/index.ts` | `designs[]` + upload to `public/designs/` |
| Resume | `public/resume.pdf` | replace file directly |

---

## Routing

Three routes, all wrapped in `AnimatePresence` for 220ms fade transitions:

```
/                     PortfolioHome (all sections stacked vertically)
/blog/:slug           BlogPost page (looks up slug in posts[], loads MDX)
/event/:slug          EventPost page (looks up slug in eventsData[], loads MDX)
```

To add a new blog post:
1. Add metadata to `posts[]` in `src/data/index.ts`
2. Create `src/posts/<slug>.mdx`
3. Register it in `src/posts/index.ts`

To add a new event detail page, same pattern under `src/events/`.

---

## Styling Rules

- All styles live in `src/index.css`. Do not create CSS modules or styled-components.
- CSS custom properties are defined at `:root`. Key tokens:
  - `--ink` (dark text), `--paper` (light bg), `--accent`, `--hi` (highlight yellow), `--hand` (Shantell Sans), `--display` (Anton)
- Mobile breakpoint is at `640px` with a single `@media` block at the bottom of the file.
- The hand-drawn aesthetic uses an SVG `filter id="rough"` (mounted once in App.tsx) applied via `filter: url(#rough)` on sketch elements.
- Add the class `sketch` to any bordered element that should get the wobbly hand-drawn border treatment.
- Dark sections (`experience`, `media`) use `--ink` as background, `--paper` as text. Light sections use the reverse.

---

## Animation Conventions

- Page transitions: `AnimatePresence mode="wait"` in `App.tsx`, `PageFade` wrapper on each route.
- Scroll-triggered reveals: `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}`. Default duration 0.6s.
- Doodle placeholders: `whileInView={{ opacity: 1, scale: 1 }}` from `{ opacity: 0, scale: 0.94 }`, ease `[0.22, 1, 0.36, 1]`.
- Do not add animations that loop indefinitely unless they are subtle (the availability badge pulse is the exception).
- Lenis smooth scroll is initialized globally. Do not call `window.scrollTo` in a way that fights Lenis.

---

## Doodle Placeholders

`Doodle.tsx` renders SVG scenes by name. Available scenes:

`poster`, `palette`, `layout`, `type`, `party`, `mic`, `glass`, `bulb`, `camera`, `heart`, `sun`, `cat`, `bloom`, `star`, `mountains`, `spiral`, `brain`

Use `<Doodle scene="camera" />` for a light section or `<Doodle scene="camera" dark />` for a dark section. These are placeholders shown when a real image is not yet uploaded. Replace them by setting the `src` on the relevant image element and removing the Doodle.

---

## Build and Deploy

```bash
npm run dev        # local dev server at http://localhost:5173/Portfolio-1.0/
npm run build      # tsc + vite build, outputs to dist/
npm run preview    # preview the dist/ build locally
```

Pushing to `main` triggers `.github/workflows/deploy.yml` automatically. The workflow runs `npm run build`, copies `dist/index.html` to `dist/404.html` for SPA routing, then pushes to `gh-pages` branch.

The live site is at: `https://durg26.github.io/Portfolio-1.0/`

**Feature work goes on `feature/enhancements` or a new branch.** Merge to `main` only when ready to go live.

---

## Writing Rules

These apply to all text content in the codebase: MDX files, component strings, data arrays, labels, headings, and this file.

- **No em dashes.** Use a regular hyphen, a colon, or restructure the sentence instead.
- No placeholder text. Every string that ships must be real content.
- Write in first person where appropriate (bio, blog posts).
- Tone: warm, direct, unpretentious. Not corporate, not over-designed.
- Reading level: accessible. No jargon without explanation.

---

## Code Rules

- No new dependencies without a strong reason. The bundle is intentionally small.
- No Firebase, Supabase, or any backend service. The site is static.
- No CSS modules, Tailwind, or styled-components. Extend `src/index.css`.
- No placeholder `TODO` comments in shipped code.
- No unnecessary abstractions. If a pattern appears twice, consider a component. Three times, extract it.
- TypeScript strict mode is on. Do not use `any` unless unavoidable.
- All new components return `JSX.Element` and are default exports.
- Keep components in `src/components/`. Keep page-level layouts in `src/pages/`. Keep data in `src/data/index.ts`.
- Before adding a new MDX file, register it in the matching `index.ts` registry.
- Run `npm run build` before committing to catch TypeScript errors early.

---

## What Not to Do

- Do not introduce server-side rendering, API routes, or edge functions.
- Do not add Firebase (no config files, no SDK imports, no Firestore).
- Do not use em dashes anywhere in content.
- Do not leave placeholder strings like "Lorem ipsum", "TODO", "Coming soon", or "[INSERT NAME]" in any file that gets committed.
- Do not push directly to `main` unless the change is ready to go live.
- Do not create separate CSS files per component.
- Do not use `dangerouslySetInnerHTML` outside of `Doodle.tsx` (where it is intentional for SVG path injection).
- Do not add `console.log` statements to committed code.
