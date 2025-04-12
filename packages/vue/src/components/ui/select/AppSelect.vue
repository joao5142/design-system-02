<template>
  <v-select v-bind="props" class="select" />
</template>

<script setup lang="ts">
import { VSelect } from "vuetify/components";

type VSelectTypes = VSelect["$props"];

interface IProps extends /* @vue-ignore */ VSelectTypes {}

defineOptions({
  name: "AppSelect",
});

const props = defineProps<IProps>();
</script>

<style scoped lang="scss">
.select {
  outline: 0;

  font-size: var(--v-theme-font-size-sm);

  background-color: rgb(var(--v-theme-dark-300));

  padding: 0.6rem 1rem;

  border-radius: 24px;

  border: 1px solid rgb(var(--v-theme-gray-400));

  &::placeholder {
    color: rgb(var(--v-theme-gray-600));
  }

  &:focus {
    border: 1px solid rgb(var(--v-theme-blue-700));
  }
}
</style>
