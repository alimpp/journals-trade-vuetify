<template>
  <div class="base-modal-content wh-full">
    <div
      class="modal-content slid-up-animation app-bg-white"
      :class="{ 'wh-full': fullScreen }"
    >
      <slot name="modalContent"></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

cont props = defineProps({
    fullScreen: {
        type: {
            type: Boolean,
            default: false
        }
    }
})
</script>

<style scoped lang="scss">
.base-modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  .modal-content {
    position: absolute;
    z-index: 10;
    width: 380px;
    height: 400px;
  }
}
</style>
