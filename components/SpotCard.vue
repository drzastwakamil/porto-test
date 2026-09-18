<template>
  <li class="spot card">
    <div class="spot__header">
      <div>
        <div class="spot__name">{{ $t(`spots.${spot.id}.name`) }}</div>
        <div class="spot__badges">
          <span class="badge" :class="spot.free ? 'badge-free' : 'badge-paid'">
            {{ spot.free ? $t('common.status.free') : spot.price || $t('common.status.paid') }}
          </span>
          <span class="chip spot__category">{{ $t(`common.category.${spot.category}`) }}</span>
        </div>
      </div>
      <button
        class="spot__fav"
        type="button"
        :class="{ active: isFavorite(spot.id) }"
        :aria-pressed="isFavorite(spot.id)"
        @click="toggle(spot.id)"
      >
        {{ isFavorite(spot.id) ? '★' : '☆' }}
      </button>
    </div>
    <p class="spot__why">{{ $t(`spots.${spot.id}.why`) }}</p>
    <div v-if="hours" class="spot__hours">{{ $t('common.hours') }}: {{ hours }}</div>
    <a :href="mapUrl" target="_blank" rel="noopener" class="spot__map">{{ $t('common.openInMaps') }}</a>
  </li>
</template>

<script setup lang="ts">
import type { Spot } from '~/data/spots'
import { buildGoogleMapsUrl } from '~/utils/maps'

const props = defineProps<{ spot: Spot }>()
const { isFavorite, toggle } = useFavorites()
const { t, te } = useI18n()

const hoursKey = computed(() => `spots.${props.spot.id}.hours`)
const hours = computed(() => (te(hoursKey.value) ? t(hoursKey.value) : ''))
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
