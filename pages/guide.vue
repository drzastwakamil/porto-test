<template>
  <div class="page">
    <h1 class="page__title">Guide</h1>
    <p class="page__subtitle">Practical basics for getting around Porto</p>

    <GuideSection
      v-for="section in guideSections"
      :key="section.id"
      :title="section.title"
      :items="section.items"
    />

    <section class="phrases-section card">
      <h2 class="phrases-section__title">Handy phrases</h2>
      <ul class="phrases">
        <li v-for="phrase in phrases" :key="phrase.pt" class="phrases__item">
          <span class="phrases__pt">{{ phrase.pt }}</span>
          <span class="phrases__en">{{ phrase.en }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { guideSections, phrases } from '~/data/guide'
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

.phrases__en {
  color: var(--color-muted);
  text-align: right;
}
</style>
