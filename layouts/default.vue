<script setup lang="ts">
import Header from "~/components/layouts/Header.vue";
import Main from "~/components/layouts/Main.vue";
import Sneakers from "~/components/layouts/Sneakers.vue";
</script>

<template>
  <div class="flex flex-col h-screen p-12 w-full gap-14">
    <Header />
    <Main class="p-16" />
    <Sneakers class="p-16" />
  </div>
</template>

<style scoped></style>
