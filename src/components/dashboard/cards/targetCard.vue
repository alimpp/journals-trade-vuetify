<template>
  <div
    class="app-w-30 app_border_radius app-py-10 app-px-4 app-flex background app-py-8 animation"
  >
    <div class="app-flex app-flex-column app-w-60">
      <span class="app-font-size-20 app-font-weight-600">{{ data.title }}</span>
      <span class="app-font-size-10 app-font-weight-100">{{ data.text }}</span>
    </div>
    <div class="app-flex app-justify-end app-align-center app-w-30">
      <span class="app-font-size-44 app-font-weight-700">{{ data.count }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Object,
  },
});
</script>

<style scoped>
.background {
  color: #353535;
  background: rgb(85, 255, 37);
  background: linear-gradient(
    175deg,
    rgb(251, 247, 8) 12%,
    rgb(237, 246, 61) 53%,
    rgba(234, 241, 250, 1) 94%
  );
}

.animation {
  animation: 4s fade;
  animation-delay: 0.2s;
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
