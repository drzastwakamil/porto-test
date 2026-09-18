<template>
  <div class="page">
    <h1 class="page__title">Explore</h1>
    <p class="page__subtitle">{{ filteredSpots.length }} spots</p>

    <CategoryFilter
      :category="category"
      :cost="cost"
      @update:category="category = $event"
      @update:cost="cost = $event"
    />

    <ul class="spot-list">
      <SpotCard v-for="spot in filteredSpots" :key="spot.id" :spot="spot" />
    </ul>

    <p v-if="!filteredSpots.length" class="empty">No spots match these filters.</p>
  </div>
</template>

<script setup lang="ts">
import { spots } from '~/data/spots'

const category = ref('all')
const cost = ref('all')

const filteredSpots = computed(() =>
  spots.filter((spot) => {
    if (category.value !== 'all' && spot.category !== category.value) return false
    if (cost.value === 'free' && !spot.free) return false
    if (cost.value === 'paid' && spot.free) return false
    return true
  })
)
</script>

<style scoped>
.page__title {
  font-size: 26px;
  margin-bottom: 4px;
}

.page__subtitle {
  color: var(--color-muted);
  font-size: 14px;
  margin-bottom: 16px;
}

.spot-list {
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
}

.empty {
  text-align: center;
  color: var(--color-muted);
  margin-top: 32px;
}
</style>
