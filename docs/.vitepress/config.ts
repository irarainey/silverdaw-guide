import { defineConfig } from 'vitepress'

// The released version of Silverdaw that this guide documents.
const silverdawVersion = '1.0.2'

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

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Quick Start', link: '/guide/quick-start' },
      { text: 'silverdaw.com', link: 'https://www.silverdaw.com' },
      {
        text: `v${silverdawVersion}`,
        link: `https://github.com/irarainey/silverdaw/releases/tag/${silverdawVersion}`,
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start: Your First Remix', link: '/guide/quick-start' },
            { text: 'The Silverdaw Window', link: '/guide/the-window' },
          ],
        },
        {
          text: 'Projects & Audio',
          items: [
            { text: 'Projects', link: '/guide/projects' },
            { text: 'Importing & the Library', link: '/guide/library' },
            { text: 'Stem Separation', link: '/guide/stems' },
          ],
        },
        {
          text: 'Building Your Mix',
          items: [
            { text: 'Arranging the Timeline', link: '/guide/timeline' },
            { text: 'Editing Clips', link: '/guide/clip-editor' },
            { text: 'Mixing & Effects', link: '/guide/mixing' },
          ],
        },
        {
          text: 'Finishing',
          items: [
            { text: 'Exporting a Mixdown', link: '/guide/export' },
          ],
        },
        {
          text: 'Reference',
          items: [
            { text: 'Preferences', link: '/guide/preferences' },
            { text: 'Keyboard Shortcuts', link: '/guide/shortcuts' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/irarainey/silverdaw' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: `Guide for Silverdaw v${silverdawVersion} · Silverdaw is released under the <a href="https://github.com/irarainey/silverdaw/blob/main/LICENSE">GNU AGPL v3.0</a>.`,
      copyright: `Copyright © ${new Date().getFullYear()} Silverdaw`,
    },
  },
})
