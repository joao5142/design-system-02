import type { Meta, StoryObj } from "@storybook/vue3";
import AppPost from "./AppPost.vue";

const meta = {
  title: "General/Post",
  component: AppPost,
  tags: ["autodocs"],

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
