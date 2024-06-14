import { defineStore } from "pinia";
import { generateJournalDataModel } from "@/model/journalsDataModel.js";
import { AddJournals, GetJournals } from "@/api/journals.js";

export const journalsDataStore = defineStore("journalsStore", {
  state: () => ({
    loading: false,
    tableSchema: {
      header: [
        "Coin",
        "Entry Price",
        "Stop Loss",
        "Target 1",
        "Target 1",
        "Target 1",
        "State",
      ],
      filterBy: {
        coin: [],
        state: ["All", "Target", "Stop", "In Position", "closed"],
      },
    },
    tableDataSource: [],
  }),
  actions: {
    loadingControler() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    filtredBy(param, state) {
      switch (state) {
        case "coin":
          this.loadingControler();
          this.tableDataSource = this.tableDataSource.filter((item) => {
            return item.coin == param;
          });
          break;
        case "state":
          this.loadingControler();
          this.tableDataSource = this.tableDataSource.filter((item) => {
            return item.state == param;
          });
          break;
      }
    },
    createJournal(param) {
      const result = generateJournalDataModel(param);
      AddJournals(result);
      this.tableDataSource = GetJournals();
    },
    getJournals() {
      this.tableDataSource = GetJournals();
    },
  },
});
