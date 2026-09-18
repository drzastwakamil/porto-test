<template>
  <div class="page">
    <header class="hero">
      <h1>{{ trip.title }}</h1>
      <div class="hero__row">
        <p class="hero__dates">{{ $t('trip.dateRange') }}</p>
        <button type="button" class="hero__share" @click="share">
          <span v-if="shareState === 'copied'">{{ $t('common.linkCopied') }}</span>
          <span v-else>{{ $t('common.share') }}</span>
        </button>
      </div>
    </header>

    <section class="essentials card">
      <div class="essentials__row">
        <span class="essentials__label">{{ $t('trip.stayLabel') }}</span>
        <div>
          <div>{{ trip.accommodation.address }}</div>
          <a :href="accommodationMapUrl" target="_blank" rel="noopener" class="essentials__link">{{ $t('common.openInMaps') }}</a>
          <div class="essentials__note">{{ $t('trip.accommodationNote') }}</div>
        </div>
      </div>
      <div class="essentials__row">
        <span class="essentials__label">{{ $t('trip.arrivalLabel') }}</span>
        <div>
          <div>{{ $t('trip.arrivalDate') }}</div>
          <div class="essentials__note">{{ $t('trip.arrivalNote') }}</div>
        </div>
      </div>
      <div class="essentials__row" :class="{ 'essentials__row--urgent': isTripEndingToday }">
        <span class="essentials__label">{{ $t('trip.departureLabel') }}</span>
        <div>
          <div>{{ $t('trip.departureDate') }} · {{ trip.departure.flightTime }}</div>
          <div class="essentials__note">{{ $t('trip.departureLeaveBy') }} {{ $t('trip.departureNote') }}</div>
        </div>
      </div>
      <div class="essentials__row">
        <span class="essentials__label">{{ $t('trip.matchLabel') }}</span>
        <div>
          <div>{{ trip.match.name }} · {{ $t('trip.matchDate') }}, {{ trip.match.time }}</div>
          <a :href="matchMapUrl" target="_blank" rel="noopener" class="essentials__link">{{ trip.match.venue }} ↗</a>
        </div>
      </div>
    </section>

    <div class="progress">
      <div class="progress__bar">
        <div class="progress__fill" :style="{ width: progressPercent + '%' }" />
      </div>
      <span class="progress__label">{{ $t('itinerary.progress', { checked: checkedCount, total: totalCount }) }}</span>
    </div>

    <div class="day-tabs">
      <button
        v-for="day in itinerary"
        :key="day.id"
        type="button"
        class="chip day-tabs__tab"
        :class="{ active: selectedDayId === day.id }"
        @click="selectedDayId = day.id"
      >
        {{ $t(`itinerary.days.${day.id}.label`) }}
      </button>
    </div>

    <ItineraryDay v-if="selectedDay" :day="selectedDay" />
  </div>
</template>

<script setup lang="ts">
import { trip } from '~/data/trip'
import { itinerary } from '~/data/itinerary'
import { buildGoogleMapsUrl } from '~/utils/maps'
import { detectTodayDayId } from '~/utils/tripDates'

const { t } = useI18n()
const { checkedCount, totalCount } = useItineraryState()

const selectedDayId = ref(detectTodayDayId())
const selectedDay = computed(() => itinerary.find((day) => day.id === selectedDayId.value))
const isTripEndingToday = computed(() => selectedDayId.value === 'mon')

const progressPercent = computed(() => (totalCount ? Math.round((checkedCount.value / totalCount) * 100) : 0))
const accommodationMapUrl = buildGoogleMapsUrl(trip.accommodation.mapQuery)
const matchMapUrl = buildGoogleMapsUrl(trip.match.mapQuery)

const shareState = ref<'idle' | 'copied'>('idle')

async function share() {
  const shareData = { title: trip.title, text: t('trip.dateRange'), url: window.location.href }
  try {
    if (navigator.share) {
      await navigator.share(shareData)
      return
    }
  } catch {
    // user cancelled or share failed — fall through to clipboard
  }
  try {
    await navigator.clipboard.writeText(window.location.href)
    shareState.value = 'copied'
    setTimeout(() => {
      shareState.value = 'idle'
    }, 2000)
  } catch {
    // clipboard unavailable — nothing more we can do
  }
}
</script>

<style scoped>
.hero {
  margin-bottom: 16px;
}

.hero__row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.hero h1 {
  font-size: 26px;
}

.hero__dates {
  color: var(--color-muted);
  margin-top: 4px;
  font-size: 14px;
}

.hero__share {
  flex-shrink: 0;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 700;
  color: var(--color-primary);
  margin-top: 4px;
  white-space: nowrap;
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
  border-radius: 10px;
}

.essentials__row--urgent {
  margin: -8px;
  padding: 8px;
  background: rgba(181, 84, 42, 0.1);
  border: 1px solid rgba(181, 84, 42, 0.3);
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
  margin-bottom: 16px;
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

.day-tabs {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  margin-bottom: 4px;
  padding-bottom: 4px;
}

.day-tabs__tab {
  flex-shrink: 0;
  white-space: nowrap;
}
</style>
