<template>
  <div
    class="create-profile-page app-flex app-justify-center app-align-center"
  >
    <div class="content">
      <div class="w-100 app-flex">
        <span class="app-font-size-14 app-font-weight-600 pt-1"
          >Create Profile With</span
        >
        <span
          class="app-font-size-18 app-font-weight-600 app-color-primary px-1"
          >Trade Journal</span
        >
      </div>
      <div class="w-100 app-flex app-flex-column mt-5">
        <BaseInput label="Username" />
        <BaseInput label="Email" />
        <BaseButton name="Create" width="120px" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "@/components/base/baseInput.vue";
import BaseButton from "@/components/base/baseButton";
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
