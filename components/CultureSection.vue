<template>
  <section class="section">
    <h2 class="section__title">{{ $t(`culture.categories.${category}`) }}</h2>
    <ul class="section__list card">
      <CultureItem v-for="item in items" :key="item.id" :item="item" />
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { CultureCategory, CultureItem } from '~/data/culture'

defineProps<{ category: CultureCategory; items: CultureItem[] }>()
</script>

<style scoped>
.section {
  margin-bottom: 20px;
}

.section__title {
  font-size: 16px;
  margin-bottom: 8px;
  padding: 0 4px;
}

.section__list {
  list-style: none;
  margin: 0;
  padding: 2px 16px;
}
</style>
