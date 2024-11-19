<template>
  <div aria-label="card" :class="classes">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ColorTypes } from "@can-i-helpu-ds/tokens";
import { computed } from "vue";

interface IProps {
  background?: ColorTypes;
  borderColor?: ColorTypes;
  disabled?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  borderColor: "gray-100",
});

const classes = computed(() => {
  return {
    box: true,
    [`box--disabled`]: props.disabled !== undefined && props.disabled,
    [`border-${props.borderColor}`]: props.borderColor,
    [`bg-${props.background}`]: props.background,
  };
});
</script>

<style scoped lang="scss">
.box {
  position: relative;

  width: 100%;

  border-radius: 8px;

  border: 1px solid;
  border-color: rgb(var(--v-border-color));

  display: block;

  &--disabled {
    pointer-events: none;
  }
}
</style>
