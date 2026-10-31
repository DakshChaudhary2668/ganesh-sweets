# Ganesh Sweets — premium frontend

A Next.js recreation of the public Ganesh Sweets website, guided by the stakeholder-approved four-panel design in `references /Design Ref.png`. The site uses the supplied official logo, the approved ivory/maroon/gold palette, real public catalogue information, and a WhatsApp-first enquiry journey.

The latest [reference fidelity correction](docs/fidelity-correction.md) restores the compact approved homepage composition and documents the remaining hero-photo requirement. The [comparison](docs/fidelity-comparison.png) and applied [Design DNA specification](docs/design-dna.json) are saved for review. The earlier motion and card pass is recorded in [visual-refinement.md](docs/visual-refinement.md).

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. For release checks, run `npm test`, `npm run typecheck`, and `npm run build`. Node 26 was used during implementation.

## Pages and interactions

| Route | Purpose |
| --- | --- |
| `/` | Editorial homepage, category entry points, signatures, gifting, separate Sankranti Home Foods, story, store |
| `/products` | Searchable and filterable 75-item catalogue with pack selection and product-specific WhatsApp enquiry |
| `/services` | Nine service enquiries, including confirmed gift boxes |
| `/about` | Factual heritage introduction and collection context |
| `/contact` | Store details, directions, phone, WhatsApp and validated enquiry form |

The contact form composes a WhatsApp message for the visitor to review. There is no backend submission, cart, checkout, or claim that an enquiry has been sent.

## Architecture

- **App Router and Server Components:** Pages, page metadata, structured business data, and homepage content render on the server. `/products` reads its category query in the server page.
- **Small Client Components:** `Catalogue` and `ProductCard` handle search, filters and pack selection; `Header` handles the mobile menu; `EnquiryForm` validates and composes a message; `Intro` runs the first-visit GSAP ribbon sequence; `HeroAura` mounts one lazy-loaded shader only while the desktop hero is visible.
- **Content sources:** `src/data/products.ts` holds the public catalogue snapshot; `src/data/business.ts` holds store and service details. `src/lib/whatsapp.ts` centralizes encoded enquiry links.
- **Styling:** `src/styles/_tokens.scss` contains the approved colors plus readable text variants. Global rules cover typography, layout and accessibility; component styles use SCSS Modules.
- **Effects:** The official [`shaders` React package](https://github.com/shader-effects-inc/shaders) provides a restrained `Swirl` aura. A CSS golden glow remains visible when WebGPU is unavailable, on mobile, or when reduced motion is requested. The canvas is CSS-capped at 640 × 640 pixels, dynamically loaded, and unmounted when out of view.

## Content and asset provenance

The supplied `references /ganesh-sweets-logo.png` is used unchanged in proportion. Seven food images were taken from the [public Ganesh Sweets site](https://www.ganeshsweets.in/): laddu, kaja, Mysore Pak, kaju burfi, Gulab Jamun, Ariselu and Murukulu. Ten catalogue entries use one of the original five matching family images; remaining entries show a quiet typographic placeholder. Ariselu and Murukulu provide relevant images for the Home Foods and Hot Snacks category cards. The original site also reuses generic imagery, so a business-approved product shoot would materially improve the full catalogue.

The 75 names, category assignments, listed prices, pack options, store details and service names were transcribed from the public site on **31 October 2026**. Prices are a snapshot and are labelled for confirmation in the enquiry flow. The supplied stakeholder clarification confirms gift boxes but provides no verified box assortments, package photographs or prices, so gifting uses an enquiry path. Sankranti Home Foods has its own section and routes to Home Foods; the section does not assert current seasonal stock.

## Before and after

| Area | Public reference | This frontend |
| --- | --- | --- |
| Visual system | Mixed catalogue and promotional presentation | Approved heritage editorial system with fixed palette and official logo |
| Catalogue | 75 entries and repeated generic imagery | Same 75 entries, six categories, search/filter, matched family imagery or honest placeholders |
| Ordering | WhatsApp-led enquiries | Product, pack, gift-box and service context included in encoded WhatsApp messages |
| Gifting | Gift-box service exists; exact box data unavailable | Dedicated gifting presentation and enquiry, with no invented contents or prices |
| Seasonal home foods | Present in the catalogue | Separate Sankranti section pointing to Home Foods |
| Navigation | Five public routes | Same five routes with responsive navigation and active route state |

## Verification and performance

`npm test`, `npm run typecheck`, and the optimized `npm run build` pass. The data test checks the 75-item count, unique names, six category counts, positive prices, pack options and referenced photos. Browser checks covered the five routes, catalogue search and filtering, pack-specific WhatsApp URLs, mobile menu, and narrow/desktop layouts. At 320, 375, 390, 430, 768, 1024, 1440 and 1920 CSS pixels on the production homepage, document width equalled the viewport. The contact form fits 320 pixels without a two-column field squeeze.

The inspected production homepage browser session had no console errors or warnings. The ribbon skip was checked on a fresh session: it removed the overlay, restored page interaction, focused the main heading, and stayed skipped on reload.

Key text combinations meet the 4.5:1 WCAG AA normal-text contrast threshold by calculation: maroon on ivory **9.05:1**, darkened gold text on ivory **5.10:1**, muted body text on ivory **6.09:1**, and white on maroon **9.85:1**. The approved antique gold remains decorative where it would be too light for small text.

Core Web Vitals targets are **LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1**. They are targets, not results. No Lighthouse or field performance score is claimed. Production profiling on actual target devices, with the shader and intro both on and off, remains a release check. The shader is a progressive enhancement; the food photo and all content render without it.

## Known limitations and handoff

- Authentic product-specific photography is missing for most catalogue entries. Confirm image rights and replace placeholders with a consistent store shoot before public launch.
- Gift-box assortments, packaging photos, pricing and lead times need business approval before they can appear as product cards.
- Public prices, hours, contact details and seasonal availability should be reconfirmed with the store before publishing. The public site lists `contact@tensorik.in`; it has been preserved rather than silently replaced.
- Automated accessibility and real-device performance audits have not been run. Semantic structure, labels, visible focus, reduced-motion behavior and responsive layouts are implemented, but WCAG 2.2 AA is a target pending a full audit.
- WebGPU availability varies by browser and device; the static glow is the intentional fallback.
