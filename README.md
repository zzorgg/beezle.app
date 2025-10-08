<div align="center">

<img src="src/assets/logo/logo.png" alt="Beezle logo" width="96" height="96" />

# Beezle Website

Modern, responsive landing site for the Beezle app, built with React, Vite, Tailwind CSS v4, and DaisyUI.

</div>

## Overview

This repository contains the Beezle marketing website. It features a sticky, blurred navbar, a patterned hero section, technology badges, a team section, and an optional steps page. The site is component-driven, type-safe, and optimized for fast local development and static deployment.

## Features

- React 19 + Vite 7 for fast dev server and optimized static builds
- TypeScript with ESLint for type-safety and code quality
- Tailwind CSS v4 with DaisyUI components and custom theme tokens
- Sticky navbar with backdrop blur on scroll and anchor links
- Configurable hero background patterns (grid/dots) with optional radial mask
- Technology and team sections with easy-to-swap assets
- React Router for simple page routing (/, /steps)
- Smooth scrolling and hidden scrollbars for a clean look

## Tech stack

- React: ^19.1.1
- Vite: ^7.1.7
- TypeScript: ~5.9.3
- Tailwind CSS: ^4.1.14
- DaisyUI: ^5.1.28
- React Router DOM: ^7.9.3
- lucide-react icons: ^0.545.0

## Quick start

Prerequisites:

- Node.js 18+ (Node 20 LTS recommended)
- npm 9+ (or your preferred package manager)

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Build for production and preview locally:

```bash
npm run build
npm run preview
```

The static output will be in `dist/`.

## Project structure

Key paths to know:

- `src/pages/Home.tsx` — homepage composition (Navbar, Hero, Technology, Team)
- `src/pages/Steps.tsx` — optional steps page
- `src/pages/Footer.tsx` — site footer (used on home route)
- `src/component/Navbar.tsx` — sticky navbar with blur-on-scroll, anchor links
- `src/component/Hero.tsx` — hero with configurable background pattern
- `src/component/Technology.tsx` — tech badges section
- `src/component/Team.tsx` — team members section
- `src/component/Powered.tsx` — "Powered by" strip
- `src/index.css` — Tailwind + DaisyUI config and theme tokens
- `public/` and `src/assets/` — images, logos, and media

## Customization

### Theme colors (DaisyUI + Tailwind)

Theme tokens live in `src/index.css` via DaisyUI plugins. Update primary/content colors to match your brand:

```css
@plugin "daisyui" {
  themes: light;
}
@plugin "daisyui/theme" {
  name: "light";
  default: true;
  --color-primary: #155dfc;
  --color-base-content: #0b0e13;
}
```

### Navbar

- Update logo and brand text in `src/component/Navbar.tsx`.
- Update menu links and anchor IDs to match your sections.

### Hero background patterns

The hero supports two Tailwind-based patterns and an optional radial mask. Switch patterns by passing a prop to `Hero`:

```tsx
// src/pages/Home.tsx
// <Hero /> defaults to pattern="grid" with a soft radial mask.
// Examples:
// <Hero pattern="grid" />
// <Hero pattern="dots" />
// <Hero pattern="grid" withMask={false} />
```

Implementation: `src/component/Hero.tsx`. The patterned layer is an absolutely positioned overlay with `-z-10`, so it stays behind hero content only.

### Assets

- Replace images in `src/assets/logo`, `src/assets/techstack`, etc., as needed.
- Update `public/` for any static files you want served at the root.

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — type-check then build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Deployment

This is a static Vite site. After `npm run build`, deploy the `dist/` directory to any static host:

- Vercel: import the repo, framework = Vite
- Netlify: set build command `npm run build` and publish directory `dist`
- GitHub Pages: push `dist` to a `gh-pages` branch, or use an action
- Any static hosting/CDN that can serve files from `dist`

If deploying to a subpath (e.g., `https://example.com/myapp/`), set `base` in `vite.config.ts` accordingly.

## Contributing

Issues and pull requests are welcome. Please run `npm run lint` and ensure the site builds before submitting changes.

## License

Copyright © 2025 Beezle. All rights reserved.
