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
  background: rgb(85, 255, 37);
  background: linear-gradient(
    175deg,
    rgba(85, 255, 37, 1) 12%,
    rgba(171, 254, 92, 1) 53%,
    rgba(234, 241, 250, 1) 94%
  );
}
</style>
