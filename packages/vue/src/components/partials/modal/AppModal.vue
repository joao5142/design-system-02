<template>
  <v-dialog v-model="isOpen" persistent :max-width="maxWidth" width="100%">
    <v-card class="ma-0 modal">
      <button class="modal__close-btn" @click="isOpen = false">
        <ph-x :size="32" color="white" />
      </button>

      <slot></slot>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { PhX } from "@phosphor-icons/vue";

interface IProps {
  maxWidth?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  maxWidth: "700px",
});

const isOpen = defineModel<boolean>({ default: true });
</script>

<style scoped lang="scss">
.v-card.v-card--density-default {
  border-radius: 0.5rem !important;

  background-color: rgb(var(--v-theme-white-900));
}
.modal {
  $paddingY: 1.5rem;
  $paddingX: 1.5rem;

  padding: $paddingY $paddingX;

  min-height: 16rem;

  &__close-btn {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.625rem;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;

    border-radius: 50%;

    background: rgb(var(--v-theme-red-500));

    position: absolute;

    top: $paddingY;
    right: $paddingX;

    transition: 0.3s ease;

    &:active {
      scale: 0.9;
    }
  }
}
</style>
