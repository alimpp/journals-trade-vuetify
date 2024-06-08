<template>
  <div class="app-border app_border_radius app-flex app-flex-column">
    <span class="app-font-size-14">{{ title }}</span>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({});

const title = ref("Full Target Positions");
</script>
