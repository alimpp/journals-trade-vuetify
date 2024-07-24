<template>
  <div
    class="content app_border_radius app-flex app-flex-column app-px-4 app-py-3 app-mt-5 app-w-100"
  >
    <span v-if="data.length == 0">There is not any full target</span>
    <div
      v-else
      class="app-flex app-mt-3 app_border_radius app-bg-white app-px-2 app-py-3 app_pointer app-w-100"
      v-for="item in data"
      :key="item.id"
      @click="getSingle(item.journalId)"
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
          class="app-font-size-14 app_border_radius app-border app-color-secondary py-2 px-1"
          >{{ item.takeProfit }}</span
        >
        <span
          class="app-font-size-16 app-font-weight-500 app-color-dark app-mt-2"
          >State</span
        >
        <span
          class="app-font-size-14 app_border_radius app-bg-secondary py-2 px-1"
          >{{ item.state }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});

const router = useRouter();

const getSingle = (id) => {
  router.push(`/singleJournal/${id}`);
};
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
