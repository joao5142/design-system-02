import type { Meta, StoryObj } from "@storybook/vue3";
import AppLoading from "./AppLoading.vue";

const meta = {
  title: "General/Loading",
  component: AppLoading,
  tags: ["autodocs"],

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
