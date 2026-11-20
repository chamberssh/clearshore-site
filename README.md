# Clearshore Counselling

Marketing site for Clearshore Counselling, a private counselling practice based in
Hervey Bay, Queensland, offering in-person sessions and Australia-wide telehealth.
The practice opens April 2027; until then the site runs in a "launching 2027 / join
the waitlist" mode.

Full project context, brand guidelines, and content conventions live in
[`CLAUDE.md`](./CLAUDE.md) — read that first before making changes.

## Tech stack

- Next.js (App Router, TypeScript)
- Tailwind CSS v4 — config lives in `app/globals.css` under `@theme`, not `tailwind.config.ts`
- shadcn/ui components
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Commands

```bash
npm run dev       # start the dev server
npm run build     # production build
npx tsc --noEmit  # type check
```

## Environment variables

Copy `.env.local.example` to `.env.local` and set:

- `WEB3FORMS_ACCESS_KEY` — server-only contact form submit key, get one at
  [web3forms.com](https://web3forms.com)
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — public Cloudflare Turnstile site key
- `TURNSTILE_SECRET_KEY` — server-only Cloudflare Turnstile secret key

The public preview password gate is disabled. The contact and waitlist forms
submit through `/api/contact`; submissions are validated server-side and should
use both Turnstile keys in production.

## Structure

- `app/` — routes (`/`, `/about`, `/services`, `/contact`, `/blog`), plus `sitemap.ts`,
  `robots.ts`, and per-route `opengraph-image.tsx`/`twitter-image.tsx`
- `components/` — shared UI (`components/ui/` is shadcn primitives)
- `lib/blog.ts` — blog post data; `lib/seo.ts` — shared page metadata helper
- `proxy.ts` — site-wide password gate (Next.js 16's replacement for `middleware.ts`)
