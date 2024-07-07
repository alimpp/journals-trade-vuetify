<template>
  <div
    class="app-w-100 app_border_radius app-py-10 app-px-4 app-flex background app-py-8"
  >
    <div
      v-for="item in data"
      :key="item.id"
      class="app-flex app-flex-column app-mx-13"
    >
      <span class="app-font-size-18 app-font-weight-500">{{ item.title }}</span>
      <div class="app-flex app-align-center app-mt-1">
        <v-icon icon="mdi-check-circle"></v-icon>
        <span class="app-font-size-30 app-font-weight-600 app-px-2">{{
          item.value
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  data: {
    type: Array,
  },
});
</script>

<style scoped>
.background {
  color: #fff;
  background: rgb(37, 74, 255);
  background: linear-gradient(
    175deg,
    rgba(37, 74, 255, 1) 12%,
    rgba(92, 123, 254, 1) 53%,
    rgba(190, 219, 255, 1) 94%
  );
}
</style>
