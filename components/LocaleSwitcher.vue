<template>
  <div class="locale-switcher">
    <button type="button" :class="{ active: locale === 'en' }" @click="choose('en')">EN</button>
    <button type="button" :class="{ active: locale === 'pl' }" @click="choose('pl')">PL</button>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()

const STORAGE_KEY = 'porto-weekend:locale'

onMounted(() => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'pl') setLocale(saved)
  } catch {
    // storage unavailable — fall back to the default locale
  }
})

function choose(code: 'en' | 'pl') {
  setLocale(code)
  try {
    window.localStorage.setItem(STORAGE_KEY, code)
  } catch {
    // storage unavailable — selection just won't persist
  }
}
</script>

<style scoped>
.locale-switcher {
  position: fixed;
  top: calc(10px + var(--safe-top));
  right: 12px;
  display: flex;
  gap: 2px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 3px;
  z-index: 25;
}

.locale-switcher button {
  border: none;
  background: none;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  color: var(--color-muted);
}

.locale-switcher button.active {
  background: var(--color-primary);
  color: #fff;
}
</style>
