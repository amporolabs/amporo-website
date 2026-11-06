# Amporo Labs GmbH Website

A modern, minimal, high-craft website for Amporo Labs GmbH with a landing page, imprint, and privacy policy.

## Features
- **Modern Minimalist Visual System**: Clean typography, subtle elevation transitions, and zero framework bloat.
- **Brand Assets**: Custom vector SVG logo mark (`logo-mark.svg`), horizontal lockup (`logo.svg`), and favicon (`favicon.svg`) derived from the original shelter/portal architectural emblem.
- **Dual Theme Support (Light / Dark)**:
  - Default warm linen/cream palette with slate steel blue accent and warm sand framing.
  - Deep charcoal dark mode.
  - Automatic synchronization with `prefers-color-scheme` plus manual toggle persisted in `localStorage`.
- **Anti-Scraping Protection**: Sensitive contact data (postal address and direct email) are rendered as crisp, high-DPI raster images to prevent crawler and email harvester scraping while maintaining full accessibility.
- **Multi-Language Localization (EN / DE)**:
  - English default at root (`/`) with clean German subdirectory routing (`/de/`).
  - Segmented header switch (`EN · DE`) with 1:1 context preservation between corresponding pages.
  - High-performance, crawler-friendly SEO with bidirectional `hreflang` metadata and zero client-side layout shift.
  - Discreet, non-intrusive German suggestion toast for first-time German locale visitors on the English homepage.
  - Smart return persistence in `localStorage` without requiring a cookie consent banner (100% compliant with German TDDDG § 25 Abs. 2 Nr. 2 and GDPR).
- **Pure Vanilla Stack**: Pure semantic HTML5, modern CSS3 with custom properties, and minimal vanilla JavaScript (`site.js`). No external fonts or third-party trackers (100% GDPR compliant).

## Files
- `index.html`: English landing page with hero and core principles.
- `imprint.html`: English legal provider identification pursuant to § 5 DDG.
- `privacy.html`: English privacy policy (GDPR).
- `de/index.html`: German landing page.
- `de/impressum.html`: German legal provider identification pursuant to § 5 DDG.
- `styles.css`: Complete responsive design system, theme tokens, and localization styles.
- `site.js`: Theme switching, language persistence, visitor hint toast, and dynamic footer year.
- `logo.svg`, `logo-mark.svg`, `favicon.svg`: Vector brand assets.
- `contact-*.png`: Dual-theme high-DPI anti-scraping images.

## Development
Open `index.html` directly in any web browser, or serve with a static server (e.g. `python3 -m http.server 8000`).
