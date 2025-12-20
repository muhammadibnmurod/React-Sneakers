<script setup lang="ts">
import Image1 from "@/assets/images/img1.png";
import Image2 from "@/assets/images/image2.png";
</script>

<template>
  <div class="flex gap-10 h-full rounded-lg">
    <div>
      <div class="flex items-center justify-between">
        <n-image :src="Image1" />
      </div>
      <div class="flex flex-col pl-32 gap-20 max-w-[500px]">
        <div class="flex flex-col leading-[70px]">
          <span class="font-inter font-bold text-[60px] text-[#6e9635]"
            >Stan Smith <span class="text-[#000000]">,</span></span
          >
          <span class="font-inter font-bold text-[60px]">Forever!</span>
        </div>
        <button
          class="max-w-[300px] items-center bg-[#A5D364] font-bold text-white py-6 rounded-full text-[24px] font-inter"
        >
          Купить
        </button>
      </div>
    </div>
    <div class="flex items-end">
      <n-image width="1100" :src="Image2" />
    </div>
  </div>
</template>

<style scoped></style>
