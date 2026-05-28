# Session Notes — Caribbean Safety Explorer

## Session — 2026-05-27
**What we did:** Full initial build of the "5 Safest Caribbean Escapes — Summer 2026" site
from scratch as a Vite + React app.

- Scaffolded Vite + React 18 (cleaned out the stray TypeScript template the CLI produced).
- Downloaded **55 real Caribbean photos** from Pexels into `public/images/{dest}/`
  (hero + gallery-1..10 per destination). All verified > 50 KB; total ~17.9 MB.
  This was the critical fix — prior attempts failed on external/hot-linked image URLs.
- Built `src/data/destinations.js` (DESTS) and `src/data/quiz.js` (QUIZ) — content copied
  verbatim from the reference file, with every image reference swapped to local `/images/...` paths.
- Split the monolithic reference into 18 components in `src/components/`, replacing the old
  inline-SVG `<Scene>` system with real `<img loading="lazy">` tags.
- Wired the sidebar collapse toggle (230px ↔ 56px, lucide-react chevrons, smooth transitions).
- Verified locally on the dev server: 55/55 images load (0 broken), toggle collapses & expands
  smoothly, nav scroll + active highlighting work, score rings animate (Aruba 0→98,
  Costa Rica 0→84), quiz walks all 4 questions and returns a correct match, **zero console errors**.
- Production build succeeds (203 KB JS → 64 KB gzipped, 1597 modules).

**What's working:** Everything in the spec — hero, 5 destination deep-dives (7 sections each),
photo gallery mosaic, safety score rings, quiz matcher, collapsible sidebar.

**What's next:** Push to GitHub `arnoldshapiro-del/caribbean-safety-explorer`, connect Netlify
auto-deploy, verify the live site.

**Important decisions:**
- Images sourced from Pexels (free, no API key) and stored locally — never hot-linked.
- Kept `download-images.ps1` in the repo as image provenance + a re-download utility.
- Removed the reference's inline-SVG Scene illustrations entirely in favor of real photos.
- Flag emojis render as 2-letter country codes on Windows/Chrome (platform limitation, not a bug).

**Problems encountered:**
- `npm create vite` dropped the `--template react` arg (npm parsing), producing a vanilla TS
  template. Fixed by rewriting package.json + entry files for React and reinstalling.
- One Pexels photo ID (aruba gallery-9) 404'd; swapped in an alternate ID successfully.
