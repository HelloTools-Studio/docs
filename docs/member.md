---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/xiaozhu2007.png',
    name: '甜力怕',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/xiaozhu2007' }
    ]
  },{
    avatar: 'https://www.github.com/tac2008.png',
    name: 'TAC',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/tac2008' }
    ]
  },{
    avatar: 'https://www.github.com/1zyao.png',
    name: '1zyao',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/1zyao' }
    ]
  },{
    avatar: 'https://www.github.com/xiaozhu2007.png',
    name: '甜力怕',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/xiaozhu2007' }
    ]
  },{
    avatar: 'https://www.github.com/github.png',
    name: '虚位以待',
    title: 'May be you?',
    links: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      HelloTools is led by an international team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>