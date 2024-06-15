import { GenerateString } from "@/utils/string.js";

export const generateJournalDataModel = (param) => {
  const journalId = GenerateString(50);
  return {
    loading: false,
    journalId: journalId,
    ...param
  };
};
