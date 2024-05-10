<template>
  <div class="index-table">
    <v-table class="rounded" :theme="ThemeStatus">
      <thead>
        <tr>
          <th v-for="index in tableScheama.header" :key="index.id">
            {{ index }}
          </th>
        </tr>
      </thead>
      <tbody>
        <slot name="tableContent"></slot>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { themeDataStore } from "@/stores/theme";
const ThemeDS = themeDataStore();

const ThemeStatus = computed(() => {
  return ThemeDS.theme;
});

const props = defineProps({
  tableType: {
    type: String,
    default: "",
  },
  tableScheama: {
    type: Array,
    default: [],
  },
});
</script>
