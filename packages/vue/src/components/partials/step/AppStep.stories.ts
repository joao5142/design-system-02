import type { Meta, StoryObj } from "@storybook/vue3";
import AppStep from "./AppStep.vue";
import { ref } from "vue";

const meta = {
  title: "General/Step",
  component: AppStep,
  tags: ["autodocs"],

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { AppStep },
    setup() {
      const steps = [{ name: "Email" }, { name: "Codigo" }, { name: "Senha" }];

      const currentStep = ref<number>(0);

      return { args, steps, currentStep };
    },
    template: `
      <AppStep v-bind="args" :steps="steps" :currentStep="currentStep">
          <template #item.1> teste 1 </template>

          <template #item.3> teste 2</template>

          <template #item.3> teste 3</template>
      </AppStep>
      `
})
};
