import type { Meta, StoryObj } from "@storybook/vue3";
import AppDivider from "./AppDivider.vue";
import { ColorValues } from "@can-i-helpu-ds/tokens";

const meta = {
  title: "General/Card",
  component: AppDivider,
  tags: ["autodocs"],

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { AppDivider },
    setup() {
      return { args };
    },
    template: `
      <AppDivider  v-bind="args" >      
         Card teste
      </AppDivider>
    `,
  }),
};
