<template>
  <div
    class="app-flex-column app-flex app-container app-w-100 slid-left-animation"
  >
    <div class="app-flex">
      <div class="app-w-200">
        <TimePicker
          class="app-mt-6"
          @handleEmitTime="selectTime"
          :time="journalForm.entryTime"
        />
      </div>
      <div class="app-w-30 app-mx-2">
        <DatePicker
          class="app-mt-6 mx-2"
          @handleEmitDate="selectDate"
          :date="journalForm.date"
        />
      </div>
    </div>
    <div class="app-flex app-mt-7">
      <div class="app-w-200">
        <BaseSelect
          label="Select Coin"
          :scheama="coinsDS.coins"
          type="outlined"
          v-model="journalForm.coin"
        />
      </div>
      <div class="app-w-200 mx-2">
        <BaseSelect
          label="State"
          :scheama="state"
          type="outlined"
          v-model="journalForm.state"
        />
      </div>
      <div class="app-w-200 mx-2">
        <BaseSelect
          label="Position"
          :scheama="position"
          type="outlined"
          v-model="journalForm.position"
        />
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
      <div class="app-w-200 mx-2">
        <BaseInput
          label="Loss USDT"
          v-model="journalForm.lossUsdt"
          :error="error.lossUsdt.state"
          :messageError="error.lossUsdt.text"
          v-if="journalForm.state == 'Stop'"
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
      <div class="app-px-8">
        <BaseTextArea
          label="Exit Description"
          v-model="journalForm.exitDescription"
          v-if="journalForm.state == 'Stop'"
        />
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

    <BaseButton
      name="Edit"
      tooltip="Edit Journal"
      width="100px"
      height="35px"
      @click="editJournal"
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
import { journalsDataStore } from "@/stores/journals/journalsDS";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const journalsDS = journalsDataStore();

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
  lossUsdt: {
    state: false,
    text: "",
  },
});

const coinsDS = coinsDataStore();
const state = ref([
  "In Position",
  "Order in Queue",
  "Stop",
  "Completed",
  "Full Target",
]);
const position = ref(["Long", "Short"]);

const editJournal = () => {
  const journalsDS = journalsDataStore();
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
  if (!validateNumber(journalForm.value.lossUsdt)) {
    accessToCreate = false;
    error.value.lossUsdt.state = true;
    error.value.lossUsdt.text = "'Exit USDT' is requied!!!";
  } else {
    accessToCreate = true;
    error.value.lossUsdt.state = false;
    error.value.lossUsdt.text = "";
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
  if (accessToCreate) {
    journalsDS.editJournal(journalForm.value);
    resetForm();
  }
};

const selectTime = (param) => {
  journalForm.value.entryTime = param;
};

const selectDate = (param) => {
  journalForm.value.date = param;
};

const resetForm = () => {
  journalForm.value = {
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
  };
  router.push("/journals");
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
  journalsDS.getJournals();
  coinsDS.getCoins();
  const singleJournal = journalsDS.tableDataSource.find((journal) => {
    return journal.journalId == route.params.id;
  });
  journalForm.value = singleJournal;
});
</script>
