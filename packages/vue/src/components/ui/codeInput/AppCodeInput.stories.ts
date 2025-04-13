import type { Meta, StoryObj } from "@storybook/vue3";
import AppCodeInput from "./AppCodeInput.vue";

const meta = {
  title: "General/CodeInput",
  component: AppCodeInput,
  tags: ["autodocs"],

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
