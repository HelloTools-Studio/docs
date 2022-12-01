import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'HelloTools Cloud',
  titleTemplate: 'HelloTools Studio',
  base: '/',
  outDir: '../public',
  description: "HelloTools Cloud - SLA高达95%的国内二级域名托管商,智能查询,快速注册,您可以通过强大的自助平台轻松管理您的二级域名. 免费提供各类软件安装包和安装教程,软件更新和升级;并提供软件安装技术支持,人工在线协助服务.",
  appearance: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    nav: nav(),
    sidebar: sidebars(),
    editLink: {
      pattern: 'https://github.com/xiaozhu2007/docs/edit/maater/docs/:path',
      text: '在 Github 上编辑此页'
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
      text: '知识库',
      link: '/klb/introduction',
      activeMatch: '/klb/'
    },
    {
      text: '关于',
      activeMatch: `^/about/`,
      items: [
        { text: '会员', link: '/about/会员套餐介绍' },
        { text: '团队', link: '/about/member' },
        { text: '赞助', link: '/sponsor' },
      ]
    }
  ]

}
function sidebars() {
  return [
    {
      '/free-subdomain/': [
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
      ],
      '/blog/': [
        {
          text: 'Blog',
          items: [
            {
              text: 'Introduction',
              link: '/blog/introduction'
            },
            {
              text: '会员套餐介绍',
              link: '/blog/会员套餐介绍'
            }
          ]
        }
      ]
    }
  ]
}