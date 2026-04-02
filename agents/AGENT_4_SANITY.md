# AGENT 4 — SANITY CMS

Read CONTEXT.md. Work in project root `C:\Users\bness\OneDrive\...\V2`.

## Task
Scaffold a Sanity Studio for the dynamic content on envision-it.no. The HTML files remain static — Sanity manages content that is either fetched client-side (JS) or used to regenerate pages.

## Setup
```bash
npm create sanity@latest -- --project-name "envision-it" --dataset production --template clean --output-path ./studio
```

## Schemas to create in `studio/schemas/`

### testimonials.js
Fields: name (string), role (string), company (string), quote (text), segment (string, options: mitt-hjem | mitt-boliglag | mitt-bygg), active (boolean)

### teamMembers.js
Fields: name (string), title (string), email (string), phone (string), bio (text), photo (image with hotspot), order (number)

### serviceModal.js
Fields: slug (slug, options: vedlikeholdsplan|prosjekt|tegning|vedlikeholdskalender|serviceavtaler|3d-scan), segment (string), heading (string), body (array of blocks = portable text), ctaLabel (string)

### siteSettings.js (singleton)
Fields: tagline (string), ogImage (image), phones (array of {label,number}), emails (array of {label,address}), addresses (array of {label,street,postal,city})

## Client-side fetch (add to js/global.js)
```js
const SANITY_PROJECT = 'YOUR_PROJECT_ID'; // replace after init
const SANITY_DATASET = 'production';
const sanityFetch = (query) =>
  fetch(`https://${SANITY_PROJECT}.api.sanity.io/v2024-01-01/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`)
  .then(r => r.json()).then(r => r.result);

// Load testimonials into index.html .testimonials-grid
async function loadTestimonials(segment = null) {
  const filter = segment ? `&& segment == "${segment}"` : '';
  const data = await sanityFetch(`*[_type=="testimonial" && active==true ${filter}]{name,role,company,quote}`);
  const grid = document.querySelector('.testimonials-grid');
  if (!grid || !data?.length) return;
  grid.innerHTML = data.map(t => `
    <div class="testimonial-card reveal">
      <p class="t-quote">"${t.quote}"</p>
      <div class="t-name">${t.name}</div>
      <div class="t-role">${t.role}${t.company ? ', '+t.company : ''}</div>
    </div>`).join('');
}

// Load team into om-oss.html .team-grid
async function loadTeam() {
  const data = await sanityFetch(`*[_type=="teamMember"] | order(order asc) {name,title,"photo":photo.asset->url}`);
  const grid = document.querySelector('.team-grid');
  if (!grid || !data?.length) return;
  grid.innerHTML = data.map(m => `
    <div class="team-card">
      <img src="${m.photo}?w=400&h=400&fit=crop" alt="${m.name}" loading="lazy">
      <div class="team-name">${m.name}</div>
      <div class="team-role">${m.title}</div>
    </div>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.testimonials-grid')) loadTestimonials();
  if (document.querySelector('.team-grid')) loadTeam();
});
```

## README addition
```
## Sanity CMS
Studio: ./studio  →  run `cd studio && npm run dev`
Deploy studio: `npx sanity deploy` → hosted at envision-it.sanity.studio
Project ID: set SANITY_PROJECT in js/global.js after first init
Content types: testimonials, teamMembers, serviceModals, siteSettings
```
