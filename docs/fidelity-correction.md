# Reference fidelity correction — 31 October 2026

The supplied homepage screenshot, saved as `references /reference.png`, is the primary visual reference. `references /Design Ref.png` provides the surrounding approved design context. This correction supersedes the earlier arch-based interpretation.

## Corrected

- Restored **“A legacy of sweetness since 1995”** with the approved two-line desktop arrangement.
- Replaced the narrow, oversized display treatment with a broader Georgia serif at approximately **53px** in the inspected 1280px viewport.
- Removed the hero arch, image border, floating date seal and detached photo caption.
- Integrated the existing source-site photograph into the ivory page with feathered edges, preserving the shader beneath it.
- Restored a compact four-item icon row and centered **Shop by Category** section directly after the hero.
- Added shallow pavilion silhouettes to the category cards. All six verified categories now have relevant source-site images, including Ariselu and Murukulu fetched from the live site.
- Aligned the compact header with the homepage content and added the reference's catalogue search access.
- Preserved the ribbon intro, reduced-motion behavior, routes, catalogue data, category filters, WhatsApp messages and mobile navigation.

## Comparison and checks

`fidelity-comparison.png` places the supplied reference and the corrected production page at the same normalized width. In the **1280 × 800 CSS-pixel** production view, the category section begins around **507px** and ends around **768px**, so the complete six-card row is visible. The hero image's computed border radius is **0px**.

The production build and TypeScript checks pass, as does the 75-product catalogue integrity test. Browser checks verified mobile navigation, Gulab Jamun search, a selected 500g WhatsApp enquiry, the 15-item Home Foods category route, and the header search anchor positioned below the sticky header. The inspected production session had no console errors or warnings.

No document overflow was observed at actual CSS widths **358, 389, 769, 900, 1024, 1280 and 1440px**; measurements are saved in `fidelity-responsive.json`. The preview browser's zoom/minimum window size prevented an exact 320px retest. Real-device performance and a full accessibility audit remain unmeasured.

Design DNA's palette measurement and verification were rerun against the supplied homepage reference. `fidelity-palette-verification.json` reports **FAIL**: mean ΔE **6.57**, max ΔE **42.10**, coverage drift **0.5421**. This remains a visible photography/palette-coverage difference, and is not claimed as a fidelity pass. Explicit frozen palette tokens were preserved.

## Remaining image requirement

The available live-site kaju photograph is square, dark and tightly framed. Blending and placement correct its presentation, but cannot reproduce the bright photograph in the approved mockup.

For the complete visual match, supply a genuine high-resolution landscape photograph of the offered kaju sweets on a brass plate in a bright warm-ivory setting, with the sweets positioned toward the right and natural negative space toward the left. A wide 16:9 or 2:1 composition will fit the approved hero. No generated product representation has been introduced.
