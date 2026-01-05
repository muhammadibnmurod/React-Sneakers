<script setup lang="ts">
import { ref, reactive } from "vue";
import type { AuthResponse } from "~/types";
import AuthCarousel from "@/components/views/auth/AuthCarousel.vue";

const register = ref(false);
const loading = ref(false);

const form = reactive({
  email: "",
  username: "",
  password: "",
});

const toggleRegister = () => {
  register.value = !register.value;
  form.email = "";
  form.username = "";
  form.password = "";
};

const handleSubmit = async () => {
  loading.value = true;

  const endpoint = register.value ? "/api/auth/register" : "/api/auth/login";

  try {
    const data = await $fetch<AuthResponse>(endpoint, {
      method: "POST",
      body: form,
    });

    if (data.token) {
      const authCookie = useCookie("auth_token", { maxAge: 60 * 60 * 24 * 7 });
      authCookie.value = data.token;

      await navigateTo("/dashboard");
    }
  } catch (error: any) {
    const msg =
      error.data?.statusMessage || error.statusMessage || "Xatolik yuz berdi";
    alert(msg);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div
    class="flex w-full h-screen border-gray-800 rounded-2xl border-surface-30 shadow-auth-login font-geist overflow-hidden"
  >
    <div
      class="flex flex-1 items-center justify-center px-10 h-full bg-surface-50"
    >
      <div class="flex flex-col items-center gap-10 w-full max-w-[420px]">
        <img src="@/assets/images/Logo.png" class="w-10 h-10" />

        <div class="flex flex-col gap-3 items-center text-center">
          <h2 class="font-bold text-[40px]">Opus</h2>
          <p class="text-[18px] text-[#5E5D5D]">
            Welcome to the world of knowledge
          </p>
        </div>

        <n-form
          :model="form"
          class="w-full"
          size="large"
          @submit.prevent="handleSubmit"
        >
          <n-form-item>
            <n-input
              v-model:value="form.username"
              placeholder="Username"
              class="custom-input border rounded shadow-md text-[#000000]"
            />
          </n-form-item>

          <n-form-item v-if="register">
            <n-input
              v-model:value="form.email"
              placeholder="Email"
              class="custom-input border rounded shadow-md"
            />
          </n-form-item>

          <n-form-item>
            <n-input
              v-model:value="form.password"
              type="password"
              show-password-on="click"
              placeholder="Password"
              class="custom-input border rounded shadow-md"
            />
          </n-form-item>

          <n-button
            type="primary"
            size="large"
            class="w-full !bg-[#111827] !text-white"
            attr-type="submit"
            :loading="loading"
          >
            {{ register ? "Sign up" : "Sign in" }}
          </n-button>
        </n-form>

        <p class="text-sm text-gray-500">
          {{ register ? "Already have an account?" : "Don’t have an account?" }}
          <button
            type="button"
            @click="toggleRegister"
            class="font-semibold text-black ml-1"
          >
            {{ register ? "Sign in" : "Sign up" }}
          </button>
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
  --n-border: #d1d5db;
  --n-border-hover: #9ca3af;
  --n-border-focus: #111827;
}
:deep(.n-input__input-el) {
  color: #000000;
}
:deep(.n-input__input-el::placeholder) {
  color: rgba(0, 0, 0, 0.6);
  opacity: 1;
}
</style>
