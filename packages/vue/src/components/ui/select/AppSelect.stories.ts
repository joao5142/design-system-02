import type { Meta, StoryObj } from "@storybook/vue3";
import AppSelect from "./AppSelect.vue";
import { ColorValues } from "@can-i-helpu-ds/tokens";

const meta = {
  title: "General/Input",
  component: AppSelect,
  tags: ["autodocs"],

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
