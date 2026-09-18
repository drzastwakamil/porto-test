<template>
  <div class="page detail" v-if="spot">
    <NuxtLink to="/explore" class="detail__back">← {{ $t('nav.explore') }}</NuxtLink>

    <img
      v-if="spot.image"
      :src="spot.image"
      :alt="$t(`spots.${spot.id}.name`)"
      class="detail__image"
      @error="onImageError"
    />

    <h1 class="detail__title">{{ $t(`spots.${spot.id}.name`) }}</h1>

    <div class="detail__badges">
      <span class="badge" :class="spot.free ? 'badge-free' : 'badge-paid'">
        {{ spot.free ? $t('common.status.free') : spot.price || $t('common.status.paid') }}
      </span>
      <span class="chip">{{ $t(`common.category.${spot.category}`) }}</span>
      <span v-if="spot.day" class="chip">{{ $t(`common.dayShort.${spot.day}`) }}</span>
    </div>

    <MarkdownText v-if="hasStory" class="detail__story" :text="$t(`spots.${spot.id}.story`)" />
    <p v-else class="detail__story-fallback">{{ $t(`spots.${spot.id}.why`) }}</p>

    <div v-if="hours" class="detail__hours">{{ $t('common.hours') }}: {{ hours }}</div>

    <a :href="mapUrl" target="_blank" rel="noopener" class="detail__map">{{ $t('common.openInMaps') }}</a>
  </div>
</template>

<script setup lang="ts">
import { spots } from '~/data/spots'
import { buildGoogleMapsUrl } from '~/utils/maps'

const route = useRoute()
const { t, te } = useI18n()

const spot = computed(() => spots.find((s) => s.id === route.params.id))
const hasStory = computed(() => (spot.value ? te(`spots.${spot.value.id}.story`) : false))
const hoursKey = computed(() => (spot.value ? `spots.${spot.value.id}.hours` : ''))
const hours = computed(() => (hoursKey.value && te(hoursKey.value) ? t(hoursKey.value) : ''))
const mapUrl = computed(() => (spot.value ? buildGoogleMapsUrl(spot.value.mapQuery) : ''))

function onImageError(event: Event) {
  const target = event.target as HTMLElement
  target.style.display = 'none'
}
</script>

<style scoped>
.detail__back {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 12px;
}

.detail__image {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--radius);
  background: var(--color-border);
  margin-bottom: 14px;
}

.detail__title {
  font-size: 24px;
  margin-bottom: 8px;
}

.detail__badges {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.detail__story {
  margin-bottom: 14px;
}

.detail__story-fallback {
  font-size: 14px;
  margin-bottom: 14px;
}

.detail__hours {
  font-size: 13px;
  color: var(--color-muted);
  margin-bottom: 14px;
}

.detail__map {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-primary);
}
</style>
