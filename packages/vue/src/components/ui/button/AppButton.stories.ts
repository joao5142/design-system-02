import type { Meta, StoryObj } from "@storybook/vue3";
import AppButton from "./AppButton.vue";
import { ColorValues } from "@can-i-helpu-ds/tokens";

const meta = {
  title: "General/Button",
  component: AppButton,
  tags: ["autodocs"],

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { AppButton },
    setup() {
      return { args };
    },
    template: `
      <AppButton  v-bind="args" >      
         Botão
      </AppButton>
    `,
  }),
};
