<template>
  <div class="app-shell">
    <LocaleSwitcher />
    <slot />
    <InstallPrompt />
    <BottomNav />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100%;
}
</style>
