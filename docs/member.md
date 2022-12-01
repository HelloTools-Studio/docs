---
layout: page
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
    avatar: "https://www.github.com/xiaozhu2007.png",
    name: "甜力怕",
    title: "Creator",
    links: [{ icon: "github", link: "https://github.com/xiaozhu2007" }]
  },
  {
    avatar: "https://www.github.com/tac2008.png",
    name: "TAC",
    title: "Member",
    links: [{ icon: "github", link: "https://github.com/tac2008" }]
  },
  {
    avatar: "https://www.github.com/1zyao.png",
    name: "1zyao",
    title: "Member",
    links: [{ icon: "github", link: "https://github.com/1zyao" }]
  },
  {
    avatar: "https://www.github.com/xiaozhu2007.png",
    name: "vmstatus",
    title: "Member",
    links: [{ icon: "github", link: "https://github.com/vmstatus" }]
  }
];

/**
 * 对于常量 sponsors 来说，`title`属性指的是留言的内容
 * 
 */
const sponsors = [ 
  {
    avatar: "https://www.github.com/github.png",
    name: "Pig2333",
    title: "我看好你",
    links: [{ icon: "github", link: "https://github.com/" }]
  }
];

const partners = [ 
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
      <VPTeamMembers size="medium" :members="sponsors" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>社区伙伴</template>
    <template #lead>一些活跃的社区成员让 HelloTools Cloud 变得更加丰富多彩，团队成员们认为有必要在此特别提及。</template>
    <template #members>
      <VPTeamMembers size="medium" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>