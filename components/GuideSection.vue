<template>
  <details class="guide-section card" open>
    <summary class="guide-section__title">{{ title }}</summary>
    <ul class="guide-section__list">
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </details>
</template>

<script setup lang="ts">
defineProps<{ title: string; items: string[] }>()
</script>

<style scoped>
.guide-section {
  margin-bottom: 12px;
}

.guide-section__title {
  font-weight: 700;
  cursor: pointer;
  list-style: none;
}

.guide-section__title::-webkit-details-marker {
  display: none;
}

.guide-section__list {
  margin: 10px 0 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
}
</style>
