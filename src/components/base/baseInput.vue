<template>
  <div class="app-w-100 app-flex app-flex-column">
    <span class="app-font-size-14 app-font-weight-600 app-py-2">
      {{ label }}
    </span>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :class="{ error: error, 'app-color-white': ThemeStatus === 'dark' }"
    />
    <span
      v-if="error"
      class="app-font-size-12 app-font-weight-600 app-color-danger app-py-2"
    >
      {{ messageError }}
    </span>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { themeDataStore } from "@/stores/theme";
const ThemeDS = themeDataStore();

const ThemeStatus = computed(() => {
  return ThemeDS.theme;
});

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
  height: 40px;
  padding: 0 7px;
  border: 1px solid #a4a4a48b;
  outline-color: #0022ff47;
  border-radius: 5px;
}

.error {
  border: 1px solid #f50000;
}
</style>
