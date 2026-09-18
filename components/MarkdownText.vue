<template>
  <div class="markdown" v-html="html" />
</template>

<script setup lang="ts">
import { renderMarkdown } from '~/utils/markdown'

const props = defineProps<{ text: string }>()
const html = computed(() => renderMarkdown(props.text))
</script>

<style scoped>
.markdown {
  font-size: 14px;
  line-height: 1.5;
}

.markdown :deep(p) {
  margin: 0 0 10px;
}

.markdown :deep(p:last-child) {
  margin-bottom: 0;
}

.markdown :deep(strong) {
  font-weight: 700;
}

.markdown :deep(em) {
  font-style: italic;
}

.markdown :deep(a) {
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: underline;
}
</style>
