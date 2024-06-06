<template>
  <div
    class="app_overflow_hidden app-flex app-flex-column app-container app-h-90 app-w-100"
  >
    <BaseDivider content="APPLICATION THEME" width="170px" />
    <div class="app-flex app-mt-5 app-mb-5">
      <div
        class="app-flex app_pointer fade_animations"
        @click="HandleChangeTheme"
      >
        <v-icon class="app_pointer">mdi-weather-night</v-icon>
        <span class="app-font-size-16 app-px-2">Dark</span>
      </div>
      <div
        class="app-flex app-mx-5 app_pointer fade_animations"
        @click="HandleChangeTheme"
      >
        <v-icon class="app_pointer">mdi-white-balance-sunny</v-icon>
        <span class="app-font-size-16 app-px-2">Dark</span>
      </div>
    </div>
    <BaseDivider content="USER PROFILE" width="125px" />
    <div class="app-flex app-mt-5">
      <div class="app-w-300">
        <BaseInput
          v-model="form.username"
          label="Username"
          :error="validate.username.state"
          :messageError="validate.username.text"
        />
      </div>
      <div class="app-w-300 app-mx-2">
        <BaseInput v-model="form.email" label="Email" :disabled="true" />
      </div>
    </div>
    <BaseButton
      class="app-mt-3"
      name="Edit Profile"
      width="110px"
      height="35px"
      :loading="loading"
      @click="editProfile"
      tooltip="Edit Your Profile"
    />
  </div>
</template>

<script setup>
import { themeDataStore } from "@/stores/theme";
import { profileDataStore } from "@/stores/profile/profileDS";
import { ref, computed, onMounted } from "vue";
import { validateUsername } from "@/utils/validatie.js";
import BaseInput from "@/components/base/baseInput.vue";
import BaseButton from "@/components/base/baseButton.vue";
import BaseDivider from "@/components/base/baseDivider.vue";

const profileDS = profileDataStore();
const themeDS = themeDataStore();
const loading = ref(false);

const profileInformation = computed(() => {
  return profileDS.user;
});

const form = ref({
  username: "",
  email: "",
});
const validate = ref({
  username: {
    state: false,
    text: "",
  },
});

const HandleChangeTheme = () => {
  themeDS.changeThemeStatus();
};

const editProfile = () => {
  let access = true;
  if (validateUsername(form.value.username).state) {
    validate.value.username.state = validateUsername(form.value.username).state;
    validate.value.username.text = validateUsername(form.value.username).text;
    access = false;
  } else {
    validate.value.username.state = validateUsername(form.value.username).state;
    validate.value.username.text = validateUsername(form.value.username).text;
    access = true;
  }
  if (access) {
    loading.value = true;
    profileDS.addProfile(form.value);
    setTimeout(() => {
      profileDS.getProfile();
      loading.value = false;
    }, 3000);
  }
};

onMounted(() => {
  form.value.username = profileInformation.value.username;
  form.value.email = profileInformation.value.email;
});
</script>
