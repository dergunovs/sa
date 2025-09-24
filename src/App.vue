<template>
  <UiButton text="Новый вариант кнопки" variant="outlined" size="large" />
  <CarList :cars="cars" />
</template>

<script setup lang="ts">
import CarList from './components/CarList.vue';
import UiButton from './components/UiButton.vue';

const car1 = { id: 1, brand: 'audi', power: 100, color: 'red', price: 10000 };
const car2 = { id: 2, brand: 'bmw', power: 200, color: 'blue', price: 20000 };
const car3 = { id: 3, brand: 'bmw', power: 300, color: 'green', price: 30000 };
const car4 = { id: 4, brand: 'bmw', power: 200, color: 'blue', price: 20000 };
const car5 = { id: 5, brand: 'bmw', power: 300, color: 'green', price: 30000 };

const cars = [car1, car2, car3, car4, car5];
</script>
