# Matej Tomko — Personal Portfolio

> Personal developer portfolio built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

**[Live site](https://noname7571.github.io/portfolio/)** &nbsp;·&nbsp; [GitHub](https://github.com/noname7571) &nbsp;·&nbsp; [LinkedIn](https://www.linkedin.com/in/matej-tomko/)

---

## About

Portfolio for **Matej Tomko**, software developer working in Python and C#/.NET — API
integrations, market-data pipelines and web applications. Aimed at Python backend, C#/.NET and
full-stack roles.

The design is deliberately editorial rather than template-like: near-black graphite, off-white
type, a single copper accent, serif display headings, monospaced metadata and hairline rules
instead of cards, gradients and glows.

---

## Sections

| Section | What's inside |
|---|---|
| **Hero** | Role headline, introduction, "View my work" and "Download CV", contact links |
| **01 Professional work** | Sigma Sphere and Deutsche Telekom, with expandable case studies (context, what I built, result, contribution, stack) |
| **02 Public projects** | Cabo game, price dashboard, topic-research SaaS, flight-sniper, Rust log analyzer, crypto ML pipeline |
| **03 Skills** | Languages, frameworks, data stores & integration, tools & delivery — each with usage notes |
| **04 About & education** | Short background, quick facts, compact education list including the bachelor’s thesis |
| **05 Contact** | Email, phone, GitHub, LinkedIn, CV |

---

## Tech Stack

| Category | Tools |
|---|---|
| Markup & Styling | HTML5, hand-written CSS (custom properties, grid, no utility framework) |
| Type | Instrument Serif (display), Inter (body), JetBrains Mono (metadata) via Google Fonts |
| Interactivity | Vanilla JavaScript (ES6+) |
| Hosting | GitHub Pages |

---

## Features

- **Zero dependencies / zero build step** — open `index.html` and it works
- **Accessible case studies** — native `<details>`/`<summary>` expanders, keyboard operable
- **Scroll reveal** via Intersection Observer, disabled under `prefers-reduced-motion`
- **Sticky header** — transparent at rest, solid with a hairline rule once scrolled
- **Active section tracking** with `aria-current`
- **Mobile menu** — full-height panel, `aria-expanded`, closes on link tap / `Escape`
- **CV download** — `assets/Matej_Tomko_cv.pdf` is served directly from the site
- **Accessible** — skip link, semantic HTML, visible focus rings, AA-contrast text

---

## Running locally

```bash
git clone https://github.com/noname7571/portfolio.git
cd portfolio
open index.html          # macOS
# or
python3 -m http.server   # serves at http://localhost:8000
```

---

## Project structure

```
portfolio/
├── index.html                   # Single page — all sections
├── css/
│   └── style.css                # Design tokens, layout, case studies, responsive rules
├── js/
│   └── main.js                  # Header state, active section, mobile menu, scroll reveal
└── assets/
    ├── Matej_Tomko_cv.pdf       # CV served by the "Download CV" actions
    ├── favicon.svg
    └── images/
        └── rt-price-dashboard.png   # Screenshot of the live dashboard project
```

All asset and navigation URLs are relative, so the site works from the GitHub Pages base path
(`/portfolio/`) as well as from a local file server.

---

## Updating content

| What | Where |
|---|---|
| CV file | Replace `assets/Matej_Tomko_cv.pdf` (keep the filename, or update the four `download` links) |
| Case studies | `#work` in `index.html` — one `<details class="case">` per case study |
| Projects | `#projects` in `index.html` — one `<article class="project">` per project |
| Skills | `#skills` in `index.html` — one `.skill` block per category |
| Education | `#about` in `index.html` — the `.education` list |
| Bachelor’s thesis | `.thesis` block inside the first `.education` item (`#about`) |
| Colours / type | `:root` design tokens at the top of `css/style.css` |

---

## Contact

**Matej Tomko** — [matej2808@gmail.com](mailto:matej2808@gmail.com) — +421 918 133 593
