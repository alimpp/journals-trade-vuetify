<template>
  <div class="index-table">
    <v-table class="rounded">
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
