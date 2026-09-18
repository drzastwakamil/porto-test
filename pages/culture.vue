<template>
  <div class="page">
    <h1 class="page__title">{{ $t('nav.culture') }}</h1>
    <HistoryTimeline />
    <CultureSection
      v-for="category in cultureCategoryOrder"
      :key="category"
      :category="category"
      :items="grouped[category]"
    />
  </div>
</template>

<script setup lang="ts">
import { culture, cultureCategoryOrder } from '~/data/culture'

const grouped = computed(() =>
  Object.fromEntries(cultureCategoryOrder.map((category) => [category, culture.filter((item) => item.category === category)]))
)
</script>

<style scoped>
.page__title {
  font-size: 26px;
  margin-bottom: 16px;
}
</style>
