<script setup lang="ts">
import Logo from "@/assets/images/Logo.png";
import { LocalGroceryStoreOutlined } from "@vicons/material";
import { MdHeartEmpty } from "@vicons/ionicons4";
import { PersonCircleOutline } from "@vicons/ionicons5";
import type { DrawerPlacement } from "naive-ui";
import Drawer from "@/components/ui/Drawer.vue";

const showDrawer = ref(false);
</script>

<template>
  <div class="flex justify-between items-center w-full">
    <div class="flex items-center gap-3">
      <div>
        <n-image :src="Logo" width="80" height="80" />
      </div>
      <div class="flex flex-col">
        <h2 class="font-bold text-[30px] font-sans">React Sneakers</h2>
        <p class="font-sans text-[18px] text-[#9D9D9D]">
          Магазин лучших кроссовок
        </p>
      </div>
    </div>
    <div class="flex items-center justify-between gap-10">
      <button
        class="flex items-center cursor-pointer gap-2"
        @click="showDrawer = true"
      >
        <n-icon size="30" color="#9B9B9B">
          <LocalGroceryStoreOutlined />
        </n-icon>
        <span class="font-inter font-semibold text-[16px] text-[#5C5C5C]"
          >1205 руб.</span
        >
      </button>
      <div class="flex items-center cursor-pointer gap-2">
        <n-icon size="30" color="#9B9B9B">
          <MdHeartEmpty />
        </n-icon>
        <span class="font-inter font-semibold text-[16px] text-[#5C5C5C]"
          >Закладки</span
        >
      </div>
      <div class="flex items-center cursor-pointer gap-2">
        <n-icon size="30" color="#9B9B9B">
          <PersonCircleOutline />
        </n-icon>
        <span class="font-inter font-semibold text-[16px] text-[#5C5C5C]"
          >Профиль</span
        >
      </div>
      <div></div>
      <div></div>
    </div>
  </div>

  <Drawer v-model:show="showDrawer" />
</template>

<style scoped></style>
