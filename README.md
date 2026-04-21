# Meridian Software Solutions

This repo is now a redesigned Angular 21 consultancy website for Meridian Software Solutions using standalone components, SCSS, and centralized content/config.

## What Changed

- Rebuilt the site around a new 7-page enterprise consultancy information architecture:
  `Home`, `Services`, `Industries`, `Case Studies`, `About`, `Careers`, and `Contact`.
- Added reusable Angular components for the header, footer, hero, CTA banner, case study cards, section titles, and contact form.
- Centralized the editable site content in [src/app/site-content.ts](./src/app/site-content.ts).
- Replaced the old legacy HTML renderer and removed the duplicated static site assets and jQuery-based behavior.
- Updated the visual system to a modern light-blue consultancy design aligned to the provided mockups.

## Recommended Node Version

Use the version in [.nvmrc](./.nvmrc):

```bash
nvm use
```

Angular 21 officially supports Node 24, but this machine hit a native `malloc` crash during `ng build` on `v24.12.0`. The migrated app was verified successfully with Node `22.12.0`.

## Local Development

```bash
npm install
npm start
```

The app serves at `http://localhost:4200/`.

## Content Editing

Most site copy, navigation, services, industries, case studies, and career data live in:

```bash
src/app/site-content.ts
```

Routes live in:

```bash
src/app/app.routes.ts
```

Shared reusable UI components live in:

```bash
src/app/components
```

## Build

```bash
npm run build
```

If your local Node 24 runtime shows the same native crash, switch to Node 22 first:

```bash
nvm use 22.12.0
npm run build -- --configuration development
```

## Test

```bash
npm test -- --watch=false
```
