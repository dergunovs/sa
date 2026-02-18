import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import UiField from './UiField.vue';
import UiInput from './UiInput.vue';
import UiSelect from './UiSelect.vue';

const meta: Meta<typeof UiField> = {
  title: 'UI/UiField',
  component: UiField,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof UiField>;

export const WithInput: Story = {
  args: {
    label: 'E-mail',
  },
  render: (args) => ({
    components: { UiField, UiInput },
    setup() {
      const value = ref('');
      return {
        args,
        value,
      };
    },
    template: `
      <UiField :label="args.label">
        <UiInput v-model="value" placeholder="Введите e-mail" />
      </UiField>
    `,
  }),
};

export const WithSelect: Story = {
  args: {
    label: 'Выберите опцию',
  },
  render: (args) => ({
    components: { UiField, UiSelect },
    setup() {
      const value = ref('Опция 1');
      const options = ['Опция 1', 'Опция 2', 'Опция 3'];
      return {
        args,
        value,
        options,
      };
    },
    template: `
      <UiField :label="args.label">
        <UiSelect v-model="value" :options="options" />
      </UiField>
    `,
  }),
};

