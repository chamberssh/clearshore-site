# CLAUDE.md — Clearshore Counselling Website

## Project Overview
Marketing website for Clearshore Counselling, a private counselling practice based in
Hervey Bay, Queensland, offering in-person sessions and Australia-wide telehealth.
Clinical lead: Shelley Bentley. The site has two jobs: convert visitors into booked
clients, and rank in local Google search for terms like "grief counsellor Hervey Bay",
"trauma counselling Hervey Bay", "counselling for teachers Australia", and
"telehealth counselling Queensland".

Note: The practice launches around April 2027 when Shelley completes her
Postgraduate Diploma in Counselling. Until then the site can run a "launching 2027 /
join the waitlist" mode. Build the full site now; a small banner handles the pre-launch state.

## Tech Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 — configuration lives in globals.css under @theme. Do NOT create tailwind.config.ts.
- shadcn/ui for components
- Deployed on Vercel

## Brand & Design
Colours (from the Clearshore logo — a gold sun rising over calm teal waves):
- Deep teal (primary):     #1E6B7B   — hero backgrounds, header, primary buttons, footer
- Warm gold (accent):      #E8B54D   — the sun; highlights, primary CTA, small accents ONLY
- Soft teal (secondary):   #7FB3C4   — muted waves, subheadings, borders, hover states
- White:                   #FFFFFF   — the main wave line, whitespace, text on teal backgrounds
- Deep ink (body text):    #1A2E35   — body copy on light backgrounds

Logo: sun-over-waves mark at /public/logo.png. The logo sits on deep teal — mirror
that in the hero section.

Design feeling: calm, warm, grounded, safe. The palette is deliberately soothing
because someone arriving here may be in a difficult moment — often late at night, on a
phone, after a loss. Use generous whitespace. Gold is a warm point of light against cool
teal — use it sparingly (the sun, one key CTA, small accents), never as large fills.

Typography:
- Headings: "Cormorant Garamond" (soft editorial serif), via next/font/google
- Body: "Inter" (clean sans-serif), via next/font/google, line-height 1.7
Motif: subtle wave shapes (echoing the logo) as gentle section dividers. Soft, not busy.
Layout: mobile-first. Most visitors arrive on a phone.

## About Shelley (source material for the About page — write warmly, in her voice, first person)
Shelley Bentley is a counsellor whose path to this work runs through the classroom, the
child protection system, and her own experience of profound loss.

- Background: Trained and worked as a primary school teacher in London before relocating
  to Queensland, where she continued teaching. Her years in the classroom shaped a deep
  understanding of children, families, and the emotional lives beneath everyday behaviour.
- Child Safety: Worked as a Child Safety Officer with a QLD council, supporting families
  in crisis and navigating the child protection system. This gave her a trauma-informed
  lens and a deep respect for how loss, fear, and hope move through a family.
- Lived experience: Shelley is a mother who has experienced the loss of a child. This is
  the heart of her work. She does not counsel grief from theory alone — she has walked it.
  (Handle this with restraint and dignity: a short, honest paragraph, her choice of words,
  never sensationalised. It is the most powerful and most tender part of her story.)
- Walk to Remember: Shelley organises the Hervey Bay Walk to Remember, a community event
  for bereaved families. She is already a known and trusted presence in the local
  grief-and-loss community.
- Qualifications: Psychology degree (Honours); completing a Postgraduate Diploma in
  Counselling (University of Canberra, ~April 2027); progressing toward ACA/PACFA
  registration. Former teacher; former Child Safety Officer; mother of four.

Her approach: warm, gentle, and unhurried. She believes in sitting with people in the
hardest moments rather than rushing them through. She offers a safe, non-clinical, deeply
human space. The brand IS Shelley — technology stays invisible.

## Services (source material for the Services page — lead with grief, then educator wellbeing)
1. **Grief & Loss Counselling** (primary specialisation) — support for pregnancy loss,
   infant loss, child bereavement, and other profound losses. Shelley's lived experience
   and her work with Walk to Remember make this her deepest area. Warm, unhurried, walking
   alongside rather than "fixing".
2. **Educator & Teacher Wellbeing** (secondary specialisation) — burnout, classroom stress,
   compassion fatigue, and career transitions for teachers and school staff. Former teachers
   who become counsellors are rare; Shelley understands the profession from the inside.
3. **Trauma-Informed Support** — for individuals carrying the effects of trauma, informed
   by her child safety background. (Not crisis intervention — a calm, safe space to process.)
4. **Anxiety & Life Transitions** — support through change, uncertainty, and the ordinary
   overwhelm of life.
5. **Family & Parenting Support** — for parents and families navigating hard seasons,
   including parenting after loss or through crisis.

Delivery: in-person in Hervey Bay, and via secure telehealth Australia-wide.
Note on funding (mention factually where relevant): counsellors are not eligible for
Medicare rebates, but private-pay, NDIS (self- and plan-managed), and — once clinically
registered — private health fund rebates are available.

## Site Structure
- /            Home: hero, who we help, services overview, about-Shelley preview, "Book a session" CTA, footer
- /about       Shelley's full story, qualifications, approach
- /services    The five service areas above, plus telehealth + funding notes
- /contact     Contact form, booking (Zanda link — placeholder until live), location, hours
- /blog        SEO articles (grief, teacher wellbeing, trauma) — set up structure; posts added later

## Conventions
- Server Components by default. Add "use client" only for interactivity (useState, onClick, etc.).
- Reusable components in /components. Pages in /app/[route]/page.tsx.
- Every page exports metadata (title + description). Add LocalBusiness JSON-LD schema on the
  home page (name: Clearshore Counselling; location: Hervey Bay QLD; area served: Australia via telehealth).
- Accessibility: WCAG AA. Alt text on all images, one h1 per page, keyboard navigable.
  White-on-teal and gold-on-teal must meet AA. Never gold text on white (fails contrast) —
  use ink or teal for text.

## Do Not
- Do not invent brand colours — use only the hex values above.
- Do not overuse gold — accent only, never a background fill or body-text colour.
- Do not create tailwind.config.ts (Tailwind v4 config goes in globals.css under @theme).
- Do not sensationalise Shelley's loss — restraint and dignity always.
- Do not collect clinical or health information through a plain contact form — flag privacy
  handling to me before building any intake form.
- Do not run git push or deploy without asking me.

## Commands
- Dev server: npm run dev
- Build:      npm run build
- Type check: npx tsc --noEmit