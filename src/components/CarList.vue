<template>
  <div class="cars">
    <CarItem v-for="car in props.cars" :key="car.id" :car="car" />
  </div>
</template>

<script setup lang="ts">
import CarItem from './CarItem.vue';

interface IProps {
  cars: {
    id: number;
    brand: string;
    price: number;
    power: number;
    color: string;
  }[];
}

const props = defineProps<IProps>();
</script>

<style>
.cars {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}
</style>
