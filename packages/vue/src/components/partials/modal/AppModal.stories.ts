import type { Meta, StoryObj } from "@storybook/vue3";
import AppModal from "./AppModal.vue";
import { ColorValues } from "@can-i-helpu-ds/tokens";
import { ref } from "vue";

const meta = {
  title: "General/Modal",
  component: AppModal,
  tags: ["autodocs"],

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { AppModal },
    setup() {
      const isModalOpen = ref(false);

      function toggleModalValue() {
        isModalOpen.value = !isModalOpen.value;
      }

      return { isModalOpen, toggleModalValue, args };
    },
    template: `
      <AppModal  v-bind="args"   :modelValue="isModalOpen" @update:modelValue="toggleModalValue">      
        <div style="display: flex; align-items:flex-start; gap: 8px;"> 
          teste
        </div> 
      </AppModal>
    `,
  }),
};
