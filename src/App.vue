<template>
  <UiButton @click="showMessage" text="Позвоните мне срочно!" />

  <div class="cars">
    <CarElement v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<script setup lang="ts">
import CarElement from './components/CarElement.vue';
import UiButton from './components/UiButton.vue';

const car1 = { id: 1, brand: 'audi', color: 'red', price: 10000 };
const car2 = { id: 2, brand: 'bmw', color: 'green', price: 20000 };
const car3 = { id: 3, brand: 'bmw', color: 'blue', price: 30000 };

const cars = [car1, car2, car3];

function showMessage() {
  alert('Ок, перезвоним');
}
</script>

<style>
.cars {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}
</style>
