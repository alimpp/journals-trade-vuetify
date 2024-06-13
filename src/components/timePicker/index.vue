<template>
  <div >
    <div class="app-flex app-flex-column" @click="openState = !openState">
<div class="app-flex">
  <v-icon
      class="app_pointer fade_animations"
      @click="HandleChangeTheme"
      >mdi-alarm-plus</v-icon
    >
    <span class="app-px-1">Entry Time</span>
</div>
<span class="app-px-7">{{ selectTime }}</span>
    
  </div>
  <div class="time-picker-content" v-if="openState" >
<div class="time-picker">
  <v-time-picker
  v-model="selectTime"
  format="24hr"
  ></v-time-picker>
</div>
    </div>
  </div>
 </template>
  <script setup>
  import { ref,watch,defineEmits } from 'vue';
  const openState= ref(false);
  const selectTime= ref(null);
  const emit= defineEmits(['handleEmitTime']);
  watch(selectTime,()=>{
    emit('handleEmitTime',selectTime.value)
  })

  </script>

  <style scoped>
  .time-picker-content{
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
  }
  .time-picker{
    position: absolute;

  }
</style>