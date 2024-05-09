<template>
  <button
    :class="{ 'app-bg-primary': true }"
    class="base-button"
    :style="{ width: `${width}`, height: `${height}` }"
  >
    <v-progress-linear indeterminate v-if="loading"></v-progress-linear>
    <span
      class="app-font-size-14 app-font-weight-500"
      v-if="name != '' && !loading"
      >{{ name }}</span
    >
    <v-icon icon="$plus" v-if="icon == 'plus' && !loading"></v-icon>
    <v-icon icon="$edit" v-if="icon == 'edit' && !loading"></v-icon>
    <v-icon icon="$delete" v-if="icon == 'delete' && !loading"></v-icon>
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
  icon: { type: String, default: "" },
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
