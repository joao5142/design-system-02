import type { Meta, StoryObj } from "@storybook/vue3";
import AppSelect from "./AppSelect.vue";
import { ColorValues } from "@can-i-helpu-ds/tokens";

const meta = {
  title: "General/Select",
  component: AppSelect,
  tags: ["autodocs"],

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { AppSelect }, 
    template: `
      <AppSelect label="Selecione o item" v-bind="args" :items="['teste 1', 'teste 2']" />  
    `
  })
};
