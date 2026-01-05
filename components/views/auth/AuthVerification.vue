<script setup lang="ts">
import { ref, reactive } from "vue";

const props = defineProps<{
  email: string;
}>();

const emit = defineEmits<{
  close: [];
}>();

const verificationCode = ref("");
const loading = ref(false);
const resendLoading = ref(false);

const handleVerification = async () => {
  if (!verificationCode.value || verificationCode.value.length < 6) {
    alert("Iltimos, 6 raqamli kodni kiriting");
    return;
  }

  loading.value = true;
  try {
    const { data, error, execute } = await useApiService().Auth.verifyEmail({
      email: props.email,
      otpCode: verificationCode.value,
    });

    if (error.value) {
      alert(error.value.message || "Verification xatoligi");
      return;
    }
    await execute();
    alert("Email muvaffaqiyatli tasdiqlandi!");
    emit("close");
    await navigateTo("/dashboard");
  } catch (error: any) {
    alert(error.data?.statusMessage || "Verification xatoligi");
  } finally {
    loading.value = false;
  }
};

const handleResendOtp = async () => {
  resendLoading.value = true;
  try {
    const { data, error } = await useApiService().Auth.resendOtp({
      email: props.email,
    });

    if (error.value) {
      alert(error.value.message || "Kod yuborishda xatolik");
      return;
    }

    alert("Yangi kod yuborildi!");
  } catch (error: any) {
    alert(error.data?.statusMessage || "Kod yuborishda xatolik");
  } finally {
    resendLoading.value = false;
  }
};

const handleClose = () => {
  emit("close");
};
</script>

<template>
  <n-modal :show="true" @update:show="handleClose" class="verification-modal">
    <n-card
      style="width: 600px"
      title="Email Verification"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <div class="flex flex-col gap-6">
        <div class="text-center">
          <h3 class="text-xl font-semibold mb-2">Emailni tasdiqlang</h3>
          <p class="text-gray-600">
            {{ email }} manziliga yuborilgan 6 raqamli kodni kiriting
          </p>
        </div>

        <div class="flex flex-col gap-4">
          <n-form-item label="Verification Code">
            <n-input
              v-model:value="verificationCode"
              placeholder="6 raqamli kodni kiriting"
              maxlength="6"
              clearable
              size="large"
            />
          </n-form-item>

          <div class="flex gap-3">
            <n-button
              type="primary"
              size="large"
              class="flex-1"
              :loading="loading"
              @click="handleVerification"
            >
              Tasdiqlash
            </n-button>

            <n-button
              size="large"
              :loading="resendLoading"
              @click="handleResendOtp"
            >
              Qayta yuborish
            </n-button>
          </div>
        </div>

        <div class="text-center">
          <n-button text @click="handleClose" class="text-gray-500">
            Bekor qilish
          </n-button>
        </div>
      </div>
    </n-card>
  </n-modal>
</template>

<style scoped>
.verification-modal :deep(.n-card) {
  max-width: 90vw;
}
</style>
