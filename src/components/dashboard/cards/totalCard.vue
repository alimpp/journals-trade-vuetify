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

const props = defineProps({
  data: {
    type: Object,
  },
});
</script>

<style scoped>
.background {
  color: #fff;
  background: rgb(37, 74, 255);
  background: linear-gradient(
    175deg,
    rgba(37, 74, 255, 1) 12%,
    rgba(92, 123, 254, 1) 53%,
    rgba(190, 219, 255, 1) 94%
  );
}

.animation {
  animation: 0.5s fade;
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
