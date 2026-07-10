# Joji Xavier — Portfolio

A single-page portfolio site for **Joji Xavier**, Senior Flutter Developer.

Built as a self-contained static page — no build step, no runtime dependencies. Just open `index.html` in a browser.

## Structure

```
index.html        # the entire site (HTML + inline CSS + vanilla JS)
assets/joji.png   # hero portrait (optional — falls back to a "JX" monogram if absent)
```

## Features

- Sticky blurred nav, animated tech marquee, and scroll-reveal animations
- Sections: Hero, About, Stack, Experience, Selected Projects, Education, Contact
- Fully responsive; content is data-driven and rendered client-side
- Google Fonts: Space Grotesk, Manrope, JetBrains Mono

## Local preview

```bash
open index.html          # macOS
# or
python3 -m http.server   # then visit http://localhost:8000
```

## Notes

Add the hero portrait at `assets/joji.png` to replace the monogram fallback.
