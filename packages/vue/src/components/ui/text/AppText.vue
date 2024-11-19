<template>
  <component :is="props.as" :class="classes"><slot></slot></component>
</template>

<script setup lang="ts">
import {
  FontWeightTypes,
  FontSizesTypes,
  ColorTypes,
  FontFamilyTypes,
} from "@can-i-helpu-ds/tokens";

import { computed } from "vue";
import { TextTagTypes } from "./@types";

interface IProps {
  as?: TextTagTypes;
  size?: FontSizesTypes;
  weight?: FontWeightTypes;
  color?: ColorTypes;
  family?: FontFamilyTypes;
}

const props = withDefaults(defineProps<IProps>(), {
  as: "p",
  family: "primary",
  size: "md",
});

const classes = computed(() => {
  return {
    text: true,
    [`app-font-size-${props.size}`]: props.size,
    [`app-font-weight-${props.weight}`]: props.weight,
    [`text-${props.color}`]: props.color !== undefined,
    "font-family--primary": props.family === "primary",
    "font-family--secondary": props.family === "secondary",
  };
});
</script>

<style lang="scss" scoped>
.button--disabled > .text {
  color: rgb(var(--v-theme-text-500)) !important;
}

.font-family {
  &--primary {
    font-family: "Mulish";
  }
  &--secondary {
    &--primary {
      font-family: "Montserrat";
    }
  }
}
</style>
