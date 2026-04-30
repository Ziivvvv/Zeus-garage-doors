# Zeus Garage Doors — Claude Context

## What this is
Local service marketing website for Zeus Garage Doors, Kirkland WA. React SPA deployed on Cloudflare Pages.
Lead generation + SEO — no backend, no auth, no database.

## Stack
- **React 18** + **TypeScript** + **Vite** (SWC)
- **Tailwind CSS** + **shadcn/ui** (Radix primitives)
- **React Router v6** — all routes are client-side, Cloudflare Pages handles SPA rewrites
- **React Hook Form** for form validation
- **PostHog** for analytics (init skipped if `VITE_POSTHOG_KEY` env var is absent)
- **Framer Motion** for animations

## Project structure
```
src/
  components/    # Reusable UI (QuoteForm, SEOHead, Navbar, Footer, etc.)
  components/ui/ # shadcn/ui library components — don't hand-edit these
  pages/         # One file per route
    locations/   # 9 city pages (Kirkland, Bellevue, Seattle, etc.)
    services/    # 6 service pages (spring, opener, cable, etc.)
    blog/        # 3 specific blog posts + Blog index
  hooks/         # use-mobile, use-toast
  lib/           # cn() utility only
public/          # Static assets, sitemap.xml, robots.txt
scripts/         # generate-sitemap.cjs — run via `npm run build`
```

## Commands
```bash
npm run dev        # Dev server on :8080
npm run build      # Regenerates sitemap then builds to /dist
npm run lint       # ESLint
npm run test       # Vitest
```

## Key conventions
- Every page exports a default component and receives `SEOHead` with full schema markup
- Location pages follow the pattern in `src/pages/locations/KirklandWA.tsx`
- Service pages follow the pattern in `src/pages/services/SpringReplacement.tsx`
- When adding a new page, also add it to `scripts/generate-sitemap.cjs` PAGES array
- Brand colors: Navy `#1B2A3B`, Gold `#C9A84C` — use Tailwind aliases `navy-*` / `gold-*`

## What's intentionally not strict
- `tsconfig` has `strict: false` — intentional for development speed
- `eslint` has `no-unused-vars: off` — intentional
- Don't enable these without a full cleanup pass first

## Known stubs (things not yet wired up)
- `QuoteForm.tsx` `sendToDispatch()` is a mock (1.5s timeout). Replace with real Zapier/webhook URL when available.

## Deployment
Cloudflare Pages auto-deploys on push to `main`. Build command: `npm run build`, output dir: `dist`.
