import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import UiInput from './UiInput.vue';

const meta: Meta<typeof UiInput> = {
  title: 'UI/UiInput',
  component: UiInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof UiInput>;

export const Default: Story = {
  args: {
    modelValue: '',
    isDisabled: false,
    placeholder: 'Введите текст',
  },
  render: (args) => ({
    components: { UiInput },
    setup() {
      const value = ref(args.modelValue);
      return {
        args,
        value,
      };
    },
    template:
      '<UiInput v-model="value" :is-disabled="args.isDisabled" :placeholder="args.placeholder" />',
  }),
};

export const WithValue: Story = {
  args: {
    modelValue: 'Пример текста',
    isDisabled: false,
    placeholder: 'Введите текст',
  },
  render: (args) => ({
    components: { UiInput },
    setup() {
      const value = ref(args.modelValue);
      return {
        args,
        value,
      };
    },
    template:
      '<UiInput v-model="value" :is-disabled="args.isDisabled" :placeholder="args.placeholder" />',
  }),
};

export const Disabled: Story = {
  args: {
    modelValue: '',
    isDisabled: true,
    placeholder: 'Введите текст',
  },
  render: (args) => ({
    components: { UiInput },
    setup() {
      const value = ref(args.modelValue);
      return {
        args,
        value,
      };
    },
    template:
      '<UiInput v-model="value" :is-disabled="args.isDisabled" :placeholder="args.placeholder" />',
  }),
};


