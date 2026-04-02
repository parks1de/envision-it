# AGENT 1 — DESIGN SYSTEM + HOMEPAGE + SHARED COMPONENTS

Read CONTEXT.md fully before writing a single line.

## Your deliverables
1. `css/global.css` — complete design system
2. `components/nav.html` — sticky nav snippet
3. `components/footer.html` — footer snippet
4. `index.html` — homepage
5. `3d-scan.html` — 3D-scan dedicated page
6. `priser.html` — pricing page

---

## global.css requirements
- All CSS variables from CONTEXT.md palette
- Google Fonts: Cormorant Garamond + Jost (import at top)
- Reset, base typography, utility classes
- `.card`, `.chip`, `.btn-outline`, `.btn-solid`, `.modal-overlay`, `.modal-box`
- Responsive grid helpers: `.split-60-40`, `.split-50-50`, `.three-col`
- Scroll-reveal: `.reveal` (opacity 0 + translateY 24px → triggered by IntersectionObserver in global.js)
- Mobile breakpoints: stack all grids at 720px

---

## global.js requirements (inline in a `<script>` block or separate file)
- IntersectionObserver for `.reveal` elements
- Modal open/close: `openModal(id)` / `closeModal()`, ESC key closes
- Active nav link highlight based on current path
- Smooth scroll for anchor links

---

## nav.html
Sticky top bar, sage background.
Left: ENVISION-IT logo text + tagline italic.
Right: links → Om oss | Kontakt oss | (dropdown or separate links) Mitt Hjem / Mitt Boliglag / Mitt Bygg
Mobile: hamburger → slide-in drawer.

---

## footer.html
Sage background. Four columns:
1. Logo + tagline
2. Org/tel/email
3. Oslo address
4. Sogndal address
Bottom: © year Envision-IT

---

## index.html — HOMEPAGE

### Above the fold: FULL VIEWPORT HERO
Three cards side by side, each card = full clickable panel.
Each card has:
- Scripted italic heading (Cormorant Garamond): "Mitt Hjem", "Mitt Boliglag", "Mitt Bygg"
- Subtitle line (from CONTEXT.md segments)
- Relevant AI-generated building image (use a placeholder div with sage background + building SVG icon if no image available)
- Hover: slight scale + overlay darkens + arrow appears
- Click: navigates to segment page

NO nav links needed above this — the three cards ARE the navigation. Nav still present for returning visitors.

### Below hero: WHY ENVISION-IT (3 columns, reveal on scroll)
Icons (inline SVG) + short heading + 2-line text:
- "Ett system for alt" — samle, dele, gjenbruke
- "Fagfolk i ryggen" — byggherrerepresentant, vedlikeholdsplaner, tegninger
- "Åpenhet satt i system" — Mitt Prosjekt, fremdrift, kostnad, dokumentasjon

### Social proof placeholder section
Sage background. Heading: "Hva sier kundene våre?". 
Three testimonial card placeholders (name, role, 2-line quote). Style them well even as placeholders — note [REPLACE WITH REAL TESTIMONIALS] in HTML comment.

### 3D-Scan teaser (full-width, cream-dark background)
Left: heading "Se bygget slik det faktisk er" + 3 bullet benefits + CTA → /3d-scan
Right: the scroll morph section — embed `/functions/envision-scroll.html` in an iframe, OR recreate the solid→pointcloud crossfade inline (simpler: just show the pointcloud image with a subtle animation).
Note in comment: [IMAGES: /functions/ENVISION-IT_HUS.png and pointcloud image — update path when available]

---

## 3d-scan.html
Full dedicated page. Reuse the scroll morph from `/functions/envision-scroll.html` via iframe or inline.
Sections:
1. Hero: "3D-Scan — se bygget slik det faktisk er" + scroll hint
2. The scroll morph section (sticky split: text panels left, image morphs right) — copy pattern from functions file
3. Use cases grid (3 cols): Kvalitetssikring av tegninger | Prosjektplanlegging | Som bygget-dokumentasjon
4. Technology: "NAVVIS VLX" — brief description, specs feel
5. CTA section → /priser (links to calculator)

---

## priser.html
Embed `/functions/priskalkulatorscan.html` via iframe full-width, or inline the calculator directly.
Add page header: "Priser og kalkulator" with brief intro.
Below calculator: "Usikker på hva du trenger? Ta kontakt — vi hjelper deg å velge riktig."
