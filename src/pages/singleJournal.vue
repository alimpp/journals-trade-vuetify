<template>
  <p>{{ journalsDS.tableDataSource }}</p>
 
  <p>{{ findJornal.journalId }}</p>
</template>

<script setup>
import { onMounted, computed,reactive } from "vue";
import { useRoute } from "vue-router";
import { journalsDataStore } from "@/stores/journals/journalsDS.js";

const route = useRoute();
const journalsDS = journalsDataStore();
const routId = route.params.id;

const journals = journalsDS.tableDataSource;

console.log(journals);


const findJornal = journals.find((item) => {
    return item.journalId === routId;
  });
console.log(findJornal.journalId);

onMounted(() => {
  journalsDS.getJournals();
});
</script>
