<template>
  <select
    :value="props.modelValue"
    :disabled="props.isDisabled"
    class="ui-select"
    @change="handleChange"
  >
    <option v-for="option in props.options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
import type { ISelectProps, ISelectEmits } from './types';

interface Props extends ISelectProps {}
interface Emits extends ISelectEmits {}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

function handleChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
}
</script>

<style scoped lang="scss">
.ui-select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  background-color: var(--color-bg);
  color: var(--color-text);
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  &:disabled {
    background-color: var(--color-bg-secondary);
    cursor: not-allowed;
    opacity: 0.6;
    border-color: var(--color-border-dark);
  }

  option {
    background-color: var(--color-bg);
    color: var(--color-text);
  }
}
</style>

