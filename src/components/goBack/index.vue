<template>
  <div>
    <i
      class="bi bi-arrow-bar-left app-font-size-18 app_pointer"
      @click="goBack"
      v-if="route.path != '/journals'"
    >
    </i>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const goBack = () => {
  router.go(-1);
};
</script>
