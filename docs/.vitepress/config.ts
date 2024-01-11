import { defineConfig } from 'vitepress'

/**
 * 墙裂建议大家打开自动换行，否则您会感受到“1行SVG，滑动半小时”的快乐
 * 
 * VSCode 的打开快捷方式是 Alt+Z
 */
export default defineConfig({
  lang: 'zh-CN',
  title: 'HelloTools Cloud',
  titleTemplate: 'HelloTools Studio',
  head: [
    [
      'link',
      { rel: 'shortcut icon', href: '/logo.png' }
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
        text: 'HelloTools Two',
        link: '/free-subdomain/introduction',
        activeMatch: '/free-subdomain/'
      },
      {
        text: 'Blog',
        link: 'https://blog.yeeee.ml'
      },
      {
        text: 'About',
        items: [
          { text: '团队介绍', link: '/about/introduction' },
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
          svg: '<svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="larkui-icon icon-svg index-module_size_wVASz" style="width: 20px; min-width: 20px; height: 20px;"><g id="LogoBilibili-控件" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="LogoBilibili-底部栏" transform="translate(-267.000000, -166.000000)" fill="currentColor" fill-rule="nonzero"><g id="LogoBilibili-bilibili-line" transform="translate(267.000000, 166.000000)"><rect id="LogoBilibili-矩形" opacity="0" x="0" y="0" width="20" height="20"></rect><path d="M6.33790476,2.14650453 L9.11676191,4.81235836 L11.8347619,4.81235836 L14.6144762,2.14732657 C14.9493974,1.8261241 15.4924121,1.8261241 15.8273333,2.14732657 C16.1622546,2.46852904 16.1622546,2.98930114 15.8273333,3.31050361 L14.2596191,4.81235836 L16.047619,4.81235836 C16.8432685,4.81235836 17.6063302,5.11548225 18.1689394,5.65504623 C18.7315485,6.19461022 19.047619,6.92641603 19.047619,7.68947474 L19.047619,14.2657408 C19.047619,15.0287995 18.7315485,15.7606053 18.1689394,16.3001693 C17.6063302,16.8397333 16.8432685,17.1428571 16.047619,17.1428571 L4.9047619,17.1428571 C4.10911245,17.1428571 3.3460507,16.8397333 2.78344157,16.3001693 C2.22083243,15.7606053 1.9047619,15.0287995 1.9047619,14.2657408 L1.9047619,7.68947474 C1.9047619,6.92641603 2.22083243,6.19461022 2.78344157,5.65504623 C3.3460507,5.11548225 4.10911245,4.81235836 4.9047619,4.81235836 L6.69190477,4.81235836 L5.12504762,3.30885955 C4.90839156,3.10107799 4.82377773,2.79822975 4.90307935,2.51439485 C4.98238097,2.23055995 5.21355024,2.00885965 5.50950792,1.93280632 C5.8054656,1.85675299 6.12124869,1.93790092 6.33790476,2.14568249 L6.33790476,2.14650453 Z M16.047619,6.45642486 L4.90476192,6.45642486 C4.24251456,6.45642486 3.68862336,6.93891446 3.62504762,7.57110195 L3.61904763,7.68947474 L3.61904763,14.2657408 C3.61904763,14.9008617 4.12214469,15.4320648 4.78133334,15.4930364 L4.90476192,15.4987906 L16.047619,15.4987906 C16.7098664,15.4987906 17.2637576,15.0163011 17.3273333,14.3841136 L17.3333333,14.2657408 L17.3333333,7.68947474 C17.3333333,7.0084801 16.7576994,6.45642486 16.047619,6.45642486 Z M7.04761904,8.92252462 C7.52100598,8.92252462 7.90476191,9.29056144 7.90476191,9.74455788 L7.90476191,11.3886244 C7.90468944,11.8425717 7.52095474,12.2105318 7.04761905,12.2105318 C6.57428337,12.2105318 6.19054866,11.8425717 6.1904762,11.3886244 L6.1904762,9.74455788 C6.1904762,9.29056145 6.57423212,8.92252462 7.04761904,8.92252462 L7.04761904,8.92252462 Z M13.9047619,8.92252462 C14.3781488,8.92252462 14.7619048,9.29056145 14.7619048,9.74455788 L14.7619048,11.3886244 C14.7618323,11.8425717 14.3780976,12.2105318 13.9047619,12.2105318 C13.4314262,12.2105318 13.0476915,11.8425717 13.047619,11.3886244 L13.047619,9.74455788 C13.047619,9.29056144 13.431375,8.92252462 13.9047619,8.92252462 L13.9047619,8.92252462 Z" id="LogoBilibili-形状"></path></g></g></g></svg>'
        },
        link: 'https://space.bilibili.com/538644327?from=ht_studio'
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
      copyright: 'Copyright © 2021-2023 HelloTools Studio'
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
          text: 'Pricing',
          link: '/about/会员套餐介绍'
        },
        {
          text: 'Team Members',
          link: '/about/member'
        }
      ]
    }
  ]
}
