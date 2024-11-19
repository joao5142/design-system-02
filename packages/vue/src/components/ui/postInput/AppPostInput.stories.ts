import type { Meta, StoryObj } from "@storybook/vue3";
import AppPostInput from "./AppPostInput.vue";
import { ColorValues } from "@can-i-helpu-ds/tokens";

const meta = {
  title: "General/PostInput",
  component: AppPostInput,
  tags: ["autodocs"],

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
