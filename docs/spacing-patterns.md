# Spacing and gold patterns

Focused refinement of the approved homepage. Content, photographs, typography and interactions are preserved. Equal top/bottom section padding uses clamp(40px,4vw,64px), becoming40px on narrow screens. Shared section and footer gutters now align. The hero and festive banner retain their media composition with corresponding interior spacing.

Category images have an intentional8px frame (6px on narrow screens),44px minimum label rows, and individually masked pavilion tops. A modest image crop removes embedded pale edges from the extracted reference artwork instead of leaving an uneven white fringe. Cards keep a consistent neutral surface and16px outer corners.

Gold patterns reuse the existing HeritageMotif geometry in a small SVG asset, colored with the existing #B99454 token. They repeat at section edges through categories, signatures, story, proof and footer. The existing hero patterns and festival artwork remain. Decorations are non-interactive and sit behind content; no shaders, JavaScript or image dependencies were added.

Production build/TypeScript and diff whitespace check pass. CUA visual checks at1440,769,389 CSS pixels show no horizontal overflow. Measured category/signature/story/proof top and bottom padding match at each viewport. Final desktop, tablet and phone screenshots were reviewed. Functional journeys were not rerun for this presentation-only change.

The explicit reference requires ornaments, gradients and cards, overriding Taste’s conflicting house rules; no random direction was drawn. Existing Design DNA color measurements remain applicable because this pass adds no palette colors. Whole-page palette fidelity limitations from homepage-reference-update.md remain.

ROUND 1
Seen in one second: festive mithai followed by a clearly separated category collection.
Idea (one sentence): heritage linework frames the real catalogue and storefront without competing with them.
Live thing: existing pack-size WhatsApp enquiry.
Layout words by section: hero=split / categories=grid / signatures=grid / festive=banner / story=split / why=proof row / footer=columns.
Scores: design7.5 · usability8 · creativity6.5 · content8 → overall7.5 before the reference-required6.5 house-style cap.
Caps applied: reference-required motifs, gradients, labels and dividers.
Top three findings:
1. Mixed section padding was corrected with a shared spacing scale (spacing-patterns-desktop.png).
2. Uneven category image fringes were corrected with consistent inset frames and cropped artwork (category-padding-mobile.png).
3. Footer content gutters were aligned so edge linework stays outside the text frame (spacing-patterns-desktop.png).

No commit, push or deployment was performed.
