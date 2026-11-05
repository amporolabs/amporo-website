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
- **Pure Vanilla Stack**: Pure semantic HTML5, modern CSS3 with custom properties, and minimal vanilla JavaScript (`site.js`). No external fonts or third-party trackers (100% GDPR compliant).

## Files
- `index.html`: Landing page with hero and core principles.
- `imprint.html`: Legal provider identification pursuant to § 5 DDG.
- `privacy.html`: Privacy policy.
- `styles.css`: Complete responsive design system and theme tokens.
- `site.js`: Theme switching and dynamic footer year.
- `logo.svg`, `logo-mark.svg`, `favicon.svg`: Vector brand assets.
- `contact-*.png`: Dual-theme high-DPI anti-scraping images.

## Development
Open `index.html` directly in any web browser, or serve with a static server (e.g. `python3 -m http.server 8000`).
