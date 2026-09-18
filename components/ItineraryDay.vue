<template>
  <section class="day">
    <header class="day__header">
      <h2 class="day__label">{{ $t(`itinerary.days.${day.id}.label`) }} <span class="day__date">{{ $t(`itinerary.days.${day.id}.date`) }}</span></h2>
      <p class="day__theme">{{ $t(`itinerary.days.${day.id}.theme`) }}</p>
    </header>
    <ul class="day__list card">
      <ItineraryItem v-for="item in day.items" :key="item.id" :item="item" />
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { ItineraryDay } from '~/data/itinerary'

defineProps<{ day: ItineraryDay }>()
</script>

<style scoped>
.day {
  margin-bottom: 28px;
}

.day__header {
  margin-bottom: 10px;
  padding: 0 4px;
}

.day__label {
  font-size: 20px;
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.day__date {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-muted);
}

.day__theme {
  margin-top: 4px;
  font-size: 13px;
  color: var(--color-muted);
}

.day__list {
  list-style: none;
  margin: 0;
  padding: 4px 16px;
}
</style>
