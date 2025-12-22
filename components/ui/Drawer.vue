<script setup lang="ts">
import { computed, watch } from "vue";
import { useCart } from "~/composables/useCart";
import Counter from "@/components/ui/Counter.vue";
const drawer = ref(false);

const cart = useCart();

const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

if (process.client) {
  watch(
    totalPrice,
    (total) => {
      try {
        localStorage.setItem("totalPrice", total.toString());
      } catch (e) {
      }
    },
    { immediate: true }
  );
}

const tax = computed(() => Math.round(totalPrice.value * 0.05));

const removeFromCart = (id: number) => {
  cart.value = cart.value.filter((item) => item.id !== id);
};
</script>

<template>
  <n-drawer v-model:show="drawer" width="450">
    <n-drawer-content title="Корзина" closable class="bg-white text-[#000000]">
      <div v-if="cart.length > 0">
        <div v-for="item in cart" :key="item.id" class="flex items-center gap-4 border p-4 rounded-xl mb-4">
          <img :src="item.imgSrc" class="w-16 h-16 object-contain" />

          <div class="flex flex-col flex-1">
            <p class="text-sm font-semibold">{{ item.title }}</p>
            <div class="flex justify-between items-center mt-2">
              <b class="text-slate-900">{{ item.price }} USD</b>
              <Counter v-model="item.quantity" />
              <button @click="removeFromCart(item.id)" class="text-red-400 hover:text-red-600">
                ×
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center mt-20 text-gray-400">Корзина пустая</div>

      <template #footer>
        <div class="w-full space-y-3">
          <div class="flex justify-between">
            <span>Итого:</span>
            <span class="font-bold">{{ totalPrice }} USD</span>
          </div>
          <div class="flex justify-between">
            <span>Налог 5%:</span>
            <span class="font-bold">{{ tax }} USD</span>
          </div>
          <button class="w-full bg-[#9DD458] text-white py-3 rounded-xl font-bold hover:bg-green-600 transition">
            Оформить заказ
          </button>
        </div>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
  n-drower-content.title {
    color: black;
  }
</style>