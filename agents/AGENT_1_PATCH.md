# AGENT 1 — PATCH

Read CONTEXT.md. Patch only the files listed. No full rewrites.

## 1. css/global.css — typography upgrade
Add to Google Fonts import: `+family=Barlow+Condensed:wght@300;400;500;600&family=DM+Mono:wght@300;400`
Add CSS vars:
```css
--font-tech: 'Barlow Condensed', sans-serif;
--font-mono: 'DM Mono', monospace;
```
Apply `--font-tech` to: `.price-main`, `.scan-label`, `.stat-num`, `[data-tech]`, hero eyebrow spans, service card titles on 3d-scan.html.
Apply `--font-mono` to: price breakdown values, spec/stat numbers, step counters.
Cormorant Garamond stays on all segment page headings and om-oss. Jost stays on body.

## 2. css/global.css — pointcloud section
Add class `.pointcloud-stage`:
```css
.pointcloud-stage {
  background: var(--sage); /* default — JS toggles via data-bg */
  transition: background 1.2s ease;
}
.pointcloud-stage[data-bg="dark"]  { background: #0d0e0b; }
.pointcloud-stage[data-bg="sage"]  { background: var(--sage); }
.pointcloud-stage[data-bg="cream"] { background: var(--cream-dark); }
```
The pointcloud PNG has transparent background — dramatic effect achieved purely by bg color change as scroll progresses.

## 3. functions/envision-scroll.html — image paths + bg drama
- Replace solid image src: `./assets/ENVISION-IT_HUS.png`
- Replace pointcloud image src: `./assets/pointcloud001.png`
- On the `.image-side` div, add `class="pointcloud-stage"` and `data-bg="sage"`
- In the scroll JS, add bg transition alongside morph:
```js
// as morphT progresses 0→1, shift background
if (morphT < 0.1) stage.dataset.bg = 'sage';
else if (morphT < 0.5) stage.dataset.bg = 'dark';
else stage.dataset.bg = 'dark'; // stays dark once scanning
```
- Add a subtle pulsing blue glow CSS animation on `.img-cloud` when fully visible:
```css
@keyframes cloudGlow {
  0%,100% { filter: drop-shadow(0 0 8px rgba(100,180,255,0.3)); }
  50%      { filter: drop-shadow(0 0 24px rgba(100,180,255,0.7)); }
}
.img-cloud.active { animation: cloudGlow 3s ease infinite; }
```
Add `.active` class to `.img-cloud` when `morphT >= 0.98` in JS.

## 4. components/nav.html — logos
- Load all three SVGs: `assets/Envision-it kvit.svg` (white, for sage bg), `assets/Envision-it svart.svg` (dark, for light bg).
- In nav (sage bg): use `<img src="./assets/Envision-it kvit.svg" alt="Envision-IT" height="28">`
- Remove text-only logo fallback.
- In footer (also sage bg): same white SVG.
- On om-oss hero (cream bg): use dark SVG variant via an `<img>` wherever logo appears in page body.

## 5. index.html — strategic price calculator placement
Add a new section BETWEEN the services strip and the 3D-scan teaser:
```html
<section class="section-alt" style="padding:0">
  <div class="section-header reveal" style="padding:3rem 2.5rem 1.5rem">
    <span class="eyebrow">Priser · 3D-Skanning</span>
    <h2>Hva vil det koste <em>deg</em>?</h2>
    <p>Juster parameterne og få en prisindikasjon med én gang — uforpliktende.</p>
  </div>
  <iframe src="./functions/priskalkulatorscan.html"
    style="width:100%;border:none;min-height:720px"
    title="Priskalkulator 3D-scan"
    id="calcFrame">
  </iframe>
</section>
```
Also keep the link to /priser.html as "full pricing page" CTA below the iframe.

## 6. om-oss.html — real team photos
Replace placeholder team cards with:
```html
<div class="team-card">
  <img src="./assets/bjarte.jpg" alt="Bjarte Nysæter Svensen" loading="lazy">
  <div class="team-name">Bjarte Nysæter Svensen</div>
  <div class="team-role">Daglig leder</div>
</div>
<div class="team-card">
  <img src="./assets/endre.jpg" alt="Endre [LAST NAME]" loading="lazy">
  <div class="team-name">Endre [LAST NAME]</div>
  <div class="team-role">Daglig Markedsansvarlig</div>
</div>
```
Add to global.css:
```css
.team-card img { width:100%; aspect-ratio:1; object-fit:cover; border-radius:50%; margin-bottom:1rem; filter:grayscale(20%); transition:filter 0.3s; }
.team-card img:hover { filter:grayscale(0%); }
.team-name { font-family:var(--font-display); font-size:1.2rem; }
.team-role { font-size:0.75rem; letter-spacing:0.15em; text-transform:uppercase; color:var(--sage-light); }
```

## 7. Add vercel.json to project root
```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "rewrites": [
    { "source": "/mitt-hjem",    "destination": "/mitt-hjem.html" },
    { "source": "/mitt-boliglag","destination": "/mitt-boliglag.html" },
    { "source": "/mitt-bygg",    "destination": "/mitt-bygg.html" },
    { "source": "/3d-scan",      "destination": "/3d-scan.html" },
    { "source": "/om-oss",       "destination": "/om-oss.html" },
    { "source": "/kontakt",      "destination": "/kontakt.html" },
    { "source": "/priser",       "destination": "/priser.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options",        "value": "SAMEORIGIN" },
        { "key": "Referrer-Policy",        "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

## 8. kontakt.html — Resend integration
Replace the form's submit handler with:
```js
formEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(Object.fromEntries(new FormData(formEl)))
  });
  if (res.ok) showThankYou();
  else showError();
});
```
Create `api/contact.js` (Vercel serverless function):
```js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { fornavn, etternavn, epost, melding, rolle } = req.body;
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'nettside@envision-it.no',
      to:   'hei@envision-it.no',
      subject: `Ny henvendelse fra ${fornavn} ${etternavn} (${rolle})`,
      html: `<p><b>Fra:</b> ${fornavn} ${etternavn}<br>
             <b>E-post:</b> ${epost}<br>
             <b>Rolle:</b> ${rolle}</p>
             <p>${melding}</p>`
    })
  });
  res.status(200).json({ok:true});
}
```
Add to README: set `RESEND_API_KEY` env var in Vercel dashboard. Verify sending domain in Resend.
