# Atlas Freight Logistics — PRD

## Problem Statement
Build a world-class, production-ready logistics company marketing website for **Atlas Freight Logistics** (Ahmedabad, India). Must feel handcrafted by a premium digital agency — clean, corporate, trustworthy, Awwwards-level craft — not AI slop. Fully static React site deployable to GitHub + Vercel. No backend, no database, no auth, no API keys, no Emergent branding/packages/analytics.

## Architecture
- **Stack:** React 19 (CRA + Craco), TailwindCSS, Framer Motion, Lenis (smooth scroll), react-fast-marquee, lucide-react, shadcn/ui.
- **Structure:** Single-page marketing site. All content in `src/data.js`. Sections composed in `src/App.js`.
- **No backend:** Contact form is client-side validated; success message shown in-app.
- **Palette:** Deep Navy (`226 60% 10%`), White, Light Gray surface (`210 20% 96%`), Orange accent (`24 95% 53%`).
- **Typography:** Chivo (headings) + IBM Plex Sans (body) via Google Fonts.
- **Motion:** Lenis momentum scroll, masked line-by-line hero reveal, parallax hero image, animated stat counters, scroll-triggered section reveals, editorial marquee.

## Personas
- Enterprise supply-chain managers evaluating freight partners.
- Manufacturing / paper / steel / FMCG procurement heads.
- SMB owners requesting FTL/PTL quotes.

## Core Requirements (static)
- 10 homepage sections: Hero + stats, Marquee, About (Mission/Vision/Values), Services (8), Why Choose Us (8), Industries (8), Fleet Gallery, Process Timeline (6 steps), Testimonials (3), FAQ (6), Contact + Map, Footer.
- Sticky navbar with scroll state + mobile menu.
- Floating + inline WhatsApp CTA with prefilled quotation message (+91 9484751234).
- Embedded Google Maps of SG Highway, Ahmedabad.
- SEO meta, Open Graph, Twitter cards, AF-monogram SVG favicon.
- Responsive across mobile / tablet / desktop.

## Implemented (Dec 2025)
- [x] Removed all `@emergentbase/*` packages, PostHog analytics, `emergent-main.js`, `withVisualEdits` from craco.
- [x] Chivo + IBM Plex Sans fonts, navy/orange design tokens, sharp corners.
- [x] Kinetic hero with parallax truck image, masked headline reveal, animated 5-stat bar.
- [x] All sections built with framer-motion scroll reveals + Lenis smooth scrolling.
- [x] Fleet gallery with grayscale-on-idle / color-on-hover treatment.
- [x] Contact form: client-side validation + animated success screen.
- [x] Production build succeeds (146 kB gzipped JS), ready for Vercel/GitHub.

## Backlog (P1/P2)
- P1: Add subpages (Services detail, About detail, Careers).
- P1: Add a services PDF brochure download.
- P2: Blog / news section powered by MDX.
- P2: Live shipment tracking lookup (would need backend).
- P2: Multi-language (English + Hindi + Gujarati).
