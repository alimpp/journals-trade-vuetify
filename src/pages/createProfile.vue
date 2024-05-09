<template>
  <div
    class="create-profile-page app-flex app-justify-center app-align-center app-h-100"
  >
    <div class="content">
      <div class="app-w-100 app-flex">
        <span class="app-font-size-14 app-font-weight-600 app-pt-1"
          >Create Profile With</span
        >
        <span
          class="app-font-size-18 app-font-weight-600 app-color-primary app-px-1"
          >Trade Journal</span
        >
      </div>
      <div class="app-w-100 app-flex app-flex-column mt-5">
        <BaseInput
          v-model="form.username"
          label="Username"
          :error="validate.username.state"
          :messageError="validate.username.text"
        />
        <BaseInput
          v-model="form.email"
          label="Email"
          :error="validate.email.state"
          :messageError="validate.email.text"
        />
        <BaseButton
          class="app-mt-3"
          name="Create"
          width="110px"
          height="35px"
          :loading="loading"
          @click="createProfile"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { AddProfile } from "@/api/profile.js";
import { validateUsername } from "@/utils/validatie.js";

import BaseInput from "@/components/base/baseInput.vue";
import BaseButton from "@/components/base/baseButton";

const loading = ref(false);
const form = ref({
  username: "",
  email: "",
});
const validate = ref({
  username: {
    state: false,
    text: "",
  },
  email: {
    state: false,
    text: "",
  },
});

const createProfile = () => {
  loading.value = true;
  AddProfile();
  setTimeout(() => {
    loading.value = false;
  }, 3000);
};
</script>

<style scoped lang="scss">
.content {
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s;
}
</style>
