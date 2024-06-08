<template>
  <div
    class="app-w-30 app_border_radius app-py-10 app-px-4 app-flex app-flex-column"
  >
    <span>{{ title }}</span>
    <span>{{ date }}</span>
    <span>{{ count }}</span>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({});

const title = computed(() => {
  return;
});

const date = computed(() => {
  return;
});

const count = computed(() => {
  return;
});
</script>

<style scoped></style>
