<script setup lang="ts">
import { ref } from "vue";
import Plus from "@/assets/icons/Vector.png";
import { useCart, type CartItem } from "~/composables/useCart";

const cart = useCart();

const props = defineProps<{
  id: number;
  title: string;
  price: number;
  imgSrc: string;
}>();

const showImage = ref(false);
let timeoutId: number | null = null;

const handleClick = () => {
  if (showImage.value) return;

  const itemExists = cart.value.find((item) => item.id === props.id);

  if (itemExists) {
    itemExists.quantity++;
  } else {
    cart.value.push({
      id: props.id,
      title: props.title,
      price: props.price,
      imgSrc: props.imgSrc,
      quantity: 1,
    });
  }

  showImage.value = true;

  if (timeoutId) clearTimeout(timeoutId);

  timeoutId = window.setTimeout(() => {
    showImage.value = false;
    timeoutId = null;
  }, 3000);
};
</script>

<template>
  <div class="p-4 rounded-2xl hover:shadow-lg transition">
    <n-image :src="imgSrc" width="200" height="150" class="mx-auto" />

    <h3 class="mt-2 font-inter text-[14px] font-[400] max-w-[205px]">
      {{ title }}
    </h3>

    <div
      class="mt-2 justify-between flex items-center w-full max-w-[205px] h-6"
    >
      <div>
        <p class="font-inter font-[500] text-[15px] text-[#8D8D8D]">Цена:</p>
        <p class="font-inter font-bold text-xl">{{ price }} USD</p>
      </div>

      <div>
        <button
          class="cursor-pointer rounded-lg p-2 hover:bg-gray-50 transition"
          @click="handleClick"
        >
          <img v-if="!showImage" class="w-3 h-3" :src="Plus" alt="Add" />
          <IconSelectTrue v-else class="text-green-500 w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</template>
