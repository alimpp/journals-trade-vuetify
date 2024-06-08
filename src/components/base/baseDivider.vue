<template>
  <div class="app-flex app-flex-column">
    <span class="app-font-size-16 app-color-primary">{{ content }}</span>
    <div class="line app-bg-primary app-mt-1" :style="{ width: `${width}` }"></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.line {
  height: 1px;
}
</style>
