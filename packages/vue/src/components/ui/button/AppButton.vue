<template>
  <button
    class="button"
    :class="classes"
    @click="!disabled ? $emit('click') : ''"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ColorTypes } from "@can-i-helpu-ds/tokens";
import { computed } from "vue";

interface IProps {
  disabled?: boolean;
  outlined?: boolean;
  full?: boolean;
  isFab?: boolean;
  rounded?: boolean;
  borderColor?: ColorTypes;
  color?: ColorTypes;
  background?: ColorTypes;
  size?: "xl" | "lg" | "md" | "sm";

  transparent?: boolean;
  glow?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  size: "md",
  background: "primary",
  color: "white-900",
  glow: false,
});

const classes = computed(() => {
  return {
    "button--full": props.full !== undefined && props.full,
    "button--disabled": props.disabled !== undefined && props.disabled,
    [`text-${props.color}`]: props.color !== undefined,
    [`bg-${props.background}`]:
      props.background !== undefined && !props.outlined,
    "button--outlined": props.outlined !== undefined && props.outlined,
    [`button--border border-${props.borderColor}`]:
      props.borderColor !== undefined && props.borderColor,
    [`button--size-${props.size}`]: props.size,
    "button--fab": props.isFab !== undefined && props.isFab,
    "button--transparent": props.transparent !== undefined && props.transparent,
    "button--rounded": props.rounded !== undefined && props.rounded,
    "button--glow": props.glow !== undefined && props.glow,
  };
});
</script>

<style scoped lang="scss">
.button {
  font-weight: 400;
  font-size: var(--v-theme-font-size-sm);
  text-transform: none;

  transition: all 0.3s linear;

  border-radius: 24px;
  border-color: rgb(var(--v-border-color));

  display: flex;
  align-items: center;
  justify-content: center;

  width: max-content;

  &:active {
    scale: 0.98;
  }

  &--outlined {
    border-width: 1px;
    border-style: solid;

    background: none !important;
  }

  &--disabled {
    pointer-events: none;
    background-color: rgb(var(--v-theme-gray-100)) !important;

    color: rgb(var(--v-theme-text-500)) !important;

    > * {
      color: rgb(var(--v-theme-text-500)) !important;
    }
  }

  &.button--outlined.button--disabled {
    border-color: rgb(var(--v-theme-gray-100));
    background-color: transparent !important;
    color: rgb(var(--v-theme-text-500)) !important;
  }

  &--full {
    width: 100%;
  }

  &--size-xl {
    padding: 1.25rem;
  }
  &--size-lg {
    padding: 1rem;
  }
  &--size-md {
    padding: 0.75rem;
  }
  &--size-sm {
    padding: 0.625rem;
  }

  &--fab {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  &--border {
    border-width: 1px;
    border-style: solid;
  }

  &--transparent {
    background: transparent !important;
  }

  &--rounded {
    border-radius: 50% !important;
  }

  &--glow {
    box-shadow: 0px 5px 10px #4589f740;
  }
}
</style>
