import { fontSizes, fontWeights } from "@can-i-helpu-ds/tokens";

import { Meta, StoryObj } from "@storybook/vue3";

import TokensGrid from "../components/TokensGrid.vue";

const meta = {
  title: "Tokens/Fonts",
  component: TokensGrid,
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  args: { tokens: fontSizes, hasRemValue: true },
} as any;

export const Weights: Story = {
  args: { tokens: fontWeights },
} as any;
