<template>
  <section class="surf">
    <h2 class="surf__title">{{ $t('surfing.title') }}</h2>
    <p class="surf__subtitle">{{ $t('surfing.subtitle') }}</p>

    <div class="wave-banner" aria-hidden="true">
      <svg class="wave-banner__layer wave-banner__layer--back" viewBox="0 0 400 80" preserveAspectRatio="none">
        <path d="M0,40 C50,10 100,70 150,40 C200,10 250,70 300,40 C350,10 400,70 450,40 L450,80 L0,80 Z" />
      </svg>
      <svg class="wave-banner__layer wave-banner__layer--front" viewBox="0 0 400 80" preserveAspectRatio="none">
        <path d="M0,50 C60,20 110,80 170,50 C220,20 270,80 330,50 C380,20 420,80 460,50 L460,80 L0,80 Z" />
      </svg>
      <span class="wave-banner__emoji">🏄</span>
    </div>

    <ol class="steps">
      <li v-for="(step, i) in surfSteps" :key="step.id" ref="stepRefs" class="steps__item">
        <div class="steps__num">{{ i + 1 }}</div>
        <div class="steps__body">
          <div class="steps__title">{{ $t(`surfing.steps.${step.id}.title`) }}</div>
          <div class="steps__desc">{{ $t(`surfing.steps.${step.id}.description`) }}</div>
        </div>
      </li>
    </ol>

    <div class="tips card">
      <div class="tips__title">{{ $t('surfing.tipsTitle') }}</div>
      <ul class="tips__list">
        <li v-for="id in surfTipIds" :key="id">{{ $t(`surfing.tips.${id}`) }}</li>
      </ul>
    </div>

    <div class="spot card">
      <div class="spot__title">{{ $t('surfing.spot.title') }}</div>
      <p class="spot__desc">{{ $t('surfing.spot.description') }}</p>
      <a :href="mapUrl" target="_blank" rel="noopener" class="spot__map">{{ $t('common.openInMaps') }}</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { surfSteps, surfTipIds, surfSpotMapQuery } from '~/data/surfing'
import { buildGoogleMapsUrl } from '~/utils/maps'

const stepRefs = ref<HTMLElement[]>([])
const mapUrl = buildGoogleMapsUrl(surfSpotMapQuery)

onMounted(() => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    stepRefs.value.forEach((el) => el?.classList.add('is-visible'))
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
    { threshold: 0.2 }
  )
  stepRefs.value.forEach((el) => el && observer.observe(el))
})
</script>

<style scoped>
.surf {
  margin-bottom: 24px;
}

.surf__title {
  font-size: 18px;
  margin-bottom: 2px;
}

.surf__subtitle {
  font-size: 13px;
  color: var(--color-muted);
  margin-bottom: 14px;
}

.wave-banner {
  position: relative;
  height: 80px;
  border-radius: var(--radius);
  overflow: hidden;
  background: linear-gradient(180deg, #7ec8e3 0%, #3d8fb0 100%);
  margin-bottom: 18px;
}

.wave-banner__layer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 60px;
}

.wave-banner__layer path {
  fill: #ffffff;
}

.wave-banner__layer--back {
  opacity: 0.35;
  animation: wave-scroll 9s linear infinite;
}

.wave-banner__layer--front {
  opacity: 0.6;
  animation: wave-scroll 6s linear infinite reverse;
}

.wave-banner__emoji {
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 26px;
}

@keyframes wave-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.steps {
  list-style: none;
  margin: 0 0 16px;
  padding: 0;
}

.steps__item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding-bottom: 12px;
  opacity: 0;
  transform: translateX(-10px);
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.steps__item.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.steps__num {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-surface);
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.steps__title {
  font-weight: 700;
  font-size: 14px;
}

.steps__desc {
  font-size: 13px;
  color: var(--color-muted);
}

.tips {
  margin-bottom: 12px;
}

.tips__title {
  font-weight: 700;
  margin-bottom: 8px;
}

.tips__list {
  margin: 0;
  padding-left: 18px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.spot__title {
  font-weight: 700;
  margin-bottom: 4px;
}

.spot__desc {
  font-size: 13px;
  margin-bottom: 8px;
}

.spot__map {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-primary);
}

@media (prefers-reduced-motion: reduce) {
  .wave-banner__layer {
    animation: none;
  }

  .steps__item {
    transition: none;
    opacity: 1;
    transform: none;
  }
}
</style>
