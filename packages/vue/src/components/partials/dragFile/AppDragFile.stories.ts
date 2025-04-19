import type { Meta, StoryObj } from "@storybook/vue3";
import AppDragFile from "./AppDragFile.vue";
import { ColorValues } from "@can-i-helpu-ds/tokens";
import { computed, ref, watch } from "vue";
import { AppButton } from "@/components";

import "./AppDragFile.stories.styles.scss"

const meta = {
  title: "General/DragFile",
  component: AppDragFile,
  tags: ["autodocs"],

  args: {},

  argTypes: {
    modelValue: {
      control: "boolean",
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args, { argTypes }) => ({
    components: { AppDragFile , AppButton},
    setup() {
      // @ts-ignore
      const model = ref(args.modelValue);

      watch(
        // @ts-ignore
        () => args.modelValue,
        (val) => {
          model.value = val;
        }
      );
      return { args, model };
    },
    template: `

      <AppDragFile class="storybook-drag-height" />
    `,
  }),
};
