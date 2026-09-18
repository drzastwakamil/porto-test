<template>
  <li class="item" :class="{ done: isChecked(item.id) }">
    <button
      class="item__check"
      type="button"
      :aria-pressed="isChecked(item.id)"
      :aria-label="title"
      @click="toggle(item.id)"
    >
      <span v-if="isChecked(item.id)">✓</span>
    </button>
    <div class="item__body">
      <div class="item__title">{{ title }}</div>
      <div v-if="note" class="item__note">{{ note }}</div>
      <a v-if="item.mapQuery" :href="mapUrl" target="_blank" rel="noopener" class="item__map">{{ $t('common.map') }}</a>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { CultureItem } from '~/data/culture'
import { buildGoogleMapsUrl } from '~/utils/maps'

const props = defineProps<{ item: CultureItem }>()
const { isChecked, toggle } = useCultureChecklist()
const { t, te } = useI18n()

const title = computed(() => t(`culture.items.${props.item.id}.title`))
const note = computed(() => {
  const key = `culture.items.${props.item.id}.note`
  return te(key) ? t(key) : ''
})
const mapUrl = computed(() => (props.item.mapQuery ? buildGoogleMapsUrl(props.item.mapQuery) : ''))
</script>

<style scoped>
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
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0 8px;
}

.item__title {
  font-weight: 600;
}

.item__note {
  font-size: 13px;
  color: var(--color-muted);
}

.item__map {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-primary);
}
</style>
