<div align="center">

<img src="website.png" alt="website"/>

<div>
<h1>beezle.app <span><img src="src/assets/logo/logo.png" alt="Beezle logo" width="24" height="24" /></span></h1>
</div>

Landing page for the Beezle app, built with React, Typescript, Vite, Tailwind CSS, and DaisyUI.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)

> ⚠️ **Warning:** This website is currently under active development. Commit messages, pushed changes, and features may be unstable.

</div>

---

</div>

## Quick start

Prerequisites:

- Node.js 18+ (Node 22 LTS recommended)
- npm

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

output will be in `dist/`.

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

credit => [Rifky Alfarez](https://dev.to/rifkyalfarez/how-to-create-grid-and-dots-background-using-tailwind-css-1jkb)

### Assets

- Replace images in `src/assets/logo`, `src/assets/techstack`, etc., as needed.
- Update `public/` for any static files you want served at the root.

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — type-check then build for production
- `npm run lint` — run ESLint

## Deployment

This is a static website. The domain name `beezle.app` is from **name.com** and the website is hosted on hostinger.

For domain transfer you will need to add hosting provider's DNS Nameserver to the domain registrar.

## Contributing

Issues and pull requests are welcome. Please run `npm run lint` and ensure the site builds before submitting changes.

---

> ⚠️ **Note:** We know how to make a website. We know how to use modern best practices, which includes using AVIF/WebP formats with fallbacks for images and `rel="noopener noreferrer`.
