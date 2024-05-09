import { GenerateString } from "@/utils/string.js";

export const generateProfileDataModel = (param) => {
  const userId = GenerateString(50);
  return {
    userId: userId,
    ...param,
  };
};
