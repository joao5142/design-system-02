<template>
  <div :class="classes">
    <img :src="src ?? UserDefaultImage" :width="size" :height="size" />
  </div>
</template>

<script setup lang="ts">
import { ColorTypes } from "@can-i-helpu-ds/tokens";
import UserDefaultImage from "@/assets/img/user.webp";
import { computed } from "vue";

interface IProps {
  size: number;
  ballBorderColor?: ColorTypes;
  mode?: "on" | "off" | "";
  src: string;
}

const props = withDefaults(defineProps<IProps>(), {
  size: 50,
  mode: "on",
  ballBorderColor: "gray-400",
});

const computedSize = computed(() => {
  return `${props.size}px`;
});

const classes = computed(() => {
  return {
    avatar: true,
    [`avatar--online`]: props.mode == "on",
    [`avatar--offline`]: props.mode == "off",
    [`border-${props.ballBorderColor}`]: Boolean(props.ballBorderColor),
  };
});
</script>

<style scoped lang="scss">
.avatar {
  border-radius: 50%;
  position: relative;

  &,
  img {
    border-radius: 50%;
    object-fit: cover;

    max-width: v-bind(computedSize);
    max-height: v-bind(computedSize);

    min-width: v-bind(computedSize);
    min-height: v-bind(computedSize);

    width: v-bind(computedSize);
    height: v-bind(computedSize);
  }

  &--online::after,
  &--offline::after {
    content: "";

    position: absolute;

    bottom: -2px;
    right: -2px;

    width: 13px;
    height: 13px;

    border: 1px solid rgb(var(--v-border-color));

    border-radius: 50%;
  }

  &--online::after {
    background-color: rgb(var(--v-theme-green-400));
  }

  &--offline::after {
    background-color: rgb(var(--v-theme-red-400));
  }
}
</style>
