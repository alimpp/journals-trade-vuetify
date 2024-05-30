<template>
  <div class="app_overflow_hidden">
    <div class="app-flex app-p-l-20-px">
      <div class="app-w-200-px">
        <BaseSelect
          label="Select Coin"
          :scheama="tableScheama.filterBy.coin"
          @selectValue="filteredByCoin"
        />
      </div>
      <div class="mx-2 app-w-200-px">
        <BaseSelect
          label="Select State"
          :scheama="tableScheama.filterBy.state"
          @selectValue="filteredByState"
        />
      </div>
    </div>
    <div class="app-flex">
      <div class="app-flex app-flex-column app-w-95 app-p-l-20-px">
        <TableLoading v-if="loading" />
        <JournalsTable
          v-else
          class="fade_animations"
          :tableScheama="tableScheama"
          :dataSource="tableDataSource"
          @selectedRow="selectedRowHandler"
        />
      </div>
      <div class="app-flex app-flex-column app-align-center app-mx-3 app-w-5">
        <baseButton
          icon="plus"
          width="40px"
          height="40px"
          tooltip="Create New Journal"
          @click="createNewJournal"
        />
        <baseButton
          :disabled="selectedRow == null"
          class="mt-3"
          icon="edit"
          width="40px"
          height="40px"
          bg="secondary"
          tooltip="Edit Selected Journal"
        />
        <baseButton
          :disabled="selectedRow == null"
          class="mt-3"
          icon="delete"
          width="40px"
          height="40px"
          bg="danger"
          tooltip="Remove Selected Journal"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { journalsDataStore } from "@/stores/journals/journalsDS.js";
import { useRouter } from "vue-router";
import { coinsDataStore } from "@/stores/coins/coinsDS.js";

import TableLoading from "@/components/tableLoading/index.vue";
import JournalsTable from "@/components/journals/table.vue";
import BaseSelect from "@/components/base/baseSelect.vue";
import baseButton from "@/components/base/baseButton.vue";

const journalsDS = journalsDataStore();
const coinsDS = coinsDataStore();
const selectedRow = ref(null);
const router = useRouter();

const loading = computed(() => {
  return journalsDS.loading;
});

const tableScheama = computed(() => {
  return journalsDS.tableSchema;
});

const tableDataSource = computed(() => {
  return journalsDS.tableDataSource;
});

const selectedRowHandler = (param) => {
  selectedRow.value = param;
};

const filteredByCoin = (item) => {
  journalsDS.filtredBy(item, "coin");
};

const filteredByState = (item) => {
  journalsDS.filtredBy(item, "state");
};

const createNewJournal = () => {
  router.push("/create-journal");
};

onMounted(() => {
  coinsDS.getCoins();
  journalsDS.tableSchema.filterBy.coin = coinsDS.coins;
});
</script>
