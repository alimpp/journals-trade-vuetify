<template>
  <div class="app-flex app-flex-column app-container app-w-100">
    <BaseDivider content="DASHBOARD" width="105px" />
    <div class="app-flex app-w-100 app-mt-5">
      <TotalCard :data="cardsDataSource" />
      <StopCard :data="cardsDataSource" class="app-mx-5" />
      <TargetCard :data="cardsDataSource" />
    </div>
    <div class="app-flex app-w-100">
      <div
        class="app-flex app-justify-center app-align-center app-w-40 app-pt-10 app_border_radius app-mt-5"
      >
        <div class="app-flex app-w-100 app-mb-5">
          <Doughnut :data="data" />
        </div>
      </div>
      <div class="app-flex app-w-60 app-align-center">
        <FullTargetBar :data="fullTargetsDataSource" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Doughnut from "@/components/charts/Doughnut.vue";
import BaseDivider from "@/components/base/baseDivider.vue";
import TotalCard from "@/components/dashboard/cards/totalCard.vue";
import StopCard from "@/components/dashboard/cards/stopCard.vue";
import TargetCard from "@/components/dashboard/cards/targetCard.vue";
import FullTargetBar from "@/components/dashboard/fullTargetBar.vue";

const data = ref({
  labels: ["Total Positions", "Targets", "Stop Loss"],
  datasets: [
    {
      backgroundColor: ["#7d70f1", "#59bc1b", "#ff3333"],
      data: [80, 20, 60],
    },
  ],
});

const cardsDataSource = computed(() => {
  return;
});

const fullTargetsDataSource = computed(() => {
  return;
});
</script>
