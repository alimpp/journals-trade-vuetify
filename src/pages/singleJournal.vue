<template>
  <p>{{ journals }}</p>
 
  <p>{{ findJornal }}</p>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { journalsDataStore } from "@/stores/journals/journalsDS.js";

const route = useRoute();
const journalsDS = journalsDataStore();
const routId = route.params.id;

const journals = computed(() => {
  return journalsDS.tableDataSource;
});
console.log(journals);

const findJornal = () => {
  journals.filter(() => {
    return journals.journalId === routId;
  })
};
console.log(findJornal);

onMounted(() => {
  journalsDS.getJournals();
});
</script>
