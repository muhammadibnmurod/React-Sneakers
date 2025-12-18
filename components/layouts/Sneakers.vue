<template>
  <div>
    <h2 class="font-inter font-bold text-3xl mb-8">Все кроссовки</h2>
    <div class="grid grid-cols-4 items-center justify-center px-4 pl-4">
      <Card
        v-for="sneaker in sneakers"
        :key="sneaker.id"
        :title="sneaker.title"
        :price="sneaker.price"
        :imgSrc="sneaker.imgSrc"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from "@/components/ui/card.vue";
import Sneaker1 from "@/assets/images/sneakers/snerakers1.png";
import Sneaker2 from "@/assets/images/sneakers/snerakers2.png";
import Sneaker3 from "@/assets/images/sneakers/snerakers3.png";
import Sneaker4 from "@/assets/images/sneakers/snerakers4.png";




interface Sneaker {
  id: number;
  title: string;
  price: number;
  imgSrc: string;
}

const sneakers: Sneaker[] = [
  {
    id: 1,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imgSrc: Sneaker1,
  },
  {
    id: 1,
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    imgSrc: Sneaker2,
  },
  {
    id: 1,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8400,
    imgSrc: Sneaker3,
  },
    {
    id: 1,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imgSrc: Sneaker4,
  },
];
</script>
