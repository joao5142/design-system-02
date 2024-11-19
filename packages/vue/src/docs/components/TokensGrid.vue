<script setup lang="ts">
interface IProps {
  tokens: Record<string, string | number>;
  hasRemValue?: boolean;
  column1Name?: string;
  column2Name: string;
}

withDefaults(defineProps<IProps>(), {
  column1Name: "Name",
  column2Name: "Value",
});
</script>

<template>
  <table class="tokens-grid">
    <thead>
      <tr>
        <th>{{ column1Name }}</th>
        <th>{{ column2Name }}</th>
        <th v-if="hasRemValue">Pixels</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="([key, value], index) in Object.entries(tokens)"
        :key="key + index"
      >
        <td>{{ key }}</td>
        <td>{{ value }}</td>
        <td v-if="hasRemValue">
          {{ Number(String(value)?.replace("rem", "")) * 16 }}px
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.tokens-grid {
  width: 100%;
  font-family: sans-serif;
  color: rgb(var(--v-theme-gray-50));
  border-collapse: collapse;
}

.tokens-grid thead th {
  padding: 0.75rem 1rem;
  text-align: left;

  background-color: rgb(var(--v-theme-gray-300));
  color: rgb(var(--v-theme-gray-900));
}
.tokens-grid tbody td {
  font-weight: 600;
  padding: 0.75rem 1rem;
  color: rgb(var(--v-theme-gray-200));
}

.tokens-grid tbody tr:nth-child(even) td {
  background: rgb(var(--v-theme-gray-300));
  color: rgb(var(--v-theme-gray-600));
}

.tokens-grid tbody tr:nth-child(odd) td {
  background: rgb(var(--v-theme-gray-100));

  color: rgb(var(--v-theme-gray-900));
}
</style>
