<template>
  <div>
    <i
      class="bi bi-arrow-left-circle-fill app-font-size-22 app_pointer"
      @click="goBack"
    >
    </i>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>
