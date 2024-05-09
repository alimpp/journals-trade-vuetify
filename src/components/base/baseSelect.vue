<template>
  <v-select
    v-model="selectedItem"
    :items="scheama"
    :label="label"
    variant="solo"
  ></v-select>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

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
