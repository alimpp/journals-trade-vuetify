import { GenerateString } from "@/utils/string.js";

export const generateCoinDataModel = (param) => {
  const coinId = GenerateString(50);
  return {
    loading: false,
    coinId: coinId,
    subtitle: "USDT",
    text: "Crypto Currency",
    title: param.toUpperCase(),
  };
};
