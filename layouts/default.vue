<template>
  <div class="app-shell">
    <LocaleSwitcher />
    <main class="app-main">
      <slot />
    </main>
    <InstallPrompt />
    <BottomNav />
  </div>
</template>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
}

.app-main {
  flex: 1 0 auto;
  min-width: 0;
}
</style>
