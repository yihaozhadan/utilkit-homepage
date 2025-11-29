# UtilKit Homepage

UtilKit is a static landing page that introduces the suite of developer utilities hosted across the UtilKit ecosystem. Each tile on the homepage links to a dedicated tool (JSON formatter, GitHub diagram generator, text processor, URL shortener, etc.), giving developers a single entry point for common workflow helpers.

## Features

- **Curated utility launchpad** – Highlight cards for every live UtilKit app with quick links.
- **Responsive layout** – Tailwind-powered design adapts from mobile to desktop.
- **Light/Dark theme** – Global toggle with persisted preference stored in `localStorage`.
- **Feather icons** – Consistent iconography with automatic rendering when custom elements load.
- **Custom navbar & footer** – Reusable web components with blurred glassmorphism styling.

## Tech Stack

- **Static HTML** served from `index.html`.
- **Tailwind CSS v4** compiled into `tailwind.css` (source directives live in `input.css`).
- **Vanilla JavaScript** for utilities (`script.js`) plus custom elements in `components/`.
- **Feather Icons CDN** for SVG icons.

## Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/yihaozhadan/utilkit-homepage.git
   cd utilkit-homepage
   ```
2. **Serve locally** – Any static server works, e.g.:
   ```bash
   npx serve .
   # or
   python3 -m http.server 3000
   ```
3. **Open the site** at [http://localhost:3000](http://localhost:3000) (or the port you chose).

> Tailwind CSS is already precompiled. If you need to regenerate `tailwind.css`, install Tailwind CLI v4 and run `npx @tailwindcss/cli -i ./input.css -o ./tailwind.css`.

## Deployment

Because the project is static, you can deploy it to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.). Upload the root folder (HTML, CSS, JS, `components/`, and `images/`) and point your domain to the hosted output.

## Contributing

Pull requests are welcome! Please:

1. Open an issue describing the change.
2. Keep the design consistent with the existing Tailwind aesthetics.
3. Run a local build/test (if you modify Tailwind, recompile `tailwind.css`).

## License

MIT © Hui Zhou
