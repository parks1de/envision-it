# AGENT 3 — QA, SEO, MOBILE, INTEGRATION

Read CONTEXT.md. Assume Agents 1 & 2 have produced all HTML files. Your job: audit, fix, and finalize.

## Deliverables
1. Patch any file that fails checks below
2. `sitemap.xml`
3. `robots.txt`
4. `README.md` — folder structure + deployment notes

---

## Checklist — run against EVERY HTML file

### SEO
- `<title>` unique per page: "[Page] — Envision-IT"
- `<meta name="description">` ≤155 chars, unique, Norwegian
- `<meta property="og:*">` cards (title, description, image placeholder)
- `<link rel="canonical">`
- Heading hierarchy: exactly one `<h1>`, logical h2→h3 nesting
- All service modal content ALSO present in a `<section>` with `display:none` or visually-hidden — so search engines index it. Alternatively convert modals to anchor-linked sections with proper headings.
- `alt` text on all images (Norwegian, descriptive)
- Schema.org: add `LocalBusiness` JSON-LD to index.html (name, address Oslo+Sogndal, phone, email, url)

### Accessibility
- All interactive elements keyboard-focusable
- `aria-label` on icon-only buttons
- Modal: focus trap, `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- Color contrast: text on --sage bg must pass WCAG AA (white text ✓, check --sage-pale text)
- Skip-to-content link at top of each page

### Mobile (test at 320px, 375px, 720px)
- Nav collapses to hamburger at ≤720px
- Three-card homepage grid → single column on mobile (each card full-width, min-height 60vw)
- Service card grid → 2-col at 720px, 1-col at 480px
- Modal: full-screen on mobile (width:100vw, height:100dvh, border-radius 0)
- Slider in price calculator: touch-friendly (thumb min 44px)
- No horizontal overflow anywhere

### Performance
- All Google Fonts loaded with `display=swap`
- No unused CSS (remove any default styles not applied)
- Images: add `loading="lazy"` and `width`/`height` attributes to all `<img>`

### Consistency
- All pages include nav + footer via identical snippet (or confirm they're identical)
- Active page highlighted in nav
- All "Ta kontakt" CTAs link to /kontakt
- All "Se her" modal triggers use same `openModal()` function from global.js
- Pricing calculator and scroll morph iframe paths point to /functions/ correctly

### Final folder structure to produce
```
/
├── index.html
├── mitt-hjem.html
├── mitt-boliglag.html
├── mitt-bygg.html
├── 3d-scan.html
├── om-oss.html
├── kontakt.html
├── priser.html
├── css/
│   └── global.css
├── components/
│   ├── nav.html
│   └── footer.html
├── js/
│   └── global.js
├── functions/
│   ├── priskalkulatorscan.html  ← already built
│   └── envision-scroll.html    ← already built
├── sitemap.xml
├── robots.txt
└── README.md
```

