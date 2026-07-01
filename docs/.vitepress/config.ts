import { defineConfig } from 'vitepress'

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
    ['meta', { name: 'theme-color', content: '#0f172a' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Silverdaw Guide' }],
    ['meta', { property: 'og:url', content: 'https://docs.silverdaw.com/' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'silverdaw.com', link: 'https://www.silverdaw.com' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/getting-started' },
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

    editLink: {
      pattern:
        'https://github.com/irarainey/silverdaw-guide/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the terms described in the repository license.',
      copyright: `Copyright © ${new Date().getFullYear()} Silverdaw`,
    },
  },
})
