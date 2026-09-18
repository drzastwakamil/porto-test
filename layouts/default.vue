<template>
  <div class="app-shell">
    <LocaleSwitcher />
    <slot />
    <BottomNav />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100%;
}
</style>
