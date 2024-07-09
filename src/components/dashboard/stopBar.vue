<template>
  <div class="app-border app_border_radius app-flex app-flex-column app-px-2 app-py-3 app-mt-5 app-w-75">
    <span class="app-font-size-18">{{ title }}</span>
    <div class="app-flex app-flex-column app-mt-3" v-for="item in data" :key="item.id">
      <span class="app-font-size-14 app-font-weight-700">Coin</span>
      <span  class="app-font-size-12">{{ item.coin }}</span>
      <span class="app-font-size-14 app-font-weight-700">Time</span>
      <span class="app-font-size-12">{{ item.entryTime }}</span>
      <!-- <span class="app-font-size-14 app-font-weight-700">Date</span>
      <span class="app-font-size-12">{{ item.date }}</span> -->
      <span class="app-font-size-14 app-font-weight-700">Entry USDT</span>
      <span class="app-font-size-12">{{ item.entryUSDT }}</span>
      <span class="app-font-size-14 app-font-weight-700">Loss USDT</span>
       <span class="app-font-size-12">{{ item.lossUsdt }}</span>
      <div class="line app-mt-4"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, } from "vue";

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
.line {
  background: #8481812f;
  width: 100%;
  height: 1px;
}
</style>
