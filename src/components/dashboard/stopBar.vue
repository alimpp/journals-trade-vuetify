<template>
  <div
    class="content app_border_radius app-flex app-flex-column app-px-4 app-py-3 app-mt-5 app-w-100"
  >
    <div
      class="app-flex app-mt-3 app_border_radius app-bg-white app-px-2 app-py-3 app_pointer"
      v-for="item in data"
      :key="item.id"
    >
      <div class="app-flex app-flex-column app-w-50">
        <span class="app-font-size-16 app-font-weight-500 app-color-dark"
          >Coin</span
        >
        <span class="app-font-size-14 app_border_radius app-border py-2 px-1">{{
          item.coin
        }}</span>
        <span
          class="app-font-size-16 app-font-weight-500 app-color-dark app-mt-2"
          >Entry USDT</span
        >
        <span class="app-font-size-14 app_border_radius app-border py-2 px-1">{{
          item.entryUSDT
        }}</span>
      </div>
      <div class="app-flex app-flex-column app-w-50 app-px-2">
        <span class="app-font-size-16 app-font-weight-500 app-color-dark"
          >Take Profit</span
        >
        <span
          class="app-font-size-14 app_border_radius app-border app-color-danger py-2 px-1"
          >{{ item.lossUsdt }} __</span
        >
        <span
          class="app-font-size-16 app-font-weight-500 app-color-dark app-mt-2"
          >State</span
        >
        <span
          class="app-font-size-14 app_border_radius app-bg-danger py-2 px-1"
          >{{ item.state }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});

const title = ref("Full Target Positions");
</script>

<style scoped>
.content {
  height: 455px;
  overflow-y: scroll;
}
.line {
  background: #3236fa23;
  width: 100%;
  height: 1px;
}
</style>
