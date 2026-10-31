# Reference lighting with Shaders

Uses the already-installed official shader-effects-inc/shaders package (4.0.6), with MeshGradient and RadialGradient in the existing hero canvas. The former Swirl and pointer-driven photograph displacement are removed. The canvas now covers the hero atmosphere instead of hiding beneath the photograph; a broad feathered mask protects the headline and section boundary.

Colors: Warm Glow #FFF5DF, Champagne Haze #F4E5C7, restrained Antique Gold #B99454. Library default palette stops are explicitly cleared. Speed .025, no swirl, low drift. Existing CSS lighting remains beneath the canvas; the canvas is hidden until ready and when unavailable. Mobile and reduced motion retain static CSS. Offscreen canvas is unmounted. Intro and hero canvases remain sequential.

Verified: production build/TypeScript pass (`npm run build -- --webpack`); desktop canvas onReady fires, no console errors; one hero canvas visible, zero offscreen and on mobile; desktop layout bounds unchanged within 0.5px, no mobile overflow. Background-only Design DNA color check passes (mean ΔE 1.08). Screenshot: shader-desktop.png. Whole-page photo fidelity is not implied by this scoped lighting check. Cross-device GPU performance was not profiled.

Source: https://github.com/shader-effects-inc/shaders
