import { ToSting, JsonParser } from "@/utils/string";

export const AddCoin = (param) => {
  const coinsList = GetCoins();
  coinsList.unshift(param);
  const result = ToSting(coinsList);
  localStorage.setItem("coins", result);
};

export const GetCoins = () => {
  const coins = localStorage.getItem("coins");
  const result = JsonParser(coins);
  return result;
};

export const RemoveCoin = (id) => {
  console.log(id);
  const coins = localStorage.getItem("coins");
  let parsedList = JsonParser(coins);
  console.log(parsedList);
  const targetCoin = parsedList.find((coin) => {
    return coin.coinId == id;
  });
  console.log(targetCoin);
  parsedList = parsedList.filter((item) => {
    return item.coinId != targetCoin.coinId;
  });
  const result = ToSting(parsedList);
  localStorage.setItem("coins", result);
};
