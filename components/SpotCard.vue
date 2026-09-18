<template>
  <li class="spot card">
    <div class="spot__header">
      <div>
        <div class="spot__name">{{ spot.name }}</div>
        <div class="spot__badges">
          <span class="badge" :class="spot.free ? 'badge-free' : 'badge-paid'">
            {{ spot.free ? 'Free' : spot.price || 'Paid' }}
          </span>
          <span class="chip spot__category">{{ categoryLabel }}</span>
        </div>
      </div>
      <button
        class="spot__fav"
        type="button"
        :class="{ active: isFavorite(spot.id) }"
        :aria-pressed="isFavorite(spot.id)"
        :aria-label="`Favorite ${spot.name}`"
        @click="toggle(spot.id)"
      >
        {{ isFavorite(spot.id) ? '★' : '☆' }}
      </button>
    </div>
    <p class="spot__why">{{ spot.why }}</p>
    <div v-if="spot.hours" class="spot__hours">Hours: {{ spot.hours }}</div>
    <a :href="mapUrl" target="_blank" rel="noopener" class="spot__map">Open in Maps ↗</a>
  </li>
</template>

<script setup lang="ts">
import type { Spot } from '~/data/spots'
import { buildGoogleMapsUrl } from '~/utils/maps'

const props = defineProps<{ spot: Spot }>()
const { isFavorite, toggle } = useFavorites()

const categoryLabels: Record<string, string> = {
  sight: 'Sight',
  viewpoint: 'Viewpoint',
  museum: 'Museum',
  garden: 'Garden',
  experience: 'Experience'
}

const categoryLabel = computed(() => categoryLabels[props.spot.category] ?? props.spot.category)
const mapUrl = computed(() => buildGoogleMapsUrl(props.spot.mapQuery))
</script>

<style scoped>
.spot {
  list-style: none;
  margin-bottom: 12px;
}

.spot__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
}

.spot__name {
  font-weight: 700;
  font-size: 16px;
}

.spot__badges {
  display: flex;
  gap: 6px;
  margin-top: 6px;
  flex-wrap: wrap;
}

.spot__fav {
  background: none;
  border: none;
  font-size: 22px;
  color: var(--color-border);
  line-height: 1;
  padding: 0;
}

.spot__fav.active {
  color: var(--color-accent);
}

.spot__why {
  margin: 10px 0 4px;
  font-size: 14px;
}

.spot__hours {
  font-size: 12px;
  color: var(--color-muted);
  margin-bottom: 8px;
}

.spot__map {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-primary);
}
</style>
