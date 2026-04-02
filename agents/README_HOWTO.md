# HOW TO RUN

## Folder setup (already done by user)
```
C:\…\V2\
├── CONTEXT.md
├── AGENT_1_FOUNDATION.md
├── AGENT_2_PAGES.md
├── AGENT_3_QA.md
├── assets\          ← Agent 1 reads all text files here before building
└── functions\
    ├── priskalkulatorscan.html
    └── envision-scroll.html
```

## Run order — 3 Claude Code terminals, sequential

Open terminal in `C:\…\V2\`

**Terminal 1 — Agent 1:**
```
claude "Read CONTEXT.md and AGENT_1_FOUNDATION.md. Read all files in ./assets/. Build deliverables into this folder."
```

**Terminal 2 — Agent 2 (after Agent 1 finishes):**
```
claude "Read CONTEXT.md and AGENT_2_PAGES.md. Read all files in ./assets/. Use css/global.css and components/ from Agent 1 output. Build deliverables into this folder."
```

**Terminal 3 — Agent 3 (after Agent 2 finishes):**
```
claude "Read CONTEXT.md and AGENT_3_QA.md. Audit and patch all HTML files in this folder. Produce sitemap.xml, robots.txt, README.md."
```
