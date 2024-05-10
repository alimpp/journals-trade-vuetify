<template>
  <div
    class="create-profile-page app-flex-column app-flex app-container app-w-100 app-h-100 slid-left-animation"
  >
    <div class="app-flex">
      <div class="app-w-200-px">
        <BaseSelect label="Select Coin" type="outlined" />
      </div>
      <div class="app-w-200-px mx-2">
        <BaseSelect label="state" type="outlined" />
      </div>
    </div>
    <div class="app-flex app-mt-5">
      <div class="app-w-200-px">
        <BaseInput label="Entry Price" />
      </div>
      <div class="app-w-200-px mx-2">
        <BaseInput label="Stop Loss" />
      </div>
      <div class="app-w-200-px mx-2">
        <BaseInput label="Target 1" />
      </div>
      <div class="app-w-200-px mx-2">
        <BaseInput label="Target 2" />
      </div>
      <div class="app-w-200-px mx-2">
        <BaseInput label="Target 3" />
      </div>
    </div>
    <div class="app-flex app-mt-5">
      <div class="app-w-200-px">
        <BaseInput label="Target 1" />
      </div>
      <div class="app-w-200-px mx-2">
        <BaseInput label="Target 2" />
      </div>
      <div class="app-w-200-px mx-2">
        <BaseInput label="Target 3" />
      </div>
    </div>
    <div class="app-flex">
      <div>
        <BaseTextArea label="Description" />
      </div>
      <div class="app-w-200-px mx-2">
        <BaseInput label="Flag" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "@/components/base/baseInput.vue";
import BaseTextArea from "@/components/base/baseTextArea.vue";
import BaseSelect from "@/components/base/baseSelect.vue";
</script>
