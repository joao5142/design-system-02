<template>
  <div class="divider" :class="classes"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface IProps {
  direction: "horizontal" | "vertical";
}

const props = withDefaults(defineProps<IProps>(), {
  direction: "horizontal",
});

const classes = computed(() => {
  return {
    [`divider--${props.direction}`]: true,
  };
});
</script>

<style scoped lang="scss">
.divider {
  &--horizontal {
    border-bottom: 1px solid rgb(var(--v-theme-gray-200));
    height: 1px;
    width: 100%;
  }

  &--vertical {
    border-right: 1px solid rgb(var(--v-theme-gray-200));
    height: 100%;
    width: 1px;
  }
}
</style>
