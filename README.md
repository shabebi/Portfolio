# Ebrahim Al-Shabebi — Liquid Glass Portfolio

A first-pass static portfolio built from the content in the supplied CV and portfolio structure.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive liquid-glass visual system
- `script.js` — project data, filters, mobile menu, reveal animations, scroll progress, and small interactions
- `assets/Ebrahim_Al-Shabebi_CV.pdf` — supplied CV for the Download CV button

## Design direction

- Deep black base
- Yemen-inspired red / white / black palette
- Apple-inspired restraint: large typography, generous whitespace, subtle motion
- Liquid-glass surfaces using translucent layers, borders, blur, highlights, and soft shadows
- Responsive 3-column project grid on desktop
- Mobile navigation and responsive layouts
- No build step required

## Important placeholders for the next step

The CV/structure supplied project names but did not provide individual project URLs or full project descriptions. The project cards therefore intentionally use clearly marked placeholder descriptions and `#` links instead of inventing project details.

Update the `projects` array near the top of `script.js`:

```js
{
  name: "Project Name",
  category: "full-stack",
  label: "Full-Stack",
  description: "Real project description.",
  technologies: ["React", "Node.js", "PostgreSQL"],
  url: "https://your-project.com"
}
```

Also replace the LinkedIn placeholder in `index.html`.

## Open locally

Double-click `index.html`, or use a simple local server:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Next iteration

The most useful next step is to replace the abstract project previews with the real project screenshots/URLs and then tune the hero, glass material, spacing, typography, and animations against your exact references.
