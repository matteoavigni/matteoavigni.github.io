# CLAUDE.md — Portfolio Project Context

> Instructions for AI coding assistants working on this repository.

## Project Overview

Personal portfolio website for Matteo Avigni — Software Developer & Data Engineer. Static site hosted on **GitHub Pages** at [matteoavigni.github.io](https://matteoavigni.github.io).

## Tech Stack

- **HTML5 / CSS3 / Vanilla JavaScript** (no framework, no build step)
- **CSS**: `css/style.css` (main), `css/cv-styles.css` (CV page)
- **JS**: ES6 modules loaded via `<script type="module">` from `js/main.js`
- **Hosting**: GitHub Pages (static)
- **Icons**: Font Awesome 6.5 (CDN)

## File Structure

```
├── index.html             # Home page (hero, about, skills, projects, contact)
├── css/style.css          # Main stylesheet
├── css/cv-styles.css      # CV page styles
├── js/
│   ├── main.js            # Entry point (imports all modules)
│   ├── i18n.js            # Translations dictionary + setLanguage()
│   ├── theme.js           # Dark/light mode toggle
│   ├── navigation.js      # Mobile menu, smooth scroll
│   ├── contact-form.js    # Form submission (Google Cloud Function)
│   ├── cookie-consent.js  # GDPR cookie banner
│   ├── analytics.js       # Google Analytics (conditional on consent)
│   └── cv-download.js     # CV PDF download
├── pages/
│   ├── cv.html            # Curriculum Vitae page
│   └── privacy.html       # Privacy Policy page
├── assets/images/         # Favicons, logos, OG images
├── sitemap.xml
├── robots.txt
└── CHANGELOG.md
```

## Key Patterns

### i18n (Internationalization)
- All translatable text uses `data-i18n="key"` attributes in HTML.
- Translations live in `js/i18n.js` as a flat dictionary: `{ 'key': { 'it': '...', 'en': '...' } }`.
- `setLanguage(lang)` iterates all `[data-i18n]` elements and sets `innerHTML`.
- Array values are rendered as `<li>` items.
- **Always add both `it` and `en` translations when adding content.**

### Theme
- Dark/light toggle stored in `localStorage('siteTheme')`.
- Inline `<script>` in `<head>` prevents flash of wrong theme.
- CSS uses `html.dark` / `body.dark-theme` selectors.

### Projects Section
- Each project is an `<article class="project-card">` inside `div.projects-grid`.
- Title, description use `data-i18n` keys. Tags line (`project-tags`) is not translated.
- Links: "Demo Live" (`link-demo`), "Codice" (`link-source`), or badge (`badge-desktop-app`).

## Rules

1. **Do NOT** read or modify anything in `.idea/`.
2. **Always** provide both IT and EN translations for any new text.
3. **Version bump** `?v=X.X` on CSS/JS `<link>`/`<script>` tags when making changes.
4. Keep the site fully static — no npm, no build step, no server-side code.
5. Maintain responsive design across mobile, tablet, and desktop.
