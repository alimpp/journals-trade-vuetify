import { defineStore } from "pinia";
import {
  GetJournalsData,
  GetFullTargetPositions,
  GetStopPositions,
} from "@/api/dashboard.js";

export const dashboardDataStore = defineStore("dashboardstore", {
  state: () => ({
    dataSource: [],
    fullTargetSource: [],
    stopSource: [],

  }),

  actions: {
    getJournalsData() {
      this.dataSource = GetJournalsData();
    },
    getFullTargetData() {
      this.fullTargetSource = GetFullTargetPositions();
    },
    getStoptData() {
       this.stopSource = GetStopPositions();
    },
  },
});
