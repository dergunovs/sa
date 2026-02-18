<template>
  <div class="subnet-calculator">
    <h2>Калькулятор подсетей</h2>

    <div class="subnet-calculator__form">
      <UiField label="IP адрес">
        <UiInput
          v-model="ipAddress"
          placeholder="192.168.1.150"
          :class="{ 'subnet-calculator__input--error': !isValidIp }"
          @keyup.enter="handleCalculate"
        />
        <p v-if="!isValidIp && ipAddress" class="subnet-calculator__error">
          Неверный формат IP адреса
        </p>
      </UiField>

      <UiField label="Маска подсети">
        <UiSelect v-model="selectedMask" :options="SUBNET_MASKS" />
      </UiField>

      <UiButton
        layout="primary"
        type="button"
        :is-disabled="!isValidIp || !ipAddress"
        @click="handleCalculate"
      >
        Рассчитать
      </UiButton>
    </div>

    <div v-if="result" class="subnet-calculator__result">
      <h3>Результаты расчета</h3>
      <div class="subnet-calculator__result-item">
        <strong>IP адрес:</strong> {{ result.ip }}
      </div>
      <div class="subnet-calculator__result-item">
        <strong>Маска подсети:</strong> {{ result.mask }}
      </div>
      <div class="subnet-calculator__result-item">
        <strong>Адрес сети:</strong> {{ result.networkAddress }}
      </div>
      <div class="subnet-calculator__result-item">
        <strong>Количество возможных адресов:</strong>
        {{ result.addressesCount }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

import { SUBNET_MASKS } from '../constants/subnetMasks';
import { isIpValid } from '../utils/ipValidation';
import {
  getNetworkAddress,
  getAddressesCount,
} from '../utils/networkCalculations';
import UiButton from '../ui/UiButton.vue';
import UiInput from '../ui/UiInput.vue';
import UiSelect from '../ui/UiSelect.vue';
import UiField from '../ui/UiField.vue';

interface CalculationResult {
  ip: string;
  mask: string;
  networkAddress: string;
  addressesCount: number;
}

const ipAddress = ref('');
const selectedMask = ref(SUBNET_MASKS[8]); // По умолчанию 255.255.255.0
const result = ref<CalculationResult | null>(null);

const isValidIp = computed(() => {
  if (!ipAddress.value) return true;
  return isIpValid(ipAddress.value);
});

function handleCalculate() {
  if (!isValidIp.value || !ipAddress.value) return;

  const networkAddress = getNetworkAddress(ipAddress.value, selectedMask.value);
  const addressesCount = getAddressesCount(selectedMask.value);

  result.value = {
    ip: ipAddress.value,
    mask: selectedMask.value,
    networkAddress,
    addressesCount,
  };
}
</script>

<style scoped lang="scss">
.subnet-calculator {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  color: var(--color-text);
}

.subnet-calculator h2 {
  color: var(--color-text);
}

.subnet-calculator__form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.subnet-calculator__input--error {
  border-color: var(--color-error);
}

.subnet-calculator__error {
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-error);
}


.subnet-calculator__result {
  padding: 16px;
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--color-text);
}

.subnet-calculator__result h3 {
  margin-top: 0;
  margin-bottom: 16px;
  color: var(--color-text);
}

.subnet-calculator__result-item {
  margin-bottom: 8px;
  color: var(--color-text);

  strong {
    color: var(--color-text);
  }

  &:last-child {
    margin-bottom: 0;
  }
}
</style>

