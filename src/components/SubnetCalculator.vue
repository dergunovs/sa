<template>
  <div class="subnet-calculator">
    <h2>Калькулятор подсетей</h2>

    <div class="input-group">
      <label for="ip">IP-адрес:</label>
      <input
        id="ip"
        v-model="ipInput"
        type="text"
        placeholder="192.168.1.150"
        @keyup.enter="calculate"
        :class="{ invalid: !isValid && ipInput }"
      />
    </div>

    <div class="input-group">
      <label for="mask">Маска подсети:</label>
      <select id="mask" v-model="selectedMask">
        <option v-for="mask in masks" :key="mask" :value="mask">{{ mask }}</option>
      </select>
    </div>

    <button class="btn-calculate" :disabled="!isValid" @click="calculate">
      <span class="btn-text">Рассчитать</span>
      <span class="btn-icon">→</span>
    </button>

    <div v-if="result" class="result-box">
      <div class="result-header">
        <h3>Результаты расчета</h3>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <span class="result-label">IP-адрес:</span>
          <span class="result-value ip-address">{{ result.ip }}</span>
        </div>
        <div class="result-item">
          <span class="result-label">Маска:</span>
          <span class="result-value mask-value">{{ result.mask }}</span>
        </div>
        <div class="result-item">
          <span class="result-label">Адрес сети:</span>
          <span class="result-value network-address">{{ result.network }}</span>
        </div>
        <div class="result-item highlight">
          <span class="result-label">Доступных хостов:</span>
          <span class="result-value host-count">{{ result.addressesCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SUBNET_MASKS } from '../constants/masks';
import { isIpValid } from '../utils/validation';
import { getNetworkAddress, getAddressesCount } from '../utils/network';

const ipInput = ref('');
const selectedMask = ref('255.255.255.0');
const masks = SUBNET_MASKS;
const isValid = computed(() => isIpValid(ipInput.value));
const result = ref(null);

function calculate() {
  if (!isValid.value) return;
  result.value = {
    ip: ipInput.value,
    mask: selectedMask.value,
    network: getNetworkAddress(ipInput.value, selectedMask.value),
    addressesCount: getAddressesCount(selectedMask.value),
  };
}
</script>

<style scoped>
.subnet-calculator {
  max-width: 500px;
  margin: 5rem auto;
  padding: 2.5rem;
  background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 24px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  color: #e2e8f0;
  position: relative;
  overflow: hidden;
}

.subnet-calculator::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  border-radius: 24px 24px 0 0;
}

.subnet-calculator h2 {
  text-align: center;
  color: var(--color-white);
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: 0.5px;
  position: relative;
  padding-bottom: 1rem;
}

.subnet-calculator h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  border-radius: 2px;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-gray);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

input,
select {
  width: 100%;
  padding: 0.9rem 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(100, 116, 139, 0.3);
  border-radius: 12px;
  font-size: 1rem;
  color: var(--color-white);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

input::placeholder {
  color: var(--color-placeholder);
}

input:focus,
select:focus {
  outline: none;
  border-color: #00dbde;
  box-shadow: 0 0 0 3px rgba(0, 219, 222, 0.2);
  background: rgba(255, 255, 255, 0.08);
}

input.invalid {
  border-color: #ff6b9d;
  animation: shake 0.3s;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}

.btn-calculate {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  color: var(--color-white);
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 0.5rem;
  position: relative;
  overflow: hidden;
}

.btn-calculate::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-calculate:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 219, 222, 0.4);
}

.btn-calculate:hover:not(:disabled)::before {
  left: 100%;
}

.btn-calculate:disabled {
  background: #475569;
  cursor: not-allowed;
  opacity: 0.5;
}

.btn-icon {
  font-size: 1.2rem;
  transition: transform 0.3s;
}

.btn-calculate:hover:not(:disabled) .btn-icon {
  transform: translateX(5px);
}

.result-box {
  margin-top: 2rem;
  padding: 1.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  animation: slideUp 0.5s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.result-header h3 {
  color: var(--color-white);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.network-icon {
  font-size: 1.5rem;
}

.result-grid {
  display: grid;
  gap: 1rem;
}

.result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  transition: background 0.3s;
}

.result-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.result-item.highlight {
  background: rgba(0, 219, 222, 0.1);
  border-left: 3px solid var(--color-gray);
}

.result-label {
  color: var(--color-label);
  font-weight: 500;
  font-size: 0.9rem;
}

.result-value {
  color: var(--color-white);
  font-weight: 600;
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 1rem;
}

.ip-address {
  color: var(--color-gray);
}

.mask-value {
  color: var(--color-value);
}

.network-address {
  color: var(--color-address);
}

.host-count {
  color: var(--color-count);
  font-size: 1.1rem;
}
</style>
