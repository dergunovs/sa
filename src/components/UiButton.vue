<template>
  <button
    type="button"
    class="button"
    :disabled="props.isDisabled"
    :data-variant="props.variant"
    :data-size="props.size"
  >
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
interface IProps {
  text: string;
  size?: 'default' | 'large';
  variant?: 'default' | 'outlined';
  isDisabled?: boolean;
}

const props = defineProps<IProps>();
</script>

<style>
.button {
  padding: 8px 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: white;
  background-color: rgb(194, 25, 177);
  transition: all 300ms;

  &:hover {
    background-color: rgb(133, 13, 121);
  }

  &[data-variant='outlined'] {
    color: black;
    background-color: transparent;
    border: 1px solid black;

    &:hover {
      opacity: 0.6;
    }

    &:disabled {
      color: #777;
      background-color: #ccc;
    }
  }

  &[data-size='large'] {
    padding: 16px 48px;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
}
</style>
