<template>
  <div class="app-flex app-flex-column app-container app-w-100">
    <BaseDivider content="DASHBOARD" width="105px" />
    <div class="app-flex app-w-100">
      <div
        class="app-flex app-justify-center app-align-center app-w-40 app-pt-10 app_border_radius app-mt-5"
      >
        <div class="app-flex app-w-100 app-mb-5">
          <Doughnut :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Doughnut from "@/components/charts/Doughnut.vue";
import BaseDivider from "@/components/base/baseDivider.vue";

const data = ref({
  labels: ["Total Positions", "Targets", "Stop Loss"],
  datasets: [
    {
      backgroundColor: ["#7d70f1", "#59bc1b", "#ff3333"],
      data: [80, 20, 60],
    },
  ],
});
</script>
