import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import { versions, latestVersion, isKnownVersion } from './versions'

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
        ...(version === '1.2.0'
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
        ...(version === '1.2.0'
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
