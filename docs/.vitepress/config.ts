import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import { cp, mkdir, readdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import {
  versions,
  latestVersion,
  isKnownVersion,
  legacyVersionRedirects,
} from './versions'

async function findHtmlFiles(root: string, relative = ''): Promise<string[]> {
  const entries = await readdir(join(root, relative), { withFileTypes: true })
  const files = await Promise.all(
    entries.map((entry) => {
      const entryPath = join(relative, entry.name)
      return entry.isDirectory()
        ? findHtmlFiles(root, entryPath)
        : Promise.resolve(entry.name.endsWith('.html') ? [entryPath] : [])
    }),
  )
  return files.flat()
}

// GitHub Pages cannot configure HTTP redirects. Generate tiny static pages at
// every previous patch-specific URL so existing links reach the canonical
// major/minor path without depending on the site's 404 fallback.
async function writeLegacyVersionRedirects(outDir: string): Promise<void> {
  for (const [legacyVersion, currentVersion] of Object.entries(
    legacyVersionRedirects,
  )) {
    const currentRoot = join(outDir, currentVersion)
    const pages = await findHtmlFiles(currentRoot)

    for (const page of pages) {
      const pageUrl = page
        .replaceAll('\\', '/')
        .replace(/(?:^|\/)index\.html$/, '')
        .replace(/\.html$/, '')
      const target = `/${currentVersion}${pageUrl ? `/${pageUrl}` : ''}`
      const output = join(outDir, legacyVersion, page)
      const targetWithOrigin = `https://docs.silverdaw.com${target}`
      const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex">
    <meta http-equiv="refresh" content="0; url=${target}">
    <link rel="canonical" href="${targetWithOrigin}">
    <title>Redirecting to the Silverdaw Guide</title>
    <script>location.replace(${JSON.stringify(target)} + location.search + location.hash)</script>
  </head>
  <body>
    <p><a href="${target}">Continue to the Silverdaw Guide</a></p>
  </body>
</html>
`
      await mkdir(dirname(output), { recursive: true })
      await writeFile(output, html)
    }

    // Static assets cannot execute an HTML redirect, so preserve their previous
    // URLs by mirroring the canonical release-series images into the legacy path.
    await cp(
      join(currentRoot, 'images'),
      join(outDir, legacyVersion, 'images'),
      { recursive: true },
    )
  }
}

// Build the guide sidebar for a specific documentation version. Every link is
// prefixed with the version so each version's sidebar stays self-contained and
// never navigates the reader into a different version.
function guideSidebar(version: string): DefaultTheme.SidebarItem[] {
  const base = `/${version}/guide`
  return [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: `${base}/introduction` },
        { text: 'Installation', link: `${base}/installation` },
        { text: 'Quick Start: Your First Remix', link: `${base}/quick-start` },
        { text: 'The Silverdaw Window', link: `${base}/the-window` },
        ...(['1.2', '1.3', '1.4', '1.5'].includes(version)
          ? [{ text: 'MIDI Controllers', link: `${base}/midi-controllers` }]
          : []),
      ],
    },
    {
      text: 'Projects & Audio',
      items: [
        { text: 'Projects', link: `${base}/projects` },
        { text: 'Importing & the Library', link: `${base}/library` },
        { text: 'Stem Separation', link: `${base}/stems` },
      ],
    },
    {
      text: 'Building Your Mix',
      items: [
        { text: 'Arranging the Timeline', link: `${base}/timeline` },
        { text: 'Editing Clips', link: `${base}/clip-editor` },
        ...(['1.2', '1.3', '1.4', '1.5'].includes(version)
          ? [{ text: 'Scratch Editor', link: `${base}/scratch-editor` }]
          : []),
        { text: 'Mixing & Effects', link: `${base}/mixing` },
      ],
    },
    {
      text: 'Finishing',
      items: [{ text: 'Exporting a Mixdown', link: `${base}/export` }],
    },
    {
      text: 'Reference',
      items: [
        ...(['1.4', '1.5'].includes(version)
          ? [
              {
                text: 'Digital Audio Basics',
                link: `${base}/digital-audio-basics`,
              },
            ]
          : []),
        { text: 'Preferences', link: `${base}/preferences` },
        { text: 'Keyboard Shortcuts', link: `${base}/shortcuts` },
        { text: 'Feedback & Support', link: `${base}/feedback` },
      ],
    },
  ]
}

// One sidebar per version, keyed by its guide path prefix. VitePress picks the
// entry whose key is the longest matching prefix of the current route.
const sidebar: DefaultTheme.Sidebar = Object.fromEntries(
  versions.map((v) => [`/${v.version}/guide/`, guideSidebar(v.version)]),
)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Silverdaw Guide',
  description:
    'User guide and documentation for Silverdaw — an open-source Digital Audio Workstation for remixing, mashups, and sample-driven music making.',

  // Served from the docs.silverdaw.com custom domain root, so no sub-path base.
  base: '/',

  lastUpdated: true,
  cleanUrls: true,
  buildEnd: async ({ outDir }) => writeLegacyVersionRedirects(outDir),

  // Default to dark mode while keeping the light/dark toggle available.
  appearance: 'dark',

  head: [
    ['meta', { name: 'theme-color', content: '#09090b' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Silverdaw Guide' }],
    ['meta', { property: 'og:url', content: 'https://docs.silverdaw.com/' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo-small.png',

    // Top navigation points at the latest version. Readers viewing an older
    // version stay within it via the version-scoped sidebar and the version
    // switcher rendered next to these items.
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: `/${latestVersion}/guide/introduction` },
      { text: 'Quick Start', link: `/${latestVersion}/guide/quick-start` },
      { text: 'silverdaw.com', link: 'https://www.silverdaw.com' },
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/irarainey/silverdaw' },
    ],

    search: {
      provider: 'local',
      options: {
        // Only index the latest version so search results aren't polluted with
        // duplicate hits from archived versions. Driven entirely by the
        // manifest, so archived docs need no special frontmatter.
        _render(src, env, md) {
          const rel: string =
            (env as { relativePath?: string }).relativePath ?? ''
          const segment = rel.split('/')[0]
          if (isKnownVersion(segment) && segment !== latestVersion) {
            return ''
          }
          return md.render(src, env)
        },
      },
    },

    footer: {
      message:
        'Guide for Silverdaw · Silverdaw is released under the <a href="https://github.com/irarainey/silverdaw/blob/main/LICENSE">GNU AGPL v3.0</a>.',
      copyright: `Copyright © ${new Date().getFullYear()} Silverdaw`,
    },
  },
})
