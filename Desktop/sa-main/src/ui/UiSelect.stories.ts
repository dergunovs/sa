import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import UiSelect from './UiSelect.vue';

const meta: Meta<typeof UiSelect> = {
  title: 'UI/UiSelect',
  component: UiSelect,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    options: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof UiSelect>;

export const Default: Story = {
  args: {
    modelValue: 'Опция 1',
    isDisabled: false,
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
  },
  render: (args) => ({
    components: { UiSelect },
    setup() {
      const value = ref(args.modelValue);
      return {
        args,
        value,
      };
    },
    template:
      '<UiSelect v-model="value" :is-disabled="args.isDisabled" :options="args.options" />',
  }),
};

export const Disabled: Story = {
  args: {
    modelValue: 'Опция 1',
    isDisabled: true,
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
  },
  render: (args) => ({
    components: { UiSelect },
    setup() {
      const value = ref(args.modelValue);
      return {
        args,
        value,
      };
    },
    template:
      '<UiSelect v-model="value" :is-disabled="args.isDisabled" :options="args.options" />',
  }),
};

