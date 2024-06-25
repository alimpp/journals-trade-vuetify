<template>
  <div>
    <div class="app-flex app-flex-column" @click="openState = !openState">
      <div class="app-flex">
        <v-icon icon="$calendar"></v-icon>
        <span class="app-px-1">Date</span>
      </div>
      <div class="select-time app-mt-2">
        <span>{{ selectDate }}</span>
      </div>
    </div>
    <div class="datr-picker-content" v-if="openState">
      <div class="datr-picker">
        <v-date-picker
          v-model="selectDate"
          show-adjacent-months
          :theme="ThemeStatus"
          max-width="368"
        ></v-date-picker>
        <div class="app-flex app-w-100">
          <BaseButton
            class="app-mt-3"
            name="Cancel"
            width="160px"
            height="35px"
            bg="danger"
            :loading="loading"
            @click="cancel()"
            tooltip="Cancel Select Date Operation"
          />
          <BaseButton
            class="app-mt-3 app-mx-2"
            name="Submit"
            width="160px"
            height="35px"
            :loading="loading"
            @click="openState = !openState"
            tooltip="Submit Selected Date"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { themeDataStore } from "@/stores/theme";
import { ref, watch, defineEmits, computed, defineProps, onUpdated } from "vue";
import BaseButton from "../base/baseButton.vue";

const ThemeDS = themeDataStore();
const openState = ref(false);
const selectDate = ref(null);

const ThemeStatus = computed(() => {
  return ThemeDS.theme;
});

const emit = defineEmits(["handleEmitDate"]);

watch(selectDate, () => {
  emit("handleEmitDate", selectDate.value);
});

const cancel = () => {
  selectDate.value = null;
  emit("handleEmitDate", selectDate.value);
  openState.value = false;
};

const props = defineProps({
  date: {
    type: String,
    default: "",
  },
});

onMounted(() => {
  setTimeout(() => {
    if (props.date) {
      selectDate.value = props.date;
    }
  }, 0);
});
</script>

<style scoped>
.datr-picker-content {
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.624);
  flex-direction: column;
}
.datr-picker {
  position: absolute;
}
.select-time {
  width: 100%;
  height: 40px;
  border: 1px solid #a4a4a48b;
  outline-color: #0022ff47;
  border-radius: 5px;
  padding: 7px 8px;
}
</style>
