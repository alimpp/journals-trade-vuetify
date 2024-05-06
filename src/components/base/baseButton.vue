<template>
  <button class="base-button py-2" :style="{ width: `${width}` }">
    {{ name }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.base-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
