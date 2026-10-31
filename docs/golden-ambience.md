# Golden ambience refinement

Static CSS radial illumination surrounds the existing hero photograph, strongest toward the upper right, with a quieter lower-left light. Mobile moves the light toward the stacked photo. Frozen ivory #F8F5EE is restored; maroon, gold and text tokens are preserved. Warm Glow, Champagne Haze and Soft Cream are local atmospheric colors.

Intersected horizontal and vertical image masks replace the opaque ivory edge overlay. A 4% warm radial wash softens the upper image edge without image filters. Hero and category backgrounds meet at the same ivory color; the existing divider is softened. Signature Sweets retains its beige background and neutral cards; the optional highlight was unnecessary.

No markup, layout, typography, imagery, dependencies, shader instances or JavaScript animations were added. Existing hero aura selectors were scoped to their existing hero parent for compatibility with Next's alternate compiler.

## Validation

- Before/after screenshots: desktop 1280 × 800, tablet 769 × 900, mobile 389 × 843; saved as golden-before/after-{size}.png.
- Header, headline, image, category heading/card and signature section bounds match within 0.5 CSS pixels at all three sizes; no horizontal overflow. These geometry comparisons check that the refinement introduced no displacement, rather than claiming a measured runtime CLS score.
- Visual inspection: text remains clear, photograph detail stays readable, and transitions have no new hard color edge.
- Contrast: dark text colors exceed 4.5:1 against a conservative composited lighting bound; see golden-contrast.json.
- Design DNA verification of the clear hero background against the supplied reference background passes, mean ΔE 1.08. This is scoped to atmospheric background color, not whole-image fidelity.
- Production build and TypeScript pass using `npm run build -- --webpack`. Default Turbopack could not start its local CSS worker in this environment.
- Functional journeys were not repeated for this CSS-only refinement.
