import { GenerateString } from "@/utils/string.js";

export const generateCoinDataModel = (param) => {
  const coinId = GenerateString(50);
  return {
    loading: false,
    coinId: coinId,
    subtitle: "USDT",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may...",
    title: param.toUpperCase(),
  };
};
