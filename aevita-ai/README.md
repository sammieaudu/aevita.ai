# Aevita.ai

Marketing site for **Aevita** — an AI engineering, intelligent automation, enterprise integration, and AI-powered growth company. Built with Next.js 16 (App Router), Tailwind CSS, and Framer Motion.

Live at [https://aevita.ai](https://aevita.ai) (Vercel project: `aevita-ai`).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Configuration

All brand values (name, domain, emails, navigation, socials, CTAs, metadata defaults, scheduling) live in [`lib/site.ts`](lib/site.ts). Do not hardcode brand values elsewhere.

Environment variables are documented in [`.env.example`](.env.example):

- `NEXT_PUBLIC_CAL_LINK` — Cal.com handle for booking CTAs
- `CONTACT_WEBHOOK_URL` — receives contact-form submissions (optional, graceful fallback)
- `CAREERS_WEBHOOK_URL` — receives job applications (optional, graceful fallback)

## Structure

- `app/` — routes, including `/solutions`, `/workflows`, `/industries`, `/careers`, `/contact`, API routes, sitemap/robots/manifest
- `components/` — layout, homepage sections, careers form, workflow diagrams, UI primitives
- `lib/` — site config (`site.ts`), job data (`careers.ts`), page data (`data.ts`)
- `public/brand/` — Aevita logo SVGs (favicons/OG images are generated in `app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx`)

## Deploy

The directory is linked to the Vercel project `aevita-ai`:

```bash
vercel          # preview
vercel --prod   # production
```
