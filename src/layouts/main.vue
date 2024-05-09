<template>
  <div class="main-layouts-container app-flex app-flex-column">
    <Navigator />
    <div class="app-h-90 router-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { DetectUser } from "@/middleware/user";

import Navigator from "@/components/navigator/index.vue";

onMounted(() => {
  DetectUser();
});
</script>

<style scoped>
.router-content {
  overflow-y: scroll;
}
</style>
