# Caribbean Safety Explorer — Project Memory

## What this is
A single-page Vite + React marketing/education site: **"5 Safest Caribbean Escapes — Summer 2026."**
Profiles the 5 safest Caribbean destinations (Aruba, Cancun, Playa del Carmen, Punta Cana,
Costa Rica) using the "Travel Off Path Traveler Safety Index" (scores 84–98 / 100). Each
destination has a full deep-dive: hero with animated safety score ring, 8-photo gallery
mosaic, "Why It's So Safe" panel, best beaches, must-do experiences, local food, hidden gems,
and fun-facts + travel-stats. Ends with a 4-question "Find Your Perfect Escape" matcher quiz.

## Tech stack
- Vite 6 + React 18
- Vanilla CSS-in-JS (inline `style={{}}` objects) — NO Tailwind
- lucide-react (sidebar collapse chevrons only)
- Fonts: Oxanium + Space Mono (Google Fonts via @import in global.css), Georgia for body copy
- Dark theme only (#030B17 background)

## Key architecture
- `src/data/destinations.js` — the `DESTS` array (all 5 destinations' content). **Content source of truth.**
- `src/data/quiz.js` — the `QUIZ` array (4 questions, weighted scoring map per option).
- `src/utils.js` — `hexToRgb()` helper used by most components for rgba() borders/backgrounds.
- `src/components/` — 18 components. `App` → `Sidebar` + `Hero` + 5×`DestSection` + `Quiz`.
- `src/styles/global.css` — reset, font import, scrollbar, body defaults.

## Images — THE critical detail
All 55 photos are **real local JPEGs** in `public/images/{dest}/` (hero.jpg + gallery-1..10.jpg
per destination). They were downloaded from **Pexels** (free, no API key) via
`download-images.ps1` (kept in repo as provenance/re-download utility).
**Never** use external/hot-linked image URLs in JSX — earlier versions broke because external
URLs were blocked/hallucinated. Gallery uses gallery-1..8; beaches reuse gallery paths.
If an image 404s, re-run download-images.ps1 with a replacement Pexels photo ID.

## Sidebar collapse toggle
`App.jsx` holds `collapsed` state. `Sidebar.jsx` animates width 230px ↔ 56px
(`transition: width 0.28s ease`); `main` animates `margin-left` to match. Collapsed = icon-only
strip with hover tooltips. Toggle button uses lucide-react ChevronLeft/ChevronRight.

## Deploy
- GitHub: `arnoldshapiro-del/caribbean-safety-explorer` (public)
- Netlify: auto-deploy from GitHub `main`. Build `npm run build`, publish `dist`.
- Branch policy: **main only**, no feature branches.

## Status
Initial build complete and verified locally (all 55 images load, toggle works, quiz works,
score rings animate, no console errors). See SESSION_NOTES.md for the build log.
