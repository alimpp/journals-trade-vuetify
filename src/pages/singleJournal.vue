<template>
  <div
    class="content app-border app_border_radius app-flex app-flex-column app-px-4 app-py-3 app-mt-5 app-w-100"
  >
    <span class="app-font-size-20 app-font-weight-500">{{ title }}</span>
    <div class="app-flex app-mt-3">
      <div class="app-flex app-flex-column app-mx-4">
        <span class="app-font-size-14 app-font-weight-700">Entry</span>
        <span class="app-font-size-12 app-mt-3">{{
          journalForm.entryTime
        }}</span>
      </div>

      <div class="app-flex app-flex-column app-px-4">
        <span class="app-font-size-14 app-font-weight-700">Date</span>
        <span class="app-font-size-12 app-mt-3">{{ journalForm.date }}</span>
      </div>

      <div class="app-flex app-flex-column app-px-4">
        <span class="app-font-size-14 app-font-weight-700">State</span>
        <span class="app-font-size-12 app-mt-3">{{ journalForm.state }}</span>
      </div>

      <div class="app-flex app-flex-column app-px-4">
        <span class="app-font-size-14 app-font-weight-700">Position</span>
        <span class="app-font-size-12 app-mt-3">{{
          journalForm.position
        }}</span>
      </div>

      <div class="app-flex app-flex-column app-px-4">
        <span class="app-font-size-14 app-font-weight-700">price</span>
        <span class="app-font-size-12 app-mt-3">{{
          journalForm.entryPrice
        }}</span>
      </div>

      <div class="app-flex app-flex-column app-px-4">
        <span class="app-font-size-14 app-font-weight-700">USDT</span>
        <span class="app-font-size-12 app-mt-3">{{
          journalForm.entryUSDT
        }}</span>
      </div>

      <div class="app-flex app-flex-column app-px-4">
        <span class="app-font-size-14 app-font-weight-700">Targets</span>
        <span
          class="app-font-size-12 app-mt-3"
          v-for="item in journalForm.targets"
          :key="item.id"
          >Tr{{ item.id }} = {{ item.value }}</span
        >
      </div>

      <div class="app-flex app-flex-column app-px-4">
        <span class="app-font-size-14 app-font-weight-700">Stop Loss</span>
        <span class="app-font-size-12 app-mt-3">{{
          journalForm.stopLoss
        }}</span>
      </div>

      <div class="app-flex app-flex-column app-px-4">
        <span class="app-font-size-14 app-font-weight-700">Take Profit</span>
        <span class="app-font-size-12 app-mt-3">{{
          journalForm.takeProfit
        }}</span>
      </div>

      <div class="app-flex app-flex-column app-px-4">
        <span class="app-font-size-14 app-font-weight-700">Loss USDT</span>
        <span class="app-font-size-12 app-mt-3">{{
          journalForm.lossUsdt
        }}</span>
      </div>

      <div class="app-flex app-flex-column app-px-4">
        <span class="app-font-size-14 app-font-weight-700"
          >Entry Description</span
        >
        <span class="app-font-size-12 app-mt-3">{{
          journalForm.entryDescription
        }}</span>
      </div>

      <div class="app-flex app-flex-column app-px-4">
        <span class="app-font-size-14 app-font-weight-700"
          >Exit Description</span
        >
        <span class="app-font-size-12 app-mt-3">{{
          journalForm.exitDescription
        }}</span>
      </div>
    </div>
    <div
      v-if="journalForm.imageUrl"
      class="app-px-8 app-mt-5 app-flex app-flex-column"
    >
      <a :href="journalForm.imageUrl" target="_blank">
        <img
          :src="journalForm.imageUrl"
          width="500"
          class="app_border_radius app-mt-3"
          alt=""
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { journalsDataStore } from "@/stores/journals/journalsDS";
import { useRoute } from "vue-router";

const route = useRoute();
const journalsDS = journalsDataStore();

const title = ref("My Journal");

const journalForm = ref({
  entryTime: "",
  date: "",
  coin: "",
  state: "",
  entryPrice: "",
  stopLoss: "",
  entryUSDT: "",
  entryDescription: "",
  targets: [],
  position: "",
  lossUsdt: "",
  exitDescription: "",
  imageUrl: "",
  takeProfit: "",
});

onMounted(() => {
  journalsDS.getJournals();
  const singleJournal = journalsDS.tableDataSource.find((journal) => {
    return journal.journalId == route.params.id;
  });
  journalForm.value = singleJournal;
});
</script>

<style scoped>
.content {
  height: 555px;
}
.line {
  background: #8481812f;
  width: 100%;
  height: 1px;
}
</style>
