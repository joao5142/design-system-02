import type { Meta, StoryObj } from "@storybook/vue3";
import AppDrawer from "./AppDrawer.vue";
import { ColorValues } from "@can-i-helpu-ds/tokens";
import { computed, ref, watch } from "vue";

const meta = {
  title: "General/Modal",
  component: AppDrawer,
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
    components: { AppDrawer },
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
      <AppDrawer v-bind="args" v-model="model">      
        <div style="display: flex; align-items:flex-start; gap: 8px;"> 
          teste
        </div> 
      </AppDrawer>
    `,
  }),
};
