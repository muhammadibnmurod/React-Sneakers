<script setup lang="ts">
import Image1 from '@/assets/images/img1.png'
</script>

<template>
  <div class="flex items-center">
    <n-image :src="Image1" />
  </div>
  <div class="flex flex-col pl-32 gap-20">
    <div class="flex flex-col leading-[70px]">
      <span class="font-inter font-bold text-[60px] text-[#6e9635] ">Stan Smith <span
          class="text-[#000000]">,</span></span>
      <span class="font-inter font-bold text-[60px]">Forever!</span>
    </div>
    <button class="max-w-[300px] items-center bg-[#A5D364] font-bold text-white py-6 rounded-full text-[24px] font-inter" >Купить</button>
  </div>
</template>

<style scoped></style>