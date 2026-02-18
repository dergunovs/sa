<template>
  <input
    :value="props.modelValue"
    :disabled="props.isDisabled"
    :placeholder="props.placeholder"
    class="ui-input"
    :class="$attrs.class"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import type { IInputProps, IInputEmits } from './types';

interface Props extends IInputProps {}
interface Emits extends IInputEmits {}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>

<style scoped lang="scss">
.ui-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  background-color: var(--color-bg);
  color: var(--color-text);
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

  &::placeholder {
    color: var(--color-border-dark);
  }
}
</style>

