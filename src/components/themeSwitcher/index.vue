<script setup>
import { themeDataStore } from "@/stores/theme";
const ThemeDS = themeDataStore();

const ThemeStatus = computed(() => {
  return ThemeDS.theme;
});

const HandleChangeTheme = () => {
  ThemeDS.changeThemeStatus();
};
</script>

<template>
  <div class="app-flex">
    <v-icon
      class="app_pointer fade_animations"
      @click="HandleChangeTheme"
      v-if="ThemeStatus === 'light'"
      >mdi-weather-night</v-icon
    >
    <v-icon
      class="app_pointer fade_animations"
      @click="HandleChangeTheme"
      v-if="ThemeStatus === 'dark'"
      >mdi-white-balance-sunny</v-icon
    >
  </div>
</template>
