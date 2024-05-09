<template>
  <BaseTable :tableScheama="tableScheama">
    <template #tableContent>
      <tr
        class="app_pointer"
        v-for="item in dataSource"
        :key="item.id"
        @click="selectRow(item)"
        :class="{ 'app-bg-primary': item.id == selectedRow.id }"
      >
        <td>{{ item.coin }}</td>
        <td>{{ item.entryPrice }}</td>
        <td>{{ item.stopLoss }}</td>
        <td>{{ item.target1 }}</td>
        <td>{{ item.target2 }}</td>
        <td>{{ item.target3 }}</td>
        <td>{{ item.state }}</td>
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
