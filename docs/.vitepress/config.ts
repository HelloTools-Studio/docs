import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'HelloTools Studio',
  titleTemplate: '一个小工作室',
  base: '/',
  outDir: '../public',
  description: "HelloTools website built with Vitepress.",
  appearance: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/blog/': sidebarBlog()
    },
    editLink: {
      pattern: 'https://github.com/xiaozhu2007/docs/edit/maater/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaozhu2007/docs' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present HelloTools'
    }
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/what-is-ppn', activeMatch: '/guide/' },
    { text: 'Blog', link: '/blog/introduction', activeMatch: '/blog/' },
    {
      text: 'Changelog',
      link: '/'
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is PPN?', link: '/guide/what-is-ppn' }
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
