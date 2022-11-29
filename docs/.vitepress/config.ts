import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'HelloTools Studio',
  titleTemplate: 'HelloTools Studio Website',
  base: '/',
  outDir: '../public',
  description: "HelloTools website built with Vitepress. SLA高达95%的国内二级域名托管商,智能查询,快速注册,您可以通过强大的自助平台轻松管理您的二级域名",
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
      message: 'Released under the WTFPL License.',
      copyright: 'Copyright © 2021-present HelloTools'
    }
  }
})

function nav() {
  return [
    {
      text: 'PPN Guide',
      link: '/guide/what-is-ppn',
      activeMatch: '/guide/'
    },
    {
      text: 'Blog',
      link: '/blog/introduction',
      activeMatch: '/blog/'
    },
    {
      text: 'Members',
      link: '/member'
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        {
          text: '免费二级域名',
          link: '/guide/free-subdomain'
        },
        {
          text: 'What is PPN?',
          link: '/guide/what-is-ppn'
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
        {
          text: 'Introduction',
          link: '/blog/introduction'
        }
      ]
    }
  ]
}
