# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — local dev server at `localhost:4321`
- `npm run build` — production build to `./dist/`
- `npm run preview` — serve the built site locally
- `npm run astro -- --help` — Astro CLI (e.g. `astro add`, `astro check`)
- `npx prettier --write .` — format (no lint/test setup exists)

Node is pinned to 24.11.1 via Volta.

## Architecture

Static marketing site for Upheld Ministries built with **Astro 5** + **Tailwind CSS v4**. No backend, no tests, no client framework — pages are static `.astro` files, output is fully static HTML in `dist/`.

- **Pages** (`src/pages/*.astro`) map 1:1 to routes. `trailingSlash: "never"` and `prefetchAll` are configured in `astro.config.mjs`.
- **`src/layouts/Layout.astro`** is the single shared shell used by every page: `<head>` meta/OG tags, favicons, Header, Footer, the site-wide `NewsletterForm`, and third-party inline scripts (Umami analytics, Flodesk). It takes a `headerBgColor` prop. The Header inverts its text color on specific routes via a hardcoded pathname list — update that list when adding dark-hero pages.
- **View transitions** are enabled globally via `<ClientRouter />` in the layout.
- **Components** (`src/components/`) are presentational Astro components composed into pages.

### Styling

- Tailwind v4 is configured in **CSS**, not JS. Theme tokens live in `src/global.css` under `@theme` — brand colors are `brand-dark-grey`, `brand-dark-teal`, `brand-orange`, `brand-blurple`; fonts are `font-serif` (EB Garamond) and `font-orpheus` (Orpheus Pro). Add/change design tokens there, not in a config file.
- `--color-*: initial` resets Tailwind's default palette, so only the colors defined in `@theme` are available — arbitrary hex (`bg-[#...]`) is used where an off-palette value is needed.
- Tailwind is wired through the Vite plugin (`@tailwindcss/vite`) in `astro.config.mjs`, with minification enabled.
- Prettier (`printWidth: 120`, `prettier-plugin-astro`, `prettier-plugin-tailwindcss`) auto-sorts classes.

### Assets & icons

- Images in `src/assets/images/` are optimized via Astro's `<Image>` component. Some content (events, retreat images) is served from the external `assets.upheldministries.org` CDN by URL instead.
- Icons use `astro-icon` + Shoelace's icon set. `astro.config.mjs` aliases `/assets/icons/*` to the Shoelace package and copies those assets into the build via `vite-plugin-static-copy` — don't remove that wiring when touching icons.

### Content

Event/retreat data is currently **inline arrays inside the page files** (e.g. `upcomingEvents` in `src/pages/index.astro`), often with commented-out past events. To update what's shown, edit those arrays directly.

## Deployment

`site: "https://upheldministries.org"` with a sitemap integration. The `preview` branch and `main` branch are used for deploys.
