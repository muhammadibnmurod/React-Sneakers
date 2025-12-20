<script setup lang="ts">
import { useCart } from "~/composables/useCart";
import { useDrawer } from "~/composables/useDrawer";
import { useRouter } from "vue-router";

const cart = useCart();
const drawer = useDrawer();
const router = useRouter();

const goToSneakers = () => {
  router.push("/sneakers");
};

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
    <n-drawer-content class="bg-white p-4">
      <!-- Yuqori qism -->
      <template #header>
        <h1 class="text-2xl font-bold text-[#000000] mb-4">Корзина</h1>

        <p v-if="cart.length === 0">Корзина пустая</p>

        <div
          v-for="item in cart"
          :key="item.id"
          class="flex gap-6 mb-4 p-6 items-center border-b"
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
            <button
              @click="removeFromCart(item.id)"
              class="text-red-500 font-bold"
            >
              X
            </button>
          </div>
        </div>
      </template>

      <!-- Pastki qism -->
      <template #footer>
        <div class="border-t p-4 bg-white mt-4 h-full w-full">
          <div class="flex flex-col">
            <div class="flex justify-between mb-2">
              <h2 class="text-[#000000]">Итого:</h2>
              <p class="font-bold text-[#000000]">21 498 руб.</p>
            </div>
            <div class="flex justify-between mb-2">
              <h2 class="text-[#000000]">Налог 5%:</h2>
              <p class="font-bold text-[#000000]">1 074 руб.</p>
            </div>
            <button
              class="text-[#000000] px-1 py-4 mt-2 border rounded-3xl bg-[#9DD458]"
              @click="goToSneakers"
            >
              <span class="text-white font-inter font-[500] text-[18px]">
                Оформить заказ
              </span>
            </button>
          </div>
        </div>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>
