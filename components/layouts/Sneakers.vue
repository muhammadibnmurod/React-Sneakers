<template>
  <div>
    <h2 class="font-inter font-bold text-3xl mb-8">Все кроссовки</h2>
    <div class="grid grid-cols-4 items-center justify-center px-4 pl-4">
      <Card
        v-for="sneaker in sneakers"
        :key="sneaker.id"
        :id="sneaker.id"
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
import Sneaker5 from "@/assets/images/sneakers/snerakers5.png";
import Sneaker6 from "@/assets/images/sneakers/snerakers6.png";
import Sneaker7 from "@/assets/images/sneakers/snerakers7.png";
import Sneaker8 from "@/assets/images/sneakers/snerakers8.png";
import Sneaker9 from "@/assets/images/sneakers/snerakers9.png";
import Sneaker10 from "@/assets/images/sneakers/snerakers10.png";

interface Sneaker {
  id: number;
  title: string;
  price: number;
  imgSrc: string;
}

onMounted(() => {
  fetchPokemon();
});

async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await response.json();
  console.log(data);
}

const sneakers: Sneaker[] = [
  {
    id: 1,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12.999,
    imgSrc: Sneaker1,
  },
  {
    id: 2,
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12.999,
    imgSrc: Sneaker2,
  },
  {
    id: 3,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8.4,
    imgSrc: Sneaker3,
  },
  {
    id: 4,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8.999,
    imgSrc: Sneaker4,
  },
  {
    id: 5,
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 15.119,
    imgSrc: Sneaker5,
  },
  {
    id: 6,
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 11.299,
    imgSrc: Sneaker6,
  },
  {
    id: 7,
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 10.799,
    imgSrc: Sneaker7,
  },
  {
    id: 8,
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: 16.499,
    imgSrc: Sneaker8,
  },
  {
    id: 9,
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    price: 13.999,
    imgSrc: Sneaker9,
  },
  {
    id: 10,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8.499,
    imgSrc: Sneaker1,
  },
  {
    id: 11,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8.999,
    imgSrc: Sneaker4,
  },
  {
    id: 12,
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: 11.299,
    imgSrc: Sneaker10,
  },
];
</script>
