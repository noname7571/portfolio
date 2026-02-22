# Matej Tomko — Personal Portfolio

> Personal developer portfolio built with plain HTML, CSS, and JavaScript — no frameworks, no build step, just clean and fast code.

**[Live site](https://noname7571.github.io/portfolio)** &nbsp;·&nbsp; [GitHub](https://github.com/noname7571) &nbsp;·&nbsp; [LinkedIn](https://linkedin.com/in/matej-tomko)

---

## About

This is my personal portfolio website showcasing my background, technical skills, and work experience. It is designed to be fully responsive, load instantly, and work on any device — from a phone to a widescreen monitor.

---

## Sections

| Section | What's inside |
|---|---|
| **Hero** | Name, animated typed subtitle, short bio, call-to-action buttons |
| **Skills** | Visual tech-stack grid with icons (Python, C#, SQL, JS, Docker, AWS, and more) |
| **Experience** | Timeline of professional roles with descriptions and tech tags |
| **Projects** | Project cards with descriptions, tech stacks, GitHub and live demo links |
| **Contact** | Email, GitHub, and LinkedIn links |

---

## Tech Stack

| Category | Tools |
|---|---|
| Markup & Styling | HTML5, Tailwind CSS (CDN), custom CSS |
| Interactivity | Vanilla JavaScript (ES6+) |
| Animations | CSS keyframes, Intersection Observer API, custom typed effect |
| Icons | [Devicon](https://devicon.dev) CDN |
| Hosting | GitHub Pages |

---

## Features

- **Zero dependencies / zero build step** — open `index.html` and it works
- **Scroll-reveal animations** via Intersection Observer — elements fade in as you scroll
- **Typed text effect** — cycles through words without shifting surrounding content
- **Sticky glass navbar** — transparent on load, blurred background on scroll with active-link highlighting
- **Fully responsive** — mobile-first layout with a hamburger menu
- **Accessible** — semantic HTML, ARIA labels, visible focus rings, reduced-motion friendly

---

## Running locally

No install needed. Just clone and open:

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
├── index.html        # Single-page app — all sections
├── css/
│   └── style.css     # Custom animations, scroll-reveal, scrollbar, etc.
├── js/
│   └── main.js       # Navbar, typed effect, scroll-reveal, smooth scroll
└── assets/
    └── images/       # Profile photo, project screenshots
```

---

## Contact

**Matej Tomko** — [matej2808@gmail.com](mailto:matej2808@gmail.com)
