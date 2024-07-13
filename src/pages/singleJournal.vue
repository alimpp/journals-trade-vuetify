<template>
  <div
    class="content app-border app_border_radius app-flex app-flex-column app-px-4 app-py-3 app-mt-5 app-w-100"
  >
    <span class="app-font-size-20 app-font-weight-500">{{ title }}</span>
    <div class="app-flex app-flex-column app-mt-3">
      <span class="app-font-size-14 app-font-weight-700">Coin</span>
      <span class="app-font-size-12">{{ journalForm.coin }}</span>
      <span class="app-font-size-14 app-font-weight-700">Entry Time</span>
      <span class="app-font-size-12">{{ journalForm.entryTime }}</span>
      <span class="app-font-size-14 app-font-weight-700">Date</span>
      <span class="app-font-size-12">{{ journalForm.date }}</span>
      <span class="app-font-size-14 app-font-weight-700">State</span>
      <span class="app-font-size-12">{{ journalForm.state }}</span>
      <span class="app-font-size-14 app-font-weight-700">Position</span>
      <span class="app-font-size-12">{{ journalForm.position }}</span>
      <span class="app-font-size-14 app-font-weight-700">Entry price</span>
      <span class="app-font-size-12">{{ journalForm.entryPrice }}</span>
      <span class="app-font-size-14 app-font-weight-700">Entry USDT</span>
      <span class="app-font-size-12">{{ journalForm.entryUSDT }}</span>
      <span class="app-font-size-14 app-font-weight-700">Targets</span>
      <span
        class="app-font-size-12"
        v-for="item in journalForm.targets"
        :key="item.id"
        >Tr{{ item.id }} = {{ item.value }}</span
      >
      <span class="app-font-size-14 app-font-weight-700">Stop Loss</span>
      <span class="app-font-size-12">{{ journalForm.stopLoss }}</span>
      <span class="app-font-size-14 app-font-weight-700">Take Profit</span>
      <span class="app-font-size-12">{{ journalForm.takeProfit }}</span>
      <span class="app-font-size-14 app-font-weight-700">Loss USDT</span>
      <span class="app-font-size-12">{{ journalForm.lossUsdt }}</span>
      <span class="app-font-size-14 app-font-weight-700"
        >Entry Description</span
      >
      <span class="app-font-size-12">{{ journalForm.entryDescription }}</span>
      <span class="app-font-size-14 app-font-weight-700">Exit Description</span>
      <span class="app-font-size-12">{{ journalForm.exitDescription }}</span>
      <div class="line app-mt-4"></div>
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
