# Silverdaw Guide

The user guide for [Silverdaw](https://www.silverdaw.com), an open-source Digital
Audio Workstation (DAW) for remixing, mashups, and sample-driven music making.

Built with [VitePress](https://vitepress.dev) and published to GitHub Pages at
**https://docs.silverdaw.com**.

## Purpose

This repository contains the end-user documentation for Silverdaw. Its goal is to
help people use the application as effectively as possible — from installing it
and getting started, through to the day-to-day features they will use while
making music.

A few things to know about this guide:

- **It is for users, not developers.** The content focuses on how to operate the
  application, not on how to build or contribute to it.
- **It describes the current released version.** The guide reflects Silverdaw as
  it is today, so readers can trust that what they see matches the application.
- **The application is the source of truth.** The guide is derived from
  Silverdaw's own documentation and behaviour; when in doubt, the application
  itself is authoritative.

## Local development

```bash
npm install
npm run docs:dev      # start the dev server
npm run docs:build    # build the production site to docs/.vitepress/dist
npm run docs:preview  # preview the production build locally
```

## Project layout

- `docs/` - documentation content (Markdown)
- `docs/.vitepress/config.ts` - site configuration, nav, and sidebar
- `docs/public/` - static assets and the `CNAME` custom-domain file
- `.github/workflows/` - CI that builds and deploys the site

## Deployment

Every push to `main` triggers a GitHub Actions workflow that builds the site and
publishes it to GitHub Pages, served from the custom domain `docs.silverdaw.com`.

## License

This guide is released under the [GNU Affero General Public License v3.0](LICENSE),
the same license as the [Silverdaw application](https://github.com/irarainey/silverdaw).

