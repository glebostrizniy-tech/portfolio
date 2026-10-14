# Gleb's portfolio

This `gh-pages` checkout is a static site served directly by GitHub Pages. No dependency installation or build is required.

## Local development

From this checkout, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open the page in your local browser. Styles live in `assets/site.css`; English and Russian content and the language switch live in `assets/site.js`. English is the default; an explicit language choice is saved in localStorage. The site does not need external fonts or CDN dependencies.

`index.html` includes an English HTML snapshot for search engines and visitors without JavaScript. When changing page content or structure in `site.js`, update that snapshot too. The script refreshes the content for the selected language on load.

Verify both languages on desktop and mobile, check section anchors and contact links, and ensure the manifest's paths remain relative for GitHub Pages project hosting.
