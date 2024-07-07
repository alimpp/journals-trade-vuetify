import { defineStore } from "pinia";
import { GetJournalsData, GetFullTargetPositions } from "@/api/dashboard.js";

export const dashboardDataStore = defineStore("dashboardstore", {
  state: () => ({
    dataSource: [],
    fullTargetSource: [],

  }),

  actions: {
    getJournalsData() {
      this.dataSource = GetJournalsData();
    },
    getFullTargetdata() {
      this.fullTargetSource = GetFullTargetPositions();
    },
  },
});
