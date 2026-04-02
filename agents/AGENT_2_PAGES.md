# AGENT 2 — SEGMENT PAGES + OM OSS + KONTAKT

Read CONTEXT.md fully. Assume Agent 1 has produced `css/global.css`, `components/nav.html`, `components/footer.html`. Link to those. Do not rewrite the design system — extend it only if needed via a `<style>` block.

## Your deliverables
1. `mitt-hjem.html`
2. `mitt-boliglag.html`
3. `mitt-bygg.html`
4. `om-oss.html`
5. `kontakt.html`

---

## SEGMENT PAGE TEMPLATE (apply to all three, customize content per CONTEXT.md)

### Structure
1. **Segment hero** (full-width, cream-dark bg)
   - Scripted italic title: "Mitt Hjem" / "Mitt Boliglag" / "Mitt Bygg"
   - Subtitle from CONTEXT.md
   - Relevant building illustration (placeholder div if no image)
   - Side-by-side: left=heading+subtitle+short intro paragraph; right=highlighted box ("Rammer rundt et liv" / "Lange linjer…" / "En helhetlig løsning…") — exact copy from CONTEXT.md

2. **Feature list** (left column, with checkmark icons)
   Per segment from CONTEXT.md services — 5-7 items, each with bold heading + 1-line description.

3. **Service cards grid** (3×2 sage cards, modal on click)
   Cards: VEDLIKEHOLDSPLAN | PROSJEKT | TEGNING | VEDLIKEHOLDSKALENDER | SERVICEAVTALER | 3D-SCAN
   Each card: icon (inline SVG) + title + 2-line teaser + "Se her" link.
   Click opens modal with FULL content (not 2-line modals — write proper 150-200 word descriptions per service per segment, tailored to that audience). Modal has "Ta kontakt" CTA button → /kontakt

4. **Mitt Prosjekt toolbox section** (below cards)
   Large display text: "MITT PROSJEKT" (tracking: wide)
   Sub: "– åpenhet og ærlighet satt i system"
   Two columns: "Å spille med åpne kort" + "Sammen for 2+2=5" paragraphs (from CONTEXT.md)
   Right: playing cards illustration (SVG placeholder or emoji-style) + smiley face illustration

5. **Bottom CTA** → /kontakt

### Segment-specific customizations
**Mitt Hjem**: 
- Feature list: Hjelp til prosjekter | Vedlikeholdsplan | Dynamiske tegninger | Ett system for ditt bygg
- Hero image: house/cottage
- Tone: warm, personal, "din bolig er din største investering"

**Mitt Boliglag**:
- Feature list: Ett system for ditt bygg | Dynamisk vedlikeholdsplan | Dynamiske tegninger | Hjelp til prosjektgjennomføring | Fagfolk som kjenner bygget | Sporbar kommunikasjon
- Extra section: "Lange linjer i et kortsiktig perspektiv" — the long-form copy box from CONTEXT.md
- Tone: professional, board-focused, "styret trenger riktig informasjon til riktig tid"

**Mitt Bygg**:
- Feature list: Ett system | Vedlikeholdsplan | Dynamiske tegninger | Prosjektstyring | Oppgavestyring | Sporbar kommunikasjon
- Tone: efficient, enterprise, "forvalte bygningsmasse rasjonelt"

---

## om-oss.html

Three-column layout (card borders, NOT sage bg):

**Col 1: Bakgrunn og erfaring**
Subheadings: Godt håndverk | God forvaltning | Riktig juss | Menneske
Use copy from CONTEXT.md Om oss pillars. Pull from the full company description.

**Col 2: Forretningsfilosofi**
Quote: "Så lenge vi har et valg, velger vi samarbeid."
Subheadings: Vår plass | Ærlighet varer lengst | Tid og kostnad henger sammen | Det er lov å tjene penger | Frem og tilbake er ikke like langt
Use key copy phrases from CONTEXT.md.

**Col 3: Verdisyn**
Quote: "Arbeidet vårt blir mer meningsfylt når det som mål å hjelpe folk og øke livskvaliteten i et fellesskap"
Subheadings: Folk og følelser | Respekt og redelighet | Tillit og trygghet | Mangfold og muligheter

Below three columns: full-width section "– og om alle de andre"
Two paragraphs about good craftspeople + experience. Closing quote:
"De eneste som tjener på å holde kortene tett til brystet, er de som har noe å skjule"

**Team section placeholder**: 
Heading "Menneskene bak". 2-3 placeholder profile cards (avatar circle + Name + Role). HTML comment: [REPLACE WITH REAL PHOTOS AND BIOS]

---

## kontakt.html

Split layout: left=form (white bg), right=sage bg with the Penrose-triangle-style 3D cube illustration (SVG — create a clean isometric impossible-triangle in sage/cream tones).

### Form — two-step
**Step 1** (visible):
- Fornavn* + Etternavn* (side by side)
- Ønsker å bli kontaktet på: radio → Telefon | E-post
- Telefon (with flag/country selector placeholder) — conditional on radio
- E-post*
- Jeg henvender meg som*: radio → Privatperson | Bedrift eller offentlig virksomhet | Representant for borettslag, sameie eller aksjelag
- [Neste →] button

**Step 2** (hidden until step 1 complete):
- Hva gjelder henvendelsen? (textarea)
- Hva er det beste tidspunktet å nå deg? (text input)
- [Send →] button | [← Tilbake] button
- On "send": show thank-you state

### "Hva skjer videre?" — 3-step timeline (RIGHT SIDE, below illustration)
Numbered steps, vertical timeline line between them:
1. **Vi leser meldingen din** — innen én virkedag
2. **Vi tar kontakt** — på den måten du ønsker
3. **Vi finner riktig løsning** — sammen med deg

### Contact details (below form)
Tel: 971 07 972 | hei@envision-it.no
Oslo + Sogndal addresses

