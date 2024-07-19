import { defineStore } from "pinia";

export const globalDataStore = defineStore("globalStore", {
  state: () => ({
    lastRoute: "",
  }),
  actions: {},
});
