import { JsonParser,ToSting } from "@/utils/string";

export const GetJournalsLengths = () => {
  const journals = localStorage.getItem("journals");
  const result = JsonParser(journals);
  const totalLengths = result.length;
  console.log(total);
  return result;
};
