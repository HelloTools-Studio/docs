---
layout: page
sidebar: false
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from "vitepress/theme";


const coreMembers = [
  {
    "avatar": "/img/member-xiaozhu2007.png",
    "name": "Zhen Liu",
    "title": "Creator",
    "org": "HelloTools",
    "desc": "万恶之源(bushi",
    "links": [{ "icon": "github", "link": "https://github.com/xiaozhu2007" }],
    "sponsor": "https://afdian.net/a/xiaozhu2021"
  },
  {
    "avatar": "/img/member-tac.png",
    "name": "Aochen Tan",
    "title": "Member",
    "links": [{ "icon": "github", "link": "https://github.com/TAC248" }],
    "sponsor": "https://s1.ax1x.com/2022/12/01/z0shND.png"
  },
  {
    "avatar": "https://www.github.com/1zyao.png",
    "name": "1zyao",
    "title": "Member",
    "links": [{ "icon": "github", "link": "https://github.com/1zyao" }]
  },
  {
    "avatar": "/img/member-vmstatus.png",
    "name": "vmstatus",
    "title": "Member",
    "links": [{ "icon": "github", "link": "https://github.com/vmstatus" }]
  }
];

/**
 * 对于常量 sponsors 来说，`title`属性指的是留言的内容
 * 
 */
const sponsors = [ 
  {
    avatar: "https://pic1.afdiancdn.com/user/9176bb7498d911eaa07752540025c377/avatar/2a750d92893ff7c67c5c241930f7cc69_w1080_h1440_s159.jpg?imageView2/1/w/480/h/480",
    name: "Pig2333",
    title: "12 CNY",
    org: "afdian",
    links: [{ icon: "github", link: "https://github.com/" }]
  }
];

const partners = [ 
    {
    avatar: "https://www.github.com/kaiheila.png",
    name: "KOOK(原开黑啦)",
    title: "一个好用的语音沟通工具",
    "desc": "无广告、不掉线、低占用、不延迟",
    links: [{ icon: "github", link: "https://github.com/kaiheila" }]
  },
    {
    avatar: "https://store-g1.seewo.com/enweb/images/share@256.png",
    name: "希沃白板 5",
    title: "为互动教学而生",
    "desc": "更高效的备课体验，更丰富的教学工具",
    links: [{ icon: "github", link: "https://github.com/EasiNote" }]
  },
  {
    avatar: "https://www.github.com/github.png",
    name: "虚位以待",
    title: "May be you?",
    links: [{ icon: "github", link: "https://github.com/" }]
  }
];

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>认识团队</template>
    <template #lead>HelloTools Cloud 的发展的背后是 HelloTools 团队的不懈努力，以下是部分团员的信息。</template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>核心团队成员</template>
    <template #lead>HelloTools Cloud 的发展的背后是 HelloTools 团队的不懈努力，以下是核心团队成员的个人信息。</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreMembers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>赞助商</template>
    <template #lead>在我们的赞助者慷慨的财务支持下，HelloTools Cloud 才得以继续前进。</template>
    <template #members>
      <VPTeamMembers size="small" :members="sponsors" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>社区伙伴</template>
    <template #lead>一些活跃的生产力工具让 HelloTools Cloud 的开发变得更加丰富多彩，团队成员们认为有必要在此特别提及。</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>