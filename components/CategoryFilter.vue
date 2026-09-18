<template>
  <div class="filters">
    <div class="filters__row">
      <button
        v-for="option in categoryOptions"
        :key="option.value"
        type="button"
        class="chip"
        :class="{ active: category === option.value }"
        @click="$emit('update:category', option.value)"
      >
        {{ $t(`common.filters.${option.key}`) }}
      </button>
    </div>
    <div class="filters__row">
      <button
        v-for="option in costOptions"
        :key="option.value"
        type="button"
        class="chip"
        :class="{ active: cost === option.value }"
        @click="$emit('update:cost', option.value)"
      >
        {{ $t(`common.filters.${option.key}`) }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ category: string; cost: string }>()
defineEmits<{ 'update:category': [value: string]; 'update:cost': [value: string] }>()

const categoryOptions = [
  { value: 'all', key: 'all' },
  { value: 'sight', key: 'sight' },
  { value: 'viewpoint', key: 'viewpoint' },
  { value: 'museum', key: 'museum' },
  { value: 'garden', key: 'garden' },
  { value: 'experience', key: 'experience' }
]

const costOptions = [
  { value: 'all', key: 'anyPrice' },
  { value: 'free', key: 'free' },
  { value: 'paid', key: 'paid' }
]
</script>

<style scoped>
.filters__row {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.chip {
  flex-shrink: 0;
  white-space: nowrap;
}
</style>
