<template>
  <div class="home-page">
    <SubnetCalculator />
  </div>
</template>

<script setup lang="ts">
import SubnetCalculator from '../components/SubnetCalculator.vue';
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: var(--bg);
  padding: 1rem;
}
</style>
