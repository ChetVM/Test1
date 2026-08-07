# Atlas Freight Logistics — PRD

## Problem Statement
Build a world-class, production-ready logistics company marketing website for **Atlas Freight Logistics** (Ahmedabad, India). Must feel handcrafted by a premium digital agency — Awwwards-level craft, comparable to DHL / Maersk / FedEx / Apple / Stripe / Tesla. Fully static React site deployable to GitHub + Vercel. No backend, no database, no auth, no API keys, no Emergent branding.

## Architecture
- **Stack:** React 19 (CRA + Craco), TailwindCSS, Framer Motion, Lenis (smooth scroll), react-fast-marquee, lucide-react, shadcn/ui.
- **Structure:** Single-page marketing site. Content in `src/data.js`. Sections composed in `src/App.js`.
- **No backend:** Contact form + newsletter are client-side validated with in-app success states.
- **Palette:** Deep Navy (`224 47% 8%`), White, Light Gray surface (`220 24% 97%`), Orange accent (`22 96% 55%`).
- **Typography:** Sora (headings, tight letter-spacing) + Plus Jakarta Sans (body).
- **Radius:** 16–20px on cards, full-pill on CTAs.
- **Motion:** Lenis momentum scroll, masked line-by-line hero reveal, parallax hero image, animated stat counters, scroll-triggered section reveals, editorial marquee with edge mask, animated horizontal process timeline.

## Personas
- Enterprise supply-chain managers evaluating freight partners.
- Manufacturing / paper / steel / FMCG procurement heads.
- SMB owners requesting FTL/PTL quotes.

## Core Requirements (static)
- 12 homepage sections in order: Hero + floating stats card, Marquee, About (Mission/Vision/Values + trust badges), Services (8), Why Choose Us (8), Industries (8, bg images), Fleet Gallery, Process Timeline (6 animated), Testimonials (3), FAQ (6), full-width CTA card, Contact + Map, Footer with newsletter.
- Sticky navbar: transparent on top → dark glass with shrinking logo on scroll.
- Floating stack: WhatsApp + Phone + conditional back-to-top.
- Embedded Google Maps of SG Highway, Ahmedabad (styled).
- SEO meta, Open Graph, Twitter cards, AF-monogram SVG favicon.
- Fully responsive.

## Implemented
### v1 (initial MVP)
- [x] Removed all `@emergentbase/*`, PostHog, `withVisualEdits`, `emergent-main.js`.
- [x] Navy/orange design tokens, Chivo + IBM Plex fonts, sharp corners.
- [x] All 11 sections built with framer-motion scroll reveals + Lenis smooth scrolling.
- [x] Contact form with client-side validation + animated success screen.

### v3 (final agency polish)
- [x] Removed repetitive "colored middle word" cliché from 7 section headings; kept accent-highlight on About (period), CTA and Contact only for editorial variety.
- [x] Unified heading scale at `text-3xl md:text-4xl lg:text-[3.5rem]` with tightened `leading-[1.05]`.
- [x] Rebalanced FAQ layout to 5/7 columns so the heading reads cleanly.
- [x] Widened Industries heading max-width so it fits two lines on desktop.
- [x] Tightened hero trust chip and refined the pulsing dot micro-interaction.
- [x] Verified responsive polish across desktop (1440px) and mobile (390px).

### v2 (premium redesign)
- [x] Upgraded to Sora + Plus Jakarta Sans; radius bumped to 16–20px.
- [x] Navbar transparent → glass-dark on scroll + logo shrink.
- [x] Cinematic hero with trust chip, star-rating strip, dual pill CTAs.
- [x] Floating premium stat cards with animated counters (grid).
- [x] Trust badges in About: ISO Certified, GPS Tracking, 24×7 Support, Dedicated Fleet, Pan India Coverage.
- [x] Services cards: large icons, hover lift, icon-fills on hover, orange sweep bar.
- [x] Why Choose Us: rounded cards with icon + number, hover lift, corner sheen.
- [x] Industries with real background photos + hover overlay + arrow reveal.
- [x] Fleet cards: rounded 20px, tonal image hover, arrow badge.
- [x] Process: animated horizontal timeline with orange progress line + circular icon badges (6 steps: Quote/Planning/Pickup/Tracking/Transit/Delivery).
- [x] Testimonials: large decorative quote glyph, star ratings, avatar with glow ring.
- [x] FAQ: rounded accordion cards with orange open-state.
- [x] Premium full-width CTA card before footer.
- [x] Footer: newsletter band with pill input + rounded submit, four-column layout, floating socials.
- [x] Contact: rounded pill inputs, glass panel, dark-styled Google Map, WhatsApp inline CTA.
- [x] Floating contact stack: WhatsApp + Phone + Back-to-top.
- [x] Production build passes cleanly (~148 kB gzipped JS).

## Backlog
- P1: Services detail pages, About detail page, Careers.
- P1: PDF brochure download from hero.
- P2: Client logo wall under marquee, Track-shipment lookup widget.
- P2: Blog / news section (MDX).
- P2: Multi-language (English + Hindi + Gujarati).
