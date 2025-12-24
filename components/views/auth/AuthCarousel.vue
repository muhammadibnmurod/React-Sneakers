<template>
  <n-carousel
    trigger="click"
    :autoplay="false"
    class="h-s min-h-[300px] rounded-lg overflow-hidden"
    show-arrow
  >
    <div
      class="absolute flex flex-col left-20 right-20 top-[55px] z-[9999] text-center"
    >
      <span class="font-bold text-[#0A0F1A] dark:text-white text-[30px]">
        {{ $t("auth.slide.title") }}
      </span>
      <span class="text-primary-300">
        {{ $t("auth.slide.description") }}
      </span>
    </div>

    <n-carousel-item
      v-for="(item, index) in carouselList"
      :key="index"
      class="h-full border border-surface-30 bg-surface-20"
    >
      <div
        class="bg-radial-auth dark:bg-dark-radial-auth overflow-hidden w-full h-full flex relative z-[9999]"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            v-if="item.image"
            :src="item.image"
            :alt="`carousel-image-${index}`"
            class="m-auto w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </n-carousel-item>
  </n-carousel>
</template>

<script setup lang="ts">
import { ref } from "vue";

import AuthAiCarousel from "@/assets/images/AuthCarousel/Image1.png";
import AuthAiPereezd from "@/assets/images/AuthCarousel/Image2.png";

const carouselList = ref([{ image: AuthAiCarousel }, { image: AuthAiPereezd }]);
</script>
