<template>
  <div class="page">
    <h1 class="page__title">{{ $t('nav.explore') }}</h1>
    <p class="page__subtitle">{{ subtitle }}</p>

    <CategoryFilter
      :category="category"
      :cost="cost"
      :favorites-only="favoritesOnly"
      @update:category="category = $event"
      @update:cost="cost = $event"
      @update:favorites-only="favoritesOnly = $event"
    />

    <ul class="spot-list">
      <SpotCard v-for="spot in filteredSpots" :key="spot.id" :spot="spot" />
    </ul>

    <p v-if="!filteredSpots.length" class="empty">{{ $t('common.noSpotsMatch') }}</p>
  </div>
</template>

<script setup lang="ts">
import { spots } from '~/data/spots'

const { locale } = useI18n()
const { isFavorite } = useFavorites()

const category = ref('all')
const cost = ref('all')
const favoritesOnly = ref(false)

const filteredSpots = computed(() =>
  spots.filter((spot) => {
    if (category.value !== 'all' && spot.category !== category.value) return false
    if (cost.value === 'free' && !spot.free) return false
    if (cost.value === 'paid' && spot.free) return false
    if (favoritesOnly.value && !isFavorite(spot.id)) return false
    return true
  })
)

const subtitle = computed(() => {
  const count = filteredSpots.value.length
  if (locale.value === 'pl') return `Liczba miejsc: ${count}`
  return `${count} spot${count === 1 ? '' : 's'}`
})
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
