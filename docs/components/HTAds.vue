<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  const s = document.createElement('script')
  s.crossOrigin = "anonymous"
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1596042186115709`
  document.querySelector('.ads-container')!.appendChild(s)
})
</script>

<template>
  <!-- xiaozhu2007-error -->
  <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1596042186115709" data-ad-slot="1680950975"
    data-ad-format="auto" data-full-width-responsive="true"></ins>
</template>
