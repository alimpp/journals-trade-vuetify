<template>
  <button
    :class="{ 'app-bg-primary': true }"
    class="base-button"
    :style="{ width: `${width}`, height: `${height}` }"
  >
    <v-progress-linear indeterminate v-if="loading"></v-progress-linear>
    <span class="app-font-size-14 app-font-weight-500" v-else>{{ name }}</span>
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
  height: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  bg: { type: String, default: "app-bg-primary" },
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
