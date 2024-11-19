import type { Meta, StoryObj } from "@storybook/vue3";
import AppBox from "./AppBox.vue";
import { ColorValues } from "@can-i-helpu-ds/tokens";

const meta = {
  title: "General/Box",
  component: AppBox,
  tags: ["autodocs"],

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { AppBox },
    setup() {
      return { args };
    },
    template: `
      <AppBox  v-bind="args"  >      
        <div style="display: flex; align-items:flex-start; gap: 8px;"> 
          Box
        </div> 
      </AppBox>
    `,
  }),
};
