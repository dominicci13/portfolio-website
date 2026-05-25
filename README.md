# Portfolio site

Static single-page portfolio. Bilingual (EN/ES) toggle, dark mode, downloadable CV/resume.

## Stack

Vanilla HTML / CSS / JS — no framework, no build step. IntersectionObserver for reveal animations; `localStorage` persists theme and language preference.

## Run locally

```bash
python -m http.server
```

Then open `http://localhost:8000/src/index.html`. The HTML references assets via `../public/...`, so serve from the repo root, not from `src/`.
