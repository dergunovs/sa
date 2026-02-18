<template>
  <button
    :type="props.type"
    :disabled="props.isDisabled"
    class="ui-button"
    :data-layout="props.layout"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { IButtonProps } from './types';

interface Props extends IButtonProps {}

const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
  type: 'button',
});
</script>

<style scoped lang="scss">
.ui-button {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;

  &[data-layout='primary'] {
    background-color: var(--color-primary);
    color: var(--color-white);
    border: 1px solid var(--color-border);

    &:hover:not(:disabled) {
      background-color: var(--color-primary-hover);
    }
  }

  &[data-layout='secondary'] {
    background-color: transparent;
    color: var(--color-text);
    border: 1px solid var(--color-border);

    &:hover:not(:disabled) {
      background-color: var(--color-bg-secondary);
      color: var(--color-text);
    }
  }

  &:disabled {
    background-color: var(--color-bg-secondary);
    color: var(--color-border-dark);
    cursor: not-allowed;
    opacity: 0.6;
    border-color: var(--color-border-dark);
  }
}
</style>

