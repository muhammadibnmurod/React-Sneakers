<template>
    <div class="flex items-center gap-4 border rounded-full px-3 py-1 h-8">
        <button @click="emit('update:modelValue', modelValue - 1)" :disabled="modelValue <= 1"
            class="text-gray-400 hover:text-black disabled:opacity-20">
            -
        </button>

        <p class="font-bold text-sm min-w-[20px] text-center">{{ modelValue }}</p>

        <button @click="emit('update:modelValue', modelValue + 1)" class="text-gray-400 hover:text-black">
            +
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: number }>();
const emit = defineEmits(['update:modelValue']);
</script>