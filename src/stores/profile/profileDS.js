import { defineStore } from "pinia";
import { AddProfile, GetProfile } from "@/api/profile.js";
import { generateProfileDataModel } from "@/model/profileDataModel.js";

export const profileDataStore = defineStore("profileStore", {
  state: () => ({
    user: {},
  }),
  actions: {
    getProfile() {
      this.user = GetProfile();
    },

    addProfile(param) {
      const model = generateProfileDataModel(param);
      AddProfile(model);
    },
  },
});
