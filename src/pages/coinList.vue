<template>
  <div
    class="create-profile-page app-flex app-flex-column app-container app- app-h-90 app-w-100"
  >
    <div class="app-flex app-align-center app-w-100">
      <div class="app-w-200-px">
        <BaseInput label="Coin Name" v-model="title" />
      </div>
      <BaseButton
        icon="plus"
        width="40px"
        height="40px"
        tooltip="Add New Coin"
        class="app-mt-9 app-mx-2"
        @click="addNewCoin"
      />
    </div>
    <div class="app-flex app-flex-column app-py-4">
      <CoinCard
        class="app-mt-2"
        v-for="coin in dataSource"
        :title="coin.title"
        :subtitle="coin.subtitle"
        :text="coin.text"
        :loading="coin.loading"
        @remove="removeCoin(coin.coinId)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { coinsDataStore } from "@/stores/coins/coinsDS";

import BaseButton from "@/components/base/baseButton.vue";
import BaseInput from "@/components/base/baseInput.vue";
import CoinCard from "@/components/coinList/coinCard.vue";

const coinsDS = coinsDataStore();
const title = ref("");

const dataSource = computed(() => {
  return coinsDS.coins;
});

const addNewCoin = () => {
  if (title.value.length == 0) {
    return;
  } else {
    coinsDS.addCoin(title.value);
    title.value = "";
  }
};

const removeCoin = (id) => {
  coinsDS.removeCoin(id);
};

onMounted(() => {
  coinsDS.getCoins();
});
</script>
