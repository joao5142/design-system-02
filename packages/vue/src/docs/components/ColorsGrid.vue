<script setup lang="ts">
import { colors as COLORS } from "@can-i-helpu-ds/tokens";
import { getContrast } from "polished";
import { computed } from "vue";

interface IProps {
  theme: "light" | "dark";
}

const props = withDefaults(defineProps<IProps>(), {
  theme: "light",
});

const colors = computed(() => {
  return COLORS?.[props.theme] ?? {};
});
</script>

<template>
  <div>
    <div
      v-for="([key, value], index) in Object.entries(colors)"
      :key="'color' + index"
    >
      <div
        :style="{
          backgroundColor: value,
          padding: '2rem',
          marginBottom: '0.5rem',
        }"
      >
        <div
          :style="{
            fontSize: '1.2rem',
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(value, '#fff') < 3.5 ? 'black' : 'white',
          }"
        >
          <span>{{ key }}</span>
          <span>{{ value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
