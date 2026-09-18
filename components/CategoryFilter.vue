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
        {{ option.label }}
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
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ category: string; cost: string }>()
defineEmits<{ 'update:category': [value: string]; 'update:cost': [value: string] }>()

const categoryOptions = [
  { value: 'all', label: 'All' },
  { value: 'sight', label: 'Sights' },
  { value: 'viewpoint', label: 'Viewpoints' },
  { value: 'museum', label: 'Museums' },
  { value: 'garden', label: 'Gardens' },
  { value: 'experience', label: 'Experiences' }
]

const costOptions = [
  { value: 'all', label: 'Any price' },
  { value: 'free', label: 'Free' },
  { value: 'paid', label: 'Paid' }
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
