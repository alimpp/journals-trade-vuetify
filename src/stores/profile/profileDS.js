import { defineStore } from "pinia";
import { AddProfile } from "@/api/profile.js";
import { generateProfileDataModel } from "@/model/profileDataModel.js";

export const profileDataStore = defineStore("profileStore", {
  state: () => ({
    user: {},
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    addProfile(param) {
      const model = generateProfileDataModel(param);
      AddProfile(model);
    },
  },
});
