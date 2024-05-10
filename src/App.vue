<template>
  <div
    :class="{
      'app-bg-light-pro': ThemeStatus == 'light',
      'app-bg-dark-pro': ThemeStatus == 'dark',
    }"
  >
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { InitialingApplication } from "@/Initializing/index";
import { themeDataStore } from "@/stores/theme";
const ThemeDS = themeDataStore();

const ThemeStatus = computed(() => {
  return ThemeDS.theme;
});

onMounted(async () => {
  await InitialingApplication();
});
</script>
