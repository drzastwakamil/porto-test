<template>
  <section class="history">
    <h2 class="history__title">{{ $t('history.title') }}</h2>
    <p class="history__subtitle">{{ $t('history.subtitle') }}</p>
    <ol class="timeline">
      <li v-for="event in history" :key="event.id" ref="itemRefs" class="timeline__item">
        <div class="timeline__marker">
          <span class="timeline__dot" />
          <span class="timeline__line" />
        </div>
        <div class="timeline__content card">
          <img
            v-if="event.image"
            :src="event.image"
            :alt="$t(`history.events.${event.id}.title`)"
            class="timeline__image"
            loading="lazy"
            @error="onImageError"
          />
          <div class="timeline__body">
            <div class="timeline__year">{{ event.year }}</div>
            <div class="timeline__event-title">{{ $t(`history.events.${event.id}.title`) }}</div>
            <MarkdownText class="timeline__note" :text="$t(`history.events.${event.id}.note`)" />
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import { history } from '~/data/history'

const itemRefs = ref<HTMLElement[]>([])

onMounted(() => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    itemRefs.value.forEach((el) => el?.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.15 }
  )
  itemRefs.value.forEach((el) => el && observer.observe(el))
})

function onImageError(event: Event) {
  const target = event.target as HTMLElement
  target.style.display = 'none'
}
</script>

<style scoped>
.history {
  margin-bottom: 24px;
}

.history__title {
  font-size: 18px;
  margin-bottom: 2px;
}

.history__subtitle {
  font-size: 13px;
  color: var(--color-muted);
  margin-bottom: 16px;
}

.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
}

.timeline__item {
  display: flex;
  gap: 12px;
  padding-bottom: 16px;
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.timeline__item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline__item:last-child {
  padding-bottom: 0;
}

.timeline__marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 12px;
  padding-top: 4px;
}

.timeline__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-primary);
  flex-shrink: 0;
}

.timeline__line {
  flex: 1;
  width: 2px;
  background: var(--color-muted);
  opacity: 0.35;
  margin-top: 4px;
}

.timeline__item:last-child .timeline__line {
  display: none;
}

.timeline__content {
  flex: 1;
  padding: 10px 14px;
  overflow: hidden;
}

.timeline__image {
  display: block;
  width: calc(100% + 28px);
  margin: -10px -14px 10px;
  height: 140px;
  object-fit: cover;
  background: var(--color-border);
}

.timeline__year {
  font-size: 11px;
  font-weight: 700;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 2px;
}

.timeline__event-title {
  font-weight: 700;
  margin-bottom: 4px;
}

.timeline__note {
  font-size: 13px;
}

@media (prefers-reduced-motion: reduce) {
  .timeline__item {
    transition: none;
    opacity: 1;
    transform: none;
  }
}
</style>
