<template>
  <div class="page">
    <header class="hero">
      <h1>{{ trip.title }}</h1>
      <p class="hero__dates">{{ trip.dateRange }}</p>
    </header>

    <section class="essentials card">
      <div class="essentials__row">
        <span class="essentials__label">Stay</span>
        <div>
          <div>{{ trip.accommodation.address }}</div>
          <a :href="accommodationMapUrl" target="_blank" rel="noopener" class="essentials__link">Open in Maps ↗</a>
          <div class="essentials__note">{{ trip.accommodation.note }}</div>
        </div>
      </div>
      <div class="essentials__row">
        <span class="essentials__label">Arrival</span>
        <div>
          <div>{{ trip.arrival.date }}</div>
          <div class="essentials__note">{{ trip.arrival.note }}</div>
        </div>
      </div>
      <div class="essentials__row">
        <span class="essentials__label">Departure</span>
        <div>
          <div>{{ trip.departure.date }} · flight {{ trip.departure.flightTime }}</div>
          <div class="essentials__note">
            Leave the apartment by {{ trip.departure.leaveApartmentBy }}. {{ trip.departure.note }}
          </div>
        </div>
      </div>
      <div class="essentials__row">
        <span class="essentials__label">Match</span>
        <div>
          <div>{{ trip.match.name }} · {{ trip.match.date }}, {{ trip.match.time }}</div>
          <a :href="matchMapUrl" target="_blank" rel="noopener" class="essentials__link">{{ trip.match.venue }} ↗</a>
        </div>
      </div>
    </section>

    <div class="progress">
      <div class="progress__bar">
        <div class="progress__fill" :style="{ width: progressPercent + '%' }" />
      </div>
      <span class="progress__label">{{ checkedCount }} / {{ totalCount }} done</span>
    </div>

    <ItineraryDay v-for="day in itinerary" :key="day.id" :day="day" />
  </div>
</template>

<script setup lang="ts">
import { trip } from '~/data/trip'
import { itinerary } from '~/data/itinerary'
import { buildGoogleMapsUrl } from '~/utils/maps'

const { checkedCount, totalCount } = useItineraryState()
const progressPercent = computed(() => (totalCount ? Math.round((checkedCount.value / totalCount) * 100) : 0))
const accommodationMapUrl = buildGoogleMapsUrl(trip.accommodation.mapQuery)
const matchMapUrl = buildGoogleMapsUrl(trip.match.mapQuery)
</script>

<style scoped>
.hero {
  margin-bottom: 16px;
}

.hero h1 {
  font-size: 26px;
}

.hero__dates {
  color: var(--color-muted);
  margin-top: 4px;
  font-size: 14px;
}

.essentials {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.essentials__row {
  display: flex;
  gap: 12px;
}

.essentials__label {
  flex-shrink: 0;
  width: 72px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-muted);
  padding-top: 2px;
}

.essentials__link {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 13px;
}

.essentials__note {
  font-size: 13px;
  color: var(--color-muted);
  margin-top: 2px;
}

.progress {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.progress__bar {
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: var(--color-border);
  overflow: hidden;
}

.progress__fill {
  height: 100%;
  background: var(--color-primary);
  transition: width 0.2s ease;
}

.progress__label {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-muted);
  white-space: nowrap;
}
</style>
