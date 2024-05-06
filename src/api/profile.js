import { ToSting, JsonParser } from "@/utils/string";

export const AddProfile = (param) => {
  const result = ToSting(param);
  localStorage.setItem("profile", result);
};

export const GetProfile = () => {
  const profile = localStorage.getItem("profile");
  const result = JsonParser(profile);
  return result;
};
