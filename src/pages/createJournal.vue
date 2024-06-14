<template>
  <div
    class="app-flex-column app-flex app-container app-w-100 slid-left-animation"
  >
    <div class="app-flex">
      <div class="app-w-200">
        <TimePicker class="app-mt-6" @handleEmitTime="selectTime" />
      </div>
      <div class="app-w-30 app-mx-2">
        <DatePicker class="app-mt-6" @handleEmitTime="selectTime" />
      </div>
    </div>
    <div class="app-flex app-mt-7">
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
        <BaseInput
          label="Stop Loss"
          v-model="journalForm.stopLoss"
          :error="error.stopLoss.state"
          :messageError="error.stopLoss.text"
        />
      </div>
      <div class="app-w-200">
        <BaseInput
          label="Entry USDT"
          v-model="journalForm.entryUSDT"
          :error="error.entryUSDT.state"
          :messageError="error.entryUSDT.text"
        />
      </div>
    </div>
    <div class="app-flex app-mt-5">
      <BaseButton
        class="app-mt-9"
        icon="plus"
        width="40px"
        height="41px"
        tooltip="Add Target"
        @click="addTarget"
      />
      <BaseButton
        class="app-mt-9 app-mx-2"
        icon="delete"
        width="40px"
        bg="danger"
        height="41px"
        tooltip="Remove Target"
        @click="removeTarget"
        v-if="journalForm.targets.length != 0"
      />
      <div
        class="app-w-200 app-mx-2 app-flex"
        v-for="target in journalForm.targets"
        :key="target?.id"
      >
        <BaseInput :label="`Target ${target.id}`" v-model="target.value" />
      </div>
    </div>
    <div class="app-flex app-mt-2">
      <div>
        <BaseTextArea
          label="Entry Description"
          v-model="journalForm.entryDescription"
        />
      </div>
    </div>
    <BaseButton
      name="Create"
      tooltip="Create Journal"
      width="100px"
      height="35px"
      class="mt-3"
      @click="createJournal, handleValidate()"
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
import TimePicker from "@/components/timePicker/index";
import DatePicker from "@/components/datePicker/index";
import { coinsDataStore } from "@/stores/coins/coinsDS";

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
});

const error = ref({
  entryTime: {
    state: false,
    text: "",
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

const handleValidate = () => {
  let accessToCreate = true;
  if (!validateNumber(journalForm.value.entryPrice)) {
    accessToCreate = false;
    error.value.entryPrice.state = true;
    error.value.entryPrice.text = "Price is requied!!!";
  } else {
    accessToCreate = true;
    error.value.entryPrice.state = false;
    error.value.entryPrice.text = "";
  }
  if (!validateNumber(journalForm.value.entryUSDT)) {
    accessToCreate = false;
    error.value.entryUSDT.state = true;
    error.value.entryUSDT.text = "'Entry USDT' is requied!!!";
  } else {
    accessToCreate = true;
    error.value.entryUSDT.state = false;
    error.value.entryUSDT.text = "";
  }
  if (!validateNumber(journalForm.value.stopLoss)) {
    accessToCreate = false;
    error.value.stopLoss.state = true;
    error.value.stopLoss.text = "'Stop Loss' is requied!!!";
  } else {
    accessToCreate = true;
    error.value.stopLoss.state = false;
    error.value.stopLoss.text = "";
  }
};

const coinsDS = coinsDataStore();
const state = ref(["Target", "Stop", "In Position", "closed"]);

const createJournal = () => {
  console.log(journalForm.value);
};
const selectTime = (param) => {
  journalForm.value.entryTime = param;
};

const addTarget = () => {
  const target = {
    id: journalForm.value.targets.length + 1,
    value: "",
  };
  journalForm.value.targets.push(target);
};

const removeTarget = () => {
  const lastIndex =
    journalForm.value.targets[journalForm.value.targets.length - 1];
  journalForm.value.targets = journalForm.value.targets.filter((target) => {
    return target.id != lastIndex.id;
  });
};

onMounted(() => {
  coinsDS.getCoins();
});
</script>
