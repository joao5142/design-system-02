import { radii } from "@can-i-helpu-ds/tokens";
import { Meta, StoryObj } from "@storybook/vue3";

import TokensGrid from "../components/TokensGrid.vue";

const meta = {
  title: "Tokens/Border",
  component: TokensGrid,
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Radius: Story = {
  args: { tokens: radii },
} as any;
