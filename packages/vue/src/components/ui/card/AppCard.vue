<template>
  <div aria-label="card" class="card" :class="classes">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { ColorTypes } from "@can-i-helpu-ds/tokens";
import { computed } from "vue";

interface IProps {
  background?: ColorTypes;
  borderColor?: ColorTypes;
  detailColor?: ColorTypes;
  disabled?: boolean;
  detailPosition?: "left" | "right" | "top" | "bottom";
}
const theme = useTheme();
const props = withDefaults(defineProps<IProps>(), {
  background: "gray-50",
  borderColor: "gray-100",
  detailPosition: "left",
});

const classes = computed(() => {
  return {
    [`bg-${props.background}`]: props.background !== undefined,
    [`border-${props.borderColor}`]: props.borderColor !== undefined,
    "card--disabled": props.disabled !== undefined && props.disabled,
    "card--detail": props.detailColor !== undefined && props.detailColor,
    [`card--detail-right`]: props.detailPosition === "right",
    [`card--detail-top`]: props.detailPosition === "top",
    [`card--detail-bottom`]: props.detailPosition === "bottom",
  };
});

const computedColorDetail = computed(() => {
  return props.detailColor
    ? theme.current.value.colors[props.detailColor]
    : "white";
});
</script>

<style scoped lang="scss">
.card {
  position: relative;

  width: 100%;

  padding: 2rem;

  border-radius: 8px;

  border: 1px solid rgb(var(--v-border-color));

  display: block;

  &--detail {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::before {
      content: "";
      position: absolute;

      left: 0px;
      top: 0px;

      height: 100%;
      width: 3px;
      background-color: v-bind(computedColorDetail);
      border-radius: 0px 8px 8px 0px;
    }
  }

  &--detail-right {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    &::before {
      left: unset;
      right: 0px;
      border-radius: 8px 0px 0px 8px;
    }
  }

  &--detail-top,
  &--detail-bottom {
    &::before {
      height: 3px;
      width: 100%;

      right: 0;
      left: 0;
    }
  }
  &--detail-top {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;

    &::before {
      left: unset;
      top: 0px;
      border-radius: 0px 0px 8px 8px;
    }
  }
  &--detail-bottom {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    &::before {
      left: unset;
      bottom: 0px;
      top: unset;
      border-radius: 8px 8px 0px 0px;
    }
  }

  &--disabled {
    pointer-events: none;
  }
}
</style>
