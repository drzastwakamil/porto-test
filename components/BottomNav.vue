<template>
  <nav class="bottom-nav">
    <NuxtLink to="/" class="bottom-nav__item" :class="{ active: route.path === '/' }">
      <span class="bottom-nav__icon">🗓️</span>
      <span>Itinerary</span>
    </NuxtLink>
    <NuxtLink to="/explore" class="bottom-nav__item" :class="{ active: route.path.startsWith('/explore') }">
      <span class="bottom-nav__icon">📍</span>
      <span>Explore</span>
    </NuxtLink>
    <NuxtLink to="/guide" class="bottom-nav__item" :class="{ active: route.path.startsWith('/guide') }">
      <span class="bottom-nav__icon">💡</span>
      <span>Guide</span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding-bottom: var(--safe-bottom);
  z-index: 20;
}

.bottom-nav__item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 10px 0 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-muted);
}

.bottom-nav__item.active {
  color: var(--color-primary);
}

.bottom-nav__icon {
  font-size: 20px;
}
</style>
