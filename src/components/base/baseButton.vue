<template>
  <div>
    <v-tooltip :text="tooltip">
      <template v-slot:activator="{ props }">
        <button
          v-bind="props"
          :disabled="disabled"
          :class="{
            'app-bg-secondary': bg == 'secondary',
            'app-bg-primary': bg == 'primary',
            'app-bg-warning': bg == 'warning',
            'app-bg-danger': bg == 'danger',
            'app-bg-gray': bg == 'gray',
            'app-bg-light': bg == 'light',
            'app-bg-white': bg == 'white',
            'app-bg-dark': bg == 'dark',
            'app-bg-info': bg == 'info',
            disabled: disabled,
          }"
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
    </v-tooltip>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line no-unused-vars
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
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: { type: String, default: "" },
  bg: {
    type: String,
    default: "primary",
  },
  tooltip: {
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

.disabled {
  cursor: not-allowed;
}
</style>
