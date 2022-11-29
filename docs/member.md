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
  },
    {
    avatar: 'https://www.github.com/github.png',
    name: '虚位以待',
    title: 'It may be you?',
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
