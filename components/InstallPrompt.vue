<template>
  <div v-if="visible" class="install-fab">
    <div class="install-fab__text">
      <strong>{{ $t('install.title') }}</strong>
      <span>{{ hint }}</span>
    </div>
    <div class="install-fab__actions">
      <button v-if="canPromptInstall" type="button" class="install-fab__cta" @click="doInstall">
        {{ $t('install.button') }}
      </button>
      <button type="button" class="install-fab__dismiss" :aria-label="$t('install.button')" @click="dismiss">✕</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $pwa } = useNuxtApp()
const { t } = useI18n()

const STORAGE_KEY = 'porto-weekend:install-dismissed'

const dismissed = ref(true)
const isIOS = ref(false)
const isStandalone = ref(false)

onMounted(() => {
  try {
    dismissed.value = window.localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    dismissed.value = false
  }
  const ua = window.navigator.userAgent
  isIOS.value = /iphone|ipad|ipod/i.test(ua)
  isStandalone.value =
    window.matchMedia('(display-mode: standalone)').matches || (window.navigator as unknown as { standalone?: boolean }).standalone === true
})

const canPromptInstall = computed(() => Boolean($pwa?.showInstallPrompt))
const alreadyInstalled = computed(() => Boolean($pwa?.isPWAInstalled) || isStandalone.value)
const visible = computed(() => !dismissed.value && !alreadyInstalled.value && (canPromptInstall.value || isIOS.value))
const hint = computed(() => t(canPromptInstall.value ? 'install.hintAndroid' : 'install.hintIOS'))

function doInstall() {
  $pwa?.install()
}

function dismiss() {
  dismissed.value = true
  try {
    window.localStorage.setItem(STORAGE_KEY, '1')
  } catch {
    // storage unavailable — banner just won't stay dismissed
  }
}
</script>

<style scoped>
.install-fab {
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: calc(var(--nav-height) + 12px + var(--safe-bottom));
  z-index: 22;
  background: var(--color-primary);
  color: #fff;
  border-radius: 14px;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
}

.install-fab__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.install-fab__text strong {
  font-size: 14px;
}

.install-fab__text span {
  font-size: 12px;
  opacity: 0.85;
}

.install-fab__actions {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.install-fab__cta {
  background: #fff;
  color: var(--color-primary);
  border: none;
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 700;
}

.install-fab__dismiss {
  background: none;
  border: none;
  color: #fff;
  font-size: 14px;
  padding: 6px;
  opacity: 0.8;
}
</style>
