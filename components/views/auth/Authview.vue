<script setup lang="ts">
import AuthCarousel from "./AuthCarousel.vue";
</script>

<template>
  <h1
    class="flex w-full h-[850px] bg-surface-40 rounded-2xl border border-surface-30 shadow-auth-login font-geist"
  >
    <div class="flex flex-1 items-center justify-center px-10 h-full">
      <div class="flex flex-col items-center gap-8">
        <img src="@/assets/images/Logo.png" class="w-10 h-10" />
        <div class="flex flex-col gap-4 items-center">
          <h2 class="font-bold text-[40px]">Sneakers</h2>
          <p class="text-[20px] text-[#5E5D5D]">
            Welcome to the world knowledge
          </p>
        </div>
        <div>
          <n-form-item>
            <n-input />
          </n-form-item>
        </div>
      </div>
    </div>

    <div class="flex-1 h-full flex items-center">
      <div class="w-full h-full flex items-center p-1 rounded">
        <AuthCarousel />
      </div>
    </div>
  </h1>
</template>

<style scoped></style>
