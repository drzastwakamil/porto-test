<template>
  <div class="page">
    <h1 class="page__title">{{ $t('nav.guide') }}</h1>
    <p class="page__subtitle">{{ $t('guide.subtitle') }}</p>

    <GuideSection
      v-for="section in sections"
      :key="section.id"
      :title="section.title"
      :items="section.items"
    />

    <section class="phrases-section card">
      <h2 class="phrases-section__title">{{ $t('guide.phrasesTitle') }}</h2>
      <ul class="phrases">
        <li v-for="phrase in phrases" :key="phrase.pt" class="phrases__item">
          <span class="phrases__pt">{{ phrase.pt }}</span>
          <span class="phrases__translation">{{ locale === 'pl' ? phrase.pl : phrase.en }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { guideSectionIds, phrases } from '~/data/guide'

const { t, tm, rt, locale } = useI18n()

const sections = computed(() =>
  guideSectionIds.map((id) => ({
    id,
    title: t(`guide.sections.${id}.title`),
    items: (tm(`guide.sections.${id}.items`) as unknown[]).map((item) => rt(item))
  }))
)
</script>

<style scoped>
.page__title {
  font-size: 26px;
  margin-bottom: 4px;
}

.page__subtitle {
  color: var(--color-muted);
  font-size: 14px;
  margin-bottom: 16px;
}

.phrases-section__title {
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 16px;
}

.phrases {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.phrases__item {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 14px;
}

.phrases__pt {
  font-weight: 600;
}

.phrases__translation {
  color: var(--color-muted);
  text-align: right;
}
</style>
