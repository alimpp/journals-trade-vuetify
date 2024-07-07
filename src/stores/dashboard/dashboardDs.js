import { defineStore } from "pinia";
import { GetJournalsData } from "@/api/dashboard.js";

export const dashboardDataStore = defineStore("dashboardstore", {
  state: () => ({
    dataSource: {},
  }),

  actions: {
    getJournalsData() {
      this.dataSource = GetJournalsData();
    },
  },
});
