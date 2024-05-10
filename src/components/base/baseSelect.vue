<template>
  <v-select
    :theme="ThemeStatus"
    v-model="selectedItem"
    :items="scheama"
    :label="label"
    :variant="type"
  ></v-select>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import { themeDataStore } from "@/stores/theme";
const ThemeDS = themeDataStore();

const ThemeStatus = computed(() => {
  return ThemeDS.theme;
});

const emit = defineEmits(["selectValue"]);
const selectedItem = ref(null);

watch(selectedItem, (newValue, oldValue) => {
  emit("selectValue", selectedItem.value);
});

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  scheama: {
    type: Array,
    default: [],
  },
  type: {
    type: String,
    default: "solo",
  },
});
</script>

<style scoped>
.select-content {
  display: flex;
  flex-direction: column;
}

.select-content span {
  font-size: 16px;
  font-weight: 600;
}
</style>
