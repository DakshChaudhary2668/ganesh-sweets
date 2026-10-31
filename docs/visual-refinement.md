# Visual refinement — 31 October 2026

Historical pass: the hero's arch-based composition described here is superseded by [the reference fidelity correction](fidelity-correction.md).

Design DNA was installed from `zanwei/design-dna` through the Skill Installer and applied to the existing Next.js application. The complete applied profile is in `design-dna.json`; the source screenshot measurements are in `reference-colors.json`.

The pass adds a two-line editorial hero, a feathered gold atmosphere, floral linework, a heritage seal, restrained photograph parallax, and GSAP entrances. The main CTA now has an inset arrow disc; the story action has less visual weight. Catalogue cards use 20px corners, inset rounded imagery, 8px pack choices and a shorter WhatsApp action with its product-specific accessible name intact.

The introduction uses the documented `Satin` component from `shaders/react`, clipped to a bow with loops and tails. A woven CSS ribbon provides the horizontal band and unsupported-GPU fallback. The bow loosens, the bands draw outward, and two ivory wrapping panels reveal the page over 2.2 seconds. The hero shader waits for the introduction to finish, keeping one GPU effect active at a time. Reduced-motion users skip the ceremony.

## Checks

- TypeScript, the catalogue integrity test, and production build pass.
- Browser assertions verify immediate skip removes the dialog, restores page interaction, focuses the heading, and leaves at most one canvas. Reload skips the introduction.
- Product enquiry links still include the selected pack size.
- The production catalogue has a computed 20px card radius and no document overflow at 358px and 1280px in the inspected views.
- The production homepage has no overflow at the actual CSS widths recorded in `responsive-checks.json`. The browser preview's zoom and minimum width caused small differences from requested sizes; 320px was not reverified in this pass.
- The inspected production tab emitted no console errors. The shader package emits development-only TypeGPU warnings; no dependency internals were modified.
- Real-device performance and a complete WCAG audit remain unmeasured.

## Palette verification

Design DNA's deterministic whole-image comparison was run and saved to `palette-verification.json`. It reports **FAIL** (mean ΔE 6.98, max ΔE 44.68, coverage drift 0.5431). It compares a four-panel mockup with one homepage capture, and the available live-site photography is darker. The mockup's measured ivory and maroon also differ from the stakeholder's explicit frozen tokens. Those higher-priority tokens remain authoritative; this result is not presented as a fidelity score or a pass.
