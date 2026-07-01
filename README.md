# Silverdaw Guide

User guide and documentation for [Silverdaw](https://www.silverdaw.com), an
open-source Digital Audio Workstation (DAW) for remixing, mashups, and
sample-driven music making.

Built with [VitePress](https://vitepress.dev) and published to GitHub Pages at
**https://docs.silverdaw.com**.

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
- `docs/public/CNAME` - custom domain for GitHub Pages
- `.github/workflows/deploy.yml` - CI that builds and deploys to GitHub Pages

## Deployment

Every push to `main` triggers the GitHub Actions workflow, which builds the site
and publishes it to GitHub Pages. The custom domain `docs.silverdaw.com` is
configured via `docs/public/CNAME`.
