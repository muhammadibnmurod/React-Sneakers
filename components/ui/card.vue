<template>
  <div class="p-4 rounded-2xl">
    <n-image :src="imgSrc" width="200" height="150" />
    <h3 class="mt-2 font-inter text-[14px] font-[400] max-w-[205px]">{{ title }}</h3>
    <div class="mt-2 justify-between flex items-center w-full max-w-[205px]">
      <div>
        <p>Narxi:</p>
        <p class="text-gray-600">{{ price }} USD</p>
      </div>
      <div>
        <button class=" cursor-pointer px-2 py-4">+</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface props {
  title: string;
  price: number;
  imgSrc: string;
}

defineProps<props>();
</script>
