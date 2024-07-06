import { defineStore } from "pinia";
import { GetJournalsLengths } from "@/api/dashboard.js";

export const dashboardDataStore = defineStore("dashboardstore", {
  state: () => ({
    dashboardDs: [],
  }),

  actions: {
    getLength() {
      this.dashboardDs = GetJournalsLengths();
    },
  },
});
