<template>
  <button type="button" class="button" :data-secondary="props.isSecondary">{{ props.text }}</button>
</template>

<script setup lang="ts">
interface IProps {
  text: string;
  isSecondary?: boolean;
}

const props = defineProps<IProps>();
</script>

<style>
.button {
  padding: 8px 24px;
  cursor: pointer;
  background: var(--color-gray);
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 8px 1px var(--color-gray);

  &:hover {
    background: var(--color-primary);
  }

  &[data-secondary='true'] {
    color: var(--color-white);
    background: none;
    border: 2px solid var(--color-black);
    box-shadow: 0 0 0 0;
  }
}
</style>
