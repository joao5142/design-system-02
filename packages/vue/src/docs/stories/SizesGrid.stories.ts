import { space } from "@can-i-helpu-ds/tokens";
import { Meta, StoryObj } from "@storybook/vue3";

import TokensGrid from "../components/TokensGrid.vue";

const meta = {
  title: "Tokens/Spacing",
  component: TokensGrid,
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { tokens: space, hasRemValue: true },
} as any;
