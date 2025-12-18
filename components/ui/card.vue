<template>
  <div class="p-4 rounded-2xl">
    <n-image :src="imgSrc" width="200" height="150" />

    <h3 class="mt-2 font-inter text-[14px] font-[400] max-w-[205px]">
      {{ title }}
    </h3>

    <div class="mt-2 justify-between flex items-center w-full max-w-[205px]">
      <div>
        <p class="font-inter font-[500] text-[15px] text-[#8D8D8D]">Цена:</p>
        <p class="font-inter font-bold text-xl">{{ price }} USD</p>
      </div>

      <div>
        <button class="cursor-pointer px-2 py-4" @click="handleClick">
          <span v-if="!showImage"><img class="w-3 h-3 text-[#D3D3D3]" :src="Plus" alt="Loading..."></span>
          <img v-else :src="SelectTrue" alt="loading..." class="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectTrue from "@/assets/icons/selectTrue.svg";
import Plus from '@/assets/icons/Vector.png'

const showImage = ref(false);
let timeoutId: number | null = null;

const handleClick = () => {
  if (showImage.value) return;

  showImage.value = true;

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = window.setTimeout(() => {
    showImage.value = false;
    timeoutId = null;
  }, 3000);
};

interface Props {
  title: string;
  price: number;
  imgSrc: string;
}

defineProps<Props>();
</script>
