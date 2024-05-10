import { defineStore } from "pinia";
import { AddCoin, GetCoins, RemoveCoin } from "@/api/coin";
import { generateCoinDataModel } from "@/model/coinDataModel";

export const coinsDataStore = defineStore("coinsStore", {
  state: () => ({
    coins: [],
  }),
  actions: {
    addCoin(param) {
      const result = generateCoinDataModel(param);
      AddCoin(result);
      this.getCoins();
    },

    getCoins() {
      this.coins = GetCoins();
    },

    removeCoin(id) {
      RemoveCoin(id);
      this.getCoins();
    },
  },
});
