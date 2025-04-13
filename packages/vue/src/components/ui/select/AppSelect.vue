<template> 
  <select class="select">
    <option>{{ label }}</option>
    <option v-for="(item, index) in items" :key="'item'+ index" :value="item">{{ item }}</option>
  </select>
</template>

<script setup lang="ts">
interface IProps {
  items: Array<string> 
  label:string
}

defineOptions({
  name: "AppSelect",
});

const props = defineProps<IProps>();
</script>

<style scoped  lang="scss">

.select {
  outline: 0;

  width:100%;

  display:block;

  font-size: var(--v-theme-font-size-sm);

  background-color: rgb(var(--v-theme-dark-300));

  padding: 0.6rem 1rem;

  border-radius: 24px;

  border: 1px solid rgb(var(--v-theme-gray-400));

  min-width: 240px;

  
  color: rgb(var(--v-theme-gray-600));
   

  &:focus {
    border: 1px solid rgb(var(--v-theme-blue-700));
  }
}
</style>
