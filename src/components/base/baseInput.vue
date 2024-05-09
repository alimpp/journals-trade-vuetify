<template>
  <div class="w-100 app-flex app-flex-column">
    <v-text-field clearable :label="label" variant="underlined"></v-text-field>
    <span
      v-if="error"
      class="app-font-size-12 app-font-weight-600 app-color-danger py-2"
    >
      {{ messageError }}
    </span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
    required: false,
  },
  type: {
    type: String,
    default: "",
    required: false,
  },
  error: {
    type: Boolean,
    default: false,
    required: false,
  },
  messageError: {
    type: String,
    default: "",
    required: false,
  },
  modelValue: {
    type: String,
    default: "",
    required: false,
  },
});
</script>

<style scoped lang="scss">
input {
  width: 100%;
  padding: 7px 5px;
  border: 1px solid #a4a4a48b;
  outline-color: #0022ff47;
  border-radius: 5px;
}
</style>
