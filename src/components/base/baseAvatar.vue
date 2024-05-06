<template>
  <div
    class="base-avatar-content app-bg-primary app-flex app-justify-center app-align-center mx-2"
  >
    <span class="app-font-size-16 app-font-weight-600">{{ avatar }}</span>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});

const avatar = computed(() => {
  return props.name[0].toUpperCase();
});
</script>

<style lang="scss" scoped>
.base-avatar-content {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
