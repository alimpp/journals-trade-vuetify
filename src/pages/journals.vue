<template>
  <div class="journals-page app-container">
    <JournalsTable :tableScheama="tableScheama" :dataSource="tableDataSource" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { journalsDataStore } from "@/stores/journals/journalsDS.js";

import JournalsTable from "@/components/journals/table.vue";

const journalsDS = journalsDataStore();

const tableScheama = computed(() => {
  return journalsDS.tableSchema;
});

const tableDataSource = computed(() => {
  return journalsDS.tableDataSource;
});
</script>
