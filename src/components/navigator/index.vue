<template>
  <div class="index-navigator app-flex">
    <div class="content app-flex app-justify-start app-align-center px-2">
      <i
        class="bi bi-list app-font-size-20 app_pointer"
        @click="menuState = true"
      ></i>
      <BaseAvatar name="Alex" />
      <span class="app-font-size-14 app-font-weight-700 app-color-dark"
        >Alex Addams</span
      >
    </div>
    <div class="logo-content app-flex app-justify-end app-align-center px-2">
      <span class="app-font-size-14 app-font-weight-600 app-color-primary">
        JOURNAL TRADE
      </span>
    </div>
    <MenuItems :isOpen="menuState" @closeMenu="menuState = false" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import MenuItems from "@/components/menuItems/index.vue";
import BaseAvatar from "@/components/base/baseAvatar.vue";

const menuState = ref(false);
</script>

<style lang="scss" scoped>
.index-navigator {
  width: 100%;
  height: 10vh;
  // border-bottom: 1px solid #cfceced0;
}

.index-navigator .logo-content {
  width: 200px;
  height: 50px;
}

.index-navigator .content {
  width: 100%;
  height: 50px;
}
</style>
