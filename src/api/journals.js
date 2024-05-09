import { ToSting, JsonParser } from "@/utils/string";

export const AddJournals = (param) => {
  const result = ToSting(param);
  localStorage.setItem("journals", result);
};

export const GetJournals = () => {
  const journals = localStorage.getItem("journals");
  const result = JsonParser(journals);
  return result;
};
