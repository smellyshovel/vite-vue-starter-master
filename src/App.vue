<template>
  <header class="p-4 flex justify-between">
    <nav class="flex gap-2">
      <router-link :to="{ name: 'HomeView' }">{{ t("home") }}</router-link>
      <router-link :to="{ name: 'AboutView' }">{{ t("about") }}</router-link>
    </nav>

    <select v-if="locale" v-model="locale">
      <option v-for="loc in availableLocales" :key="loc" :value="loc">
        {{ t(`locales.${loc}`) }}
      </option>
    </select>
  </header>

  <main class="p-4">
    <router-view />
  </main>
</template>

<script setup lang="ts">
  import { RouterView } from "vue-router";
  import { useI18n } from "vue-i18n";

  const { t, locale, availableLocales } = useI18n();
</script>
