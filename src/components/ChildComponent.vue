<template>
  <h1>{{ t("vite-vue-starter-master") }}</h1>
  <h2>{{ t("child-component") }}</h2>
</template>

<script setup lang="ts">
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();
</script>
