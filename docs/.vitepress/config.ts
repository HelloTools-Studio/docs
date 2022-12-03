import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'HelloTools Cloud',
  titleTemplate: 'HelloTools Studio',
  head: [
    [
      'link',
      { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }
    ],
    ['meta',
      {
        name: 'twitter:card',
        content: 'summary'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'img/logo.png'
      }
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://www.cyfan.ga/'
      }
    ],
  ],
  base: '/',
  description:
    'HelloTools Cloud - SLA高达95%的国内二级域名托管商,智能查询,快速注册,您可以通过强大的自助平台轻松管理您的二级域名. 免费提供各类软件安装包和安装教程,软件更新和升级;并提供技术支持,人工在线协助服务.',
  appearance: true,
  lastUpdated: false,
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: 'Guide',
        link: '/guide'
      },
      {
        text: 'HelloTools Two',
        link: '/free-subdomain/introduction',
        activeMatch: '/free-subdomain/'
      },
      {
        text: '知识库',
        link: '/klb/index',
        activeMatch: '/klb/'
      },
      {
        text: '关于',
        items: [
          { text: '团队介绍', link: '/about/introduction' },
          { text: '帮助我们', link: '/about/introduction#help-us' },
          { text: '团队成员', link: '/about/member' },
          { text: '支持我们', link: '/about/sponsor' }
        ]
      }
    ],
    sidebar: {
      '/free-subdomain/': sidebarFreeSubdomain(),
      '/about/': sidebarAbout()
    },
    editLink: {
      pattern: 'https://github.com/xiaozhu2007/docs/edit/master/docs/:path',
      text: '在 Github 上编辑此页面'
    },
    outline: 'deep',
    outlineTitle: '目录',
    socialLinks: [
      /*
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg>'
        },
        link: '/translations/'
      },
      */
      {
        icon: 'github',
        link: 'https://github.com/HelloTools-Studio'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z"></path></svg>'
        },
        link: '/free-subdomain/qqgroup'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z" /></svg>'
        },
        link: '/about/introduction#help-us'
      }
    ],
    footer: {
      message: 'Released under the WTFPL License.',
      copyright: 'Copyright © 2021-present HelloTools Studio'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})

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
