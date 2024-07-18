<template>
  <!-- <div class="content app-flex app-px-4 app-py-3 app-mt-5 app-w-100">
    <span class="app-font-size-20 app-font-weight-500">{{ title }}</span>
    <div class="app-flex app-flex-column app-mt-3">
      <div
        class="app-flex app-flex-column app-border app_border_radius app-px-2 app-py-2"
      >
        <span class="app-font-size-16 app-font-weight-500">Entry</span>
        <span class="app-font-size-14 app-mt-3">{{
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
  </div> -->

  <!-- <div class="app-flex app-flex-column app-w-100 app-bg-danger app-container">
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

    
  </div> -->
  <div class="app-container app-flex app-flex-column app-w-100">
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
  entryTime: "", //
  date: "", //
  coin: "", //
  state: "", //
  entryPrice: "", //
  stopLoss: "", //
  entryUSDT: "", //
  entryDescription: "", //
  targets: [],
  position: "", //
  lossUsdt: "", //
  exitDescription: "",
  imageUrl: "",
  takeProfit: "", //
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
