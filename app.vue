<script setup lang="ts">
import { NConfigProvider, darkTheme } from 'naive-ui'
import { useNaiveLocale } from "~/composable/useNaiveLocale";

const { naiveLocale, naiveDateLocale} = useNaiveLocale();
</script>

<template>
  <NConfigProvider :theme="darkTheme" :locale="naiveLocale" :date-locale="naiveDateLocale">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NConfigProvider>
</template>