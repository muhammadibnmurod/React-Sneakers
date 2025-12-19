<script setup lang="ts">
import { useCart } from "~/composables/useCart";
import { useDrawer } from "~/composables/useDrawer";

const cart = useCart(); 
const drawer = useDrawer();

const removeFromCart = (id: number) => {
  cart.value = cart.value.filter((item) => item.id !== id);
};
</script>

<template>
  <n-drawer
    v-model:show="drawer"
    placement="right"
    width="550"
    class="bg-white"
  >
    <n-drawer-content>
      <h1 class="text-2xl font-bold mb-4 mt-8 text-[#000000]">Корзина</h1>

      <p v-if="cart.length === 0">Корзина пустая</p>

      <div
        v-for="item in cart"
        :key="item.id"
        class="flex gap-6 mb-4 p-6 items-center border-b pb-2"
      >
        <img :src="item.imgSrc" class="w-24 h-24 object-contain" />
        <div class="flex justify-between w-full">
          <div>
            <p class="text-sm font-[600] max-w-[200px] text-[#000000]">
              {{ item.title }}
            </p>
            <p class="text-gray-500">
              {{ item.price }} USD x {{ item.quantity }}
            </p>
          </div>
          <div class="flex items-end px-2 py-4">
            <button
              @click="removeFromCart(item.id)"
              class="text-red-500 font-bold"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>
