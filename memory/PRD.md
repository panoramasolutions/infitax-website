# PRD — Infitax Accounting Services LLP (Website)

## Original Problem Statement
Build a production-ready single-page marketing website for an Indian accounting,
taxation and compliance firm, with a distinct premium "Tally Skills / Authorized
Tally Training Centre" vertical. Editorial, trustworthy, non-generic. Frontend-only,
static-deployable (GitHub Pages). Contact form frontend-only with a Google Apps
Script placeholder endpoint.

## User Choices
- Company: **Infitax Accounting Services LLP**
- Contact details: placeholders (editable in `src/config/business.js`)
- Tally: **Authorized Tally Training Centre** (tallyAuthorized = true)
- Stats: example figures (editable)
- Contact form: frontend-only + Google Apps Script placeholder

## Architecture
- React (CRA + craco) + Tailwind CSS, Framer Motion, react-fast-marquee, lucide-react.
- No backend. Static site.
- `src/config/business.js` — business identity/contact + WhatsApp/tel builders.
- `src/data/content.js` — all copy (services, curriculum, FAQs, stats, audience).
- `src/hooks/useContactForm.js` + `src/utils/contactApi.js` — isolated form logic;
  `CONTACT_FORM_ENDPOINT` placeholder → POSTs to Google Apps Script when set.
- `src/components/*` — Navbar, Hero, TrustStrip, About, Services, ComplianceFlow,
  AccountingInsight, TallySkills, Audience, WhyUs, Process, Stats, FAQ, FinalCTA,
  Contact, Footer, MobileCTA; shared/motion.jsx for reveal primitives.

## Design
- Palette: Midnight Ink, Deep Navy, Ivory, Warm Paper, Muted Sage, Accounting Green,
  Graphite; Tally accent amber. Fonts: Newsreader (serif) + Manrope + JetBrains Mono.
- Editorial/asymmetric layouts, ledger motifs, masked line reveals, marquee, native
  smooth scroll, respects prefers-reduced-motion.

## Implemented (2026-06)
- Full single-page site with all 17 content sections from the brief.
- Editorial hero with animated CSS "Statement of Accounts" ledger card.
- Asymmetric services (featured Accounting card + expandable rows).
- GST/TDS compliance journey, ledger insight, interactive Tally curriculum (01–07),
  audience list, numbered Why Us, process, animated stat counters, FAQ accordion,
  final CTA, premium contact form (validation + loading/success/error states),
  footer with disclaimer.
- SEO: title/meta/OG/Twitter, JSON-LD AccountingService, ₹ favicon.
- Verified by testing agent: 100% frontend pass (scroll reveals, nav, accordions,
  Tally interactivity, form validation+success, tel/wa.me, mobile 375px no overflow).

## Redesign (2026-06) — Editorial Canvas
Substantial UI/UX redesign moving away from cards to a continuous editorial canvas:
- New palette (warm ivory #F2EBDD dominant, ~70/30 light/dark), squared buttons, chapter indexing.
- Hero: oversized serif headline with ledger values woven into a 12-col grid + ₹ watermark (no card).
- Services: sticky editorial navigator (IntersectionObserver-driven active title) with numbered NN.MM rows on desktop; indexed accordion on mobile — no big cards.
- GST/TDS dual horizontal journeys; dark scroll-revealed Accounting Insight; Tally vertical curriculum timeline (active grows) + dramatic typographic statement; interactive big-word "Who We Serve"; numbered "Why Infitax" manifesto; editorial Process/Stats; bottom-border Contact form (no card).
- New numbered full-screen mobile menu; mobile CTA bar auto-hides over contact/footer; navbar shrinks/translucent on scroll.
- Fixes verified (iteration_3, 95%): horizontal overflow (overflow-x:clip + grid min-w-0 + marquee containment), services sticky lag, mobile CTA hide, mobile-menu z-index/close, navbar scroll style.

## Official Branding + Content Update (2026-06)
- Adopted official InfiTax identity: brand gradient (cyan #17A9E0 → blue #3E63D6 → purple #8A3CC0 → magenta #EC008C) on white/charcoal, deep purple-black dark sections. Tokens central in tailwind + index.css; gradient used selectively (rules, numbers, CTAs, links, accents).
- Official infinity logo in navbar (mix-blend), mobile menu + footer chips; large faint infinity motif in hero. Removed the bill/Statement-of-Accounts hero visual.
- Nav = Home / Services / Tally Education / Associations / Contact Us. New hero copy ("Professional Accounting & Tax Solutions for Your Business.").
- Main Services reduced to exactly 3 (01 Accounting, 02 Income Tax incl. TDS, 03 GST) with approved item lists + supporting lines; added subtle "Other Services" subsection (#other-services).
- Tally repositioned as Empanelled Tally Skill Incubation Centre (TSIC): "Get Certified. Get Skilled. Get Industry Ready.", Learn/Certify/Grow, highlights, placement support; curriculum + statement retained.
- New Associations section (#associations). Why Us = 6 new themes. Final CTA = "Our Commitment / Your Compliance. Our Responsibility. / Get in Touch".
- Real contact centralised in config: phone/WhatsApp +91 81047 41939, office@infitaxaccounting.com, Panvel address, partners, LinkedIn/Instagram. Contact form dropdown = Accounting/Income Tax/GST/Other Services/Tally Education. Structured data (AccountingService) updated.
- Verified iteration_5: 100% frontend pass; production build succeeds; GitHub Pages ready.

## Backlog / Next
