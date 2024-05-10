<template>
  <div>
    <BaseCard
      class="slid-left-animation"
      :loading="loading"
      :title="title"
      :subtitle="subtitle"
      :text="text"
    >
      <template #actions>
        <div class="app-flex app-justify-end app-w-100">
          <v-icon
            class="app_pointer"
            icon="$edit"
            @click="emit('edit')"
          ></v-icon>
          <v-icon
            class="app_pointer mx-2"
            icon="$delete"
            @click="emit('remove')"
          ></v-icon>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

import BaseCard from "@/components/base/baseCard.vue";

const emit = defineEmits(["edit", "remove"]);

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
