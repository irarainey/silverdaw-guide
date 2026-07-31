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

- `docs/` - documentation content (Markdown), organised by version
- `docs/<major.minor>/guide/` - the guide pages for a release series
- `docs/.vitepress/versions.ts` - the version manifest (source of truth)
- `docs/.vitepress/config.ts` - site configuration; builds the nav and per-version
  sidebar from the manifest
- `docs/.vitepress/theme/` - custom theme: the version switcher and the
  default-version redirect
- `docs/public/<major.minor>/images/` - screenshots for a release series
- `docs/public/images/` - shared branding assets (logos) used across versions
- `.github/workflows/` - CI that builds and deploys the site

## Versioning

The guide is versioned by Silverdaw major and minor release. Patch releases only
contain bug fixes, so every patch in a release series shares one guide.

- **URL layout.** Every version lives under its own numbered path, e.g.
  `docs.silverdaw.com/1.4/guide/introduction`. Each version is a
  self-contained copy with its own screenshots, so its pages never navigate the
  reader into a different version.
- **Version labels.** The version switcher uses patch-series labels such as
  `1.4.x`, while links use the canonical `1.4` URL segment.
- **Legacy URLs.** Previous patch-specific links, such as
  `docs.silverdaw.com/1.4.2/guide/introduction`, redirect to their canonical
  major/minor paths.
- **Default version.** The version listed as `latestVersion` in
  `docs/.vitepress/versions.ts` is the default. The landing page and top
  navigation point at it, and any visitor who arrives on an unversioned or
  missing doc path (e.g. an old `/guide/…` link) is redirected to it.
- **Switching versions.** The version switcher in the top navigation moves the
  reader to the same page in another version, falling back to that version's
  introduction if the page does not exist there.
- **Search.** Only the latest version is indexed, so search results are not
  polluted with duplicate hits from archived versions.

### Adding a new version

The generation pipeline handles this for each new major or minor application
release. Patch releases continue to use the existing guide:

1. Write the new version's pages to `docs/<major.minor>/guide/` using
   root-absolute links prefixed with the major/minor version, e.g.
   `[Export](/1.4/guide/export)`.
2. Write that version's screenshots to
   `docs/public/<major.minor>/images/` and reference them the same way, e.g.
   `/1.4/images/export-dialog.png`. Logos stay shared in
   `docs/public/images/`.
3. Prepend the version to `versions` and update `latestVersion` in
   `docs/.vitepress/versions.ts`.
4. Update the hero action links in `docs/index.md` to the new version.
5. Run `npm run docs:build` to verify there are no dead links.

Older release-series directories are frozen after the next minor release.


## Deployment

Every push to `main` triggers a GitHub Actions workflow that builds the site and
publishes it to GitHub Pages, served from the custom domain `docs.silverdaw.com`.

## License

This guide is released under the [GNU Affero General Public License v3.0](LICENSE),
the same license as the [Silverdaw application](https://github.com/irarainey/silverdaw).
