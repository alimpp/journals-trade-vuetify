<template>
  <div class="app-container app-flex app-flex-column app-w-100 fade_animations">
    <div class="app-flex">
      <span class="app-font-size-20 app-font-weight-700">{{ title }}</span>
      <span class="app-font-size-18 app-font-weight-500 app-px-1 app-pt-1"
        >In Date
      </span>
      <span
        class="app-font-size-14 app-font-weight-500 app-px-2 app-pt-2 app-color-primary"
        >{{ journalForm.date }}</span
      >
    </div>
    <div class="app-flex app-w-100 app-mt-5">
      <div class="app-w-50 app-flex app-flex-column app-px-2">
        <div
          class="app-flex app-flex-column app-border app_border_radius app-px-2 app-py-2"
        >
          <span class="app-font-size-16 app-font-weight-500">Coin</span>
          <span class="app-font-size-14 app-mt-3 app-color-primary">{{
            journalForm.coin
          }}</span>
        </div>
        <div
          class="app-flex app-flex-column app-border app_border_radius app-px-2 app-py-2 app-mt-4"
        >
          <span class="app-font-size-16 app-font-weight-500">State</span>
          <span class="app-font-size-14 app-mt-3 app-color-primary">{{
            journalForm.state
          }}</span>
        </div>
        <div
          class="app-flex app-flex-column app-border app_border_radius app-px-2 app-py-2 app-mt-4"
        >
          <span class="app-font-size-16 app-font-weight-500">Entry Time</span>
          <span class="app-font-size-14 app-mt-3 app-color-primary">{{
            journalForm.entryTime
          }}</span>
        </div>
        <div
          class="app-flex app-flex-column app-border app_border_radius app-px-2 app-py-2 app-mt-4"
        >
          <span class="app-font-size-16 app-font-weight-500">Entry Price</span>
          <span class="app-font-size-14 app-mt-3 app-color-primary">{{
            journalForm.entryPrice
          }}</span>
        </div>
        <div
          class="app-flex app-flex-column app-border app_border_radius app-px-2 app-py-2 app-mt-4"
        >
          <span class="app-font-size-16 app-font-weight-500">Entry USDT</span>
          <span class="app-font-size-14 app-mt-3 app-color-primary">{{
            journalForm.entryUSDT
          }}</span>
        </div>
        <div
          class="app-flex app-flex-column app-border app_border_radius app-px-2 app-py-2 app-mt-4"
        >
          <span class="app-font-size-16 app-font-weight-500"
            >Entry Description</span
          >
          <span class="app-font-size-14 app-mt-3 app-color-primary">{{
            journalForm.entryDescription
          }}</span>
        </div>
        <div
          class="app-flex app-flex-column app-border app_border_radius app-px-2 app-py-2 app-mt-4"
        >
          <span class="app-font-size-16 app-font-weight-500">Take Profit</span>
          <span class="app-font-size-14 app-mt-3 app-color-primary">{{
            journalForm.takeProfit
          }}</span>
        </div>
      </div>
      <div class="app-w-50 app-flex app-flex-column app-px-2">
        <div
          class="app-flex app-flex-column app-border app_border_radius app-px-2 app-py-2 app-mt-"
        >
          <span class="app-font-size-16 app-font-weight-500">Position</span>
          <span class="app-font-size-14 app-mt-3 app-color-primary">{{
            journalForm.position
          }}</span>
        </div>
        <div
          class="app-flex app-flex-column app-border app_border_radius app-px-2 app-py-2 app-mt-4"
        >
          <span class="app-font-size-16 app-font-weight-500">Stop Loss</span>
          <span class="app-font-size-14 app-mt-3 app-color-primary">{{
            journalForm.stopLoss
          }}</span>
        </div>
        <div
          class="app-flex app-flex-column app-border app_border_radius app-px-2 app-py-2 app-mt-4"
        >
          <span class="app-font-size-16 app-font-weight-500">Take Profit</span>
          <span class="app-font-size-14 app-mt-3 app-color-primary">{{
            journalForm.takeProfit
          }}</span>
        </div>
        <div
          class="app-flex app-flex-column app-border app_border_radius app-px-2 app-py-2 app-mt-4"
        >
          <span class="app-font-size-16 app-font-weight-500">Loss Usdt</span>
          <span class="app-font-size-14 app-mt-3 app-color-primary">{{
            journalForm.lossUsdt
          }}</span>
        </div>
        <div
          class="app-flex app-flex-column app-border app_border_radius app-px-2 app-py-2 app-mt-4"
        >
          <span class="app-font-size-16 app-font-weight-500"
            >Exit Description</span
          >
          <span class="app-font-size-14 app-mt-3 app-color-primary">{{
            journalForm.exitDescription
          }}</span>
        </div>
        <div
          class="app-flex app-flex-column app-border app_border_radius app-px-2 app-py-2 app-mt-4"
          v-for="target in journalForm.targets"
          :key="target.id"
        >
          <span class="app-font-size-16 app-font-weight-500"
            >Taget {{ target.id }}</span
          >
          <span class="app-font-size-14 app-mt-3 app-color-primary">{{
            target.value
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { journalsDataStore } from "@/stores/journals/journalsDS";
import { useRoute } from "vue-router";

const route = useRoute();
const journalsDS = journalsDataStore();

const title = ref("Journal");

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
