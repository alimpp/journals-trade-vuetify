<template>
  <div>
    <div class="app-flex app-flex-column" @click="openState = !openState">
      <div class="app-flex">
        <v-icon class="app_pointer fade_animations">mdi-alarm-plus</v-icon>
        <span class="app-px-1">Entry Time</span>
      </div>
      <div class="select-time app-mt-2">
        <span>{{ selectTime }}</span>
      </div>
    </div>
    <div class="time-picker-content" v-if="openState">
      <div class="time-picker">
        <v-time-picker
          v-model="selectTime"
          format="24hr"
          :theme="ThemeStatus"
        ></v-time-picker>
        <div class="app-flex app-w-100">
          <BaseButton
            class="app-mt-3"
            name="Cancel"
            width="160px"
            height="35px"
            bg="danger"
            :loading="loading"
            @click="cancel()"
            tooltip="Cancel Select Time Operation"
          />
          <BaseButton
            class="app-mt-3 app-mx-2"
            name="Submit"
            width="160px"
            height="35px"
            :loading="loading"
            @click="openState = !openState"
            tooltip="Submit Entry Time"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { themeDataStore } from "@/stores/theme";
import {
  ref,
  watch,
  defineEmits,
  computed,
  onMounted,
  defineProps,
} from "vue";
import BaseButton from "../base/baseButton.vue";

const ThemeDS = themeDataStore();
const openState = ref(false);
const selectTime = ref(null);

const ThemeStatus = computed(() => {
  return ThemeDS.theme;
});

const emit = defineEmits(["handleEmitTime"]);

watch(selectTime, () => {
  emit("handleEmitTime", selectTime.value);
});

const cancel = () => {
  selectTime.value = null;
  emit("handleEmitTime", selectTime.value);
  openState.value = false;
};

const props = defineProps({
  time: {
    type: String,
    default: "",
  },
});


onMounted(() => {
  setTimeout(() => {
    if (props.time) {
      selectTime.value = props.time;
    }
  }, 0);
});
</script>

<style scoped>
.time-picker-content {
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
.time-picker {
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
