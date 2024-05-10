import { defineStore } from "pinia";

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
        coin: ["All", "BTC", "FTM", "GRT"],
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
  },
});
