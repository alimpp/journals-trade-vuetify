<template>
  <div
    class="app-w-30 app_border_radius app-py-10 app-px-4 app-flex app-flex-column background"
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

<style scoped>
.background {
  background: rgb(255, 37, 60);
  background: linear-gradient(
    175deg,
    rgba(255, 37, 60, 1) 12%,
    rgba(254, 92, 109, 1) 58%,
    rgba(241, 239, 240, 1) 100%
  );
}
</style>
