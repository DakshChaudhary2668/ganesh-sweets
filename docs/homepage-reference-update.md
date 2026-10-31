# Homepage reference update

## Direction and content

The explicit stakeholder composition is the direction; no random direction or seed was drawn. Its gradients, motifs, eyebrow labels, category cards and dividers override conflicting Taste house rules. No newsletter is included, per the stakeholder reply. The existing pack selector and prefilled WhatsApp enquiry are the live interaction.

Subject inventory: Ganesh Sweets; Vijayawada; founded 1995; Bhagat Singh Road; Srinagar / Satyaranayana Puram; Sri Seetharama Swamy Temple landmark; traditional mithai; home foods; festival gift-box enquiries; the supplied maroon sign and striped storefront awning; existing 75-product catalogue; verified WhatsApp number.

Idea: Ganesh Sweets’ festive mithai tray becomes the opening invitation, followed by its real storefront as the proof of place.

Page argument and copy: legacy/hero → browse six categories → choose a signature sweet and pack → festival collection → storefront and story → reasons to choose → verified contact information. The supplied hero sentence and section headings are transcribed. Mockup prices and phone/email details do not replace business data. Existing featured products are Kaju Burfi ₹1000/kg, Motichur Laddu ₹320/kg, Mysore Pak ₹240/kg, Gulab Jamun ₹400/kg. Their catalogue names are preserved. Dry Sweets maps to Premium Sweets; Mithai maps to Traditional Sweets; Savouries maps to Hot Snacks; Gift Boxes links to services. No unsupported social accounts or newsletter backend is invented.

## Assets

All new artwork comes from stakeholder files, with no third-party photo search or generated replacement:

- `references /homepage-reference.png` is the supplied 1024×1536 screenshot.
- Hero: x470 y64 width554 height267, saved losslessly as `public/images/reference-hero.webp`. Decoded raw pixels were asserted equal to the original crop. It is a crop of a flattened reference, not a recoverable original full-resolution photograph; large display sharpness is limited by that source.
- Festival banner artwork: x490 y946 width514 height164; live text is separately implemented.
- Category artwork: x76,232,376,523,669,820; y449 width128 height94. Labels and links remain live HTML.
- Motichur artwork: x305 y682 width203 height103; supplied reference illustration, mapped to the existing catalogue item.
- Real shop: `references /storefront.png`, resized to 1400px WebP without changing the image content; used in Our Story.
- Other signature photos remain the existing source-site assets. No crop includes the reference’s price or CTA text.

## Validation and limits

Production build and TypeScript pass with Next’s supported webpack compiler. Catalogue test passes. Browser checks at actual CSS widths1440,769,389: no horizontal overflow, no missing images, no main headings over two lines. Final full-page screenshots were visually reviewed at all three widths, with phone sheets for the full content. Mobile menu opens/closes. Kaju Burfi500g changes the WhatsApp destination. Home Foods opens a filtered catalogue with15 products. No WhatsApp message was sent. Browser reported no errors.

Taste source lint was run: its style-only failures (labels, gradients, shadows and rules) are expected conflicts with the explicit reference and were retained. Its independent browser inspector was not run because browser interaction in this environment must use CUA; the responsive checks above were performed through CUA instead. No zero-FAIL inspector result is claimed.

Design DNA whole-page palette verification remains FAIL (mean ΔE6.24, max20.22): the real storefront, source-site signature photographs, preserved brand maroon and previously approved stronger gold ambience differ from mockup pixels. The hero crop itself is verified pixel-identical. This task does not claim a pixel-identical whole page.

ROUND 1
Seen in one second: a festive brass tray of mithai with the Ganesh Sweets legacy headline.
Idea (one sentence): the festive tray invites; the real shop establishes Vijayawada provenance.
Live thing: choose a pack and open its prefilled WhatsApp enquiry.
Layout words by section: hero=split / categories=compact grid / signatures=product grid / festive=wide image banner / story=storefront split / why=proof row / footer=contact columns.
Scores: design7.5 · usability8 · creativity6.5 · content8 → overall7.5 before house-style caps.
Caps applied: user-required gradients, labels and dividers retain the skill’s6.5 house-style cap; this is a reference-conformance choice, not an award-level claim.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. Hero source resolution limits detail at large desktop size (reference-home-desktop.png); obtain the original photograph when available. Exact requested crop is retained.
2. Signature imagery differs in lighting (reference-home-desktop.png); real catalogue photos take precedence over mockup product depictions.
3. Phone product grid is deliberately one column for readable prices and controls (reference-home-mobile-1/2.png); it is longer than the desktop composition but has no clipped controls.

No new dependencies, generated photos, subscription feature, deployment, commit or push in this change.
