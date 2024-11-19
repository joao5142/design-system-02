import type { Meta, StoryObj } from "@storybook/vue3";
import AppText from "./AppText.vue";
import {
  ColorValues,
  FontFamilyValues,
  FontSizeValues,
  FontWeightValues,
} from "@can-i-helpu-ds/tokens";
import { textTagTypesArray } from "./@constants";

const meta = {
  title: "General/Text",
  component: AppText,
  tags: ["autodocs"],

  args: {},

  argTypes: {
    as: {
      control: "select",
      options: textTagTypesArray,
    },
    size: {
      control: "select",
      options: FontSizeValues,
    },
    weight: {
      control: "select",
      options: FontWeightValues,
    },
    color: {
      control: "select",
      options: ColorValues,
    },
    family: {
      control: "select",
      options: FontFamilyValues,
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { AppText },
    setup() {
      return { args };
    },
    template: `
      <AppText  v-bind="args" >      
         Text teste
      </AppText>
    `,
  }),
};
