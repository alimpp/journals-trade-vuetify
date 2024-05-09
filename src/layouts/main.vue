<template>
  <div class="main-layouts-container app-flex app-flex-column">
    <Navigator />
    <div class="app-h-90">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Navigator from "@/components/navigator/index.vue";
</script>
