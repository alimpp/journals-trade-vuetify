<template>
  <div
    class="content app-border app_border_radius app-flex app-flex-column app-px-4 app-py-3 app-mt-5 app-w-100"
  >
    <span class="app-font-size-20 app-font-weight-500">{{ title }}</span>
    <div
      class="app-flex app-flex-column app-mt-3 app_border_radius app-bg-blur-pro app-px-2 app-py-3"
      v-for="item in data"
      :key="item.id"
    >
      <span class="app-font-size-18 app-font-weight-500">Coin</span>
      <span class="app-font-size-14 app_border_radius app-bg-light py-2 px-1">{{ item.coin }}</span>
      <span class="app-font-size-18 app-font-weight-500">Entry USDT</span>
      <span class="app-font-size-14 app_border_radius app-bg-light py-2 px-1">{{ item.entryUSDT }}</span>
      <span class="app-font-size-18 app-font-weight-500">Loss USDT</span>
      <span class="app-font-size-14 app_border_radius app-bg-light py-2 px-1">{{ item.lossUsdt }}</span>
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
console.log(props.data);
const title = ref("Stoped Positions");
</script>

<style scoped>
.content {
  height: 455px;
  overflow-y: scroll;
}
.line {
  background: #8481812f;
  width: 100%;
  height: 1px;
}
</style>
