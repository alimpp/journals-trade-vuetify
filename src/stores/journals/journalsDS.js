import { defineStore } from "pinia";
import { generateJournalDataModel } from "@/model/journalsDataModel.js";
import { AddJournals, GetJournals } from "@/api/journals.js";

export const journalsDataStore = defineStore("journalsStore", {
  state: () => ({
    loading: false,
    tableSchema: {
      header: ["Coin", "Entry Price", "Stop Loss", "State", "Position"],
      filterBy: {
        coin: [],
        state: ["All", "Target", "Stop", "In Position", "closed", "position"],
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

    createJournal(param) {
      const result = generateJournalDataModel(param);
      AddJournals(result);
      this.tableDataSource = GetJournals();
    },

    getJournals() {
      this.tableDataSource = GetJournals();
    },

    filtredBy(param, state) {
      this.getJournals();
      switch (state) {
        case "coin":
          this.loadingControler();
          if (param == "ALL") {
            this.getJournals();
          } else {
            this.tableDataSource = this.tableDataSource.filter((item) => {
              return item.coin == param;
            });
          }
          break;
        case "state":
          this.loadingControler();
          if (param == "All") {
            this.getJournals();
          } else {
            this.tableDataSource = this.tableDataSource.filter((item) => {
              return item.state == param;
            });
          }
          break;
      }
    },
  },
});
