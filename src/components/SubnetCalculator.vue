<template>
  <section class="subnet-card">
    <h1 class="subnet-card__title">Калькулятор подсетей</h1>

    <form class="subnet-card__form" @submit.prevent="handleSubmit">
      <div class="subnet-card__field">
        <label class="subnet-card__label" for="ip">IP адрес</label>
        <input
          id="ip"
          v-model="ip"
          class="subnet-card__input"
          type="text"
          placeholder="Например, 192.168.1.150"
          @keyup.enter="handleSubmit"
        />
        <p v-if="ip && !isIpValidComputed" class="subnet-card__error">
          Введите корректный IPv4-адрес.
        </p>
      </div>

      <div class="subnet-card__field">
        <label class="subnet-card__label" for="mask">Маска подсети</label>
        <select
          id="mask"
          v-model="mask"
          class="subnet-card__select"
        >
          <option
            v-for="option in MASK_OPTIONS"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>

      <button
        class="subnet-card__button"
        type="submit"
        :disabled="!isIpValidComputed"
      >
        Рассчитать
      </button>
    </form>

    <section v-if="hasResult" class="subnet-card__result">
      <h2 class="subnet-card__subtitle">Результат</h2>

      <div class="subnet-card__row">
        <span class="subnet-card__label-text">IP / Маска:</span>
        <span class="subnet-card__value">
          {{ lastIp }} / {{ lastMask }}
        </span>
      </div>

      <div class="subnet-card__row">
        <span class="subnet-card__label-text">Адрес сети:</span>
        <span class="subnet-card__value">
          {{ networkAddress }}
        </span>
      </div>

      <div class="subnet-card__row">
        <span class="subnet-card__label-text">Количество адресов:</span>
        <span class="subnet-card__value">
          {{ addressesCount }}
        </span>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { MASK_OPTIONS } from '../constants/maskOptions';
import { getAddressesCount } from '../utils/getAddressesCount';
import { getNetworkAddress } from '../utils/getNetworkAddress';
import { isIpValid } from '../utils/isIpValid';

const ip = ref('192.168.1.150');
const mask = ref(MASK_OPTIONS[0]?.value ?? '255.255.255.0');

const lastIp = ref('');
const lastMask = ref('');

const isIpValidComputed = computed(() => isIpValid(ip.value));

const networkAddress = computed(() =>
  lastIp.value && lastMask.value ? getNetworkAddress(lastIp.value, lastMask.value) : '',
);

const addressesCount = computed(() =>
  lastMask.value ? getAddressesCount(lastMask.value) : 0,
);

const hasResult = computed(() => Boolean(lastIp.value && lastMask.value));

const handleSubmit = () => {
  if (!isIpValidComputed.value) return;

  lastIp.value = ip.value;
  lastMask.value = mask.value;
};
</script>

<style scoped lang="scss">
.subnet-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 640px;
  margin: 40px auto;
  padding: 24px 28px;
  border-radius: 12px;
  background-color: var(--color-white);
  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.08),
    0 1px 2px rgba(0, 0, 0, 0.06);

  &__title {
    margin-bottom: 8px;
    font-size: 1.5rem;
  }

  &__subtitle {
    margin-bottom: 8px;
    font-size: 1.25rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__label {
    font-weight: 700;
  }

  &__input,
  &__select {
    padding: 8px 10px;
    border: 1px solid var(--color-gray);
    border-radius: 6px;
    font-size: 0.95rem;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;

    &:focus-visible {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary) 20%, transparent);
    }
  }

  &__button {
    align-self: flex-start;
    padding: 8px 18px;
    border-radius: 6px;
    border: 1px solid var(--color-primary);
    background-color: var(--color-primary);
    color: var(--color-white);
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      opacity 0.2s ease,
      transform 0.05s ease;

    &:hover:enabled {
      opacity: 0.95;
    }

    &:active:enabled {
      transform: translateY(1px);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  &__result {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 12px;
    border-top: 1px solid var(--color-gray);
  }

  &__row {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    font-size: 0.95rem;
  }

  &__label-text {
    font-weight: 700;
  }

  &__value {
    font-family: 'base', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  &__error {
    margin: 0;
    font-size: 0.8rem;
    color: var(--color-error);
  }
}

@media (max-width: 640px) {
  .subnet-card {
    margin: 24px 16px;
    padding: 20px 16px;
  }
}
</style>


