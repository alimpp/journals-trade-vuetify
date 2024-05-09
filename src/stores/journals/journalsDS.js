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
        state: ["All", "Target", "Stop"],
      },
    },
    tableDataSource: [
      {
        id: 0,
        coin: "BTC",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Stop",
      },
      {
        id: 1,
        coin: "BTC",
        entryPrice: "70.000",
        stopLoss: "68.000",
        target1: "71.000",
        target2: "72.000",
        target3: "73.000",
        state: "Target",
      },
      {
        id: 2,
        coin: "GRT",
        entryPrice: "0.900",
        stopLoss: "0.800",
        target1: "1.000",
        target2: "2.000",
        target3: "-",
        state: "Target",
      },
      {
        id: 3,
        coin: "BTC",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Stop",
      },
      {
        id: 4,
        coin: "FTM",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Stop",
      },
      {
        id: 5,
        coin: "BNB",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Target",
      },
      {
        id: 6,
        coin: "SOL",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Stop",
      },
      {
        id: 7,
        coin: "BNB",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Target",
      },
      {
        id: 8,
        coin: "SOL",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Stop",
      },
      {
        id: 9,
        coin: "BNB",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Stop",
      },
      {
        id: 10,
        coin: "SOL",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Target",
      },
      {
        id: 11,
        coin: "BNB",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Stop",
      },
      {
        id: 12,
        coin: "SOL",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Stop",
      },
      {
        id: 13,
        coin: "BNB",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Target",
      },
      {
        id: 14,
        coin: "SOL",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Stop",
      },
      {
        id: 15,
        coin: "BNB",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Stop",
      },
      {
        id: 16,
        coin: "SOL",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Stop",
      },
      {
        id: 17,
        coin: "BNB",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Target",
      },
      {
        id: 18,
        coin: "SOL",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Stop",
      },
      {
        id: 19,
        coin: "BNB",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Stop",
      },
      {
        id: 20,
        coin: "SOL",
        entryPrice: "70,000",
        stopLoss: "68,000",
        target1: "71,000",
        target2: "72,000",
        target3: "73,000",
        state: "Stop",
      },
    ],
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
