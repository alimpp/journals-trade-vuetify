<template>
  <v-card
    :theme="ThemeStatus"
    :loading="loading"
    :title="title"
    :subtitle="subtitle"
    :text="text"
  >
    <v-card-actions>
      {{ loading }}
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";
import { themeDataStore } from "@/stores/theme";
const ThemeDS = themeDataStore();

const ThemeStatus = computed(() => {
  return ThemeDS.theme;
});

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
