<template>
  <div
    class="app-flex-column app-flex app-container app-w-100 slid-left-animation"
  >
    <div class="app-flex">
      <div class="app-w-200">
        <BaseSelect
          label="Select Coin"
          :scheama="coinsDS.coins"
          type="outlined"
        />
      </div>
      <div class="app-w-200 mx-2">
        <BaseSelect label="State" :scheama="state" type="outlined" />
      </div>
    </div>
    <div class="app-flex app-mt-5">
      <div class="app-w-200">
        <BaseInput label="Entry Price" v-model="journalForm.entryPrice" />
      </div>
      <div class="app-w-200 mx-2">
        <BaseInput label="Stop Loss" />
      </div>
    </div>
    <div class="app-flex app-mt-5">
      <div class="app-w-200">
        <timePicker class="app-mt-6" @handleEmitTime="selectTime"/>
      </div>
      <div class="app-w-200">
        <BaseInput label="Entry USDT" />
      </div>
    </div>
    <div class="app-flex app-mt-5">
      <div class="app-w-200">
        <BaseInput label="Profit USDT" />
      </div>
      <div class="app-w-200 mx-2">
        <BaseInput label="Loss USDT" />
      </div>
      <div class="app-w-200">
        <BaseInput label="Date" />
      </div>
    </div>
    <div class="app-flex app-mt-5">
      <div class="app-w-200">
        <BaseInput label="Target 1" />
      </div>
      <div class="app-w-200 mx-2">
        <BaseInput label="Target 2" />
      </div>
      <div class="app-w-200">
        <BaseInput label="Target 3" />
      </div>
    </div>
    <div class="app-flex">
      <div>
        <BaseTextArea label="Entry Description" />
      </div>
      <div class="mx-2">
        <BaseTextArea label="Exit Description" />
      </div>
      <div class="app-w-200">
        <BaseInput label="Flag" />
      </div>
    </div>
    <BaseButton
      name="Create"
      tooltip="Create Journal"
      width="100px"
      height="35px"
      class="mt-3"
      @click="createJournal"
    />
  </div>
</template>

<script setup>
import { validateNumber } from "@/utils/validatie.js";
import { onMounted, ref } from "vue";
import BaseInput from "@/components/base/baseInput.vue";
import BaseTextArea from "@/components/base/baseTextArea.vue";
import BaseSelect from "@/components/base/baseSelect.vue";
import BaseButton from "@/components/base/baseButton.vue";
import timePicker from "@/components/timePicker/index";

import { coinsDataStore } from "@/stores/coins/coinsDS";

const journalForm = ref({
  entryTime: "",
  entryPrice: ""
});

const coinsDS = coinsDataStore();
const state = ref(["Target", "Stop", "In Position", "closed"]);

const createJournal = () => {
  console.log(journalForm.value)
};
const selectTime= (param)=> {
  journalForm.value.entryTime= param
};

onMounted(() => {
  coinsDS.getCoins();
});
</script>
