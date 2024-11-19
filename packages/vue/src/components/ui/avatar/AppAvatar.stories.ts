import type { Meta, StoryObj } from "@storybook/vue3";
import AppAvatar from "./AppAvatar.vue";
import { ColorValues } from "@can-i-helpu-ds/tokens";

const meta = {
  title: "General/Avatar",
  component: AppAvatar,
  tags: ["autodocs"],

  argTypes: {
    size: {
      control: { type: "number", min: 50, max: 500, step: 50 },
    },
    ballBorderColor: {
      control: "select",
      options: ColorValues,
    },
    mode: {
      control: "select",
      options: ["on", "off"],
    },
  },

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
