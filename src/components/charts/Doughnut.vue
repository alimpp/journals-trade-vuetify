<template>
  <Doughnut :data="data" :options="options" />
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";
import { ref } from "vue";
import { defineProps } from "vue";

ChartJS.register(ArcElement, Tooltip, Legend);

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});

const options = ref({
  responsive: true,
  maintainAspectRatio: false,
});
</script>
