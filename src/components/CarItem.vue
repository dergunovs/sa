<template>
  <div class="car">
    <div>
      Фирма: <b>{{ props.car.brand }}</b>
    </div>
    <div>Мощность: {{ props.car.power }} лс.</div>
    <div>Цена: {{ props.car.price }} $$</div>

    <UiButton text="Заказать" @click="order(props.car.brand)" />
  </div>
</template>

<script setup lang="ts">
import UiButton from './UiButton.vue';

interface IProps {
  car: {
    id: number;
    brand: string;
    price: number;
    power: number;
    color: string;
  };
}

const props = defineProps<IProps>();

function order(brand: string) {
  const text = `Поздравляем с покупкой ${brand}`;

  alert(text);
}
</script>

<style>
.car {
  max-width: 50%;
  padding: 16px;
  border: 1px solid black;
  border-radius: 16px;
}
</style>
