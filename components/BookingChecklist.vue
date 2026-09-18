<template>
  <section class="section">
    <h2 class="section__title">{{ $t('bookings.title') }}</h2>
    <ul class="list card">
      <li v-for="booking in bookings" :key="booking.id" class="item" :class="{ done: isChecked(booking.id) }">
        <button
          class="item__check"
          type="button"
          :aria-pressed="isChecked(booking.id)"
          :aria-label="t(`bookings.items.${booking.id}.title`)"
          @click="toggle(booking.id)"
        >
          <span v-if="isChecked(booking.id)">✓</span>
        </button>
        <div class="item__body">
          <div class="item__row">
            <span class="item__title">{{ t(`bookings.items.${booking.id}.title`) }}</span>
            <span v-if="!isChecked(booking.id)" class="badge badge-paid">{{ $t('bookings.notBooked') }}</span>
          </div>
          <div v-if="note(booking.id)" class="item__note">{{ note(booking.id) }}</div>
          <a v-if="booking.mapQuery" :href="buildGoogleMapsUrl(booking.mapQuery)" target="_blank" rel="noopener" class="item__map">
            {{ $t('common.map') }}
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { bookings } from '~/data/bookings'
import { buildGoogleMapsUrl } from '~/utils/maps'

const { isChecked, toggle } = useBookingChecklist()
const { t, te } = useI18n()

function note(id: string) {
  const key = `bookings.items.${id}.note`
  return te(key) ? t(key) : ''
}
</script>

<style scoped>
.section {
  margin-bottom: 20px;
}

.section__title {
  font-size: 16px;
  margin-bottom: 8px;
  padding: 0 4px;
}

.list {
  list-style: none;
  margin: 0;
  padding: 2px 16px;
}

.item {
  display: flex;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-border);
}

.item:last-child {
  border-bottom: none;
}

.item__check {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid var(--color-border);
  background: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 13px;
  margin-top: 1px;
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
  flex-wrap: wrap;
}

.item__title {
  font-weight: 600;
}

.item__note {
  font-size: 13px;
  color: var(--color-muted);
  margin-top: 2px;
}

.item__map {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-primary);
  margin-top: 2px;
  display: inline-block;
}
</style>
