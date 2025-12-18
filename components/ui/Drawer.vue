<script setup lang="ts">
import { useCart } from "~/composables/useCart";
import { useDrawer } from "~/composables/useDrawer";

const cart = useCart();
const drawer = useDrawer();
</script>

<template>
  <n-drawer v-model:show="drawer" placement="right" width="550">
    <n-drawer-content>
      <h1 class="text-2xl font-bold mb-4">Корзина</h1>

      <p v-if="cart.length === 0">Корзина пустая</p>

      <div v-for="item in cart" :key="item.id" class="flex gap-4 mb-4">
        <img :src="item.imgSrc" class="w-20 h-20" />
        <div>
          <p class="font-bold">{{ item.title }}</p>
          <p>{{ item.price }} ₽ × {{ item.quantity }}</p>
        </div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>
