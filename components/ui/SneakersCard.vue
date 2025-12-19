<script setup lang="ts">
import { useCart } from "~/composables/useCart";
import { useDrawer } from "~/composables/useDrawer";

const props = defineProps<{
  title: string;
  price: number;
  imgSrc: string;
}>();

const cart = useCart();
const drawer = useDrawer();

function addToCart() {
  const existing = cart.value.find((i) => i.title === props.title);

  if (existing) {
    existing.quantity++;
  } else {
    cart.value.push({
      id: Date.now(),
      title: props.title,
      price: props.price,
      imgSrc: props.imgSrc,
      quantity: 1,
    });
  }

  drawer.value = true;
}
</script>

<template>
  <div class="bg-[#000000]">
    <img :src="imgSrc" />
    <h3>{{ title }}</h3>
    <p>{{ price }} ₽</p>
    <button @click="addToCart">+</button>
  </div>
</template>
