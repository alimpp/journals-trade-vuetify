<template>
  <div
    class="app-w-30 app_border_radius app-py-10 app-px-4 app-flex background app-py-8 animation"
  >
    <div class="app-flex app-flex-column app-w-60">
      <span class="app-font-size-20 app-font-weight-600">{{ data.title }}</span>
      <span class="app-font-size-10 app-font-weight-100 app-color-gray">{{
        data.text
      }}</span>
    </div>
    <div class="app-flex app-justify-end app-align-center app-w-30">
      <span class="app-font-size-44 app-font-weight-700">{{ data.count }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  data: {
    type: Object,
  },
});
</script>

<style scoped>
.background {
  color: #fff;
  background: rgb(255, 37, 60);
  background: linear-gradient(
    175deg,
    rgba(255, 37, 60, 1) 12%,
    rgba(254, 92, 109, 1) 58%,
    rgba(241, 239, 240, 1) 100%
  );
}

.animation {
  animation: 3s fade;
  animation-delay: 0.1s;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
