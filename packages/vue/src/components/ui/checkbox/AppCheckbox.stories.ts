import type { Meta, StoryObj } from "@storybook/vue3";
import AppCheckbox from "./AppCheckbox.vue";
import { ColorValues } from "@can-i-helpu-ds/tokens";

const meta = {
  title: "General/Checkbox",
  component: AppCheckbox,
  tags: ["autodocs"],

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
