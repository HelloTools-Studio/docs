<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  const s = document.createElement('script')
  s.async = true
  s.src = `https://yeeee.ml/js/ads.js`
  document.querySelector('.ads-container')!.appendChild(s)
})
</script>

<template>
  <div class="ads-container">
    <div class="ads-cn ads-vertical" data-id="53"></div>
  </div>
</template>

<style>
.ads-container {
  padding: 1px 15px 10px;
  margin-top: 20px;
  background-color: var(--vt-c-bg-soft);
}
.ads-vertical {
  background-color: transparent !important;
}
.ads-text {
  color: var(--vt-c-text-2) !important;
}
</style>