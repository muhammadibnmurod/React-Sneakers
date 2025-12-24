<script setup lang="ts">
import { ref } from "vue";
import AuthCarousel from "./AuthCarousel.vue";

const form = ref({
  email: "",
  password: "",
  remember: false,
});
</script>

<template>
  <div
    class="flex w-full h-full bg-surface-40 rounded-2xl border-surface-30 shadow-auth-login font-geist overflow-hidden">
    <div class="flex flex-1 items-center justify-center px-10 h-full bg-surface-50">
      <div class="flex flex-col items-center gap-10 w-full max-w-[420px]">
        <img src="@/assets/images/Logo.png" class="w-10 h-10" />

        <div class="flex flex-col gap-3 items-center text-center">
          <h2 class="font-bold text-[40px]">Opus</h2>
          <p class="text-[18px] text-[#5E5D5D]">
            Welcome to the world of knowledge
          </p>
        </div>

        <n-form :model="form" class="w-full" size="large">
          <n-form-item>
            <n-input v-model:value="form.email" placeholder="Email"
              class="border rounded placeholder:!text-[#000000] !text-[#000000]" />
          </n-form-item>

          <n-form-item>
            <n-input v-model:value="form.password" placeholder="Password" type="password"
              class="border rounded placeholder:!text-[#000000] !text-[#000000]" show-password-on="click" />
          </n-form-item>

          <n-button type="primary" size="large" class="w-full !bg-[#111827]  text-white">
            Sign in
          </n-button>
        </n-form>

        <p class="text-sm text-gray-500">
          Don’t have an account?
          <a href="#" class="font-semibold text-black">Sign up</a>
        </p>
      </div>
    </div>

    <div class="flex-1 h-full">
      <AuthCarousel />
    </div>
  </div>
</template>

<style scoped>
.custom-input {
  --n-placeholder-color: #000000;
  --n-text-color: #000000;
}
</style>
