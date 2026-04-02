# Envision-IT — Nettside V2

Norsk byggeforvaltningskonsulent. Statisk HTML/CSS/JS-side uten byggeverktøy eller rammeverk.

## Mappestruktur

```
/
├── index.html            # Hjem — segmentvelger (Mitt Hjem / Mitt Boliglag / Mitt Bygg)
├── mitt-hjem.html        # Segment: privatpersoner
├── mitt-boliglag.html    # Segment: borettslag, sameier, aksjelag
├── mitt-bygg.html        # Segment: bedrifter og offentlig virksomhet
├── 3d-scan.html          # Dedikert 3D-scan-side (bruker scroll morph-funksjon)
├── om-oss.html           # Om selskapet
├── kontakt.html          # Kontaktskjema med "hva skjer videre"-steg
├── priser.html           # Priskalkulator for 3D-scanning
├── sitemap.xml           # XML-sitemap for søkemotorer
├── robots.txt            # Crawl-direktiver
├── css/
│   └── global.css        # Globalt designsystem: variabler, reset, typografi, nav, footer
├── js/
│   └── global.js         # Felles JS: modal, reveal-animasjon, hamburger-meny
├── components/
│   ├── nav.html          # Nav-referanse (inlined i hver HTML-fil)
│   └── footer.html       # Footer-referanse (inlined i hver HTML-fil)
├── functions/
│   ├── priskalkulatorscan.html   # 3D-scan priskalkulator (ikke rediger)
│   └── envision-scroll.html      # Scroll-drevet punktsky-animasjon (ikke rediger)
└── assets/
    └── envision-it website prompt.txt
```

## Teknologi

- Ren HTML5 / CSS3 / vanilla JS — ingen byggeprosess
- Google Fonts: Cormorant Garamond (serif, headings) + Jost (sans, body) via `@import` i `global.css`
- Fargepalett: `--sage` `--cream` `--dark` (se CSS-variabler i `global.css`)
- Responsiv: hamburger-meny ved ≤860px, mobilgrid ned til 320px

## Utrulling

Siden er statisk og kan hostes på Netlify, Vercel, GitHub Pages eller standard webserver.

### Netlify (anbefalt)

1. Opprett ny site fra Git-repo (eller dra-og-slipp V2-mappen)
2. Build command: _(tom — ingen byggeprosess)_
3. Publish directory: `.` (rot)
4. Sett custom domain til `envision-it.no` og aktiver HTTPS

### Vercel

```bash
vercel --prod
```

### Manuell FTP/SFTP

Last opp hele V2-mappen til webserverens `public_html` eller `www`-mappe.

## Domene og URL-struktur

| Side            | URL                              |
|-----------------|----------------------------------|
| Hjem            | https://envision-it.no/          |
| Mitt Hjem       | https://envision-it.no/mitt-hjem |
| Mitt Boliglag   | https://envision-it.no/mitt-boliglag |
| Mitt Bygg       | https://envision-it.no/mitt-bygg |
| 3D-Scan         | https://envision-it.no/3d-scan   |
| Priser          | https://envision-it.no/priser    |
| Om oss          | https://envision-it.no/om-oss    |
| Kontakt         | https://envision-it.no/kontakt   |

> Canonical-lenker og sitemap bruker `https://envision-it.no/`. Oppdater disse hvis domenet endres.

## Kontaktskjema

`kontakt.html` sender til `/api/contact` (Vercel serverless function i `api/contact.js`) via Resend.

### Oppsett

1. Opprett konto på [resend.com](https://resend.com) og verifiser sending-domenet `envision-it.no`
2. Sett miljøvariabelen `RESEND_API_KEY` i Vercel-dashboardet (Settings → Environment Variables)
3. Deploy — skjemaet sender e-post til `hei@envision-it.no` ved innsending

## Sanity CMS

Studio: ./studio  →  run `cd studio && npm run dev`
Deploy studio: `npx sanity deploy` → hosted at envision-it.sanity.studio
Project ID: set SANITY_PROJECT in js/global.js after first init
Content types: testimonials, teamMembers, serviceModals, siteSettings

## Vedlikehold

- Nav og footer er inlined i hver HTML-fil. Rediger `components/nav.html` og `components/footer.html` som referanse, og kopier endringer manuelt til alle sider — eller sett opp SSI/templating.
- Ikke rediger filene i `/functions/` direkte.
- OG-bilde: legg til en 1200×630px fil på `assets/og-image.jpg` for korrekte sosiale forhåndsvisninger.
- Oppdater `<lastmod>`-datoer i `sitemap.xml` ved større innholdsendringer.
