<template>
  <li class="item" :class="{ done: isChecked(item.id) }">
    <button
      class="item__check"
      type="button"
      :aria-pressed="isChecked(item.id)"
      :aria-label="itemTitle"
      @click="toggle(item.id)"
    >
      <span v-if="isChecked(item.id)">✓</span>
    </button>
    <div class="item__body">
      <div class="item__row">
        <span class="item__time">{{ displayTime }}</span>
        <span class="badge" :class="`badge-${item.status}`">{{ $t(`common.status.${item.status}`) }}</span>
      </div>
      <div class="item__title">{{ itemTitle }}</div>
      <div v-if="itemNote" class="item__note">{{ itemNote }}</div>
      <div v-if="item.price || item.mapQuery" class="item__meta">
        <span v-if="item.price">{{ item.price }}</span>
        <a v-if="item.mapQuery" :href="mapUrl" target="_blank" rel="noopener" class="item__map">{{ $t('common.map') }}</a>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { ItineraryItem } from '~/data/itinerary'
import { buildGoogleMapsUrl } from '~/utils/maps'

const props = defineProps<{ item: ItineraryItem }>()
const { isChecked, toggle } = useItineraryState()
const { t, te } = useI18n()

const itemTitle = computed(() => t(`itinerary.items.${props.item.id}.title`))
const itemNote = computed(() => {
  const key = `itinerary.items.${props.item.id}.note`
  return te(key) ? t(key) : ''
})
const displayTime = computed(() => {
  if (props.item.time) return props.item.time
  const key = `itinerary.items.${props.item.id}.time`
  return te(key) ? t(key) : ''
})
const mapUrl = computed(() => (props.item.mapQuery ? buildGoogleMapsUrl(props.item.mapQuery) : ''))
</script>

<style scoped>
.item {
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}

.item:last-child {
  border-bottom: none;
}

.item__check {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid var(--color-border);
  background: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  margin-top: 2px;
  padding: 0;
}

.item.done .item__check {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.item.done .item__title {
  text-decoration: line-through;
  color: var(--color-muted);
}

.item__body {
  flex: 1;
  min-width: 0;
}

.item__row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 2px;
}

.item__time {
  font-size: 12px;
  font-weight: 700;
  color: var(--color-muted);
}

.item__title {
  font-weight: 600;
}

.item__note {
  font-size: 13px;
  color: var(--color-muted);
  margin-top: 2px;
}

.item__meta {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-muted);
}

.item__map {
  color: var(--color-primary);
  font-weight: 600;
}
</style>
