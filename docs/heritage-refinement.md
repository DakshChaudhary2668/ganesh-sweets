# Golden heritage refinement

The supplied floral and architectural screenshots are the artwork source. The floral half is cropped and mirrored in a static SVG wrapper; the architectural composition is reused without identifying its landmarks. Embedded source pixels retain the screenshots' resolution. Static color matrices tint the linework #C69A57 and remove the paper, preserving SourceAlpha. There are no hand-invented ornamental paths, blur filters, animation loops, or additional shader instances.

Floral edge ornaments appear on the hero, categories, signature sweets, festival banner, trust section, footer, and About introduction. Architecture sits at the right of the home story and About introduction, with a softer mobile treatment. Decorative imagery has empty alternative text, hidden decorative containers, and no pointer interaction. Positioning is absolute, so the artwork adds no document flow. Brand tokens, product information, layout, and imagery remain unchanged by this refinement.

The existing `shaders/react` mesh/radial light remains the ambient layer. Its gold radial light now uses #C69A57 at .12 opacity. Existing reduced-motion, mobile, visibility, and unsupported-GPU fallbacks remain in place. Ornamentation itself is static.

## Validation

- Production build and TypeScript checks passed with `npm run build -- --webpack`.
- Browser checks used CUA, not the Taste inspector script. No automated inspector score is claimed. Requested heritage ornamentation and gradients are intentional exceptions to the Taste house defaults.
- No horizontal overflow at actual widths 358, 375, 389, 769, 1024, 1440, and 1919px. All six category links remain present. The browser clamped the requested 320px viewport to 358px, so 320px remains unverified.
- Desktop and phone category positions/heights match the saved pre-refinement measurements within rounding precision. This is a geometry comparison, not a measured CLS score.
- Desktop artwork loaded successfully. Decorative layers do not intercept pointer input. About was checked at desktop and phone widths.
- Screenshots reviewed: desktop full page/story, tablet full page, phone full page, and About introduction. The header, hero text, product imagery and story copy remain readable; artwork stays faint and section edges blend.
- Before/after desktop images share the 1440px page width and 900px viewport: `heritage-before-desktop.png` and `heritage-desktop-preview.png` (both scaled to 960px for review). The before image uses the saved previous-turn capture. Numeric checks are in `heritage-checks.json`.

The small screenshot sources limit line sharpness when enlarged. Original vector artwork would improve that without changing the composition. No performance metrics, full accessibility audit, cross-browser validation, or 320px pass are claimed. Changes have not been committed or pushed.
