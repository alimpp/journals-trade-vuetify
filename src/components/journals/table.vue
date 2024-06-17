<template>
  <BaseTable :tableScheama="tableScheama">
    <template #tableContent>
      <tr
        class="app_pointer"
        v-for="item in dataSource"
        :key="item.id"
        @click="selectRow(item.id)"
        :class="{ highlight: item.id == selectedRow }"
      >
        <td>{{ item.coin }}</td>
        <td>{{ item.entryPrice }}</td>
        <td>{{ item.stopLoss }}</td>
        <td>{{ item.state }}</td>
        <td>{{ item.position }}</td>
      </tr>
    </template>
  </BaseTable>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

import BaseTable from "@/components/base/baseTable.vue";

const emit = defineEmits(["selectedRow"]);
const props = defineProps({
  tableScheama: {
    type: Array,
    default: [],
  },
  dataSource: {
    type: Array,
    default: [],
  },
});

const selectedRow = ref({});

const selectRow = (item) => {
  selectedRow.value = item;
  emit("selectedRow", item);
};
</script>

<style scoped>
.highlight {
  background-color: rgba(3, 163, 255, 0.185);
}
</style>
