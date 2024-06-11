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
        <BaseInput 
        label="Entry Price" 
        v-model="journalForm.entryPrice"
        :error="error.entryPrice.state" 
        :messageError="error.entryPrice.text"
        />
      </div>
      <div class="app-w-200 mx-2">
        <BaseInput label="Stop Loss" 
        v-model="journalForm.stopLoss"
        :error="error.stopLoss.state" 
        :messageError="error.stopLoss.text"
        />
      </div>
    </div>
    <div class="app-flex app-mt-5">
      <div class="app-w-200">
        <timePicker class="app-mt-6" @handleEmitTime="selectTime"/>
      </div>
      <div class="app-w-200">
        <BaseInput label="Entry USDT" 
        v-model="journalForm.entryUSDT"
        :error="error.entryUSDT.state"
        :messageError="error.entryUSDT.text"
        
        />
      </div>
    </div>
    <div class="app-flex app-mt-5">
      <div class="app-w-200">
        <BaseInput label="Profit USDT" 
        v-model="journalForm.profitUSDT"
        />
      </div>
      <div class="app-w-200 mx-2">
        <BaseInput label="Loss USDT" v-model="journalForm.lossUSDT"/>
      </div>
      <div class="app-w-200">
        <BaseInput label="Date" 
        v-model="journalForm.date"
        :error="error.date.state"
        :messageError="error.date.text"
        />
      </div>
    </div>
    <div class="app-flex app-mt-5">
      <div class="app-w-200">
        <BaseInput label="Target 1" 
        v-model="journalForm.target1"
        :error="error.target1.state"
        :messageError="error.target1.text"
        />
      </div>
      <div class="app-w-200 mx-2">
        <BaseInput label="Target 2" 
        v-model="journalForm.target2"
        :error="error.target2.state"
        :messageError="error.target2.text"
        />      </div>
      <div class="app-w-200">
        <BaseInput label="Target 3" 
        v-model="journalForm.target3"
        :error="error.target3.state"
        :messageError="error.target3.text"
        />
      </div>
    </div>
    <div class="app-flex">
      <div>
        <BaseTextArea label="Entry Description" v-model="journalForm.entryDescription"/>
      </div>
      <div class="mx-2">
        <BaseTextArea label="Exit Description" v-model="journalForm.exitDescription"/>
      </div>
      <div class="app-w-200">
        <BaseInput label="Flag" v-model="journalForm.flag"/>
      </div>
    </div>
    <BaseButton
      name="Create"
      tooltip="Create Journal"
      width="100px"
      height="35px"
      class="mt-3"
      @click="createJournal,handleValidate()"
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
  entryPrice: "",
  entryUSDT: "",
  stopLoss: "",
  date: "",
  target1: "",
  target2: "",
  target3: "",
  entryDescription: "",
});

const  error = ref({
  entryTime: {
    state: false,
    text: ""
  },
  entryPrice: {
    state: false,
    text: "",
  },
  entryUSDT: {
    state: false,
    text: "",
  },
  stopLoss: {
    state: false,
    text: "",
  },
  date: {
    state: false,
    text: "",
  },
  target1: {
    state: false,
    text: "",
  },
  target2: {
    state: false,
    text: "",
  },
  target3: {
    state: false,
    text: "",
  },
  entryDescription: {
    state: false,
    text: "",
  },
});

const handleValidate = ()=>{
  let accessToCreate = true;
  if (!validateNumber(journalForm.value.entryPrice)){
    accessToCreate = false;
    error.value.entryPrice.state = true;
    error.value.entryPrice.text = "price is requied!!!"
  }else {
    accessToCreate = true;
    error.value.entryPrice.state = false;
    error.value.entryPrice.text = ""
  }
  if (!validateNumber(journalForm.value.entryUSDT)){
    accessToCreate = false;
    error.value.entryUSDT.state = true;
    error.value.entryUSDT.text = "'Entry USDT' is requied!!!"
  }else {
    accessToCreate = true;
    error.value.entryUSDT.state = false;
    error.value.entryUSDT.text = ""
  }
  if (!validateNumber(journalForm.value.stopLoss)){
    accessToCreate = false;
    error.value.stopLoss.state = true;
    error.value.stopLoss.text = "'Stop Loss' is requied!!!"
  }else {
    accessToCreate = true;
    error.value.stopLoss.state = false;
    error.value.stopLoss.text = ""
  }
  if (!validateNumber(journalForm.value.date)){
    accessToCreate = false;
    error.value.date.state = true;
    error.value.date.text = "'Date' is requied!!!"
  }else {
    accessToCreate = true;
    error.value.date.state = false;
    error.value.date.text = ""
  }
  if (!validateNumber(journalForm.value.target1)){
    accessToCreate = false;
    error.value.target1.state = true;
    error.value.target1.text = "'Target1' is requied!!!"
  }else {
    accessToCreate = true;
    error.value.target1.state = false;
    error.value.target1.text = ""
  }
  if (!validateNumber(journalForm.value.target2)){
    accessToCreate = false;
    error.value.target2.state = true;
    error.value.target2.text = "'Target2' is requied!!!"
  }else {
    accessToCreate = true;
    error.value.target2.state = false;
    error.value.target2.text = ""
  }
  if (!validateNumber(journalForm.value.target3)){
    accessToCreate = false;
    error.value.target3.state = true;
    error.value.target3.text = "'Target3' is requied!!!"
  }else {
    accessToCreate = true;
    error.value.target3.state = false;
    error.value.target3.text = ""
  }
}

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
