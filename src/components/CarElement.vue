<template>
  <div class="car" :style="`background: ${props.car.color}`">
    <div>Брэнд: {{ props.car.brand }}</div>
    <div>Цена: {{ props.car.price }} $</div>

    <UiButton text="Заказать" @click="order(props.car.brand)" isSecondary />
  </div>
</template>

<script setup lang="ts">
import UiButton from './UiButton.vue';

interface IProps {
  car: { color: string; brand: string; price: number };
}

const props = defineProps<IProps>();

function order(brand: string) {
  const text = `Поздавляем с покупкой ${brand}!`;

  alert(text);
}
</script>

<style>
.car {
  width: 50%;
  padding: 16px;
  color: var(--color-white);
  border: 1px solid var(--color-black);
  border-radius: 16px;
}
</style>
