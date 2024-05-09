<template>
  <div class="journals-page">
    <div class="app-flex">
      <div style="width: 200px">
        <BaseSelect
          label="Select Coin"
          :scheama="tableScheama.filterBy.coin"
          @selectValue="filteredByCoin"
        />
      </div>
      <div style="width: 200px" class="mx-2">
        <BaseSelect
          label="Select State"
          :scheama="tableScheama.filterBy.state"
          @selectValue="filteredByState"
        />
      </div>
    </div>
    <div class="app-flex">
      <div class="app-flex app-flex-column app-w-90">
        <TableLoading v-if="loading" />
        <JournalsTable
          v-else
          class="fade_animations"
          :tableScheama="tableScheama"
          :dataSource="tableDataSource"
        />
      </div>
      <div class="app-flex app-flex-column app-align-center app-mx-3 app-w-10">
        <baseButton icon="plus" width="40px" height="40px" />
        <baseButton class="mt-3" icon="edit" width="40px" height="40px" />
        <baseButton class="mt-3" icon="delete" width="40px" height="40px" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { journalsDataStore } from "@/stores/journals/journalsDS.js";

import TableLoading from "@/components/tableLoading/index.vue";
import JournalsTable from "@/components/journals/table.vue";
import BaseSelect from "@/components/base/baseSelect.vue";
import baseButton from "@/components/base/baseButton.vue";

const journalsDS = journalsDataStore();

const loading = computed(() => {
  return journalsDS.loading;
});

const tableScheama = computed(() => {
  return journalsDS.tableSchema;
});

const tableDataSource = computed(() => {
  return journalsDS.tableDataSource;
});

const filteredByCoin = (item) => {
  journalsDS.filtredBy(item, "coin");
};

const filteredByState = (item) => {
  journalsDS.filtredBy(item, "state");
};
</script>
