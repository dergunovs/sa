# UI Components Library

Библиотека компонентов для проекта.

## Компоненты

### UiButton
Кнопка с поддержкой двух вариантов оформления (primary и secondary).

**Пропсы:**
- `layout: 'primary' | 'secondary'` - вариант оформления
- `isDisabled?: boolean` - состояние отключения
- `type?: 'submit' | 'button'` - тип кнопки

**Слот:**
- Текст кнопки

### UiInput
Текстовое поле ввода.

**Пропсы:**
- `modelValue: string` - значение поля
- `isDisabled?: boolean` - состояние отключения
- `placeholder?: string` - placeholder текст

**Эмиты:**
- `update:modelValue` - передает текстовое значение

### UiField
Обертка для полей ввода с меткой.

**Пропсы:**
- `label: string` - текст метки

**Слот:**
- Для UiInput и UiSelect

### UiSelect
Выпадающий список выбора.

**Пропсы:**
- `modelValue: string` - выбранное значение
- `isDisabled?: boolean` - состояние отключения
- `options: string[]` - массив опций

**Эмиты:**
- `update:modelValue` - передает текстовое значение

## Использование

```vue
<template>
  <UiField label="E-mail">
    <UiInput v-model="email" placeholder="Введите e-mail" />
  </UiField>
  
  <UiField label="Выберите опцию">
    <UiSelect v-model="selected" :options="options" />
  </UiField>
  
  <UiButton layout="primary" @click="handleClick">
    Отправить
  </UiButton>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { UiButton, UiInput, UiField, UiSelect } from '@/ui';

const email = ref('');
const selected = ref('Опция 1');
const options = ['Опция 1', 'Опция 2', 'Опция 3'];
</script>
```

## Публикация в npm

Для публикации библиотеки в npm необходимо:

1. Создать отдельный репозиторий для библиотеки (или использовать текущий)
2. Настроить `package.json` для публикации:
   - Указать `name`, `version`, `main`, `types`, `files`
   - Добавить скрипты для сборки библиотеки
3. Создать конфигурацию сборки (vite.config.ts для библиотеки)
4. Опубликовать через `npm publish`

