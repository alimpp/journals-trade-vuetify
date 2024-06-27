import { ToSting, JsonParser } from "@/utils/string";

export const AddJournals = (param) => {
  const journalList = GetJournals();
  journalList.unshift(param);
  const result = ToSting(journalList);
  localStorage.setItem("journals", result);
};

export const GetJournals = () => {
  const journals = localStorage.getItem("journals");
  const result = JsonParser(journals);
  return result;
};

export const RemoveJournal = (param) => {
  const result = ToSting(param);
  localStorage.setItem("journals", result);
};

export const EditJournals = (param) => {
  const journalList = GetJournals();
  journalList.unshift(param);
  const result = ToSting(journalList);
  localStorage.setItem("journals", result);
};
