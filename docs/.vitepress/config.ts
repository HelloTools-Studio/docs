import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'HelloTools Cloud',
  titleTemplate: 'HelloTools Studio',
  head: [
    [
      'link',
      { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }
    ]
  ],
  base: '/',
  description:
    'HelloTools Cloud - SLA高达95%的国内二级域名托管商,智能查询,快速注册,您可以通过强大的自助平台轻松管理您的二级域名. 免费提供各类软件安装包和安装教程,软件更新和升级;并提供软件安装技术支持,人工在线协助服务.',
  appearance: true,
  lastUpdated: false,
  themeConfig: {
    logo: '/logo.png',
    nav: nav(),
    sidebar: {
      '/free-subdomain/': sidebarFreeSubdomain(),
      '/about/': sidebarAbout()
    },
    /*
    editLink: {
      pattern: 'https://github.com/xiaozhu2007/docs/edit/maater/docs/:path',
      text: 'Edit this page on GitHub'
    },
    */
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaozhu2007/docs' }
    ],
    footer: {
      message: 'Released under the WTFPL License.',
      copyright: 'Copyright © 2021-present HelloTools Studio'
    }
  }
})

function nav() {
  return [
    {
      text: 'HelloTools Two',
      link: '/free-domain/introduction',
      activeMatch: '/free-domain/'
    },
    {
      text: '知识库',
      link: '/klb/index',
      activeMatch: '/klb/'
    },
    {
      text: '关于',
      link: '/about/introduction',
      activeMatch: '/about/'
    }
  ]
}

function sidebarFreeSubdomain() {
  return [
    {
      text: 'HelloTools Two',
      collapsible: true,
      items: [
        {
          text: '什么是 HelloTools Two?',
          link: '/free-subdomain/introduction'
        },
        {
          text: '可用域名列表',
          link: '/free-subdomain/domain-list'
        },
        {
          text: '如何使用 HelloTools Two?',
          link: '/free-subdomain/how2get'
        },
        {
          text: 'Q&A',
          link: '/free-subdomain/qanda'
        },
        {
          text: '官方 QQ 群',
          link: '/free-subdomain/qqgroup'
        },
        {
          text: '更新日志',
          link: '/free-subdomain/changelog'
        }
      ]
    }
  ]
}

function sidebarAbout() {
  return [
    {
      text: '关于',
      items: [
        {
          text: 'Introduction',
          link: '/about/introduction'
        },
        {
          text: '会员套餐介绍',
          link: '/about/会员套餐介绍'
        },
        {
          text: '团队成员',
          link: '/about/member'
        }
      ]
    }
  ]
}
