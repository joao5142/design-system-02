import type { Meta, StoryObj } from "@storybook/vue3";
import AppAvatar from "./AppAvatar.vue";
import { ColorValues } from "@can-i-helpu-ds/tokens";

const meta = {
  title: "General/Avatar",
  component: AppAvatar,
  tags: ["autodocs"],

  argTypes: {
    ballBorderColor: {
      control: "select",
      options: ColorValues,
    },
  },

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
