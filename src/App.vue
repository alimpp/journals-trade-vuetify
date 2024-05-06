<template>
  <div class="app-bg-light-pro">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { InitialingApplication } from "@/Initializing/index";

onMounted(async () => {
  await InitialingApplication();
});
</script>
