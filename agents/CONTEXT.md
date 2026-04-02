# ENVISION-IT — FULL SITE CONTEXT

## CRITICAL DIRECTIVE
Build a **completely new site**. Do NOT replicate the existing envision-it.no design, layout, or structure. The existing site is the baseline to outperform, not the template to copy. Use all content/copy, but every design decision — layout, typography, spacing, motion, hierarchy — must be original and superior.

## Paths (Windows / Claude Code working context)
- **Project root (write all output here):** `C:\Users\bness\OneDrive\02_PARKSIDE\01_RELASJONER\ENVISION-IT\04_PROSJEKT\NETTSIDE\V2`
- **Assets/context material:** `…\V2\assets\` — READ ALL TEXT FILES HERE before starting. May contain updated copy, images, brand notes.
- **Pre-built functions:** `…\V2\functions\` — `priskalkulatorscan.html` + `envision-scroll.html`. Reference as relative path `./functions/filename.html`. Do not rewrite these files.

## Company
- Norwegian building management consultancy
- Tagline: "Vi bryr oss om bygg – fordi vi bryr oss om folk"
- Org: 826 455 152 | Tel: 971 07 972 | hei@envision-it.no
- Oslo: Gjerdrums vei 5, 0484 Oslo
- Sogndal: Kvernhusbakken 7, 6854 Kaupanger

## Brand palette
--sage: #6b7562 | --sage-light: #8d9680 | --sage-pale: #c8ccbf
--cream: #f4f2ed | --cream-dark: #eae7e0 | --dark: #1e1f1a
Fonts: Cormorant Garamond (headings, italic accent) + Jost 200-500 (body)

## Three customer segments (separate pages, same nav)
1. **Mitt Hjem** – privatpersoner (leilighet, hus, hytte)
2. **Mitt Boliglag** – styret i borettslag, sameie, aksjelag
3. **Mitt Bygg** – bedrifter og offentlig virksomhet

## Services (modal cards on each segment page)
VEDLIKEHOLDSPLAN – dynamic 10-year cost-calculated maintenance plan
PROSJEKT – byggherrerepresentant + faglig rådgivning, "Mitt Prosjekt" toolbox
TEGNING – 2D/3D drawings using professional CAD, deliverable in DWG/PDF
VEDLIKEHOLDSKALENDER – monthly task calendar, document what's done
SERVICEAVTALER – regular follow-up, keeps function/comfort up, costs down
3D-SCAN – NAVVIS VLX scanner, millimeter precision, digital twin

## 3D-Scan pricing (from spreadsheet)
| Product            | Min kr | kr/m² | Notes                          |
|--------------------|--------|-------|--------------------------------|
| Skann til visning  | 3 000  | 20    | >1500m²: sub 0.4kr/m²/mnd     |
| Skann til tegning 2D | –    | 25    | min area 500m²                 |
| Skann til tegning 3D – Enebolig | 6 000 | 30 |                    |
| Skann til tegning 3D – Leilighet/Kontor/Industri | 4 000 | 30 | |

Total area = kvm_per_floor × floors. Surcharges: skråtak +1500, kjeller +50% area @half rate, fasade +2000, haste +25%.

## Key copy themes
- "Lange linjer i et kortsiktig perspektiv" — vedlikeholdsplanen
- "Åpenhet og ærlighet satt i system" — Mitt Prosjekt
- "Sammen for 2+2=5" — prosjektsamarbeid
- "Frem og tilbake er ikke like langt – det er dobbelt så langt"
- "Det blir ikke dyrere av å vite at det blir dyrt"
- "Ett bilde sier mer enn tusen ord – vår scan sier mer enn et bilde"
- "De virkelige verdiene ligger som regel bak fasaden"

## Om oss content pillars
Bakgrunn: tømrer→prosjektleder→forvaltning→jus→privat huseier = full-spectrum insight
Filosofi: Ærlighet varer lengst | Leverandøren skal tjene penger | Riktig første gang
Verdisyn: Folk og fellesskap | Respekt/redelighet | Tillit/trygghet | Mangfold

## Existing functions (in /functions folder)
- `priskalkulatorscan.html` — 3D-scan price calculator (slider kvm, floors, product type, surcharges)
- `envision-scroll.html` — scroll-driven solid→pointcloud house morph with scan-line

## Site problems to fix (from audit)
1. No clear homepage — lands on sub-page, not a selector
2. No CTA above fold
3. Contact form has no "what happens next"
4. Service modals too thin — become real pages or expand content
5. No social proof anywhere
6. 3D-scan undersold — deserves hero treatment
7. All services in JS modals = zero SEO
8. No pricing signals = friction
9. No team faces = low trust
10. Mobile grid likely breaks

## Site structure
/                → homepage: 3-card hero (Mitt Hjem / Mitt Boliglag / Mitt Bygg)
/mitt-hjem       → segment page: private homeowners
/mitt-boliglag   → segment page: housing cooperative boards
/mitt-bygg       → segment page: business/public
/3d-scan         → dedicated 3D-scan page (uses scroll morph function)
/om-oss          → about page
/kontakt         → contact form with "hva skjer videre" 3-step
/priser          → embeds pricing calculator function
