<template>
  <div class="ui-field">
    <label v-if="props.label" class="ui-field__label">
      {{ props.label }}
    </label>
    <div class="ui-field__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IFieldProps } from './types';

interface Props extends IFieldProps {}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.ui-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ui-field__label {
  font-weight: 700;
  color: var(--color-text);
}

.ui-field__content {
  display: flex;
  flex-direction: column;
}
</style>

