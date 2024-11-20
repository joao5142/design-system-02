import type { Meta, StoryObj } from "@storybook/vue3";
import AppUserCard from "./AppUserCard.vue";

const meta = {
  title: "General/UserCard",
  component: AppUserCard,
  tags: ["autodocs"],

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
