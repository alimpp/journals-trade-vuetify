<template>
  <div
    class="menu-items-container app-flex app-justify-end"
    v-if="isOpen"
    @click.self="emit('closeMenu')"
  >
    <div class="menu-content app-bg-white slid-left-animation">
      <div class="w-100 app-flex app-justify-start px-2 py-2">
        <i
          class="bi bi-x-lg app-font-size-20 app_pointer"
          @click="emit('closeMenu')"
        ></i>
      </div>
      <div class="w-100 app-flex app-justify-center py-5">
        <span class="app-font-size-14 app-font-weight-600 app-color-primary">
          JOURNAL TRADE
        </span>
      </div>

      <div
        class="w-100 app-flex app-flex-column app-align-center app-justify-center py-5"
      >
        <BaseAvatar :name="username" />
        <span class="app-font-size-14 app-font-weight-600 py-2">{{
          username
        }}</span>
      </div>

      <div
        class="w-100 app-flex app-flex-column app-justify-center app-align-center py-8 app_pointer"
      >
        <span
          @click="navigateTo(item.path)"
          class="app-font-size-14 app-font-weight-600 py-2"
          v-for="item in menuItems"
          :key="item.id"
          >{{ item.title }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { defineProps, defineEmits, ref, computed } from "vue";
import { profileDataStore } from "@/stores/profile/profileDS.js";

import BaseAvatar from "@/components/base/baseAvatar.vue";

const emit = defineEmits(["closeMenu"]);
const router = useRouter();
const profileDS = profileDataStore();

const username = computed(() => {
  return profileDS.user.username;
});

const menuItems = ref([
  { id: "000", title: "Journals", path: "/journals" },
  { id: "002", title: "Create Journal", path: "/create-journal" },
  { id: "003", title: "Coins List", path: "/coins-list" },
  { id: "004", title: "Watch List", path: "/watch-list" },
  { id: "005", title: "Holder", path: "/holder" },
  { id: "001", title: "Profile", path: "/profile" },
]);

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const navigateTo = (path) => {
  router.push(`${path}`);
  emit("closeMenu");
};
</script>

<style lang="scss" scoped>
.menu-items-container {
  width: 100%;
  height: 100%;
  background: rgba(5, 5, 5, 0.816);
  position: fixed;
  z-index: 1;
}

.menu-items-container .menu-content {
  width: 350px;
  height: 100vh;
  position: absolute;
  z-index: 9999;
}
</style>
