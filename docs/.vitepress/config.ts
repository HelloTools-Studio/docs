import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'PPN Docs',
  base: '/',
  outDir: '../public',
  description: "PPN's document built with Vitepress.",
  appearance: true,
  lastUpdated: true,
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/blog/': sidebarBlog()
    },
    editLink: {
      repo: 'xioazhu2007/docs',
      branch: 'master',
      dir: 'docs',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaozhu2007/docs' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present xiaozhu2007'
    }
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/what-is-ppn', activeMatch: '/guide/' },
    { text: 'Blog', link: '/blog/introduction', activeMatch: '/blog/' },
    {
      text: 'Changelog',
      link: 'https://github.com/xiaozhu2007/docs/blob/master/CHANGELOG.md'
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is PPN?', link: '/guide/what-is-ppn' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' }
      ]
    },
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        {
          text: 'Migration from SSR',
          link: '/guide/migration-from-ssr'
        },
        {
          text: 'Migration from PPN 0.x',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}

function sidebarBlog() {
  return [
    {
      text: 'Blog',
      items: [
        { text: 'Introduction', link: '/blog/introduction' },
        { text: 'App Configs', link: '/blog/app-configs' },
        { text: 'Theme Configs', link: '/blog/theme-configs' },
        { text: 'Frontmatter Configs', link: '/blog/frontmatter-configs' }
      ]
    }
  ]
}
